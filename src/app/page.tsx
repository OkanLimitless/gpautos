import Image from 'next/image'
import HeroSlideshow from '@/components/HeroSlideshow'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="bg-black">
      <Navigation />
      <HeroSlideshow />

      {/* Services Section */}
      <section className="py-20 bg-zinc-950" id="diensten">
        <div className="container">
          <h2 className="section-title text-center text-white">Onze Expertise</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Met jarenlange ervaring en vakkundig personeel staan wij klaar voor al uw auto onderhoud en reparaties.
            Vertrouw op onze expertise voor het beste resultaat.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="service-card">
              <Image
                src="/images/service-1.jpg"
                alt="Algemeen onderhoud"
                width={400}
                height={300}
                className="service-image"
              />
              <h3 className="text-xl font-semibold mb-4 text-white">Algemeen Onderhoud</h3>
              <p className="text-gray-400">
                Regulier onderhoud en service voor alle automerken. 
                Wij zorgen ervoor dat uw auto in topconditie blijft met:
              </p>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>• Grote en kleine beurten</li>
                <li>• Olie verversen</li>
                <li>• Filter vervanging</li>
                <li>• Remmen service</li>
              </ul>
            </div>

            <div className="service-card">
              <Image
                src="/images/service-2.jpg"
                alt="Reparaties"
                width={400}
                height={300}
                className="service-image"
              />
              <h3 className="text-xl font-semibold mb-4 text-white">Reparaties</h3>
              <p className="text-gray-400">
                Snelle en betrouwbare reparatie van uw auto door ervaren monteurs.
                Onze diensten omvatten:
              </p>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>• Motor reparaties</li>
                <li>• Uitlaat systemen</li>
                <li>• Airco service</li>
                <li>• Elektrische storingen</li>
              </ul>
            </div>

            <div className="service-card">
              <Image
                src="/images/service-3.jpg"
                alt="APK Keuring"
                width={400}
                height={300}
                className="service-image"
              />
              <h3 className="text-xl font-semibold mb-4 text-white">APK Keuring</h3>
              <p className="text-gray-400">
                Officiële APK-keuring met gratis herkeuring. 
                Ons APK proces omvat:
              </p>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>• Volledige voertuig inspectie</li>
                <li>• Uitlaatgastest</li>
                <li>• Veiligheidscontroles</li>
                <li>• Gratis herkeuring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container">
          <h2 className="section-title text-center text-white mb-12">Waarom Kiezen voor GP Auto's?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ervaren Team</h3>
              <p className="text-gray-400">Vakkundige monteurs met jarenlange ervaring</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Snelle Service</h3>
              <p className="text-gray-400">Efficiënte werkprocessen voor minimale wachttijd</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Eerlijke Prijzen</h3>
              <p className="text-gray-400">Transparante tarieven zonder verborgen kosten</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Kwaliteit Gegarandeerd</h3>
              <p className="text-gray-400">Gebruik van hoogwaardige onderdelen en materialen</p>
            </div>
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