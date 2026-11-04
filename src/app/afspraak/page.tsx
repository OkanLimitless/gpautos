import Link from 'next/link'
import AppointmentForm from '@/components/AppointmentForm'
import { business } from '@/lib/site-data'

export default function AppointmentPage() {
  return (
    <div className="detail-page">
      <section className="page-hero container">
        <nav className="breadcrumb" aria-label="Broodkruimel"><Link href="/">Home</Link><span>/</span><span>Afspraak</span></nav>
        <h1>Een afspraak voor uw auto.</h1>
        <p className="page-intro">Stuur uw aanvraag. Wij stemmen het moment persoonlijk met u af.</p>
      </section>
      <section className="container content-section editorial-grid">
        <div className="booking-form">
          <h2>Vertel ons wat nodig is</h2>
          <p className="mb-8 mt-4">Voor een afspraak vragen we iets meer informatie dan bij een terugbelverzoek.</p>
          <AppointmentForm variant="embedded" minDateOffsetDays={1} formId="afspraak-uitgebreid" />
        </div>
        <aside>
          <h2>Liever even bellen?</h2>
          <a href={`tel:${business.phone}`} className="mt-6 btn-secondary">{business.phoneDisplay}</a>
          <ol className="detail-list mt-10">
            <li><strong>Kenteken</strong><p>We herkennen sneller waar het om gaat.</p></li>
            <li><strong>Werksoort</strong><p>APK, onderhoud, diagnose, remmen of coderen.</p></li>
            <li><strong>Planning</strong><p>Wij stemmen de afspraak persoonlijk af.</p></li>
          </ol>
          <Link href="/#contact" className="service-more">Liever teruggebeld?</Link>
          <p className="mt-8">VAG-specialist in Lichtenvoorde. Beoordeeld met 5,0 op Google.</p>
          <Link href="/" className="service-more">Terug naar home</Link>
        </aside>
      </section>
    </div>
  )
}
