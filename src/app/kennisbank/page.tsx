import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'
import { services } from '@/lib/seo-data'

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

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(220,38,38,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.06),_transparent_30%)]" />
        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Kennisbank
            </p>
            <h1 className="text-4xl font-bebas uppercase leading-none tracking-tight sm:text-5xl md:text-7xl">
              Praktisch auto-advies voor Lichtenvoorde en de Achterhoek
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
              Korte, bruikbare artikelen over onderhoud en storingen. Geschreven voor mensen die snel
              willen weten wat slim is en wanneer een afspraak nodig is.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Afspraak maken
              </Link>
              <a
                href="tel:+31615530641"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/5"
              >
                Bel direct
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div className="grid gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-primary/30 hover:bg-white/10"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/50">
                    <span>{post.focusKeyword}</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-white transition-colors group-hover:text-primary">
                    <Link href={`/kennisbank/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 max-w-2xl text-white/70">{post.excerpt}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/kennisbank/${post.slug}`}
                      className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-primary hover:text-white"
                    >
                      Artikel lezen
                    </Link>
                    <span className="text-sm text-white/45">{post.focusArea}</span>
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                <h2 className="text-xl font-semibold">Waar deze artikelen voor helpen</h2>
                <ul className="mt-4 space-y-3 text-white/70">
                  <li>sneller beslissen of u direct naar de garage moet</li>
                  <li>beter voorbereid naar een onderhoudsbeurt of diagnose-afspraak gaan</li>
                  <li>minder onnodige kosten door uitstel</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                <h2 className="text-xl font-semibold">Populaire diensten</h2>
                <div className="mt-4 space-y-3">
                  {featuredServices.map((service) => (
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

              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6">
                <h2 className="text-xl font-semibold">Direct afspraak nodig?</h2>
                <p className="mt-3 text-white/75">
                  Voor diagnose, onderhoud of remwerk kunt u direct een afspraak plannen. Dat is meestal sneller
                  dan wachten tot een klein probleem groter wordt.
                </p>
                <Link
                  href="/afspraak"
                  className="mt-5 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Naar afspraak
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
