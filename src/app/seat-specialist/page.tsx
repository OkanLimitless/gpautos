import { Metadata } from 'next'
import BrandLanding from '@/components/BrandLanding'
import { brandSpecialistStructuredData } from '@/lib/site-data'

export const metadata: Metadata = {
  title: "SEAT specialist in Lichtenvoorde | GP Auto's",
  description:
    'SEAT onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek. Voor Ibiza, Leon, Arona, Ateca, Tarraco en Cupra-modellen.',
  openGraph: {
    title: "SEAT specialist in Lichtenvoorde | GP Auto's",
    description:
      'SEAT onderhoud, diagnose en reparatie in Lichtenvoorde. Voor Ibiza, Leon, Arona, Ateca, Tarraco en Cupra-modellen.',
    url: 'https://gpautos.nl/seat-specialist',
    siteName: "GP Auto's",
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "GP Auto's SEAT specialist in Lichtenvoorde",
      },
    ],
  },
  alternates: {
    canonical: '/seat-specialist',
  },
}

export default function SeatSpecialistPage() {
  const seatModels = [
    'Ibiza',
    'Leon',
    'Arona',
    'Ateca',
    'Tarraco',
    'Mii',
    'Alhambra',
    'Cupra Formentor',
    'Cupra Born',
  ]

  const faqItems = [
    {
      question:
        'Werken jullie aan SEAT en Cupra modellen met dezelfde VAG-techniek?',
      answer:
        'Ja. SEAT en Cupra delen veel techniek met Volkswagen en Audi, waardoor wij gericht kunnen helpen met onderhoud en diagnose.',
    },
    {
      question:
        'Kunnen jullie helpen bij storingen, remmen en sportieve rijproblemen?',
      answer:
        'Ja. Veel SEAT-rijders komen voor storingsdiagnose, remmen, ophanging en onderhoud dat past bij een sportieve rijstijl.',
    },
    {
      question: 'Is de werkplaats geschikt voor klanten uit de Achterhoek?',
      answer:
        'Ja. Vanuit Lichtenvoorde zijn wij goed bereikbaar voor SEAT-rijders uit Groenlo, Aalten, Winterswijk en omliggende plaatsen.',
    },
  ]

  const jsonLd = brandSpecialistStructuredData(
    '/seat-specialist',
    "SEAT specialist in Lichtenvoorde | GP Auto's",
    'SEAT onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek.',
    'SEAT',
    faqItems
  )

  return (
    <BrandLanding
      slug="seat"
      models={seatModels}
      faqs={faqItems}
      jsonLd={jsonLd}
    />
  )
}
