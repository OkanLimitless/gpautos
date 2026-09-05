'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/seo-data'
import { serviceVisuals } from '@/lib/landing-data'
import { ArrowUpRight } from './Icons'

export default function ServicesSection() {
  const [active, setActive] = useState(0)
  const service = services[active]
  const visual = serviceVisuals[service.slug]
  return (
    <section id="diensten" className="section services-section">
      <div className="container">
        <div className="section-intro">
          <div>
            <p className="eyebrow">
              <span className="red-square" />
              01 / ONZE DIENSTEN
            </p>
            <h2 className="section-heading">
              Alles wat uw auto
              <br />
              <span className="text-soft">nodig heeft.</span>
            </h2>
          </div>
          <p className="section-lead">
            Een onderhoudsbeurt, een onverklaarbaar lampje of net dat beetje
            extra comfort. We helpen u verder.
          </p>
        </div>
        <div className="service-explorer">
          <div className="service-options">
            {services.map((s, i) => (
              <div
                key={s.slug}
                className={`service-option ${active === i ? 'is-active' : ''}`}
              >
                <button
                  aria-expanded={active === i}
                  aria-controls={`service-description-${i}`}
                  onClick={() => setActive(i)}
                >
                  <span className="service-number">0{i + 1}</span>
                  <span>{s.name}</span>
                  <span className="service-indicator">
                    {active === i ? '−' : '+'}
                  </span>
                </button>
                <div id={`service-description-${i}`} hidden={active !== i}>
                  <p>{serviceVisuals[s.slug].detail}</p>
                  <Link href={`/diensten/${s.slug}`} className="text-link">
                    Meer over {s.name.toLowerCase()} <ArrowUpRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="service-visual" aria-live="polite">
            <Image
              key={visual.image}
              src={visual.image}
              alt={visual.alt}
              fill
              sizes="(min-width: 900px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="service-photo-caption">
              <span className="eyebrow">DE AANDACHT ZIT IN DE DETAILS</span>
              <span>0{active + 1} / 04</span>
            </div>
          </div>
        </div>
        <div className="services-note">
          <p>Twijfelt u welke dienst bij uw vraag past?</p>
          <Link href="/#contact" className="text-link">
            Vertel ons wat er speelt <ArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
