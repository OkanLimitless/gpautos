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
        <section className="relative flex min-h-[900px] flex-col justify-center md:h-screen md:min-h-[700px]">
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

            <div className="container relative z-10 mx-auto px-4 pb-28 pt-10 md:px-8 md:pb-12 md:pt-0">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="mb-8 text-4xl font-bebas font-bold leading-[0.9] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
                            GP AUTO&apos;S: <br />
                            <span className="text-white">KWALITEIT &</span> <br />
                            <span className="text-white">VAKMANSCHAP.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col gap-4 sm:flex-row sm:flex-wrap"
                    >
                        <Link
                            href="/afspraak"
                            className="bg-primary hover:bg-red-700 text-center text-white font-bold py-4 px-8 rounded-sm transition-all duration-300 text-lg uppercase tracking-wider shadow-sonic"
                        >
                            Afspraak maken
                        </Link>
                        <Link
                            href="/#diensten"
                            className="border border-white hover:bg-white hover:text-black text-center text-white font-bold py-4 px-8 rounded-sm transition-all duration-300 text-lg uppercase tracking-wider"
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
                        className="mt-6 inline-flex w-full max-w-xl items-center gap-4 rounded-2xl border border-white/15 bg-black/45 px-4 py-3 backdrop-blur-md transition-colors hover:bg-black/60"
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
            <div className="relative z-30 mt-2 pb-24 md:absolute md:bottom-0 md:left-0 md:right-0 md:mt-0 md:translate-y-1/2 md:pb-0">
                <SocialProof />
            </div>
        </section>
    )
}
