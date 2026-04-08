import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/seo-data';

export const metadata: Metadata = {
    title: "Audi specialist in Lichtenvoorde | GP Auto's",
    description: "Audi onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek. Van A1 en A3 tot Q5, e-tron en S tronic, op afspraak en met duidelijke uitleg.",
    openGraph: {
        title: "Audi specialist in Lichtenvoorde | GP Auto's",
        description: "Onderhoud, diagnose en reparatie voor Audi in Lichtenvoorde. Van A1 en A3 tot Q5, e-tron en S tronic.",
        url: 'https://gpautos.nl/audi-specialist',
        siteName: "GP Auto's",
        locale: 'nl_NL',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: "GP Auto's Audi specialist in Lichtenvoorde",
            },
        ],
    },
    alternates: {
        canonical: '/audi-specialist',
    },
};

export default function AudiSpecialistPage() {
    const relevantServices = services.filter((service) =>
        ['onderhoud-service', 'diagnose-storing', 'software-chiptuning', 'airco-service'].includes(service.slug)
    );

    const audiModels = ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'TT', 'e-tron'];

    const faqItems = [
        {
            question: 'Werkt GP Auto\'s ook aan moderne Audi modellen en hybride of elektrische varianten?',
            answer: 'Ja. Wij helpen met regulier onderhoud, diagnose en service voor recente Audi-modellen, inclusief e-tron varianten en modellen met complexe elektronica.',
        },
        {
            question: 'Kan ik terecht voor S tronic, storingen en software-updates?',
            answer: 'Ja. Wij combineren merkgerichte diagnose met onderhoud en softwarewerk, zodat u niet onnodig onderdelen laat vervangen.',
        },
        {
            question: 'Helpen jullie klanten uit de hele Achterhoek?',
            answer: 'Ja. Veel Audi-rijders komen uit Lichtenvoorde, Groenlo, Aalten, Winterswijk en de omliggende dorpen naar onze werkplaats.',
        },
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        name: "GP Auto's - Audi specialist",
        description: 'Audi onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek.',
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
            name: 'Audi',
        },
        url: 'https://gpautos.nl/audi-specialist',
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
                                Audi specialist in Lichtenvoorde en de Achterhoek
                            </p>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-bebas uppercase tracking-tight">
                                Audi Specialist
                            </h1>
                            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                                Voor Audi onderhoud, diagnose en reparatie aan de Galileïstraat 5 in Lichtenvoorde. Wij helpen u met moderne Audi-techniek, van A1 tot e-tron.
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
                                Persoonlijke service, duidelijke diagnose en onderhoud dat past bij de techniek van uw Audi.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Waarom Audi-rijders voor GP Auto's kiezen
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        'Merkspecifieke diagnose voor moderne Audi elektronica en assistentiesystemen.',
                                        'Onderhoud en reparatie met aandacht voor digitale servicehistorie en fabrieksvoorschriften.',
                                        'Duidelijke uitleg over kosten, planning en wat echt nodig is.',
                                        'Lokale werkplaats in Lichtenvoorde, handig voor klanten uit de hele Achterhoek.',
                                    ].map((item) => (
                                        <div key={item} className="rounded-xl border border-white/10 bg-zinc-900 p-5 text-white/75">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                                <h2 className="text-2xl font-bold mb-4">Diensten voor uw Audi</h2>
                                <p className="text-white/65 mb-6">
                                    Van onderhoud en diagnose tot softwarewerk en aircoservice.
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
                            Audi modellen die wij vaak zien
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {audiModels.map((model) => (
                                <span key={model} className="px-4 py-2 bg-zinc-800 rounded-lg text-white/80">
                                    Audi {model}
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
                                    <li>Diagnose van motorstoringen, elektronische meldingen en rijhulpsystemen.</li>
                                    <li>Onderhoud voor TFSI, TDI, S tronic, quattro en e-tron modellen.</li>
                                    <li>Software-updates, chiptuning en gerichte technische ondersteuning.</li>
                                    <li>Remmen, onderstel en herstelwerk met transparante prioriteiten.</li>
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
                            Plan uw Audi-bezoek in Lichtenvoorde
                        </h2>
                        <p className="text-white/70 max-w-2xl mx-auto mb-8">
                            Wilt u onderhoud, diagnose of reparatie laten plannen voor uw Audi? Boek direct online of bekijk eerst de relevante dienstpagina's.
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
