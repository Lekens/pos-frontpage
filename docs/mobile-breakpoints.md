# POS-Choice Marketing Site — Responsive Breakpoints

## Overview

The site is built mobile-first with Tailwind CSS. Breakpoints follow Tailwind defaults with Nigerian device priorities (Samsung Galaxy A51 is the most common device in the target market).

---

## Breakpoints

| Name | Min-Width | Primary Devices |
|------|-----------|----------------|
| `default` (mobile) | 0px | Samsung Galaxy A51 (412px), Tecno Spark (360px), low-end phones |
| `sm` | 640px | Large phones, older iPhones in landscape |
| `md` | 768px | Tablets (iPad mini, generic 7-inch Android) |
| `lg` | 1024px | Laptops, desktop browsers |
| `xl` | 1280px | Wide desktop |
| `2xl` | 1536px | Large monitors |

**Priority order:** 375px → 412px → 768px → 1024px → 1280px

---

## Section-by-Section Breakpoints

### Navbar

| Breakpoint | Layout |
|-----------|--------|
| 0–767px | Logo left, hamburger menu right. Dropdown opens full-width overlay |
| 768px+ | Horizontal nav: Logo · Nav links · [Get Demo] CTA button |

```
375px:  [Logo]                    [≡]
768px:  [Logo] Features Pricing Contact      [Get Free Demo →]
```

**Hamburger menu:** slides down from top, items stack vertically, full-width background.

---

### Hero Section

| Breakpoint | Layout |
|-----------|--------|
| 0–767px | Single column. Headline → subtext → primary CTA → trust badges. Mockup image hidden on phones below 480px. |
| 480–767px | Mockup image shown below CTAs, 100% width |
| 768–1023px | Single column, wider. Mockup shown, max-width 600px |
| 1024px+ | Two-column: text left (50%) + mockup right (50%) |

```
375px:
  ┌─────────────────────────┐
  │  Run your store smarter │  (h1, 36px)
  │  Point of sale for...   │  (p, 18px)
  │  [Get Free Demo]        │  (full-width button)
  │  [Watch 60s demo]       │  (full-width secondary)
  │  ★ 4.8  ✓ 500+ stores  │  (trust row)
  └─────────────────────────┘

1024px:
  ┌─────────────────┬───────────────────┐
  │ Run your store  │                   │
  │ smarter.        │   [App Screenshot]│
  │                 │                   │
  │ [Get Free Demo] │                   │
  └─────────────────┴───────────────────┘
```

**Font sizes:**
- Headline: `text-4xl` (36px) → `md:text-5xl` (48px) → `lg:text-6xl` (60px)
- Subtext: `text-lg` (18px) → `lg:text-xl` (20px)
- CTAs: `w-full` → `md:w-auto inline-flex`

---

### Stats Bar

| Breakpoint | Layout |
|-----------|--------|
| 0–639px | 2×2 grid |
| 640px+ | 4-column row |

```
375px:                    640px+:
┌────────┬────────┐      ┌──────┬──────┬──────┬──────┐
│ 500+   │ 4.8★   │      │ 500+ │ 4.8★ │ ₦2B+ │ 2min │
│ stores │ rating │      └──────┴──────┴──────┴──────┘
├────────┼────────┤
│ ₦2B+  │ 2min   │
│ sales  │ setup  │
└────────┴────────┘
```

---

### Problem/Solution Section

| Breakpoint | Layout |
|-----------|--------|
| 0–767px | Stacked cards, full width |
| 768px+ | 3-column grid |

**Problem cards:** `w-full` → `md:w-1/3`
Padding: `p-4` → `md:p-6`

---

### Features Section (Tab Layout)

| Breakpoint | Layout |
|-----------|--------|
| 0–767px | Tabs become a horizontal scrollable row. Content below. No side-by-side layout. |
| 768px+ | Tabs on left (vertical list), content on right |
| 1024px+ | Content includes screenshot alongside text |

