import Link from 'next/link'
import { homeFaqs } from '@/lib/home-data'
import { business } from '@/lib/site-data'

const regionLinks = [
  { href: '/regio/lichtenvoorde', label: 'Lichtenvoorde' },
  { href: '/regio/groenlo', label: 'Groenlo' },
  { href: '/regio/aalten', label: 'Aalten' },
  { href: '/regio/winterswijk', label: 'Winterswijk' },
  { href: '/regio/eibergen', label: 'Eibergen' },
  { href: '/regio/doetinchem', label: 'Doetinchem' },
] as const

export default function LocalServiceSection() {
  return (
    <section aria-labelledby="local-service-heading" className="bg-white py-12 md:py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="kicker">Lokale autogarage</p>
            <h2 id="local-service-heading" className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Onderhoud en autoreparatie in Lichtenvoorde.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              GP Auto&apos;s is een autogarage aan de Galileïstraat in Lichtenvoorde voor onderhoud, reparatie, storingsdiagnose, remmen en wielophanging. We werken aan verschillende automerken, met extra kennis van Audi, Volkswagen, SEAT, Skoda en Cupra.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
              <Link href="/diensten/onderhoud-service" className="text-red-600 hover:text-red-700">
                Auto-onderhoud
              </Link>
              <Link href="/diensten/diagnose-storing" className="text-red-600 hover:text-red-700">
                Diagnose &amp; storing
              </Link>
              <Link href="/diensten/remmen-wielophanging" className="text-red-600 hover:text-red-700">
                Reparatie aan remmen &amp; onderstel
              </Link>
            </div>
          </div>

          <aside className="border-t border-gray-200 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-1">
            <h3 className="text-xl font-semibold text-gray-950">Werkplaats voor de Achterhoek</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Op afspraak aan {business.address.streetAddress}, {business.address.postalCode} {business.address.locality}. Vanuit omliggende plaatsen rijdt u gericht naar één werkplaats voor onderhoud en diagnose.
            </p>
            <nav aria-label="Plaatsen in de regio" className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {regionLinks.map((region) => (
                <Link key={region.href} href={region.href} className="text-sm text-gray-500 hover:text-gray-950">
                  {region.label}
                </Link>
              ))}
            </nav>
            <a
              href={business.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
            >
              Bekijk het officiële Google-profiel
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </aside>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-9">
          <h3 className="text-xl font-semibold text-gray-950">Veelgestelde vragen over de garage</h3>
          <dl className="mt-6 grid gap-8 md:grid-cols-3">
            {homeFaqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold leading-6 text-gray-950">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-6 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
