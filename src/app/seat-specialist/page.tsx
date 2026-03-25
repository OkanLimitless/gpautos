import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/seo-data';

export const metadata: Metadata = {
    title: "SEAT specialist in Lichtenvoorde | GP Auto's",
    description: "SEAT onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek. Voor Ibiza, Leon, Arona, Ateca, Tarraco en Cupra-modellen.",
    openGraph: {
        title: "SEAT specialist in Lichtenvoorde | GP Auto's",
        description: "SEAT onderhoud, diagnose en reparatie in Lichtenvoorde. Voor Ibiza, Leon, Arona, Ateca, Tarraco en Cupra-modellen.",
        url: 'https://gpautos.nl/seat-specialist',
        siteName: "GP Auto's",
        locale: 'nl_NL',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: "GP Auto's SEAT specialist in Lichtenvoorde",
            },
        ],
    },
    alternates: {
        canonical: '/seat-specialist',
    },
};

export default function SeatSpecialistPage() {
    const relevantServices = services.filter((service) =>
        ['onderhoud-service', 'diagnose-storing', 'remmen-wielophanging', 'software-chiptuning'].includes(service.slug)
    );

    const seatModels = ['Ibiza', 'Leon', 'Arona', 'Ateca', 'Tarraco', 'Mii', 'Alhambra', 'Cupra Formentor', 'Cupra Born'];

    const faqItems = [
        {
            question: 'Werken jullie aan SEAT en Cupra modellen met dezelfde VAG-techniek?',
            answer: 'Ja. SEAT en Cupra delen veel techniek met Volkswagen en Audi, waardoor wij gericht kunnen helpen met onderhoud en diagnose.',
        },
        {
            question: 'Kunnen jullie helpen bij storingen, remmen en sportieve rijproblemen?',
            answer: 'Ja. Veel SEAT-rijders komen voor storingsdiagnose, remmen, ophanging en onderhoud dat past bij een sportieve rijstijl.',
        },
        {
            question: 'Is de werkplaats geschikt voor klanten uit de Achterhoek?',
            answer: 'Ja. Vanuit Lichtenvoorde zijn wij goed bereikbaar voor SEAT-rijders uit Groenlo, Aalten, Winterswijk en omliggende plaatsen.',
        },
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        name: "GP Auto's - SEAT specialist",
        description: 'SEAT onderhoud, diagnose en reparatie in Lichtenvoorde en de Achterhoek.',
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
            name: 'SEAT',
        },
        url: 'https://gpautos.nl/seat-specialist',
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
                                SEAT specialist in Lichtenvoorde en de Achterhoek
                            </p>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-bebas uppercase tracking-tight">
                                SEAT Specialist
                            </h1>
                            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                                Voor SEAT onderhoud, diagnose en reparatie aan de Galileïstraat 5 in Lichtenvoorde. Ook voor Cupra-rijders en sportieve VAG-modellen.
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
                                Snel schakelen, duidelijke uitleg en onderhoud dat past bij een dynamische SEAT.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Waarom SEAT-rijders voor GP Auto's kiezen
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        'Kennis van de gedeelde techniek van SEAT, Cupra, Volkswagen en Audi.',
                                        'Gerichte hulp bij storingen, slijtage, software en onderhoudsintervallen.',
                                        'Praktische uitleg voor rijders die een sportieve maar betaalbare auto willen behouden.',
                                        'Lokale garage in Lichtenvoorde, handig voor de hele Achterhoek.',
                                    ].map((item) => (
                                        <div key={item} className="rounded-xl border border-white/10 bg-zinc-900 p-5 text-white/75">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
                                <h2 className="text-2xl font-bold mb-4">Diensten voor uw SEAT</h2>
                                <p className="text-white/65 mb-6">
                                    Onderhoud, diagnose, remwerk en softwarehulp op een manier die past bij SEAT.
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
                            SEAT modellen die wij vaak zien
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {seatModels.map((model) => (
                                <span key={model} className="px-4 py-2 bg-zinc-800 rounded-lg text-white/80">
                                    {model}
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
                                    <li>Onderhoud voor Ibiza, Leon, Arona, Ateca, Tarraco en Cupra-modellen.</li>
                                    <li>Storingsdiagnose voor motor, infotainment, remmen en rijhulpsystemen.</li>
                                    <li>Remmen, wielophanging en afstelling voor comfortabel en sportief rijden.</li>
                                    <li>Softwarewerk en inspectie zonder onnodige dealerdruk.</li>
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
                            Plan uw SEAT-bezoek in Lichtenvoorde
                        </h2>
                        <p className="text-white/70 max-w-2xl mx-auto mb-8">
                            Maak direct een afspraak voor onderhoud of diagnose, of bekijk eerst de bijbehorende servicepagina's.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/afspraak" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                                Afspraak maken
                            </Link>
                            <Link href="/diensten/diagnose-storing" className="inline-block px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors">
                                Diagnose bekijken
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
