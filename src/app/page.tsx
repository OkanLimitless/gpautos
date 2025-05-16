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
    title: 'VAG Specialist',
    description: 'Gespecialiseerd in Volkswagen, Audi, SEAT en Škoda. Van DSG-versnellingsbak service tot motormanagement, distributieriem vervanging en specifieke VAG-diagnoses. Met onze diagnoseapparatuur.',
    icon: 'https://images.unsplash.com/photo-1630019209880-6b53557d0a8b?q=80&w=3242&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Onderhoud & Reparatie',
    description: 'Professioneel onderhoud volgens fabrieksvoorschriften. Expertise in VAG-specifieke systemen zoals DSG, quattro, en meer. Ook voor andere merken bieden wij vakkundige service.',
    icon: 'https://images.unsplash.com/photo-1599474151975-1f978922fa02?q=80&w=3270&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Diagnose',
    description: 'Uitgebreide diagnose van uw auto met moderne apparatuur. Snel en nauwkeurig storingen opsporen en oplossen voor optimale prestaties.',
    icon: 'https://plus.unsplash.com/premium_photo-1658526934242-aa541776ca49?q=80&w=3272&auto=format&fit=crop'
  }
]

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Mark",
    car: "Audi A4 B8",
    text: "Uitstekende service voor mijn Audi. Ze hebben een hardnekkig probleem opgelost waar andere garages niet uitkwamen.",
    rating: 5
  },
  {
    id: 2,
    name: "Lisa",
    car: "VW Golf 7",
    text: "Zeer tevreden met de DSG service. Duidelijke uitleg en scherpe prijs.",
    rating: 5
  },
  {
    id: 3,
    name: "Peter",
    car: "SEAT Leon FR",
    text: "Vakkundige diagnose en reparatie. Prettige communicatie en geen verrassingen achteraf.",
    rating: 5
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

// About section with Safari-safe image
function AboutSection() {
  return (
    <section id="about-section" className="py-16 md:py-20 dark-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative h-[400px] w-full rounded overflow-hidden">
              <SafariSafeImage
                src="https://images.unsplash.com/photo-1627612839512-7f7d01226ec5?q=80&w=3387&auto=format&fit=crop"
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
              Onze werkplaats is uitgerust met de nieuwste diagnoseapparatuur en gereedschappen. Met onze technische kennis en aandacht voor detail zorgen wij ervoor dat uw auto in optimale conditie blijft.
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
                src="https://images.unsplash.com/photo-1627612839512-7f7d01226ec5?q=80&w=3387&auto=format&fit=crop"
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

// VAG Specialist Section
function PremiumServiceSection() {
  const services = [
    "Moderne diagnoseapparatuur",
    "DSG versnellingsbak service en reparatie",
    "Distributieriem vervanging volgens fabrieksvoorschrift",
    "Codering en aanpassingen van ECU's",
    "Uitgebreide storingsdiagnose",
    "Onderhoud met behoud van fabrieksgarantie"
  ];

  return (
    <section className="py-16 white-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] md:h-[500px]">
            <SafariSafeImage
              src="https://images.unsplash.com/photo-1555652736-e92021d28a10?q=80&w=3270&auto=format&fit=crop"
              alt="VAG Specialist Service"
              className="h-full w-full rounded object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="section-title-dark text-text-dark">VAG Specialist</h2>
            <p className="text-text-dark/70 mb-6">
              Als specialisten in Volkswagen, Audi, SEAT en Škoda bieden wij professionele service met originele diagnoseapparatuur. Onze expertise in VAG voertuigen zorgt voor efficiënte en accurate service.
            </p>
            <ul className="space-y-3 mb-6">
              {services.map((service, index) => (
                <li key={index} className="flex items-center text-text-dark/70">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <Link 
              href="/afspraak" 
              className="btn bg-primary text-white hover:bg-red-700 shadow-sonic"
            >
              Plan Uw Afspraak
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Workshop section
function WorkshopSection() {
  const equipment = [
    {
      title: "VAG Diagnoseapparatuur",
      description: "Officiële VCDS/VAGCOM diagnose tools voor alle VAG modellen"
    },
    {
      title: "DSG Specialist",
      description: "Specifieke apparatuur voor DSG versnellingsbak service"
    },
    {
      title: "Moderne Hefbruggen",
      description: "Veilige en efficiënte service van uw voertuig"
    },
    {
      title: "Aircoservice",
      description: "Onderhoud en bijvullen van uw airco voor een koel interieur."
    }
  ];

  return (
    <section className="py-16 white-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title-dark">Onze Werkplaats</h2>
          <p className="section-subtitle-dark">
            Uitgerust met de modernste VAG-specifieke diagnoseapparatuur voor optimale service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Workshop Image 1 */}
          <div className="relative h-[300px] rounded overflow-hidden">
            <SafariSafeImage
              src="https://images.unsplash.com/photo-1727893372771-b4ccae9b9f0b?q=80&w=3270&auto=format&fit=crop"
              alt="VAG Diagnoseapparatuur"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
              <h3 className="font-bold">VAG Diagnose</h3>
            </div>
          </div>

          {/* Workshop Image 2 */}
          <div className="relative h-[300px] rounded overflow-hidden">
            <SafariSafeImage
              src="https://images.unsplash.com/photo-1679251884095-d6ad5095b8ed?q=80&w=3270&auto=format&fit=crop"
              alt="DSG Service"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
              <h3 className="font-bold">DSG Specialist</h3>
            </div>
          </div>

          {/* Workshop Image 3 */}
          <div className="relative h-[300px] rounded overflow-hidden">
            <SafariSafeImage
              src="https://images.unsplash.com/photo-1619505372149-07875c35b313?q=80&w=3387&auto=format&fit=crop"
              alt="Moderne Werkplaats"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
              <h3 className="font-bold">Moderne Werkplaats</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, index) => (
            <div key={index} className="bg-light p-6 rounded shadow-lg">
              <h3 className="text-lg font-bold text-text-dark mb-2">{item.title}</h3>
              <p className="text-text-dark/70">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/afspraak" 
            className="btn btn-primary"
          >
            Plan Uw Afspraak
          </Link>
        </div>
      </div>
    </section>
  );
}

// Testimonials section
function TestimonialsSection() {
  return (
    <section className="py-16 dark-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white text-center mb-12">Wat Onze Klanten Zeggen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-gray mb-4">"{testimonial.text}"</p>
              <div className="text-white font-medium">{testimonial.name}</div>
              <div className="text-text-gray text-sm">{testimonial.car}</div>
            </div>
          ))}
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
                  <p className="text-text-gray">Galileïstraat 5</p>
                  <p className="text-text-gray">7131PE Lichtenvoorde</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-white font-medium">Telefoon</p>
                  <div>
                    <span className="block">Oktay: <a href="tel:+31615530641" className="text-text-gray hover:text-primary transition-colors">+31 6 15530641</a></span>
                    <span className="block">Joost: <a href="tel:+31622995398" className="text-text-gray hover:text-primary transition-colors">+31 6 22995398</a></span>
                  </div>
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
                <span className="text-white">Op afspraak</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-gray">Dinsdag</span>
                <span className="text-white">Op afspraak</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-gray">Woensdag</span>
                <span className="text-white">Op afspraak</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-gray">Donderdag</span>
                <span className="text-white">Op afspraak</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-gray">Vrijdag</span>
                <span className="text-white">Op afspraak</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-gray">Zaterdag</span>
                <span className="text-white">Op afspraak</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-gray">Zondag</span>
                <span className="text-white">Op afspraak</span>
              </div>
            </div>
          </div>
          
          {/* Quick Contact Form */}
          <div className="card">
            <h3 className="text-xl font-bold text-white uppercase mb-4 tracking-wide">Snel Contact</h3>
            <p className="text-text-gray mb-4">
              Vul uw gegevens in en we nemen zo snel mogelijk contact met u op.
            </p>
            <Link 
              href="/afspraak"
              className="btn btn-primary w-full"
            >
              Afspraak Maken
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
      <div className="pt-[88px] md:pt-[96px]">
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
          <TestimonialsSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ContactSection />
        </ErrorBoundary>
      </div>
    </Layout>
  )
} 