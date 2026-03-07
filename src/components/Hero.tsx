'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SocialProof from './SocialProof'

// Safari-safe image component
interface SafariSafeImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}

function SafariSafeImage({ src, alt, className = '', priority = false }: SafariSafeImageProps) {
    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
        // Check if browser is Safari
        const isSafariCheck = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        setIsSafari(isSafariCheck);
    }, []);

    // For Safari, use a div with background-image instead of Next.js Image
    if (isSafari) {
        return (
            <div
                className={`${className} bg-cover bg-center`}
                style={{ backgroundImage: `url(${src})` }}
                role="img"
                aria-label={alt}
            />
        );
    }

    // For other browsers, use Next.js Image with proper optimization
    return (
        <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={`object-cover ${className}`}
            sizes="100vw"
            quality={85}
        />
    );
}

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <SafariSafeImage
                    src="/images/hero.jpeg"
                    alt="GP Auto's Workshop"
                    priority={true}
                    className="w-full h-full"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-8 pb-12">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas font-bold text-white leading-[0.9] mb-8 tracking-tight">
                            GP AUTO&apos;S: <br />
                            <span className="text-white">KWALITEIT &</span> <br />
                            <span className="text-white">VAKMANSCHAP.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="/afspraak"
                            className="bg-primary hover:bg-red-700 text-white font-bold py-4 px-8 rounded-sm transition-all duration-300 text-lg uppercase tracking-wider shadow-sonic"
                        >
                            Afspraak maken
                        </Link>
                        <Link
                            href="/#diensten"
                            className="border border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-sm transition-all duration-300 text-lg uppercase tracking-wider"
                        >
                            Onze diensten
                        </Link>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                        href="https://www.rdw.nl/zakelijke-partners/erkende-bedrijven/voorwaarden-en-gebruik/promotiemateriaal-erkende-bedrijven"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-black/45 px-4 py-3 backdrop-blur-md transition-colors hover:bg-black/60"
                    >
                        <Image
                            src="/images/rdw-muurschild-erkend-bedrijf.jpg"
                            alt="Officieel RDW-muurschild voor erkende bedrijven"
                            width={110}
                            height={62}
                            className="h-auto w-[110px] flex-shrink-0 rounded-md bg-white/95 p-1"
                        />
                        <div className="min-w-0">
                            <div className="text-sm font-bold uppercase tracking-[0.22em] text-white/80">
                                RDW erkend bedrijf
                            </div>
                        </div>
                    </motion.a>
                </div>
            </div>

            {/* Social Proof Overlay */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-30">
                <SocialProof />
            </div>
        </section>
    )
}
