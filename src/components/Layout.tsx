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
      <footer className="py-8 bg-black border-t border-zinc-800">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>Galileïstraat 5</p>
                <p>7131PE Lichtenvoorde</p>
                <p>Tel: +31 (0)6 12345678</p>
                <p>Email: info@gpautos.nl</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Openingstijden</h3>
              <div className="space-y-2 text-gray-400">
                <p>Maandag - Vrijdag: 08:00 - 17:30</p>
                <p>Zaterdag: Op afspraak</p>
                <p>Zondag: Gesloten</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Links</h3>
              <div className="space-y-2 text-gray-400">
                <p>
                  <Link href="/privacyverklaring" className="hover:text-red-500 transition-colors">
                    Privacyverklaring
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400 pt-8 border-t border-zinc-800">
            <p>© {new Date().getFullYear()} GP Auto's - Alle rechten voorbehouden</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 