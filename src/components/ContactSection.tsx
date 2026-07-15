import AppointmentForm from './AppointmentForm'
import { business } from '@/lib/site-data'

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-gray-950 py-12 text-white md:py-16">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <p className="kicker">Terugbellen</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Twee gegevens. Dan bellen wij u.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-white/62">
              Laat uw kenteken en telefoonnummer achter. Wij bespreken de klacht en plannen daarna persoonlijk een passend moment.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm">
              <a href={`tel:${business.phone}`} className="font-semibold text-white hover:text-white/75">
                Bel direct: {business.phoneDisplay}
              </a>
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white"
              >
                {business.address.streetAddress}, {business.address.locality}
              </a>
            </div>
          </div>

          <div id="afspraak" className="scroll-mt-24 border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400">Kort terugbelverzoek</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Binnen een halve minuut verstuurd</h3>
            <div className="mt-5 rounded-2xl bg-white p-5 text-gray-900 sm:p-6">
              <AppointmentForm variant="home" minDateOffsetDays={1} formId={null} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
