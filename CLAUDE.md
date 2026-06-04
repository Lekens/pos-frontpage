# POS-Choice Website — Project Guide for Claude

## Project Overview

This is the **marketing website** for POS-Choice, a SaaS Point of Sale product for Nigerian retail stores. It is a Next.js 15 + TypeScript + Tailwind CSS static/hybrid site deployed on Vercel.

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 (utility-first)
- **Animations:** Framer Motion
- **Deployment:** Vercel (free tier)

## Purpose

Convert store owners (supermarkets, mini-marts, pharmacies) into ₦49,999/month subscribers.

## Non-Negotiable Rules

1. **Performance first** — Lighthouse ≥ 90. No layout shift. Images are WebP + lazy.
2. **Mobile-first** — Design for 360px width. Every section must look great on phones.
3. **Dark theme** — The site uses a dark background (`#020617`) with vibrant gradients.
4. **Framer Motion for animations** — All scroll reveals use `whileInView + once:true`.
5. **Self-hosted fonts** — Use `@fontsource/sora` and `@fontsource/inter`, not Google Fonts CDN.
6. **No hardcoded copy** — All text strings in `src/lib/constants.ts`.
7. **Nigerian context** — ₦ currency, WhatsApp as primary CTA, Nigeria-specific examples.

## Key Documentation

| Doc | Must-Read? | Purpose |
|-----|-----------|---------|
| `docs/research/README.md` | ✅ | Target audience, key messages, pricing strategy |
| `docs/design/ui-ux-design.md` | ✅ | Colour system, typography, animation specs |
| `docs/features/sections.md` | ✅ | Every section: copy, layout, interactions |
| `docs/architecture/system-overview.md` | Reference | Folder structure, components |
| `docs/phases/project-phases.md` | Reference | All 52 build tasks |

## Design System Quick Reference

```
Background:  #020617 (slate-950)
Brand:       #6366F1 (indigo-500)
Accent:      #8B5CF6 (violet-500)
Success:     #10B981 (emerald-500)
Text:        white / slate-400 (secondary)
Cards:       bg-slate-900/90 with gradient border
```

## WhatsApp CTA Pattern

All "Start Free Trial" buttons open:
```
https://wa.me/{NEXT_PUBLIC_WHATSAPP_NUMBER}?text={encoded_message}
```

Never use a form-only approach — WhatsApp is the primary conversion channel in Nigeria.

## Build Status

**Phase 1 (Foundation & Core Sections): ✅ COMPLETED** — Project scaffold, Navbar, Button, GlowCard, HeroSection, StatsBar, FeatureShowcase, PricingSection, Footer, FaqSection, HowItWorks, CtaBanner; `constants.ts`, `animations.ts`, `robots.ts`, `sitemap.ts`  
**Phase 2 (Advanced Sections): ⏳ PARTIAL** — Several sections built (HowItWorks, FaqSection, CtaBanner) but some remain (Testimonials, Contact page, WhatsApp section, OG image, screenshot assets)  
**Phase 3 (Polish, SEO & Launch): 🔲 PENDING** — Lighthouse audit, domain setup, analytics, launch  
**Current Status:** Core site structure is live. See `docs/STATUS.md` for details.

## Related Projects

| Project | Description |
|---------|-------------|
| `POS-frontend-v2` | The actual POS app (what subscribers use) |
| `POS-backend-v2` | NestJS REST API |
| `POS-desktop-app` | Electron desktop app |
| `POS-mobile-app` | React Native cashier app |
