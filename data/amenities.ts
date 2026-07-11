import type { ImgKey } from "@/lib/images";
import type { L10n } from "@/lib/types";
import { backfillDeep, src } from "@/lib/l10n";

// Family amenity taxonomy. This is what turns the site from a handful of pages
// into a browsable matrix: "family hotels with a pool", "with a free kids club",
// and so on. Activity-first discovery, the way parents actually search.

export type AmenityId =
  | "pool"
  | "free-kids-club"
  | "water-slides"
  | "baby-friendly"
  | "beach-access"
  | "family-suites"
  | "self-catering"
  | "toddler-friendly"
  | "city-base";

export type Amenity = {
  id: AmenityId;
  emoji: string;
  img: ImgKey;
  accent: string;
  label: L10n; // short, for chips and cards
  short: L10n; // one-line card blurb
  slug: L10n;
  h1: L10n; // page title
  intro: L10n;
  tip: L10n; // parent tip callout on the amenity page
};

export const AMENITIES: Amenity[] = src([
  {
    id: "pool",
    emoji: "🏊",
    img: "poolPalms",
    accent: "2bb3c0",
    label: { en: "Swimming pool", fr: "Piscine", it: "Piscina", de: "Swimmingpool", es: "Piscina", pt: "Piscina" },
    short: { en: "Hotels with a pool the kids can actually use", fr: "Des hôtels avec une piscine où les enfants peuvent vraiment nager", it: "Hotel con piscina che i bambini possono davvero usare", de: "Hotels mit Pool, den die Kinder wirklich nutzen können", es: "Hoteles con piscina que los niños pueden usar de verdad", pt: "Hotéis com piscina que as crianças podem mesmo usar" },
    slug: { en: "family-hotels-with-a-pool", fr: "hotels-famille-avec-piscine" },
    h1: { en: "Family hotels with a pool", fr: "Hôtels famille avec piscine", it: "Hotel per famiglie con piscina", de: "Familienhotels mit Pool", es: "Hoteles familiares con piscina", pt: "Hotéis para famílias com piscina" },
    intro: {
      en: "A pool is the number one amenity families search for, but not all pools are equal. We flag the shallow end, the toddler shelf and whether it is watched, so you know it works for your children before you book.",
      fr: "La piscine est l'équipement le plus recherché par les familles, mais toutes ne se valent pas. On signale le fond plat, le rebord pour tout-petits et la surveillance, pour savoir si elle convient à vos enfants avant de réserver.",
      it: "La piscina è il servizio più cercato dalle famiglie, ma non tutte le piscine sono uguali. Segnaliamo la zona bassa, il gradino per i più piccoli e se c'è sorveglianza, così sai se va bene per i tuoi bambini prima di prenotare.",
      de: "Ein Pool ist die Ausstattung, nach der Familien am häufigsten suchen, aber nicht jeder Pool ist gleich. Wir weisen auf den flachen Bereich hin, auf die Kleinkindstufe und darauf, ob er beaufsichtigt wird, damit du schon vor der Buchung weißt, ob er zu deinen Kindern passt.",
      es: "La piscina es el servicio que más buscan las familias, pero no todas las piscinas son iguales. Señalamos la zona poco profunda, el escalón para los más pequeños y si está vigilada, para que sepas si les va bien a tus hijos antes de reservar.",
      pt: "A piscina é o serviço que as famílias mais procuram, mas nem todas as piscinas são iguais. Indicamos a zona baixa, o degrau para os mais pequenos e se tem vigilância, para saber se serve para os seus filhos antes de reservar.",
    },
    tip: {
      en: "Check the shallow end depth and whether the pool is watched. A deep, unwatched pool is a stressful holiday with young kids.",
      fr: "Vérifiez la profondeur du fond plat et la surveillance. Une piscine profonde et sans surveillance, c'est des vacances stressantes avec de jeunes enfants.",
      it: "Controlla la profondità della zona bassa e se la piscina è sorvegliata. Una piscina profonda e senza sorveglianza sono vacanze stressanti con bambini piccoli.",
      de: "Prüfe die Tiefe im flachen Bereich und ob der Pool beaufsichtigt ist. Ein tiefer, unbeaufsichtigter Pool bedeutet stressige Ferien mit kleinen Kindern.",
      es: "Comprueba la profundidad de la zona baja y si hay vigilancia. Una piscina profunda y sin vigilancia son unas vacaciones estresantes con niños pequeños.",
      pt: "Confirme a profundidade da zona baixa e se a piscina tem vigilância. Uma piscina funda e sem vigilância dá umas férias stressantes com crianças pequenas.",
    },
  },
  {
    id: "free-kids-club",
    emoji: "🎨",
    img: "kidsFootball",
    accent: "ff6b4a",
    label: { en: "Free kids club", fr: "Club enfants gratuit", it: "Miniclub gratuito", de: "Kostenloser Kinderclub", es: "Club infantil gratis", pt: "Clube infantil grátis" },
    short: { en: "Genuine, all-day clubs that are actually included", fr: "De vrais clubs toute la journée, vraiment inclus", it: "Veri miniclub per tutto il giorno, davvero inclusi", de: "Echte Ganztagsclubs, die wirklich inklusive sind", es: "Clubes de verdad, todo el día y de verdad incluidos", pt: "Clubes a sério, o dia todo e mesmo incluídos" },
    slug: { en: "family-hotels-with-a-free-kids-club", fr: "hotels-famille-club-enfants-gratuit" },
    h1: { en: "Family hotels with a free kids club", fr: "Hôtels famille avec club enfants gratuit", it: "Hotel per famiglie con miniclub gratuito", de: "Familienhotels mit kostenlosem Kinderclub", es: "Hoteles familiares con club infantil gratis", pt: "Hotéis para famílias com clube infantil grátis" },
    intro: {
      en: "A club at 50 to 100 euros a day quietly changes the price of a holiday. These hotels run a genuinely free, all-day club, split by age, that gives you an actual break.",
      fr: "Un club à 50 ou 100 euros par jour change discrètement le prix des vacances. Ces hôtels proposent un vrai club gratuit toute la journée, réparti par âge, qui vous offre une vraie pause.",
      it: "Un club da 50 a 100 euro al giorno cambia in silenzio il prezzo della vacanza. Questi hotel offrono un vero miniclub gratuito, aperto tutto il giorno e diviso per età, che ti regala una pausa vera.",
      de: "Ein Club für 50 bis 100 Euro am Tag verändert klammheimlich den Preis eures Urlaubs. Diese Hotels bieten einen wirklich kostenlosen Ganztagsclub, nach Alter getrennt, der euch eine echte Pause verschafft.",
      es: "Un club de 50 a 100 euros al día cambia sin que te des cuenta el precio de las vacaciones. Estos hoteles tienen un club de verdad gratis, todo el día y separado por edades, que te da un respiro real.",
      pt: "Um clube a 50 ou 100 euros por dia muda em silêncio o preço das férias. Estes hotéis têm um clube mesmo grátis, o dia todo e dividido por idades, que vos dá uma pausa a sério.",
    },
    tip: {
      en: "Ask the hours and the age split. All day, separated by age, is a real club. Two hours after lunch is a babysitting slot.",
      fr: "Demandez les horaires et la répartition par âge. Toute la journée, séparé par âge, c'est un vrai club. Deux heures après le déjeuner, c'est un créneau de garde.",
      it: "Chiedi gli orari e la divisione per età. Tutto il giorno, diviso per età, è un vero club. Due ore dopo pranzo è solo un momento di baby-sitting.",
      de: "Frag nach den Öffnungszeiten und der Alterseinteilung. Ganztags und nach Alter getrennt ist ein echter Club. Zwei Stunden nach dem Mittagessen ist nur Babysitting.",
      es: "Pregunta los horarios y la separación por edades. Todo el día y por edades es un club de verdad. Dos horas después de comer es un rato de canguro.",
      pt: "Pergunte os horários e a divisão por idades. O dia todo e por idades é um clube a sério. Duas horas depois do almoço é só um bocadinho de baby-sitting.",
    },
  },
  {
    id: "water-slides",
    emoji: "🎢",
    img: "poolCabanas",
    accent: "ff6b4a",
    label: { en: "Water slides", fr: "Toboggans", it: "Scivoli d'acqua", de: "Wasserrutschen", es: "Toboganes de agua", pt: "Escorregas de água" },
    short: { en: "For the water-slide age, the pool is the holiday", fr: "À l'âge des toboggans, la piscine, c'est les vacances", it: "All'età degli scivoli, la piscina è la vacanza", de: "Im Wasserrutschen-Alter ist der Pool der ganze Urlaub", es: "A la edad de los toboganes, la piscina son las vacaciones", pt: "Na idade dos escorregas, a piscina são as férias" },
    slug: { en: "family-hotels-with-water-slides", fr: "hotels-famille-avec-toboggans" },
    h1: { en: "Family hotels with water slides", fr: "Hôtels famille avec toboggans", it: "Hotel per famiglie con scivoli d'acqua", de: "Familienhotels mit Wasserrutschen", es: "Hoteles familiares con toboganes de agua", pt: "Hotéis para famílias com escorregas de água" },
    intro: {
      en: "For kids roughly four to twelve, water slides are the whole holiday. These resorts are built around them, and we score the shallow end and the lifeguards too, not just the big flumes.",
      fr: "Pour les enfants d'environ quatre à douze ans, les toboggans sont les vacances entières. Ces resorts sont construits autour, et on note aussi le fond plat et les maîtres-nageurs, pas seulement les grands toboggans.",
      it: "Per i bambini più o meno dai quattro ai dodici anni, gli scivoli sono tutta la vacanza. Questi resort sono costruiti intorno a loro, e noi valutiamo anche la zona bassa e i bagnini, non solo i grandi scivoli.",
      de: "Für Kinder von etwa vier bis zwölf sind Wasserrutschen der ganze Urlaub. Diese Resorts sind darum herum gebaut, und wir bewerten auch den flachen Bereich und die Bademeister, nicht nur die großen Rutschen.",
      es: "Para niños de más o menos cuatro a doce años, los toboganes son las vacaciones enteras. Estos resorts están construidos alrededor de ellos, y también puntuamos la zona poco profunda y los socorristas, no solo los toboganes grandes.",
      pt: "Para crianças mais ou menos dos quatro aos doze, os escorregas são as férias inteiras. Estes resorts são construídos à volta deles, e também avaliamos a zona baixa e os nadadores-salvadores, não só os escorregas grandes.",
    },
    tip: {
      en: "Match the slides to the age: a toddler splash zone for the little ones, big flumes for older kids. We flag which is which.",
      fr: "Adaptez les toboggans à l'âge : zone à jets pour les tout-petits, grands toboggans pour les plus grands. On l'indique.",
      it: "Adatta gli scivoli all'età: una zona a spruzzi per i più piccoli, i grandi scivoli per i più grandi. Noi ti diciamo qual è quale.",
      de: "Passt die Rutschen ans Alter an: eine Planschzone für die Kleinen, große Rutschen für die Größeren. Wir sagen euch, was was ist.",
      es: "Adapta los toboganes a la edad: una zona de chapoteo para los más pequeños y toboganes grandes para los mayores. Te indicamos cuál es cuál.",
      pt: "Adapte os escorregas à idade: uma zona de salpicos para os mais pequenos e escorregas grandes para os mais crescidos. Dizemos-lhe qual é qual.",
    },
  },
  {
    id: "baby-friendly",
    emoji: "🍼",
    img: "babyHand",
    accent: "2bb3c0",
    label: { en: "Baby-friendly", fr: "Adapté aux bébés", it: "Adatto ai neonati", de: "Babyfreundlich", es: "Ideal para bebés", pt: "Ideal para bebés" },
    short: { en: "Free cots, high chairs and the kit that matters", fr: "Lits bébé gratuits, chaises hautes et le matériel qui compte", it: "Culle gratuite, seggioloni e l'attrezzatura che conta", de: "Kostenlose Babybetten, Hochstühle und die Ausstattung, die zählt", es: "Cunas gratis, tronas y el equipo que importa", pt: "Berços grátis, cadeiras de refeição e o equipamento que conta" },
    slug: { en: "baby-friendly-hotels", fr: "hotels-adaptes-aux-bebes" },
    h1: { en: "Baby-friendly family hotels", fr: "Hôtels adaptés aux bébés", it: "Hotel per famiglie adatti ai neonati", de: "Babyfreundliche Familienhotels", es: "Hoteles familiares ideales para bebés", pt: "Hotéis para famílias ideais para bebés" },
    intro: {
      en: "A first trip with a baby is about the kit and the nap. These hotels have clean cots, high chairs and a bottle warmer, plus the flat access and separate sleeping space that make it restful.",
      fr: "Un premier voyage avec un bébé, c'est le matériel et la sieste. Ces hôtels ont des lits parapluie propres, des chaises hautes et un chauffe-biberon, plus l'accès plat et l'espace nuit séparé qui rendent le séjour reposant.",
      it: "Il primo viaggio con un neonato è questione di attrezzatura e di sonnellini. Questi hotel hanno culle pulite, seggioloni e uno scaldabiberon, oltre all'accesso senza gradini e allo spazio notte separato che rendono tutto riposante.",
      de: "Die erste Reise mit einem Baby dreht sich um die Ausstattung und den Mittagsschlaf. Diese Hotels haben saubere Babybetten, Hochstühle und einen Flaschenwärmer, dazu den ebenerdigen Zugang und den getrennten Schlafbereich, die für Erholung sorgen.",
      es: "Un primer viaje con un bebé va de equipo y de siestas. Estos hoteles tienen cunas limpias, tronas y un calientabiberones, además del acceso sin escalones y el espacio para dormir aparte que lo hacen descansado.",
      pt: "Uma primeira viagem com um bebé é uma questão de equipamento e de sestas. Estes hotéis têm berços limpos, cadeiras de refeição e um aquecedor de biberões, além do acesso sem degraus e do espaço para dormir separado que tornam tudo descansado.",
    },
    tip: {
      en: "Confirm the cot is free and set up before you arrive. Landing with an overtired baby and no cot is the classic first-night mistake.",
      fr: "Confirmez que le lit bébé est gratuit et installé avant l'arrivée. Débarquer avec un bébé épuisé et pas de lit, c'est l'erreur classique de la première nuit.",
      it: "Conferma che la culla sia gratuita e già pronta al tuo arrivo. Arrivare con un neonato sfinito e senza culla è il classico errore della prima notte.",
      de: "Bestätige, dass das Babybett kostenlos und schon vor der Ankunft aufgebaut ist. Mit einem übermüdeten Baby und ohne Babybett anzukommen ist der klassische Fehler in der ersten Nacht.",
      es: "Confirma que la cuna es gratis y está montada antes de llegar. Aterrizar con un bebé agotado y sin cuna es el error clásico de la primera noche.",
      pt: "Confirme que o berço é grátis e está montado antes de chegar. Chegar com um bebé exausto e sem berço é o erro clássico da primeira noite.",
    },
  },
  {
    id: "beach-access",
    emoji: "🏖️",
    img: "algarveCliffs",
    accent: "ff9d1c",
    label: { en: "Beach access", fr: "Accès plage", it: "Accesso alla spiaggia", de: "Strandzugang", es: "Acceso a la playa", pt: "Acesso à praia" },
    short: { en: "Calm, shallow beaches within easy reach", fr: "Des plages calmes et peu profondes à portée", it: "Spiagge calme e poco profonde a portata di mano", de: "Ruhige, flache Strände in bequemer Reichweite", es: "Playas tranquilas y poco profundas a un paso", pt: "Praias calmas e pouco fundas mesmo ali ao lado" },
    slug: { en: "family-beach-hotels", fr: "hotels-famille-bord-de-mer" },
    h1: { en: "Family hotels near the beach", fr: "Hôtels famille au bord de la mer", it: "Hotel per famiglie vicino alla spiaggia", de: "Familienhotels in Strandnähe", es: "Hoteles familiares cerca de la playa", pt: "Hotéis para famílias perto da praia" },
    intro: {
      en: "Not all beach hotels are family beach hotels. These are close to calm, shallow, sheltered beaches, and we tell you when the walk back up is steep with a buggy.",
      fr: "Tous les hôtels de plage ne sont pas des hôtels de plage en famille. Ceux-ci sont proches de plages calmes, peu profondes et abritées, et on vous dit quand la remontée est raide en poussette.",
      it: "Non tutti gli hotel sul mare sono hotel sul mare per famiglie. Questi sono vicini a spiagge calme, poco profonde e riparate, e ti diciamo quando la salita di ritorno è ripida con il passeggino.",
      de: "Nicht jedes Strandhotel ist ein Familienstrandhotel. Diese liegen nahe an ruhigen, flachen, geschützten Stränden, und wir sagen euch, wenn der Rückweg mit dem Buggy steil ist.",
      es: "No todos los hoteles de playa son hoteles de playa para familias. Estos están cerca de playas tranquilas, poco profundas y resguardadas, y te avisamos cuando la vuelta cuesta arriba es dura con el carrito.",
      pt: "Nem todos os hotéis de praia são hotéis de praia para famílias. Estes ficam perto de praias calmas, pouco fundas e abrigadas, e avisamos quando a subida de volta é puxada com o carrinho.",
    },
    tip: {
      en: "Check the beach access, not just the distance. A clifftop hotel can be two minutes from the sand and a hard climb back.",
      fr: "Vérifiez l'accès à la plage, pas juste la distance. Un hôtel en haut de falaise peut être à deux minutes du sable et une remontée pénible.",
      it: "Controlla l'accesso alla spiaggia, non solo la distanza. Un hotel in cima a una scogliera può essere a due minuti dalla sabbia e una salita faticosa al ritorno.",
      de: "Prüfe den Strandzugang, nicht nur die Entfernung. Ein Hotel auf der Klippe kann zwei Minuten vom Sand entfernt sein und trotzdem ein harter Aufstieg zurück.",
      es: "Mira el acceso a la playa, no solo la distancia. Un hotel en lo alto de un acantilado puede estar a dos minutos de la arena y ser una subida dura a la vuelta.",
      pt: "Veja o acesso à praia, não só a distância. Um hotel no topo de uma falésia pode estar a dois minutos da areia e ser uma subida difícil na volta.",
    },
  },
  {
    id: "family-suites",
    emoji: "🛏️",
    img: "roomCozy",
    accent: "ff9d1c",
    label: { en: "Family suites", fr: "Suites familiales", it: "Suite familiari", de: "Familiensuiten", es: "Suites familiares", pt: "Suites familiares" },
    short: { en: "Connecting rooms and a real separate sleeping space", fr: "Chambres communicantes et un vrai espace nuit séparé", it: "Camere comunicanti e un vero spazio notte separato", de: "Verbindungszimmer und ein echter getrennter Schlafbereich", es: "Habitaciones comunicadas y un espacio para dormir aparte de verdad", pt: "Quartos comunicantes e um espaço para dormir mesmo separado" },
    slug: { en: "hotels-with-family-suites", fr: "hotels-avec-suites-familiales" },
    h1: { en: "Family hotels with connecting rooms and suites", fr: "Hôtels famille avec chambres communicantes et suites", it: "Hotel per famiglie con camere comunicanti e suite", de: "Familienhotels mit Verbindungszimmern und Suiten", es: "Hoteles familiares con habitaciones comunicadas y suites", pt: "Hotéis para famílias com quartos comunicantes e suites" },
    intro: {
      en: "The number one family question is the room. These hotels offer connecting rooms or family suites with a separate sleeping area, so bedtime does not black out the whole family at 7pm.",
      fr: "La première question des familles, c'est la chambre. Ces hôtels proposent des chambres communicantes ou des suites familiales avec espace nuit séparé, pour que le coucher n'éteigne pas toute la famille à 19h.",
      it: "La prima domanda delle famiglie è la camera. Questi hotel offrono camere comunicanti o suite familiari con una zona notte separata, così l'ora della nanna non spegne tutta la famiglia alle 19.",
      de: "Die wichtigste Frage von Familien ist das Zimmer. Diese Hotels bieten Verbindungszimmer oder Familiensuiten mit getrenntem Schlafbereich, damit die Schlafenszeit nicht die ganze Familie um 19 Uhr lahmlegt.",
      es: "La primera pregunta de las familias es la habitación. Estos hoteles ofrecen habitaciones comunicadas o suites familiares con una zona para dormir aparte, para que la hora de acostar no apague a toda la familia a las siete.",
      pt: "A primeira pergunta das famílias é o quarto. Estes hotéis oferecem quartos comunicantes ou suites familiares com uma zona para dormir separada, para que a hora de deitar não apague a família toda às sete da tarde.",
    },
    tip: {
      en: "Ask if connecting rooms can be guaranteed at booking, not just requested. Requested often means not available on arrival.",
      fr: "Demandez si les chambres communicantes sont garanties à la réservation, pas juste sur demande. Sur demande veut souvent dire indisponible à l'arrivée.",
      it: "Chiedi se le camere comunicanti si possono garantire alla prenotazione, non solo richiedere. Su richiesta spesso vuol dire non disponibili all'arrivo.",
      de: "Frag, ob Verbindungszimmer bei der Buchung garantiert werden können, nicht nur auf Anfrage. Auf Anfrage heißt oft bei der Ankunft nicht verfügbar.",
      es: "Pregunta si las habitaciones comunicadas se pueden garantizar al reservar, no solo pedir. Bajo petición suele significar no disponible al llegar.",
      pt: "Pergunte se os quartos comunicantes podem ser garantidos na reserva, não só pedidos. Sob pedido quer muitas vezes dizer indisponível à chegada.",
    },
  },
  {
    id: "self-catering",
    emoji: "🍳",
    img: "livingRoom",
    accent: "2bb3c0",
    label: { en: "Kitchen", fr: "Cuisine", it: "Cucina", de: "Küche", es: "Cocina", pt: "Cozinha" },
    short: { en: "A kitchen for fussy eaters and early breakfasts", fr: "Une cuisine pour les difficiles et les petits-déjeuners tôt", it: "Una cucina per i bambini schizzinosi e le colazioni all'alba", de: "Eine Küche für wählerische Esser und frühe Frühstücke", es: "Una cocina para los quisquillosos con la comida y los desayunos tempranos", pt: "Uma cozinha para os difíceis a comer e os pequenos-almoços cedo" },
    slug: { en: "self-catering-family-hotels", fr: "hotels-famille-avec-cuisine" },
    h1: { en: "Self-catering family hotels and apartments", fr: "Hôtels et appartements famille avec cuisine", it: "Hotel e appartamenti per famiglie con angolo cottura", de: "Familienhotels und Apartments mit Selbstverpflegung", es: "Hoteles y apartamentos familiares con cocina", pt: "Hotéis e apartamentos para famílias com cozinha" },
    intro: {
      en: "A kitchenette is quietly one of the most useful things on a family trip: warm milk at 6am, simple meals for fussy eaters, and no waiting for slow room service. These stays have one.",
      fr: "Une kitchenette est discrètement l'une des choses les plus utiles en voyage en famille : lait chaud à 6h, repas simples pour les difficiles, et pas d'attente d'un room service lent. Ces séjours en ont une.",
      it: "Un angolo cottura è, senza far rumore, una delle cose più utili in un viaggio in famiglia: latte caldo alle 6, pasti semplici per i bambini schizzinosi e niente attese per un room service lento. Questi alloggi ne hanno uno.",
      de: "Eine Kochnische ist ganz unauffällig eines der nützlichsten Dinge auf einer Familienreise: warme Milch um 6 Uhr, einfache Mahlzeiten für wählerische Esser und kein Warten auf langsamen Zimmerservice. Diese Unterkünfte haben eine.",
      es: "Una cocina pequeña es, sin hacer ruido, una de las cosas más útiles en un viaje en familia: leche caliente a las 6, comidas sencillas para los quisquillosos y nada de esperar a un servicio de habitaciones lento. Estos alojamientos tienen una.",
      pt: "Uma kitchenette é, sem alarido, uma das coisas mais úteis numa viagem em família: leite quente às 6, refeições simples para os mais difíceis e nada de esperar por um serviço de quartos lento. Estas estadias têm uma.",
    },
    tip: {
      en: "For a week with school-age kids, an apartment with a kitchen often beats two hotel rooms on price and on sanity.",
      fr: "Pour une semaine avec des enfants scolarisés, un appartement avec cuisine bat souvent deux chambres d'hôtel sur le prix et sur les nerfs.",
      it: "Per una settimana con bambini in età scolare, un appartamento con cucina spesso batte due camere d'albergo sul prezzo e sui nervi.",
      de: "Für eine Woche mit Schulkindern schlägt eine Wohnung mit Küche oft zwei Hotelzimmer, beim Preis und bei den Nerven.",
      es: "Para una semana con niños en edad escolar, un apartamento con cocina suele ganar a dos habitaciones de hotel en precio y en cordura.",
      pt: "Para uma semana com crianças em idade escolar, um apartamento com cozinha ganha muitas vezes a dois quartos de hotel no preço e na sanidade mental.",
    },
  },
  {
    id: "toddler-friendly",
    emoji: "🧒",
    img: "poolTropicalMtn",
    accent: "ff6b4a",
    label: { en: "Toddler-friendly", fr: "Adapté aux tout-petits", it: "Adatto ai bimbi piccoli", de: "Für Kleinkinder geeignet", es: "Ideal para niños pequeños", pt: "Ideal para crianças pequenas" },
    short: { en: "Shallow pools, gentle pace, safe to roam", fr: "Piscines à fond plat, rythme doux, exploration sans danger", it: "Piscine basse, ritmo tranquillo, sicuri di gironzolare", de: "Flache Pools, ruhiges Tempo, sicher zum Umherlaufen", es: "Piscinas poco profundas, ritmo tranquilo y sitio seguro para moverse", pt: "Piscinas pouco fundas, ritmo tranquilo e espaço seguro para andar" },
    slug: { en: "toddler-friendly-hotels", fr: "hotels-adaptes-aux-tout-petits" },
    h1: { en: "Toddler-friendly family hotels", fr: "Hôtels adaptés aux tout-petits", it: "Hotel per famiglie adatti ai bimbi piccoli", de: "Familienhotels für Kleinkinder", es: "Hoteles familiares ideales para niños pequeños", pt: "Hotéis para famílias ideais para crianças pequenas" },
    intro: {
      en: "Toddlers need a shallow pool, safe space to roam, and a gentle pace. These hotels have a paddling area or shallow shelf and the calm, secure setting that suits ages one to three.",
      fr: "Les tout-petits ont besoin d'une piscine à fond plat, d'un espace sûr pour explorer et d'un rythme doux. Ces hôtels ont une pataugeoire ou un rebord peu profond et le cadre calme et sécurisé qui convient de un à trois ans.",
      it: "I bimbi piccoli hanno bisogno di una piscina bassa, di uno spazio sicuro dove gironzolare e di un ritmo tranquillo. Questi hotel hanno una zona per sguazzare o un gradino basso e l'ambiente calmo e sicuro che va bene dagli uno ai tre anni.",
      de: "Kleinkinder brauchen einen flachen Pool, sicheren Platz zum Umherlaufen und ein ruhiges Tempo. Diese Hotels haben ein Planschbecken oder eine flache Stufe und das ruhige, sichere Umfeld, das zu Ein- bis Dreijährigen passt.",
      es: "Los niños pequeños necesitan una piscina poco profunda, un sitio seguro para moverse y un ritmo tranquilo. Estos hoteles tienen una zona de chapoteo o un escalón poco profundo y el ambiente tranquilo y seguro que va bien de uno a tres años.",
      pt: "As crianças pequenas precisam de uma piscina pouco funda, de um espaço seguro para andar e de um ritmo tranquilo. Estes hotéis têm uma zona de chapinhar ou um degrau baixo e o ambiente calmo e seguro que serve dos um aos três anos.",
    },
    tip: {
      en: "A shallow, gated pool beats a big deep one at this age. Look for a paddling area rather than just a headline pool.",
      fr: "Une piscine à fond plat et clôturée vaut mieux qu'une grande piscine profonde à cet âge. Cherchez une pataugeoire plutôt qu'une simple grande piscine.",
      it: "A questa età una piscina bassa e recintata vale più di una grande e profonda. Cerca una zona per sguazzare invece della solita grande piscina.",
      de: "In diesem Alter ist ein flacher, eingezäunter Pool besser als ein großer, tiefer. Achtet auf ein Planschbecken statt nur auf den großen Vorzeigepool.",
      es: "A esta edad, una piscina poco profunda y vallada gana a una grande y honda. Busca una zona de chapoteo en lugar de solo la piscina principal.",
      pt: "Nesta idade, uma piscina pouco funda e vedada vale mais do que uma grande e funda. Procure uma zona de chapinhar em vez de só a piscina principal.",
    },
  },
  {
    id: "city-base",
    emoji: "🚋",
    img: "lisbonTram",
    accent: "ff9d1c",
    label: { en: "City base", fr: "En ville", it: "Base in città", de: "Stadtbasis", es: "Base urbana", pt: "Base na cidade" },
    short: { en: "Central, walkable bases for a city break with kids", fr: "Des bases centrales et à pied pour un city break en famille", it: "Basi centrali e comode a piedi per un city break con i bambini", de: "Zentrale, fußläufige Standorte für einen Städtetrip mit Kindern", es: "Bases céntricas y a pie para una escapada urbana con niños", pt: "Bases centrais e a pé para uma escapadinha à cidade com crianças" },
    slug: { en: "family-city-hotels", fr: "hotels-famille-en-ville" },
    h1: { en: "Family hotels for a city break", fr: "Hôtels famille pour un city break", it: "Hotel per famiglie per un city break", de: "Familienhotels für einen Städtetrip", es: "Hoteles familiares para una escapada urbana", pt: "Hotéis para famílias para uma escapadinha à cidade" },
    intro: {
      en: "A city break with kids lives or dies on where you sleep. These hotels are central, walkable and buggy-friendly, so the sightseeing is a joy and not a march.",
      fr: "Un city break avec des enfants se joue sur où vous dormez. Ces hôtels sont centraux, à pied et adaptés à la poussette, pour que les visites soient un plaisir et pas une marche forcée.",
      it: "Un city break con i bambini si gioca tutto su dove dormi. Questi hotel sono centrali, comodi a piedi e adatti al passeggino, così le visite sono un piacere e non una marcia forzata.",
      de: "Ein Städtetrip mit Kindern steht und fällt damit, wo ihr schlaft. Diese Hotels sind zentral, fußläufig und buggyfreundlich, damit das Sightseeing eine Freude ist und kein Gewaltmarsch.",
      es: "Una escapada urbana con niños se juega en dónde duermes. Estos hoteles son céntricos, cómodos a pie y aptos para el carrito, para que ver la ciudad sea un gusto y no una caminata.",
      pt: "Uma escapadinha à cidade com crianças joga-se em onde dormem. Estes hotéis são centrais, cómodos a pé e amigos do carrinho, para que passear seja um prazer e não uma marcha.",
    },
    tip: {
      en: "Prioritise flat, walkable neighbourhoods and a metro at the door. It matters more than the star rating with a pushchair.",
      fr: "Privilégiez les quartiers plats et à pied avec un métro devant. Ça compte plus que le nombre d'étoiles avec une poussette.",
      it: "Dai la priorità a quartieri pianeggianti e comodi a piedi con la metro davanti. Con un passeggino conta più del numero di stelle.",
      de: "Setzt auf flache, fußläufige Viertel und eine U-Bahn vor der Tür. Mit einem Kinderwagen zählt das mehr als die Sternekategorie.",
      es: "Prioriza barrios llanos y a pie con un metro en la puerta. Con un carrito importa más que el número de estrellas.",
      pt: "Dê prioridade a bairros planos e a pé com um metro à porta. Com um carrinho conta mais do que o número de estrelas.",
    },
  },
]);

backfillDeep(AMENITIES);

export const AMENITY_BY_ID = new Map(AMENITIES.map((a) => [a.id, a]));
