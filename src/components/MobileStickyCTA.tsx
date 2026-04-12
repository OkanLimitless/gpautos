'use client'

import Link from 'next/link'

export default function MobileStickyCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
        <div className="pointer-events-auto overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg border border-gray-200">
          <div className="grid grid-cols-2">
            <a
              href="tel:+31615530641"
              className="flex min-h-[52px] items-center justify-center gap-2 px-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              Bellen
            </a>
            <Link
              href="/afspraak"
              className="flex min-h-[52px] items-center justify-center gap-2 px-3 text-sm font-semibold text-white bg-red-600 transition-colors hover:bg-red-700"
            >
              Afspraak maken
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
