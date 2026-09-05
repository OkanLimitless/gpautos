export const serviceVisuals: Record<
  string,
  { image: string; alt: string; headline: string; detail: string }
> = {
  'onderhoud-service': {
    image: '/images/gp-service-maintenance.png',
    alt: 'Een oliefilter wordt vervangen tijdens een onderhoudsbeurt',
    headline: 'Goed onderhoud. Fijn blijven rijden.',
    detail:
      'Van olie en filters tot de punten die juist bij uw model aandacht vragen. Onderhoud volgens het fabrieksschema, met een helder verhaal.',
  },
  'diagnose-storing': {
    image: '/images/gp-service-diagnose.png',
    alt: 'Diagnoseapparatuur wordt gebruikt in een Audi',
    headline: 'Een foutcode is pas het begin.',
    detail:
      'Dat lampje brandt met een reden. Met merkspecifieke apparatuur en kennis van VAG-techniek zoeken we uit wat er écht aan de hand is.',
  },
  'remmen-wielophanging': {
    image: '/images/gp-service-brakes.png',
    alt: 'Werkzaamheden aan de remschijf en remklauw van een auto',
    headline: 'Vertrouwen. Bij elke bocht en remactie.',
    detail:
      'Trillingen, geluid of een minder strak stuurgevoel? We controleren remmen en onderstel en bespreken welke onderdelen aandacht nodig hebben.',
  },
  'software-chiptuning': {
    image: '/images/gp-service-coding.png',
    alt: 'Voertuiginstellingen worden gecontroleerd met een diagnoselaptop',
    headline: 'Uw auto. Net iets meer van u.',
    detail:
      'Comfortfuncties en instellingen die bij u passen. We kijken met VCDS wat uw uitvoering en de aanwezige hardware mogelijk maken.',
  },
}
