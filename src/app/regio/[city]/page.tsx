import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { PageHero, CheckList, ServiceCards } from '@/components/LandingSections'
import FaqSection from '@/components/FaqSection'
import ContactSection from '@/components/ContactSection'
import TrustBar from '@/components/TrustBar'
import { ArrowUpRight, Pin } from '@/components/Icons'
import { cities, getCityBySlug, getServiceBySlug } from '@/lib/seo-data'
import {
  breadcrumbStructuredData,
  business,
  faqStructuredData,
  graphStructuredData,
  localBusinessStructuredData,
  placeAreaStructuredData,
  serializeJsonLd,
  site,
  webpageStructuredData,
} from '@/lib/site-data'

interface CityPageProps {
  params: { city: string }
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  if (!city) return {}

  const title = `Autogarage ${city.name} | VAG specialist in de Achterhoek`
  const description = city.metaDescription

  return {
    title,
    description,
    keywords: [
      city.name,
      'autogarage',
      'garage',
      'VAG specialist',
      'onderhoud',
      'diagnose',
    ],
    openGraph: {
      title,
      description,
      url: `${site.url}/regio/${city.slug}`,
      siteName: "GP Auto's",
      locale: 'nl_NL',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `GP Auto's in ${city.name}`,
        },
      ],
    },
    alternates: {
      canonical: `/regio/${city.slug}`,
    },
  }
}

export default function CityPage({ params }: CityPageProps) {
  const city = getCityBySlug(params.city)
  if (!city) notFound()

  const featuredServices = city.featuredServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(
      (service): service is NonNullable<ReturnType<typeof getServiceBySlug>> =>
        Boolean(service)
    )

  const nearbyCities = city.nearbyCitySlugs
    .map((slug) => getCityBySlug(slug))
    .filter(
      (
        nearbyCity
      ): nearbyCity is NonNullable<ReturnType<typeof getCityBySlug>> =>
        Boolean(nearbyCity)
    )

  const pagePath = `/regio/${city.slug}`
  const pageTitle = `Autogarage ${city.name} | VAG specialist in de Achterhoek`
  const jsonLd = graphStructuredData([
    webpageStructuredData(pagePath, pageTitle, city.metaDescription),
    localBusinessStructuredData({
      url: `${site.url}${pagePath}`,
      description: city.metaDescription,
      areaServed: [
        placeAreaStructuredData(city.name, 'City'),
        placeAreaStructuredData(city.region, 'AdministrativeArea'),
      ],
    }),
    faqStructuredData(city.faqs),
    breadcrumbStructuredData([
      { name: 'Home', path: '/' },
      { name: city.name, path: pagePath },
    ]),
  ])

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <PageHero
        eyebrow={`Autogarage voor ${city.name} en omgeving`}
        title={
          <>
            {city.slug === 'lichtenvoorde' ? 'Thuis in' : 'Dichtbij'}{' '}
            {city.name}.<br />
            <span className="text-soft">Dicht bij uw auto.</span>
          </>
        }
        description={`Uw onafhankelijke VAG-specialist in Lichtenvoorde. Voor automobilisten uit ${city.name} die persoonlijke aandacht, duidelijke diagnose en goed onderhoud waarderen.`}
        image="/images/hero.jpeg"
        imageAlt="Een monteur van GP Auto's aan het werk"
        breadcrumb={`Garage voor ${city.name}`}
        caption="ONZE WERKPLAATS / GALILEÏSTRAAT 5, LICHTENVOORDE"
      />
      <TrustBar />
      <section className="section detail-section">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow section-label">Garage in de Achterhoek</p>
            <h2>
              Een vertrouwd adres.
              <br />
              Ook vanuit {city.name}.
            </h2>
            <p>{city.intro}</p>
          </div>
          <CheckList items={city.whyChoose} />
        </div>
      </section>
      <section className="section bg-[var(--bg-alt)]">
        <div className="container">
          <div className="section-intro">
            <div>
              <p className="eyebrow section-label">Diensten</p>
              <h2 className="section-heading">Goed voor uw auto.</h2>
            </div>
            <p className="section-lead">
              Onderhoud, diagnose en reparatie voor Audi, Volkswagen, SEAT,
              Škoda en Cupra.
            </p>
          </div>
          <ServiceCards items={featuredServices} />
        </div>
      </section>
      <section className="section">
        <div className="container detail-grid">
          <div>
            <p className="eyebrow section-label">Bereikbaarheid</p>
            <h2>
              We zien u graag
              <br />
              in Lichtenvoorde.
            </h2>
            <p>{city.routeTip}</p>
            <p className="mt-4">
              We werken uitsluitend op afspraak. Neem vooraf contact op, dan
              reserveren we tijd voor uw auto.
            </p>
          </div>
          <div className="location-panel">
            <Pin />
            <h3>{business.address.streetAddress}</h3>
            <p>
              {business.address.postalCode} {business.address.locality}
            </p>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink"
            >
              Plan uw route <ArrowUpRight />
              <span className="sr-only"> (nieuw tabblad)</span>
            </a>
          </div>
        </div>
      </section>
      <FaqSection items={city.faqs} />
      <ContactSection />
      <section className="section-tight">
        <div className="container">
          <p className="eyebrow section-label">In de buurt</p>
          <div className="city-links">
            {nearbyCities.map((nearby) => (
              <Link key={nearby.slug} href={`/regio/${nearby.slug}`}>
                {nearby.name} ↗
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
