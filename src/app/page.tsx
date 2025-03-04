'use client'

import Layout from '@/components/Layout'
import HeroSlideshow from '@/components/HeroSlideshow'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

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

// Error fallback component
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="p-6 bg-red-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-2">Er is iets misgegaan</h3>
      <p className="mb-4">Er is een fout opgetreden bij het laden van deze sectie.</p>
      <pre className="bg-red-950 p-4 rounded overflow-auto text-sm mb-4">
        {error.message}
        {error.stack && `\n\n${error.stack}`}
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="bg-white text-red-900 px-4 py-2 rounded font-medium"
      >
        Probeer opnieuw
      </button>
    </div>
  );
}

// Safari-safe image component
interface SafariSafeImageProps {
  src: string;
  alt: string;
  className?: string;
}

function SafariSafeImage({ src, alt, className = '' }: SafariSafeImageProps) {
  const [isSafari, setIsSafari] = useState(false);
  
  useEffect(() => {
    // Check if browser is Safari
    const isSafariCheck = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariCheck);
  }, []);
  
  // For Safari, use a div with background-image instead of Next.js Image
  if (isSafari) {
    return (
      <div 
        className={`${className} bg-cover bg-center`}
        style={{ backgroundImage: `url(${src})` }}
        role="img"
        aria-label={alt}
      />
    );
  }
  
  // For other browsers, use a regular img tag with lower quality
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`${className} object-cover w-full h-full`}
      loading="lazy"
    />
  );
}

// Services section with Safari-safe images
function ServicesSection() {
  // State to track which service is expanded on mobile
  const [expandedService, setExpandedService] = useState<number | null>(null);

  // Toggle expanded service
  const toggleService = (id: number) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  return (
    <section id="diensten" className="py-16 md:py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Onze Diensten</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Bij GP Auto's bieden wij een breed scala aan diensten om uw auto in optimale conditie te houden.
            Onze ervaren monteurs staan voor u klaar.
          </p>
        </div>
        
        {/* Mobile view - Accordion style */}
        <div className="md:hidden space-y-3">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-zinc-800 rounded-lg overflow-hidden shadow-md"
            >
              <button 
                onClick={() => toggleService(service.id)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 text-white transition-transform ${expandedService === service.id ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {expandedService === service.id && (
                <div className="p-4 pt-0 border-t border-zinc-700">
                  <div className="relative h-40 bg-zinc-700 mb-4">
                    <SafariSafeImage
                      src={service.icon}
                      alt={service.title}
                      className="h-full w-full"
                    />
                  </div>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Desktop view - Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-zinc-800 rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-40 md:h-48 bg-zinc-700">
                <SafariSafeImage
                  src={service.icon}
                  alt={service.title}
                  className="h-full w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
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
  );
}

// About section with Safari-safe image
function AboutSection() {
  return (
    <section id="about-section" className="py-16 md:py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden bg-zinc-800">
              <SafariSafeImage
                src="/images/about.jpg"
                alt="Over GP Auto's"
                className="h-full w-full"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
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
  );
}

// Contact section component
function ContactSection() {
  return (
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
              Galileïstraat 5<br />
              7131PE Lichtenvoorde
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
  );
}

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSlideshow />
      
      {/* Services Section with Safari-safe images */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ServicesSection />
      </ErrorBoundary>
      
      {/* About Section with Safari-safe image */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AboutSection />
      </ErrorBoundary>
      
      {/* Contact Section */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ContactSection />
      </ErrorBoundary>
    </Layout>
  )
} 