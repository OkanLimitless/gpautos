import type { Metadata } from 'next'
import AppointmentForm from '@/components/AppointmentForm'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "GP Auto's • Actiepagina voor Google Ads",
  description: "Direct een afspraak maken bij GP Auto's in Lichtenvoorde. Vakkundig onderhoud en reparatie. Bel nu of vraag een afspraak aan.",
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
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white">
      {/* Top Bar with Click-to-Call */}
      <div className="w-full bg-primary text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-4 text-sm md:text-base">
          <span className="font-semibold tracking-wide">Direct hulp nodig?</span>
          <Link href="tel:+31615530641" className="bg-white text-text-dark font-bold px-4 py-2 rounded shadow-sonic hover:bg-gray-100 transition-colors">
            Bel nu: +31 6 15530641
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1500&q=80"
            alt="Autogarage GP Auto's"
            className="object-cover w-full h-full brightness-75"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wider mb-6">Vakkundig Auto-onderhoud en Reparatie</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              GP Auto's in Lichtenvoorde. Persoonlijke service, heldere communicatie en eerlijke prijzen. Maak vandaag nog een afspraak of bel direct.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#afspraak" className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide shadow-sonic text-center">
                Afspraak aanvragen
              </Link>
              <Link href="tel:+31615530641" className="bg-white hover:bg-gray-100 text-text-dark font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide text-center">
                Bel direct
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust and Benefits */}
      <section className="white-section py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-accent bg-zinc-900">
              <h3 className="text-xl font-bold mb-2">VAG Specialist</h3>
              <p className="text-text-gray">Specialist in Volkswagen, Audi, SEAT en Škoda. Diagnose, DSG service en meer.</p>
            </div>
            <div className="p-6 rounded-lg border border-accent bg-zinc-900">
              <h3 className="text-xl font-bold mb-2">Eerlijke prijzen</h3>
              <p className="text-text-gray">Heldere communicatie zonder verrassingen achteraf.</p>
            </div>
            <div className="p-6 rounded-lg border border-accent bg-zinc-900">
              <h3 className="text-xl font-bold mb-2">Afspraak op korte termijn</h3>
              <p className="text-text-gray">Snel geholpen wanneer het u uitkomt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Contact */}
      <section className="black-section py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">Vraag een afspraak aan</h2>
            <p className="text-text-gray mb-6">Vul het formulier in. We nemen zo spoedig mogelijk contact met u op.</p>
            <AppointmentForm />
          </div>
          <div className="bg-zinc-900 border border-accent rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Liever direct contact?</h3>
            <div className="space-y-3 text-text-gray">
              <p>Bel ons rechtstreeks:</p>
              <p>
                <Link href="tel:+31615530641" className="text-primary hover:text-red-400 transition-colors font-semibold">+31 (0)6 15530641</Link>
              </p>
              <p>
                <Link href="tel:+31622995398" className="text-primary hover:text-red-400 transition-colors font-semibold">+31 (0)6 22995398</Link>
              </p>
              <div className="mt-6">
                <h4 className="font-semibold text-white mb-2">Adres</h4>
                <p>Galileïstraat 5</p>
                <p>7131PE Lichtenvoorde</p>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-white mb-2">Openingstijden</h4>
                <p>Maandag - Zondag: Op afspraak</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile call button */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden">
        <Link href="tel:+31615530641" className="bg-primary text-white font-bold py-3 px-6 rounded-full shadow-lg">
          Bel nu
        </Link>
      </div>

      {/* Minimal footer (no links to afleiding) */}
      <footer className="py-8 border-t border-accent bg-zinc-950">
        <div className="container mx-auto px-4 text-center text-text-gray">
          <p>© {new Date().getFullYear()} GP Auto's</p>
        </div>
      </footer>
    </div>
  )
}