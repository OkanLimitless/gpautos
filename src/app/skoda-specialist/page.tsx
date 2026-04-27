import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/seo-data';

export const metadata: Metadata = {
    title: "Škoda specialist in Lichtenvoorde | GP Auto's",
    description: "Škoda onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek. Voor Fabia, Octavia, Superb, Kodiaq, Enyaq en meer.",
    openGraph: {
        title: "Škoda specialist in Lichtenvoorde | GP Auto's",
        description: "Škoda onderhoud, diagnose en reparatie in Lichtenvoorde. Voor Fabia, Octavia, Superb, Kodiaq, Enyaq en meer.",
        url: 'https://gpautos.nl/skoda-specialist',
        siteName: "GP Auto's",
        locale: 'nl_NL',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: "GP Auto's Škoda specialist in Lichtenvoorde",
            },
        ],
    },
    alternates: {
        canonical: '/skoda-specialist',
    },
};

export default function SkodaSpecialistPage() {
    const relevantServices = services.filter((service) =>
        ['onderhoud-service', 'diagnose-storing', 'remmen-wielophanging', 'software-chiptuning'].includes(service.slug)
    );

    const skodaModels = ['Fabia', 'Scala', 'Octavia', 'Superb', 'Kamiq', 'Karoq', 'Kodiaq', 'Enyaq iV', 'Citigo'];

    const faqItems = [
        {
            question: 'Kunnen jullie Škoda onderhoud doen volgens fabrieksvoorschrift?',
            answer: 'Ja. Wij voeren onderhoud uit met aandacht voor de techniek van Škoda en houden rekening met service-intervallen en digitale historie.',
        },
        {
            question: "Helpen jullie ook bij familieauto's en leasewagens?",
            answer: 'Ja. Veel Škoda-rijders komen met Octavia, Superb, Kodiaq of Fabia voor onderhoud, diagnose en reparatie.',
        },
        {
            question: 'Zijn jullie bereikbaar voor klanten uit de Achterhoek?',
            answer: 'Ja. Onze werkplaats in Lichtenvoorde is goed bereikbaar voor klanten uit Groenlo, Aalten, Winterswijk en de rest van de regio.',
        },
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        name: "GP Auto's - Škoda specialist",
        description: 'Škoda onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek.',
        image: 'https://gpautos.nl/og-image.png',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Galileïstraat 5',
            addressLocality: 'Lichtenvoorde',
            postalCode: '7131PE',
            addressCountry: 'NL',
        },
        brand: {
            '@type': 'Brand',
            name: 'Škoda',
        },
        url: 'https://gpautos.nl/skoda-specialist',
        telephone: '+31615530641',
        areaServed: ['Lichtenvoorde', 'Groenlo', 'Aalten', 'Winterswijk', 'Achterhoek'],
        potentialAction: {
            '@type': 'Action',
            name: 'Maak een afspraak',
            target: 'https://gpautos.nl/afspraak',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-zinc-950 text-white">
                <section className="relative py-24 md:py-32 bg-gradient-to-b from-zinc-900 to-zinc-950">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-primary font-medium mb-4 uppercase tracking-wider">
                                Škoda specialist in Lichtenvoorde en de Achterhoek
                            </p>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-bebas uppercase tracking-tight">
                                Škoda Specialist
                            </h1>
                            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                                Voor Škoda onderhoud, diagnose en reparatie aan de Galileïstraat 5 in Lichtenvoorde. Van Fabia en Octavia tot Superb, Kodiaq en Enyaq.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/afspraak" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                                    Maak afspraak
                                </Link>
                                <Link href="tel:+31615530641" className="inline-block px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors">
                                    Bel direct
                                </Link>
                            </div>
                            <p className="mt-6 text-sm text-white/55">
                                Praktisch, transparant en geschikt voor gezinnen, zakelijke rijders en leaserijders.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Waarom Škoda-rijders voor GP Auto's kiezen
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        'Kennis van de VAG-techniek achter Škoda, zonder dealerprijs.',
                                        'Gericht onderhoud voor gezinnen en zakelijke rijders met veel kilometers.',
                                        'Duidelijke diagnose bij elektronische meldingen, slijtage en periodiek onderhoud.',
                                        'Een vaste werkplaats in Lichtenvoorde voor de hele Achterhoek.',
                                    ].map((item) => (
                                        <div key={item} className="rounded-xl border border-white/10 bg-zinc-900 p-5 text-white/75">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                                <h2 className="text-2xl font-bold mb-4">Diensten voor uw Škoda</h2>
                                <p className="text-white/65 mb-6">
                                    Voor onderhoud, diagnose, remwerk en softwarewerk.
                                </p>
                                <div className="space-y-3">
                                    {relevantServices.map((service) => (
                                        <Link key={service.slug} href={`/diensten/${service.slug}`} className="block rounded-lg border border-white/10 bg-zinc-800 px-4 py-3 hover:border-primary/40 hover:bg-zinc-700 transition-colors">
                                            <div className="font-semibold">{service.name}</div>
                                            <div className="text-sm text-white/60">{service.shortDescription}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-zinc-900">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                            Škoda modellen die wij vaak zien
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {skodaModels.map((model) => (
                                <span key={model} className="px-4 py-2 bg-zinc-800 rounded-lg text-white/80">
                                    Škoda {model}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                                <h2 className="text-2xl font-bold mb-4">Waar wij u mee helpen</h2>
                                <ul className="space-y-3 text-white/75">
                                    <li>Onderhoud voor Fabia, Octavia, Superb, Kodiaq, Karoq en Enyaq.</li>
                                    <li>Controle en herstel van remmen, verlichting en onderstel.</li>
                                    <li>Diagnose van storingen, remklachten en elektronische meldingen.</li>
                                    <li>Praktische service voor zowel privéauto's als zakelijke voertuigen.</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                                <h2 className="text-2xl font-bold mb-4">Veelgestelde vragen</h2>
                                <div className="space-y-3">
                                    {faqItems.map((item) => (
                                        <details key={item.question} className="rounded-lg border border-white/10 bg-zinc-800 px-4 py-3">
                                            <summary className="cursor-pointer font-semibold">{item.question}</summary>
                                            <p className="mt-3 text-white/70">{item.answer}</p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-zinc-900">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Plan uw Škoda-bezoek in Lichtenvoorde
                        </h2>
                        <p className="text-white/70 max-w-2xl mx-auto mb-8">
                            Boek direct een afspraak voor onderhoud of diagnose, of bekijk eerst de meest relevante dienstpagina's.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/afspraak" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                                Afspraak maken
                            </Link>
                            <Link href="/diensten/onderhoud-service" className="inline-block px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors">
                                Onderhoud bekijken
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
