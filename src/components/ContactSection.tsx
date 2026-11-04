import AppointmentForm from './AppointmentForm'
import { business } from '@/lib/site-data'

export default function ContactSection() {
  return (
    <section id="contact" className="lp-section lp-ink" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div>
          <p className="mono eyebrow rv">Contact</p>
          <h2 id="contact-title" className="lp-h2 rv" style={{ '--i': 1 } as React.CSSProperties}>Afspraak maken</h2>
          <p className="lp-lede rv" style={{ '--i': 2 } as React.CSSProperties}>
            Laat uw kenteken en telefoonnummer achter, dan bellen wij u terug om een datum af te spreken. Of bel ons direct.
          </p>

          <a href={`tel:${business.phone}`} className="contact-phone rv" style={{ '--i': 3 } as React.CSSProperties}>
            {business.phoneDisplay}
          </a>

          <dl className="contact-list rv" style={{ '--i': 4 } as React.CSSProperties}>
            <div>
              <dt className="mono">Adres</dt>
              <dd>
                {business.address.streetAddress}, {business.address.postalCode} {business.address.locality}
                {' · '}
                <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Route<span className="sr-only"> (opent in een nieuw tabblad)</span>
                </a>
              </dd>
            </div>
            <div>
              <dt className="mono">E-mail</dt>
              <dd><a href={`mailto:${business.email}`}>{business.email}</a></dd>
            </div>
          </dl>
        </div>

        <div id="afspraak" className="form-card scroll-mt-24 rv" style={{ '--i': 2 } as React.CSSProperties}>
          <AppointmentForm variant="home" minDateOffsetDays={1} formId={null} />
        </div>
      </div>
    </section>
  )
}
