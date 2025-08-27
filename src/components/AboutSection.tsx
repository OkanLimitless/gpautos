'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about-section" className="py-16 dark-section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div className="relative h-[340px] md:h-[420px] rounded overflow-hidden order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/overgp.jpeg"
              alt="Over GP Auto's – premium workshop"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Over GP Auto's</h2>
            <p className="text-text-gray mb-4">Wij combineren passie voor auto’s met technische expertise. Als VAG-specialist leveren wij hoogstaande service en onderhoud, ook voor andere merken.</p>
            <p className="text-text-gray mb-8">Onze werkplaats is uitgerust met moderne diagnoseapparatuur en gereedschappen. Transparantie, betrouwbaarheid en aandacht voor detail staan centraal.</p>
            <Link href="/#contact" className="btn btn-primary">Contact Opnemen</Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

