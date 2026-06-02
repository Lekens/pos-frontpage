# POS-Choice Website — Visual Design Guide

## Design Philosophy

**Unique. Catchy. Sparkly. Eye-catching.**

The site must feel premium and modern — conveying that this is professional software, not a cheap local app. Think of how **Linear**, **Vercel**, and **Raycast** do product pages: dark backgrounds, glowing gradients, crisp typography, animated screenshots, and a sense of depth.

Nigerian retail owners will judge the product by the website. If the site looks cheap, they'll assume the product is cheap.

---

## Visual Identity

### Brand Colours

```
Primary Brand:    #6366F1  (indigo-500)  — trust, technology
Brand Deep:       #4F46E5  (indigo-600)
Accent Spark:     #8B5CF6  (violet-500)  — premium, creativity
Accent Glow:      #A78BFA  (violet-400)  — sparkly highlights
Success:          #10B981  (emerald-500) — money, growth
Warning:          #F59E0B  (amber-500)   — alerts, Nigeria gold
```

### Background System

```
Base:             #020617  (slate-950)   — near-black, deep
Surface:          #0F172A  (slate-900)   — card backgrounds
Surface elevated: #1E293B  (slate-800)   — raised elements
Border:           #334155  (slate-700)   — subtle dividers
```

### Hero Gradient

The hero section uses a radial mesh gradient — the signature "sparkle":

```css
background: 
  radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.3), transparent),
  radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139, 92, 246, 0.2), transparent),
  radial-gradient(ellipse 40% 30% at 20% 80%, rgba(16, 185, 129, 0.15), transparent),
  #020617;
```

This creates a deep-space nebula feel with brand-coloured glows.

### Feature Section Gradients

Each feature section has a unique colour accent:
- **Speed/POS:** Indigo glow
- **Inventory:** Emerald glow
- **Reports:** Violet glow
- **Mobile:** Blue glow
- **Pricing:** Gold/amber glow

---

## Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display headline | Cal Sans (free) OR Sora | 800 | 4–6rem |
| Section headline | Sora | 700 | 2.25–3rem |
| Sub-headline | Inter | 600 | 1.25–1.5rem |
| Body | Inter | 400 | 1rem |
| Caption/label | Inter | 500 | 0.875rem (uppercase, tracking-wide) |
| Code/numbers | JetBrains Mono | 400 | varies |

**Font imports (self-hosted for performance):**
```css
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
```

Or use `@fontsource/sora` and `@fontsource/inter` (MIT, self-hosted).

---

## Animation System

### Scroll Reveals (Framer Motion)

Every section reveals on scroll with:
```tsx
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
viewport={{ once: true, margin: '-100px' }}
```

Staggered children:
```tsx
transition={{ delay: index * 0.1 }}
```

### Sparkle/Glow Effects (CSS)

Animated gradient borders on feature cards:
```css
@keyframes borderGlow {
  0%, 100% { border-color: rgba(99, 102, 241, 0.3) }
  50%       { border-color: rgba(139, 92, 246, 0.8) }
}
```

### Floating Screenshot Animation

