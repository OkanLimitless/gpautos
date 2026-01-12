'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about-section" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Images Gallery on the left */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="relative h-full rounded-2xl overflow-hidden">
              <Image
                src="/images/overgp.jpeg"
                alt="GP Auto's Workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/IMG_4210.jpeg"
                  alt="Workshop mechanic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/IMG_4208.jpeg"
                  alt="Car in workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content on the right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-bebas tracking-wider uppercase">Waarom GP Auto&apos;s</h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              GP Auto&apos;s combineert passie met technische expertise. Als allround autobedrijf streven we bij elke klus naar perfectie, of het nu gaat om regulier onderhoud of complexe diagnoses.
            </p>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 text-primary">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-tight">Ervaring</h4>
                  <p className="text-white/50 text-sm">Over tien jaar ervaring in vakmanschap en passie voor techniek.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 text-primary">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-tight">Expertise</h4>
                  <p className="text-white/50 text-sm">Marktleidende kennis in onderhoud voor alle merken.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 text-primary">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-tight">Transparantie</h4>
                  <p className="text-white/50 text-sm">Transparante communicatie over alle werkzaamheden en eerlijke prijzen.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 text-primary">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-tight">Betrouwbaarheid</h4>
                  <p className="text-white/50 text-sm">Betrouwbare service voor een zorgeloze rijervaring, elke kilometer weer.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
  )
}
