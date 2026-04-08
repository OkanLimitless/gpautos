// Central SEO data registry for GP Auto's.
// Used by the dynamic city and service routes.

export interface FaqItem {
    question: string;
    answer: string;
}

export interface City {
    slug: string;
    name: string;
    region: string;
    distance: string;
    description: string;
    metaDescription: string;
    intro: string;
    whyChoose: string[];
    routeTip: string;
    featuredServiceSlugs: string[];
    nearbyCitySlugs: string[];
    faqs: FaqItem[];
}

export interface Service {
    slug: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    metaDescription: string;
    icon: string;
    intro: string;
    idealFor: string[];
    checklist: string[];
    faqs: FaqItem[];
    relatedServiceSlugs: string[];
}

export interface VagBrand {
    slug: string;
    name: string;
    tagline: string;
    description: string;
}

// ============================================
// CITIES - Lichtenvoorde + surrounding towns
// ============================================
export const cities: City[] = [
    {
        slug: 'lichtenvoorde',
        name: 'Lichtenvoorde',
        region: 'Oost Gelre',
        distance: '0 km',
        description: 'Onze thuisbasis in het hart van de Achterhoek. Bezoek onze werkplaats aan de Galileïstraat voor premium VAG onderhoud.',
        metaDescription: "Autogarage in Lichtenvoorde voor onderhoud, diagnose en reparatie. GP Auto's is uw lokale VAG specialist in de Achterhoek.",
        intro: 'Wie in Lichtenvoorde een autogarage zoekt, wil vooral snelheid, duidelijkheid en iemand die VAG-modellen echt kent. Dat is precies waar GP Auto\'s op is ingericht.',
        whyChoose: [
            'U brengt uw auto direct naar een werkplaats in Lichtenvoorde zelf, zonder omrijden naar een dealer buiten de regio.',
            'Wij combineren onderhoud, diagnose en reparatie voor Audi, Volkswagen, SEAT en Skoda in een aanpak die past bij dagelijks gebruik.',
            'U krijgt een helder advies over wat direct moet gebeuren en wat nog even kan wachten.',
        ],
        routeTip: 'Vanaf het centrum van Lichtenvoorde bent u in een paar minuten bij onze werkplaats aan de Galileïstraat. Voor dorpen in Oost Gelre is dit meestal de praktischste keuze.',
        featuredServiceSlugs: ['onderhoud-service', 'diagnose-storing', 'airco-service', 'remmen-wielophanging'],
        nearbyCitySlugs: ['groenlo', 'varsseveld', 'aalten'],
        faqs: [
            {
                question: 'Is GP Auto\'s een logische keuze voor inwoners van Lichtenvoorde?',
                answer: 'Ja. U zit lokaal, kunt snel langs voor onderhoud of diagnose en hoeft niet onnodig ver te rijden voor een specialistische VAG-aanpak.',
            },
            {
                question: 'Kunnen onderhoud en diagnose worden gecombineerd?',
                answer: 'Dat kan vaak prima. Daarmee bespaart u tijd en kunnen eventuele aandachtspunten direct worden besproken.',
            },
            {
                question: 'Werken jullie alleen voor mensen uit Lichtenvoorde?',
                answer: 'Nee. Wij ontvangen ook klanten uit de hele Achterhoek, maar Lichtenvoorde blijft onze basis en daarom de snelste instap voor lokale klanten.',
            },
        ],
    },
    {
        slug: 'groenlo',
        name: 'Groenlo',
        region: 'Oost Gelre',
        distance: '5 km',
        description: 'Slechts enkele minuten rijden van Groenlo. Uw Audi, VW, SEAT of Skoda is bij ons in vertrouwde handen.',
        metaDescription: "Autogarage voor Groenlo en omgeving. GP Auto's helpt met onderhoud en diagnose voor Audi, Volkswagen, SEAT en Skoda.",
        intro: 'Voor bestuurders uit Groenlo is GP Auto\'s dichtbij genoeg voor praktisch onderhoud, maar specialistisch genoeg voor merken waarbij diagnose en softwarekennis echt verschil maken.',
        whyChoose: [
            'Korte rit vanuit Groenlo, dus makkelijk te combineren met werk, boodschappen of een snelle afspraak.',
            'Sterk in storingen en onderhoud voor VAG-auto\'s waar merkkennis belangrijk is.',
            'U houdt grip op kosten doordat we helder uitleggen wat nodig is en waarom.',
        ],
        routeTip: 'Vanaf Groenlo rijdt u snel richting Lichtenvoorde. Voor een onderhoudsbeurt of storingscontrole is dit een efficiënte regionale keuze.',
        featuredServiceSlugs: ['diagnose-storing', 'remmen-wielophanging', 'airco-service'],
        nearbyCitySlugs: ['lichtenvoorde', 'eibergen', 'borculo'],
        faqs: [
            {
                question: 'Is de afstand vanuit Groenlo klein genoeg voor een snelle afspraak?',
                answer: 'Ja. Groenlo ligt dichtbij genoeg om onderhoud of diagnose makkelijk in te plannen zonder veel reistijd.',
            },
            {
                question: 'Doen jullie ook kleinere reparaties voor klanten uit Groenlo?',
                answer: 'Ja. Denk aan remmen, storingsdiagnose, airco en regulier onderhoud.',
            },
            {
                question: 'Kan ik vooraf telefonisch afstemmen wat slim is?',
                answer: 'Dat is juist verstandig. Dan kunnen we inschatten of het om onderhoud, diagnose of een combinatie daarvan gaat.',
            },
        ],
    },
    {
        slug: 'aalten',
        name: 'Aalten',
        region: 'Aalten',
        distance: '10 km',
        description: 'Vanuit Aalten bent u snel bij GP Auto\'s voor professioneel VAG onderhoud en diagnose.',
        metaDescription: "Autogarage voor Aalten: onderhoud en diagnose voor VAG-modellen bij GP Auto's in Lichtenvoorde.",
        intro: 'Komt u uit Aalten, dan zoekt u meestal een garage die snel bereikbaar is en die VAG-problemen niet alleen uitleest maar ook echt doorgrondt.',
        whyChoose: [
            'U bent vanuit Aalten snel in Lichtenvoorde, waardoor een afspraak weinig logistiek gedoe geeft.',
            'Onze aanpak is praktisch: eerst vaststellen wat er speelt, daarna pas repareren.',
            'Wij werken veel aan Audi, Volkswagen, SEAT en Skoda, dus de meeste platformen zijn bekend terrein.',
        ],
        routeTip: 'Vanuit Aalten is de rit kort genoeg voor een geplande onderhoudsbeurt of diagnose-afspraak zonder een halve dag kwijt te zijn.',
        featuredServiceSlugs: ['onderhoud-service', 'diagnose-storing', 'airco-service'],
        nearbyCitySlugs: ['winterswijk', 'varsseveld', 'lichtenvoorde'],
        faqs: [
            {
                question: 'Heeft het zin om vanuit Aalten naar een specialist te rijden?',
                answer: 'Ja, vooral als u een VAG-auto heeft en waarde hecht aan correcte diagnose, onderhoud volgens voorschrift en heldere uitleg.',
            },
            {
                question: 'Kunnen jullie een diagnose combineren met onderhoud?',
                answer: 'Ja. Dat is vaak juist efficiënt, omdat we dan storingen en gepland onderhoud in één afspraak kunnen meenemen.',
            },
            {
                question: 'Is dit ook geschikt voor oudere VAG-modellen?',
                answer: 'Zeker. We werken niet alleen aan recente modellen, maar ook aan oudere voertuigen waar ervaring en logica belangrijk zijn.',
            },
        ],
    },
    {
        slug: 'winterswijk',
        name: 'Winterswijk',
        region: 'Winterswijk',
        distance: '15 km',
        description: 'Ook voor inwoners van Winterswijk zijn wij een VAG specialist in de regio. Premium service, eerlijke prijzen.',
        metaDescription: "Autogarage voor Winterswijk en de Achterhoek. GP Auto's verzorgt onderhoud, diagnose en softwarewerk voor Audi, Volkswagen, SEAT en Skoda.",
        intro: 'Bestuurders uit Winterswijk komen vaak voor precies werk: onderhoud dat klopt, diagnose die verder gaat dan foutcodes en een eerlijke inschatting van de volgende stap.',
        whyChoose: [
            'GP Auto\'s is dichtbij genoeg voor een praktische afspraak, maar gespecialiseerd genoeg om het merkgevoel te behouden.',
            'We leggen technische keuzes uit in normale taal, zodat u weet waar u aan toe bent.',
            'Voor VAG-rijders uit Winterswijk is het prettig dat onderhoud, diagnose en softwarewerk onder één dak zitten.',
        ],
        routeTip: 'Komt u uit Winterswijk, plan dan een afspraak wanneer het u uitkomt. De rit naar Lichtenvoorde is goed te doen voor een gerichte onderhoudsbeurt.',
        featuredServiceSlugs: ['onderhoud-service', 'software-chiptuning', 'diagnose-storing'],
        nearbyCitySlugs: ['aalten', 'eibergen', 'borculo'],
        faqs: [
            {
                question: 'Waarom zou ik vanuit Winterswijk naar Lichtenvoorde rijden?',
                answer: 'Omdat u dan profiteert van een lokale maar gespecialiseerde VAG-aanpak zonder de dealerprijs van een grote stad.',
            },
            {
                question: 'Kunnen jullie software-updates en regulier onderhoud combineren?',
                answer: 'Ja, dat kan vaak goed samen. Dat is handig als u toch al langs komt voor een onderhoudsbeurt.',
            },
            {
                question: 'Krijg ik vooraf een duidelijke inschatting?',
                answer: 'Ja, we streven naar een heldere uitleg over de mogelijke oorzaak, de vervolgstap en de prioriteit.',
            },
        ],
    },
    {
        slug: 'eibergen',
        name: 'Eibergen',
        region: 'Berkelland',
        distance: '12 km',
        description: 'Vanuit Eibergen eenvoudig te bereiken via de N18. Specialist in Audi, Volkswagen, SEAT en Skoda.',
        metaDescription: "Autogarage voor Eibergen met VAG-specialisme. Voor diagnose, onderhoud en remwerk bij GP Auto's in Lichtenvoorde.",
        intro: 'Voor Eibergen geldt vaak: snel bereikbaar, maar wel graag een garage die logisch denkt en niet direct onderdelen gaat vervangen zonder goede diagnose.',
        whyChoose: [
            'U kunt Eibergen eenvoudig combineren met een afspraak in Lichtenvoorde via een korte regionale rit.',
            'Storingen en slijtage worden bij ons systematisch benaderd, niet op gevoel.',
            'Voor VAG-modellen is het prettig dat software, mechanica en onderhoud bij elkaar komen.',
        ],
        routeTip: 'Via de N18 is de verbinding vanuit Eibergen overzichtelijk. Ideaal voor onderhoud, remcontrole of storingsdiagnose.',
        featuredServiceSlugs: ['diagnose-storing', 'remmen-wielophanging', 'airco-service'],
        nearbyCitySlugs: ['groenlo', 'borculo', 'winterswijk'],
        faqs: [
            {
                question: 'Is de route vanuit Eibergen logisch voor een onderhoudsbeurt?',
                answer: 'Ja. Voor een gerichte afspraak is de rit kort en overzichtelijk, zeker als u diagnose of onderhoud wilt combineren.',
            },
            {
                question: 'Doen jullie ook remmen en onderstelwerk?',
                answer: 'Ja. Dat is juist een belangrijk onderdeel van onze dagelijkse werkplaatspraktijk.',
            },
            {
                question: 'Kunnen jullie helpen bij een terugkerende storing?',
                answer: 'Ja, en dat is precies waar merkspecifieke diagnoseapparatuur en ervaring het verschil maken.',
            },
        ],
    },
    {
        slug: 'borculo',
        name: 'Borculo',
        region: 'Berkelland',
        distance: '15 km',
        description: 'Rijdt u vanuit Borculo? Wij staan voor u klaar met vakkundige VAG service en moderne diagnoseapparatuur.',
        metaDescription: "Autogarage voor Borculo met VAG-specialisme. GP Auto's verzorgt onderhoud, diagnose en tuning vanuit Lichtenvoorde.",
        intro: 'Vanuit Borculo kiezen klanten vaak voor een garage die zowel onderhoud als technische storingen aankan. Die combinatie maakt GP Auto\'s relevant voor dagelijkse en complexere vragen.',
        whyChoose: [
            'U heeft vanuit Borculo een haalbare rit naar een specialist die niet alleen uitleest, maar ook doorzoekt.',
            'We zijn sterk in onderhoud en diagnostiek voor VAG-modellen waar kennis van het platform belangrijk is.',
            'U krijgt een advies dat past bij de leeftijd, kilometerstand en gebruiksdoel van de auto.',
        ],
        routeTip: 'Voor Borculo is Lichtenvoorde een praktische regio-oplossing, zeker als u een onderhoudsbeurt of update wilt plannen.',
        featuredServiceSlugs: ['onderhoud-service', 'software-chiptuning', 'diagnose-storing'],
        nearbyCitySlugs: ['eibergen', 'groenlo', 'lichtenvoorde'],
        faqs: [
            {
                question: 'Is dit geschikt voor zakelijke rijders uit Borculo?',
                answer: 'Ja. Vooral wanneer planning, heldere uitleg en snel schakelen belangrijk zijn.',
            },
            {
                question: 'Kunnen jullie een onderhoudsadvies afstemmen op de kilometerstand?',
                answer: 'Ja. Dat doen we juist om te voorkomen dat u onnodige onderdelen laat vervangen.',
            },
            {
                question: 'Bieden jullie ook software-werk of tuning aan?',
                answer: 'Ja, voor geschikte voertuigen kunnen we ook softwarematige werkzaamheden bespreken.',
            },
        ],
    },
    {
        slug: 'doetinchem',
        name: 'Doetinchem',
        region: 'Doetinchem',
        distance: '20 km',
        description: 'De grootste stad in de Achterhoek, op korte rijafstand van onze werkplaats. VAG expertise voor elke situatie.',
        metaDescription: "Autogarage voor Doetinchem en de Achterhoek. GP Auto's biedt VAG onderhoud, diagnose en softwarewerk in Lichtenvoorde.",
        intro: 'Doetinchem heeft veel verkeer, veel kilometers en dus ook veel vraag naar een garage die snel kan schakelen zonder in te leveren op technische kwaliteit.',
        whyChoose: [
            'Voor bestuurders uit Doetinchem is GP Auto\'s een regionale specialist met korte lijnen en duidelijke communicatie.',
            'Bij VAG-auto\'s telt vaak meer dan alleen sleutelwerk; diagnose en softwarekennis zijn essentieel.',
            'U kunt onderhoud, softwarewerk en storingscontrole combineren in één afspraak.',
        ],
        routeTip: 'Een rit vanuit Doetinchem is prima te plannen voor een onderhoudsbeurt of diagnose-afspraak, zeker als u vooraf belt.',
        featuredServiceSlugs: ['diagnose-storing', 'software-chiptuning', 'onderhoud-service'],
        nearbyCitySlugs: ['varsseveld', 'zelhem', 'aalten'],
        faqs: [
            {
                question: 'Is een specialist buiten Doetinchem de moeite waard?',
                answer: 'Ja, vooral als uw auto VAG-techniek heeft en u waarde hecht aan technische diepgang en eerlijke uitleg.',
            },
            {
                question: 'Kunnen jullie digitale storingen goed aanpakken?',
                answer: 'Ja. Moderne diagnose is juist een belangrijk deel van onze dagelijkse werkzaamheden.',
            },
            {
                question: 'Is het slim om onderhoud te combineren met een software-update?',
                answer: 'Wanneer het technisch logisch is, wel. Dan voorkomt u dubbele afspraken en kunt u efficiënter plannen.',
            },
        ],
    },
    {
        slug: 'varsseveld',
        name: 'Varsseveld',
        region: 'Oude IJsselstreek',
        distance: '12 km',
        description: 'Vanuit Varsseveld bent u snel bij GP Auto\'s. Wij zijn uw vertrouwde partner voor VAG onderhoud.',
        metaDescription: "Autogarage voor Varsseveld. GP Auto's helpt met onderhoud, remmen en diagnose voor Audi, Volkswagen, SEAT en Skoda.",
        intro: 'Voor klanten uit Varsseveld draait het vaak om een garage die betrouwbaar is, snel kan schakelen en niet moeilijk doet over heldere uitleg of praktische planning.',
        whyChoose: [
            'De afstand vanuit Varsseveld is goed te doen voor onderhoud of een remcontrole.',
            'Onze werkplaats combineert praktische service met VAG-specifieke kennis.',
            'U krijgt een helder beeld van de prioriteiten, zodat de auto niet onnodig lang stilstaat.',
        ],
        routeTip: 'Varsseveld ligt gunstig genoeg om een afspraak in Lichtenvoorde eenvoudig te combineren met de rest van uw dag.',
        featuredServiceSlugs: ['remmen-wielophanging', 'airco-service', 'onderhoud-service'],
        nearbyCitySlugs: ['doetinchem', 'aalten', 'lichtenvoorde'],
        faqs: [
            {
                question: 'Is GP Auto\'s vanuit Varsseveld goed bereikbaar?',
                answer: 'Ja. De rit is kort genoeg voor een geplande afspraak zonder veel tijd te verliezen.',
            },
            {
                question: 'Kunnen jullie een remcontrole doen als ik twijfel?',
                answer: 'Ja. Remmen en wielophanging zijn een belangrijk deel van onze service.',
            },
            {
                question: 'Kunnen jullie ook airco-onderhoud uitvoeren?',
                answer: 'Ja, inclusief vullen, controleren en het opsporen van mogelijke lekkages.',
            },
        ],
    },
    {
        slug: 'zelhem',
        name: 'Zelhem',
        region: 'Bronckhorst',
        distance: '18 km',
        description: 'Ook vanuit Zelhem bereikbaar voor premium autoservice. Specialist in het volledige VAG-gamma.',
        metaDescription: "Autogarage voor Zelhem en Bronckhorst. GP Auto's verzorgt VAG onderhoud, diagnose en remmen vanuit Lichtenvoorde.",
        intro: 'Vanuit Zelhem komen klanten vaak met de wens om een vaste garage te hebben die technische kennis combineert met duidelijke afspraken en een nuchtere aanpak.',
        whyChoose: [
            'U rijdt vanuit Zelhem naar een specialist die echt op VAG-techniek is ingericht.',
            'Onze aanpak is geschikt voor zowel regulier onderhoud als complexere storingen.',
            'We houden het gesprek praktisch, zodat u snel weet wat de beste vervolgstap is.',
        ],
        routeTip: 'Voor Zelhem is een geplande afspraak in Lichtenvoorde prima haalbaar, zeker wanneer u onderhoud of diagnose wilt combineren.',
        featuredServiceSlugs: ['onderhoud-service', 'diagnose-storing', 'remmen-wielophanging'],
        nearbyCitySlugs: ['doetinchem', 'varsseveld', 'borculo'],
        faqs: [
            {
                question: 'Waarom zou ik vanuit Zelhem naar een specialist rijden?',
                answer: 'Omdat specialistische kennis vaak belangrijker is dan de kortste afstand, vooral bij VAG-auto\'s met storingen of onderhoudsbehoefte.',
            },
            {
                question: 'Kunnen jullie onderhoud en diagnose tegelijk plannen?',
                answer: 'Ja, dat is vaak een slimme combinatie als u de auto toch al langs wilt brengen.',
            },
            {
                question: 'Helpen jullie ook bij onduidelijke meldingen op het dashboard?',
                answer: 'Ja. Dat is precies het soort werk waarbij een diagnosegerichte garage waarde toevoegt.',
            },
        ],
    },
];

