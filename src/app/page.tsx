import type { Metadata } from 'next'
import './landing.css'
import RevealObserver from '@/components/RevealObserver'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import {
  absoluteUrl,
  graphStructuredData,
  serializeJsonLd,
  webpageStructuredData,
} from '@/lib/site-data'

const TITLE = "Autogarage Lichtenvoorde | GP Auto's"
const DESCRIPTION =
  'Autogarage in Lichtenvoorde voor onderhoud, APK, diagnose, remmen en coderen voor alle merken. Uitsluitend op afspraak, ook voor de rest van de Achterhoek.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'autogarage Lichtenvoorde',
    'garage Lichtenvoorde',
    'onderhoud Lichtenvoorde',
    'diagnose Achterhoek',
    'autogarage alle merken Lichtenvoorde',
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
  // No aggregateRating: the Google score is 5.0 but the review count is
  // unverified, and rating markup without one is a structured-data risk.
  const jsonLd = graphStructuredData([
    webpageStructuredData('/', TITLE, DESCRIPTION),
    {
      '@type': 'ReserveAction',
      name: 'Afspraak maken',
      target: absoluteUrl('/#afspraak'),
    },
  ])

  return (
    <div className="lp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <RevealObserver />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
