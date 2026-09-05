import Link from 'next/link'
import AppointmentForm from './AppointmentForm'
import { ArrowUpRight, Pin, Phone } from './Icons'
import { business } from '@/lib/site-data'

export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow section-label">Contact</p>
          <h2 className="section-heading">
            Even contact.
            <br />
            Zo geregeld.
          </h2>
          <p className="section-lead">
            Laat uw kenteken en telefoonnummer achter. Wij bellen u om uw vraag
            te bespreken en samen een afspraak te plannen.
          </p>
          <a className="contact-phone" href={`tel:${business.phone}`}>
            <Phone />
            06 155 30 641
          </a>
          <a className="contact-email" href={`mailto:${business.email}`}>
            {business.email}
          </a>
          <div className="contact-address">
            <Pin />
            <div>
              <address>
                {business.address.streetAddress}
                <br />
                {business.address.postalCode} {business.address.locality}
              </address>
              <p>Uitsluitend op afspraak</p>
              <a
                className="text-link"
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Route naar de werkplaats <ArrowUpRight />
                <span className="sr-only"> (nieuw tabblad)</span>
              </a>
            </div>
          </div>
        </div>
        <div id="afspraak" className="contact-form-panel">
          <p className="eyebrow section-label">Terugbelverzoek</p>
          <h3>Wij bellen u terug.</h3>
          <p>
            Een paar gegevens zijn genoeg. De afspraak stemmen we daarna
            persoonlijk met u af.
          </p>
          <AppointmentForm variant="home" formId={null} />
          <div className="mt-4 border-t border-[var(--border)] pt-3">
            <Link href="/afspraak" className="text-link">
              Liever direct een datum voorstellen? <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
