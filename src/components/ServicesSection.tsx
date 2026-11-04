import Link from 'next/link'

const SERVICES = [
  { slug: 'onderhoud-service', title: 'Onderhoud', text: 'Kleine en grote beurt volgens het voorschrift van het merk.' },
  { slug: 'apk', title: 'APK', text: 'Keuring op afspraak.' },
  { slug: 'diagnose-storing', title: 'Diagnose en storingen', text: 'Foutcodes uitlezen en de oorzaak vinden.' },
  { slug: 'remmen-wielophanging', title: 'Remmen en wielophanging', text: 'Remschijven, remblokken, schokdempers en veren.' },
  { slug: 'software-chiptuning', title: 'Coderen', text: 'Instellingen en functies aanpassen met VCDS.' },
]

export default function ServicesSection() {
  return (
    <section id="diensten" className="lp-section" aria-labelledby="diensten-title">
      <div className="container">
        <p className="mono eyebrow rv">Diensten</p>
        <h2 id="diensten-title" className="lp-h2 rv" style={{ '--i': 1 } as React.CSSProperties}>Wat we doen</h2>

        <ul className="svc-list">
          {SERVICES.map((service, index) => (
            <li key={service.slug} className="rv" style={{ '--i': index } as React.CSSProperties}>
              <Link href={`/diensten/${service.slug}`} className="svc">
                <span className="mono svc-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="svc-title">{service.title}</h3>
                <p className="svc-text">{service.text}</p>
                <svg className="svc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
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
