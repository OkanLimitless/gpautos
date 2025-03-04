import Layout from '@/components/Layout'
import HeroSlideshow from '@/components/HeroSlideshow'
import Image from 'next/image'
import Link from 'next/link'

// Service data
const services = [
  {
    id: 1,
    title: 'Onderhoud & Reparatie',
    description: 'Regulier onderhoud en reparaties voor alle automerken. Wij werken volgens fabrieksvoorschriften met behoud van garantie.',
    icon: '/images/service-maintenance.jpg'
  },
  {
    id: 2,
    title: 'APK Keuring',
    description: 'Snelle en betrouwbare APK keuring. Bij afkeuring bieden wij gratis herkeuring aan na reparatie bij ons.',
    icon: '/images/service-apk.jpg'
  },
  {
    id: 3,
    title: 'Airco Service',
    description: 'Complete airco-service inclusief reiniging, controle en bijvullen. Zorg voor een aangename temperatuur in uw auto.',
    icon: '/images/service-airco.jpg'
  },
  {
    id: 4,
    title: 'Diagnose',
    description: 'Geavanceerde diagnose apparatuur voor het opsporen van storingen. Wij lossen complexe problemen snel en efficiënt op.',
    icon: '/images/service-diagnostics.jpg'
  }
]

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSlideshow />
      
      {/* Services Section */}
      <section id="diensten" className="py-16 md:py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Onze Diensten</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Bij GP Auto's bieden wij een breed scala aan diensten om uw auto in optimale conditie te houden.
              Onze ervaren monteurs staan voor u klaar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-40 md:h-48">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="lazy"
                    quality={75}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/afspraak" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors"
            >
              Maak een Afspraak
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 md:py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="Over GP Auto's"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  quality={75}
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Over GP Auto's</h2>
              <p className="text-gray-400 mb-4">
                GP Auto's is een moderne autogarage in Lichtenvoorde met meer dan 15 jaar ervaring. 
                Wij staan voor kwaliteit, betrouwbaarheid en persoonlijke service.
              </p>
              <p className="text-gray-400 mb-6">
                Onze monteurs zijn vakbekwaam en worden regelmatig bijgeschoold om op de hoogte te blijven 
                van de nieuwste technologieën en ontwikkelingen in de autobranche.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-red-600 p-2 rounded-md mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Ervaren Monteurs</h4>
                    <p className="text-gray-400 text-sm">Vakkundig en betrouwbaar</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-600 p-2 rounded-md mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Moderne Apparatuur</h4>
                    <p className="text-gray-400 text-sm">Voor alle automerken</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-600 p-2 rounded-md mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Transparante Prijzen</h4>
                    <p className="text-gray-400 text-sm">Geen verrassingen achteraf</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-600 p-2 rounded-md mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Persoonlijke Service</h4>
                    <p className="text-gray-400 text-sm">Klant staat centraal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met ons op.
              Wij staan voor u klaar!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-zinc-800 p-6 md:p-8 rounded-lg text-center">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Adres</h3>
              <p className="text-gray-400">
                Hoofdstraat 123<br />
                7131 AA Lichtenvoorde
              </p>
            </div>
            
            <div className="bg-zinc-800 p-6 md:p-8 rounded-lg text-center">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Telefoon</h3>
              <p className="text-gray-400">
                <a href="tel:+31612345678" className="hover:text-red-500 transition-colors">
                  +31 6 12345678
                </a>
              </p>
            </div>
            
            <div className="bg-zinc-800 p-6 md:p-8 rounded-lg text-center">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Openingstijden</h3>
              <p className="text-gray-400">
                Maandag - Vrijdag: 8:00 - 17:30<br />
                Zaterdag: 9:00 - 13:00<br />
                Zondag: Gesloten
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/afspraak" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors"
            >
              Maak een Afspraak
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
} 