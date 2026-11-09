import type { CSSProperties } from 'react'
import Image from 'next/image'
import { business } from '@/lib/site-data'

const TAGS = ['RDW erkend bedrijf', 'Alle merken', 'Uitsluitend op afspraak']

export default function HomeAbout() {
  return (
    <section id="over-ons" className="lp-section lp-alt" aria-labelledby="over-ons-title">
      <div className="lp-wrap lp-about-grid">
        <div className="lp-about-photo lp-rv">
          <Image
            src="/images/overgp.jpeg"
            alt="Monteur leest een Audi uit met een diagnosetablet in de werkplaats van GP Auto's"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>

        <div>
          <p className="lp-mono lp-eyebrow lp-rv">Over GP Auto&apos;s</p>
          <h2 id="over-ons-title" className="lp-h2 lp-rv" style={{ '--i': 1 } as CSSProperties}>
            Eerst de oorzaak, dan pas de reparatie.
          </h2>
          <p className="lp-lede lp-rv" style={{ '--i': 2 } as CSSProperties}>
            GP Auto&apos;s is een onafhankelijke garage aan de {business.address.streetAddress} in {business.address.locality},
            voor alle merken. We lezen uw auto uit met diagnoseapparatuur en werken uitsluitend op afspraak,
            zodat er tijd is voor uw auto.
          </p>
          <ul className="lp-mono lp-tags lp-rv" style={{ '--i': 3 } as CSSProperties}>
            {TAGS.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