The hero screenshot floats up and down:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) }
  50%       { transform: translateY(-12px) }
}
animation: float 4s ease-in-out infinite;
```

### Number Counter (pricing, stats)

Use `useCountUp` hook — numbers animate from 0 to final value when scrolled into view:
```tsx
// "49,999" counts up: 0 → 49,999 in 1.5s with ease-out
```

### Particle/Sparkle Overlay

Small animated dots/stars in the hero background (CSS keyframes):
```css
.sparkle { animation: twinkle 3s infinite alternate }
@keyframes twinkle {
  0%   { opacity: 0.2; transform: scale(0.8) }
  100% { opacity: 1;   transform: scale(1.2) }
}
```

---

## Component Designs

### Hero Section Layout
```
┌─────────────────────────────────────────────────────────────────────┐
│  [sparkle background — deep indigo nebula]                          │
│                                                                     │
│  [Navbar]  Logo  Features  Pricing  Contact    [Start Free Trial]  │
│                                                                     │
│     ┌───────────────────────────────┐   ┌─────────────────────┐   │
│     │  SUPERCHARGE                  │   │                     │   │
│     │  YOUR STORE                   │   │  [App Screenshot    │   │
│     │  OPERATIONS                   │   │   with glow effect  │   │
│     │                               │   │   floating up/down] │   │
│     │  Nigeria's fastest modern POS │   │                     │   │
│     │  for supermarkets, mini-marts │   └─────────────────────┘   │
│     │  and retail stores.           │                             │
│     │                               │                             │
│     │  [Start Free Trial]  [Watch Demo ▶]                        │
│     │                                                             │
│     │  ⭐⭐⭐⭐⭐ Trusted by 50+ stores                          │
│     └───────────────────────────────┘                             │
│                                                                     │
│  [Scroll down indicator with animated arrow]                       │
└─────────────────────────────────────────────────────────────────────┘
```

### Feature Card Design

```
┌──────────────────────────────────────────┐
│  [gradient icon background — glowing]    │
│  🛒 icon                                  │
│                                          │
│  Blazing-Fast Checkout                   │  ← bold white headline
│                                          │
│  Your cashier can process a full         │  ← slate-400 body text
│  transaction in under 10 seconds.        │
│  Scan, cart, pay, receipt — done.        │
│                                          │
│  ────────────────────────────────────    │  ← animated gradient border
│  "Cut our checkout queue by 60%"         │  ← green testimonial chip
└──────────────────────────────────────────┘
```

### Pricing Card Design

```
┌──────────────────────────────────────────────────────┐
│                    MOST POPULAR ⭐                     │
│                                                      │
│  POS-Choice Standard                                 │
│                                                      │
│  ₦49,999                                            │  ← large, animated count-up
│  per month · cancel anytime                          │
│                                                      │
│  ✅ Unlimited cashiers                               │
│  ✅ Web + Desktop + Mobile apps                      │
│  ✅ All payment methods                              │
│  ✅ Sales reports & analytics                        │
│  ✅ WhatsApp expiry alerts                           │
│  ✅ Customer loyalty programme                       │
│  ✅ Inventory management                             │
│  ✅ 14-day free trial · no card needed               │
│                                                      │
│  [  Start Free Trial — No Card Required  ]           │  ← large CTA button
│  [  Message us on WhatsApp               ]           │  ← secondary CTA
└──────────────────────────────────────────────────────┘
```

### Screenshots Showcase

Use a macOS-style window frame around the app screenshots:
- Gradient border with glow effect
- Three traffic-light dots (decorative)
- Dark blurred backdrop
- On hover: slight scale-up + brighter glow

### Platform Availability Section

Three cards showing platforms:
```
🌐 Web Browser      💻 Desktop App        📱 Mobile App
Any device          Windows & macOS       iOS & Android
Chrome, Firefox     Offline support       Cashier-only
No install          Thermal printer       PIN login
```

---

## Page Sections Order

1. **Navbar** — Logo + nav links + CTA button
2. **Hero** — Big headline, screenshot, primary CTA
3. **Trust bar** — "Trusted by 50+ stores" + logos/avatars
4. **Problem → Solution** — 3 cards: the pain, the old way, POS-Choice way
5. **Features Deep-Dive** — Tabbed showcase (Cashier POS / Reports / Inventory / Mobile)
6. **Platform Availability** — Web / Desktop / Mobile
7. **How It Works** — 3-step process (Sign up → Set up → Sell)
8. **Social Proof** — Testimonials carousel
9. **Pricing** — Single card, feature list, dual CTA
10. **FAQ** — Accordion, 8–10 questions
11. **Final CTA Banner** — Bold "Get started today" section
12. **Footer** — Links, copyright, social

---

## Mobile Responsiveness

| Screen | Layout |
|--------|--------|
| Mobile (< 640px) | Single column, large tap targets, hamburger menu |
| Tablet (640–1024px) | 2-column features, stacked hero |
| Desktop (> 1024px) | Full layout as designed |

All sections use `container mx-auto px-4 sm:px-6 lg:px-8`.

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Total page weight | < 500 KB gzipped |
| Images | WebP, lazy-loaded, properly sized |
