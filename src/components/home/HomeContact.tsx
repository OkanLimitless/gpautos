import type { CSSProperties } from 'react'
import AppointmentForm from '../AppointmentForm'
import { business } from '@/lib/site-data'

export default function HomeContact() {
  return (
    <section id="contact" className="lp-section lp-ink" aria-labelledby="contact-title">
      <div className="lp-wrap lp-contact-grid">
        <div>
          <p className="lp-mono lp-eyebrow lp-rv">Contact</p>
          <h2 id="contact-title" className="lp-h2 lp-rv" style={{ '--i': 1 } as CSSProperties}>Afspraak maken</h2>
          <p className="lp-lede lp-rv" style={{ '--i': 2 } as CSSProperties}>
            Laat uw kenteken en telefoonnummer achter, dan bellen wij u terug om een datum af te spreken. Of bel ons direct.
          </p>

          <a href={`tel:${business.phone}`} className="lp-contact-phone lp-rv" style={{ '--i': 3 } as CSSProperties}>
            {business.phoneDisplay}
          </a>

          <dl className="lp-contact-list lp-rv" style={{ '--i': 4 } as CSSProperties}>
            <div>
              <dt className="lp-mono">Adres</dt>
              <dd>
                {business.address.streetAddress}, {business.address.postalCode} {business.address.locality}
                {' · '}
                <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer">
                  Route<span className="sr-only"> (opent in een nieuw tabblad)</span>
                </a>
              </dd>
            </div>
            <div>
              <dt className="lp-mono">E-mail</dt>
              <dd><a href={`mailto:${business.email}`}>{business.email}</a></dd>
            </div>
          </dl>
        </div>

        <div id="afspraak" className="lp-form-card lp-rv" style={{ '--i': 2 } as CSSProperties}>
          <AppointmentForm variant="home" formId={null} />
        </div>
      </div>
    </section>
  )
}
