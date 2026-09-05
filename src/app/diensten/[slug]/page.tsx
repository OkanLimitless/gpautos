import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Layout from '@/components/Layout'
import { PageHero, CheckList, ServiceCards } from '@/components/LandingSections'
import FaqSection from '@/components/FaqSection'
import ContactSection from '@/components/ContactSection'
import TrustBar from '@/components/TrustBar'
import { serviceVisuals } from '@/lib/landing-data'
import { services, getServiceBySlug } from '@/lib/seo-data'
import {
  breadcrumbStructuredData,
  business,
  faqStructuredData,
  graphStructuredData,
  placeAreaStructuredData,
  postalAddressStructuredData,
  serializeJsonLd,
  site,
  webpageStructuredData,
} from '@/lib/site-data'

interface ServicePageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}

  const title = `${service.name} in Lichtenvoorde | GP Auto's VAG specialist`
  const description = service.metaDescription

  return {
    title,
    description,
    keywords: [
      service.name,
      'Lichtenvoorde',
      'VAG specialist',
      'garage',
      'onderhoud',
      'reparatie',
    ],
    openGraph: {
      title,
      description,
      url: `${site.url}/diensten/${service.slug}`,
      siteName: "GP Auto's",
      locale: 'nl_NL',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${service.name} bij GP Auto's`,
        },
      ],
    },
    alternates: {
      canonical: `/diensten/${service.slug}`,
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const relatedServices = service.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(
      (
        relatedService
      ): relatedService is NonNullable<ReturnType<typeof getServiceBySlug>> =>
        Boolean(relatedService)
    )

  const pagePath = `/diensten/${service.slug}`
  const pageTitle = `${service.name} in Lichtenvoorde | GP Auto's VAG specialist`
  const jsonLd = graphStructuredData([
    webpageStructuredData(pagePath, pageTitle, service.metaDescription),
    {
      '@type': 'Service',
      '@id': `${site.url}${pagePath}#service`,
      name: service.name,
      description: service.metaDescription,
      serviceType: service.name,
      url: `${site.url}${pagePath}`,
      provider: {
        '@type': 'AutoRepair',
        '@id': `${site.url}/#business`,
        name: "GP Auto's",
        address: postalAddressStructuredData(),
      },
      areaServed: [
        placeAreaStructuredData('Achterhoek, Gelderland'),
        placeAreaStructuredData('Lichtenvoorde', 'City'),
      ],
    },
    faqStructuredData(service.faqs),
    breadcrumbStructuredData([
      { name: 'Home', path: '/' },
      { name: 'Diensten', path: '/#diensten' },
      { name: service.name, path: pagePath },
    ]),
  ])

  const visual = serviceVisuals[service.slug]
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <PageHero
        eyebrow={`${service.name} in Lichtenvoorde`}
        title={visual.headline}
        description={visual.detail}
        image={visual.image}
        imageAlt={visual.alt}
        breadcrumb={service.name}
      />
      <TrustBar />
      <section className="section detail-section">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">
              <span className="red-square" />
              HERKENT U DIT?
            </p>
            <h2>
              Dan kijken we graag
              <br />
              met u mee.
            </h2>
            <p>{service.intro}</p>
          </div>
          <CheckList items={service.idealFor} />
        </div>
      </section>
      <section className="section bg-[var(--bg-alt)]">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow">
              <span className="red-square" />
              ONZE AANPAK
            </p>
            <h2>
              Weten wat nodig is.
              <br />
              Doen wat is afgesproken.
            </h2>
            <p>{service.longDescription}</p>
          </div>
          <div>
            <h3 className="mb-6 text-2xl">Wat we controleren of uitvoeren</h3>
            <CheckList items={service.checklist} />
          </div>
        </div>
      </section>
      <FaqSection items={service.faqs} />
      <section className="section detail-section">
        <div className="container">
          <div className="section-intro">
            <div>
              <p className="eyebrow">
                <span className="red-square" />
                OOK GOED OM TE WETEN
              </p>
              <h2 className="section-heading">Meer voor uw auto.</h2>
            </div>
            <p className="section-lead">
              Deze werkzaamheden kunnen goed aansluiten bij uw bezoek.
            </p>
          </div>
          <ServiceCards items={relatedServices} />
        </div>
      </section>
      <ContactSection />
    </Layout>
  )
}
