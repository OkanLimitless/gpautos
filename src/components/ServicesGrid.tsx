'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const SERVICES = [
  {
    title: 'VAG Specialist',
    description: 'Volkswagen, Audi, SEAT, Škoda – diagnose, onderhoud, DSG-service en meer.',
    image: 'https://images.unsplash.com/photo-1630019209880-6b53557d0a8b?q=80&w=3242&auto=format&fit=crop'
  },
  {
    title: 'Onderhoud & Reparatie',
    description: 'Onderhoud volgens fabrieksvoorschrift en vakkundige reparaties voor alle merken.',
    image: 'https://images.unsplash.com/photo-1599474151975-1f978922fa02?q=80&w=3270&auto=format&fit=crop'
  },
  {
    title: 'Diagnose',
    description: 'Moderne diagnoseapparatuur voor snelle en accurate storingsanalyse.',
    image: 'https://plus.unsplash.com/premium_photo-1658526934242-aa541776ca49?q=80&w=3272&auto=format&fit=crop'
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

