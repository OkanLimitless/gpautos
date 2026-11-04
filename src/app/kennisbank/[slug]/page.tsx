import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPostBySlug, type BlogBlock } from '@/lib/blog-data'
import { getServiceBySlug, type Service as SeoService } from '@/lib/seo-data'
import {
  absoluteUrl,
  breadcrumbStructuredData,
  business,
  faqStructuredData,
  graphStructuredData,
  serializeJsonLd,
  site,
  webpageStructuredData,
} from '@/lib/site-data'

interface KnowledgeArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: KnowledgeArticlePageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Kennisbank GP Auto's`,
    description: post.metaDescription,
    keywords: [
      post.focusKeyword,
      post.focusArea,
      'garage Lichtenvoorde',
      'auto service Achterhoek',
    ],
    alternates: {
      canonical: `/kennisbank/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${site.url}/kennisbank/${post.slug}`,
      siteName: "GP Auto's",
      locale: 'nl_NL',
      type: 'article',
    },
  }
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

function renderBlock(block: BlogBlock) {
  switch (block.type) {
    case 'lead':
      return <p className="text-xl leading-8 text-[var(--text)]">{block.text}</p>
    case 'paragraph':
      return <p className="text-base leading-8 text-[var(--text-secondary)]">{block.text}</p>
    case 'bullets':
      return (
        <section>
          {block.title ? <h2>{block.title}</h2> : null}
          <ul className="detail-list mt-6">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      )
    case 'steps':
      return (
        <section>
          {block.title ? <h2>{block.title}</h2> : null}
          <ol className="mt-6">
            {block.items.map((item, index) => (
              <li key={item.title} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-6 border-t border-[var(--border)] py-6">
                <span className="font-semibold text-[var(--accent)]" aria-label={`Stap ${index + 1}`}>{index + 1}</span>
                <div><h3 className="text-xl">{item.title}</h3><p className="mt-3 leading-7 text-[var(--text-secondary)]">{item.text}</p></div>
              </li>
            ))}
          </ol>
        </section>
      )
    case 'callout':
      return <section className="bg-[var(--bg-alt)] p-6"><h2>{block.title}</h2><p className="mt-4 leading-7 text-[var(--text-secondary)]">{block.text}</p></section>
    default:
      return null
  }
}

export default function KnowledgeArticlePage({ params }: KnowledgeArticlePageProps) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const relatedArticles = blogPosts.filter((article) => article.slug !== post.slug).slice(0, 2)
  const relatedServices = post.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is SeoService => Boolean(service))

  const pagePath = `/kennisbank/${post.slug}`
  const jsonLd = graphStructuredData([
    webpageStructuredData(pagePath, post.title, post.metaDescription),
    {
    '@type': 'Article',
    '@id': `${site.url}${pagePath}#article`,
    headline: post.title,
    description: post.metaDescription,
    image: absoluteUrl(site.defaultImage),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: "GP Auto's",
    },
    publisher: {
      '@type': 'Organization',
      name: "GP Auto's",
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(site.logo),
      },
    },
    mainEntityOfPage: `${site.url}${pagePath}`,
  },
    breadcrumbStructuredData([
      { name: 'Home', path: '/' },
      { name: 'Kennisbank', path: '/kennisbank' },
      { name: post.title, path: pagePath },
    ]),
    faqStructuredData(post.faqs),
  ])

  return (
    <div className="detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Kruimelpad">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/kennisbank">Kennisbank</Link>
          </nav>
          <h1 className="max-w-4xl">{post.title}</h1>
          <p className="page-intro">{post.metaDescription}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--text-secondary)]">
            <span>{post.focusArea}</span><span>{post.readingTime}</span>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="container editorial-grid">
          <article className="min-w-0 max-w-[70ch] space-y-10">
            {post.blocks.map((block, index) => <div key={`${post.slug}-${index}`}>{renderBlock(block)}</div>)}
            <section>
              <h2>Veelgestelde vragen</h2>
              <div className="mt-6">
                {post.faqs.map((faq) => (
                  <details key={faq.question} className="border-b border-[var(--border)] py-5">
                    <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                    <p className="mt-4 leading-7 text-[var(--text-secondary)]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>
          <aside className="space-y-10">
            <div className="border-t border-[var(--border)] pt-6 text-sm text-[var(--text-secondary)]">
              <p>Geplaatst op {formatDate(post.publishedAt)}</p>
              <p className="mt-2">Bijgewerkt op {formatDate(post.updatedAt)}</p>
              <p className="mt-2">Focus: {post.focusKeyword}</p>
            </div>
            <div>
              <h2>Snel hulp nodig?</h2>
              <p className="mt-4 text-[var(--text-secondary)]">Heeft uw auto een storing, remprobleem of onderhoud nodig? Dan kunt u direct een afspraak plannen.</p>
              <Link href="/afspraak" className="btn-primary mt-6">Afspraak maken</Link>
            </div>
            <div>
              <h2>Gerelateerde diensten</h2>
              <div className="mt-6">
                {relatedServices.map((service) => (
                  <Link key={service.slug} href={`/diensten/${service.slug}`} className="service-row"><h3>{service.name}</h3><p>{service.shortDescription}</p></Link>
                ))}
              </div>
            </div>
            <div>
              <h2>Meer lezen</h2>
              <div className="mt-6">
                {relatedArticles.map((article) => (
                  <Link key={article.slug} href={`/kennisbank/${article.slug}`} className="service-row"><h3>{article.title}</h3><p>{article.focusKeyword}</p></Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="booking-band">
        <div className="container">
          <h2>Wilt u dat we meekijken?</h2>
          <p className="mt-4 max-w-2xl">Voor onderhoud, diagnose en reparatie in Lichtenvoorde kunt u direct contact opnemen.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/afspraak" className="btn-primary">Naar afspraak</Link>
            <a href={`tel:${business.phone}`} className="btn-secondary">{business.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
