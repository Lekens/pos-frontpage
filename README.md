# POS-Choice — Marketing Website

> The public-facing website for **POS-Choice**, a modern cloud Point of Sale system built for Nigerian retail. This site puts the product on the global market and converts store owners into paying subscribers.

**Live product:** [pos-frontend-v2](../POS-frontend-v2) · [Backend API](../POS-backend-v2) · [Desktop App](../POS-desktop-app) · [Mobile App](../POS-mobile-app)

---

## What This Site Does

POS-Choice.com is a **high-conversion SaaS landing page** that:
- Shows what POS-Choice does (features, screenshots, demos)
- Explains how it works on web, desktop (Windows/macOS), and mobile
- Targets Nigerian super-stores, supermarkets, and mini-marts
- Converts visitors into ₦49,999/month subscribers
- Provides contact, FAQ, and onboarding information

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js 15 (App Router) | SEO, image optimisation, ISR for dynamic content |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS v4 | Utility-first; consistent with main app |
| Animations | Framer Motion | Smooth scroll reveals, number counters, card flips |
| Icons | Lucide React | Consistent with the main app |
| Images | next/image | Automatic WebP conversion, lazy loading |
| Forms | React Hook Form + Zod | Contact / waitlist form validation |
| Deployment | Vercel (free tier) | Zero-config Next.js hosting |
| Analytics | Vercel Analytics (free) | Pageviews, conversion tracking |

All dependencies are **free and open-source**.

---

## Getting Started

```bash
cd pos-front-page
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
```

---

## Documentation

| Doc | Purpose |
|-----|---------|
| [`docs/research/README.md`](docs/research/README.md) | Target audience, competitive analysis, key messages |
| [`docs/design/ui-ux-design.md`](docs/design/ui-ux-design.md) | Visual identity, colour system, typography, animations |
| [`docs/features/sections.md`](docs/features/sections.md) | Every section spec: copy, layout, interactions |
| [`docs/content/copy.md`](docs/content/copy.md) | All headline, body copy, and CTA text |
| [`docs/architecture/system-overview.md`](docs/architecture/system-overview.md) | Folder structure, routing, components |
| [`docs/phases/project-phases.md`](docs/phases/project-phases.md) | Build phases and task breakdown |
| [`docs/STATUS.md`](docs/STATUS.md) | Current build status |

---

## Related Projects

| Project | Description |
|---------|-------------|
| [POS-frontend-v2](../POS-frontend-v2) | The actual POS web app (what customers use) |
| [POS-backend-v2](../POS-backend-v2) | NestJS REST API |
| [POS-desktop-app](../POS-desktop-app) | Electron Windows/macOS app |
| [POS-mobile-app](../POS-mobile-app) | React Native cashier mobile app |
