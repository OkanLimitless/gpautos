import { Metadata } from 'next'
import BrandLanding from '@/components/BrandLanding'
import { brandSpecialistStructuredData } from '@/lib/site-data'

export const metadata: Metadata = {
  title: "Škoda specialist in Lichtenvoorde | GP Auto's",
  description:
    'Škoda onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek. Voor Fabia, Octavia, Superb, Kodiaq, Enyaq en meer.',
  openGraph: {
    title: "Škoda specialist in Lichtenvoorde | GP Auto's",
    description:
      'Škoda onderhoud, diagnose en reparatie in Lichtenvoorde. Voor Fabia, Octavia, Superb, Kodiaq, Enyaq en meer.',
    url: 'https://gpautos.nl/skoda-specialist',
    siteName: "GP Auto's",
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "GP Auto's Škoda specialist in Lichtenvoorde",
      },
    ],
  },
  alternates: {
    canonical: '/skoda-specialist',
  },
}

export default function SkodaSpecialistPage() {
  const skodaModels = [
    'Fabia',
    'Scala',
    'Octavia',
    'Superb',
    'Kamiq',
    'Karoq',
    'Kodiaq',
    'Enyaq iV',
    'Citigo',
  ]

  const faqItems = [
    {
      question:
        'Kunnen jullie Škoda onderhoud doen volgens fabrieksvoorschrift?',
      answer:
        'Ja. Wij voeren onderhoud uit met aandacht voor de techniek van Škoda en houden rekening met service-intervallen en digitale historie.',
    },
    {
      question: "Helpen jullie ook bij familieauto's en leasewagens?",
      answer:
        'Ja. Veel Škoda-rijders komen met Octavia, Superb, Kodiaq of Fabia voor onderhoud, diagnose en reparatie.',
    },
    {
      question: 'Zijn jullie bereikbaar voor klanten uit de Achterhoek?',
      answer:
        'Ja. Onze werkplaats in Lichtenvoorde is goed bereikbaar voor klanten uit Groenlo, Aalten, Winterswijk en de rest van de regio.',
    },
  ]

  const jsonLd = brandSpecialistStructuredData(
    '/skoda-specialist',
    "Škoda specialist in Lichtenvoorde | GP Auto's",
    'Škoda onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek.',
    'Škoda',
    faqItems
  )

  return (
    <BrandLanding
      slug="skoda"
      models={skodaModels}
      faqs={faqItems}
      jsonLd={jsonLd}
    />
  )
}
