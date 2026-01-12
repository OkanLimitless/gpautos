// Central SEO Data Registry for GP Auto's
// Used by dynamic routes for city pages, service pages, and VAG specialist pages

export interface City {
    slug: string;
    name: string;
    region: string;
    distance: string; // from Lichtenvoorde
    description: string;
}

export interface Service {
    slug: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    icon: string; // emoji or icon name
}

export interface VagBrand {
    slug: string;
    name: string;
    tagline: string;
    description: string;
}

// ============================================
// CITIES - Lichtenvoorde + 8 surrounding towns
// ============================================
export const cities: City[] = [
    {
        slug: 'lichtenvoorde',
        name: 'Lichtenvoorde',
        region: 'Oost Gelre',
        distance: '0 km',
        description: 'Onze thuisbasis in het hart van de Achterhoek. Bezoek onze werkplaats aan de Galileïstraat voor premium VAG onderhoud.',
    },
    {
        slug: 'groenlo',
        name: 'Groenlo',
        region: 'Oost Gelre',
        distance: '5 km',
        description: 'Slechts 5 minuten rijden van Groenlo. Uw Audi, VW, SEAT of Skoda is bij ons in vertrouwde handen.',
    },
    {
        slug: 'aalten',
        name: 'Aalten',
        region: 'Aalten',
        distance: '10 km',
        description: 'Vanuit Aalten bent u binnen 10 minuten bij GP Auto\'s voor professioneel VAG onderhoud en diagnose.',
    },
    {
        slug: 'winterswijk',
        name: 'Winterswijk',
        region: 'Winterswijk',
        distance: '15 km',
        description: 'Ook voor inwoners van Winterswijk zijn wij dé VAG specialist in de regio. Premium service, eerlijke prijzen.',
    },
    {
        slug: 'eibergen',
        name: 'Eibergen',
        region: 'Berkelland',
        distance: '12 km',
        description: 'Vanuit Eibergen eenvoudig te bereiken via de N18. Specialist in Audi, Volkswagen, SEAT en Skoda.',
    },
    {
        slug: 'borculo',
        name: 'Borculo',
        region: 'Berkelland',
        distance: '15 km',
        description: 'Rijdt u vanuit Borculo? Wij staan voor u klaar met vakkundige VAG service en moderne diagnoseapparatuur.',
    },
    {
        slug: 'doetinchem',
        name: 'Doetinchem',
        region: 'Doetinchem',
        distance: '20 km',
        description: 'De grootste stad in de Achterhoek, op slechts 20 minuten van onze werkplaats. VAG expertise voor elke situatie.',
    },
    {
        slug: 'varsseveld',
        name: 'Varsseveld',
        region: 'Oude IJsselstreek',
        distance: '12 km',
        description: 'Vanuit Varsseveld bent u snel bij GP Auto\'s. Wij zijn uw vertrouwde partner voor VAG onderhoud.',
    },
    {
        slug: 'zelhem',
        name: 'Zelhem',
        region: 'Bronckhorst',
        distance: '18 km',
        description: 'Ook vanuit Zelhem bereikbaar voor premium autoservice. Specialist in het volledige VAG-gamma.',
    },
];

// ============================================
// SERVICES - Core offerings
// ============================================
export const services: Service[] = [
    {
        slug: 'apk-keuring',
        name: 'APK Keuring',
        shortDescription: 'Officiële APK keuring met snelle doorlooptijd',
        longDescription: 'Laat uw auto keuren bij een erkende RDW keuringsinstantie. Wij voeren de APK uit volgens de strengste normen en adviseren u eerlijk over eventuele reparaties. Vaak kunt u dezelfde dag nog terecht.',
        icon: '✓',
    },
    {
        slug: 'onderhoud-service',
        name: 'Onderhoud & Service',
        shortDescription: 'Periodiek onderhoud volgens fabrieksvoorschrift',
        longDescription: 'Behoud uw fabrieksgarantie met onderhoud volgens de voorschriften van Audi, Volkswagen, SEAT en Skoda. Wij gebruiken originele of OEM-kwaliteit onderdelen en registreren alles in uw digitale onderhoudsboekje.',
        icon: '🔧',
    },
    {
        slug: 'diagnose-storing',
        name: 'Diagnose & Storing',
        shortDescription: 'Accurate storingsdiagnose met merkspecifieke apparatuur',
        longDescription: 'Moderne voertuigen vereisen specialistische diagnoseapparatuur. Met onze VCDS/ODIS software lezen wij storingen uit en stellen wij een accurate diagnose. Geen giswerk, maar zekerheid.',
        icon: '🔍',
    },
    {
        slug: 'airco-service',
        name: 'Airco Service',
        shortDescription: 'Airco vullen, reinigen en onderhoud',
        longDescription: 'Een goed werkende airco is essentieel voor uw rijcomfort. Wij vullen uw airco bij met het juiste koelmiddel (R134a of R1234yf), reinigen het systeem en controleren op lekkages.',
        icon: '❄️',
    },
    {
        slug: 'remmen-wielophanging',
        name: 'Remmen & Wielophanging',
        shortDescription: 'Remmen, schokdempers en wielophanging',
        longDescription: 'Uw veiligheid staat voorop. Wij vervangen remschijven, remblokken, schokdempers en wielophangingsonderdelen met hoogwaardige componenten. Gratis controle bij twijfel.',
        icon: '🛞',
    },
    {
        slug: 'software-chiptuning',
        name: 'Software & Chiptuning',
        shortDescription: 'ECU software updates en performance tuning',
        longDescription: 'Van fabrieksupdate tot performance chiptuning. Wij flashen uw ECU met de nieuwste software of optimaliseren het vermogen met een veilige, op maat gemaakte tune. Stage 1 en Stage 2 mogelijk.',
        icon: '⚡',
    },
];

// ============================================
// VAG BRANDS - Specialist pages
// ============================================
export const vagBrands: VagBrand[] = [
    {
        slug: 'audi',
        name: 'Audi',
        tagline: 'Vorsprung durch Technik',
        description: 'Als Audi specialist kennen wij elk model van binnen en van buiten. Van de A1 tot de Q7, van de klassieke 80 tot de moderne e-tron. Wij onderhouden uw Audi met dezelfde precisie als de dealer, maar tegen eerlijkere prijzen.',
    },
    {
        slug: 'volkswagen',
        name: 'Volkswagen',
        tagline: 'Das Auto',
        description: 'Volkswagen is het hart van het VAG-concern en vormt de basis van onze expertise. Golf, Polo, Passat, Tiguan of T-Roc - wij kennen ze allemaal. Vakkundige service voor elke VW.',
    },
    {
        slug: 'seat',
        name: 'SEAT',
        tagline: 'Enjoy Engineering',
        description: 'Het Spaanse temperament met Duitse techniek. SEAT deelt zijn platform met Volkswagen en Audi, dus is technisch bekend terrein voor ons. Leon, Ibiza, Ateca - wij zorgen ervoor.',
    },
    {
        slug: 'skoda',
        name: 'Škoda',
        tagline: 'Simply Clever',
        description: 'Škoda biedt uitstekende waar voor uw geld en deelt de betrouwbare VAG-techniek. Octavia, Superb, Kodiaq of Fabia - dezelfde kwaliteit service als bij de dealer, zonder de dealerprijs.',
    },
];

// Helper functions
export function getCityBySlug(slug: string): City | undefined {
    return cities.find((city) => city.slug === slug);
}

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((service) => service.slug === slug);
}

export function getVagBrandBySlug(slug: string): VagBrand | undefined {
    return vagBrands.find((brand) => brand.slug === slug);
}