```
375px:
  [Fast Checkout] [Reports] [Inventory] →  (scroll)
  ──────────────────────────────────────
  ✓ Feature line 1
  ✓ Feature line 2
  ✓ Feature line 3
  [Learn more →]

768px+:
  ┌──────────────┬────────────────────────┐
  │ Fast Checkout│  ✓ Feature line 1      │
  │ Reports      │  ✓ Feature line 2      │
  │ Inventory    │  ✓ Feature line 3      │
  │ Customers    │  [Learn more →]        │
  │ Control      │                        │
  └──────────────┴────────────────────────┘
```

**Tab text:** `text-sm` on mobile, `text-base` on md+

---

### Platform Section (Web / Desktop / Mobile cards)

| Breakpoint | Layout |
|-----------|--------|
| 0–639px | Stacked, full width |
| 640–1023px | 3-column grid, condensed |
| 1024px+ | 3-column grid, full detail |

```
375px:
  ┌─────────────────────────┐
  │ 💻 Web Browser          │
  │ The admin dashboard...  │
  └─────────────────────────┘
  ┌─────────────────────────┐
  │ 🖥 Windows / macOS App  │
  └─────────────────────────┘
  ┌─────────────────────────┐
  │ 📱 Android / iOS App    │
  └─────────────────────────┘

640px+:
  ┌──────────┬──────────┬──────────┐
  │ 💻 Web   │ 🖥 Desktop│ 📱 Mobile│
  └──────────┴──────────┴──────────┘
```

---

### How It Works (3 steps)

| Breakpoint | Layout |
|-----------|--------|
| 0–767px | Vertical timeline (numbered, left-aligned) |
| 768px+ | 3-column horizontal steps with connector line |

```
375px:
  ①  Add your products
     (Import from Excel or add manually)

  ②  Open your store
     (Each cashier logs in with a PIN)

  ③  Sell and track
     (Reports update in real time)

768px+:
  [①]──────────[②]──────────[③]
  Add products  Open store   Sell & track
```

---

### Pricing Section

| Breakpoint | Layout |
|-----------|--------|
| 0–767px | Single column. Price card full-width. Feature checklist stacked. Comparison table scrolls horizontally. |
| 768px+ | Centered price card with max-width 480px. Comparison table full-width. |

**Comparison table on mobile:**
```css
.comparison-table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```
Minimum table width: 480px. Column widths: Feature 50%, POS-Choice 25%, Competitors 25%.

---

### Testimonials

| Breakpoint | Layout |
|-----------|--------|
| 0–767px | Single card visible, horizontal swipe (or dot indicator) |
| 768–1023px | 2 cards |
| 1024px+ | 3 cards |

Cards: `min-w-[280px]` → `md:min-w-0`

---

### FAQ Section

| Breakpoint | Layout |
|-----------|--------|
| All sizes | Single column accordion. Full width. |

Padding: `px-4` → `md:px-8 lg:px-0 max-w-2xl mx-auto`

---

### CTA Banner (Final)

| Breakpoint | Layout |
|-----------|--------|
| 0–767px | Stacked: headline → subtext → two stacked buttons |
| 768px+ | Headline + subtext left, buttons right (flex-row) |

Buttons: `w-full` on mobile → `w-auto` on md+

---

### Footer

| Breakpoint | Layout |
|-----------|--------|
| 0–639px | Single column. Logo + tagline, then each link group stacked |
| 640–1023px | 2-column grid |
| 1024px+ | 5-column grid (Logo · Product · Company · Legal · Contact) |

---

## Touch Target Sizes

All interactive elements must meet minimum touch target on mobile:

| Element | Minimum Size |
|---------|-------------|
| Buttons | 44 × 44px (`min-h-[44px]`) |
| Nav links (mobile) | 44px height |
| FAQ accordion toggle | 48px height |
| Testimonial swipe area | Full card width |

---

## Performance on Nigerian Mobile Networks

Budget: < 200KB gzipped per page (3G-friendly).

- Hero image: WebP, max 400KB, `loading="eager"` with explicit dimensions
- Below-fold images: `loading="lazy"`
- Feature screenshots: WebP, 800px wide max, compressed to ~150KB
- No autoplay video — offer a tap-to-play thumbnail instead
- Font: System font stack first; Inter loaded via `<link preload>` with `font-display: swap`
