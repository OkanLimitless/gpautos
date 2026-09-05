import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check, Phone } from './Icons'
import { business } from '@/lib/site-data'
import { serviceVisuals } from '@/lib/landing-data'
import type { Service } from '@/lib/seo-data'

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumb,
  caption,
}: {
  eyebrow: string
  title: ReactNode
  description: string
  image: string
  imageAlt: string
  breadcrumb: string
  caption?: string
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Broodkruimel">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{breadcrumb}</span>
        </nav>
        <div className="page-hero-grid">
          <div>
            <p className="eyebrow section-label">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="section-lead">{description}</p>
            <div className="hero-actions">
              <Link href="/afspraak" className="btn-primary">
                Plan uw afspraak <ArrowUpRight />
              </Link>
              <a href={`tel:${business.phone}`} className="btn-secondary">
                <Phone />
                Bel direct
              </a>
            </div>
            <p className="page-fact">
              <span className="status-dot" />
              Onafhankelijke specialist · Uitsluitend op afspraak
            </p>
          </div>
          <div className="page-hero-photo">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 640px) 48vw, 100vw"
            />
            <div className="page-caption">
              {caption ?? "GP AUTO'S / AANDACHT VOOR ELK DETAIL"}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ServiceCards({ items }: { items: Service[] }) {
  return (
    <div
      className={`related-services ${items.length === 4 ? 'related-services-four' : ''}`}
    >
      {items.map((s) => (
        <Link
          className="related-card"
          href={`/diensten/${s.slug}`}
          key={s.slug}
        >
          <div className="related-photo">
            <Image
              src={serviceVisuals[s.slug].image}
              alt={serviceVisuals[s.slug].alt}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
            />
          </div>
          <h3>
            {s.name}
            <ArrowUpRight />
          </h3>
          <p>{s.shortDescription}</p>
        </Link>
      ))}
    </div>
  )
}
