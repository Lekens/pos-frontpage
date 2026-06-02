# POS-Choice Marketing Site — API Integration Spec

## Overview

The marketing site (`pos-front-page`) is a Next.js 15 static site. The only server-side API interaction is the **Contact / Demo Request form**. Everything else is static content.

---

## Contact Form

### Form Fields

| Field | Type | Required | Validation |
|-------|------|----------|-----------|
| `name` | string | ✅ | 2–80 characters |
| `phone` | string | ✅ | Nigerian phone: `^(\+234\|0)[789]\d{9}$` |
| `email` | string | ✅ | Valid email, max 254 chars |
| `storeType` | enum | ✅ | `supermarket`, `mini-mart`, `pharmacy`, `restaurant`, `other` |
| `message` | string | ❌ | Max 500 characters |
| `captchaToken` | string | ✅ | hCaptcha token (see CAPTCHA section) |

### API Endpoint

```
POST /api/contact
Content-Type: application/json
```

This is a **Next.js API Route** (`/app/api/contact/route.ts`) — not the POS backend.

### Request Body

```json
{
  "name": "Chioma Okafor",
  "phone": "08031234567",
  "email": "chioma@store.ng",
  "storeType": "supermarket",
  "message": "I want to see how it handles multiple cashiers.",
  "captchaToken": "P0_eyJ..."
}
```

### Success Response — 200 OK

```json
{
  "success": true,
  "message": "Thanks Chioma! We'll contact you within 24 hours."
}
```

### Error Responses

| HTTP | Code | Message | When |
|------|------|---------|------|
| 400 | `VALIDATION_ERROR` | Field-specific error messages | Missing/invalid fields |
| 429 | `RATE_LIMITED` | "Too many requests, please try again in 1 hour." | Rate limit hit |
| 422 | `CAPTCHA_FAILED` | "Could not verify you're human. Please try again." | hCaptcha verification failed |
| 500 | `SERVER_ERROR` | "Something went wrong. Please WhatsApp us instead." | Internal error |

```json
{
  "success": false,
  "code": "VALIDATION_ERROR",
  "errors": {
    "phone": "Enter a valid Nigerian phone number (e.g. 08031234567)",
    "email": "Enter a valid email address"
  }
}
```

---

## CAPTCHA

Use **hCaptcha** (free tier, GDPR-compliant, works in Nigeria without VPN):

- **Why hCaptcha over reCAPTCHA:** Google reCAPTCHA v3 can fail silently in Nigeria due to Google service blocks on some ISPs. hCaptcha is more reliable.
- **Integration:** `@hcaptcha/react-hcaptcha` npm package

### Frontend Integration

```tsx
import HCaptcha from '@hcaptcha/react-hcaptcha'

// In form component
<HCaptcha
  sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
  onVerify={(token) => setValue('captchaToken', token)}
  onExpire={() => setValue('captchaToken', '')}
  theme="dark"
/>
```

### Server-side Verification

```ts
// app/api/contact/route.ts
async function verifyCaptcha(token: string): Promise<boolean> {
  const response = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.HCAPTCHA_SECRET_KEY!,
      response: token,
    }),
  })
  const data = await response.json()
  return data.success === true
}
```

### Environment Variables

```bash
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_site_key   # Public — safe to expose
HCAPTCHA_SECRET_KEY=your_secret_key            # Private — server-side only
```

---

## Rate Limiting

Implemented via Upstash Redis (free tier) or simple in-memory map.

### Strategy: IP-based + Phone-based

```
Limit per IP:    5 requests per hour
Limit per phone: 3 requests per 24 hours
```

### Implementation (Next.js Middleware)

```ts
// Using Upstash Rate Limit (recommended for Vercel)
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'),
  analytics: true,
})

// In route handler:
const identifier = request.headers.get('x-forwarded-for') ?? 'anonymous'
const { success } = await ratelimit.limit(identifier)
if (!success) {
  return Response.json({ success: false, code: 'RATE_LIMITED', message: '...' }, { status: 429 })
}
```

