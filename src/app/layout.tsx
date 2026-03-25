import type { Metadata } from 'next'
import { Inter, Outfit, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'], variable: '--font-bebas' })
const siteUrl = 'https://gpautos.nl'

export const metadata: Metadata = {
  title: "GP Auto's – Premium autoservice in Lichtenvoorde",
  description: 'Premium onderhoud, reparatie en diagnose in Lichtenvoorde. VAG specialist voor Audi, Volkswagen, SEAT en Skoda.',
  applicationName: "GP Auto's",
  keywords: [
    'autogarage Lichtenvoorde',
    'garage Lichtenvoorde',
    'VAG specialist Achterhoek',
    'auto onderhoud',
    'auto reparatie',
    'APK Lichtenvoorde',
    'Audi specialist',
    'Volkswagen specialist',
    'SEAT specialist',
    'Skoda specialist',
  ],
  authors: [{ name: "GP Auto's" }],
  creator: "GP Auto's",
  publisher: "GP Auto's",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "GP Auto's – Premium autoservice in Lichtenvoorde",
    description: 'Premium onderhoud, reparatie en diagnose in Lichtenvoorde. Uw VAG specialist voor Audi, Volkswagen, SEAT en Skoda.',
    url: siteUrl,
    siteName: "GP Auto's",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "GP Auto's werkplaats in Lichtenvoorde",
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "GP Auto's – Premium autoservice in Lichtenvoorde",
    description: 'VAG Specialist in Lichtenvoorde voor premium onderhoud en diagnose.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "AutomotiveBusiness", "LocalBusiness"],
  "@id": `${siteUrl}/#business`,
  "name": "GP Auto's",
  "description": "Premium autoservice, onderhoud en diagnose in Lichtenvoorde. Specialist in Audi, Volkswagen, SEAT en Skoda.",
  "url": siteUrl,
  "image": `${siteUrl}/og-image.png`,
  "logo": `${siteUrl}/logo.png`,
  "telephone": "+31615530641",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Galileïstraat 5",
    "addressLocality": "Lichtenvoorde",
    "postalCode": "7131PE",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.988019,
    "longitude": 6.561491
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+31615530641",
      "contactType": "customer service",
      "areaServed": "NL",
      "availableLanguage": ["nl"]
    }
  ],
  "areaServed": [
    {
      "@type": "Place",
      "name": "Lichtenvoorde"
    },
    {
      "@type": "Place",
      "name": "Achterhoek"
    },
    {
      "@type": "Place",
      "name": "Groenlo"
    },
    {
      "@type": "Place",
      "name": "Aalten"
    }
  ],
  "slogan": "Autoservice op afspraak in Lichtenvoorde en de Achterhoek",
  "sameAs": [
    "https://www.facebook.com/gpautosnl",
    "https://www.instagram.com/gp.autos"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#18181b" />
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-697295426" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'AW-697295426');
          `}
        </Script>
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-697295426/H2cDCNC_pfEaEMLEv8wC',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${bebas.variable} bg-zinc-950 text-white`}>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#18181b',
              color: '#fff',
              border: '1px solid #3f3f46',
            },
          }}
        />
      </body>
    </html>
  )
}
