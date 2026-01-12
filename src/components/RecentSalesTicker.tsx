'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ACTIVITIES = [
    "Klant uit Lichtenvoorde zocht net een VAG Specialist",
    "Nieuwe afspraak ingepland: Audi A3 Diagnose",
    "VAG Specialist zojuist ingeschakeld voor VW Golf DSG Service",
    "Klant uit Enschede maakte zojuist een afspraak",
    "Recent onderhoud voltooid: SEAT Leon Grote Beurt",
    "Diagnose afgerond voor klant uit Winterswijk",
    "Nieuwe aanvraag: APK & Onderhoud voor Skoda Octavia",
]

export default function RecentSalesTicker() {
    const [index, setIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Show after 3 seconds
        const initialTimer = setTimeout(() => setIsVisible(true), 3000)

        // Rotate every 8 seconds
        const interval = setInterval(() => {
            setIsVisible(false)
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % ACTIVITIES.length)
                setIsVisible(true)
            }, 1000)
        }, 8000)

        return () => {
            clearTimeout(initialTimer)
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="fixed bottom-24 left-4 md:left-8 z-40 pointer-events-none">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -20, scale: 0.9 }}
                        className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl shadow-sonic flex items-center gap-3 pointer-events-auto"
                    >
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <p className="text-sm text-white/90 font-medium">
                            {ACTIVITIES[index]}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
