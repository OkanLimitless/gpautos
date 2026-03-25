'use client'

import Image from 'next/image'
import Link from 'next/link'
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
              Lokale expertise in Lichtenvoorde
            </p>
            <h2 className="text-4xl font-bold text-white mb-6 font-bebas tracking-wider uppercase">Waarom GP Auto&apos;s</h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              GP Auto&apos;s combineert praktische werkplaatskennis met duidelijke communicatie. Voor automobilisten uit Lichtenvoorde en de Achterhoek is dat vooral handig als u snel wilt schakelen voor onderhoud, APK of een storingsdiagnose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/afspraak"
                className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-red-700"
              >
                Afspraak maken
              </Link>
              <Link
                href="/regio/lichtenvoorde"
                className="inline-flex items-center justify-center rounded-sm border border-white/10 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/5"
              >
                Werkgebied bekijken
              </Link>
            </div>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 text-primary">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-tight">Vaste werkplaats</h4>
                  <p className="text-white/50 text-sm">Gevestigd aan de Galileïstraat 5 in Lichtenvoorde, goed bereikbaar voor de hele Achterhoek.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 text-primary">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-tight">VAG expertise</h4>
                  <p className="text-white/50 text-sm">Speciaal voor Audi, Volkswagen, SEAT en Skoda, met onderhoud en diagnose op merkniveau.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 text-primary">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-tight">Heldere planning</h4>
                  <p className="text-white/50 text-sm">Op afspraak werken betekent minder wachttijd en sneller duidelijkheid over uw auto.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 text-primary">
                  <CheckIcon />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-tight">Eerlijk advies</h4>
                  <p className="text-white/50 text-sm">We leggen uit wat nodig is, wat kan wachten en wat de beste route is voor uw budget en gebruik.</p>
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
