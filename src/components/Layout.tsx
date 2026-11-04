import Link from 'next/link'
import Image from 'next/image'
import type { ReactNode } from 'react'
import Navigation from './Navigation'
import MobileStickyCTA from './MobileStickyCTA'
import { business } from '@/lib/site-data'
import { cities, services } from '@/lib/seo-data'

const serviceLinks = services.map((service) => ({
  href: `/diensten/${service.slug}`,
  label: service.slug === 'remmen-wielophanging' ? 'Remmen & onderstel' : service.name,
}))

const regionLinks = cities.map((city) => ({
  href: `/regio/${city.slug}`,
  label: city.name,
}))

const brandLinks = [
  { href: '/audi-specialist', label: 'Audi specialist' },
  { href: '/volkswagen-specialist', label: 'Volkswagen specialist' },
  { href: '/seat-specialist', label: 'SEAT specialist' },
  { href: '/skoda-specialist', label: 'Škoda specialist' },
] as const

const infoLinks = [
  { href: '/#contact', label: 'Afspraak maken' },
  { href: '/kennisbank', label: 'Kennisbank' },
  { href: '/privacyverklaring', label: 'Privacyverklaring' },
] as const

const socialLinks = business.sameAs.map((href) =>
  href.includes('instagram')
    ? { href, label: 'Instagram', network: 'instagram' as const }
    : { href, label: 'Facebook', network: 'facebook' as const }
)

const linkClass =
  'inline-flex min-h-[32px] items-center text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]'

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: readonly { href: string; label: string }[]
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-[var(--text)]">{title}</h2>
      <ul className="mt-4 space-y-1.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)]">
      <Navigation />
      <main id="hoofdinhoud" className="flex-grow site-main">
        {children}
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--bg)] pb-28 pt-14 md:pb-12 lg:pt-20">
        <div className="container">
          {/* Two columns from the smallest width: stacking five groups
              single-file cost over two screens of scroll on a phone. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 sm:gap-10 xl:grid-cols-12 xl:gap-8">
            {/* Brand + NAP */}
            <div className="sm:col-span-2 xl:col-span-4">
              <Link href="/" className="inline-flex">
                <Image
                  src="/logo.png"
                  alt="GP Auto's"
                  width={160}
                  height={48}
                  className="h-8 w-auto"
                />
              </Link>

              <p className="mt-5 max-w-[34ch] text-sm leading-6 text-[var(--text-secondary)]">
                Autowerkplaats in Lichtenvoorde, gespecialiseerd in Audi, Volkswagen, SEAT, Škoda en
                Cupra.
              </p>

              <address className="mt-6 space-y-1 text-sm not-italic leading-6 text-[var(--text-secondary)]">
                <span className="block font-semibold text-[var(--text)]">{business.name}</span>
                <span className="block">{business.address.streetAddress}</span>
                <span className="block">
                  {business.address.postalCode} {business.address.locality}
                </span>
                <a href={`tel:${business.phone}`} className="flex min-h-[32px] items-center text-sm text-[var(--text-secondary)]">
                  {business.phoneDisplay}
                </a>
                <a href={`mailto:${business.email}`} className="flex min-h-[32px] items-center break-all text-sm text-[var(--text-secondary)]">
                  {business.email}
                </a>
              </address>

              <div className="mt-5 flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} van GP Auto's (opent in een nieuw tabblad)`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                  >
                    {social.network === 'instagram' ? (
                      <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ) : (
                      <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            <div className="xl:col-span-2">
              <FooterColumn title="Diensten" links={serviceLinks} />
            </div>
            <div className="xl:col-span-2">
              <FooterColumn title="Merken" links={brandLinks} />
            </div>
            <div className="xl:col-span-2">
              <FooterColumn title="Regio" links={regionLinks} />
            </div>
            <div className="xl:col-span-2">
              <FooterColumn title="Info" links={infoLinks} />
            </div>
          </div>

          {/* Factual notes */}
          <div className="mt-12 border-t border-[var(--border)] pt-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--text-secondary)]">
              <li>RDW erkend bedrijf</li>
              <li>Uitsluitend op afspraak</li>
              <li>Garage voor alle merken</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-col gap-2 text-sm text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} GP Auto&apos;s</p>
            <p>Galileïstraat 5, 7131 PE Lichtenvoorde</p>
          </div>
        </div>
      </footer>

      <MobileStickyCTA />
    </div>
  )
}
