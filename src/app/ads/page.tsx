import type { Metadata } from 'next'
import AppointmentForm from '@/components/AppointmentForm'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "GP Auto's • Afspraak of Bel Direct",
  description: "Plan eenvoudig een afspraak bij GP Auto's in Lichtenvoorde. Betrouwbaar onderhoud en reparatie. Bel nu of vul het formulier in.",
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
          <Link href="tel:+31615530641" className="hidden sm:inline-flex items-center gap-2 bg-primary text-white font-semibold px-4 py-2 rounded shadow-sonic">
            Bel direct: +31 6 15530641
          </Link>
        </div>
      </header>

      {/* Hero two-column */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Betrouwbaar onderhoud en reparatie</h1>
            <p className="text-lg text-zinc-600 mb-6">
              Specialist in VAG (Volkswagen, Audi, SEAT, Škoda) en ervaren in alle merken. Heldere communicatie, eerlijke prijzen, afspraak op korte termijn.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#afspraak" className="bg-primary hover:bg-red-700 text-white font-semibold py-3 px-6 rounded transition-colors text-center">
                Afspraak aanvragen
              </Link>
              <Link href="tel:+31615530641" className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold py-3 px-6 rounded transition-colors text-center">
                Bel direct
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-zinc-600">
              <div className="flex items-center gap-2"><span className="h-2 w-2 bg-green-500 rounded-full"/> Transparante prijzen</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 bg-green-500 rounded-full"/> Snelle service</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 bg-green-500 rounded-full"/> Ervaren monteurs</div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg border border-zinc-200 shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-1">Vraag een afspraak aan</h2>
              <p className="text-sm text-zinc-600 mb-4">Wij nemen zo snel mogelijk contact met u op om uw verzoek te bevestigen.</p>
              <AppointmentForm variant="light" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="bg-zinc-50">
        <div className="container mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-zinc-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">VAG Specialist</h3>
              <p className="text-zinc-600">Diagnose, DSG service en onderhoud volgens fabrieksspecificaties.</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Heldere communicatie</h3>
              <p className="text-zinc-600">Geen verrassingen achteraf. We bespreken opties vooraf.</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Goede bereikbaarheid</h3>
              <p className="text-zinc-600">Plan snel een afspraak of bel ons direct.</p>
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
          <p>© {new Date().getFullYear()} GP Auto's</p>
        </div>
      </footer>

      {/* Sticky mobile call button */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden">
        <Link href="tel:+31615530641" className="bg-primary text-white font-semibold py-3 px-6 rounded-full shadow-lg">
          Bel nu
        </Link>
      </div>
    </div>
  )
}