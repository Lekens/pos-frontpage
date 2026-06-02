# POS-Choice Website — Architecture Overview

## Tech Stack Summary

```
Next.js 15 (App Router)
├── TypeScript (strict)
├── Tailwind CSS v4
├── Framer Motion (animations)
├── Lucide React (icons)
├── React Hook Form + Zod (contact form)
└── Vercel (deployment, analytics, edge functions)
```

## Project Structure

```
pos-front-page/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout: meta, fonts, analytics
│   │   ├── page.tsx                # Homepage (all sections)
│   │   ├── pricing/page.tsx        # /pricing standalone (optional)
│   │   ├── contact/page.tsx        # /contact form
│   │   └── api/
│   │       └── contact/route.ts    # Form submission → WhatsApp/email
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky nav with scroll effect
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/               # One component per landing section
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── ProblemSolution.tsx
│   │   │   ├── FeatureShowcase.tsx # Tabbed feature deep-dive
│   │   │   ├── PlatformSection.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── WhatsAppSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   └── CtaBanner.tsx
│   │   │
│   │   └── ui/                     # Reusable UI primitives
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── ScreenshotFrame.tsx # macOS window frame wrapper
│   │       ├── GlowCard.tsx        # Gradient border glow card
│   │       ├── CountUpNumber.tsx   # Animated number counter
│   │       └── SparkleBackground.tsx # Animated particle overlay
│   │
│   ├── lib/
│   │   ├── animations.ts           # Shared Framer Motion variants
│   │   └── constants.ts            # WhatsApp link, pricing, copy
│   │
│   └── styles/
│       └── globals.css             # Tailwind + custom keyframes
│
├── public/
│   ├── screenshots/                # App screenshots (WebP)
│   │   ├── cashier-pos.webp
│   │   ├── admin-dashboard.webp
│   │   ├── products-page.webp
│   │   ├── reports-page.webp
│   │   └── mobile-app.webp
│   ├── logo.svg
│   └── og-image.png               # Open Graph sharing image (1200×630)
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── CLAUDE.md
```

## Routing

| Route | Purpose |
|-------|---------|
| `/` | Main landing page (all sections) |
| `/pricing` | Standalone pricing page (SEO) |
| `/contact` | Contact/trial form |
| `/api/contact` | Form submission handler |

## Key Component Patterns

### Section Component Template

```tsx
// All sections follow this pattern
export default function FeatureSection() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge>Features</Badge>
          <h2 className="mt-4 text-4xl font-bold text-white">
            Everything your store needs
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Description text here
          </p>
        </motion.div>

        {/* Section content */}
        {/* ... */}
      </div>
    </section>
  )
}
```

### GlowCard Component

```tsx
export function GlowCard({ children, className }: Props) {
  return (
    <div className={cn(
      'relative rounded-2xl p-px',
      'bg-gradient-to-br from-indigo-500/30 via-transparent to-violet-500/20',
      'hover:from-indigo-500/60 hover:to-violet-500/40 transition-all duration-500',
      className
    )}>
      <div className="rounded-2xl bg-slate-900/90 backdrop-blur-sm p-6 h-full">
        {children}
      </div>
    </div>
  )
}
```

### ScreenshotFrame Component

```tsx
export function ScreenshotFrame({ src, alt }: Props) {
  return (
    <div className="relative">
      {/* Glow behind screenshot */}
      <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full scale-75" />
      
      {/* macOS-style window */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-indigo-500/10">
        {/* Traffic lights */}
        <div className="flex gap-1.5 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-amber-500/70" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
        </div>
        <Image src={src} alt={alt} width={1200} height={750} className="w-full" />
      </div>
    </div>
  )
}
```

## SEO Configuration

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: 'POS-Choice — Modern POS System for Nigerian Retail',
  description: 'The fastest, smartest Point of Sale for supermarkets, mini-marts, and retail stores in Nigeria. ₦49,999/month. Start free today.',
  keywords: ['POS system Nigeria', 'point of sale Nigeria', 'supermarket software', 'retail management Nigeria'],
  openGraph: {
    title: 'POS-Choice — Run Your Store Smarter',
    description: '...',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'POS-Choice',
    description: '...',
    images: ['/og-image.png'],
  },
}
```

## Contact Form → WhatsApp/Email

```typescript
// app/api/contact/route.ts
export async function POST(req: Request) {
  const { name, phone, storeName, email, message } = await req.json()

  // Send via Nodemailer to admin email
  await sendEmail({ to: 'sales@poschoice.ng', subject: `New enquiry from ${storeName}`, html: '...' })

  // Also send to admin WhatsApp via Meta API (optional)
  
  return Response.json({ success: true })
}
```

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=2348XXXXXXXXX
NEXT_PUBLIC_WHATSAPP_MESSAGE=I'm interested in POS-Choice for my store
CONTACT_EMAIL=hello@poschoice.ng
SMTP_HOST=smtp.gmail.com
SMTP_USER=
SMTP_PASS=
```

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Custom domain
# Add poschoice.ng or pos-choice.com.ng in Vercel dashboard
# Update DNS: CNAME www → cname.vercel-dns.com
```

Vercel Free tier includes:
- Unlimited static deployments
- 100GB bandwidth/month
- Vercel Analytics (free for personal use)
- Edge Functions (for contact form)
- Automatic HTTPS
