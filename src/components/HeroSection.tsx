'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen pt-32">
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
            {/* Summer Check Promo */}
            <div className="mb-8 p-6 rounded-lg bg-white bg-opacity-90 shadow-sonic border-l-8 border-primary">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 uppercase tracking-wider">GRATIS ZOMERCHECK</h2>
              <p className="text-lg text-text-dark font-semibold mb-1">Kom langs voor een gratis zomercheck!</p>
              <p className="text-base text-text-dark mb-2">Voorkom verrassingen onderweg – we controleren je banden, vloeistoffen, verlichting en meer.</p>
              <p className="text-sm text-text-dark mb-4 italic">Deze actie is de gehele maand juni geldig!</p>
              <Link 
                href="/afspraak" 
                className="inline-block bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors uppercase tracking-wide shadow-sonic"
              >
                Maak direct een afspraak
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 