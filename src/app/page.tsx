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

// Modern Hero Section
function ModernHeroSection() {
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
              className="object-cover w-full h-full scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-block bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                GP Auto's Lichtenvoorde
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Uw Auto in
              <span className="text-primary block">Betrouwbare Handen</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Vakkundig onderhoud, reparatie en diagnose van VAG voertuigen. 
              Persoonlijke service met moderne apparatuur en eerlijke prijzen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="/afspraak" 
                className="group bg-primary hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <span>Afspraak Maken</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="#services" 
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 uppercase tracking-wide border border-white/20 hover:border-white/40 flex items-center justify-center"
              >
                <span>Onze Diensten</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </div>

            {/* Current slide indicator */}
            <div className="text-white/60 text-lg font-medium">
              {slides[currentSlide].title} • {slides[currentSlide].subtitle}
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary scale-125' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    { number: "15+", label: "Jaar Ervaring", icon: "🏆" },
    { number: "1000+", label: "Tevreden Klanten", icon: "😊" },
    { number: "24/7", label: "Bereikbaarheid", icon: "📞" },
    { number: "100%", label: "Garantie", icon: "✅" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Modern Services Section
function ModernServicesSection() {
  const services = [
    {
      title: "VAG Specialist",
      description: "Gespecialiseerd in Volkswagen, Audi, SEAT en Škoda met originele diagnoseapparatuur.",
      features: ["DSG Service", "Diagnose", "Codering", "Onderhoud"],
      image: "https://images.unsplash.com/photo-1630019209880-6b53557d0a8b?q=80&w=800&auto=format&fit=crop",
      gradient: "from-red-500 to-red-700"
    },
    {
      title: "Onderhoud & Reparatie",
      description: "Professioneel onderhoud volgens fabrieksvoorschriften voor alle merken.",
      features: ["APK Keuring", "Reparaties", "Onderhoud", "Airco Service"],
      image: "https://images.unsplash.com/photo-1599474151975-1f978922fa02?q=80&w=800&auto=format&fit=crop",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Diagnose",
      description: "Uitgebreide diagnose met moderne apparatuur voor snelle probleemoplossing.",
      features: ["Storingen", "Elektronica", "Motor", "Uitlaat"],
      image: "https://images.unsplash.com/photo-1658526934242-aa541776ca49?q=80&w=800&auto=format&fit=crop",
      gradient: "from-green-500 to-green-700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Onze <span className="text-primary">Diensten</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van eenvoudig onderhoud tot complexe reparaties - wij zorgen ervoor dat uw auto optimaal presteert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/afspraak"
                  className="inline-flex items-center text-primary font-semibold hover:text-red-700 transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  Meer informatie
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

// Why Choose Us Section
function WhyChooseUsSection() {
  const reasons = [
    {
      icon: "🔧",
      title: "VAG Specialisten",
      description: "Uitgebreide kennis van Volkswagen, Audi, SEAT en Škoda voertuigen"
    },
    {
      icon: "💎",
      title: "Kwaliteitsgarantie",
      description: "Alle reparaties worden uitgevoerd met garantie en originele onderdelen"
    },
    {
      icon: "⚡",
      title: "Moderne Apparatuur",
      description: "Nieuwste diagnoseapparatuur voor snelle en accurate probleemoplossing"
    },
    {
      icon: "💰",
      title: "Eerlijke Prijzen",
      description: "Transparante prijzen zonder verrassingen achteraf"
    },
    {
      icon: "🕐",
      title: "Snelle Service",
      description: "Efficiënte werkwijze en flexibele afspraakplanning"
    },
    {
      icon: "👥",
      title: "Persoonlijke Aanpak",
      description: "Directe communicatie met onze ervaren monteurs"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Waarom <span className="text-primary">GP Auto's</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ontdek waarom klanten voor ons kiezen en waarom wij de juiste keuze zijn voor uw auto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-primary/30">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mark van der Berg",
      car: "Audi A4 B8",
      text: "Uitstekende service! Ze hebben mijn DSG probleem perfect opgelost. Duidelijke communicatie en geen verrassingen.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Hendriks",
      car: "VW Golf 7 GTI",
      text: "Zeer tevreden met de service. Vakkundige diagnose en eerlijke prijzen. Zeker een aanrader!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Peter Jansen",
      car: "SEAT Leon FR",
      text: "Professionele aanpak en uitstekende service. Mijn auto rijdt weer als nieuw!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Wat Klanten <span className="text-primary">Zeggen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lees wat onze tevreden klanten over onze service te zeggen hebben.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.car}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-red-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Klaar om Uw Auto te Laten Checken?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Maak vandaag nog een afspraak en ervaar onze professionele service. 
          Wij zorgen ervoor dat uw auto in topconditie blijft.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/afspraak"
            className="group bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 uppercase tracking-wide shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
          >
            <span>Afspraak Maken</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#contact"
            className="group bg-white/10 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg hover:bg-white/20 transition-all duration-300 uppercase tracking-wide border border-white/20 hover:border-white/40 flex items-center justify-center"
          >
            <span>Contact Opnemen</span>
            <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Neem <span className="text-primary">Contact</span> Op
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Heeft u vragen of wilt u een afspraak maken? Wij staan voor u klaar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Informatie</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Adres</p>
                  <p className="text-gray-300">Galileïstraat 5</p>
                  <p className="text-gray-300">7131PE Lichtenvoorde</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Telefoon</p>
                  <p className="text-gray-300">Oktay: <a href="tel:+31615530641" className="hover:text-primary transition-colors">06 15530641</a></p>
                  <p className="text-gray-300">Joost: <a href="tel:+31622995398" className="hover:text-primary transition-colors">06 22995398</a></p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a href="mailto:info@gpautos.nl" className="text-gray-300 hover:text-primary transition-colors">info@gpautos.nl</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Openingstijden</h3>
            
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
                <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                  <span className="text-gray-300">{schedule.day}</span>
                  <span className="text-white font-semibold">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Action */}
          <div className="bg-gradient-to-br from-primary to-red-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Snel een Afspraak?</h3>
            <p className="text-white/90 mb-6">
              Bel ons direct of maak online een afspraak. We zorgen ervoor dat uw auto snel weer optimaal presteert.
            </p>
            <div className="space-y-4">
              <Link
                href="/afspraak"
                className="block w-full bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Online Afspraak Maken
              </Link>
              <a
                href="tel:+31615530641"
                className="block w-full bg-white/10 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-lg hover:bg-white/20 transition-colors text-center border border-white/20"
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
          <ModernHeroSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <StatsSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ModernServicesSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <WhyChooseUsSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TestimonialsSection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <CTASection />
        </ErrorBoundary>
        
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ContactSection />
        </ErrorBoundary>
      </div>
    </Layout>
  )
} 