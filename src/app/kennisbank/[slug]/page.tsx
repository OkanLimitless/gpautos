import type { Metadata } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import FaqSection from '@/components/FaqSection'
import { ServiceCards } from '@/components/LandingSections'
import { ArrowUpRight } from '@/components/Icons'
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

export async function generateMetadata({
  params,
}: KnowledgeArticlePageProps): Promise<Metadata> {
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
      return <p className="text-lg">{block.text}</p>
    case 'paragraph':
      return <p>{block.text}</p>
    case 'bullets':
      return (
        <section>
          {block.title && <h2>{block.title}</h2>}
          <ul>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )
    case 'steps':
      return (
        <section>
          {block.title && <h2>{block.title}</h2>}
          {block.items.map((item, i) => (
            <div key={item.title}>
              <h3>
                {i + 1}. {item.title}
              </h3>
              <p>{item.text}</p>
            </div>
          ))}
        </section>
      )
    case 'callout':
      return (
        <section className="my-8 border-l-2 border-[var(--accent)] bg-[var(--bg-alt)] p-6">
          <h2 className="!mt-0">{block.title}</h2>
          <p>{block.text}</p>
        </section>
      )
  }
}

export default function KnowledgeArticlePage({
  params,
}: KnowledgeArticlePageProps) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const relatedArticles = blogPosts
    .filter((article) => article.slug !== post.slug)
    .slice(0, 2)
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
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Broodkruimel">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/kennisbank">Kennisbank</Link>
            <span>/</span>
            <span aria-current="page">Artikel</span>
          </nav>
          <div className="max-w-4xl">
            <p className="eyebrow">
              <span className="red-square" />
              KENNISBANK / {post.readingTime}
            </p>
            <h1>{post.title}</h1>
            <p className="section-lead">{post.excerpt}</p>
            <p className="mt-6 text-xs text-[var(--text-secondary)]">
              GP Auto&apos;s · Bijgewerkt op{' '}
              <time dateTime={post.updatedAt}>
                {formatDate(post.updatedAt)}
              </time>
            </p>
          </div>
        </div>
      </section>
      <section className="section detail-section">
        <div className="container article-layout">
          <article className="article-body">
            {post.blocks.map((block, i) => (
              <div key={i}>{renderBlock(block)}</div>
            ))}
          </article>
          <aside className="article-sidebar">
            <h2>Even overleggen?</h2>
            <p>
              Heeft u een vraag over uw eigen auto? Geef uw kenteken en klacht
              door. We denken met u mee.
            </p>
            <Link href="/afspraak" className="btn-primary">
              Plan uw afspraak <ArrowUpRight />
            </Link>
            <a href={`tel:${business.phone}`} className="text-link mt-3">
              Of bel {business.phoneDisplay}
            </a>
          </aside>
        </div>
      </section>
      <FaqSection items={post.faqs} />
      <section className="section bg-[var(--bg-alt)]">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-heading">Passende diensten.</h2>
          </div>
          <ServiceCards items={relatedServices} />
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <p className="eyebrow mb-4">VERDER LEZEN</p>
          {relatedArticles.map((related) => (
            <Link
              className="text-link"
              href={`/kennisbank/${related.slug}`}
              key={related.slug}
            >
              {related.title} <ArrowUpRight />
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  )
}
