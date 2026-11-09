import Image from 'next/image'
import Link from 'next/link'
import { business } from '@/lib/site-data'

export default function HomeHero() {
  return (
    <section id="hero" className="lp-hero" aria-labelledby="hero-title">
      <div className="lp-hero-media" aria-hidden="true">
        <Image src="/images/diagnose.jpeg" alt="" fill priority sizes="100vw" />
      </div>

      <div className="lp-wrap lp-hero-inner">
        <p className="lp-mono lp-hero-kicker">GP Auto&apos;s · Lichtenvoorde</p>

        <h1 id="hero-title" className="lp-hero-title">
          <span className="lp-line"><span>Autogarage</span></span>
          <span className="lp-line"><span>in Lichtenvoorde</span></span>
        </h1>

        <p className="lp-hero-sub">Onderhoud, diagnose, remmen en coderen voor alle merken.</p>

        <div className="lp-hero-actions">
          <Link href="#contact" className="lp-btn lp-btn-primary">Afspraak maken</Link>
          <a href={`tel:${business.phone}`} className="lp-btn lp-btn-ghost">Bel {business.phoneDisplay}</a>
        </div>

        <ul className="lp-mono lp-hero-facts">
          <li>RDW erkend bedrijf</li>
          <li>Uitsluitend op afspraak</li>
          <li>{business.address.streetAddress}, {business.address.locality}</li>
        </ul>
      </div>
    </section>
  )
}
