import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cities, getCityBySlug, getServiceBySlug } from '@/lib/seo-data';

interface CityPageProps {
    params: { city: string };
}

const siteUrl = 'https://gpautos.nl';

export async function generateStaticParams() {
    return cities.map((city) => ({
        city: city.slug,
    }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
    const city = getCityBySlug(params.city);
    if (!city) return {};

    const title = `Autogarage ${city.name} | VAG specialist in de Achterhoek`;
    const description = city.metaDescription;

    return {
        title,
        description,
        keywords: [
            city.name,
            'autogarage',
            'garage',
            'VAG specialist',
            'APK',
            'onderhoud',
            'diagnose',
        ],
        openGraph: {
            title,
            description,
            url: `${siteUrl}/regio/${city.slug}`,
            siteName: "GP Auto's",
            locale: 'nl_NL',
            type: 'website',
            images: [
                {
                    url: '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: `GP Auto's in ${city.name}`,
                },
            ],
        },
        alternates: {
            canonical: `/regio/${city.slug}`,
        },
    };
}

export default function CityPage({ params }: CityPageProps) {
    const city = getCityBySlug(params.city);
    if (!city) notFound();

    const featuredServices = city.featuredServiceSlugs
        .map((slug) => getServiceBySlug(slug))
        .filter((service): service is NonNullable<ReturnType<typeof getServiceBySlug>> => Boolean(service));

    const nearbyCities = city.nearbyCitySlugs
        .map((slug) => getCityBySlug(slug))
        .filter((nearbyCity): nearbyCity is NonNullable<ReturnType<typeof getCityBySlug>> => Boolean(nearbyCity));

    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'AutoRepair',
            name: "GP Auto's",
            description: city.metaDescription,
            image: `${siteUrl}/og-image.png`,
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Galileïstraat 5',
                addressLocality: 'Lichtenvoorde',
                postalCode: '7131PE',
                addressCountry: 'NL',
            },
            areaServed: [
                {
                    '@type': 'City',
                    name: city.name,
                },
                {
                    '@type': 'AdministrativeArea',
                    name: city.region,
                },
            ],
            url: `${siteUrl}/regio/${city.slug}`,
            telephone: '+31615530641',
            priceRange: '$$',
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: city.faqs.map((faq) => ({
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
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                                VAG specialist in de regio {city.region}
                            </p>
                            <h1 className="mb-6 font-bebas text-4xl uppercase tracking-tight md:text-6xl lg:text-7xl">
                                Autogarage {city.name}
                            </h1>
                            <p className="mx-auto mb-4 max-w-3xl text-lg text-white/70 md:text-xl">
                                {city.description}
                            </p>
                            <p className="mx-auto mb-8 max-w-3xl text-base text-white/60 md:text-lg">
                                {city.intro}
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <Link
                                    href="/afspraak"
                                    className="rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-colors hover:bg-primary/90"
                                >
                                    Maak afspraak
                                </Link>
                                <Link
                                    href="tel:+31615530641"
                                    className="rounded-lg border border-white/20 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/5"
                                >
                                    Bel direct: 0615 530 641
                                </Link>
                            </div>
                            <p className="mt-6 text-sm text-white/45">
                                {city.distance} van Lichtenvoorde
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-6xl">
                            <h2 className="mb-10 text-center font-bebas text-3xl uppercase tracking-tight md:text-4xl">
                                Waarom klanten uit {city.name} voor GP Auto&apos;s kiezen
                            </h2>
                            <div className="grid gap-6 md:grid-cols-3">
                                {city.whyChoose.map((point) => (
                                    <article key={point} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                                        <p className="text-sm leading-7 text-white/75">{point}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-y border-white/5 bg-zinc-900/60 py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-6xl">
                            <div className="mb-8 flex items-end justify-between gap-4">
                                <div>
                                    <h2 className="font-bebas text-3xl uppercase tracking-tight md:text-4xl">
                                        Populaire diensten voor {city.name}
                                    </h2>
                                    <p className="mt-2 max-w-2xl text-white/60">
                                        Veel klanten combineren hun rit met een gerichte afspraak voor onderhoud, diagnose of APK.
                                    </p>
                                </div>
                                <Link href="/afspraak" className="hidden text-sm font-semibold text-primary md:block">
                                    Plan direct
                                </Link>
                            </div>
                            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                                {featuredServices.map((service) => (
                                    <Link
                                        key={service.slug}
                                        href={`/diensten/${service.slug}`}
                                        className="group rounded-2xl border border-white/10 bg-zinc-950 p-6 transition-all hover:-translate-y-1 hover:border-primary/30"
                                    >
                                        <span className="mb-4 block text-3xl">{service.icon}</span>
                                        <h3 className="mb-2 text-xl font-semibold">{service.name}</h3>
                                        <p className="text-sm leading-6 text-white/60">{service.shortDescription}</p>
                                        <span className="mt-4 inline-flex text-sm font-semibold text-primary">
                                            Bekijk dienst
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
                                <h2 className="font-bebas text-3xl uppercase tracking-tight md:text-4xl">
                                    Bereikbaarheid en aanpak
                                </h2>
                                <p className="mt-4 text-white/70">{city.routeTip}</p>
                                <div className="mt-6 grid gap-4 md:grid-cols-2">
                                    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
                                        <p className="text-sm uppercase tracking-[0.24em] text-white/40">Werkplaats</p>
                                        <p className="mt-2 text-white/80">Galileïstraat 5, 7131PE Lichtenvoorde</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
                                        <p className="text-sm uppercase tracking-[0.24em] text-white/40">Focus</p>
                                        <p className="mt-2 text-white/80">APK, onderhoud, diagnose en reparatie voor VAG-modellen</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-3xl border border-primary/20 bg-gradient-to-b from-primary/10 to-zinc-900 p-8">
                                <h3 className="font-bebas text-3xl uppercase tracking-tight">
                                    Snelle samenvatting
                                </h3>
                                <ul className="mt-6 space-y-4 text-sm leading-6 text-white/75">
                                    <li>Lokale werkplaats in Lichtenvoorde met regionale dekking.</li>
                                    <li>Gericht op Audi, Volkswagen, SEAT en Skoda.</li>
                                    <li>Praktisch advies over wat direct moet en wat nog even kan wachten.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-y border-white/5 bg-zinc-900/60 py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="font-bebas text-3xl uppercase tracking-tight md:text-4xl">
                                Veelgestelde vragen
                            </h2>
                            <div className="mt-8 space-y-4">
                                {city.faqs.map((faq) => (
                                    <details key={faq.question} className="group rounded-2xl border border-white/10 bg-zinc-950 p-6">
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

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-6xl">
                            <div className="mb-8">
                                <h2 className="font-bebas text-3xl uppercase tracking-tight md:text-4xl">
                                    Ook interessant in de buurt
                                </h2>
                                <p className="mt-2 max-w-2xl text-white/60">
                                    Handig als u tussen meerdere plaatsen in de Achterhoek zoekt naar een garage die technisch sterk is.
                                </p>
                            </div>
                            <div className="grid gap-4 md:grid-cols-3">
                                {nearbyCities.map((nearbyCity) => (
                                    <Link
                                        key={nearbyCity.slug}
                                        href={`/regio/${nearbyCity.slug}`}
                                        className="rounded-2xl border border-white/10 bg-zinc-900 p-5 transition-colors hover:border-primary/30"
                                    >
                                        <p className="text-lg font-semibold">{nearbyCity.name}</p>
                                        <p className="mt-2 text-sm text-white/60">{nearbyCity.description}</p>
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
