import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, getServiceBySlug } from '@/lib/seo-data';

interface ServicePageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const service = getServiceBySlug(params.slug);
    if (!service) return {};

    const title = `${service.name} Lichtenvoorde | GP Auto's VAG Specialist`;
    const description = `${service.longDescription.slice(0, 155)}...`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://gpautos.nl/diensten/${service.slug}`,
            siteName: "GP Auto's",
            locale: 'nl_NL',
            type: 'website',
        },
        alternates: {
            canonical: `/diensten/${service.slug}`,
        },
    };
}

export default function ServicePage({ params }: ServicePageProps) {
    const service = getServiceBySlug(params.slug);
    if (!service) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.name,
        "description": service.longDescription,
        "provider": {
            "@type": "AutoRepair",
            "name": "GP Auto's",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Galileïstraat 5",
                "addressLocality": "Lichtenvoorde",
                "postalCode": "7131PE",
                "addressCountry": "NL"
            }
        },
        "areaServed": {
            "@type": "Place",
            "name": "Achterhoek, Gelderland"
        }
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
                            <span className="text-5xl mb-6 block">{service.icon}</span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-bebas uppercase tracking-tight">
                                {service.name}
                            </h1>
                            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                                {service.shortDescription}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/afspraak"
                                    className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                                >
                                    Afspraak Maken
                                </Link>
                                <Link
                                    href="tel:+31615530641"
                                    className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
                                >
                                    Bel: 0615 530 641
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                Wat kunt u verwachten?
                            </h2>
                            <p className="text-lg text-white/80 leading-relaxed mb-8">
                                {service.longDescription}
                            </p>

                            <div className="bg-zinc-900 p-6 rounded-xl border border-white/10 mb-8">
                                <h3 className="text-xl font-semibold mb-4">Waarom GP Auto's?</h3>
                                <ul className="space-y-3 text-white/70">
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary">✓</span>
                                        <span>Specialist in Audi, Volkswagen, SEAT en Skoda</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary">✓</span>
                                        <span>Merkspecifieke diagnoseapparatuur (VCDS/ODIS)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary">✓</span>
                                        <span>Transparante prijzen, geen verrassingen</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary">✓</span>
                                        <span>Behoud van fabrieksgarantie</span>
                                    </li>
                                </ul>
                            </div>

                            <Link
                                href="/afspraak"
                                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                Direct Afspraak Maken
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Other Services */}
                <section className="py-16 bg-zinc-900">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                            Andere Diensten
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                            {services
                                .filter((s) => s.slug !== service.slug)
                                .slice(0, 3)
                                .map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/diensten/${s.slug}`}
                                        className="bg-zinc-800 p-4 rounded-lg hover:bg-zinc-700 transition-colors text-center"
                                    >
                                        <span className="text-2xl block mb-2">{s.icon}</span>
                                        <span className="font-medium">{s.name}</span>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
