import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, getServiceBySlug } from '@/lib/seo-data';

interface ServicePageProps {
    params: { slug: string };
}

const siteUrl = 'https://gpautos.nl';

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const service = getServiceBySlug(params.slug);
    if (!service) return {};

    const title = `${service.name} in Lichtenvoorde | GP Auto's VAG specialist`;
    const description = service.metaDescription;

    return {
        title,
        description,
        keywords: [
            service.name,
            'Lichtenvoorde',
            'VAG specialist',
            'garage',
            'onderhoud',
            'reparatie',
        ],
        openGraph: {
            title,
            description,
            url: `${siteUrl}/diensten/${service.slug}`,
            siteName: "GP Auto's",
            locale: 'nl_NL',
            type: 'website',
            images: [
                {
                    url: '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: `${service.name} bij GP Auto's`,
                },
            ],
        },
        alternates: {
            canonical: `/diensten/${service.slug}`,
        },
    };
}

export default function ServicePage({ params }: ServicePageProps) {
    const service = getServiceBySlug(params.slug);
    if (!service) notFound();

    const relatedServices = service.relatedServiceSlugs
        .map((slug) => getServiceBySlug(slug))
        .filter((relatedService): relatedService is NonNullable<ReturnType<typeof getServiceBySlug>> => Boolean(relatedService));

    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.name,
            description: service.metaDescription,
            serviceType: service.name,
            provider: {
                '@type': 'AutoRepair',
                name: "GP Auto's",
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Galileïstraat 5',
                    addressLocality: 'Lichtenvoorde',
                    postalCode: '7131PE',
                    addressCountry: 'NL',
                },
            },
            areaServed: [
                {
                    '@type': 'Place',
                    name: 'Achterhoek, Gelderland',
                },
                {
                    '@type': 'City',
                    name: 'Lichtenvoorde',
                },
            ],
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: service.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-zinc-950 text-white">
                <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 py-24 md:py-32">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-5xl text-center">
                            <span className="mb-6 block text-5xl">{service.icon}</span>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                                VAG specialist in Lichtenvoorde
                            </p>
                            <h1 className="mb-6 font-bebas text-4xl uppercase tracking-tight md:text-6xl lg:text-7xl">
                                {service.name}
                            </h1>
                            <p className="mx-auto mb-4 max-w-3xl text-lg text-white/70 md:text-xl">
                                {service.shortDescription}
                            </p>
                            <p className="mx-auto mb-8 max-w-3xl text-base text-white/60 md:text-lg">
                                {service.intro}
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <Link
                                    href="/afspraak"
                                    className="rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-colors hover:bg-primary/90"
                                >
                                    Afspraak maken
                                </Link>
                                <Link
                                    href="tel:+31615530641"
                                    className="rounded-lg border border-white/20 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/5"
                                >
                                    Bel: 0615 530 641
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-6xl">
                            <h2 className="mb-10 text-center font-bebas text-3xl uppercase tracking-tight md:text-4xl">
                                Wanneer is dit de juiste service?
                            </h2>
                            <div className="grid gap-6 md:grid-cols-3">
                                {service.idealFor.map((item) => (
                                    <article key={item} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                                        <p className="text-sm leading-7 text-white/75">{item}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-y border-white/5 bg-zinc-900/60 py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                            <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
                                <h2 className="font-bebas text-3xl uppercase tracking-tight md:text-4xl">
                                    Wat we controleren of uitvoeren
                                </h2>
                                <ul className="mt-6 space-y-4 text-sm leading-6 text-white/75">
                                    {service.checklist.map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="mt-1 text-primary">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-3xl border border-primary/20 bg-gradient-to-b from-primary/10 to-zinc-900 p-8">
                                <h3 className="font-bebas text-3xl uppercase tracking-tight">
                                    Waarom deze aanpak werkt
                                </h3>
                                <p className="mt-4 text-white/70">{service.longDescription}</p>
                                <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/70 p-5">
                                    <p className="text-sm uppercase tracking-[0.24em] text-white/40">Praktisch voordeel</p>
                                    <p className="mt-2 text-sm leading-7 text-white/75">
                                        U krijgt geen losse termen of onnodige vervangadviezen, maar een technische uitleg die helpt bij de volgende stap.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="font-bebas text-3xl uppercase tracking-tight md:text-4xl">
                                Veelgestelde vragen
                            </h2>
                            <div className="mt-8 space-y-4">
                                {service.faqs.map((faq) => (
                                    <details key={faq.question} className="group rounded-2xl border border-white/10 bg-zinc-900 p-6">
                                        <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                                            {faq.question}
                                        </summary>
                                        <p className="mt-4 text-sm leading-7 text-white/65">{faq.answer}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-y border-white/5 bg-zinc-900/60 py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-6xl">
                            <div className="mb-8">
                                <h2 className="font-bebas text-3xl uppercase tracking-tight md:text-4xl">
                                    Gerelateerde diensten
                                </h2>
                                <p className="mt-2 max-w-2xl text-white/60">
                                    Dit zijn de services die vaak logisch combineren met deze afspraak.
                                </p>
                            </div>
                            <div className="grid gap-4 md:grid-cols-3">
                                {relatedServices.map((relatedService) => (
                                    <Link
                                        key={relatedService.slug}
                                        href={`/diensten/${relatedService.slug}`}
                                        className="rounded-2xl border border-white/10 bg-zinc-950 p-5 transition-colors hover:border-primary/30"
                                    >
                                        <span className="mb-3 block text-2xl">{relatedService.icon}</span>
                                        <p className="text-lg font-semibold">{relatedService.name}</p>
                                        <p className="mt-2 text-sm text-white/60">{relatedService.shortDescription}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
