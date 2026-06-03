import Navbar         from '@/components/ui/Navbar'
import HeroSection     from '@/components/sections/HeroSection'
import StatsBar        from '@/components/sections/StatsBar'
import FeatureShowcase from '@/components/sections/FeatureShowcase'
import HowItWorks      from '@/components/sections/HowItWorks'
import PricingSection  from '@/components/sections/PricingSection'
import FaqSection      from '@/components/sections/FaqSection'
import CtaBanner       from '@/components/sections/CtaBanner'
import Footer          from '@/components/sections/Footer'
import { SITE_NAME, SITE_DESCRIPTION, buildWhatsAppUrl } from '@/lib/constants'

export default function HomePage() {
  const structuredData = {
    '@context':   'https://schema.org',
    '@type':      'SoftwareApplication',
    name:         SITE_NAME,
    description:  SITE_DESCRIPTION,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS',
    offers: {
      '@type':       'Offer',
      price:         '49999',
      priceCurrency: 'NGN',
      priceValidUntil: '2027-12-31',
    },
    contactPoint: {
      '@type':       'ContactPoint',
      contactType:   'customer support',
      url:            buildWhatsAppUrl(),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />

      <main>
        <HeroSection />
        <StatsBar />
        <FeatureShowcase />
        <HowItWorks />
        <PricingSection />
        <FaqSection />
        <CtaBanner />
      </main>

      <Footer />
    </>
  )
}
