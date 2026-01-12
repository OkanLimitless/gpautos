'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const SERVICES = [
  {
    title: 'VAG Specialist',
    description: 'Volkswagen, Audi, SEAT, Škoda – diagnose, onderhoud, DSG-service en meer.',
    image: '/images/vag.jpeg',
    car: 'Audi RS6',
    icon: <EngineIcon />
  },
  {
    title: 'Maintenance',
    description: 'Periodiek onderhoud volgens fabrieksvoorschrift voor alle merken.',
    image: '/images/IMG_4210.jpeg',
    car: 'BMW M5',
    icon: <WrenchIcon />
  },
  {
    title: 'Diagnostics',
    description: 'Moderne diagnoseapparatuur voor snelle en accurate storingsanalyse.',
    image: '/images/diagnose.jpeg',
    car: 'Porsche Taycan',
    icon: <DiagnosticIcon />
  },
  {
    title: 'Retrofit & Tuning',
    description: 'Apple CarPlay, cruise control, parkeersensoren en software optimalisatie.',
    image: '/images/IMG_4208.jpeg',
    car: 'Mercedes Benz AMG GT',
    icon: <TuningIcon />
  },
]

export default function ServicesGrid() {
  return (
    <section id="diensten" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-2 uppercase font-bebas tracking-wider">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.title}
              className="group bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 flex flex-col md:flex-row h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Image Side */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Content Side */}
              <div className="p-8 flex flex-col justify-center w-full md:w-3/5 relative">
                <div className="absolute top-6 right-6 text-white/20">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{s.description}</p>
                <div className="mt-auto text-xs text-white/30 font-medium tracking-widest uppercase">{s.car}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EngineIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3h4" /><path d="M12 3v4" /><path d="M5 14h14" /><path d="M9 14v4" /><path d="M15 14v4" /><path d="M3 6h4" /><path d="M3 10h4" /><path d="M3 14h4" /><path d="M3 18h4" /><path d="M17 6h4" /><path d="M17 10h4" /><path d="M17 14h4" /><path d="M17 18h4" /></svg>
  )
}

function WrenchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
  )
}

function DiagnosticIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h2" /><path d="M8 17h2" /><path d="M14 13h2" /><path d="M14 17h2" /></svg>
  )
}

function TuningIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M3 20h18L12 4z" /></svg>
  )
}
