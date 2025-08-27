import type { Metadata } from 'next'
import AppointmentForm from '@/components/AppointmentForm'
import Image from 'next/image'
import Link from 'next/link'
import PhoneCTA from '@/components/PhoneCTA'
import CTAButton from '@/components/CTAButton'
import SocialProof from '@/components/SocialProof'

export const metadata: Metadata = {
  title: "GP Auto's • Afspraak of Bel Direct",
  description: "Plan eenvoudig een afspraak bij GP Auto's in Lichtenvoorde. Betrouwbaar onderhoud en reparatie voor alle merken. Bel nu of vul het formulier in.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/',
  },
}

export default function AdsLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900">
      {/* Minimal header with logo and call CTA */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="GP Auto's" className="h-10 w-auto" />
            <span className="sr-only">GP Auto's</span>
          </Link>
          <a href="tel:+31615530641" className="hidden sm:inline-flex bg-primary text-white font-semibold rounded-lg px-4 py-2">Bel direct</a>
        </div>
      </header>

      {/* Hero two-column */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-sm text-zinc-600 mb-3">
              <span className="h-2 w-2 bg-green-500 rounded-full" /> Lichtenvoorde en omgeving
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Onderhoud en reparatie voor alle merken</h1>
            <p className="text-lg text-zinc-600 mb-6">
              Snel geholpen, vaak al binnen enkele dagen — niet pas over weken. Eerlijke prijzen, heldere communicatie en vakmanschap.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton href="#afspraak" className="bg-primary hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
                Afspraak aanvragen
              </CTAButton>
              <a href="tel:+31615530641" className="border border-zinc-300 text-zinc-700 hover:bg-zinc-50 font-semibold py-3 px-6 rounded-lg text-center">Bel direct</a>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-700">
              <li className="flex items-center gap-2"><Check /> Onderhoud, diagnose en reparatie</li>
              <li className="flex items-center gap-2"><Check /> Originele of A‑kwaliteit onderdelen</li>
              <li className="flex items-center gap-2"><Check /> Transparant overleg vooraf</li>
              <li className="flex items-center gap-2"><Check /> Afspraak op korte termijn</li>
            </ul>
          </div>
          <div>
            <div className="bg-white rounded-lg border border-zinc-200 shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-1">Vraag een afspraak aan</h2>
              <p className="text-sm text-zinc-600 mb-4">Wij reageren doorgaans binnen 1 werkdag.</p>
              <AppointmentForm variant="light" minDateOffsetDays={1} autoFocusNext />
            </div>
          </div>
        </div>
      </section>

      <SocialProof />

      {/* Trust section */}
      <section className="bg-zinc-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-zinc-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Alle merken welkom</h3>
              <p className="text-zinc-600">Ervaring met Volkswagen t/m Volvo en alles daartussenin.</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Snel geholpen</h3>
              <p className="text-zinc-600">Plan op korte termijn, zonder lange wachttijden.</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Duidelijke prijzen</h3>
              <p className="text-zinc-600">Eerst overleg, dan pas sleutelen. Geen verrassingen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact card */}
      <section className="bg-white border-t border-zinc-200">
        <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-50 rounded-lg border border-zinc-200 p-6">
            <h3 className="text-xl font-bold mb-3">Liever direct contact?</h3>
            <div className="space-y-2 text-zinc-700">
              <p>Tel Oktay: <Link href="tel:+31615530641" className="text-primary font-semibold">+31 (0)6 15530641</Link></p>
              <p>Tel Joost: <Link href="tel:+31622995398" className="text-primary font-semibold">+31 (0)6 22995398</Link></p>
              <p>Email: <Link href="mailto:info@gpautos.nl" className="text-primary font-semibold">info@gpautos.nl</Link></p>
            </div>
          </div>
          <div className="bg-zinc-50 rounded-lg border border-zinc-200 p-6">
            <h3 className="text-xl font-bold mb-3">Adres & Openingstijden</h3>
            <div className="text-zinc-700 space-y-1">
              <p>Galileïstraat 5</p>
              <p>7131PE Lichtenvoorde</p>
              <p className="mt-3">Maandag - Zondag: Op afspraak</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200">
        <div className="container mx-auto px-4 py-6 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} GP Auto's • <Link href="/privacyverklaring" className="text-primary">privacybeleid</Link></p>
        </div>
      </footer>

      {/* Sticky mobile CTA bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
          <div className="rounded-xl bg-white/95 backdrop-blur border border-zinc-200 shadow-lg overflow-hidden">
            <div className="grid grid-cols-2">
              <a href="#afspraak" className="py-3 text-center bg-primary text-white font-semibold">📅 Afspraak aanvragen</a>
              <a href="tel:+31615530641" className="py-3 text-center text-zinc-800 font-semibold">📞 Bel direct</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Check() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-green-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
  )
}