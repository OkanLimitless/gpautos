'use client'

import { motion } from 'framer-motion'

export default function WorkshopGallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1727893372771-b4ccae9b9f0b?q=80&w=3270&auto=format&fit=crop', label: 'VAG Diagnose' },
    { src: 'https://images.unsplash.com/photo-1679251884095-d6ad5095b8ed?q=80&w=3270&auto=format&fit=crop', label: 'DSG Specialist' },
    { src: 'https://images.unsplash.com/photo-1619505372149-07875c35b313?q=80&w=3387&auto=format&fit=crop', label: 'Werkplaats' },
  ]

  return (
    <section className="py-16 white-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title-dark">Onze Werkplaats</h2>
          <p className="section-subtitle-dark">Moderne apparatuur voor diagnose, onderhoud en reparatie</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {images.map((img, idx) => (
            <motion.div key={img.src}
              className="relative h-[280px] rounded overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <img src={img.src} alt={img.label} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-semibold">{img.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: 'VAG Diagnoseapparatuur', d: 'Uitlezen, coderen en programmeren.' },
            { t: 'DSG Service', d: 'Onderhoud en reparatie volgens voorschrift.' },
            { t: 'Remmen & Onderstel', d: 'Remmen, vering en uitlijning voor optimale controle.' },
          ].map((item) => (
            <div key={item.t} className="bg-light p-6 rounded shadow-sonic">
              <h3 className="text-lg font-bold text-text-dark mb-2">{item.t}</h3>
              <p className="text-text-dark/70">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

