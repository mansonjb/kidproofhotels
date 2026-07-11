import type { ImgKey } from "@/lib/images";
import type { Activity, Faq, L10n, Stat } from "@/lib/types";
import { src } from "@/lib/l10n";

// Rich, per-destination content, merged onto the destinations in
// data/destinations.ts. Voice: parent to parent. No em-dashes.

export type DestExtra = {
  photos: ImgKey[];
  stats: Stat[];
  activities: Activity[];
  faqs: Faq[];
  parentTip: L10n;
  goodToKnow: L10n;
};

export const DEST_CONTENT: Record<string, DestExtra> = src({
  lisbon: {
    photos: ["lisbonTram", "coastTown", "poolDusk"],
    stats: [
      { value: "2 min", label: { en: "flat walk to the aquarium from our top pick", fr: "à plat jusqu'à l'aquarium depuis notre premier choix", it: "a piedi in piano fino all'acquario dal nostro preferito", de: "ebener Fußweg zum Aquarium von unserem Favoriten", es: "a pie y en llano hasta el acuario desde nuestro favorito", pt: "a pé e no plano até ao aquário a partir da nossa escolha" } },
      { value: "22°C", label: { en: "average sea temperature in summer", fr: "température moyenne de la mer en été", it: "temperatura media del mare in estate", de: "durchschnittliche Wassertemperatur im Sommer", es: "temperatura media del mar en verano", pt: "temperatura média do mar no verão" } },
      { value: "15 min", label: { en: "by metro from the flat riverside to the old centre", fr: "en métro du bord de fleuve plat au vieux centre", it: "in metro dal lungofiume pianeggiante al centro storico", de: "mit der Metro vom flachen Flussufer in die Altstadt", es: "en metro desde la ribera llana hasta el casco antiguo", pt: "de metro da zona ribeirinha plana até ao centro antigo" } },
    ],
    activities: [
      {
        emoji: "🐠",
        name: { en: "Oceanário de Lisboa", fr: "Oceanário de Lisbonne", it: "Oceanário de Lisboa", de: "Oceanário de Lisboa", es: "Oceanário de Lisboa", pt: "Oceanário de Lisboa" },
        detail: { en: "One of Europe's finest aquariums, and genuinely all-ages. Book the first slot of the day.", fr: "L'un des plus beaux aquariums d'Europe, vraiment tous âges. Réservez le premier créneau.", it: "Uno degli acquari più belli d'Europa, davvero per tutte le età. Prenotate il primo turno della giornata.", de: "Eines der schönsten Aquarien Europas, wirklich für jedes Alter. Bucht den ersten Slot des Tages.", es: "Uno de los mejores acuarios de Europa, de verdad para todas las edades. Reservad el primer turno del día.", pt: "Um dos melhores aquários da Europa, mesmo para todas as idades. Reservem o primeiro horário do dia." },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée", it: "Mezza giornata", de: "Halber Tag", es: "Medio día", pt: "Meio dia" },
      },
      {
        emoji: "🚋",
        name: { en: "Ride tram 28", fr: "Prendre le tram 28", it: "Un giro sul tram 28", de: "Mit der Tram 28 fahren", es: "Montar en el tranvía 28", pt: "Andar no elétrico 28" },
        detail: { en: "The rattling yellow tram through the hills. Go early and treat the ride itself as the outing.", fr: "Le tram jaune qui grince dans les collines. Tôt le matin, et le trajet devient la sortie.", it: "Il traballante tram giallo tra le colline. Andate presto e fate del tragitto stesso la gita.", de: "Die klappernde gelbe Tram durch die Hügel. Fahrt früh los und macht die Fahrt selbst zum Ausflug.", es: "El traqueteante tranvía amarillo por las colinas. Id temprano y que el trayecto sea la propia salida.", pt: "O amarelo elétrico a chocalhar pelas colinas. Vão cedo e façam da viagem o próprio passeio." },
        ages: ["kid", "teen"],
        time: { en: "2h", fr: "2h", it: "2h", de: "2h", es: "2h", pt: "2h" },
      },
      {
        emoji: "🥧",
        name: { en: "Belém and its pastries", fr: "Belém et ses pâtisseries", it: "Belém e i suoi pasticcini", de: "Belém und seine Pastéis", es: "Belém y sus pasteles", pt: "Belém e os seus pastéis" },
        detail: { en: "Warm custard tarts, riverside space to run, and the monastery for the grown-ups.", fr: "Pastéis chauds, espace au bord du fleuve pour courir, et le monastère pour les adultes.", it: "Pastéis caldi alla crema, spazio sul lungofiume per correre e il monastero per i grandi.", de: "Warme Puddingtörtchen, Platz am Fluss zum Toben und das Kloster für die Großen.", es: "Pastelitos de crema calientes, espacio junto al río para correr y el monasterio para los adultos.", pt: "Pastéis de nata quentinhos, espaço à beira-rio para correr e o mosteiro para os adultos." },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée", it: "Mezza giornata", de: "Halber Tag", es: "Medio día", pt: "Meio dia" },
      },
      {
        emoji: "🏰",
        name: { en: "São Jorge castle", fr: "Château São Jorge", it: "Castello di São Jorge", de: "Burg São Jorge", es: "Castillo de São Jorge", pt: "Castelo de São Jorge" },
        detail: { en: "Ramparts, cannons and peacocks. Take a tuk-tuk up to save little legs for the exploring.", fr: "Remparts, canons et paons. Montez en tuk-tuk pour garder les jambes pour l'exploration.", it: "Bastioni, cannoni e pavoni. Salite in tuk-tuk per risparmiare le gambette per l'esplorazione.", de: "Zinnen, Kanonen und Pfauen. Nehmt ein Tuk-Tuk nach oben, damit die kleinen Beine fürs Erkunden bleiben.", es: "Murallas, cañones y pavos reales. Subid en tuk-tuk para reservar las piernecitas para explorar.", pt: "Muralhas, canhões e pavões. Subam de tuk-tuk para poupar as perninhas para a exploração." },
        ages: ["kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée", it: "Mezza giornata", de: "Halber Tag", es: "Medio día", pt: "Meio dia" },
      },
    ],
    faqs: [
      {
        q: { en: "Is Lisbon doable with a buggy?", fr: "Lisbonne, c'est faisable en poussette ?", it: "Lisbona è fattibile con il passeggino?", de: "Ist Lissabon mit Kinderwagen machbar?", es: "¿Se puede con carrito en Lisboa?", pt: "Lisboa dá para fazer com carrinho de bebé?" },
        a: { en: "The old hills are hard work, but stay in flat Parque das Nações or on Avenida da Liberdade and it is easy. Trams and cable car help.", fr: "Les vieilles collines sont dures, mais logez dans le Parque das Nações plat ou sur l'Avenida da Liberdade et c'est facile. Trams et téléphérique aident.", it: "Le vecchie colline sono faticose, ma alloggiate nel piatto Parque das Nações o sull'Avenida da Liberdade ed è facile. Tram e funivia aiutano.", de: "Die alten Hügel sind anstrengend, aber wohnt im flachen Parque das Nações oder an der Avenida da Liberdade und es ist einfach. Trams und Seilbahn helfen.", es: "Las colinas antiguas cuestan, pero alojaos en el llano Parque das Nações o en la Avenida da Liberdade y es fácil. Los tranvías y el teleférico ayudan.", pt: "As colinas antigas dão trabalho, mas fiquem no plano Parque das Nações ou na Avenida da Liberdade e torna-se fácil. Os elétricos e o teleférico ajudam." },
      },
      {
        q: { en: "When is the best time to visit with kids?", fr: "Quelle est la meilleure période avec des enfants ?", it: "Qual è il periodo migliore per andare con i bambini?", de: "Wann ist die beste Reisezeit mit Kindern?", es: "¿Cuál es la mejor época para ir con niños?", pt: "Qual é a melhor altura para ir com crianças?" },
        a: { en: "May, June and September are warm but not scorching, with lighter crowds than high summer.", fr: "Mai, juin et septembre sont chauds sans être écrasants, avec moins de monde qu'en plein été.", it: "Maggio, giugno e settembre sono caldi ma non torridi, con meno folla della piena estate.", de: "Mai, Juni und September sind warm, aber nicht glühend heiß, mit weniger Andrang als im Hochsommer.", es: "Mayo, junio y septiembre son cálidos pero no abrasadores, con menos gente que en pleno verano.", pt: "Maio, junho e setembro são quentes mas não abrasadores, com menos gente do que no pico do verão." },
      },
      {
        q: { en: "Do many hotels have pools?", fr: "Beaucoup d'hôtels ont-ils une piscine ?", it: "Molti hotel hanno la piscina?", de: "Haben viele Hotels einen Pool?", es: "¿Muchos hoteles tienen piscina?", pt: "Muitos hotéis têm piscina?" },
        a: { en: "More than most European capitals, which is a real bonus in the summer heat. We flag pool depth on each hotel.", fr: "Plus que la plupart des capitales européennes, un vrai plus dans la chaleur estivale. On indique la profondeur sur chaque hôtel.", it: "Più della maggior parte delle capitali europee, un vero vantaggio con il caldo estivo. Segnaliamo la profondità della piscina per ogni hotel.", de: "Mehr als die meisten europäischen Hauptstädte, ein echter Pluspunkt in der Sommerhitze. Wir geben die Pooltiefe bei jedem Hotel an.", es: "Más que en la mayoría de capitales europeas, un plus de verdad con el calor del verano. Indicamos la profundidad de la piscina en cada hotel.", pt: "Mais do que na maioria das capitais europeias, uma verdadeira mais-valia no calor do verão. Assinalamos a profundidade da piscina em cada hotel." },
      },
    ],
    parentTip: {
      en: "Base yourself on the flat riverside and use the metro for the hills. You get the best of the city without the buggy battle.",
      fr: "Installez-vous sur le bord de fleuve plat et prenez le métro pour les collines. Le meilleur de la ville sans le combat de la poussette.",
      it: "Sistematevi sul lungofiume pianeggiante e usate la metro per le colline. Il meglio della città senza la battaglia del passeggino.",
      de: "Wohnt am flachen Flussufer und nehmt für die Hügel die Metro. So bekommt ihr das Beste der Stadt ohne den Kinderwagen-Kampf.",
      es: "Alojaos en la ribera llana y usad el metro para las colinas. Lo mejor de la ciudad sin la batalla del carrito.",
      pt: "Fiquem na zona ribeirinha plana e usem o metro para as colinas. O melhor da cidade sem a batalha do carrinho.",
    },
    goodToKnow: {
      en: "Lisbon's charm is its hills, and they are hard work with a pushchair. Where you sleep matters more here than almost anywhere.",
      fr: "Le charme de Lisbonne, ce sont ses collines, et elles sont pénibles en poussette. Où vous dormez compte plus ici que presque partout.",
      it: "Il fascino di Lisbona sono le sue colline, ed è faticoso con il passeggino. Dove dormite conta qui più che quasi ovunque.",
      de: "Lissabons Charme sind seine Hügel, und mit Kinderwagen sind sie anstrengend. Wo ihr schlaft, zählt hier mehr als fast überall.",
      es: "El encanto de Lisboa son sus colinas, y con carrito cuestan. Dónde dormís importa aquí más que en casi ningún sitio.",
      pt: "O encanto de Lisboa são as suas colinas, e com carrinho dão trabalho. Onde dormem conta aqui mais do que em quase qualquer lugar.",
    },
  },

  algarve: {
    photos: ["algarveCliffs", "deckLoungersSea", "whiteResortPool"],
    stats: [
      { value: "35 min", label: { en: "average transfer from Faro airport", fr: "transfert moyen depuis l'aéroport de Faro", it: "transfer medio dall'aeroporto di Faro", de: "durchschnittlicher Transfer vom Flughafen Faro", es: "traslado medio desde el aeropuerto de Faro", pt: "transfer médio a partir do aeroporto de Faro" } },
      { value: "3,000+", label: { en: "hours of sunshine a year", fr: "heures de soleil par an", it: "ore di sole all'anno", de: "Sonnenstunden pro Jahr", es: "horas de sol al año", pt: "horas de sol por ano" } },
      { value: "24°C", label: { en: "sea temperature in high summer", fr: "température de la mer en plein été", it: "temperatura del mare in piena estate", de: "Wassertemperatur im Hochsommer", es: "temperatura del mar en pleno verano", pt: "temperatura do mar no pico do verão" } },
    ],
    activities: [
      {
        emoji: "🏖️",
        name: { en: "Golden calm beaches", fr: "Plages dorées et calmes", it: "Spiagge dorate e tranquille", de: "Goldene, ruhige Strände", es: "Playas doradas y tranquilas", pt: "Praias douradas e calmas" },
        detail: { en: "Some of Europe's safest paddling: shallow, warm and sheltered. The daily default for a reason.", fr: "Parmi les baignades les plus sûres d'Europe : peu profondes, chaudes et abritées. Le programme quotidien pour de bonnes raisons.", it: "Tra i bagni più sicuri d'Europa: bassi, caldi e riparati. Il programma quotidiano per un motivo.", de: "Eines der sichersten Plantschgewässer Europas: flach, warm und geschützt. Nicht ohne Grund das tägliche Standardprogramm.", es: "De los baños más seguros de Europa: poco profundos, cálidos y resguardados. El plan diario por algo será.", pt: "Dos banhos mais seguros da Europa: rasos, quentes e abrigados. O programa de todos os dias por bons motivos." },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée", it: "Mezza giornata", de: "Halber Tag", es: "Medio día", pt: "Meio dia" },
      },
      {
        emoji: "🐬",
        name: { en: "Dolphin and cave boat trips", fr: "Sorties bateau dauphins et grottes", it: "Gite in barca tra delfini e grotte", de: "Bootstouren zu Delfinen und Grotten", es: "Paseos en barco de delfines y cuevas", pt: "Passeios de barco de golfinhos e grutas" },
        detail: { en: "Leave from Vilamoura and Albufeira. Pick a calm-morning slot with younger kids.", fr: "Partent de Vilamoura et Albufeira. Choisissez un créneau matin calme avec de jeunes enfants.", it: "Partono da Vilamoura e Albufeira. Con i più piccoli scegliete un turno mattutino con mare calmo.", de: "Starten in Vilamoura und Albufeira. Mit kleineren Kindern nehmt einen ruhigen Morgentermin.", es: "Salen de Vilamoura y Albufeira. Con los más pequeños elegid un turno de mañana con mar en calma.", pt: "Partem de Vilamoura e Albufeira. Com os mais pequenos, escolham um horário de manhã com mar calmo." },
        ages: ["kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée", it: "Mezza giornata", de: "Halber Tag", es: "Medio día", pt: "Meio dia" },
      },
      {
        emoji: "💦",
        name: { en: "Aquashow water park", fr: "Parc aquatique Aquashow", it: "Parco acquatico Aquashow", de: "Wasserpark Aquashow", es: "Parque acuático Aquashow", pt: "Parque aquático Aquashow" },
        detail: { en: "The region's big water park, with slides and a wave pool for a proper full day.", fr: "Le grand parc aquatique de la région, avec toboggans et piscine à vagues pour une vraie journée.", it: "Il grande parco acquatico della regione, con scivoli e piscina a onde per una giornata intera come si deve.", de: "Der große Wasserpark der Region, mit Rutschen und Wellenbad für einen richtigen ganzen Tag.", es: "El gran parque acuático de la región, con toboganes y piscina de olas para un día entero en condiciones.", pt: "O grande parque aquático da região, com escorregas e piscina de ondas para um dia inteiro em cheio." },
        ages: ["kid", "teen"],
        time: { en: "Full day", fr: "Journée", it: "Giornata intera", de: "Ganzer Tag", es: "Día completo", pt: "Dia inteiro" },
      },
      {
        emoji: "🦩",
        name: { en: "Ria Formosa nature", fr: "Nature de la Ria Formosa", it: "Natura della Ria Formosa", de: "Natur der Ria Formosa", es: "Naturaleza de la Ria Formosa", pt: "Natureza da Ria Formosa" },
        detail: { en: "Lagoons, flamingos and easy boardwalks. A gentle change of pace from the beach.", fr: "Lagunes, flamants et pontons faciles. Un changement de rythme doux après la plage.", it: "Lagune, fenicotteri e passerelle facili. Un dolce cambio di ritmo dopo la spiaggia.", de: "Lagunen, Flamingos und einfache Holzstege. Ein sanfter Tempowechsel weg vom Strand.", es: "Lagunas, flamencos y pasarelas fáciles. Un cambio de ritmo suave después de la playa.", pt: "Lagoas, flamingos e passadiços fáceis. Uma mudança de ritmo suave depois da praia." },
        ages: ["toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée", it: "Mezza giornata", de: "Halber Tag", es: "Medio día", pt: "Meio dia" },
      },
    ],
    faqs: [
      {
        q: { en: "Is the sea safe for young children?", fr: "La mer est-elle sûre pour les jeunes enfants ?", it: "Il mare è sicuro per i bambini piccoli?", de: "Ist das Meer für kleine Kinder sicher?", es: "¿El mar es seguro para niños pequeños?", pt: "O mar é seguro para crianças pequenas?" },
        a: { en: "Many Algarve beaches are shallow, calm and sheltered, among the safest in Europe. Always check the local flag.", fr: "Beaucoup de plages de l'Algarve sont peu profondes, calmes et abritées, parmi les plus sûres d'Europe. Vérifiez toujours le drapeau.", it: "Molte spiagge dell'Algarve sono basse, calme e riparate, tra le più sicure d'Europa. Controllate sempre la bandiera locale.", de: "Viele Strände der Algarve sind flach, ruhig und geschützt, unter den sichersten Europas. Achtet immer auf die Flagge vor Ort.", es: "Muchas playas del Algarve son poco profundas, tranquilas y resguardadas, de las más seguras de Europa. Comprobad siempre la bandera local.", pt: "Muitas praias do Algarve são rasas, calmas e abrigadas, das mais seguras da Europa. Verifiquem sempre a bandeira local." },
      },
      {
        q: { en: "When is best for a family?", fr: "Quelle est la meilleure période en famille ?", it: "Qual è il periodo migliore per una famiglia?", de: "Wann ist die beste Zeit für Familien?", es: "¿Cuál es la mejor época para una familia?", pt: "Qual é a melhor altura para uma família?" },
        a: { en: "June and September are ideal: warm sea, big-resort facilities open, and better value than August.", fr: "Juin et septembre sont idéaux : mer chaude, resorts ouverts, et meilleur rapport qualité-prix qu'en août.", it: "Giugno e settembre sono ideali: mare caldo, servizi dei grandi resort aperti e prezzi migliori di agosto.", de: "Juni und September sind ideal: warmes Meer, geöffnete Einrichtungen der großen Resorts und ein besseres Preis-Leistungs-Verhältnis als im August.", es: "Junio y septiembre son ideales: mar cálido, instalaciones de los grandes resorts abiertas y mejor precio que agosto.", pt: "Junho e setembro são ideais: mar quente, serviços dos grandes resorts abertos e melhor preço do que em agosto." },
      },
      {
        q: { en: "Do we need a hire car?", fr: "Faut-il louer une voiture ?", it: "Serve un'auto a noleggio?", de: "Brauchen wir einen Mietwagen?", es: "¿Necesitamos coche de alquiler?", pt: "Precisamos de alugar carro?" },
        a: { en: "Not if you pick an all-in resort. A car helps for water parks, dolphin trips and quieter beaches.", fr: "Pas si vous choisissez un resort tout compris. Une voiture aide pour les parcs aquatiques, dauphins et plages calmes.", it: "No, se scegliete un resort tutto incluso. L'auto aiuta per parchi acquatici, gite coi delfini e spiagge più tranquille.", de: "Nicht, wenn ihr ein All-inclusive-Resort wählt. Ein Auto hilft für Wasserparks, Delfintouren und ruhigere Strände.", es: "No si elegís un resort todo incluido. El coche ayuda para parques acuáticos, salidas de delfines y playas más tranquilas.", pt: "Não, se escolherem um resort tudo incluído. O carro ajuda para parques aquáticos, passeios de golfinhos e praias mais calmas." },
      },
    ],
    parentTip: {
      en: "Book a resort with a free kids club and you buy yourself an actual holiday, not just a location change.",
      fr: "Réservez un resort avec club enfants gratuit et vous vous offrez de vraies vacances, pas juste un changement de décor.",
      it: "Prenotate un resort con miniclub gratuito e vi regalate una vera vacanza, non solo un cambio di scenario.",
      de: "Bucht ein Resort mit kostenlosem Kids-Club und ihr schenkt euch einen echten Urlaub, nicht nur einen Ortswechsel.",
      es: "Reservad un resort con miniclub gratis y os regaláis unas vacaciones de verdad, no solo un cambio de sitio.",
      pt: "Reservem um resort com clube infantil gratuito e ganham umas férias a sério, não apenas uma mudança de sítio.",
    },
    goodToKnow: {
      en: "Some clifftop resorts have a steep climb back from the beach. Lovely views, hard work with a buggy, so check the access.",
      fr: "Certains resorts en haut de falaise ont une remontée raide depuis la plage. Belles vues, pénible en poussette, vérifiez l'accès.",
      it: "Alcuni resort in cima alla scogliera hanno una risalita ripida dalla spiaggia. Belle viste, faticoso col passeggino, quindi controllate l'accesso.",
      de: "Manche Klippen-Resorts haben einen steilen Aufstieg vom Strand zurück. Schöne Aussicht, mit Kinderwagen anstrengend, prüft also den Zugang.",
      es: "Algunos resorts en lo alto del acantilado tienen una subida empinada desde la playa. Vistas preciosas, duro con carrito, así que mirad el acceso.",
      pt: "Alguns resorts no topo da falésia têm uma subida íngreme desde a praia. Vistas lindas, difícil com carrinho, por isso confirmem o acesso.",
    },
  },

  "costa-del-sol": {
    photos: ["poolOrange", "hotelTowerGreen", "villaPink"],
    stats: [
      { value: "20 min", label: { en: "average transfer from Málaga airport", fr: "transfert moyen depuis l'aéroport de Málaga", it: "transfer medio dall'aeroporto di Málaga", de: "durchschnittlicher Transfer vom Flughafen Málaga", es: "traslado medio desde el aeropuerto de Málaga", pt: "transfer médio a partir do aeroporto de Málaga" } },
      { value: "320", label: { en: "days of sunshine a year", fr: "jours de soleil par an", it: "giorni di sole all'anno", de: "Sonnentage pro Jahr", es: "días de sol al año", pt: "dias de sol por ano" } },
      { value: "5+", label: { en: "big water parks within easy reach", fr: "grands parcs aquatiques à portée", it: "grandi parchi acquatici a portata di mano", de: "große Wasserparks in bequemer Reichweite", es: "grandes parques acuáticos a mano", pt: "grandes parques aquáticos ali à mão" } },
    ],
    activities: [
      {
        emoji: "🎢",
        name: { en: "Water parks galore", fr: "Des parcs aquatiques à foison", it: "Parchi acquatici a volontà", de: "Wasserparks in Hülle und Fülle", es: "Parques acuáticos a montones", pt: "Parques aquáticos com fartura" },
        detail: { en: "Several big water parks within reach, plus on-site aqua parks at the family resorts.", fr: "Plusieurs grands parcs aquatiques à proximité, plus des parcs sur place dans les resorts familiaux.", it: "Diversi grandi parchi acquatici a portata, più aquapark interni nei resort per famiglie.", de: "Mehrere große Wasserparks in Reichweite, dazu hauseigene Aquaparks in den Familienresorts.", es: "Varios grandes parques acuáticos a mano, además de zonas acuáticas dentro de los resorts familiares.", pt: "Vários grandes parques aquáticos por perto, além de aquaparques dentro dos resorts para famílias." },
        ages: ["kid", "teen"],
        time: { en: "Full day", fr: "Journée", it: "Giornata intera", de: "Ganzer Tag", es: "Día completo", pt: "Dia inteiro" },
      },
      {
        emoji: "🚠",
        name: { en: "Benalmádena cable car", fr: "Téléphérique de Benalmádena", it: "Funivia di Benalmádena", de: "Seilbahn von Benalmádena", es: "Teleférico de Benalmádena", pt: "Teleférico de Benalmádena" },
        detail: { en: "Up the mountain for the view and a birds-of-prey show. A break from the water.", fr: "En haut de la montagne pour la vue et un spectacle de rapaces. Une pause loin de l'eau.", it: "Su in montagna per il panorama e uno spettacolo di rapaci. Una pausa dall'acqua.", de: "Hoch auf den Berg für die Aussicht und eine Greifvogelshow. Eine Pause vom Wasser.", es: "Arriba a la montaña por las vistas y un espectáculo de aves rapaces. Un respiro del agua.", pt: "Até ao alto da montanha pela vista e um espetáculo de aves de rapina. Uma pausa da água." },
        ages: ["kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée", it: "Mezza giornata", de: "Halber Tag", es: "Medio día", pt: "Meio dia" },
      },
      {
        emoji: "🐧",
        name: { en: "Sea Life and aquariums", fr: "Sea Life et aquariums", it: "Sea Life e acquari", de: "Sea Life und Aquarien", es: "Sea Life y acuarios", pt: "Sea Life e aquários" },
        detail: { en: "Toddler-friendly and a great too-hot-to-move backup on the fiercest afternoons.", fr: "Adapté aux tout-petits et un super plan B les après-midis trop chauds.", it: "Adatto ai più piccoli e un ottimo piano B nei pomeriggi troppo caldi per muoversi.", de: "Kleinkindfreundlich und ein toller Rückzug an den heißesten Nachmittagen, wenn nichts mehr geht.", es: "Ideal para los más pequeños y un gran plan B en las tardes de demasiado calor para moverse.", pt: "Bom para os mais pequenos e um ótimo plano B nas tardes quentes demais para sair." },
        ages: ["baby", "toddler", "kid"],
        time: { en: "2h", fr: "2h", it: "2h", de: "2h", es: "2h", pt: "2h" },
      },
      {
        emoji: "🏰",
        name: { en: "Marbella old town", fr: "Vieille ville de Marbella", it: "Centro storico di Marbella", de: "Altstadt von Marbella", es: "Casco antiguo de Marbella", pt: "Centro histórico de Marbella" },
        detail: { en: "Orange-tree squares, gelato and gentle, pushchair-friendly streets for a slower morning.", fr: "Places aux orangers, glaces et rues douces adaptées à la poussette pour une matinée tranquille.", it: "Piazze con aranci, gelato e stradine dolci adatte al passeggino per una mattinata più lenta.", de: "Plätze mit Orangenbäumen, Eis und sanfte, kinderwagenfreundliche Gassen für einen ruhigeren Morgen.", es: "Plazas con naranjos, helado y calles suaves aptas para carrito para una mañana más tranquila.", pt: "Praças com laranjeiras, gelado e ruas suaves acessíveis a carrinho para uma manhã mais calma." },
        ages: ["baby", "toddler", "kid", "teen"],
        time: { en: "Half day", fr: "Demi-journée", it: "Mezza giornata", de: "Halber Tag", es: "Medio día", pt: "Meio dia" },
      },
    ],
    faqs: [
      {
        q: { en: "Is it good for the water-slide age?", fr: "Est-ce bien pour l'âge des toboggans ?", it: "È adatto all'età degli scivoli acquatici?", de: "Ist es das richtige Alter für Wasserrutschen?", es: "¿Es bueno para la edad de los toboganes de agua?", pt: "É bom para a idade dos escorregas de água?" },
        a: { en: "It is the best stretch of coast for it: on-site aqua parks plus several big water parks nearby.", fr: "C'est le meilleur littoral pour ça : parcs aquatiques sur place plus plusieurs grands parcs à proximité.", it: "È il tratto di costa migliore per questo: aquapark interni più diversi grandi parchi acquatici nelle vicinanze.", de: "Es ist der beste Küstenabschnitt dafür: hauseigene Aquaparks plus mehrere große Wasserparks in der Nähe.", es: "Es el mejor tramo de costa para eso: zonas acuáticas dentro del hotel más varios grandes parques acuáticos cerca.", pt: "É o melhor troço de costa para isso: aquaparques dentro do hotel e vários grandes parques aquáticos ali perto." },
      },
      {
        q: { en: "Are family rooms easy to find?", fr: "Les chambres familiales sont-elles faciles à trouver ?", it: "È facile trovare camere per famiglie?", de: "Sind Familienzimmer leicht zu finden?", es: "¿Es fácil encontrar habitaciones familiares?", pt: "É fácil encontrar quartos familiares?" },
        a: { en: "Yes. Family rooms and interconnecting options are the norm at the big resorts here, not the exception.", fr: "Oui. Chambres familiales et communicantes sont la norme dans les grands resorts d'ici, pas l'exception.", it: "Sì. Camere per famiglie e comunicanti sono la norma nei grandi resort di qui, non l'eccezione.", de: "Ja. Familienzimmer und Verbindungszimmer sind in den großen Resorts hier die Norm, nicht die Ausnahme.", es: "Sí. Las habitaciones familiares y comunicadas son la norma en los grandes resorts de aquí, no la excepción.", pt: "Sim. Quartos familiares e comunicantes são a norma nos grandes resorts daqui, não a exceção." },
      },
      {
        q: { en: "When should we go?", fr: "Quand faut-il y aller ?", it: "Quando conviene andare?", de: "Wann sollten wir fahren?", es: "¿Cuándo deberíamos ir?", pt: "Quando devemos ir?" },
        a: { en: "Sunshine is near-guaranteed from May to October, with a long shoulder season either side of the August peak.", fr: "Le soleil est quasi garanti de mai à octobre, avec une longue mi-saison de part et d'autre du pic d'août.", it: "Il sole è quasi garantito da maggio a ottobre, con una lunga bassa stagione ai lati del picco di agosto.", de: "Sonne ist von Mai bis Oktober fast garantiert, mit einer langen Nebensaison beiderseits der Augustspitze.", es: "El sol está casi garantizado de mayo a octubre, con una larga temporada media a ambos lados del pico de agosto.", pt: "O sol está quase garantido de maio a outubro, com uma longa época intermédia de cada lado do pico de agosto." },
      },
    ],
    parentTip: {
      en: "Match the resort to your kids' ages: a splash zone for toddlers, big flumes for older kids. We flag which is which.",
      fr: "Adaptez le resort à l'âge des enfants : zone à jets pour les tout-petits, grands toboggans pour les plus grands. On l'indique.",
      it: "Scegliete il resort in base all'età dei bambini: zona spruzzi per i piccoli, grandi scivoli per i più grandi. Ve lo segnaliamo.",
      de: "Wählt das Resort nach dem Alter der Kinder: Planschbereich für Kleinkinder, große Rutschen für Ältere. Wir zeigen, was was ist.",
      es: "Elegid el resort según la edad de los niños: zona de chapoteo para los pequeños, grandes toboganes para los mayores. Os lo señalamos.",
      pt: "Escolham o resort conforme a idade dos filhos: zona de salpicos para os pequenos, grandes escorregas para os mais velhos. Nós indicamos qual é qual.",
    },
    goodToKnow: {
      en: "Resorts here are big and lively. Wonderful for water-loving kids, but ask for a quiet-side room if you have a napping baby.",
      fr: "Les resorts d'ici sont grands et animés. Formidable pour les enfants qui aiment l'eau, mais demandez une chambre côté calme avec un bébé qui fait la sieste.",
      it: "I resort di qui sono grandi e vivaci. Meravigliosi per i bambini che amano l'acqua, ma chiedete una camera sul lato tranquillo se avete un neonato che fa il pisolino.",
      de: "Die Resorts hier sind groß und lebhaft. Herrlich für wasserbegeisterte Kinder, aber fragt nach einem Zimmer auf der ruhigen Seite, wenn ein Baby Mittagsschlaf hält.",
      es: "Los resorts de aquí son grandes y animados. Maravillosos para niños que aman el agua, pero pedid una habitación en la zona tranquila si tenéis un bebé que duerme la siesta.",
      pt: "Os resorts daqui são grandes e animados. Maravilhosos para crianças que adoram água, mas peçam um quarto no lado sossegado se tiverem um bebé a dormir a sesta.",
    },
  },
});
