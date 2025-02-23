import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GP Auto\'s - Uw Betrouwbare Autogarage in Lichtenvoorde',
  description: 'Professionele autoservice en reparatie in Lichtenvoorde. Maak eenvoudig een afspraak voor onderhoud, reparatie of APK-keuring.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  )
} 