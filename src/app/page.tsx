'use client'

import Layout from '@/components/Layout'
import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

// Service data
const services = [
  {
    id: 1,
    title: 'Onderhoud & Reparatie',
    description: 'Professioneel onderhoud en reparaties voor alle automerken, met speciale expertise in VAG voertuigen. Wij werken volgens fabrieksvoorschriften met behoud van garantie.',
    icon: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'VAG Groep Specialist',
    description: 'Als specialist in Volkswagen, Audi, SEAT en Škoda beschikken wij over de nieuwste diagnoseapparatuur en technische kennis voor optimale service van uw VAG voertuig.',
    icon: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Diagnose & Reparatie',
    description: 'Geavanceerde diagnose apparatuur voor het opsporen van storingen. Wij lossen complexe problemen snel en efficiënt op, met transparante communicatie over de werkzaamheden.',
    icon: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
]

// Error fallback component
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="p-6 bg-primary/10 text-white rounded">
      <h3 className="text-xl font-bold mb-2">Er is iets misgegaan</h3>
      <p className="mb-4">Er is een fout opgetreden bij het laden van deze sectie.</p>
      <pre className="bg-black p-4 rounded overflow-auto text-sm mb-4">
        {error.message}
        {error.stack && `\n\n${error.stack}`}
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="bg-primary text-white px-4 py-2 rounded font-bold uppercase tracking-wide"
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

// Three Pillars Section
function ThreePillarsSection() {
  return (
    <section className="py-16 white-section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quality Pillar */}
          <div className="feature-card-light">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-dark uppercase mb-2 tracking-wide">Kwaliteit</h3>
            <p className="text-text-dark/70">
              Hoogwaardige service met garantie voor alle reparaties en onderhoud
            </p>
          </div>
          
          {/* Expertise Pillar */}
          <div className="feature-card-light">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-dark uppercase mb-2 tracking-wide">Expertise</h3>
            <p className="text-text-dark/70">
              Vakkundige monteurs met specifieke kennis van VAG groep voertuigen
            </p>
          </div>
          
          {/* Service Pillar */}
          <div className="feature-card-light">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-dark uppercase mb-2 tracking-wide">Transparantie</h3>
            <p className="text-text-dark/70">
              Heldere prijzen en eerlijk advies zonder verrassingen achteraf
            </p>
          </div>
        </div>
      </div>
    </section>
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
    <section id="diensten" className="py-16 md:py-20 dark-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-white">Onze Diensten</h2>
          <p className="section-subtitle">
            Bij GP Auto's bieden wij een breed scala aan diensten om uw auto in optimale conditie te houden.
            Onze ervaren monteurs staan voor u klaar.
          </p>
        </div>
        
        {/* Mobile view - Accordion style */}
        <div className="md:hidden space-y-4">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-black rounded overflow-hidden shadow-sonic"
            >
              <button 
                onClick={() => toggleService(service.id)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <h3 className="text-xl font-bold text-white uppercase">{service.title}</h3>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 text-primary transition-transform ${expandedService === service.id ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {expandedService === service.id && (
                <div className="p-4 pt-0 border-t border-accent">
                  <div className="relative h-40 bg-accent mb-4">
                    <SafariSafeImage
                      src={service.icon}
                      alt={service.title}
                      className="h-full w-full"
                    />
                  </div>
                  <p className="text-text-gray">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Desktop view - Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card"
            >
              <div className="relative h-48 mb-6 overflow-hidden">
                <SafariSafeImage
                  src={service.icon}
                  alt={service.title}
                  className="h-full w-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-white uppercase mb-3 tracking-wide">{service.title}</h3>
              <p className="text-text-gray">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/afspraak" 
            className="btn btn-primary"
          >
            Maak een Afspraak
          </Link>
        </div>
      </div>
    </section>
  );
}

// APK Section (replacing Limited Edition Toolbox)
function PremiumServiceSection() {
  return (
    <section className="py-16 white-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] md:h-[500px]">
            <SafariSafeImage
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Premium Service"
              className="h-full w-full rounded"
            />
          </div>
          <div className="p-6">
            <h2 className="section-title-dark text-text-dark">Premium Service</h2>
            <p className="text-text-dark/70 mb-6">
              Bij GP Auto's bieden wij premium onderhoudsservice voor uw auto. Wij werken volgens fabrieksvoorschriften en zorgen ervoor dat uw auto in optimale conditie blijft. Onze ervaren monteurs staan klaar om u de beste service te bieden.
            </p>
            <ul className="space-y-3 mb-6 text-text-dark/70">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Premium onderhoud voor alle merken</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Specialisatie in VAG groep voertuigen</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Hoogwaardige onderdelen en materialen</span>
              </li>
            </ul>
            <Link 
              href="/afspraak" 
              className="btn bg-primary text-white hover:bg-red-700 shadow-sonic"
            >
              Service Afspraak Maken
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// About section with Safari-safe image
function AboutSection() {
  return (
    <section id="about-section" className="py-16 md:py-20 dark-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative h-[400px] w-full rounded overflow-hidden">
              <SafariSafeImage
                src="https://images.unsplash.com/photo-1566379606295-2bf6c64ac47a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Over GP Auto's"
                className="h-full w-full"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="section-title text-white">Over GP Auto's</h2>
            <p className="text-text-gray mb-6">
              Bij GP Auto's combineren wij onze passie voor auto's met professionele expertise. Als specialist in VAG voertuigen bieden wij hoogwaardige service en onderhoud, terwijl we ook andere merken van harte welkom heten.
            </p>
            <p className="text-text-gray mb-6">
              Onze moderne werkplaats is uitgerust met de nieuwste diagnoseapparatuur en gereedschappen. Met onze technische kennis en aandacht voor detail zorgen wij ervoor dat uw auto in optimale conditie blijft.
            </p>
            <p className="text-text-gray mb-8">
              Of het nu gaat om regulier onderhoud, reparaties, diagnose of het oplossen van complexe problemen - bij GP Auto's bent u aan het juiste adres voor een eerlijke en professionele service.
            </p>
            
            <Link href="/#contact" className="btn btn-primary">
              Contact Opnemen
            </Link>
          </div>
          
          {/* Mobile-only image */}
          <div className="lg:hidden w-full">
            <div className="relative h-[300px] w-full rounded overflow-hidden">
              <SafariSafeImage
                src="https://images.unsplash.com/photo-1566379606295-2bf6c64ac47a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Over GP Auto's"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Workshop section
function WorkshopSection() {
  return (
    <section className="py-16 white-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title-dark">Onze Werkplaats</h2>
          <p className="section-subtitle-dark">
            Een moderne werkplaats uitgerust met de nieuwste apparatuur voor optimale service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Workshop Image 1 */}
          <div className="relative h-[300px] rounded overflow-hidden">
            <SafariSafeImage
              src="https://images.unsplash.com/photo-1566379606295-2bf6c64ac47a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Moderne Werkplaats"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Workshop Image 2 */}
          <div className="relative h-[300px] rounded overflow-hidden">
            <SafariSafeImage
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Diagnose Apparatuur"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Workshop Image 3 */}
          <div className="relative h-[300px] rounded overflow-hidden">
            <SafariSafeImage
              src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Professionele Gereedschappen"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-text-dark/70">Professionele Service</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <p className="text-text-dark/70">Pechhulp Service</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-text-dark/70">Garantie op Reparaties</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-text-dark/70">Klanttevredenheid</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact section
function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 dark-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">Contact</h2>
          <p className="section-subtitle">
            Heeft u vragen of wilt u een afspraak maken? Neem contact met ons op of bezoek onze werkplaats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="card">
            <h3 className="text-xl font-bold text-white uppercase mb-4 tracking-wide">Contact Informatie</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-white font-medium">Adres</p>
                  <p className="text-text-gray">Examplestraat 123</p>
                  <p className="text-text-gray">1234 AB Amsterdam</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-white font-medium">Telefoon</p>
                  <a href="tel:+31612345678" className="text-text-gray hover:text-primary transition-colors">+31 6 12345678</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:info@gpautos.nl" className="text-text-gray hover:text-primary transition-colors">info@gpautos.nl</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div className="card">
            <h3 className="text-xl font-bold text-white uppercase mb-4 tracking-wide">Openingstijden</h3>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-text-gray">Maandag</span>
                <span className="text-white">08:00 - 17:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-gray">Dinsdag</span>
                <span className="text-white">08:00 - 17:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-gray">Woensdag</span>
                <span className="text-white">08:00 - 17:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-gray">Donderdag</span>
                <span className="text-white">08:00 - 17:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-gray">Vrijdag</span>
                <span className="text-white">08:00 - 17:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-gray">Zaterdag</span>
                <span className="text-white">Gesloten</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-gray">Zondag</span>
                <span className="text-white">Gesloten</span>
              </div>
            </div>
          </div>
          
          {/* Quick Contact */}
          <div className="card flex flex-col">
            <h3 className="text-xl font-bold text-white uppercase mb-4 tracking-wide">Snel Contact</h3>
            <p className="text-text-gray mb-6">
              Vul het formulier in voor een snelle reactie of maak direct een afspraak.
            </p>
            <Link 
              href="/afspraak" 
              className="btn btn-primary mt-auto"
            >
              Maak een Afspraak
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main page component
export default function Home() {
  return (
    <Layout>
      <div className="pt-[88px] md:pt-[96px]"> {/* Adjusted for navigation height */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HeroSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ThreePillarsSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ServicesSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <PremiumServiceSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AboutSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <WorkshopSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ContactSection />
        </ErrorBoundary>
      </div>
    </Layout>
  )
} 