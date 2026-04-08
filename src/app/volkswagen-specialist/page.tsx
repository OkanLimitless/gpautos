import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/seo-data';

export const metadata: Metadata = {
    title: "Volkswagen specialist in Lichtenvoorde | GP Auto's",
    description: "Volkswagen onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek. Voor Golf, Polo, Passat, Tiguan, T-Roc, ID.3 en meer.",
    openGraph: {
        title: "Volkswagen specialist in Lichtenvoorde | GP Auto's",
        description: "Volkswagen onderhoud, diagnose en reparatie in Lichtenvoorde. Voor Golf, Polo, Passat, Tiguan, T-Roc, ID.3 en meer.",
        url: 'https://gpautos.nl/volkswagen-specialist',
        siteName: "GP Auto's",
        locale: 'nl_NL',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: "GP Auto's Volkswagen specialist in Lichtenvoorde",
            },
        ],
    },
    alternates: {
        canonical: '/volkswagen-specialist',
    },
};

export default function VolkswagenSpecialistPage() {
    const relevantServices = services.filter((service) =>
        ['onderhoud-service', 'diagnose-storing', 'remmen-wielophanging', 'airco-service'].includes(service.slug)
    );

    const vwModels = ['Polo', 'Golf', 'T-Cross', 'T-Roc', 'Tiguan', 'Passat', 'Arteon', 'Touran', 'Touareg', 'ID.3', 'ID.4', 'ID.5', 'Caddy', 'Transporter'];

    const faqItems = [
        {
            question: 'Werken jullie aan zowel benzine, diesel als elektrische Volkswagen-modellen?',
            answer: 'Ja. Wij helpen met onderhoud en diagnose voor TSI, TDI, mild-hybrid en elektrische ID-modellen, inclusief de elektronische systemen daaromheen.',
        },
        {
            question: 'Kunnen jullie DSG-, AdBlue- en storingsproblemen onderzoeken?',
            answer: 'Ja. Wij combineren diagnose met praktische reparatie-adviezen, zodat u weet wat er nodig is en wat nog even kan wachten.',
        },
        {
            question: 'Is de werkplaats goed bereikbaar voor klanten uit de Achterhoek?',
            answer: 'Ja. Onze werkplaats in Lichtenvoorde is een logische keuze voor Volkswagen-rijders uit Groenlo, Aalten, Winterswijk en omliggende plaatsen.',
        },
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        name: "GP Auto's - Volkswagen specialist",
        description: 'Volkswagen onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek.',
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
            name: 'Volkswagen',
        },
        url: 'https://gpautos.nl/volkswagen-specialist',
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
                                Volkswagen specialist in Lichtenvoorde en de Achterhoek
                            </p>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-bebas uppercase tracking-tight">
                                Volkswagen Specialist
                            </h1>
                            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                                Voor Volkswagen onderhoud, diagnose en reparatie aan de Galileïstraat 5 in Lichtenvoorde. Van Golf en Polo tot Tiguan en ID.4.
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
                                Handig voor Volkswagen-rijders die een vakman zoeken met duidelijke uitleg en geen onnodige vervanging.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Waarom Volkswagen-rijders voor GP Auto's kiezen
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        'Ervaring met TSI, TDI, DSG, AdBlue en elektrische ID-modellen.',
                                        'Merkgerichte diagnose bij foutmeldingen, slijtage en softwareproblemen.',
                                        'Onderhoud volgens voorschrift met duidelijke uitleg over wat direct nodig is.',
                                        'Lokale garage in Lichtenvoorde voor heel de Achterhoek.',
                                    ].map((item) => (
                                        <div key={item} className="rounded-xl border border-white/10 bg-zinc-900 p-5 text-white/75">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                                <h2 className="text-2xl font-bold mb-4">Diensten voor uw Volkswagen</h2>
                                <p className="text-white/65 mb-6">
                                    Van onderhoud en diagnose tot remwerk en aircoservice.
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
                            Volkswagen modellen die wij vaak zien
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {vwModels.map((model) => (
                                <span key={model} className="px-4 py-2 bg-zinc-800 rounded-lg text-white/80">
                                    VW {model}
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
                                    <li>Storingen aan motor, transmissie, elektronica en veiligheidssystemen.</li>
                                    <li>Onderhoud voor Golf, Polo, Passat, Tiguan, Transporter en ID-modellen.</li>
                                    <li>Reparatie van remmen, ophanging en verlichting met duidelijke prioriteiten.</li>
                                    <li>Praktische uitleg over de staat van uw auto en vervolgstappen.</li>
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
                            Plan uw Volkswagen-bezoek in Lichtenvoorde
                        </h2>
                        <p className="text-white/70 max-w-2xl mx-auto mb-8">
                            Boek direct een afspraak voor onderhoud, diagnose of remwerk. U kunt ook eerst een specifieke dienst bekijken.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/afspraak" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                                Afspraak maken
                            </Link>
                            <Link href="/diensten/remmen-wielophanging" className="inline-block px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors">
                                Remwerk bekijken
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
