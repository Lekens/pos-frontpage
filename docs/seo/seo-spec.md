# POS-Choice Marketing Site — SEO Specification

## Per-Page Meta Tags

### Homepage (`/`)

```html
<title>POS-Choice — Point of Sale for Nigerian Retail Stores</title>
<meta name="description"
  content="POS-Choice is the fastest, most reliable point of sale system for Nigerian supermarkets, mini-marts, and retail stores. Sell from Web, Desktop, or Mobile. Free trial." />
<link rel="canonical" href="https://poschoice.ng/" />

<!-- Open Graph -->
<meta property="og:type"        content="website" />
<meta property="og:url"         content="https://poschoice.ng/" />
<meta property="og:title"       content="POS-Choice — Run Your Store Smarter" />
<meta property="og:description" content="Nigerian point of sale system for supermarkets & retail. Web, Desktop, and Mobile. Start free." />
<meta property="og:image"       content="https://poschoice.ng/og/home.png" />
<meta property="og:image:width"  content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale"      content="en_NG" />
<meta property="og:site_name"   content="POS-Choice" />

<!-- Twitter Card -->
<meta name="twitter:card"        content="summary_large_image" />
<meta name="twitter:title"       content="POS-Choice — Run Your Store Smarter" />
<meta name="twitter:description" content="Nigerian POS system for retail stores. Web, Desktop & Mobile." />
<meta name="twitter:image"       content="https://poschoice.ng/og/home.png" />
```

---

### Pricing Page (`/pricing`)

```html
<title>POS-Choice Pricing — ₦49,999/month for Full POS Access</title>
<meta name="description"
  content="One plan, no hidden fees. ₦49,999 per month includes unlimited staff, all payment methods, inventory management, and free thermal printer training." />
<link rel="canonical" href="https://poschoice.ng/pricing" />

<meta property="og:type"        content="website" />
<meta property="og:url"         content="https://poschoice.ng/pricing" />
<meta property="og:title"       content="POS-Choice Pricing — ₦49,999/month" />
<meta property="og:description" content="One simple plan for Nigerian retail stores. Includes web, desktop, and mobile POS apps." />
<meta property="og:image"       content="https://poschoice.ng/og/pricing.png" />
```

---

### Contact Page (`/contact`)

```html
<title>Contact POS-Choice — Get a Free Demo for Your Store</title>
<meta name="description"
  content="Book a free live demo of POS-Choice. We'll show you how it works for your type of store in under 30 minutes. Call or WhatsApp us at +234 800 POS CHOICE." />
<link rel="canonical" href="https://poschoice.ng/contact" />

<meta property="og:type"        content="website" />
<meta property="og:url"         content="https://poschoice.ng/contact" />
<meta property="og:title"       content="Book a Free Demo — POS-Choice" />
<meta property="og:description" content="See POS-Choice live in 30 minutes. Free demo for Nigerian retailers." />
<meta property="og:image"       content="https://poschoice.ng/og/contact.png" />
```

---

## OG Image Specifications

| Page | File | Background | Headline | Sub-text |
|------|------|-----------|---------|---------|
| Homepage | `/og/home.png` | `#020617` dark + indigo gradient | "Run your store smarter." | "POS-Choice for Nigerian Retail" |
| Pricing | `/og/pricing.png` | `#020617` + violet gradient | "₦49,999 / month" | "Web · Desktop · Mobile" |
| Contact | `/og/contact.png` | `#020617` + teal gradient | "Get a Free Demo" | "30 minutes. No pressure." |

**Technical specs:**
- Dimensions: 1200 × 630 px
- Format: PNG
- Logo: top-left, 180px wide
- Font: Inter Bold, 56px headline / 28px sub-text
- Padding: 80px all sides
- Generate with: `@vercel/og` (recommended) or static Figma export

---

## Structured Data (JSON-LD)

