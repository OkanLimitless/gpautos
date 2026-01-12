'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const SHOWCASE_IMAGES = [
  { src: '/images/overgp.jpeg', alt: 'Clean workshop floor' },
  { src: '/images/vag.jpeg', alt: 'Engine on a crane' },
  { src: '/images/diagnose.jpeg', alt: 'Professional diagnostic station' },
]

export default function WorkshopGallery() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-white uppercase font-bebas tracking-wider">Onze Werkplaats</h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SHOWCASE_IMAGES.map((img, idx) => (
            <motion.div
              key={img.src}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
