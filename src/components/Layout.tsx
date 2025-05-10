'use client'

import Navigation from './Navigation'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-10 black-section border-t border-accent">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl uppercase mb-4 tracking-wide">Contact</h3>
              <div className="space-y-3 text-text-gray">
                <p>Galileïstraat 5</p>
                <p>7131PE Lichtenvoorde</p>
                <p>Tel Oktay: <a href="tel:+31615530641" className="text-primary hover:text-red-400 transition-colors">+31 (0)6 15530641</a></p>
                <p>Tel Joost: <a href="tel:+31622995398" className="text-primary hover:text-red-400 transition-colors">+31 (0)6 22995398</a></p>
                <p>Email: <a href="mailto:info@gpautos.nl" className="text-primary hover:text-red-400 transition-colors">info@gpautos.nl</a></p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl uppercase mb-4 tracking-wide">Openingstijden</h3>
              <div className="space-y-3 text-text-gray">
                <p>Maandag - Vrijdag: Op afspraak</p>
                <p>Zaterdag: Op afspraak</p>
                <p>Zondag: Op afspraak</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl uppercase mb-4 tracking-wide">Links</h3>
              <ul className="space-y-3 text-text-gray">
                <li>
                  <Link href="/#diensten" className="hover:text-primary transition-colors">
                    Onze Diensten
                  </Link>
                </li>
                <li>
                  <Link href="/#about-section" className="hover:text-primary transition-colors">
                    Over Ons
                  </Link>
                </li>
                <li>
                  <Link href="/afspraak" className="hover:text-primary transition-colors">
                    Afspraak Maken
                  </Link>
                </li>
                <li>
                  <Link href="/privacyverklaring" className="hover:text-primary transition-colors">
                    Privacyverklaring
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-text-gray pt-8 border-t border-accent">
            <p>© {new Date().getFullYear()} GP Auto's - Alle rechten voorbehouden</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 