// ============================================
// SERVICES - Core offerings
// ============================================
export const services: Service[] = [
    {
        slug: 'onderhoud-service',
        name: 'Onderhoud & Service',
        shortDescription: 'Periodiek onderhoud volgens fabrieksvoorschrift',
        longDescription: 'Behoud uw fabrieksgarantie met onderhoud volgens de voorschriften van Audi, Volkswagen, SEAT en Skoda. Wij gebruiken passende onderdelen en registreren waar nodig de werkzaamheden netjes.',
        metaDescription: "Onderhoud en service in Lichtenvoorde voor Audi, Volkswagen, SEAT en Skoda. GP Auto's werkt volgens fabrieksvoorschrift en geeft helder advies.",
        icon: '🔧',
        intro: 'Goed onderhoud voorkomt veel storingen. Bij VAG-auto\'s gaat het niet alleen om oliewissels, maar ook om software, vervangmomenten en het totaalbeeld van de auto.',
        idealFor: [
            'U rijdt volgens fabrieksschema en wilt dat onderhoud netjes wordt uitgevoerd.',
            'U wilt een garage die uitleg geeft over wat echt nodig is.',
            'U zoekt onderhoud voor een moderne of juist oudere VAG-auto.',
        ],
        checklist: [
            'Vloeistoffen, filters en slijtagedelen.',
            'Controle van bekende VAG-aandachtspunten.',
            'Praktische terugkoppeling over wat nu verstandig is en wat later kan.',
        ],
        faqs: [
            {
                question: 'Behouden onderhoudswerkzaamheden mijn fabrieksgarantie?',
                answer: 'Onderhoud volgens voorschrift helpt juist om die onderhoudslijn netjes vast te houden.',
            },
            {
                question: 'Werken jullie met OEM-kwaliteit onderdelen?',
                answer: 'Ja, waar passend kiezen we voor onderdelen die bij de auto en het onderhoudsniveau passen.',
            },
            {
                question: 'Is onderhoud ook zinvol bij een oudere auto?',
                answer: 'Zeker. Juist dan voorkomt goed onderhoud grotere reparaties later.',
            },
        ],
        relatedServiceSlugs: ['diagnose-storing', 'airco-service', 'remmen-wielophanging'],
    },
    {
        slug: 'diagnose-storing',
        name: 'Diagnose & Storing',
        shortDescription: 'Accurate storingsdiagnose met merkspecifieke apparatuur',
        longDescription: 'Moderne voertuigen vereisen specialistische diagnoseapparatuur. Met VCDS/ODIS en een logische aanpak lezen wij storingen uit, controleren we de oorzaak en vermijden we onnodige onderdelenwissels.',
        metaDescription: "Storingsdiagnose in Lichtenvoorde voor VAG-auto's. GP Auto's gebruikt merkspecifieke diagnoseapparatuur en zoekt de oorzaak achter foutcodes.",
        icon: '🔍',
        intro: 'Een storing uitlezen is makkelijk. De oorzaak vinden is het werk. Daarom combineren we codes, live data en technische ervaring.',
        idealFor: [
            'Er brandt een lampje op het dashboard.',
            'De storing komt en gaat of is lastig reproduceerbaar.',
            'U wilt zekerheid voordat er onderdelen worden vervangen.',
        ],
        checklist: [
            'Uitlezen met VCDS/ODIS waar passend.',
            'Controle van oorzaak, context en mogelijke vervolgschade.',
            'Gericht advies over reparatie of vervolgonderzoek.',
        ],
        faqs: [
            {
                question: 'Is een foutcode altijd de echte oorzaak?',
                answer: 'Nee. Een foutcode is een aanwijzing, geen eindconclusie. Daarom kijken we verder dan alleen uitlezen.',
            },
            {
                question: 'Kunnen jullie helpen bij terugkerende storingen?',
                answer: 'Ja, juist dan is een gestructureerde diagnose het belangrijkst.',
            },
            {
                question: 'Is deze service vooral voor recente auto\'s?',
                answer: 'Nee. Ook oudere VAG-modellen profiteren van goede diagnose en technische ervaring.',
            },
        ],
        relatedServiceSlugs: ['onderhoud-service', 'airco-service', 'remmen-wielophanging'],
    },
    {
        slug: 'airco-service',
        name: 'Airco Service',
        shortDescription: 'Airco vullen, reinigen en onderhoud',
        longDescription: 'Een goed werkende airco is essentieel voor comfort en zicht. Wij vullen het systeem bij met het juiste koelmiddel, controleren op lekkages en kijken of het systeem logisch functioneert.',
        metaDescription: "Airco service in Lichtenvoorde voor vullen, reinigen en controleren. GP Auto's helpt bij koelingsproblemen, geur of lekkage.",
        icon: '❄️',
        intro: 'Wordt de airco minder koud, ruikt het systeem vreemd of blijft de ruit langer beslaan? Dan is inspectie en onderhoud verstandig.',
        idealFor: [
            'De airco koelt minder goed dan voorheen.',
            'U vermoedt een lek of merkt een vreemde geur.',
            'U wilt de airco voor het seizoen laten nakijken.',
        ],
        checklist: [
            'Koelmiddeltype en vulniveau.',
            'Druk, werking en mogelijke lekkages.',
            'Praktisch advies over reiniging of vervolgcontrole.',
        ],
        faqs: [
            {
                question: 'Welk koelmiddel gebruiken jullie?',
                answer: 'Dat hangt af van het systeem in de auto. We werken met het juiste type voor de betreffende installatie.',
            },
            {
                question: 'Moet een airco elk jaar worden gevuld?',
                answer: 'Niet per se. Maar controle is wel verstandig als de werking terugloopt.',
            },
            {
                question: 'Kunnen jullie ook een geurprobleem aanpakken?',
                answer: 'Ja, als onderdeel van de service kunnen we het systeem beoordelen en reinigen waar dat logisch is.',
            },
        ],
        relatedServiceSlugs: ['onderhoud-service', 'diagnose-storing', 'remmen-wielophanging'],
    },
    {
        slug: 'remmen-wielophanging',
        name: 'Remmen & Wielophanging',
        shortDescription: 'Remmen, schokdempers en wielophanging',
        longDescription: 'Uw veiligheid staat voorop. Wij vervangen remschijven, remblokken, schokdempers en wielophangingsonderdelen met hoogwaardige componenten en kijken direct naar de oorzaak van slijtage.',
        metaDescription: "Remmen en wielophanging in Lichtenvoorde. GP Auto's controleert, adviseert en vervangt slijtagedelen voor veilige VAG-auto's.",
        icon: '🛞',
        intro: 'Kloppende remmen en een strak onderstel zijn geen luxe. Trillingen, geluid of afwijkend rijgedrag zijn vaak signalen dat er iets onder de auto speelt.',
        idealFor: [
            'U hoort remgeluid of voelt trillingen bij remmen.',
            'De auto trekt scheef of voelt minder strak aan.',
            'U wilt slijtage van remmen of onderstel tijdig aanpakken.',
        ],
        checklist: [
            'Remschijven, remblokken en bijbehorende componenten.',
            'Schokdempers, veren en speling in het onderstel.',
            'Controle van rijgedrag en veiligheidsrelevante onderdelen.',
        ],
        faqs: [
            {
                question: 'Vervangen jullie alleen wat echt versleten is?',
                answer: 'Ja. We kijken eerst naar de technische noodzaak voordat we onderdelen adviseren.',
            },
            {
                question: 'Kunnen remklachten ook door iets anders komen?',
                answer: 'Zeker. Daarom kijken we breder dan alleen het zichtbare remdeel.',
            },
            {
                question: 'Is wielophanging belangrijk voor comfort en veiligheid?',
                answer: 'Ja. Slijtage daar beïnvloedt direct stuurgevoel, stabiliteit en bandenslijtage.',
            },
        ],
        relatedServiceSlugs: ['diagnose-storing', 'onderhoud-service', 'airco-service'],
    },
    {
        slug: 'software-chiptuning',
        name: 'Software & Chiptuning',
        shortDescription: 'ECU software updates en performance tuning',
        longDescription: 'Van fabrieksupdate tot performance chiptuning. Wij bespreken per auto wat technisch verantwoord is en welke softwareaanpassingen nuttig zijn voor comfort, efficiëntie of extra vermogen.',
        metaDescription: "Software en chiptuning in Lichtenvoorde voor geschikte VAG-auto's. GP Auto's helpt met updates, optimalisatie en veilige afstemming.",
        icon: '⚡',
        intro: 'Software speelt bij moderne auto\'s een grotere rol dan veel mensen denken. Denk aan updates, afstellingen en prestatieverbetering die technisch verantwoord moeten zijn.',
        idealFor: [
            'U wilt een veilige software-update of optimalisatie bespreken.',
            'U zoekt meer vermogen, maar wel met technische afstemming.',
            'U wilt weten wat voor uw specifieke VAG-model mogelijk is.',
        ],
        checklist: [
            'Controle van geschiktheid en uitgangssituatie van de auto.',
            'Bespreking van software-update, optimalisatie of tuning.',
            'Heldere uitleg over wat u kunt verwachten na de ingreep.',
        ],
        faqs: [
            {
                question: 'Is chiptuning voor elke auto geschikt?',
                answer: 'Nee. Eerst kijken we of het voertuig technisch geschikt is en of de wens logisch aansluit op gebruik en onderhoud.',
            },
            {
                question: 'Kunnen jullie ook alleen een software-update uitvoeren?',
                answer: 'Ja. Niet elke aanvraag draait om tuning; soms is een update of correctie precies wat nodig is.',
            },
            {
                question: 'Moet de auto eerst technisch in orde zijn?',
                answer: 'Ja. Softwarewerk heeft pas waarde als de basis van de auto goed is.',
            },
        ],
        relatedServiceSlugs: ['diagnose-storing', 'onderhoud-service', 'airco-service'],
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
