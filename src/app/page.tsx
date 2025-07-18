'use client'

import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

// Error fallback component
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="p-6 bg-primary/10 text-white rounded">
      <h3 className="text-xl font-bold mb-2">Er is iets misgegaan</h3>
      <p className="mb-4">Er is een fout opgetreden bij het laden van deze sectie.</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-primary text-white px-4 py-2 rounded font-bold uppercase tracking-wide"
      >
        Probeer opnieuw
      </button>
    </div>
  );
}

// Professional Hero Section
function ProfessionalHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1920&q=80",
      title: "VAG Specialist",
      subtitle: "Volkswagen • Audi • SEAT • Škoda"
    },
    {
      image: "https://images.unsplash.com/photo-1627612839512-7f7d01226ec5?auto=format&fit=crop&w=1920&q=80",
      title: "Moderne Werkplaats",
      subtitle: "Diagnose • Onderhoud • Reparatie"
    },
    {
      image: "https://images.unsplash.com/photo-1599474151975-1f978922fa02?auto=format&fit=crop&w=1920&q=80",
      title: "Vakkundige Service",
      subtitle: "Kwaliteit • Expertise • Transparantie"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded text-sm font-semibold uppercase tracking-wider border border-white/20">
                GP Auto's • Lichtenvoorde
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Uw Auto in
              <span className="text-primary block">Betrouwbare Handen</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed">
              Professioneel onderhoud en reparatie van VAG voertuigen door ervaren monteurs. 
              Moderne diagnoseapparatuur, transparante communicatie en eerlijke prijzen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/afspraak" 
                className="group bg-primary hover:bg-red-700 text-white font-bold py-4 px-8 rounded transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <span>Afspraak Maken</span>
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="#services" 
                className="group bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 rounded transition-all duration-300 uppercase tracking-wide border-2 border-white/30 hover:border-white/50 flex items-center justify-center"
              >
                <span>Onze Diensten</span>
                <svg className="w-5 h-5 ml-3 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

// Trust & Expertise Section (replacing stats)
function TrustExpertiseSection() {
  const trustPoints = [
    {
      title: "Gecertificeerde Monteurs",
      description: "Onze monteurs zijn volledig gecertificeerd en hebben jarenlange ervaring in de automotive sector."
    },
    {
      title: "Moderne Diagnoseapparatuur",
      description: "Wij investeren in de nieuwste technologie voor accurate diagnose en efficiënte reparaties."
    },
    {
      title: "Transparante Communicatie",
      description: "Heldere uitleg over wat er aan uw auto gedaan wordt, zonder verborgen kosten of verrassingen."
    },
    {
      title: "Garantie op Werkzaamheden",
      description: "Alle reparaties en onderhoudswerkzaamheden worden uitgevoerd met volledige garantie."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Betrouwbare Autoservice in Lichtenvoorde
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bij GP Auto's staat kwaliteit en vertrouwen centraal. Ontdek waarom klanten ons vertrouwen met hun voertuig.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trustPoints.map((point, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">
                {point.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Professional Services Section
function ProfessionalServicesSection() {
  const services = [
    {
      title: "VAG Specialist",
      description: "Gespecialiseerd in Volkswagen, Audi, SEAT en Škoda voertuigen met originele diagnoseapparatuur en jarenlange ervaring.",
      features: [
        "DSG Versnellingsbak Service",
        "Originele Diagnoseapparatuur",
        "ECU Codering & Aanpassingen",
        "Fabrieksgarantie Behoud"
      ],
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Onderhoud & Reparatie",
      description: "Professioneel onderhoud volgens fabrieksvoorschriften voor alle automerken, uitgevoerd door gecertificeerde monteurs.",
      features: [
        "APK Keuring & Controle",
        "Periodiek Onderhoud",
        "Reparatie & Revisie",
        "Airco Service & Onderhoud"
      ],
      image: "https://images.unsplash.com/photo-1599474151975-1f978922fa02?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Diagnose & Analyse",
      description: "Uitgebreide diagnose met professionele apparatuur voor snelle en accurate identificatie van problemen.",
      features: [
        "Computerdiagnose",
        "Elektrische Systemen",
        "Motor & Transmissie",
        "Uitlaatsysteem Controle"
      ],
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Onze Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionele autoservice met focus op kwaliteit, betrouwbaarheid en klanttevredenheid.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/afspraak"
                  className="inline-flex items-center text-primary font-semibold hover:text-red-700 transition-colors"
                >
                  <span>Afspraak maken</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Professional Why Choose Us Section
function ProfessionalWhyChooseUsSection() {
  const reasons = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Gecertificeerde Expertise",
      description: "Onze monteurs zijn gecertificeerd en hebben jarenlange ervaring met VAG voertuigen en andere merken."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Moderne Apparatuur",
      description: "Investering in de nieuwste diagnoseapparatuur en gereedschappen voor nauwkeurige service."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Transparante Prijzen",
      description: "Eerlijke prijsstelling zonder verborgen kosten. U weet vooraf waar u aan toe bent."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Garantie & Zekerheid",
      description: "Alle werkzaamheden worden uitgevoerd met garantie voor uw gemoedsrust."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Snelle Service",
      description: "Efficiënte werkwijze en flexibele planning om uw tijd te respecteren."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Persoonlijke Service",
      description: "Directe communicatie met onze monteurs en persoonlijke aandacht voor uw auto."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Waarom GP Auto's?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek wat ons onderscheidt als professionele autoservice in Lichtenvoorde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group text-center p-8 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Professional Testimonials Section
function ProfessionalTestimonialsSection() {
  const testimonials = [
    {
      name: "Mark van der Berg",
      car: "Audi A4 B8",
      text: "Uitstekende service en vakkundige reparatie. Het DSG probleem werd snel en efficiënt opgelost. Duidelijke communicatie en eerlijke prijzen.",
      rating: 5
    },
    {
      name: "Lisa Hendriks",
      car: "VW Golf 7 GTI",
      text: "Zeer professionele aanpak. De diagnose was accuraat en de reparatie werd binnen de afgesproken tijd uitgevoerd. Zeker een aanrader.",
      rating: 5
    },
    {
      name: "Peter Jansen",
      car: "SEAT Leon FR",
      text: "Betrouwbare service en vakmanschap. Mijn auto rijdt weer perfect na de reparatie. Goede prijs-kwaliteitverhouding.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lees de ervaringen van onze tevreden klanten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.car}</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Professional CTA Section
function ProfessionalCTASection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Klaar voor Professionele Autoservice?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Maak een afspraak en ervaar de kwaliteit van onze service. 
          Wij zorgen ervoor dat uw auto in optimale conditie blijft.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/afspraak"
            className="bg-primary hover:bg-red-700 text-white font-bold py-4 px-8 rounded transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl"
          >
            Afspraak Maken
          </Link>
          <Link
            href="#contact"
            className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 rounded transition-all duration-300 uppercase tracking-wide border-2 border-white/30 hover:border-white/50"
          >
            Contact Opnemen
          </Link>
        </div>
      </div>
    </section>
  );
}

// Professional Contact Section
function ProfessionalContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact & Locatie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neem contact op voor vragen of om een afspraak te maken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Informatie</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Werkplaats Adres</p>
                  <p className="text-gray-600">Galileïstraat 5</p>
                  <p className="text-gray-600">7131PE Lichtenvoorde</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Telefoon</p>
                  <p className="text-gray-600">Oktay: <a href="tel:+31615530641" className="hover:text-primary transition-colors">06 15530641</a></p>
                  <p className="text-gray-600">Joost: <a href="tel:+31622995398" className="hover:text-primary transition-colors">06 22995398</a></p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Email</p>
                  <a href="mailto:info@gpautos.nl" className="text-gray-600 hover:text-primary transition-colors">info@gpautos.nl</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Openingstijden</h3>
            
            <div className="space-y-3">
              {[
                { day: "Maandag", time: "Op afspraak" },
                { day: "Dinsdag", time: "Op afspraak" },
                { day: "Woensdag", time: "Op afspraak" },
                { day: "Donderdag", time: "Op afspraak" },
                { day: "Vrijdag", time: "Op afspraak" },
                { day: "Zaterdag", time: "Op afspraak" },
                { day: "Zondag", time: "Op afspraak" }
              ].map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-gray-600">{schedule.day}</span>
                  <span className="text-gray-900 font-semibold">{schedule.time}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Flexibele service:</strong> Wij werken op afspraak voor uw gemak. 
                Bel of mail ons voor een passende tijd.
              </p>
            </div>
          </div>
          
          {/* Quick Action */}
          <div className="bg-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Direct Contact</h3>
            <p className="mb-6 text-white/90">
              Heeft u een vraag of wilt u direct een afspraak maken? 
              Neem contact op via onderstaande opties.
            </p>
            <div className="space-y-4">
              <Link
                href="/afspraak"
                className="block w-full bg-white text-primary font-bold py-3 px-6 rounded hover:bg-gray-100 transition-colors text-center"
              >
                Online Afspraak Maken
              </Link>
              <a
                href="tel:+31615530641"
                className="block w-full bg-white/20 backdrop-blur-sm text-white font-bold py-3 px-6 rounded hover:bg-white/30 transition-colors text-center border border-white/30"
              >
                Direct Bellen
              </a>
            </div>
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
      <div>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ProfessionalHeroSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TrustExpertiseSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ProfessionalServicesSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ProfessionalWhyChooseUsSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ProfessionalTestimonialsSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ProfessionalCTASection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ProfessionalContactSection />
        </ErrorBoundary>
      </div>
    </Layout>
  )
} 