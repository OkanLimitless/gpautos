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
        <section className="relative overflow-hidden bg-black">
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.18),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent_22%)]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 pb-14 pt-28 md:px-8 md:pb-16 md:pt-36">
                <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70 backdrop-blur-sm">
                                <span className="h-2 w-2 rounded-full bg-primary" />
                                Autogarage in Lichtenvoorde
                            </div>
                            <h1 className="max-w-4xl text-4xl font-bebas font-bold leading-[0.9] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-[5.5rem]">
                                DUIDELIJKE AUTOSERVICE
                                <br />
                                <span className="text-white/78">VOOR LICHTENVOORDE</span>
                                <br />
                                <span className="text-gradient">EN DE ACHTERHOEK.</span>
                            </h1>
                            <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                                Voor onderhoud en storingsdiagnose hoeft u niet te gokken. GP Auto&apos;s helpt automobilisten uit Lichtenvoorde, Groenlo, Aalten en Winterswijk met duidelijke afspraken, technisch inzicht en specialistische VAG-kennis.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
                        >
                            <Link
                                href="/afspraak"
                                className="inline-flex min-h-[52px] items-center justify-center rounded-sm bg-primary px-8 py-4 text-center text-lg font-bold uppercase tracking-wider text-white shadow-sonic transition-all duration-300 hover:bg-red-700"
                            >
                                Afspraak maken
                            </Link>
                            <Link
                                href="/#diensten"
                                className="inline-flex min-h-[52px] items-center justify-center rounded-sm border border-white/20 px-8 py-4 text-center text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                            >
                                Onze diensten
                            </Link>
                        </motion.div>

                        <div className="mt-8 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                            {['Onderhoud', 'Diagnose', 'Airco', 'Retrofit', 'VAG specialist'].map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                            className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-5"
                        >
                            <a
                                href="https://www.rdw.nl/zakelijke-partners/erkende-bedrijven/voorwaarden-en-gebruik/promotiemateriaal-erkende-bedrijven"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 text-white transition-opacity hover:opacity-90"
                            >
                                <Image
                                    src="/images/rdw-muurschild-erkend-bedrijf.jpg"
                                    alt="Officieel RDW-muurschild voor erkende bedrijven"
                                    width={88}
                                    height={50}
                                    className="h-auto w-[88px] flex-shrink-0 rounded-sm bg-white"
                                />
                                <div className="min-w-0">
                                    <div className="text-sm font-bold uppercase tracking-[0.22em] text-white/90">
                                        RDW erkend bedrijf
                                    </div>
                                    <div className="mt-1 text-sm text-white/58">
                                        Erkende werkplaats met focus op onderhoud en diagnose.
                                    </div>
                                </div>
                            </a>
                            <p className="max-w-sm text-sm leading-6 text-white/52">
                                Veel klanten komen ook vanuit Groenlo, Varsseveld, Eibergen en Borculo.
                            </p>
                        </motion.div>
                    </div>

                    <motion.aside
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
                        className="rounded-[28px] border border-white/10 bg-black/45 p-6 backdrop-blur-xl lg:p-7"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
                            Werkplaats info
                        </p>
                        <h2 className="mt-4 text-2xl font-semibold text-white">
                            Snel duidelijkheid over uw auto
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-white/62">
                            Geen vage intake, maar direct helder overleg over klacht, planning en vervolgstappen.
                        </p>

                        <div className="mt-6 space-y-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">Adres</p>
                                <p className="mt-2 text-sm text-white/85">Galileïstraat 5, 7131PE Lichtenvoorde</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">Specialisme</p>
                                <p className="mt-2 text-sm text-white/85">Audi, Volkswagen, SEAT, Skoda, onderhoud en storingsdiagnose</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">Regio</p>
                                <p className="mt-2 text-sm text-white/85">Lichtenvoorde, Groenlo, Aalten, Winterswijk en de Achterhoek</p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                            <Link
                                href="/afspraak"
                                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-primary hover:text-white"
                            >
                                Plan uw bezoek
                            </Link>
                            <a
                                href="tel:+31615530641"
                                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                            >
                                Bel direct
                            </a>
                        </div>
                    </motion.aside>
                </div>
            </div>

            <div className="relative z-10 pb-12 md:pb-16">
                <SocialProof />
            </div>
        </section>
    )
}
