import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cities, services, getCityBySlug } from '@/lib/seo-data';

interface CityPageProps {
    params: { city: string };
}

export async function generateStaticParams() {
    return cities.map((city) => ({
        city: city.slug,
    }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
    const city = getCityBySlug(params.city);
    if (!city) return {};

    const title = `VAG Specialist ${city.name} | Audi, VW, SEAT & Skoda Service`;
    const description = `GP Auto's is uw VAG specialist in ${city.name} en omgeving. ${city.description}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://gpautos.nl/regio/${city.slug}`,
            siteName: "GP Auto's",
            locale: 'nl_NL',
            type: 'website',
        },
        alternates: {
            canonical: `/regio/${city.slug}`,
        },
    };
}

export default function CityPage({ params }: CityPageProps) {
    const city = getCityBySlug(params.city);
    if (!city) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "GP Auto's",
        "description": `VAG Specialist voor ${city.name} en omgeving. Onderhoud en reparatie van Audi, Volkswagen, SEAT en Skoda.`,
        "image": "https://gpautos.nl/og-image.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Galileïstraat 5",
            "addressLocality": "Lichtenvoorde",
            "postalCode": "7131PE",
            "addressCountry": "NL"
        },
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "url": `https://gpautos.nl/regio/${city.slug}`,
        "telephone": "+31615530641",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-zinc-950 text-white">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 bg-gradient-to-b from-zinc-900 to-zinc-950">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-primary font-medium mb-4 uppercase tracking-wider">
                                VAG Specialist • {city.distance} van Lichtenvoorde
                            </p>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-bebas uppercase tracking-tight">
                                Autogarage {city.name}
                            </h1>
                            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                                {city.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/afspraak"
                                    className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                                >
                                    Maak Afspraak
                                </Link>
                                <Link
                                    href="tel:+31615530641"
                                    className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
                                >
                                    Bel Direct: 0615 530 641
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                            Onze Diensten in {city.name}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {services.map((service) => (
                                <Link
                                    key={service.slug}
                                    href={`/diensten/${service.slug}`}
                                    className="bg-zinc-900 p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all hover:translate-y-[-4px]"
                                >
                                    <span className="text-3xl mb-4 block">{service.icon}</span>
                                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                                    <p className="text-white/60">{service.shortDescription}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-zinc-900">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            Rijdt u vanuit {city.name}?
                        </h2>
                        <p className="text-white/70 mb-8 max-w-xl mx-auto">
                            Wij zijn gevestigd aan de Galileïstraat 5 in Lichtenvoorde, op slechts {city.distance} van {city.name}. Maak vandaag nog een afspraak.
                        </p>
                        <Link
                            href="/afspraak"
                            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Plan Uw Bezoek
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
