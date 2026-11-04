import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'
import { services } from '@/lib/seo-data'
import { business, graphStructuredData, serializeJsonLd, site, webpageStructuredData } from '@/lib/site-data'

export const metadata = {
  title: 'Kennisbank | GP Auto\'s Lichtenvoorde',
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
    <div className="detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Kruimelpad"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Kennisbank</span></nav>
          <h1>Praktisch auto-advies</h1>
          <p className="page-intro">Over onderhoud en storingen, voor Lichtenvoorde en de Achterhoek.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/afspraak" className="btn-primary">Afspraak maken</Link>
            <a href={`tel:${business.phone}`} className="btn-secondary">Bel direct</a>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="container editorial-grid">
          <div>
            <h2>Uit de werkplaats</h2>
            <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">Korte, bruikbare artikelen over onderhoud en storingen. Geschreven voor mensen die snel willen weten wat slim is en wanneer een afspraak nodig is.</p>
            <div className="mt-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="border-t border-[var(--border)] py-8">
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--text-secondary)]"><span>{post.focusKeyword}</span><span>{post.readingTime}</span></div>
                  <h2 className="mt-4"><Link href={`/kennisbank/${post.slug}`}>{post.title}</Link></h2>
                  <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">{post.excerpt}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    <Link href={`/kennisbank/${post.slug}`} className="underline underline-offset-4 font-semibold">Artikel lezen</Link>
                    <span className="text-sm text-[var(--text-secondary)]">{post.focusArea}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside>
            <h2>Waar deze artikelen voor helpen</h2>
            <ul className="detail-list mt-6">
              <li>sneller beslissen of u direct naar de garage moet</li>
              <li>beter voorbereid naar een onderhoudsbeurt of diagnose-afspraak gaan</li>
              <li>minder onnodige kosten door uitstel</li>
            </ul>
            <h2 className="mt-12">Populaire diensten</h2>
            <div className="mt-6">
              {featuredServices.map((service) => (
                <Link key={service.slug} href={`/diensten/${service.slug}`} className="service-row">
                  <h3>{service.name}</h3><p>{service.shortDescription}</p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <section className="booking-band">
        <div className="container">
          <h2>Direct afspraak nodig?</h2>
          <p className="mt-4 max-w-2xl">Voor diagnose, onderhoud of remwerk kunt u direct een afspraak plannen. Dat is meestal sneller dan wachten tot een klein probleem groter wordt.</p>
          <Link href="/afspraak" className="btn-primary mt-8">Naar afspraak</Link>
        </div>
      </section>
    </div>
  )
}
