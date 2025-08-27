'use client'

import Link from 'next/link'

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
        <div className="rounded-xl bg-black/80 backdrop-blur border border-white/10 shadow-lg overflow-hidden">
          <div className="grid grid-cols-2">
            <a href="tel:+31615530641" className="py-3 text-center text-white font-semibold hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60">📞 Bellen</a>
            <Link href="/afspraak" className="py-3 text-center bg-primary hover:bg-[#c90500] text-white font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60">📅 Afspraak</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

