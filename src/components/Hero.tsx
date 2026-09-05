import Image from 'next/image'
import Link from 'next/link'
import { Arrow, ArrowUpRight } from './Icons'

export default function Hero() {
  return (
    <section className="hero-wrap" aria-labelledby="hero-title">
      <div className="hero-stage">
        <Image
          src="/images/gp-editorial-hero.png"
          alt="Precisiewerk aan een Audi met merkspecifieke diagnoseapparatuur"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow rise section-label">
            VAG-specialist in Lichtenvoorde
          </p>
          <h1 id="hero-title" className="rise">
            Goed voor
            <br />
            uw auto.
            <br />
            <span>Helder voor u.</span>
          </h1>
          <p className="hero-description rise">
            Verstand van uw auto. Aandacht voor u.
            <br />
            Onderhoud, diagnose en reparatie met de
            <br className="desktop-break" /> precisie die uw auto verdient.
          </p>
          <div className="hero-actions rise">
            <Link href="/afspraak" className="btn-primary">
              Plan uw afspraak <ArrowUpRight />
            </Link>
            <Link href="#diensten" className="hero-text-link">
              Ontdek onze diensten <Arrow />
            </Link>
          </div>
        </div>
        <div className="hero-footnote">
          <span>VAKMANSCHAP. ZONDER OMWEGEN.</span>
          <span>51.9880° N &nbsp; 6.5615° E</span>
        </div>
        <div className="hero-corner" aria-hidden="true">
          <span />
          GP / 01
        </div>
      </div>
    </section>
  )
}