### Homepage — Organization + SoftwareApplication

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "POS-Choice",
      "url": "https://poschoice.ng",
      "logo": "https://poschoice.ng/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234-800-POS-CHOICE",
        "contactType": "customer support",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://wa.me/2348001234567",
        "https://twitter.com/poschoice"
      ]
    },
    {
      "@type": "SoftwareApplication",
      "name": "POS-Choice",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Windows, macOS, Android, iOS, Web",
      "offers": {
        "@type": "Offer",
        "price": "49999",
        "priceCurrency": "NGN",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "49999",
          "priceCurrency": "NGN",
          "unitText": "MONTH"
        }
      },
      "description": "Point of sale system for Nigerian retail stores. Manage sales, inventory, and customers from web, desktop, and mobile.",
      "featureList": [
        "Barcode scanning",
        "Thermal receipt printing",
        "Inventory management",
        "Customer loyalty",
        "Multi-cashier support",
        "Sales reports"
      ]
    }
  ]
}
```

### FAQ Page (for FAQ section on homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does POS-Choice work without internet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Desktop app can work in offline mode for basic sales. Inventory sync and reports require an internet connection. The web and mobile apps always need connectivity."
      }
    },
    {
      "@type": "Question",
      "name": "What printers work with POS-Choice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Any 80mm or 58mm thermal receipt printer using the ESC/POS standard works with POS-Choice. Popular models in Nigeria include Xprinter XP-80, Epson TM-T82, and most generic thermal printers from Computer Village."
      }
    },
    {
      "@type": "Question",
      "name": "How much does POS-Choice cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "POS-Choice costs ₦49,999 per month. This includes all features, unlimited cashiers, web, desktop, and mobile apps, and email support. No setup fees."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use POS-Choice on my phone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. POS-Choice has a dedicated cashier app for Android and iOS. It supports barcode scanning with the phone camera and receipt printing via Bluetooth thermal printer."
      }
    },
    {
      "@type": "Question",
      "name": "How long does setup take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most stores are up and running in under 2 hours. Product import from Excel takes about 30 minutes. Our team offers free onboarding via WhatsApp and video call."
      }
    },
    {
      "@type": "Question",
      "name": "Does it support multiple payment methods?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. POS-Choice supports Cash, Bank Transfer, POS/Card terminal, Credit (for trusted customers), and split payments combining multiple methods."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data stored in Nigeria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All data is stored on servers in Nigeria, compliant with the Nigeria Data Protection Regulation (NDPR). Your sales data never leaves Nigerian borders."
      }
    },
    {
      "@type": "Question",
      "name": "Can the admin see reports from outside the store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The admin dashboard is a web app you can open on any device with a browser. You can see sales reports, cashier performance, and inventory from anywhere."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I cancel my subscription?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You keep access until the end of your paid period. After that, the system is locked to read-only mode for 30 days so you can export your data. We don't delete your data for 90 days after cancellation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Free onboarding includes a 30-minute screen share session, a printed cashier quick-start card, and access to our WhatsApp support group. We also offer on-site training in Lagos for an additional fee."
      }
    }
  ]
}
```

---

## Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://poschoice.ng/sitemap.xml
```

---

## Sitemap (`sitemap.xml`)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://poschoice.ng/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://poschoice.ng/pricing</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://poschoice.ng/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## Technical SEO Checklist

- [ ] `<title>` unique on every page, under 60 characters
- [ ] `<meta description>` unique, 120–155 characters
- [ ] `<link rel="canonical">` on every page
- [ ] OG images generated and served with correct `Cache-Control` headers
- [ ] JSON-LD scripts in `<head>` (not body) via Next.js `<Script strategy="beforeInteractive">`
- [ ] `robots.txt` at root
- [ ] `sitemap.xml` auto-generated via `next-sitemap` package
- [ ] All images: `alt` text, `width` and `height` attributes, `.webp` format
- [ ] `<html lang="en">` set in root layout
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] No broken links (run `linkinator` in CI)
