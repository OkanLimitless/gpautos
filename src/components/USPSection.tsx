'use client'

import { motion } from 'framer-motion'

export default function USPSection() {
  const items = [
    { title: 'Kwaliteit', desc: 'Hoogwaardige service met garantie op reparaties en onderhoud.', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    )},
    { title: 'Expertise', desc: 'Gespecialiseerd in VAG: Volkswagen, Audi, SEAT en Škoda.', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/></svg>
    )},
    { title: 'Transparantie', desc: 'Heldere prijzen en eerlijk advies, zonder verrassingen.', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    )},
    { title: 'Betrouwbaarheid', desc: 'Consistente kwaliteit en afspraken die we nakomen.', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    )},
  ]

  return (
    <section className="py-14 md:py-20 white-section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              className="p-6 bg-light rounded-xl text-text-dark border border-black/5 hover:translate-y-1 hover:shadow-lg hover:ring-1 hover:ring-black/10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -2 }}
            >
              <div className="text-primary mb-4">{item.icon}</div>
              <h3 className="text-[22px] font-semibold tracking-tight mb-2">{item.title}</h3>
              <p className="text-text-dark/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