### Fallback (No Redis — development / simple deploy)

```ts
// Simple in-memory map (not persistent across serverless restarts)
const attempts = new Map<string, { count: number; resetAt: number }>()
```

---

## Lead Delivery

On successful form submission, the lead is delivered via:

### 1. WhatsApp notification (primary)

Uses the **Meta WhatsApp Business API** (free tier available) or **CallMeBot** (free, no account needed for testing):

```ts
// CallMeBot (for quick setup)
const msg = `New Demo Request!\nName: ${name}\nPhone: ${phone}\nStore type: ${storeType}`
const url = `https://api.callmebot.com/whatsapp.php?phone=ADMIN_PHONE&text=${encodeURIComponent(msg)}&apikey=API_KEY`
await fetch(url)
```

### 2. Email notification (backup)

Uses **Resend** (free: 3,000 emails/month — sufficient for a SaaS marketing site):

```ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
await resend.emails.send({
  from: 'leads@poschoice.ng',
  to:   'hello@poschoice.ng',
  subject: `New Demo Request — ${name} (${storeType})`,
  text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nStore: ${storeType}\nMessage: ${message}`,
})
```

### 3. Simple database log (audit trail)

Store in a free **PlanetScale** or **Supabase** table:

```sql
CREATE TABLE demo_requests (
  id         SERIAL PRIMARY KEY,
  name       VARCHAR(80)  NOT NULL,
  phone      VARCHAR(15)  NOT NULL,
  email      VARCHAR(254) NOT NULL,
  store_type VARCHAR(20)  NOT NULL,
  message    TEXT,
  created_at TIMESTAMPTZ  DEFAULT NOW(),
  ip_address VARCHAR(45)
);
```

---

## Environment Variables Summary

```bash
# hCaptcha
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=
HCAPTCHA_SECRET_KEY=

# Resend (email)
RESEND_API_KEY=

# Upstash Redis (rate limiting)
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Lead notification (WhatsApp)
CALLMEBOT_PHONE=
CALLMEBOT_API_KEY=
```

---

## Complete API Route Implementation

```ts
// app/api/contact/route.ts
import { NextRequest } from 'next/server'

const STORE_TYPES = ['supermarket', 'mini-mart', 'pharmacy', 'restaurant', 'other']

function validatePhone(phone: string): boolean {
  return /^(\+234|0)[789]\d{9}$/.test(phone.trim())
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) {
    return Response.json({ success: false, code: 'VALIDATION_ERROR', message: 'Invalid JSON' }, { status: 400 })
  }

  // Validate fields
  const errors: Record<string, string> = {}
  if (!body.name || body.name.trim().length < 2)   errors.name = 'Enter your name (min 2 characters)'
  if (!validatePhone(body.phone))                   errors.phone = 'Enter a valid Nigerian phone number (e.g. 08031234567)'
  if (!body.email || !body.email.includes('@'))     errors.email = 'Enter a valid email address'
  if (!STORE_TYPES.includes(body.storeType))        errors.storeType = 'Select your store type'
  if (body.message && body.message.length > 500)    errors.message = 'Message is too long (max 500 characters)'

  if (Object.keys(errors).length > 0) {
    return Response.json({ success: false, code: 'VALIDATION_ERROR', errors }, { status: 400 })
  }

  // Verify CAPTCHA
  const captchaOk = await verifyCaptcha(body.captchaToken)
  if (!captchaOk) {
    return Response.json({ success: false, code: 'CAPTCHA_FAILED', message: "Could not verify you're human. Please try again." }, { status: 422 })
  }

  // Deliver lead (fire-and-forget — don't fail if notification fails)
  await Promise.allSettled([
    sendEmailNotification(body),
    sendWhatsAppNotification(body),
    logToDatabase(body, req.headers.get('x-forwarded-for')),
  ])

  return Response.json({
    success: true,
    message: `Thanks ${body.name.split(' ')[0]}! We'll contact you within 24 hours.`,
  })
}
```
