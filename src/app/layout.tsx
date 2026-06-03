import type { Metadata } from 'next'
import '@fontsource/sora/400.css'
import '@fontsource/sora/600.css'
import '@fontsource/sora/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import './globals.css'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

export const metadata: Metadata = {
  title:       `${SITE_NAME} — Modern POS for Nigerian Retail`,
  description: SITE_DESCRIPTION,
  keywords:    'POS Nigeria, point of sale Nigeria, supermarket software, retail POS Lagos, inventory management Nigeria',
  openGraph: {
    title:       `${SITE_NAME} — Modern POS for Nigerian Retail`,
    description: SITE_DESCRIPTION,
    type:        'website',
    locale:      'en_NG',
    siteName:    SITE_NAME,
  },
  twitter: {
    card:        'summary_large_image',
    title:       `${SITE_NAME} — Modern POS for Nigerian Retail`,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" style={{ background: '#020617' }}>
      <body
        className="min-h-screen antialiased"
        style={{ fontFamily: "'Inter', 'Sora', system-ui, sans-serif", background: '#020617', color: '#f8fafc' }}
      >
        {children}
      </body>
    </html>
  )
}
