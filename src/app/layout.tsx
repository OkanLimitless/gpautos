import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GP Auto\'s - Autogarage in Lichtenvoorde',
  description: 'Professionele autoservice, onderhoud en reparatie voor alle merken en modellen in Lichtenvoorde en omgeving.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#18181b" />
      </head>
      <body className={`${inter.className} bg-zinc-950 text-white`}>
        {children}
        <Toaster 
          position="bottom-center"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#18181b',
              color: '#fff',
              border: '1px solid #3f3f46',
            },
          }}
        />
      </body>
    </html>
  )
} 