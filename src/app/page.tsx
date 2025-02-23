import Image from 'next/image'
import Link from 'next/link'
import AppointmentForm from '@/components/AppointmentForm'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Welkom bij GP Auto's
            </h1>
            <p className="text-xl mb-8">
              Uw betrouwbare partner voor autoservice en onderhoud in Lichtenvoorde.
              Professioneel, eerlijk en persoonlijk.
            </p>
            <Link 
              href="#afspraak" 
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Maak een Afspraak
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Onze Diensten</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Onderhoud</h3>
              <p>Regulier onderhoud en service voor alle automerken</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Reparaties</h3>
              <p>Snelle en betrouwbare reparatie van uw auto</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">APK</h3>
              <p>Officiële APK-keuring met gratis herkeuring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-white" id="afspraak">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Maak een Afspraak</h2>
          <div className="max-w-2xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16" id="contact">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact</h2>
              <div className="space-y-4">
                <p><strong>Adres:</strong> Galileïstraat 5, 7131PE Lichtenvoorde</p>
                <p><strong>Email:</strong> info@gpautos.nl</p>
                <p><strong>Telefoon:</strong> +31 (0)6 12345678</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Openingstijden</h2>
              <div className="space-y-2">
                <p>Maandag - Vrijdag: 08:00 - 17:30</p>
                <p>Zaterdag: Op afspraak</p>
                <p>Zondag: Gesloten</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} GP Auto's - Alle rechten voorbehouden</p>
        </div>
      </footer>
    </main>
  )
} 