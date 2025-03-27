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
    icon: '/images/unsplash/service1.jpg'
  },
  {
    id: 2,
    title: 'VAG Groep Specialist',
    description: 'Wij zijn gespecialiseerd in Volkswagen, Audi, SEAT en Škoda. Onze expertise in VAG groep voertuigen zorgt voor de beste service voor uw auto.',
    icon: '/images/unsplash/slide2.jpg'
  },
  {
    id: 3,
    title: 'Diagnose',
    description: 'Geavanceerde diagnose apparatuur voor het opsporen van storingen. Wij lossen complexe problemen snel en efficiënt op.',
    icon: '/images/unsplash/slide3.jpg'
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
    <section className="py-16 bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Efficiency Pillar */}
          <div className="feature-card">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white uppercase mb-2 tracking-wide">Efficiëntie</h3>
            <p className="text-text-gray">
              Al het juiste gereedschap, precies wanneer u het nodig heeft
            </p>
          </div>
          
          {/* Style Pillar */}
          <div className="feature-card">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white uppercase mb-2 tracking-wide">Stijl</h3>
            <p className="text-text-gray">
              Elke auto heeft uw aandacht. Wij brengen uw werkplaats in het vizier
            </p>
          </div>
          
          {/* Support Pillar */}
          <div className="feature-card">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white uppercase mb-2 tracking-wide">Ondersteuning</h3>
            <p className="text-text-gray">
              Lokale service, trots om dag en nacht voor u klaar te staan
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
    <section id="diensten" className="py-16 md:py-20 bg-accent">
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

// Limited Edition Toolbox Section
function LimitedEditionSection() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] md:h-[500px]">
            <SafariSafeImage
              src="/images/unsplash/toolbox.jpg"
              alt="Limited edition gereedschapskist"
              className="h-full w-full rounded"
            />
          </div>
          <div className="p-6">
            <h2 className="section-title text-white">Limited Edition Gereedschapskist</h2>
            <p className="text-text-gray mb-6">
              Onze gereedschapskisten zijn speciaal ontworpen voor professionele autoservice. Met hoogwaardige materialen en slimme indeling zorgen wij dat u altijd het juiste gereedschap bij de hand heeft.
            </p>
            <Link 
              href="/#contact" 
              className="btn btn-primary"
            >
              Meer Info
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
    <section id="about-section" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative h-[400px] w-full rounded overflow-hidden">
              <SafariSafeImage
                src="/images/unsplash/about.jpg"
                alt="Over GP Auto's"
                className="h-full w-full"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="section-title text-white">GP Elite en GP Auto's</h2>
            <p className="text-text-gray mb-6">
              GP Auto's is al meer dan 20 jaar uw betrouwbare partner voor autoservice en onderhoud in de regio. Als specialist in de VAG groep (Volkswagen, Audi, SEAT en Škoda) bieden wij expertise en vakmanschap voor uw voertuig.
            </p>
            <p className="text-text-gray mb-6">
              Onze hoogopgeleide monteurs werken met de nieuwste diagnoseapparatuur en gereedschappen om uw auto in topconditie te houden. Wij staan voor kwaliteit, eerlijkheid en transparantie.
            </p>
            <p className="text-text-gray mb-8">
              Of het nu gaat om regulier onderhoud, APK, reparaties of diagnose van complexe problemen - bij GP Auto's bent u aan het juiste adres.
            </p>
            
            <Link href="/#contact" className="btn btn-primary">
              Contact Opnemen
            </Link>
          </div>
          
          {/* Mobile-only image */}
          <div className="lg:hidden w-full">
            <div className="relative h-[300px] w-full rounded overflow-hidden">
              <SafariSafeImage
                src="/images/unsplash/about.jpg"
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

// Contact section
function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-black">
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

// World of GP Gallery Section
function GallerySection() {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="section-title text-white">Wereld van GP Auto's</h2>
      </div>
      
      <div className="grid-gallery mx-4">
        {/* Use actual workshop images here */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div key={i} className="gallery-item">
            <SafariSafeImage
              src={`/images/unsplash/${i === 1 ? 'about' : i === 2 ? 'toolbox' : `slide${(i % 4) + 1}`}.jpg`}
              alt={`GP Auto's Workshop ${i}`}
              className="w-full h-full hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HeroSlideshow />
      </ErrorBoundary>
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThreePillarsSection />
      </ErrorBoundary>
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ServicesSection />
      </ErrorBoundary>
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <LimitedEditionSection />
      </ErrorBoundary>
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AboutSection />
      </ErrorBoundary>
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <GallerySection />
      </ErrorBoundary>
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ContactSection />
      </ErrorBoundary>
    </Layout>
  )
} 