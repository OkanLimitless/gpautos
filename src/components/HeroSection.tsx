'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1566379606295-2bf6c64ac47a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="GP Auto's Werkplaats"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-wider">
              Professionele Autoservice
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8">
              Specialist in VAG voertuigen met expertise in diagnose, onderhoud en reparatie. 
              Uw auto in betrouwbare handen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/afspraak" 
                className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide shadow-sonic text-center"
              >
                Maak een Afspraak
              </Link>
              <Link 
                href="/#diensten" 
                className="bg-white hover:bg-gray-100 text-text-dark font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide text-center"
              >
                Onze Diensten
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 