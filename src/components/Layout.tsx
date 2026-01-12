'use client'

import Navigation from './Navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

const MobileStickyCTA = dynamic(() => import('./MobileStickyCTA'), { ssr: false })

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <MobileStickyCTA />
      <footer className="py-12 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
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
              <h3 className="text-white font-bold uppercase tracking-widest mb-6">Social Links</h3>
              <div className="flex space-x-6 mb-8 text-white/50">
                <a href="#" className="hover:text-primary transition-colors"><InstagramIcon /></a>
                <a href="#" className="hover:text-primary transition-colors"><FacebookIcon /></a>
                <a href="#" className="hover:text-primary transition-colors"><TwitterIcon /></a>
              </div>
              <ul className="space-y-2 text-sm text-white/50">
                <li><Link href="/afspraak" className="hover:text-primary transition-colors">Afspraak Maken</Link></li>
                <li><Link href="/privacyverklaring" className="hover:text-primary transition-colors">Privacyverklaring</Link></li>
              </ul>
            </div>
            <div className="md:text-right">
              <Link href="/" className="inline-block mb-6">
                <img src="/logo.png" alt="GP Auto's" className="h-10 w-auto" />
              </Link>
              <p className="text-white/20 text-xs">
                Premium Autoservice & VAG Specialist
              </p>
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

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
  )
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
  )
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
  )
}
