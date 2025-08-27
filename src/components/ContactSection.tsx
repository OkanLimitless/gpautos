'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="py-14 md:py-20 dark-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Vragen of afspraak maken? We helpen u graag.</p>
          <div className="mt-8" />
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
                <a className="text-primary hover:text-red-400" href="https://maps.google.com/?q=Galile%C3%AFstraat%205%2C%207131PE%20Lichtenvoorde" target="_blank" rel="noreferrer">Route</a>
              </div>
              <div>
                <p className="text-white font-medium">Telefoon</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <a href="tel:+31615530641" className="btn btn-dark">Bel Oktay</a>
                  <a href="tel:+31622995398" className="btn btn-dark">Bel Joost</a>
                  <a href="https://wa.me/31615530641" className="btn btn-primary">WhatsApp</a>
                </div>
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <div className="flex gap-3 flex-wrap">
                  <a href="mailto:info@gpautos.nl" className="btn btn-dark">Kopieer e-mail</a>
                  <a href="mailto:info@gpautos.nl" className="btn btn-primary">E-mail ons</a>
                </div>
              </div>
              <div>
                <p className="text-white font-medium">Openingstijden</p>
                <div className="mt-2 grid grid-cols-2 gap-y-1 text-sm text-text-gray max-w-xs">
                  <span>Maandag</span><span className="text-right text-white">Op afspraak</span>
                  <span>Dinsdag</span><span className="text-right text-white">Op afspraak</span>
                  <span>Woensdag</span><span className="text-right text-white">Op afspraak</span>
                  <span>Donderdag</span><span className="text-right text-white">Op afspraak</span>
                  <span>Vrijdag</span><span className="text-right text-white">Op afspraak</span>
                  <span>Zaterdag</span><span className="text-right text-white">Op afspraak</span>
                  <span>Zondag</span><span className="text-right text-white">Op afspraak</span>
                </div>
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
            <p className="text-text-gray mb-4">We reageren doorgaans binnen 24 uur.</p>
            <Link href="/afspraak" className="btn btn-primary w-full">Afspraak Maken</Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

