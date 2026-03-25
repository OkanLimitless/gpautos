import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPostBySlug, type BlogBlock } from '@/lib/blog-data'
import { getServiceBySlug, type Service as SeoService } from '@/lib/seo-data'

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
      url: `https://gpautos.nl/kennisbank/${post.slug}`,
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
      return <p className="text-xl leading-8 text-white/80">{block.text}</p>
    case 'paragraph':
      return <p className="text-base leading-8 text-white/70">{block.text}</p>
    case 'bullets':
      return (
        <section className="space-y-4">
          {block.title ? <h2 className="text-2xl font-semibold text-white">{block.title}</h2> : null}
          <ul className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/75">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )
    case 'steps':
      return (
        <section className="space-y-4">
          {block.title ? <h2 className="text-2xl font-semibold text-white">{block.title}</h2> : null}
          <div className="grid gap-4 md:grid-cols-3">
            {block.items.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-zinc-900 p-5">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Stap {index + 1}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      )
    case 'callout':
      return (
        <section className="rounded-2xl border border-primary/20 bg-primary/10 p-6">
          <h2 className="text-2xl font-semibold text-white">{block.title}</h2>
          <p className="mt-3 max-w-3xl text-white/75">{block.text}</p>
        </section>
      )
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

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
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
        url: 'https://gpautos.nl/logo.png',
      },
    },
    mainEntityOfPage: `https://gpautos.nl/kennisbank/${post.slug}`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://gpautos.nl',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Kennisbank',
        item: 'https://gpautos.nl/kennisbank',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://gpautos.nl/kennisbank/${post.slug}`,
      },
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="border-b border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
              <Link href="/kennisbank" className="hover:text-white">
                Kennisbank
              </Link>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>{post.focusArea}</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-5 text-4xl font-bebas uppercase leading-none tracking-tight sm:text-5xl md:text-7xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
              {post.metaDescription}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span>Geplaatst op {formatDate(post.publishedAt)}</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Focus: {post.focusKeyword}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.75fr)]">
            <article className="space-y-10">
              {post.blocks.map((block, index) => (
                <div key={`${post.slug}-${index}`}>{renderBlock(block)}</div>
              ))}

              <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-2xl font-semibold">Veelgestelde vragen</h2>
                <div className="mt-5 space-y-5">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-xl border border-white/10 bg-zinc-900 p-5">
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      <p className="mt-3 text-white/70 leading-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6">
                <h2 className="text-xl font-semibold">Snel hulp nodig?</h2>
                <p className="mt-3 text-white/75">
                  Heeft uw auto een storing, APK-punt of onderhoud nodig? Dan kunt u direct een afspraak
                  plannen.
                </p>
                <Link
                  href="/afspraak"
                  className="mt-5 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Afspraak maken
                </Link>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                <h2 className="text-xl font-semibold">Gerelateerde diensten</h2>
                <div className="mt-4 space-y-3">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/diensten/${service.slug}`}
                      className="block rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition-colors hover:border-primary/30 hover:bg-white/5"
                    >
                      <span className="block text-sm text-white/50">{service.shortDescription}</span>
                      <span className="mt-1 block font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                <h2 className="text-xl font-semibold">Meer lezen</h2>
                <div className="mt-4 space-y-3">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/kennisbank/${article.slug}`}
                      className="block rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition-colors hover:border-primary/30 hover:bg-white/5"
                    >
                      <span className="block text-sm text-white/50">{article.focusKeyword}</span>
                      <span className="mt-1 block font-medium">{article.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-900/70 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/20 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Wilt u dat we meekijken?</h2>
              <p className="mt-2 text-white/70">
                Voor APK, onderhoud en diagnose in Lichtenvoorde kunt u direct contact opnemen.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Naar afspraak
              </Link>
              <a
                href="tel:+31615530641"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/5"
              >
                0615 530 641
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
