import type { FaqItem } from './seo-data'

export const site = {
  url: 'https://gpautos.nl',
  name: "GP Auto's",
  locale: 'nl_NL',
  language: 'nl',
  defaultImage: '/og-image.png',
  logo: '/logo.png',
} as const

export const business = {
  name: "GP Auto's",
  description:
    'Autogarage in Lichtenvoorde voor onderhoud, diagnose, reparatie, remmen en coderen voor Audi, Volkswagen, SEAT en Škoda.',
  phone: '+31615530641',
  phoneDisplay: '+31 6 155 30 641',
  email: 'info@gpautos.nl',
  priceRange: '$$',
  slogan: 'Autoservice op afspraak in Lichtenvoorde en de Achterhoek',
  address: {
    streetAddress: 'Galileïstraat 5',
    postalCode: '7131 PE',
    locality: 'Lichtenvoorde',
    region: 'Gelderland',
    country: 'NL',
  },
  geo: {
    latitude: 51.988019,
    longitude: 6.561491,
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Galile%C3%AFstraat+5%2C+7131PE+Lichtenvoorde',
  sameAs: [
    'https://www.facebook.com/gpautosnl',
    'https://www.instagram.com/gp.autos',
  ],
  areaServed: [
    'Lichtenvoorde',
    'Oost Gelre',
    'Achterhoek',
    'Groenlo',
    'Aalten',
    'Winterswijk',
    'Eibergen',
    'Borculo',
    'Doetinchem',
    'Varsseveld',
    'Zelhem',
  ],
  // Škoda with the caron — this list is rendered directly into page copy.
  brandsServiced: ['Audi', 'Volkswagen', 'SEAT', 'Škoda', 'Cupra'],
  /**
   * Verified facts only. Nothing here may be added without confirmation from the
   * business — the landing page copy is built on the assumption that it is true.
   * Notably absent, and deliberately so: opening hours (the workshop works by
   * appointment only) and a Google review count (score is 5.0, count unknown).
   */
  appointmentOnly: true,
  credentials: ['RDW erkend bedrijf'],
  googleRating: 5,
  serviceTypes: [
    'auto onderhoud',
    'storingsdiagnose',
    'auto reparatie',
    'remmen',
    'wielophanging',
    'VAG-COM coderen',
    'VCDS coderen',
  ],
} as const

export type BreadcrumbItem = {
  name: string
  path: string
}

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function postalAddressStructuredData() {
  return {
    '@type': 'PostalAddress',
    streetAddress: business.address.streetAddress,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  }
}

export function placeAreaStructuredData(
  name: string,
  type: 'City' | 'AdministrativeArea' | 'Place' = 'Place'
) {
  return {
    '@type': type,
    name,
  }
}

export function localBusinessStructuredData(
  overrides: Record<string, unknown> = {}
) {
  return {
    '@type': ['AutoRepair', 'AutomotiveBusiness', 'LocalBusiness'],
    '@id': `${site.url}/#business`,
    name: business.name,
    description: business.description,
    url: site.url,
    image: absoluteUrl(site.defaultImage),
    logo: absoluteUrl(site.logo),
    telephone: business.phone,
    email: business.email,
    priceRange: business.priceRange,
    slogan: business.slogan,
    address: postalAddressStructuredData(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: business.phone,
        contactType: 'customer service',
        areaServed: business.address.country,
        availableLanguage: ['nl'],
      },
    ],
    areaServed: business.areaServed.map((name) =>
      placeAreaStructuredData(name)
    ),
    knowsAbout: business.serviceTypes,
    brand: business.brandsServiced.map((name) => ({
      '@type': 'Brand',
      name,
    })),
    sameAs: business.sameAs,
    ...overrides,
  }
}

export function websiteStructuredData() {
  return {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: site.language,
    publisher: {
      '@id': `${site.url}/#business`,
    },
  }
}

export function webpageStructuredData(
  path: string,
  name: string,
  description: string
) {
  return {
    '@type': 'WebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: site.language,
    isPartOf: {
      '@id': `${site.url}/#website`,
    },
    about: {
      '@id': `${site.url}/#business`,
    },
  }
}

export function faqStructuredData(faqs: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbStructuredData(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function graphStructuredData(items: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': items,
  }
}

export function brandSpecialistStructuredData(
  path: string,
  title: string,
  description: string,
  brandName: string,
  faqs: FaqItem[]
) {
  return graphStructuredData([
    webpageStructuredData(path, title, description),
    localBusinessStructuredData({
      name: `${business.name} - ${brandName} specialist`,
      description,
      url: absoluteUrl(path),
      brand: {
        '@type': 'Brand',
        name: brandName,
      },
      potentialAction: {
        '@type': 'ReserveAction',
        name: 'Maak een afspraak',
        target: absoluteUrl('/afspraak'),
      },
    }),
    faqStructuredData(faqs),
    breadcrumbStructuredData([
      { name: 'Home', path: '/' },
      { name: `${brandName} specialist`, path },
    ]),
  ])
}
