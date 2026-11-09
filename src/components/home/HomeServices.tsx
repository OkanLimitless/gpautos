import type { CSSProperties } from 'react'
import Link from 'next/link'

const SERVICES = [
  { slug: 'onderhoud-service', title: 'Onderhoud', text: 'Onderhoud volgens het fabrieksschema van uw model.' },
  { slug: 'diagnose-storing', title: 'Diagnose en storingen', text: 'Foutcodes uitlezen en de oorzaak vinden.' },
  { slug: 'remmen-wielophanging', title: 'Remmen en wielophanging', text: 'Remschijven, remblokken, schokdempers en veren.' },
  { slug: 'software-chiptuning', title: 'Coderen', text: 'Instellingen en functies aanpassen met VCDS.' },
]

export default function HomeServices() {
  return (
    <section id="diensten" className="lp-section" aria-labelledby="diensten-title">
      <div className="lp-wrap">
        <p className="lp-mono lp-eyebrow lp-rv">Diensten</p>
        <h2 id="diensten-title" className="lp-h2 lp-rv" style={{ '--i': 1 } as CSSProperties}>Wat we doen</h2>

        <ul className="lp-svc-list">
          {SERVICES.map((service, index) => (
            <li key={service.slug} className="lp-rv" style={{ '--i': index } as CSSProperties}>
              <Link href={`/diensten/${service.slug}`} className="lp-svc">
                <span className="lp-mono lp-svc-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="lp-svc-title">{service.title}</h3>
                <p className="lp-svc-text">{service.text}</p>
                <svg className="lp-svc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="square" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
