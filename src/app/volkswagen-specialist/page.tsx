import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/seo-data';

export const metadata: Metadata = {
    title: "Volkswagen Specialist Lichtenvoorde | GP Auto's VAG Expert",
    description: "Uw VW specialist in de Achterhoek. Golf, Polo, Passat, Tiguan en meer. Onderhoud en reparatie tegen eerlijke prijzen.",
    openGraph: {
        title: "Volkswagen Specialist Lichtenvoorde | GP Auto's",
        description: "Specialist in onderhoud en reparatie van alle Volkswagen modellen. Golf, Polo, Passat, Tiguan, T-Roc en meer.",
        url: 'https://gpautos.nl/volkswagen-specialist',
        siteName: "GP Auto's",
        locale: 'nl_NL',
        type: 'website',
    },
    alternates: {
        canonical: '/volkswagen-specialist',
    },
};

export default function VolkswagenSpecialistPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "GP Auto's - Volkswagen Specialist",
        "description": "Specialist in onderhoud en reparatie van alle Volkswagen modellen in Lichtenvoorde en de Achterhoek.",
        "image": "https://gpautos.nl/og-image.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Galileïstraat 5",
            "addressLocality": "Lichtenvoorde",
            "postalCode": "7131PE",
            "addressCountry": "NL"
        },
        "brand": {
            "@type": "Brand",
            "name": "Volkswagen"
        },
        "url": "https://gpautos.nl/volkswagen-specialist",
        "telephone": "+31615530641",
    };

    const vwModels = ['Polo', 'Golf', 'T-Cross', 'T-Roc', 'Tiguan', 'Passat', 'Arteon', 'Touran', 'Touareg', 'ID.3', 'ID.4', 'ID.5', 'Caddy', 'Transporter'];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-zinc-950 text-white">
                {/* Hero */}
                <section className="relative py-24 md:py-32 bg-gradient-to-b from-zinc-900 to-zinc-950">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-primary font-medium mb-4 uppercase tracking-wider">
                                Das Auto
                            </p>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-bebas uppercase tracking-tight">
                                Volkswagen Specialist
                            </h1>
                            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                                Volkswagen is het hart van het VAG-concern en vormt de basis van onze expertise. Van Golf tot Tiguan, wij kennen ze allemaal.
                            </p>
                            <Link
                                href="/afspraak"
                                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                Maak Afspraak
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Models */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                            Alle Volkswagen Modellen
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                            {vwModels.map((model) => (
                                <span
                                    key={model}
                                    className="px-4 py-2 bg-zinc-800 rounded-lg text-white/80"
                                >
                                    VW {model}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="py-16 bg-zinc-900">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                            Diensten voor uw Volkswagen
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                            {services.slice(0, 3).map((service) => (
                                <Link
                                    key={service.slug}
                                    href={`/diensten/${service.slug}`}
                                    className="bg-zinc-800 p-4 rounded-lg hover:bg-zinc-700 transition-colors text-center"
                                >
                                    <span className="text-2xl block mb-2">{service.icon}</span>
                                    <span className="font-medium">{service.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
