import Link from 'next/link'
import type { ReactNode } from 'react'
import Navigation from './Navigation'
import MobileStickyCTA from './MobileStickyCTA'
import BrandMark from './BrandMark'
import { ArrowUpRight } from './Icons'
import { business } from '@/lib/site-data'
import { cities, services, vagBrands } from '@/lib/seo-data'

export default function Layout({
  children,
  minimal = false,
}: {
  children: ReactNode
  minimal?: boolean
}) {
  return (
    <div className="site-shell">
      <Navigation minimal={minimal} />
      <main id="hoofdinhoud">{children}</main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <BrandMark />
            <p>Goed voor uw auto. Helder voor u.</p>
            <a
              href={business.sameAs[1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <ArrowUpRight />
            </a>
          </div>
          <div className="footer-columns">
            <div>
              <p className="eyebrow">DE WERKPLAATS</p>
              <address>
                {business.address.streetAddress}
                <br />
                {business.address.postalCode} {business.address.locality}
              </address>
              <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
              <a href={`mailto:${business.email}`}>{business.email}</a>
              <span className="footer-note">
                <span className="status-dot" />
                Uitsluitend op afspraak
              </span>
            </div>
            <div>
              <p className="eyebrow">DIENSTEN</p>
              {services.map((s) => (
                <Link href={`/diensten/${s.slug}`} key={s.slug}>
                  {s.name}
                </Link>
              ))}
            </div>
            <div>
              <p className="eyebrow">UW MERK</p>
              {vagBrands.map((b) => (
                <Link href={`/${b.slug}-specialist`} key={b.slug}>
                  {b.name} specialist
                </Link>
              ))}
              <Link href="/afspraak">Cupra — neem contact op</Link>
            </div>
            <div>
              <p className="eyebrow">HANDIG OM TE WETEN</p>
              <Link href="/afspraak">Afspraak maken</Link>
              <Link href="/kennisbank">Kennisbank</Link>
              <Link href="/#faq">Veelgestelde vragen</Link>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Route naar GP Auto&apos;s ↗
              </a>
              <Link href="/privacyverklaring">Privacyverklaring</Link>
            </div>
          </div>
          <div className="footer-region">
            <span>THUIS IN DE ACHTERHOEK</span>
            {cities.map((c) => (
              <Link key={c.slug} href={`/regio/${c.slug}`}>
                {c.name}
              </Link>
            ))}
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} GP Auto&apos;s</p>
            <p>Onafhankelijke VAG-specialist · RDW erkend</p>
            <a href="#hoofdinhoud">Terug naar boven ↑</a>
          </div>
        </div>
      </footer>
      <MobileStickyCTA />
    </div>
  )
}
