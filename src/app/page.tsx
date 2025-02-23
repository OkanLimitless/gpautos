import Image from 'next/image'
import Link from 'next/link'
import AppointmentForm from '@/components/AppointmentForm'

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Auto reparatie werkplaats"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Betrouwbare Auto Reparatie Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Professionele autoservice en onderhoud in Lichtenvoorde.
              Vertrouw op onze expertise voor al uw autoreparaties.
            </p>
            <Link 
              href="#afspraak" 
              className="btn btn-primary"
            >
              Maak Direct een Afspraak
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container">
          <h2 className="section-title text-center text-white">Onze Diensten</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="service-card">
              <Image
                src="/images/service-1.jpg"
                alt="Algemeen onderhoud"
                width={400}
                height={300}
                className="service-image"
              />
              <h3 className="text-xl font-semibold mb-4">Algemeen Onderhoud</h3>
              <p className="text-gray-400">Regulier onderhoud en service voor alle automerken. Houd uw auto in topconditie.</p>
              <Link href="#afspraak" className="btn btn-outline mt-4 w-full">Plan Onderhoud</Link>
            </div>

            <div className="service-card">
              <Image
                src="/images/service-2.jpg"
                alt="Reparaties"
                width={400}
                height={300}
                className="service-image"
              />
              <h3 className="text-xl font-semibold mb-4">Reparaties</h3>
              <p className="text-gray-400">Snelle en betrouwbare reparatie van uw auto door ervaren monteurs.</p>
              <Link href="#afspraak" className="btn btn-outline mt-4 w-full">Plan Reparatie</Link>
            </div>

            <div className="service-card">
              <Image
                src="/images/service-3.jpg"
                alt="APK Keuring"
                width={400}
                height={300}
                className="service-image"
              />
              <h3 className="text-xl font-semibold mb-4">APK Keuring</h3>
              <p className="text-gray-400">Officiële APK-keuring met gratis herkeuring. Snel en betrouwbaar.</p>
              <Link href="#afspraak" className="btn btn-outline mt-4 w-full">Plan APK</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-20 bg-zinc-900" id="afspraak">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title text-center text-white mb-12">Maak een Afspraak</h2>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zinc-950" id="contact">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title text-white">Contact</h2>
              <div className="space-y-4 text-gray-300">
                <p><strong className="text-white">Adres:</strong> Galileïstraat 5, 7131PE Lichtenvoorde</p>
                <p><strong className="text-white">Email:</strong> info@gpautos.nl</p>
                <p><strong className="text-white">Telefoon:</strong> +31 (0)6 12345678</p>
              </div>
            </div>
            <div>
              <h2 className="section-title text-white">Openingstijden</h2>
              <div className="space-y-2 text-gray-300">
                <p>Maandag - Vrijdag: 08:00 - 17:30</p>
                <p>Zaterdag: Op afspraak</p>
                <p>Zondag: Gesloten</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-zinc-800">
        <div className="container text-center text-gray-400">
          <p>© {new Date().getFullYear()} GP Auto's - Alle rechten voorbehouden</p>
        </div>
      </footer>
    </main>
  )
} 