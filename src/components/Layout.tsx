'use client'

import Navigation from './Navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const MobileStickyCTA = dynamic(() => import('./MobileStickyCTA'), { ssr: false })

const serviceLinks = [
  { href: '/diensten/apk-keuring', label: 'APK keuring' },
  { href: '/diensten/onderhoud-service', label: 'Onderhoud & service' },
  { href: '/diensten/diagnose-storing', label: 'Diagnose & storing' },
  { href: '/diensten/airco-service', label: 'Airco service' },
] as const

const regionLinks = [
  { href: '/regio/lichtenvoorde', label: 'Lichtenvoorde' },
  { href: '/regio/groenlo', label: 'Groenlo' },
  { href: '/regio/aalten', label: 'Aalten' },
  { href: '/regio/winterswijk', label: 'Winterswijk' },
] as const

const knowledgeLinks = [
  { href: '/kennisbank', label: 'Kennisbank' },
  { href: '/afspraak', label: 'Afspraak maken' },
  { href: '/privacyverklaring', label: 'Privacyverklaring' },
] as const

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <MobileStickyCTA />
      <footer className="py-12 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <div>
              <h3 className="text-white font-bold uppercase tracking-widest mb-6">Contact</h3>
              <div className="space-y-4 text-sm text-white/50">
                <p>Galileïstraat 5</p>
                <p>7131PE Lichtenvoorde</p>
                <p>+31 6 15530641</p>
                <p>info@gpautos.nl</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold uppercase tracking-widest mb-6">Diensten</h3>
              <ul className="space-y-2 text-sm text-white/50">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold uppercase tracking-widest mb-6">Regio</h3>
              <ul className="space-y-2 text-sm text-white/50">
                {regionLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold uppercase tracking-widest mb-6">Kennis & info</h3>
              <ul className="space-y-2 text-sm text-white/50">
                {knowledgeLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/" className="inline-block mb-4">
                  <img src="/logo.png" alt="GP Auto's" className="h-10 w-auto" />
                </Link>
                <p className="text-white/20 text-xs">
                  Premium Autoservice in Lichtenvoorde
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-white/20 text-xs uppercase tracking-widest">
            <p>© {new Date().getFullYear()} GP AUTO&apos;S – Alle rechten voorbehouden</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
