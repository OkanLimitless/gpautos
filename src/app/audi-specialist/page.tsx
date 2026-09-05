import { Metadata } from 'next'
import BrandLanding from '@/components/BrandLanding'
import { brandSpecialistStructuredData } from '@/lib/site-data'

export const metadata: Metadata = {
  title: "Audi specialist in Lichtenvoorde | GP Auto's",
  description:
    'Audi onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek. Van A1 en A3 tot Q5, e-tron en S tronic, op afspraak en met duidelijke uitleg.',
  openGraph: {
    title: "Audi specialist in Lichtenvoorde | GP Auto's",
    description:
      'Onderhoud, diagnose en reparatie voor Audi in Lichtenvoorde. Van A1 en A3 tot Q5, e-tron en S tronic.',
    url: 'https://gpautos.nl/audi-specialist',
    siteName: "GP Auto's",
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "GP Auto's Audi specialist in Lichtenvoorde",
      },
    ],
  },
  alternates: {
    canonical: '/audi-specialist',
  },
}

export default function AudiSpecialistPage() {
  const audiModels = [
    'A1',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'Q2',
    'Q3',
    'Q5',
    'Q7',
    'Q8',
    'TT',
    'e-tron',
  ]

  const faqItems = [
    {
      question:
        "Werkt GP Auto's ook aan moderne Audi modellen en hybride of elektrische varianten?",
      answer:
        'Ja. Wij helpen met regulier onderhoud, diagnose en service voor recente Audi-modellen, inclusief e-tron varianten en modellen met complexe elektronica.',
    },
    {
      question: 'Kan ik terecht voor S tronic, storingen en coderingen?',
      answer:
        'Ja. Wij combineren merkgerichte diagnose met onderhoud en VAG-coderingen, zodat u niet onnodig onderdelen laat vervangen.',
    },
    {
      question: 'Helpen jullie klanten uit de hele Achterhoek?',
      answer:
        'Ja. Veel Audi-rijders komen uit Lichtenvoorde, Groenlo, Aalten, Winterswijk en de omliggende dorpen naar onze werkplaats.',
    },
  ]

  const jsonLd = brandSpecialistStructuredData(
    '/audi-specialist',
    "Audi specialist in Lichtenvoorde | GP Auto's",
    'Audi onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek.',
    'Audi',
    faqItems
  )

  return (
    <BrandLanding
      slug="audi"
      models={audiModels}
      faqs={faqItems}
      jsonLd={jsonLd}
    />
  )
}
