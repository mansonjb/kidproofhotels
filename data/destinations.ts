import type { Destination } from "@/lib/types";
import { DEST_CONTENT } from "@/data/destination-content";
import { MALLORCA_META, TENERIFE_META, CRETE_META, ANTALYA_META, SARDINIA_META, COSTA_BLANCA_META, RHODES_META } from "@/data/hotels/load";
import { hotelsInDestination } from "@/data/hotels";
import { backfillDeep, src } from "@/lib/l10n";

// Newer destinations pull their editorial content from the JSON seed's meta.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const M = (MALLORCA_META ?? {}) as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const T = (TENERIFE_META ?? {}) as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const C = (CRETE_META ?? {}) as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const A = (ANTALYA_META ?? {}) as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const S = (SARDINIA_META ?? {}) as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const B = (COSTA_BLANCA_META ?? {}) as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const R = (RHODES_META ?? {}) as any;

// SEED content for the MVP. Geo coordinates are public. Hotel line-ups point at
// entries in data/hotels.ts. Replace/extend with verified data before scaling.
export const DESTINATIONS: Destination[] = src([
  {
    key: "lisbon",
    name: { en: "Lisbon", fr: "Lisbonne", it: "Lisbona", de: "Lissabon", es: "Lisboa", pt: "Lisboa" },
    country: { en: "Portugal", fr: "Portugal", it: "Portogallo", de: "Portugal", es: "Portugal", pt: "Portugal" },
    inPhrase: { en: "in Lisbon", fr: "à Lisbonne", it: "a Lisbona", de: "in Lissabon", es: "en Lisboa", pt: "em Lisboa" },
    slug: {
      en: "family-hotels-lisbon",
      fr: "hotels-famille-lisbonne",
    },
    geo: { lat: 38.7223, lng: -9.1393, zoom: 12 },
    heroKicker: {
      en: "City break, kid approved",
      fr: "City break validé par les enfants",
      it: "City break promosso dai bambini",
      de: "Städtetrip, von Kindern abgesegnet",
      es: "Escapada urbana con el visto bueno de los niños",
      pt: "City break aprovado pelos miúdos",
    },
    intro: {
      en: "Lisbon is one of Europe's easiest cities with children: gentle, sunny, full of trams to ride and custard tarts to eat. The catch is the hills and the old buildings, so where you stay decides whether the buggy is a joy or a battle. These are the hotels that get the room setup and the stroller access right.",
      fr: "Lisbonne est l'une des villes d'Europe les plus faciles avec des enfants : douce, ensoleillée, pleine de tramways à prendre et de pastéis à dévorer. Le hic, ce sont les collines et les vieux immeubles, donc où vous logez décide si la poussette est un plaisir ou un combat. Voici les hôtels qui réussissent la config des chambres et l'accès poussette.",
      it: "Lisbona è una delle città europee più facili con i bambini: dolce, soleggiata, piena di tram su cui salire e pastéis de nata da gustare. Il rovescio della medaglia sono le colline e i palazzi antichi, quindi dove alloggiate decide se il passeggino è un piacere o una battaglia. Ecco gli hotel che azzeccano la sistemazione delle camere e l'accesso con il passeggino.",
      de: "Lissabon ist eine der einfachsten Städte Europas mit Kindern: sanft, sonnig, voller Trams zum Fahren und Pastéis de Nata zum Naschen. Der Haken sind die Hügel und die alten Gebäude, also entscheidet die Unterkunft darüber, ob der Buggy eine Freude oder ein Kampf wird. Das sind die Hotels, die die Zimmeraufteilung und den Kinderwagenzugang richtig hinbekommen.",
      es: "Lisboa es una de las ciudades europeas más fáciles con niños: apacible, soleada, llena de tranvías que montar y pastéis de nata que comer. La pega son las cuestas y los edificios antiguos, así que dónde te alojes decide si el carrito es un placer o una batalla. Estos son los hoteles que aciertan con la distribución de las habitaciones y el acceso con carrito.",
      pt: "Lisboa é uma das cidades da Europa mais fáceis com crianças: suave, soalheira, cheia de elétricos para andar e pastéis de nata para comer. O senão são as colinas e os prédios antigos, por isso onde fica decide se o carrinho é uma alegria ou uma batalha. Estes são os hotéis que acertam na configuração dos quartos e no acesso com carrinho.",
    },
    whyKids: {
      en: [
        "Short flights from most of Europe and a compact centre you can do on foot or by tram.",
        "Warm but rarely scorching, so kids stay comfortable spring through autumn.",
        "The Oceanário, tram 28 and the Belém pastries make an easy, happy day plan.",
        "Family rooms are common and many hotels have pools, rare for a European capital.",
      ],
      fr: [
        "Vols courts depuis presque toute l'Europe et un centre compact à faire à pied ou en tram.",
        "Chaud mais rarement écrasant, les enfants restent à l'aise du printemps à l'automne.",
        "L'Oceanário, le tram 28 et les pâtisseries de Belém font une journée simple et heureuse.",
        "Les chambres familiales sont courantes et beaucoup d'hôtels ont une piscine, rare pour une capitale européenne.",
      ],
      it: [
        "Voli brevi da quasi tutta l'Europa e un centro compatto che si gira a piedi o in tram.",
        "Caldo ma raramente torrido, così i bambini stanno bene dalla primavera all'autunno.",
        "L'Oceanário, il tram 28 e i pasticcini di Belém compongono una giornata semplice e felice.",
        "Le camere familiari sono comuni e molti hotel hanno la piscina, cosa rara per una capitale europea.",
      ],
      de: [
        "Kurze Flüge aus fast ganz Europa und ein kompaktes Zentrum, das ihr zu Fuß oder mit der Tram schafft.",
        "Warm, aber selten glühend heiß, sodass Kinder vom Frühling bis in den Herbst gut klarkommen.",
        "Das Oceanário, die Tram 28 und die Gebäckstücke von Belém ergeben einen einfachen, fröhlichen Tag.",
        "Familienzimmer sind üblich und viele Hotels haben einen Pool, selten für eine europäische Hauptstadt.",
      ],
      es: [
        "Vuelos cortos desde casi toda Europa y un centro compacto que se recorre a pie o en tranvía.",
        "Cálido pero pocas veces abrasador, así que los niños están a gusto de la primavera al otoño.",
        "El Oceanário, el tranvía 28 y los pasteles de Belém forman un día sencillo y feliz.",
        "Las habitaciones familiares son habituales y muchos hoteles tienen piscina, algo raro en una capital europea.",
      ],
      pt: [
        "Voos curtos a partir de quase toda a Europa e um centro compacto que se faz a pé ou de elétrico.",
        "Quente mas raramente escaldante, por isso as crianças ficam à vontade da primavera ao outono.",
        "O Oceanário, o elétrico 28 e os pastéis de Belém formam um dia simples e feliz.",
        "Os quartos de família são comuns e muitos hotéis têm piscina, algo raro numa capital europeia.",
      ],
    },
    bestAreas: {
      en: [
        "Parque das Nações: flat, modern, next to the aquarium and cable car. The easiest area with a buggy.",
        "Avenida da Liberdade: central, leafy and gentler underfoot than the old hills.",
        "Belém: riverside space to run, close to the pastries and the monastery.",
      ],
      fr: [
        "Parque das Nações : plat, moderne, à côté de l'aquarium et du téléphérique. Le quartier le plus facile en poussette.",
        "Avenida da Liberdade : central, arboré et plus doux sous les pieds que les vieilles collines.",
        "Belém : de l'espace au bord du fleuve pour courir, proche des pâtisseries et du monastère.",
      ],
      it: [
        "Parque das Nações: pianeggiante, moderno, accanto all'acquario e alla funivia. La zona più facile con il passeggino.",
        "Avenida da Liberdade: centrale, alberata e più comoda da percorrere delle vecchie colline.",
        "Belém: spazio lungo il fiume per correre, vicino ai pasticcini e al monastero.",
      ],
      de: [
        "Parque das Nações: flach, modern, direkt am Aquarium und der Seilbahn. Die einfachste Gegend mit Buggy.",
        "Avenida da Liberdade: zentral, grün und angenehmer zu gehen als die alten Hügel.",
        "Belém: Platz am Fluss zum Toben, nah an den Gebäckläden und dem Kloster.",
      ],
      es: [
        "Parque das Nações: llano, moderno, junto al acuario y el teleférico. La zona más fácil con carrito.",
        "Avenida da Liberdade: céntrica, arbolada y más cómoda de pisar que las viejas cuestas.",
        "Belém: espacio junto al río para correr, cerca de los pasteles y el monasterio.",
      ],
      pt: [
        "Parque das Nações: plano, moderno, ao lado do oceanário e do teleférico. A zona mais fácil com carrinho.",
        "Avenida da Liberdade: central, arborizada e mais suave para os pés do que as colinas antigas.",
        "Belém: espaço à beira-rio para correr, perto dos pastéis e do mosteiro.",
      ],
    },
    emoji: "🚋",
    accent: "ff9d1c",
    hotelKeys: [], // populated from loaded hotels below
    related: ["algarve", "guide-baby-checklist", "guide-connecting-rooms"],
  },
  {
    key: "algarve",
    name: { en: "The Algarve", fr: "L'Algarve", it: "L'Algarve", de: "Die Algarve", es: "El Algarve", pt: "O Algarve" },
    country: { en: "Portugal", fr: "Portugal", it: "Portogallo", de: "Portugal", es: "Portugal", pt: "Portugal" },
    inPhrase: { en: "in the Algarve", fr: "en Algarve", it: "nell'Algarve", de: "an der Algarve", es: "en el Algarve", pt: "no Algarve" },
    slug: {
      en: "family-hotels-algarve",
      fr: "hotels-famille-algarve",
    },
    geo: { lat: 37.0891, lng: -8.2478, zoom: 11 },
    heroKicker: {
      en: "Beach resorts that get families",
      fr: "Des resorts de plage qui comprennent les familles",
      it: "Resort sul mare che capiscono le famiglie",
      de: "Strandresorts, die Familien verstehen",
      es: "Resorts de playa que entienden a las familias",
      pt: "Resorts de praia que percebem as famílias",
    },
    intro: {
      en: "The Algarve is built for family holidays: calm golden beaches, shallow warm sea and resorts that have been perfecting the kids club for decades. The difference between a great week and a stressful one comes down to whether the club is free, the pool has a shallow end, and breakfast is quick. Here are the resorts that pass.",
      fr: "L'Algarve est fait pour les vacances en famille : plages dorées et calmes, mer chaude et peu profonde, et des resorts qui perfectionnent le club enfants depuis des décennies. La différence entre une semaine géniale et une semaine stressante tient à un club gratuit, une piscine à fond plat et un petit-déjeuner rapide. Voici les resorts qui passent le test.",
      it: "L'Algarve è fatto per le vacanze in famiglia: spiagge dorate e tranquille, mare caldo e poco profondo e resort che perfezionano il kids club da decenni. La differenza tra una settimana splendida e una stressante sta nel fatto che il club sia gratuito, che la piscina abbia una parte bassa e che la colazione sia veloce. Ecco i resort che superano la prova.",
      de: "Die Algarve ist für Familienurlaub gemacht: ruhige goldene Strände, flaches warmes Meer und Resorts, die den Kids Club seit Jahrzehnten perfektionieren. Der Unterschied zwischen einer tollen und einer stressigen Woche liegt daran, ob der Club kostenlos ist, der Pool einen flachen Bereich hat und das Frühstück schnell geht. Hier sind die Resorts, die bestehen.",
      es: "El Algarve está hecho para las vacaciones en familia: playas doradas y tranquilas, mar cálido y poco profundo y resorts que llevan décadas perfeccionando el club infantil. La diferencia entre una semana estupenda y una estresante está en si el club es gratis, la piscina tiene zona poco profunda y el desayuno es rápido. Estos son los resorts que aprueban.",
      pt: "O Algarve foi feito para as férias em família: praias douradas e calmas, mar quente e pouco fundo e resorts que aperfeiçoam o clube infantil há décadas. A diferença entre uma semana ótima e uma stressante está em o clube ser gratuito, a piscina ter uma zona baixa e o pequeno-almoço ser rápido. Aqui estão os resorts que passam no teste.",
    },
    whyKids: {
      en: [
        "Shallow, warm and calm beaches, some of the safest paddling in Europe.",
        "Purpose-built family resorts with real kids clubs, splash pools and evening entertainment.",
        "Short transfers from Faro airport, so no long drive with tired children.",
        "Great value outside July and August, when the water is still warm.",
      ],
      fr: [
        "Plages peu profondes, chaudes et calmes, parmi les plus sûres d'Europe pour barboter.",
        "Des resorts pensés famille avec de vrais clubs enfants, des pataugeoires et de l'animation le soir.",
        "Transferts courts depuis l'aéroport de Faro, pas de longue route avec des enfants fatigués.",
        "Excellent rapport qualité-prix hors juillet-août, quand l'eau est encore chaude.",
      ],
      it: [
        "Spiagge basse, calde e tranquille, tra le più sicure d'Europa per sguazzare.",
        "Resort pensati per le famiglie con veri kids club, piscine per bambini e animazione serale.",
        "Trasferimenti brevi dall'aeroporto di Faro, niente lunghi tragitti con bambini stanchi.",
        "Ottimo rapporto qualità-prezzo fuori da luglio e agosto, quando l'acqua è ancora calda.",
      ],
      de: [
        "Flache, warme und ruhige Strände, mit einigen der sichersten Planschstellen Europas.",
        "Eigens für Familien gebaute Resorts mit echten Kids Clubs, Planschbecken und Abendunterhaltung.",
        "Kurze Transfers vom Flughafen Faro, also keine lange Fahrt mit müden Kindern.",
        "Tolles Preis-Leistungs-Verhältnis außerhalb von Juli und August, wenn das Wasser noch warm ist.",
      ],
      es: [
        "Playas poco profundas, cálidas y tranquilas, de las más seguras de Europa para chapotear.",
        "Resorts pensados para familias con clubes infantiles de verdad, piscinas para peques y animación nocturna.",
        "Traslados cortos desde el aeropuerto de Faro, sin trayectos largos con niños cansados.",
        "Gran relación calidad-precio fuera de julio y agosto, cuando el agua sigue templada.",
      ],
      pt: [
        "Praias pouco fundas, quentes e calmas, das mais seguras da Europa para chapinhar.",
        "Resorts pensados para famílias com verdadeiros clubes infantis, piscinas para os mais pequenos e animação à noite.",
        "Transferes curtos a partir do aeroporto de Faro, sem viagens longas com crianças cansadas.",
        "Ótima relação qualidade-preço fora de julho e agosto, quando a água ainda está quente.",
      ],
    },
    bestAreas: {
      en: [
        "Albufeira: the most resorts and the easiest logistics, if you want everything on site.",
        "Lagos: prettier beaches and a walkable old town, a touch more grown-up.",
        "Vilamoura: polished marina resorts, calm and very buggy-friendly.",
      ],
      fr: [
        "Albufeira : le plus de resorts et la logistique la plus simple, si vous voulez tout sur place.",
        "Lagos : des plages plus jolies et une vieille ville à pied, un peu plus adulte.",
        "Vilamoura : resorts de marina soignés, calmes et très adaptés à la poussette.",
      ],
      it: [
        "Albufeira: il maggior numero di resort e la logistica più semplice, se volete tutto sul posto.",
        "Lagos: spiagge più belle e un centro storico da girare a piedi, un po' più adulto.",
        "Vilamoura: eleganti resort sulla marina, tranquilli e comodissimi con il passeggino.",
      ],
      de: [
        "Albufeira: die meisten Resorts und die einfachste Logistik, wenn ihr alles vor Ort wollt.",
        "Lagos: hübschere Strände und eine zu Fuß erkundbare Altstadt, etwas erwachsener.",
        "Vilamoura: gepflegte Marina-Resorts, ruhig und sehr buggyfreundlich.",
      ],
      es: [
        "Albufeira: la mayor cantidad de resorts y la logística más sencilla, si lo quieres todo en el mismo sitio.",
        "Lagos: playas más bonitas y un casco antiguo para pasear, un punto más adulto.",
        "Vilamoura: resorts de marina cuidados, tranquilos y muy cómodos con carrito.",
      ],
      pt: [
        "Albufeira: o maior número de resorts e a logística mais simples, se quer tudo no mesmo sítio.",
        "Lagos: praias mais bonitas e um centro histórico para passear a pé, um pouco mais adulto.",
        "Vilamoura: resorts de marina cuidados, calmos e muito práticos com carrinho.",
      ],
    },
    emoji: "🏖️",
    accent: "2bb3c0",
    hotelKeys: [], // populated below
    related: ["lisbon", "guide-allinclusive-europe", "guide-kids-club-free"],
  },
  {
    key: "costa-del-sol",
    name: { en: "Costa del Sol", fr: "Costa del Sol", it: "Costa del Sol", de: "Costa del Sol", es: "Costa del Sol", pt: "Costa del Sol" },
    country: { en: "Spain", fr: "Espagne", it: "Spagna", de: "Spanien", es: "España", pt: "Espanha" },
    inPhrase: { en: "on the Costa del Sol", fr: "sur la Costa del Sol", it: "sulla Costa del Sol", de: "an der Costa del Sol", es: "en la Costa del Sol", pt: "na Costa del Sol" },
    slug: {
      en: "family-hotels-costa-del-sol",
      fr: "hotels-famille-costa-del-sol",
    },
    geo: { lat: 36.5101, lng: -4.8825, zoom: 11 },
    heroKicker: {
      en: "Sunshine, splash parks and space",
      fr: "Soleil, parcs aquatiques et espace",
      it: "Sole, parchi acquatici e spazio",
      de: "Sonne, Wasserparks und Platz",
      es: "Sol, parques acuáticos y espacio",
      pt: "Sol, parques aquáticos e espaço",
    },
    intro: {
      en: "The Costa del Sol trades on sunshine and space: big resorts with several pools, water slides and room configurations that actually fit a family of four or five. If your children are at the water-slide age, this is the stretch of coast that was built for them. We score the resorts on the setup that matters.",
      fr: "La Costa del Sol mise sur le soleil et l'espace : de grands resorts avec plusieurs piscines, des toboggans et des configurations de chambres qui accueillent vraiment une famille de quatre ou cinq. Si vos enfants sont à l'âge des toboggans, c'est le littoral fait pour eux. On note les resorts sur ce qui compte vraiment.",
      it: "La Costa del Sol punta tutto su sole e spazio: grandi resort con più piscine, scivoli d'acqua e sistemazioni delle camere che accolgono davvero una famiglia di quattro o cinque persone. Se i vostri bambini sono nell'età degli scivoli, questo è il tratto di costa costruito per loro. Valutiamo i resort su ciò che conta davvero.",
      de: "Die Costa del Sol lebt von Sonne und Platz: große Resorts mit mehreren Pools, Wasserrutschen und Zimmeraufteilungen, in die eine Familie zu viert oder fünft wirklich passt. Wenn eure Kinder im Wasserrutschen-Alter sind, ist das der Küstenabschnitt, der für sie gebaut wurde. Wir bewerten die Resorts nach dem, was zählt.",
      es: "La Costa del Sol lo apuesta todo al sol y al espacio: grandes resorts con varias piscinas, toboganes de agua y distribuciones de habitación en las que de verdad cabe una familia de cuatro o cinco. Si tus hijos están en la edad de los toboganes, este es el tramo de costa que se construyó para ellos. Puntuamos los resorts según lo que de verdad importa.",
      pt: "A Costa del Sol aposta tudo no sol e no espaço: grandes resorts com várias piscinas, escorregas de água e configurações de quarto onde cabe mesmo uma família de quatro ou cinco. Se os seus filhos estão na idade dos escorregas, este é o troço de costa que foi feito para eles. Avaliamos os resorts pelo que realmente importa.",
    },
    whyKids: {
      en: [
        "Big resorts with multiple pools, splash areas and water slides on site.",
        "Family rooms and connecting options are the norm, not the exception.",
        "Sunshine almost guaranteed, with a long shoulder season either side of summer.",
        "Málaga airport is close and well connected, with short transfers.",
      ],
      fr: [
        "De grands resorts avec plusieurs piscines, des zones à jets et des toboggans sur place.",
        "Chambres familiales et communicantes sont la norme, pas l'exception.",
        "Soleil quasi garanti, avec une longue mi-saison de part et d'autre de l'été.",
        "L'aéroport de Málaga est proche et bien desservi, avec des transferts courts.",
      ],
      it: [
        "Grandi resort con più piscine, aree a getti d'acqua e scivoli sul posto.",
        "Camere familiari e comunicanti sono la norma, non l'eccezione.",
        "Sole quasi garantito, con una lunga bassa stagione prima e dopo l'estate.",
        "L'aeroporto di Málaga è vicino e ben collegato, con trasferimenti brevi.",
      ],
      de: [
        "Große Resorts mit mehreren Pools, Planschbereichen und Wasserrutschen vor Ort.",
        "Familien- und Verbindungszimmer sind die Regel, nicht die Ausnahme.",
        "Sonne fast garantiert, mit einer langen Nebensaison vor und nach dem Sommer.",
        "Der Flughafen Málaga ist nah und gut angebunden, mit kurzen Transfers.",
      ],
      es: [
        "Grandes resorts con varias piscinas, zonas de chorros y toboganes de agua en el propio recinto.",
        "Las habitaciones familiares y comunicadas son la norma, no la excepción.",
        "Sol casi garantizado, con una larga temporada media antes y después del verano.",
        "El aeropuerto de Málaga está cerca y bien conectado, con traslados cortos.",
      ],
      pt: [
        "Grandes resorts com várias piscinas, zonas de jatos de água e escorregas no próprio recinto.",
        "Os quartos de família e comunicantes são a regra, não a exceção.",
        "Sol quase garantido, com uma longa época intermédia antes e depois do verão.",
        "O aeroporto de Málaga fica perto e bem ligado, com transferes curtos.",
      ],
    },
    bestAreas: {
      en: [
        "Torremolinos: the most family resorts and the biggest water parks nearby.",
        "Marbella: smarter resorts with excellent kids clubs, if the budget stretches.",
        "Benalmádena: cable car, sea-life centre and a calm marina, all buggy-friendly.",
      ],
      fr: [
        "Torremolinos : le plus de resorts familiaux et les plus grands parcs aquatiques à proximité.",
        "Marbella : resorts plus chics avec d'excellents clubs enfants, si le budget suit.",
        "Benalmádena : téléphérique, aquarium et une marina calme, le tout adapté à la poussette.",
      ],
      it: [
        "Torremolinos: il maggior numero di resort per famiglie e i parchi acquatici più grandi nei dintorni.",
        "Marbella: resort più eleganti con ottimi kids club, se il budget lo consente.",
        "Benalmádena: funivia, acquario e una marina tranquilla, tutto comodo con il passeggino.",
      ],
      de: [
        "Torremolinos: die meisten Familienresorts und die größten Wasserparks in der Nähe.",
        "Marbella: edlere Resorts mit exzellenten Kids Clubs, wenn das Budget reicht.",
        "Benalmádena: Seilbahn, Meereszentrum und eine ruhige Marina, alles buggyfreundlich.",
      ],
      es: [
        "Torremolinos: la mayor cantidad de resorts familiares y los parques acuáticos más grandes cerca.",
        "Marbella: resorts más elegantes con clubes infantiles excelentes, si el presupuesto da.",
        "Benalmádena: teleférico, acuario y una marina tranquila, todo cómodo con carrito.",
      ],
      pt: [
        "Torremolinos: o maior número de resorts para famílias e os maiores parques aquáticos ali perto.",
        "Marbella: resorts mais elegantes com excelentes clubes infantis, se o orçamento permitir.",
        "Benalmádena: teleférico, aquário e uma marina calma, tudo prático com carrinho.",
      ],
    },
    emoji: "🎢",
    accent: "ff6b4a",
    hotelKeys: [], // populated below
    related: ["algarve", "guide-allinclusive-europe", "guide-waterslide-hotels"],
  },
  {
    key: "mallorca",
    name: { en: "Mallorca", fr: "Majorque" },
    country: { en: "Spain", fr: "Espagne" },
    inPhrase: { en: "in Mallorca", fr: "à Majorque" },
    slug: {
      en: "family-hotels-mallorca",
      fr: "hotels-famille-majorque",
    },
    geo: { lat: 39.7, lng: 3.02, zoom: 9 },
    heroKicker: M.heroKicker ?? {
      en: "Europe's family island",
      fr: "L'île famille d'Europe",
    },
    intro: M.intro ?? {
      en: "Mallorca is one of Europe's easiest family islands: shallow calm bays, short transfers and resorts built around kids clubs and splash parks.",
      fr: "Majorque est l'une des îles les plus faciles en famille d'Europe : criques calmes et peu profondes, transferts courts et resorts pensés autour des clubs enfants et des parcs à jets.",
    },
    whyKids: M.whyKids ?? { en: [], fr: [] },
    bestAreas: M.bestAreas ?? { en: [], fr: [] },
    emoji: M.emoji ?? "🏝️",
    accent: "2bb3c0",
    hotelKeys: [], // populated below
    related: ["algarve", "costa-del-sol", "guide-allinclusive-europe"],
    photos: M.photos,
    stats: M.stats,
    activities: M.activities,
    faqs: M.faqs,
    parentTip: M.parentTip,
    goodToKnow: M.goodToKnow,
  },
  {
    key: "tenerife",
    name: { en: "Tenerife", fr: "Tenerife" },
    country: { en: "Spain", fr: "Espagne" },
    inPhrase: { en: "in Tenerife", fr: "à Tenerife" },
    slug: {
      en: "family-hotels-tenerife",
      fr: "hotels-famille-tenerife",
    },
    geo: { lat: 28.09, lng: -16.74, zoom: 10 },
    heroKicker: T.heroKicker ?? {
      en: "Winter sun, year round",
      fr: "Soleil d'hiver, toute l'année",
    },
    intro: T.intro ?? {
      en: "Tenerife is Europe's year-round family island: warm in winter, calm beaches in the sheltered south, and resorts built around kids clubs, splash parks and Siam Park next door.",
      fr: "Tenerife est l'île famille toute l'année d'Europe : douce en hiver, plages calmes dans le sud abrité, et des resorts pensés autour des clubs enfants, des parcs à jets et de Siam Park juste à côté.",
    },
    whyKids: T.whyKids ?? { en: [], fr: [] },
    bestAreas: T.bestAreas ?? { en: [], fr: [] },
    emoji: T.emoji ?? "☀️",
    accent: "f2933c",
    hotelKeys: [], // populated below
    related: ["mallorca", "costa-del-sol", "guide-allinclusive-europe"],
    photos: T.photos,
    stats: T.stats,
    activities: T.activities,
    faqs: T.faqs,
    parentTip: T.parentTip,
    goodToKnow: T.goodToKnow,
  },
  {
    key: "crete",
    name: { en: "Crete", fr: "Crète" },
    country: { en: "Greece", fr: "Grèce" },
    inPhrase: { en: "in Crete", fr: "en Crète" },
    slug: {
      en: "family-hotels-crete",
      fr: "hotels-famille-crete",
    },
    geo: { lat: 35.24, lng: 24.81, zoom: 8 },
    heroKicker: C.heroKicker ?? {
      en: "Big Greek island, made for families",
      fr: "Grande île grecque, faite pour les familles",
    },
    intro: C.intro ?? {
      en: "Crete pairs shallow calm beaches and warm sea into October with big all-inclusive resorts, water parks and a dose of ancient history. It is one of the Mediterranean's best-value family islands.",
      fr: "La Crète marie plages calmes et peu profondes et mer chaude jusqu'en octobre avec de grands resorts all-inclusive, des parcs aquatiques et une dose d'histoire antique. C'est l'une des îles familiales méditerranéennes au meilleur rapport qualité-prix.",
    },
    whyKids: C.whyKids ?? { en: [], fr: [] },
    bestAreas: C.bestAreas ?? { en: [], fr: [] },
    emoji: C.emoji ?? "🫒",
    accent: "3a86c8",
    hotelKeys: [], // populated below
    related: ["mallorca", "tenerife", "guide-allinclusive-europe"],
    photos: C.photos,
    stats: C.stats,
    activities: C.activities,
    faqs: C.faqs,
    parentTip: C.parentTip,
    goodToKnow: C.goodToKnow,
  },
  {
    key: "antalya",
    name: { en: "Antalya", fr: "Antalya" },
    country: { en: "Turkey", fr: "Turquie" },
    inPhrase: { en: "in Antalya", fr: "à Antalya" },
    slug: {
      en: "family-hotels-antalya",
      fr: "hotels-famille-antalya",
    },
    geo: { lat: 36.86, lng: 31.06, zoom: 8 },
    heroKicker: A.heroKicker ?? {
      en: "Europe's all-inclusive family capital",
      fr: "La capitale famille du tout inclus",
    },
    intro: A.intro ?? {
      en: "The Turkish Riviera around Antalya is built for big-value family holidays: ultra all-inclusive resorts with vast aqua parks, free kids clubs and warm sea into November. If you want everything paid for up front and the kids entertained all day, few places do it better.",
      fr: "La Riviera turque autour d'Antalya est faite pour des vacances familiales au rapport qualité-prix imbattable : resorts ultra tout inclus avec d'immenses parcs aquatiques, clubs enfants gratuits et mer chaude jusqu'en novembre. Si vous voulez tout payé d'avance et des enfants occupés toute la journée, peu d'endroits font mieux.",
    },
    whyKids: A.whyKids ?? { en: [], fr: [] },
    bestAreas: A.bestAreas ?? { en: [], fr: [] },
    emoji: A.emoji ?? "🌅",
    accent: "e0794a",
    hotelKeys: [], // populated below
    related: ["crete", "costa-del-sol", "guide-allinclusive-europe"],
    photos: A.photos,
    stats: A.stats,
    activities: A.activities,
    faqs: A.faqs,
    parentTip: A.parentTip,
    goodToKnow: A.goodToKnow,
  },
  {
    key: "sardinia",
    name: { en: "Sardinia", fr: "Sardaigne" },
    country: { en: "Italy", fr: "Italie" },
    inPhrase: { en: "in Sardinia", fr: "en Sardaigne" },
    slug: {
      en: "family-hotels-sardinia",
      fr: "hotels-famille-sardaigne",
    },
    geo: { lat: 40.1, lng: 9.4, zoom: 8 },
    heroKicker: S.heroKicker ?? {
      en: "Turquoise bays made for children",
      fr: "Des criques turquoise faites pour les enfants",
    },
    intro: S.intro ?? {
      en: "Sardinia has some of the Mediterranean's most beautiful shallow, calm bays, the kind where a toddler can paddle for hours. Add short flights, family resorts with real kids clubs and food children actually eat, and it is a gentle, gorgeous week with kids.",
      fr: "La Sardaigne possède parmi les plus belles criques peu profondes et calmes de Méditerranée, le genre où un tout-petit peut barboter des heures. Ajoutez des vols courts, des resorts familiaux avec de vrais clubs enfants et une cuisine que les enfants mangent vraiment, et c'est une semaine douce et magnifique en famille.",
    },
    whyKids: S.whyKids ?? { en: [], fr: [] },
    bestAreas: S.bestAreas ?? { en: [], fr: [] },
    emoji: S.emoji ?? "🐚",
    accent: "2a9d8f",
    hotelKeys: [], // populated below
    related: ["crete", "mallorca", "guide-allinclusive-europe"],
    photos: S.photos,
    stats: S.stats,
    activities: S.activities,
    faqs: S.faqs,
    parentTip: S.parentTip,
    goodToKnow: S.goodToKnow,
  },
  {
    key: "costa-blanca",
    name: { en: "Costa Blanca", fr: "Costa Blanca" },
    country: { en: "Spain", fr: "Espagne" },
    inPhrase: { en: "on the Costa Blanca", fr: "sur la Costa Blanca" },
    slug: {
      en: "family-hotels-costa-blanca",
      fr: "hotels-famille-costa-blanca",
    },
    geo: { lat: 38.53, lng: -0.13, zoom: 9 },
    heroKicker: B.heroKicker ?? {
      en: "Theme parks, water parks and long beaches",
      fr: "Parcs à thème, parcs aquatiques et longues plages",
    },
    intro: B.intro ?? {
      en: "The Costa Blanca around Benidorm is a family theme-park and water-park powerhouse: Terra Mitica, Aqualandia and Mundomar are on the doorstep, the beaches are long and gentle, and Alicante airport is a short transfer. If your kids want rides and slides, this is the coast for them.",
      fr: "La Costa Blanca autour de Benidorm est une machine à parcs à thème et parcs aquatiques : Terra Mitica, Aqualandia et Mundomar sont à deux pas, les plages sont longues et douces, et l'aéroport d'Alicante est à courte distance. Si vos enfants veulent des manèges et des toboggans, c'est le littoral qu'il leur faut.",
    },
    whyKids: B.whyKids ?? { en: [], fr: [] },
    bestAreas: B.bestAreas ?? { en: [], fr: [] },
    emoji: B.emoji ?? "🎡",
    accent: "e76f51",
    hotelKeys: [], // populated below
    related: ["costa-del-sol", "mallorca", "guide-allinclusive-europe"],
    photos: B.photos,
    stats: B.stats,
    activities: B.activities,
    faqs: B.faqs,
    parentTip: B.parentTip,
    goodToKnow: B.goodToKnow,
  },
  {
    key: "rhodes",
    name: { en: "Rhodes", fr: "Rhodes" },
    country: { en: "Greece", fr: "Grèce" },
    inPhrase: { en: "in Rhodes", fr: "à Rhodes" },
    slug: {
      en: "family-hotels-rhodes",
      fr: "hotels-famille-rhodes",
    },
    geo: { lat: 36.3, lng: 28.1, zoom: 9 },
    heroKicker: R.heroKicker ?? {
      en: "All-inclusive island for easy family weeks",
      fr: "L'île tout inclus pour des semaines faciles en famille",
    },
    intro: R.intro ?? {
      en: "Rhodes is a family all-inclusive heavyweight: big resorts with aqua parks and free kids clubs, warm calm sea into October, and a dose of ancient history at Lindos and the Old Town. Everything paid up front, plenty for the kids, and short transfers make for an easy week.",
      fr: "Rhodes est un poids lourd du tout inclus en famille : grands resorts avec parcs aquatiques et clubs enfants gratuits, mer chaude et calme jusqu'en octobre, et une dose d'histoire antique à Lindos et dans la vieille ville. Tout payé d'avance, de quoi occuper les enfants, et des transferts courts pour une semaine facile.",
    },
    whyKids: R.whyKids ?? { en: [], fr: [] },
    bestAreas: R.bestAreas ?? { en: [], fr: [] },
    emoji: R.emoji ?? "🏛️",
    accent: "5b8def",
    hotelKeys: [], // populated below
    related: ["crete", "antalya", "guide-allinclusive-europe"],
    photos: R.photos,
    stats: R.stats,
    activities: R.activities,
    faqs: R.faqs,
    parentTip: R.parentTip,
    goodToKnow: R.goodToKnow,
  },
]);

// Merge rich content (photos, stats, activities, FAQs, tips) onto destinations,
// and populate each destination's hotel line-up from the loaded hotels.
for (const d of DESTINATIONS) {
  const extra = DEST_CONTENT[d.key];
  if (extra) Object.assign(d, extra);
  d.hotelKeys = hotelsInDestination(d.key).map((h) => h.key);
}
backfillDeep(DESTINATIONS);

export const DEST_BY_KEY = new Map(DESTINATIONS.map((d) => [d.key, d]));
