'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 dark-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Vragen of afspraak maken? We helpen u graag.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-bold text-white uppercase mb-4 tracking-wide">Gegevens</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium">Adres</p>
                <p className="text-text-gray">Galileïstraat 5, 7131PE Lichtenvoorde</p>
              </div>
              <div>
                <p className="text-white font-medium">Telefoon</p>
                <p className="text-text-gray"><a href="tel:+31615530641" className="hover:text-primary transition-colors">+31 6 15530641 (Oktay)</a></p>
                <p className="text-text-gray"><a href="tel:+31622995398" className="hover:text-primary transition-colors">+31 6 22995398 (Joost)</a></p>
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-text-gray"><a href="mailto:info@gpautos.nl" className="hover:text-primary transition-colors">info@gpautos.nl</a></p>
              </div>
              <div>
                <p className="text-white font-medium">Openingstijden</p>
                <p className="text-text-gray">Ma - Zo: Op afspraak</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card"
          >
            <h3 className="text-xl font-bold text-white uppercase mb-4 tracking-wide">Bericht sturen</h3>
            <p className="text-text-gray mb-4">We nemen zo snel mogelijk contact met u op.</p>
            <Link href="/afspraak" className="btn btn-primary w-full">Afspraak Maken</Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

