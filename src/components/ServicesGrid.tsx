'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const SERVICES = [
  {
    title: 'VAG Specialist',
    description: 'Volkswagen, Audi, SEAT, Škoda – diagnose, onderhoud, DSG-service en meer.',
    image: '/images/vag.jpeg'
  },
  {
    title: 'Onderhoud & Reparatie',
    description: 'Onderhoud volgens fabrieksvoorschrift en vakkundige reparaties voor alle merken.',
    image: '/images/overgp.jpeg'
  },
  {
    title: 'Diagnose',
    description: 'Moderne diagnoseapparatuur voor snelle en accurate storingsanalyse.',
    image: '/images/diagnose.jpeg'
  },
  {
    title: 'Retrofit & Inbouw',
    description: 'Apple CarPlay/Android Auto, cruise control, parkeersensoren en meer.',
    image: '/images/diagnose.jpeg'
  },
]

export default function ServicesGrid() {
  return (
    <section id="diensten" className="py-14 md:py-20 dark-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Onze Diensten</h2>
          <p className="section-subtitle">Premium service voor elke kilometer. Vakkundig, transparant en betrouwbaar.</p>
          <div className="mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.title}
              className="service-card overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover transform hover:scale-[1.02] transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h3 className="text-[22px] font-semibold text-white tracking-tight mb-2">{s.title}</h3>
              <p className="text-text-gray text-[16px]">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/afspraak" className="btn btn-primary">Maak een Afspraak</Link>
        </div>
      </div>
    </section>
  )
}

