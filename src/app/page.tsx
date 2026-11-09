import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import './landing.css'
import RevealObserver from '@/components/home/RevealObserver'
import HomeHero from '@/components/home/HomeHero'
import HomeServices from '@/components/home/HomeServices'
import HomeAbout from '@/components/home/HomeAbout'
import HomeContact from '@/components/home/HomeContact'
import {
  absoluteUrl,
  graphStructuredData,
  serializeJsonLd,
  webpageStructuredData,
} from '@/lib/site-data'

const TITLE = "Autogarage Lichtenvoorde | GP Auto's"
const DESCRIPTION =
  'Autogarage in Lichtenvoorde voor onderhoud, diagnose, remmen en coderen voor alle merken. Uitsluitend op afspraak, ook voor de rest van de Achterhoek.'

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
  const jsonLd = graphStructuredData([
    webpageStructuredData('/', TITLE, DESCRIPTION),
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
      <div className="lp">
        <RevealObserver />
        <HomeHero />
        <HomeServices />
        <HomeAbout />
        <HomeContact />
      </div>
    </Layout>
  )
}
