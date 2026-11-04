import Image from 'next/image'
import { business } from '@/lib/site-data'

const TAGS = ['RDW erkend bedrijf', 'Alle merken', 'Uitsluitend op afspraak']

export default function AboutSection() {
  return (
    <section id="over-ons" className="lp-section lp-alt" aria-labelledby="over-ons-title">
      <div className="container about-grid">
        <div className="about-photo rv">
          <Image
            src="/images/overgp.jpeg"
            alt="Monteur leest een Audi uit met een diagnosetablet in de werkplaats van GP Auto's"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>

        <div className="about-copy">
          <p className="mono eyebrow rv">Over GP Auto&apos;s</p>
          <h2 id="over-ons-title" className="lp-h2 rv" style={{ '--i': 1 } as React.CSSProperties}>
            Eerst de oorzaak, dan pas de reparatie.
          </h2>
          <p className="lp-lede rv" style={{ '--i': 2 } as React.CSSProperties}>
            GP Auto&apos;s is een onafhankelijke garage aan de {business.address.streetAddress} in {business.address.locality},
            voor alle merken. We lezen uw auto uit met diagnoseapparatuur en werken uitsluitend op afspraak,
            zodat er tijd is voor uw auto.
          </p>
          <ul className="mono tags rv" style={{ '--i': 3 } as React.CSSProperties}>
            {TAGS.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
