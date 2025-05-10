'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen pt-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1500&q=80"
          alt="Zomercheck auto"
          className="object-cover w-full h-full brightness-90"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="max-w-xl w-full">
            {/* Badge */}
            <div className="inline-block mb-4 px-4 py-1 bg-primary text-white font-bold rounded-full shadow-lg text-sm uppercase tracking-wide animate-pulse">
              Actie van de maand juni!
            </div>
            {/* Summer Check Promo */}
            <div className="p-8 rounded-2xl bg-white bg-opacity-95 shadow-sonic border-l-8 border-primary flex flex-col items-center">
              {/* Icon */}
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fff200" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12l2 2 4-4" stroke="#333" />
                  <path d="M12 6v2m0 8v2m6-6h-2M8 12H6m9.07-4.93l-1.41 1.41M6.34 17.66l1.41-1.41m0-8.49l-1.41 1.41m8.49 8.49l1.41-1.41" stroke="#f59e42" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 uppercase tracking-wider text-center">GRATIS ZOMERCHECK</h2>
              <p className="text-lg text-text-dark font-semibold mb-1 text-center">Kom langs voor een gratis zomercheck!</p>
              <p className="text-base text-text-dark mb-2 text-center">Voorkom verrassingen onderweg – we controleren je banden, vloeistoffen, verlichting en meer.</p>
              <p className="text-sm text-text-dark mb-4 italic text-center">Deze actie is de gehele maand juni geldig!</p>
              <p className="text-sm text-primary font-bold mb-4 text-center">Plan nu je zomercheck, beperkt beschikbaar!</p>
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