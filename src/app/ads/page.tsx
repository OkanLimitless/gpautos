import type { Metadata } from 'next'
import AppointmentForm from '@/components/AppointmentForm'
import Link from 'next/link'
import CTAButton from '@/components/CTAButton'
import ReviewsSection from '@/components/ReviewsSection'
import { business } from '@/lib/site-data'

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
    <div className="detail-page">
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Broodkruimelnavigatie">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <span aria-current="page">Afspraak aanvragen</span>
          </nav>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
            <div className="lg:pr-8">
              <h1>Onderhoud en reparatie voor alle merken</h1>
              <p className="page-intro">Eerlijke prijzen, heldere communicatie en vakmanschap in Lichtenvoorde en omgeving.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton href="#afspraak" className="btn-primary">Afspraak aanvragen</CTAButton>
                <a href={`tel:${business.phone}`} className="btn-secondary">Bel direct</a>
              </div>
              <p className="mt-8 max-w-[65ch] text-[var(--text-secondary)]">
                Snel geholpen, vaak al binnen enkele dagen. Plan op korte termijn, zonder lange wachttijden.
              </p>
              <dl className="mt-8 border-t border-[var(--border)]">
                <div className="border-b border-[var(--border)] py-5">
                  <dt className="font-semibold">Onderhoud, diagnose en reparatie</dt>
                  <dd className="mt-1 text-[var(--text-secondary)]">Service voor alle merken. Ervaring met Volkswagen t/m Volvo en alles daartussenin.</dd>
                </div>
                <div className="border-b border-[var(--border)] py-5">
                  <dt className="font-semibold">Originele of A-kwaliteit onderdelen</dt>
                  <dd className="mt-1 text-[var(--text-secondary)]">Kwaliteit die u vertrouwt.</dd>
                </div>
                <div className="border-b border-[var(--border)] py-5">
                  <dt className="font-semibold">Duidelijke prijzen</dt>
                  <dd className="mt-1 text-[var(--text-secondary)]">Transparant overleg vooraf. Eerst overleg, dan pas sleutelen. Geen verrassingen achteraf.</dd>
                </div>
              </dl>
            </div>
            <div className="border-t border-[var(--border)] pt-6">
              <h2>Vraag een afspraak aan</h2>
              <p className="mb-6 mt-4 text-[var(--text-secondary)]">Wij reageren doorgaans binnen 1 werkdag.</p>
              <AppointmentForm variant="light" minDateOffsetDays={1} autoFocusNext />
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="content-section">
        <div className="container editorial-grid">
          <div>
            <h2>Liever direct contact?</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={`tel:${business.phone}`} className="btn-secondary">Bel Oktay</a>
              <a href="tel:+31622995398" className="btn-secondary">Bel Joost</a>
              <a href={`https://wa.me/${business.phone.replace('+', '')}`} className="btn-secondary">WhatsApp</a>
              <a href={`mailto:${business.email}`} className="btn-secondary">E-mail</a>
            </div>
          </div>
          <div>
            <h3>Adres &amp; openingstijden</h3>
            <address className="mt-6 not-italic text-[var(--text-secondary)]">
              {business.address.streetAddress}<br />
              {business.address.postalCode} {business.address.locality}
            </address>
            <p className="mt-4 text-[var(--text-secondary)]">Maandag - Zondag: Op afspraak</p>
            <Link href="/privacyverklaring" className="mt-6 inline-block underline underline-offset-4">Privacybeleid</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
