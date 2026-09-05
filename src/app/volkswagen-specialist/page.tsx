import { Metadata } from 'next'
import BrandLanding from '@/components/BrandLanding'
import { brandSpecialistStructuredData } from '@/lib/site-data'

export const metadata: Metadata = {
  title: "Volkswagen specialist in Lichtenvoorde | GP Auto's",
  description:
    'Volkswagen onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek. Voor Golf, Polo, Passat, Tiguan, T-Roc, ID.3 en meer.',
  openGraph: {
    title: "Volkswagen specialist in Lichtenvoorde | GP Auto's",
    description:
      'Volkswagen onderhoud, diagnose en reparatie in Lichtenvoorde. Voor Golf, Polo, Passat, Tiguan, T-Roc, ID.3 en meer.',
    url: 'https://gpautos.nl/volkswagen-specialist',
    siteName: "GP Auto's",
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "GP Auto's Volkswagen specialist in Lichtenvoorde",
      },
    ],
  },
  alternates: {
    canonical: '/volkswagen-specialist',
  },
}

export default function VolkswagenSpecialistPage() {
  const vwModels = [
    'Polo',
    'Golf',
    'T-Cross',
    'T-Roc',
    'Tiguan',
    'Passat',
    'Arteon',
    'Touran',
    'Touareg',
    'ID.3',
    'ID.4',
    'ID.5',
    'Caddy',
    'Transporter',
  ]

  const faqItems = [
    {
      question:
        'Werken jullie aan zowel benzine, diesel als elektrische Volkswagen-modellen?',
      answer:
        'Ja. Wij helpen met onderhoud en diagnose voor TSI, TDI, mild-hybrid en elektrische ID-modellen, inclusief de elektronische systemen daaromheen.',
    },
    {
      question: 'Kunnen jullie DSG-, AdBlue- en storingsproblemen onderzoeken?',
      answer:
        'Ja. Wij combineren diagnose met praktische reparatie-adviezen, zodat u weet wat er nodig is en wat nog even kan wachten.',
    },
    {
      question:
        'Is de werkplaats goed bereikbaar voor klanten uit de Achterhoek?',
      answer:
        'Ja. Onze werkplaats in Lichtenvoorde is een logische keuze voor Volkswagen-rijders uit Groenlo, Aalten, Winterswijk en omliggende plaatsen.',
    },
  ]

  const jsonLd = brandSpecialistStructuredData(
    '/volkswagen-specialist',
    "Volkswagen specialist in Lichtenvoorde | GP Auto's",
    'Volkswagen onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek.',
    'Volkswagen',
    faqItems
  )

  return (
    <BrandLanding
      slug="volkswagen"
      models={vwModels}
      faqs={faqItems}
      jsonLd={jsonLd}
    />
  )
}
