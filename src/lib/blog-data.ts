export type BlogBlock =
  | {
      type: 'lead'
      text: string
    }
  | {
      type: 'paragraph'
      text: string
    }
  | {
      type: 'bullets'
      title?: string
      items: string[]
    }
  | {
      type: 'steps'
      title?: string
      items: {
        title: string
        text: string
      }[]
    }
  | {
      type: 'callout'
      title: string
      text: string
    }

export interface BlogFaq {
  question: string
  answer: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  metaDescription: string
  publishedAt: string
  updatedAt: string
  readingTime: string
  focusKeyword: string
  focusArea: string
  relatedServices: string[]
  blocks: BlogBlock[]
  faqs: BlogFaq[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'apk-keuring-lichtenvoorde',
    title: 'APK keuring in Lichtenvoorde: zo voorkomt u verrassingen',
    excerpt:
      'Praktische uitleg over wat tijdens de APK wordt gecontroleerd, wanneer u slim plant en hoe u uw auto voorbereidt voor een vlotte keuring.',
    metaDescription:
      'Zo werkt een APK keuring in Lichtenvoorde. Lees wat wordt gecontroleerd, hoe u uw auto voorbereidt en wanneer u direct een afspraak plant.',
    publishedAt: '2026-03-10',
    updatedAt: '2026-03-10',
    readingTime: '5 min',
    focusKeyword: 'APK keuring Lichtenvoorde',
    focusArea: 'Lichtenvoorde en de Achterhoek',
    relatedServices: ['apk-keuring', 'onderhoud-service', 'remmen-wielophanging'],
    blocks: [
      {
        type: 'lead',
        text:
          'Zoekt u een garage in Lichtenvoorde voor de APK? Dan wilt u vooral weten wat er gecontroleerd wordt, hoe u afkeur voorkomt en wanneer het verstandig is om meteen onderhoud mee te nemen.',
      },
      {
        type: 'paragraph',
        text:
          'De APK is geen grote beurt, maar wel een belangrijk veiligheidsmoment. Tijdens de keuring kijken wij onder meer naar verlichting, banden, remmen, wielophanging, uitstoot en zicht. Kleine gebreken kunnen snel leiden tot herstelkosten als u ze laat doorsudderen.',
      },
      {
        type: 'bullets',
        title: 'Wat u vooraf zelf kunt controleren',
        items: [
          'Werken alle lampen, inclusief kentekenverlichting en remlichten?',
          'Is de bandenspanning goed en is het profiel nog voldoende?',
          'Zitten er geen ruitenwissers, ruitensproeiervloeistof of zichtproblemen in de weg?',
          'Rijd niet te lang door: laat een waarschuwingslampje of remgeluid vooraf nakijken.',
        ],
      },
      {
        type: 'steps',
        title: 'Slim plannen',
        items: [
          {
            title: 'Plan de APK niet op het laatste moment',
            text:
              'Dan heeft u nog tijd om eventuele reparaties te laten uitvoeren zonder stress of extra stilstand.',
          },
          {
            title: 'Combineer APK met onderhoud',
            text:
              'Als uw auto toch op de brug staat, kunnen wij direct kijken naar punten die voor afkeur of slijtage zorgen.',
          },
          {
            title: 'Gebruik een lokale garage',
            text:
              'Rijdt u uit Lichtenvoorde, Groenlo, Aalten of Winterswijk? Dan is een werkplaats in de buurt gewoon praktischer.',
          },
        ],
      },
      {
        type: 'callout',
        title: 'Direct afspraak nodig?',
        text:
          'Bekijk de APK-pagina of plan direct uw bezoek. Dan weet u snel waar u aan toe bent en hoeft u niet te gokken op de uitkomst van de keuring.',
      },
    ],
    faqs: [
      {
        question: 'Hoe lang duurt een APK keuring?',
        answer:
          'Dat hangt af van de auto en de staat van het voertuig, maar in veel gevallen is de keuring dezelfde dag nog afgerond.',
      },
      {
        question: 'Kan ik APK en onderhoud combineren?',
        answer:
          'Ja. Dat is vaak efficiënter, omdat kleine gebreken meteen meegenomen kunnen worden en u maar één bezoek hoeft te plannen.',
      },
      {
        question: 'Kijkt u ook naar adviespunten?',
        answer:
          'Ja. Juist adviespunten zijn handig om op tijd aan te pakken voordat ze een groter probleem worden.',
      },
    ],
  },
  {
    slug: 'auto-onderhoud-achterhoek',
    title: 'Auto onderhoud in de Achterhoek: wanneer plant u een beurt?',
    excerpt:
      'Leer de signalen herkennen die aangeven dat onderhoud slim is, wat u tijdens een beurt mag verwachten en waarom lokaal onderhoud tijd scheelt.',
    metaDescription:
      'Wanneer is auto onderhoud nodig in de Achterhoek? Lees de signalen, service-intervallen en hoe GP Auto’s u helpt met onderhoud in Lichtenvoorde.',
    publishedAt: '2026-03-14',
    updatedAt: '2026-03-14',
    readingTime: '6 min',
    focusKeyword: 'auto onderhoud Achterhoek',
    focusArea: 'Achterhoek, Lichtenvoorde en omgeving',
    relatedServices: ['onderhoud-service', 'diagnose-storing', 'airco-service'],
    blocks: [
      {
        type: 'lead',
        text:
          'Veel zoekopdrachten beginnen niet met “ik wil onderhoud”, maar met “wat klinkt hier niet goed?” of “kan ik hier nog mee doorrijden?”. Daarom is goed onderhoud vooral een kwestie van op tijd signalen herkennen.',
      },
      {
        type: 'paragraph',
        text:
          'Bij regulier auto onderhoud kijken wij naar vloeistoffen, filters, remmen, banden, accu, ophanging en foutcodes. Het doel is simpel: kleine slijtage vinden voordat het een dure reparatie wordt.',
      },
      {
        type: 'bullets',
        title: 'Signalen dat u nu een beurt moet plannen',
        items: [
          'De auto maakt nieuwe geluiden bij remmen, sturen of optrekken.',
          'Het brandstofverbruik loopt ineens op zonder duidelijke reden.',
          'De airco koelt minder goed of de ventilatie ruikt vreemd.',
          'Er brandt een storingslampje of het dashboard geeft een melding.',
        ],
      },
      {
        type: 'steps',
        title: 'Wat een goede onderhoudsbeurt oplevert',
        items: [
          {
            title: 'Minder kans op pech',
            text:
              'Een tijdige check voorkomt dat u met lege accu, versleten remmen of lekkage stilvalt.',
          },
          {
            title: 'Beter inzicht in kosten',
            text:
              'U krijgt duidelijk te horen wat urgent is en wat nog even kan wachten.',
          },
          {
            title: 'Praktische planning',
            text:
              'Woont u in Lichtenvoorde of een dorp in de buurt, dan is een werkplaats dichtbij gewoon handiger voor vervolgwerk.',
          },
        ],
      },
      {
        type: 'callout',
        title: 'Onderhoud slim combineren',
        text:
          'Heeft uw auto ook een storing, aircoprobleem of remgeluid? Dan is het vaak efficiënter om dat meteen mee te laten nemen in dezelfde afspraak.',
      },
    ],
    faqs: [
      {
        question: 'Hoe vaak moet auto onderhoud gebeuren?',
        answer:
          'Dat hangt af van merk, model, kilometerstand en gebruik. De onderhoudsintervallen van de fabrikant zijn leidend, maar signalen uit de praktijk zijn minstens zo belangrijk.',
      },
      {
        question: 'Is onderhoud ook zinvol als de auto “nog prima rijdt”?',
        answer:
          'Ja. Juist preventief onderhoud voorkomt dat kleine afwijkingen uitgroeien tot grotere reparaties.',
      },
      {
        question: 'Kan onderhoud worden gecombineerd met diagnose?',
        answer:
          'Zeker. Dat is vaak de slimste manier om in één bezoek meerdere problemen te beoordelen.',
      },
    ],
  },
  {
    slug: 'motorlampje-brandt-lichtenvoorde',
    title: 'Motorlampje brandt? Dit doet u voordat u naar een garage in Lichtenvoorde rijdt',
    excerpt:
      'Praktische uitleg over de meest voorkomende oorzaken van een brandend storingslampje en wanneer u direct diagnose nodig heeft.',
    metaDescription:
      'Brandt het motorlampje? Lees wat u wel en niet moet doen, wanneer veilig doorrijden kan en wanneer diagnose in Lichtenvoorde nodig is.',
    publishedAt: '2026-03-18',
    updatedAt: '2026-03-18',
    readingTime: '5 min',
    focusKeyword: 'motorlampje brandt Lichtenvoorde',
    focusArea: 'Lichtenvoorde en directe omgeving',
    relatedServices: ['diagnose-storing', 'onderhoud-service', 'remmen-wielophanging'],
    blocks: [
      {
        type: 'lead',
        text:
          'Een brandend motorlampje zorgt vaak direct voor twijfel: nog even doorrijden of meteen stoppen? Het antwoord hangt af van de melding, het gedrag van de auto en of er extra waarschuwingssignalen zijn.',
      },
      {
        type: 'paragraph',
        text:
          'Een storingslampje is geen diagnose op zichzelf. Het is een aanwijzing dat het motormanagement iets heeft gedetecteerd. Dat kan variëren van een losse sensor of een misfire tot een probleem met inspuiting, emissie of ontsteking.',
      },
      {
        type: 'bullets',
        title: 'Doe dit eerst',
        items: [
          'Controleer of de auto normaal optrekt en geen rare trillingen geeft.',
          'Kijk of er naast het motorlampje nog andere meldingen branden.',
          'Let op rook, verlies van vermogen of sterke benzinegeur.',
          'Rijd niet onnodig door als het lampje knippert in plaats van constant brandt.',
        ],
      },
      {
        type: 'steps',
        title: 'Wanneer is diagnose slim?',
        items: [
          {
            title: 'Bij terugkerende meldingen',
            text:
              'Als het lampje vaker terugkomt, is er een onderliggend probleem dat u niet moet uitstellen.',
          },
          {
            title: 'Bij VAG-modellen',
            text:
              'Audi, Volkswagen, SEAT en Skoda vragen vaak merkgerichte uitlezing om de echte oorzaak te vinden.',
          },
          {
            title: 'Als u uit de buurt komt',
            text:
              'Woont u in Lichtenvoorde, Groenlo of Varsseveld, dan is snel even langsgaan vaak beter dan blijven gokken.',
          },
        ],
      },
      {
        type: 'callout',
        title: 'Laat het uitlezen voordat het erger wordt',
        text:
          'Met een goede diagnose voorkomt u onnodig onderdelen vervangen. Dat scheelt tijd, geld en frustratie.',
      },
    ],
    faqs: [
      {
        question: 'Kan ik nog doorrijden met een brandend motorlampje?',
        answer:
          'Soms wel, soms niet. Als het lampje knippert, de auto inhoudt of vreemd ruikt, is stoppen verstandiger.',
      },
      {
        question: 'Is uitlezen altijd genoeg?',
        answer:
          'Nee. Een foutcode wijst richting een probleem, maar de oorzaak moet technisch bevestigd worden.',
      },
      {
        question: 'Waarom is een VAG specialist handig?',
        answer:
          'Omdat merkspecifieke kennis en apparatuur de kans vergroten dat de echte oorzaak sneller wordt gevonden.',
      },
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
