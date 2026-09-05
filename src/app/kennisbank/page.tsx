import Link from 'next/link'
import Layout from '@/components/Layout'
import { ArrowUpRight } from '@/components/Icons'
import { PageHero, ServiceCards } from '@/components/LandingSections'
import { blogPosts } from '@/lib/blog-data'
import { services } from '@/lib/seo-data'
import {
  business,
  graphStructuredData,
  serializeJsonLd,
  site,
  webpageStructuredData,
} from '@/lib/site-data'

export const metadata = {
  title: "Kennisbank | GP Auto's Lichtenvoorde",
  description:
    'Praktische artikelen over onderhoud en storingen voor automobilisten in Lichtenvoorde en de Achterhoek.',
  keywords: [
    'garage Lichtenvoorde',
    'auto onderhoud Achterhoek',
    'autogarage nabij Lichtenvoorde',
  ],
  alternates: {
    canonical: '/kennisbank',
  },
}

export default function KnowledgeBasePage() {
  const featuredServices = services.slice(0, 3)
  const jsonLd = graphStructuredData([
    webpageStructuredData(
      '/kennisbank',
      "Kennisbank | GP Auto's Lichtenvoorde",
      'Praktische artikelen over onderhoud en storingen voor automobilisten in Lichtenvoorde en de Achterhoek.'
    ),
    {
      '@type': 'CollectionPage',
      '@id': `${site.url}/kennisbank#collection`,
      name: "Kennisbank GP Auto's",
      url: `${site.url}/kennisbank`,
      hasPart: blogPosts.map((post) => ({
        '@type': 'Article',
        headline: post.title,
        url: `${site.url}/kennisbank/${post.slug}`,
        dateModified: post.updatedAt,
      })),
    },
  ])

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <PageHero
        eyebrow="Kennisbank"
        title={
          <>
            Meer weten.
            <br />
            <span className="text-soft">Beter begrijpen.</span>
          </>
        }
        description="Praktische uitleg over onderhoud en storingen. Zodat u weet waar u op kunt letten en met een duidelijk verhaal naar de garage gaat."
        image="/images/overgp.jpeg"
        imageAlt="Diagnoseapparatuur in het interieur van een Audi"
        breadcrumb="Kennisbank"
      />
      <section className="section detail-section">
        <div className="container">
          <p className="eyebrow mb-6 section-label">Artikelen</p>
          <div className="knowledge-grid">
            {blogPosts.map((post, i) => (
              <article key={post.slug} className="knowledge-card">
                <div className="eyebrow">
                  <span>0{i + 1} / ADVIES</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2>
                  <Link href={`/kennisbank/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <Link href={`/kennisbank/${post.slug}`} className="text-link">
                  Lees het artikel <ArrowUpRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[var(--bg-alt)]">
        <div className="container">
          <div className="section-intro">
            <div>
              <p className="eyebrow section-label">Onze diensten</p>
              <h2 className="section-heading">We helpen u verder.</h2>
            </div>
          </div>
          <ServiceCards items={featuredServices} />
        </div>
      </section>
    </Layout>
  )
}
