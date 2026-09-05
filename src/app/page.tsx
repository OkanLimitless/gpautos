import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import BrandsSection from '@/components/BrandsSection'
import AboutSection from '@/components/AboutSection'
import ReviewsSection from '@/components/ReviewsSection'
import FaqSection, { HOME_FAQS } from '@/components/FaqSection'
import ContactSection from '@/components/ContactSection'
import {
  absoluteUrl,
  faqStructuredData,
  graphStructuredData,
  serializeJsonLd,
  webpageStructuredData,
} from '@/lib/site-data'

const TITLE = "Autogarage Lichtenvoorde | GP Auto's VAG-specialist"
const DESCRIPTION =
  'Autogarage in Lichtenvoorde voor onderhoud, diagnose, remmen en coderen aan Audi, Volkswagen, SEAT en Škoda. Uitsluitend op afspraak, ook voor de rest van de Achterhoek.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'autogarage Lichtenvoorde',
    'garage Lichtenvoorde',
    'onderhoud Lichtenvoorde',
    'diagnose Achterhoek',
    'VAG specialist Lichtenvoorde',
    'coderen VCDS Achterhoek',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://gpautos.nl',
    siteName: "GP Auto's",
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function Home() {
  // Render the same FAQ copy in the page and its structured data.
  const jsonLd = graphStructuredData([
    webpageStructuredData('/', TITLE, DESCRIPTION),
    faqStructuredData(HOME_FAQS),
    {
      '@type': 'ReserveAction',
      name: 'Afspraak maken',
      target: absoluteUrl('/#afspraak'),
    },
  ])

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Hero />
      <TrustBar />
      <BrandsSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
    </Layout>
  )
}
