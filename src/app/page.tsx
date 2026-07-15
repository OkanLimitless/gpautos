import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import SocialProof from '@/components/SocialProof'
import ServicesGrid from '@/components/ServicesGrid'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import LocalServiceSection from '@/components/LocalServiceSection'
import { homeFaqs } from '@/lib/home-data'
import { faqStructuredData, graphStructuredData, serializeJsonLd, webpageStructuredData } from '@/lib/site-data'

export const metadata: Metadata = {
  title: "Autogarage Lichtenvoorde | GP Auto's VAG Specialist",
  description:
    "Lokale autogarage in Lichtenvoorde voor onderhoud, reparatie, diagnose, remmen en VAG-service. Voor Lichtenvoorde en de hele Achterhoek.",
  keywords: [
    'autogarage Lichtenvoorde',
    'garage Lichtenvoorde',
    'onderhoud Lichtenvoorde',
    'diagnose Achterhoek',
    'VAG specialist Lichtenvoorde',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Autogarage Lichtenvoorde | GP Auto's VAG Specialist",
    description:
      'Onderhoud, diagnose en VAG-service in Lichtenvoorde voor Audi, Volkswagen, SEAT en Skoda. Ook bereikbaar voor klanten uit de Achterhoek.',
    url: 'https://gpautos.nl',
    siteName: "GP Auto's",
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function Home() {
  const jsonLd = graphStructuredData([
    webpageStructuredData(
      '/',
      "Autogarage Lichtenvoorde | GP Auto's VAG Specialist",
      'Autogarage in Lichtenvoorde voor onderhoud, diagnose, remmen en coderen voor Audi, Volkswagen, SEAT en Skoda.'
    ),
    faqStructuredData(homeFaqs),
  ])

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Hero />
      <LocalServiceSection />
      <ServicesGrid />
      <AboutSection />
      <SocialProof />
      <ContactSection />
    </Layout>
  )
}
