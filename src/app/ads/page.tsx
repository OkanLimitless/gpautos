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
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-start">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-sm text-zinc-600 mb-3">
              <span className="h-2 w-2 bg-green-500 rounded-full" /> Lichtenvoorde en omgeving
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">Onderhoud en reparatie voor alle merken</h1>
            <div className="h-1 w-14 bg-primary mb-4" />
            <p className="text-xl text-gray-700 mb-6">
              Snel geholpen, vaak al binnen enkele dagen — niet pas over weken. Eerlijke prijzen, heldere communicatie en vakmanschap.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <CTAButton href="#afspraak" className="w-full sm:w-auto bg-gradient-to-b from-[#E10600] to-[#b10500] hover:brightness-110 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform duration-200 hover:scale-105 active:scale-95 text-center">
                Afspraak aanvragen
              </CTAButton>
              <a href="tel:+31615530641" className="w-full sm:w-auto border border-zinc-300 text-zinc-700 hover:bg-zinc-50 font-semibold py-3 px-6 rounded-lg transition-colors text-center">Bel direct</a>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <USPCard title="Onderhoud, diagnose en reparatie" text="Service voor alle merken" />
              <USPCard title="Originele of A‑kwaliteit onderdelen" text="Kwaliteit die u vertrouwt" />
              <USPCard title="Transparant overleg vooraf" text="Geen verrassingen achteraf" />
              <USPCard title="Afspraak op korte termijn" text="Snel ingepland" />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="border-l-4 border-primary pl-3">
                  <h2 className="text-2xl font-bold">Vraag een afspraak aan</h2>
                </div>
              </div>
              <p className="text-sm text-zinc-600 mb-4">Wij reageren doorgaans binnen 1 werkdag.</p>
              <AppointmentForm variant="light" minDateOffsetDays={1} autoFocusNext />
            </div>
          </div>
        </div>
      </section>

      <SocialProof />

      {/* Trust section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-3 gap-6">
            <TrustCard title="Alle merken welkom" text="Ervaring met Volkswagen t/m Volvo en alles daartussenin."><IconCar /></TrustCard>
            <TrustCard title="Snel geholpen" text="Plan op korte termijn, zonder lange wachttijden."><IconClock /></TrustCard>
            <TrustCard title="Duidelijke prijzen" text="Eerst overleg, dan pas sleutelen. Geen verrassingen."><IconTag /></TrustCard>
          </div>
        </div>
      </section>

      {/* Contact card */}
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8">
          <div className="rounded-lg border border-white/10 p-6">
            <h3 className="text-xl font-bold mb-2">Liever direct contact?</h3>
            <div className="h-1 w-10 bg-primary mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="tel:+31615530641" className="w-full bg-primary hover:bg-red-700 text-white font-semibold rounded-lg px-5 py-3 text-center">Bel Oktay</a>
              <a href="tel:+31622995398" className="w-full bg-primary hover:bg-red-700 text-white font-semibold rounded-lg px-5 py-3 text-center">Bel Joost</a>
              <a href="https://wa.me/31615530641" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-5 py-3 text-center">WhatsApp</a>
              <a href="mailto:info@gpautos.nl" className="w-full bg-gray-200 text-gray-900 hover:bg-gray-300 font-semibold rounded-lg px-5 py-3 text-center">E‑mail</a>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 p-6">
            <h3 className="text-xl font-bold mb-2">Adres & Openingstijden</h3>
            <div className="h-1 w-10 bg-primary mb-4" />
            <div className="text-white/80 space-y-1">
              <p>Galileïstraat 5</p>
              <p>7131PE Lichtenvoorde</p>
              <p className="mt-3">Maandag - Zondag: Op afspraak</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="container mx-auto px-4 py-6 text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} GP Auto's • <Link href="/privacyverklaring" className="text-primary">privacybeleid</Link></p>
        </div>
      </footer>

      {/* Sticky mobile CTA bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
          <div className="rounded-t-2xl bg-white/95 backdrop-blur border border-zinc-200 shadow-lg overflow-hidden">
            <div className="grid grid-cols-2">
              <a href="#afspraak" className="py-3 text-center bg-gradient-to-b from-[#E10600] to-[#b10500] text-white font-semibold">📅 Afspraak aanvragen</a>
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-primary"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
  )
}

function USPCard({ title, text }: { title: string, text: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="text-primary mb-2"><Check /></div>
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="text-sm text-gray-600">{text}</div>
    </div>
  )
}

function TrustCard({ title, text, children }: { title: string, text: string, children: React.ReactNode }) {
  return (
    <div className="bg-white border border-zinc-200 rounded-lg p-6 shadow-sm">
      <div className="text-primary mb-3">{children}</div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-zinc-600">{text}</p>
    </div>
  )
}

function IconCar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13l2-5a2 2 0 011.874-1.316h8.252A2 2 0 0117 8l2 5m-1 4h-1a2 2 0 01-2-2v-1H8v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-3h18v3a2 2 0 01-2 2z"/></svg>
  )
}

function IconClock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
  )
}

function IconTag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M3 11l8-8 8 8-8 8-8-8z"/></svg>
  )
}