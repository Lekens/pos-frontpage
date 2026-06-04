# POS-Choice Website — Project Phases & Tasks

## Overview

| Phase | Name | Duration | Tasks | Status |
|-------|------|----------|-------|--------|
| 1 | Foundation & Core Sections | 1 week | 22 | ✅ COMPLETED (2026-06-03) |
| 2 | Advanced Sections & Animations | 1 week | 18 | ⏳ Partial — HowItWorks, FAQ, CtaBanner done |
| 3 | Polish, SEO & Launch | 3 days | 12 | 🔲 Pending |

---

## Phase 1 — Foundation & Core Sections

**Goal:** Project scaffolded, hero + features + pricing live. Enough to share with early store owners.

### Setup Tasks

| ID | Task | Detail |
|----|------|--------|
| FP-1.01 | Project scaffold | `npx create-next-app@latest pos-front-page --typescript --tailwind --app --src-dir` |
| FP-1.02 | Install dependencies | `npm install framer-motion lucide-react react-hook-form zod @fontsource/sora @fontsource/inter` |
| FP-1.03 | Configure Tailwind | Custom colours (brand indigo/violet, dark backgrounds), custom animations (float, sparkle) |
| FP-1.04 | Global styles | `globals.css` — mesh gradient keyframes, sparkle twinkle, scrollbar styling |
| FP-1.05 | constants.ts | WhatsApp link, pricing, all copy strings, feature list |
| FP-1.06 | animations.ts | Shared Framer Motion variants (fadeUp, stagger, slideIn) |
| FP-1.07 | Root layout + metadata | SEO meta tags, Open Graph, Twitter card, fonts |

### Component Tasks

| ID | Task | Detail |
|----|------|--------|
| FP-1.08 | `Navbar` | Sticky; scroll-to-solid on scroll; mobile hamburger menu; `Start Free Trial` button |
| FP-1.09 | `Button` | Variants: primary (gradient), secondary (outline), ghost; loading state; WhatsApp variant (green) |
| FP-1.10 | `Badge` | Small pill labels: "Features", "Pricing", "New" |
| FP-1.11 | `GlowCard` | Animated gradient border wrapper |
| FP-1.12 | `ScreenshotFrame` | macOS window chrome + glow backdrop |
| FP-1.13 | `SparkleBackground` | CSS particle animation overlay for hero |
| FP-1.14 | `CountUpNumber` | Animates number from 0 to target when in viewport |

### Section Tasks

| ID | Task | Detail |
|----|------|--------|
| FP-1.15 | `HeroSection` | Headline, subtext, floating screenshot, dual CTA, trust indicators, sparkle bg |
| FP-1.16 | `StatsBar` | Auto-scrolling marquee: 50+ stores, 10k+ transactions, etc |
| FP-1.17 | `ProblemSolution` | 3-card layout: Problem / Old Way / POS-Choice |
| FP-1.18 | `FeatureShowcase` | Tabbed showcase: Checkout / Reports / Inventory / Customers / Control |
| FP-1.19 | `PlatformSection` | Web / Desktop / Mobile — 3 cards with icons |
| FP-1.20 | `PricingSection` | Single plan card, feature checklist, count-up ₦49,999, dual CTA |
| FP-1.21 | `Footer` | 4 columns: Product / Resources / Company / Contact |
| FP-1.22 | `page.tsx` | Assemble all sections in order |

**Done when:** Hero section visible, features tab works, pricing displays, all links work on desktop and mobile.

---

## Phase 2 — Advanced Sections & Animations

**Goal:** All sections complete, animations polished, contact form working.

| ID | Task | Detail |
|----|------|--------|
| FP-2.01 | `HowItWorks` | 3-step process: Sign up → Set up → Sell; horizontal timeline with icons |
| FP-2.02 | `WhatsAppSection` | Phone mockup showing WhatsApp alert; animated message bubble |
| FP-2.03 | `TestimonialsSection` | Auto-rotating carousel; 3 placeholder testimonials (replace with real) |
| FP-2.04 | `FaqSection` | Accordion; 10 questions with smooth expand/collapse |
| FP-2.05 | `CtaBanner` | Full-width gradient banner with headline + dual CTA |
| FP-2.06 | Contact page | Form: name, store name, phone, WhatsApp number, message |
| FP-2.07 | `/api/contact` route | Send form data via Nodemailer to admin email |
| FP-2.08 | Form validation | React Hook Form + Zod; Nigerian phone number validation |
| FP-2.09 | Scroll animations | Add Framer Motion `whileInView` to all sections |
| FP-2.10 | Counter animations | `CountUpNumber` on stats bar and pricing |
| FP-2.11 | Screenshot assets | Export 5 WebP screenshots from the actual POS app |
| FP-2.12 | OG image | 1200×630 Open Graph image (Satori or static design) |
| FP-2.13 | Floating animation | CSS `float` keyframe on hero screenshot |
| FP-2.14 | Sparkle particles | Animated dots in hero background |
| FP-2.15 | Feature tab switching | Smooth screenshot crossfade on tab change |
| FP-2.16 | Mobile nav | Slide-in drawer for hamburger menu |
| FP-2.17 | Pricing comparison | Add "vs competitors" table below pricing card |
| FP-2.18 | WhatsApp CTA buttons | Open `wa.me` link with pre-filled message |

**Done when:** All 12 sections complete, contact form works, animations smooth on all browsers.

---

## Phase 3 — Polish, SEO & Launch

| ID | Task | Detail |
|----|------|--------|
| FP-3.01 | Lighthouse audit | Score ≥ 90 on Performance, Accessibility, SEO |
| FP-3.02 | Image optimisation | Convert all screenshots to WebP, set correct sizes |
| FP-3.03 | Sitemap | `app/sitemap.ts` — auto-generated sitemap.xml |
| FP-3.04 | robots.txt | Allow all crawlers |
| FP-3.05 | Meta tags audit | Every page has title, description, OG, Twitter |
| FP-3.06 | Mobile polish | Test on iPhone SE (375px), Android (360px), tablet (768px) |
| FP-3.07 | Keyboard accessibility | All interactive elements keyboard-navigable |
| FP-3.08 | Analytics | Add Vercel Analytics (`@vercel/analytics`) |
| FP-3.09 | Domain setup | Connect poschoice.ng or poschoice.com.ng to Vercel |
| FP-3.10 | Error pages | Custom 404 and 500 pages |
| FP-3.11 | Cookie consent | Minimal cookie notice (NDPR compliance) |
| FP-3.12 | Launch | Deploy to Vercel, share with 5 test users for feedback |

---

## Good-to-Have (Backlog)

| Feature | Effort | Value |
|---------|--------|-------|
| Demo video | High | Very High |
| Live chat widget | Low | High (Tidio free tier) |
| Blog section | Medium | High (SEO) |
| Changelog page | Low | Medium |
| Referral programme landing | Medium | High |
| Multi-language (Yoruba, Hausa, Igbo) | High | Medium |
| Screenshot gallery/carousel | Low | Medium |
| Pricing calculator (based on # of stores) | Medium | Medium |
