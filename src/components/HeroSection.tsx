'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1500&q=80"
          alt="Autogarage GP Auto's"
          className="object-cover w-full h-full brightness-90"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="max-w-3xl w-full text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-wider">
              Uw Auto in Betrouwbare Handen
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8">
              Vakkundig onderhoud, reparatie en diagnose. Persoonlijke service, heldere communicatie en eerlijke prijzen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/afspraak" 
                className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide shadow-sonic text-center"
              >
                Afspraak Maken
              </Link>
              <Link 
                href="/#about-section" 
                className="bg-white hover:bg-gray-100 text-text-dark font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide text-center"
              >
                Over Ons
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 