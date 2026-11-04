import Image from 'next/image'
import Link from 'next/link'
import { business } from '@/lib/site-data'

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <Image src="/images/diagnose.jpeg" alt="" fill priority sizes="100vw" />
      </div>

      <div className="container hero-inner">
        <p className="mono hero-kicker">GP Auto&apos;s · Lichtenvoorde</p>

        <h1 id="hero-title" className="hero-title">
          <span className="line"><span>Autogarage</span></span>
          <span className="line"><span>in Lichtenvoorde</span></span>
        </h1>

        <p className="hero-sub">
          Onderhoud, APK, diagnose en reparatie voor alle merken.
        </p>

        <div className="hero-actions">
          <Link href="#contact" className="btn-primary">Afspraak maken</Link>
          <a href={`tel:${business.phone}`} className="btn-ghost">Bel {business.phoneDisplay}</a>
        </div>

        <ul className="mono hero-facts">
          <li>RDW erkend bedrijf</li>
          <li>Uitsluitend op afspraak</li>
          <li>{business.address.streetAddress}, {business.address.locality}</li>
        </ul>
      </div>
    </section>
  )
}
