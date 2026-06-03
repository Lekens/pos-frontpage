// All copy strings centralised — never hardcode text in components

export const SITE_NAME = 'POS-Choice'
export const SITE_TAGLINE = 'The Modern POS Built for Nigerian Retail'
export const SITE_DESCRIPTION =
  'Scan faster, checkout smarter, and never lose a sale — POS-Choice is the cloud point-of-sale system designed specifically for Nigerian supermarkets, mini-marts, and retail stores.'

export const WHATSAPP_NUMBER = '2348137452302'   // replace with real number before launch
export const WHATSAPP_ONBOARDING_MESSAGE =
  "Hi! I'd like to start using POS-Choice for my store. Please help me get set up."

export function buildWhatsAppUrl(message = WHATSAPP_ONBOARDING_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const PRICING = {
  monthly:        4_999_900,   // kobo
  monthlyDisplay: '₦49,999',
  perYear:        '₦599,988',
}

export const STATS = [
  { value: '50+',    suffix: '',  label: 'Stores onboarded'      },
  { value: '10,000', suffix: '+', label: 'Daily transactions'    },
  { value: '99.9',   suffix: '%', label: 'Uptime guarantee'      },
  { value: '2',      suffix: 'min',label: 'Avg support response' },
]

export const FEATURES = [
  {
    icon:        'ScanBarcode',
    title:       'Fast Barcode Checkout',
    description: 'Scan products with a USB barcode scanner or phone camera. Checkout in seconds, not minutes.',
  },
  {
    icon:        'LayoutDashboard',
    title:       'Live Dashboard',
    description: 'See today\'s revenue, top products, and low stock alerts at a glance — updated in real time.',
  },
  {
    icon:        'Package',
    title:       'Inventory Management',
    description: 'Track stock levels, set reorder alerts, manage pack/piece selling, and never run out unexpectedly.',
  },
  {
    icon:        'Users',
    title:       'Customer Accounts',
    description: 'Create customer profiles, manage credit accounts, track loyalty points, and record payments.',
  },
  {
    icon:        'Receipt',
    title:       'Multi-Payment Support',
    description: 'Accept cash, bank transfer, POS/card, credit, and split payments — all tracked precisely.',
  },
  {
    icon:        'BarChart2',
    title:       'Detailed Reports',
    description: 'P&L reports, sales history, cashier performance, and inventory valuation — all exportable to Excel.',
  },
]

export const HOW_IT_WORKS = [
  {
    step:        '01',
    title:       'Sign up on WhatsApp',
    description: 'Send us a message on WhatsApp. We\'ll create your account and walk you through setup in under 10 minutes.',
    icon:        'MessageCircle',
  },
  {
    step:        '02',
    title:       'Add your products',
    description: 'Import from Excel or add products one by one. Set prices, pack sizes, reorder levels, and categories.',
    icon:        'Package',
  },
  {
    step:        '03',
    title:       'Start selling immediately',
    description: 'Log in on any device — laptop, tablet, or phone. Your cashiers are ready to sell within minutes.',
    icon:        'ShoppingCart',
  },
]

export const PRICING_FEATURES = [
  'Unlimited products and categories',
  'Up to 5 cashier accounts',
  'Real-time dashboard and reports',
  'Customer credit accounts',
  'Stock adjustment and alerts',
  'Multi-payment methods (cash, transfer, POS, credit)',
  'WhatsApp receipt sharing',
  'Cloud backup — never lose your data',
]

export const FAQ_ITEMS = [
  {
    question: 'How long does setup take?',
    answer:   'Most stores are fully set up and selling within 30 minutes. We\'ll guide you through WhatsApp the whole way.',
  },
  {
    question: 'Does it work without internet?',
    answer:   'The mobile app works offline for product scanning and holds carts. Sales sync automatically when you reconnect.',
  },
  {
    question: 'Can I use it on my phone?',
    answer:   'Yes — POS-Choice works on any web browser (laptop, tablet, phone) and has a dedicated Android/iOS cashier app.',
  },
  {
    question: 'How many cashiers can I add?',
    answer:   'Up to 5 cashier accounts on the standard plan. Each cashier has their own PIN and shift history.',
  },
  {
    question: 'Is my data safe?',
    answer:   'All data is encrypted and backed up to the cloud daily. You can export everything at any time.',
  },
  {
    question: 'Can I track credit sales?',
    answer:   'Yes — create customer accounts, set credit limits, record credit purchases, and track outstanding balances.',
  },
  {
    question: 'What payment methods does it support?',
    answer:   'Cash, bank transfer, POS/card, customer credit, and split payments across any combination.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:   'Yes — there are no lock-in contracts. Cancel any time and export your data before you go.',
  },
]

export const NAV_LINKS = [
  { label: 'Features',     href: '#features'    },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing',      href: '#pricing'      },
  { label: 'FAQ',          href: '#faq'          },
]

export const FOOTER_LINKS = {
  Product:  [
    { label: 'Features',     href: '#features'    },
    { label: 'Pricing',      href: '#pricing'      },
    { label: 'How It Works', href: '#how-it-works' },
  ],
  Support: [
    { label: 'FAQ',         href: '#faq'           },
    { label: 'WhatsApp Us', href: buildWhatsAppUrl()},
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy'  },
    { label: 'Terms of Use',   href: '/terms'    },
  ],
}
