import fs from 'fs';

const PATH = new URL('../data/hotels/crete.json', import.meta.url);
const raw = fs.readFileSync(PATH, 'utf8');
const data = JSON.parse(raw);

// Translation map keyed by exact English source string.
// Each value: { it, de, es, pt }
const T = {};
function add(en, it, de, es, pt) { T[en] = { it, de, es, pt }; }

// === ENTRIES INSERTED BELOW ===
// --- shared place/area names (proper names kept as-is) ---
add("Kato Daratso, Chania", "Kato Daratso, Chania", "Kato Daratso, Chania", "Kato Daratso, Chania", "Kato Daratso, Chania");
add("Missiria, Rethymno", "Missiria, Rethymno", "Missiria, Rethymno", "Missiria, Rethymno", "Missiria, Rethymno");
add("Georgioupolis", "Georgioupolis", "Georgioupolis", "Georgioupolis", "Georgioupolis");
add("Hersonissos", "Hersonissos", "Hersonissos", "Hersonissos", "Hersonissos");
add("Agios Nikolaos (Mirabello Bay)", "Agios Nikolaos (baia di Mirabello)", "Agios Nikolaos (Mirabello-Bucht)", "Agios Nikolaos (bahía de Mirabello)", "Agios Nikolaos (baía de Mirabello)");
add("Elounda", "Elounda", "Elounda", "Elounda", "Elounda");
add("Heraklion", "Heraklion", "Heraklion", "Heraklion", "Heraklion");
add("Bali, Rethymno", "Bali, Rethymno", "Bali, Rethymno", "Bali, Rethymno", "Bali, Rethymno");

// --- shared short labels / time codes ---
add("Beach", "Spiaggia", "Strand", "Playa", "Praia");
add("Kids club", "Miniclub", "Kinderclub", "Club infantil", "Clube infantil");
add("Creche", "Nido", "Kinderkrippe", "Guardería", "Creche");
add("Pools", "Piscine", "Pools", "Piscinas", "Piscinas");
add("Pool", "Piscina", "Pool", "Piscina", "Piscina");
add("Dining", "Ristorazione", "Verpflegung", "Restauración", "Restauração");
add("Airport", "Aeroporto", "Flughafen", "Aeropuerto", "Aeroporto");
add("Kids pool", "Piscina per bambini", "Kinderbecken", "Piscina infantil", "Piscina infantil");
add("Parents", "Genitori", "Eltern", "Padres", "Pais");
add("Aqua park", "Parco acquatico", "Wasserpark", "Parque acuático", "Parque aquático");
add("Rooms", "Camere", "Zimmer", "Habitaciones", "Quartos");
add("Town", "Città", "Stadt", "Ciudad", "Cidade");
add("Board", "Trattamento", "Verpflegung", "Régimen", "Regime");
add("Knossos", "Knossos", "Knossos", "Knossos", "Knossos");
add("Self-catering", "Cucina propria", "Selbstverpflegung", "Con cocina", "Com cozinha");
add("Buggies", "Passeggini", "Kinderwagen", "Cochecitos", "Carrinhos");
add("Getting around", "Spostamenti", "Fortbewegung", "Desplazamientos", "Deslocações");
add("Waterpark", "Parco acquatico", "Wasserpark", "Parque acuático", "Parque aquático");
add("Setting", "Contesto", "Lage", "Entorno", "Cenário");
add("Type", "Tipo", "Art", "Tipo", "Tipo");
add("Old town", "Città vecchia", "Altstadt", "Casco antiguo", "Cidade velha");
add("Eating", "Ristoranti", "Essen", "Restaurantes", "Restaurantes");
add("Value", "Prezzo", "Preis-Leistung", "Precio", "Preço");

add("Morning", "Mattina", "Vormittag", "Mañana", "Manhã");
add("Afternoon", "Pomeriggio", "Nachmittag", "Tarde", "Tarde");
add("Evening", "Sera", "Abend", "Noche", "Noite");
add("Half day", "Mezza giornata", "Halbtags", "Media jornada", "Meio dia");
add("Full day", "Giornata intera", "Ganztags", "Jornada completa", "Dia inteiro");
add("Half or full day", "Mezza giornata o giornata intera", "Halb- oder ganztags", "Media jornada o jornada completa", "Meio dia ou dia inteiro");
add("1 to 2 hours", "1-2 ore", "1 bis 2 Stunden", "1 a 2 horas", "1 a 2 horas");
add("1 hour", "1 ora", "1 Stunde", "1 hora", "1 hora");

// === HOTEL 1: Domes Zeen Chania ===
add("Low-slung bungalows and suites arranged around a leafy central agora, many with a private or semi-private pool a step from the terrace. The Family Bungalows and Open Plan Suites add a separate living area, so you can put little ones down and still have your own space and your own plunge pool for the evening.",
"Bungalow bassi e suite disposti attorno a un'agora centrale immersa nel verde, molti con piscina privata o semiprivata a un passo dalla terrazza. Le Family Bungalow e le Open Plan Suite aggiungono un soggiorno separato: mettete a nanna i più piccoli e conservate il vostro spazio e la vostra piscinetta privata per la sera.",
"Flache Bungalows und Suiten rund um eine grüne zentrale Agora, viele mit privatem oder halbprivatem Pool nur einen Schritt von der Terrasse entfernt. Die Family Bungalows und Open Plan Suites bieten einen separaten Wohnbereich: So bringt ihr die Kleinen zu Bett und behaltet euren eigenen Raum und euren eigenen Plunge Pool für den Abend.",
"Bungalows bajos y suites dispuestos en torno a un ágora central llena de vegetación, muchos con piscina privada o semiprivada a un paso de la terraza. Los Family Bungalows y las Open Plan Suites añaden un salón aparte: acostáis a los peques y conserváis vuestro propio espacio y vuestra piscina privada para la noche.",
"Bungalows baixos e suites dispostos em torno de uma ágora central cheia de verde, muitos com piscina privada ou semiprivada a um passo do terraço. Os Family Bungalows e as Open Plan Suites acrescentam uma sala separada: deitam os mais pequenos e mantêm o vosso espaço e a vossa piscina privada para a noite.");

add("A design-led beachfront resort just west of Chania town, Domes Zeen wraps a private cove in gardens, agora squares and bungalows built to feel like a Cretan village. It is polished and expensive, but genuinely built for families: the Montessori kids club is free, under-12s eat and play for free, and the whole thing is small enough to feel calm rather than overwhelming.",
"Resort di design fronte mare appena a ovest della città di Chania, Domes Zeen avvolge una cala privata tra giardini, piazzette in stile agora e bungalow pensati come un villaggio cretese. È curato e costoso, ma davvero concepito per le famiglie: il miniclub Montessori è gratuito, gli under 12 mangiano e giocano gratis e l'insieme è abbastanza piccolo da restare tranquillo anziché opprimente.",
"Ein designorientiertes Strandresort direkt westlich der Stadt Chania: Domes Zeen umrahmt eine private Bucht mit Gärten, Agora-Plätzen und Bungalows, die wie ein kretisches Dorf wirken. Es ist edel und teuer, aber wirklich für Familien gemacht: Der Montessori-Kinderclub ist kostenlos, unter 12-Jährige essen und spielen gratis, und das Ganze ist klein genug, um ruhig statt überwältigend zu wirken.",
"Un resort de diseño frente al mar justo al oeste del pueblo de Chania, Domes Zeen envuelve una cala privada entre jardines, placitas tipo ágora y bungalows pensados como un pueblo cretense. Es cuidado y caro, pero de verdad hecho para familias: el club infantil Montessori es gratuito, los menores de 12 comen y juegan gratis, y el conjunto es lo bastante pequeño para sentirse tranquilo y no abrumador.",
"Um resort de design à beira-mar logo a oeste da vila de Chania, o Domes Zeen envolve uma enseada privada em jardins, pracetas ao estilo de ágora e bungalows pensados como uma aldeia cretense. É cuidado e caro, mas verdadeiramente feito para famílias: o clube infantil Montessori é gratuito, os menores de 12 comem e brincam de graça, e o conjunto é pequeno o suficiente para ser tranquilo em vez de esmagador.");

add("Free Montessori kids club for ages 4 to 12, with yurts and teepees for imaginative play",
"Miniclub Montessori gratuito dai 4 ai 12 anni, con yurte e tepee per il gioco di fantasia",
"Kostenloser Montessori-Kinderclub für 4- bis 12-Jährige, mit Jurten und Tipis für fantasievolles Spiel",
"Club infantil Montessori gratuito de 4 a 12 años, con yurtas y tipis para el juego imaginativo",
"Clube infantil Montessori gratuito dos 4 aos 12 anos, com iurtes e tipis para a brincadeira de faz de conta");
add("Creche for babies and toddlers from 6 months (paid), so even the youngest are covered",
"Nido per neonati e piccolissimi dai 6 mesi (a pagamento), così anche i più piccoli sono seguiti",
"Kinderkrippe für Babys und Kleinkinder ab 6 Monaten (kostenpflichtig), damit auch die Jüngsten versorgt sind",
"Guardería para bebés y muy pequeños desde los 6 meses (de pago), así hasta los más chicos están cubiertos",
"Creche para bebés e mais pequenos a partir dos 6 meses (paga), para que até os mais novos estejam acompanhados");
add("Family Bungalows and suites with private or semi-private plunge pools",
"Family Bungalow e suite con piscinetta privata o semiprivata",
"Family Bungalows und Suiten mit privatem oder halbprivatem Plunge Pool",
"Family Bungalows y suites con piscina privada o semiprivada",
"Family Bungalows e suites com piscina privada ou semiprivada");
add("A sheltered private beach cove with calm, shallow water at the shore",
"Una cala privata riparata con acqua calma e bassa vicino alla riva",
"Eine geschützte private Strandbucht mit ruhigem, flachem Wasser am Ufer",
"Una cala privada resguardada con agua tranquila y poco profunda en la orilla",
"Uma enseada privada abrigada com água calma e pouco funda junto à margem");
add("Separate adult and family pool areas, so parents get quiet time too",
"Zone piscina separate per adulti e famiglie, così anche i genitori hanno un po' di pace",
"Getrennte Pool-Bereiche für Erwachsene und Familien, damit auch die Eltern zur Ruhe kommen",
"Zonas de piscina separadas para adultos y familias, así los padres también tienen calma",
"Zonas de piscina separadas para adultos e famílias, para que os pais também tenham sossego");
add("Under-12s stay, eat and play for free on many rates",
"Gli under 12 soggiornano, mangiano e giocano gratis su molte tariffe",
"Unter 12-Jährige übernachten, essen und spielen bei vielen Tarifen gratis",
"Los menores de 12 se alojan, comen y juegan gratis en muchas tarifas",
"Os menores de 12 ficam, comem e brincam de graça em muitas tarifas");

add("Free kids club and free under-12 policy take real money off the bill",
"Miniclub gratuito e gratuità per gli under 12 alleggeriscono davvero il conto",
"Kostenloser Kinderclub und Gratis-Regelung für unter 12-Jährige senken die Rechnung spürbar",
"Club infantil gratuito y gratuidad para menores de 12 rebajan de verdad la cuenta",
"Clube infantil gratuito e gratuidade para menores de 12 aliviam mesmo a conta");
add("Small, calm and beautifully designed, not a mega-resort",
"Piccolo, tranquillo e curato nei dettagli, non un mega-resort",
"Klein, ruhig und wunderschön gestaltet, kein Mega-Resort",
"Pequeño, tranquilo y bellamente diseñado, no un macrorresort",
"Pequeno, tranquilo e lindamente desenhado, não um mega-resort");
add("Private plunge pools make nap times and evenings easy",
"Le piscinette private semplificano pisolini e serate",
"Private Plunge Pools machen Mittagsschlaf und Abende leicht",
"Las piscinas privadas facilitan las siestas y las noches",
"As piscinas privadas facilitam as sestas e as noites");

add("Premium prices, and spa, creche and some dining are extra",
"Prezzi premium, e spa, nido e alcuni ristoranti sono a parte",
"Premium-Preise, und Spa, Krippe und einige Restaurants kosten extra",
"Precios premium, y spa, guardería y parte de la restauración son aparte",
"Preços premium, e spa, creche e alguma restauração são à parte");
add("The cove beach is small, so it is more about the pools than long sandy walks",
"La spiaggia della cala è piccola, quindi si punta più sulle piscine che su lunghe passeggiate sulla sabbia",
"Der Buchtstrand ist klein, es geht also eher um die Pools als um lange Strandspaziergänge",
"La playa de la cala es pequeña, así que se disfruta más de las piscinas que de largos paseos por la arena",
"A praia da enseada é pequena, por isso conta mais com as piscinas do que com longos passeios pela areia");
add("Chania old town is a short taxi ride, not walkable with a buggy",
"La città vecchia di Chania è a un breve tragitto in taxi, non raggiungibile a piedi col passeggino",
"Die Altstadt von Chania ist eine kurze Taxifahrt entfernt, nicht mit dem Kinderwagen zu Fuß erreichbar",
"El casco antiguo de Chania está a un breve trayecto en taxi, no se llega a pie con el cochecito",
"O centro histórico de Chania fica a uma curta viagem de táxi, não dá para ir a pé com o carrinho");

add("The smart 5-star choice for families who want design, calm and a free kids club without a sprawling resort. Book a Family Bungalow with a plunge pool and lean on the free under-12 policy to justify the splurge.",
"La scelta 5 stelle intelligente per le famiglie che vogliono design, tranquillità e un miniclub gratuito senza un resort sconfinato. Prenotate un Family Bungalow con piscinetta e sfruttate la gratuità per gli under 12 per giustificare la spesa.",
"Die clevere 5-Sterne-Wahl für Familien, die Design, Ruhe und einen kostenlosen Kinderclub ohne weitläufiges Resort wollen. Bucht einen Family Bungalow mit Plunge Pool und nutzt die Gratis-Regelung für unter 12-Jährige, um die Ausgabe zu rechtfertigen.",
"La opción de 5 estrellas inteligente para familias que quieren diseño, calma y un club infantil gratuito sin un resort inabarcable. Reservad un Family Bungalow con piscina y apoyaos en la gratuidad de los menores de 12 para justificar el capricho.",
"A escolha de 5 estrelas inteligente para famílias que querem design, calma e um clube infantil gratuito sem um resort imenso. Reservem um Family Bungalow com piscina e apoiem-se na gratuidade dos menores de 12 para justificar o gasto.");

add("Ask for a bungalow near the family pool rather than the adult zone: shorter wet-footed walks back for snacks, towels and forgotten armbands.",
"Chiedete un bungalow vicino alla piscina delle famiglie anziché alla zona adulti: tragitti più brevi a piedi bagnati per merende, asciugamani e braccioli dimenticati.",
"Bittet um einen Bungalow nahe dem Familienpool statt am Erwachsenenbereich: kürzere Wege mit nassen Füßen für Snacks, Handtücher und vergessene Schwimmflügel.",
"Pedid un bungalow cerca de la piscina familiar y no de la zona de adultos: caminos más cortos con los pies mojados para meriendas, toallas y manguitos olvidados.",
"Peçam um bungalow perto da piscina das famílias em vez da zona de adultos: caminhos mais curtos de pés molhados para lanches, toalhas e braçadeiras esquecidas.");

add("Private cove, calm shallow shore", "Cala privata, riva calma e bassa", "Private Bucht, ruhiges flaches Ufer", "Cala privada, orilla tranquila y poco profunda", "Enseada privada, margem calma e pouco funda");
add("Free, ages 4 to 12 (Montessori)", "Gratuito, dai 4 ai 12 anni (Montessori)", "Kostenlos, 4 bis 12 Jahre (Montessori)", "Gratuito, de 4 a 12 años (Montessori)", "Gratuito, dos 4 aos 12 anos (Montessori)");
add("From 6 months, paid", "Dai 6 mesi, a pagamento", "Ab 6 Monaten, kostenpflichtig", "Desde 6 meses, de pago", "A partir dos 6 meses, pago");
add("Family and adult pools, plunge pools", "Piscine per famiglie e adulti, piscinette private", "Familien- und Erwachsenenpools, Plunge Pools", "Piscinas familiares y de adultos, piscinas privadas", "Piscinas para famílias e adultos, piscinas privadas");
add("Under-12s eat free on many rates", "Under 12 mangiano gratis su molte tariffe", "Unter 12-Jährige essen bei vielen Tarifen gratis", "Menores de 12 comen gratis en muchas tarifas", "Menores de 12 comem grátis em muitas tarifas");
add("About 20 min from Chania", "A circa 20 min da Chania", "Etwa 20 Min. von Chania", "A unos 20 min de Chania", "A cerca de 20 min de Chania");

add("Montessori kids club", "Miniclub Montessori", "Montessori-Kinderclub", "Club infantil Montessori", "Clube infantil Montessori");
add("Free supervised play in yurts and teepees, with crafts, gardening and nature games.",
"Gioco libero e sorvegliato in yurte e tepee, con laboratori, giardinaggio e giochi nella natura.",
"Kostenloses betreutes Spiel in Jurten und Tipis, mit Basteln, Gärtnern und Naturspielen.",
"Juego libre supervisado en yurtas y tipis, con manualidades, jardinería y juegos en la naturaleza.",
"Brincadeira livre e supervisionada em iurtes e tipis, com trabalhos manuais, jardinagem e jogos na natureza.");
add("Cove beach morning", "Mattina in spiaggia nella cala", "Strandvormittag in der Bucht", "Mañana de playa en la cala", "Manhã de praia na enseada");
add("Calm, shallow water in a sheltered cove, ideal for a first paddle with little ones.",
"Acqua calma e bassa in una cala riparata, ideale per un primo bagno con i più piccoli.",
"Ruhiges, flaches Wasser in einer geschützten Bucht, ideal für das erste Planschen mit den Kleinen.",
"Agua tranquila y poco profunda en una cala resguardada, ideal para un primer chapuzón con los peques.",
"Água calma e pouco funda numa enseada abrigada, ideal para um primeiro banho com os mais pequenos.");
add("Chania old town trip", "Gita nella città vecchia di Chania", "Ausflug in die Altstadt von Chania", "Excursión al casco antiguo de Chania", "Passeio ao centro histórico de Chania");
add("A short taxi ride to the Venetian harbour, ice cream and easy pram-friendly lanes.",
"Un breve taxi fino al porto veneziano, gelato e viuzze comode per il passeggino.",
"Eine kurze Taxifahrt zum venezianischen Hafen, Eis und bequeme, kinderwagenfreundliche Gassen.",
"Un breve taxi hasta el puerto veneciano, helado y callejuelas cómodas para el cochecito.",
"Uma curta viagem de táxi até ao porto veneziano, gelado e ruelas fáceis para o carrinho.");
add("Family Cretan dinner", "Cena cretese in famiglia", "Kretisches Familienessen", "Cena cretense en familia", "Jantar cretense em família");
add("Local menus at the resort tavernas, with under-12s eating free on many rates.",
"Menù locali nelle taverne del resort, con under 12 che mangiano gratis su molte tariffe.",
"Lokale Menüs in den Tavernen des Resorts, unter 12-Jährige essen bei vielen Tarifen gratis.",
"Menús locales en las tabernas del resort, con menores de 12 que comen gratis en muchas tarifas.",
"Menus locais nas tavernas do resort, com menores de 12 a comer de graça em muitas tarifas.");

add("Breakfast in the agora", "Colazione nell'agora", "Frühstück auf der Agora", "Desayuno en el ágora", "Pequeno-almoço na ágora");
add("Slow start before the heat builds.", "Partenza lenta prima che arrivi il caldo.", "Gemächlicher Start, bevor die Hitze kommt.", "Comienzo tranquilo antes de que apriete el calor.", "Início tranquilo antes de o calor apertar.");
add("Kids club drop-off", "Accompagnamento al miniclub", "Abgabe im Kinderclub", "Dejada en el club infantil", "Entrega no clube infantil");
add("Free club while parents hit the adult pool.", "Club gratuito mentre i genitori vanno alla piscina adulti.", "Kostenloser Club, während die Eltern zum Erwachsenenpool gehen.", "Club gratuito mientras los padres van a la piscina de adultos.", "Clube gratuito enquanto os pais vão à piscina de adultos.");
add("Lunch at the bungalow", "Pranzo al bungalow", "Mittagessen am Bungalow", "Almuerzo en el bungalow", "Almoço no bungalow");
add("Quiet time by your own plunge pool.", "Momento tranquillo accanto alla vostra piscinetta privata.", "Ruhige Zeit an eurem eigenen Plunge Pool.", "Rato de calma junto a vuestra piscina privada.", "Momento de sossego junto à vossa piscina privada.");
add("Cove and paddle", "Cala e bagnetto", "Bucht und Planschen", "Cala y chapuzón", "Enseada e banho");
add("Shallow water and shade in the afternoon.", "Acqua bassa e ombra nel pomeriggio.", "Flaches Wasser und Schatten am Nachmittag.", "Agua poco profunda y sombra por la tarde.", "Água pouco funda e sombra à tarde.");
add("Family taverna dinner", "Cena in taverna in famiglia", "Familienessen in der Taverne", "Cena en taberna en familia", "Jantar em taverna em família");
add("Under-12s eat free on many rates.", "Gli under 12 mangiano gratis su molte tariffe.", "Unter 12-Jährige essen bei vielen Tarifen gratis.", "Los menores de 12 comen gratis en muchas tarifas.", "Os menores de 12 comem grátis em muitas tarifas.");

add("The private cove and plunge-pool bungalows suit babies, and the creche takes them from 6 months.",
"La cala privata e i bungalow con piscinetta sono adatti ai neonati, e il nido li accoglie dai 6 mesi.",
"Die private Bucht und die Bungalows mit Plunge Pool eignen sich für Babys, und die Krippe nimmt sie ab 6 Monaten.",
"La cala privada y los bungalows con piscina van bien para bebés, y la guardería los acoge desde los 6 meses.",
"A enseada privada e os bungalows com piscina são bons para bebés, e a creche recebe-os a partir dos 6 meses.");
add("Calm shallow water and a Montessori club built for imaginative play make this a toddler favourite.",
"Acqua calma e bassa e un club Montessori pensato per il gioco di fantasia lo rendono un preferito dei piccolissimi.",
"Ruhiges flaches Wasser und ein Montessori-Club für fantasievolles Spiel machen es zum Favoriten für Kleinkinder.",
"Agua tranquila y poco profunda y un club Montessori pensado para el juego imaginativo lo hacen un favorito para los más pequeños.",
"Água calma e pouco funda e um clube Montessori feito para o faz de conta tornam-no um favorito dos mais pequenos.");
add("The sweet spot: free club, pools, cove and short trips into Chania keep this age busy.",
"L'età perfetta: club gratuito, piscine, cala e brevi gite a Chania tengono impegnata questa fascia.",
"Der ideale Bereich: kostenloser Club, Pools, Bucht und kurze Ausflüge nach Chania halten dieses Alter auf Trab.",
"La edad ideal: club gratuito, piscinas, cala y salidas breves a Chania mantienen ocupada esta edad.",
"A idade ideal: clube gratuito, piscinas, enseada e passeios curtos a Chania mantêm esta idade ocupada.");
add("Teens get design, good food and a private-pool bungalow, though nightlife is off-site in Chania.",
"I ragazzi trovano design, buona cucina e un bungalow con piscina privata, anche se la vita notturna è fuori, a Chania.",
"Teenager bekommen Design, gutes Essen und einen Bungalow mit Privatpool, das Nachtleben liegt aber außerhalb in Chania.",
"Los adolescentes tienen diseño, buena comida y un bungalow con piscina privada, aunque el ocio nocturno está fuera, en Chania.",
"Os adolescentes têm design, boa comida e um bungalow com piscina privada, embora a vida noturna seja fora, em Chania.");

add("Is the kids club really free?", "Il miniclub è davvero gratuito?", "Ist der Kinderclub wirklich kostenlos?", "¿El club infantil es realmente gratuito?", "O clube infantil é mesmo gratuito?");
add("Yes. The Montessori kids club for ages 4 to 12 is included. A creche for babies and toddlers from 6 months is available for an extra charge.",
"Sì. Il miniclub Montessori dai 4 ai 12 anni è incluso. Un nido per neonati e piccolissimi dai 6 mesi è disponibile con supplemento.",
"Ja. Der Montessori-Kinderclub für 4- bis 12-Jährige ist inklusive. Eine Krippe für Babys und Kleinkinder ab 6 Monaten gibt es gegen Aufpreis.",
"Sí. El club infantil Montessori de 4 a 12 años está incluido. Hay una guardería para bebés y muy pequeños desde los 6 meses con un coste adicional.",
"Sim. O clube infantil Montessori dos 4 aos 12 anos está incluído. Há uma creche para bebés e mais pequenos a partir dos 6 meses com custo extra.");
add("How is the beach for small children?", "Com'è la spiaggia per i bambini piccoli?", "Wie ist der Strand für kleine Kinder?", "¿Cómo es la playa para niños pequeños?", "Como é a praia para crianças pequenas?");
add("It is a small, sheltered cove with calm, shallow water at the shore, so it is gentle for paddling, but it is compact rather than a long sandy beach.",
"È una cala piccola e riparata con acqua calma e bassa vicino alla riva, quindi delicata per i bagnetti, ma compatta più che una lunga spiaggia di sabbia.",
"Es ist eine kleine, geschützte Bucht mit ruhigem, flachem Wasser am Ufer, also sanft zum Planschen, aber kompakt statt ein langer Sandstrand.",
"Es una cala pequeña y resguardada con agua tranquila y poco profunda en la orilla, así que es suave para chapotear, pero compacta y no una larga playa de arena.",
"É uma enseada pequena e abrigada com água calma e pouco funda junto à margem, por isso suave para o banho, mas compacta e não uma longa praia de areia.");
add("Can we self-cater?", "Possiamo cucinare in autonomia?", "Können wir uns selbst verpflegen?", "¿Podemos cocinar por nuestra cuenta?", "Podemos cozinhar por conta própria?");
add("No, this is a dining-led resort rather than self-catering, but under-12s eat free on many rates, which softens the cost of eating out every day.",
"No, è un resort orientato alla ristorazione più che alla cucina propria, ma gli under 12 mangiano gratis su molte tariffe, il che alleggerisce il costo dei pasti fuori ogni giorno.",
"Nein, das ist eher ein gastronomisch geprägtes Resort als Selbstverpflegung, aber unter 12-Jährige essen bei vielen Tarifen gratis, was die Kosten fürs tägliche Auswärtsessen mildert.",
"No, es un resort orientado a la restauración más que a cocinar por cuenta propia, pero los menores de 12 comen gratis en muchas tarifas, lo que suaviza el coste de comer fuera cada día.",
"Não, é um resort virado para a restauração e não para cozinhar por conta própria, mas os menores de 12 comem de graça em muitas tarifas, o que alivia o custo de comer fora todos os dias.");

// === HOTEL 2: Grecotel Creta Palace ===
add("One of the widest family line-ups on the island: garden and sea-view rooms, family rooms and two-bedroom bungalows, plus villas with private pools. Many families pick a bungalow with direct garden access, so children can potter outside while you keep an eye from the terrace.",
"Una delle offerte per famiglie più ampie dell'isola: camere vista giardino o mare, camere familiari e bungalow con due camere da letto, oltre a ville con piscina privata. Molte famiglie scelgono un bungalow con accesso diretto al giardino, così i bambini giocano fuori mentre voi tenete d'occhio dalla terrazza.",
"Eines der breitesten Familienangebote der Insel: Zimmer mit Garten- oder Meerblick, Familienzimmer und Bungalows mit zwei Schlafzimmern sowie Villen mit Privatpool. Viele Familien wählen einen Bungalow mit direktem Gartenzugang, damit die Kinder draußen spielen, während ihr von der Terrasse aus ein Auge darauf habt.",
"Una de las ofertas familiares más amplias de la isla: habitaciones con vistas al jardín o al mar, habitaciones familiares y bungalows de dos dormitorios, además de villas con piscina privada. Muchas familias eligen un bungalow con acceso directo al jardín, para que los niños jueguen fuera mientras vigiláis desde la terraza.",
"Uma das ofertas para famílias mais amplas da ilha: quartos com vista para o jardim ou o mar, quartos familiares e bungalows de dois quartos, além de moradias com piscina privada. Muitas famílias escolhem um bungalow com acesso direto ao jardim, para que as crianças brinquem lá fora enquanto vigiam do terraço.");

add("Grecotel's flagship family resort near Rethymno pairs a long Blue Flag beach with a brand-new aqua park, the Grecoland kids club and enough pools, sport and activities to fill a fortnight. It is big and polished, with strong food and a proper beachfront, and only a ten-minute drive from Rethymno old town when you want a change of scene.",
"Il resort per famiglie di punta di Grecotel vicino a Rethymno abbina una lunga spiaggia Bandiera Blu a un nuovissimo parco acquatico, al miniclub Grecoland e a piscine, sport e attività a sufficienza per riempire due settimane. È grande e curato, con ottima cucina e un vero lungomare, a soli dieci minuti in auto dalla città vecchia di Rethymno quando serve cambiare aria.",
"Grecotels Vorzeige-Familienresort bei Rethymno verbindet einen langen Blaue-Flagge-Strand mit einem brandneuen Wasserpark, dem Grecoland-Kinderclub und genug Pools, Sport und Aktivitäten für zwei Wochen. Es ist groß und gepflegt, mit gutem Essen und einer richtigen Strandpromenade, und nur zehn Autominuten von der Altstadt Rethymnos entfernt, wenn ihr Abwechslung wollt.",
"El resort familiar insignia de Grecotel cerca de Rethymno combina una larga playa Bandera Azul con un flamante parque acuático, el club infantil Grecoland y suficientes piscinas, deporte y actividades para llenar dos semanas. Es grande y cuidado, con buena comida y un paseo marítimo de verdad, y a solo diez minutos en coche del casco antiguo de Rethymno cuando quieres cambiar de aires.",
"O resort familiar de referência da Grecotel perto de Rethymno junta uma longa praia com Bandeira Azul a um parque aquático novíssimo, ao clube infantil Grecoland e a piscinas, desporto e atividades que chegam para duas semanas. É grande e cuidado, com boa comida e uma frente de mar a sério, e a apenas dez minutos de carro do centro histórico de Rethymno quando apetece mudar de ares.");

add("Brand-new aqua park with slides, splash zones and a zero-entry pool (from July)",
"Nuovissimo parco acquatico con scivoli, aree spruzzi e piscina a entrata graduale (da luglio)",
"Brandneuer Wasserpark mit Rutschen, Spritzzonen und einem Pool mit flachem Einstieg (ab Juli)",
"Flamante parque acuático con toboganes, zonas de chapoteo y piscina de entrada progresiva (desde julio)",
"Parque aquático novíssimo com escorregas, zonas de salpicos e piscina de entrada gradual (a partir de julho)");
add("Grecoland kids club for ages 4 to 12 with an organic garden and a mini kitchen",
"Miniclub Grecoland dai 4 ai 12 anni con orto biologico e mini-cucina",
"Grecoland-Kinderclub für 4- bis 12-Jährige mit Biogarten und Miniküche",
"Club infantil Grecoland de 4 a 12 años con huerto ecológico y minicocina",
"Clube infantil Grecoland dos 4 aos 12 anos com horta biológica e mini-cozinha");
add("Long Blue Flag beach of golden sand and smooth pebbles, with full beach service",
"Lunga spiaggia Bandiera Blu di sabbia dorata e ciottoli lisci, con servizio spiaggia completo",
"Langer Blaue-Flagge-Strand aus goldenem Sand und glatten Kieseln, mit vollem Strandservice",
"Larga playa Bandera Azul de arena dorada y guijarros lisos, con servicio de playa completo",
"Longa praia com Bandeira Azul de areia dourada e seixos lisos, com serviço de praia completo");
add("Two-bedroom bungalows and private-pool villas for space-hungry families",
"Bungalow con due camere e ville con piscina privata per le famiglie che vogliono spazio",
"Bungalows mit zwei Schlafzimmern und Villen mit Privatpool für Familien mit viel Platzbedarf",
"Bungalows de dos dormitorios y villas con piscina privada para familias que necesitan espacio",
"Bungalows de dois quartos e moradias com piscina privada para famílias que precisam de espaço");
add("Indoor and outdoor playgrounds for when the sun is too fierce",
"Aree gioco al chiuso e all'aperto per quando il sole picchia troppo",
"Spielplätze drinnen und draußen für die Zeiten, in denen die Sonne zu heftig ist",
"Zonas de juego interiores y exteriores para cuando el sol aprieta demasiado",
"Parques infantis interiores e exteriores para quando o sol aperta demasiado");
add("Ten minutes by car to Rethymno old town and Venetian harbour",
"Dieci minuti in auto dalla città vecchia di Rethymno e dal porto veneziano",
"Zehn Autominuten zur Altstadt von Rethymno und zum venezianischen Hafen",
"Diez minutos en coche del casco antiguo de Rethymno y el puerto veneciano",
"Dez minutos de carro do centro histórico de Rethymno e do porto veneziano");

add("Enormous range of family rooms, bungalows and villas",
"Enorme scelta di camere familiari, bungalow e ville",
"Riesige Auswahl an Familienzimmern, Bungalows und Villen",
"Enorme variedad de habitaciones familiares, bungalows y villas",
"Enorme variedade de quartos familiares, bungalows e moradias");
add("Free kids club plus a new aqua park in one place",
"Miniclub gratuito e un nuovo parco acquatico nello stesso posto",
"Kostenloser Kinderclub plus neuer Wasserpark an einem Ort",
"Club infantil gratuito y un nuevo parque acuático en un mismo lugar",
"Clube infantil gratuito e um novo parque aquático no mesmo sítio");
add("Real beach plus easy access to Rethymno old town",
"Vera spiaggia e accesso facile alla città vecchia di Rethymno",
"Echter Strand plus einfacher Zugang zur Altstadt von Rethymno",
"Playa de verdad y fácil acceso al casco antiguo de Rethymno",
"Praia a sério e acesso fácil ao centro histórico de Rethymno");

add("It is a large resort that gets busy around the pools in peak summer",
"È un resort grande che si affolla intorno alle piscine in piena estate",
"Es ist ein großes Resort, das im Hochsommer rund um die Pools voll wird",
"Es un resort grande que se llena alrededor de las piscinas en pleno verano",
"É um resort grande que fica cheio à volta das piscinas em pleno verão");
add("The aqua park operates seasonally, mainly from July, so shoulder-season visitors may miss it",
"Il parco acquatico funziona a stagione, soprattutto da luglio, quindi chi viaggia in bassa stagione potrebbe non trovarlo aperto",
"Der Wasserpark läuft saisonal, hauptsächlich ab Juli, wer in der Nebensaison kommt, verpasst ihn womöglich",
"El parque acuático funciona por temporada, sobre todo desde julio, así que quien viaja en temporada media puede perdérselo",
"O parque aquático funciona por época, sobretudo a partir de julho, por isso quem viaja na época intermédia pode não o apanhar");
add("Premium pricing, and villas with private pools push the bill up fast",
"Prezzi premium, e le ville con piscina privata fanno lievitare in fretta il conto",
"Premium-Preise, und Villen mit Privatpool treiben die Rechnung schnell in die Höhe",
"Precios premium, y las villas con piscina privada disparan la cuenta enseguida",
"Preços premium, e as moradias com piscina privada fazem a conta subir depressa");

add("A do-everything family resort with a real beach, a new aqua park and one of the best rooms line-ups on Crete. Book a bungalow for the space, and travel in July or August if the aqua park is a must.",
"Un resort per famiglie che ha tutto, con una vera spiaggia, un nuovo parco acquatico e una delle migliori offerte di camere di Creta. Prenotate un bungalow per lo spazio e viaggiate a luglio o agosto se il parco acquatico è imprescindibile.",
"Ein Familienresort, das alles bietet: echter Strand, neuer Wasserpark und eine der besten Zimmerauswahlen auf Kreta. Bucht für den Platz einen Bungalow und reist im Juli oder August, wenn der Wasserpark ein Muss ist.",
"Un resort familiar que lo tiene todo, con playa de verdad, un nuevo parque acuático y una de las mejores ofertas de habitaciones de Creta. Reserva un bungalow por el espacio y viaja en julio o agosto si el parque acuático es imprescindible.",
"Um resort familiar que tem tudo, com praia a sério, um novo parque aquático e uma das melhores ofertas de quartos de Creta. Reservem um bungalow pelo espaço e viajem em julho ou agosto se o parque aquático for indispensável.");

add("Rooms and bungalows near the aqua park save endless walks back for the toilet: worth requesting when you book with young children.",
"Camere e bungalow vicino al parco acquatico evitano infiniti ritorni per il bagno: da chiedere in fase di prenotazione con bambini piccoli.",
"Zimmer und Bungalows nahe dem Wasserpark ersparen endlose Wege zurück zur Toilette: bei der Buchung mit kleinen Kindern lohnt sich die Anfrage.",
"Habitaciones y bungalows cerca del parque acuático evitan interminables idas y vueltas al baño: conviene pedirlo al reservar con niños pequeños.",
"Quartos e bungalows perto do parque aquático evitam idas e voltas sem fim à casa de banho: vale a pena pedir ao reservar com crianças pequenas.");

add("Long Blue Flag beach, on site", "Lunga spiaggia Bandiera Blu, in loco", "Langer Blaue-Flagge-Strand, direkt am Resort", "Larga playa Bandera Azul, en el propio resort", "Longa praia com Bandeira Azul, no local");
add("Slides and splash zones, seasonal", "Scivoli e aree spruzzi, stagionale", "Rutschen und Spritzzonen, saisonal", "Toboganes y zonas de chapoteo, de temporada", "Escorregas e zonas de salpicos, sazonal");
add("Grecoland, ages 4 to 12, free", "Grecoland, dai 4 ai 12 anni, gratuito", "Grecoland, 4 bis 12 Jahre, kostenlos", "Grecoland, de 4 a 12 años, gratuito", "Grecoland, dos 4 aos 12 anos, gratuito");
add("Family bungalows and pool villas", "Bungalow familiari e ville con piscina", "Familienbungalows und Poolvillen", "Bungalows familiares y villas con piscina", "Bungalows familiares e moradias com piscina");
add("10 min to Rethymno old town", "10 min dalla città vecchia di Rethymno", "10 Min. zur Altstadt von Rethymno", "10 min al casco antiguo de Rethymno", "10 min do centro histórico de Rethymno");
add("About 1 hr from Chania or Heraklion", "Circa 1 h da Chania o Heraklion", "Etwa 1 Std. von Chania oder Heraklion", "A una 1 h de Chania o Heraklion", "A cerca de 1 h de Chania ou Heraklion");

add("Aqua park afternoon", "Pomeriggio al parco acquatico", "Nachmittag im Wasserpark", "Tarde en el parque acuático", "Tarde no parque aquático");
add("Slides, splash zones and a zero-entry pool for confident and cautious swimmers alike.",
"Scivoli, aree spruzzi e piscina a entrata graduale per nuotatori sicuri e prudenti allo stesso modo.",
"Rutschen, Spritzzonen und ein Pool mit flachem Einstieg für sichere und vorsichtige Schwimmer gleichermaßen.",
"Toboganes, zonas de chapoteo y piscina de entrada progresiva para nadadores seguros y prudentes por igual.",
"Escorregas, zonas de salpicos e piscina de entrada gradual para nadadores confiantes e cautelosos por igual.");
add("Grecoland garden club", "Club dell'orto Grecoland", "Grecoland-Gartenclub", "Club del huerto Grecoland", "Clube da horta Grecoland");
add("Kids garden the organic bostani and cook in a mini kitchen at the free club.",
"I bambini coltivano l'orto biologico e cucinano in una mini-cucina al club gratuito.",
"Die Kinder bewirtschaften den Biogarten und kochen in einer Miniküche im kostenlosen Club.",
"Los niños cultivan el huerto ecológico y cocinan en una minicocina en el club gratuito.",
"As crianças cultivam a horta biológica e cozinham numa mini-cozinha no clube gratuito.");
add("Beach and sandcastles", "Spiaggia e castelli di sabbia", "Strand und Sandburgen", "Playa y castillos de arena", "Praia e castelos de areia");
add("A long Blue Flag beach with beach service, sun umbrellas and gentle entry.",
"Una lunga spiaggia Bandiera Blu con servizio spiaggia, ombrelloni ed entrata dolce in acqua.",
"Ein langer Blaue-Flagge-Strand mit Strandservice, Sonnenschirmen und sanftem Einstieg.",
"Una larga playa Bandera Azul con servicio de playa, sombrillas y entrada suave.",
"Uma longa praia com Bandeira Azul, com serviço de praia, chapéus de sol e entrada suave.");
add("Rethymno old town", "Città vecchia di Rethymno", "Altstadt von Rethymno", "Casco antiguo de Rethymno", "Centro histórico de Rethymno");
add("A ten-minute drive to the Venetian harbour, fortress and ice-cream lanes.",
"Dieci minuti in auto fino al porto veneziano, alla fortezza e alle viuzze del gelato.",
"Zehn Autominuten zum venezianischen Hafen, zur Festung und zu den Eis-Gassen.",
"Diez minutos en coche hasta el puerto veneciano, la fortaleza y las callejuelas de los helados.",
"Dez minutos de carro até ao porto veneziano, à fortaleza e às ruelas dos gelados.");

add("Big buffet breakfast", "Ricca colazione a buffet", "Großes Frühstücksbuffet", "Gran desayuno bufé", "Grande pequeno-almoço buffet");
add("Fuel up before the beach fills.", "Fate il pieno prima che la spiaggia si riempia.", "Kräfte tanken, bevor der Strand voll wird.", "Cargad energía antes de que se llene la playa.", "Abasteçam-se antes de a praia encher.");
add("Beach morning", "Mattina in spiaggia", "Strandvormittag", "Mañana de playa", "Manhã de praia");
add("Sandcastles while it is still cool.", "Castelli di sabbia finché fa ancora fresco.", "Sandburgen, solange es noch kühl ist.", "Castillos de arena mientras aún hace fresco.", "Castelos de areia enquanto ainda está fresco.");
add("Lunch and quiet time", "Pranzo e momento tranquillo", "Mittagessen und Ruhezeit", "Almuerzo y rato de calma", "Almoço e momento de sossego");
add("Nap in the shaded bungalow.", "Pisolino nel bungalow all'ombra.", "Mittagsschlaf im schattigen Bungalow.", "Siesta en el bungalow a la sombra.", "Sesta no bungalow à sombra.");
add("Aqua park and kids club", "Parco acquatico e miniclub", "Wasserpark und Kinderclub", "Parque acuático y club infantil", "Parque aquático e clube infantil");
add("Slides for big kids, Grecoland for littler ones.", "Scivoli per i più grandi, Grecoland per i più piccoli.", "Rutschen für die Großen, Grecoland für die Kleineren.", "Toboganes para los mayores, Grecoland para los más pequeños.", "Escorregas para os mais crescidos, Grecoland para os mais pequenos.");
add("Dinner then mini disco", "Cena e poi mini-disco", "Abendessen und dann Minidisco", "Cena y luego minidisco", "Jantar e depois mini-disco");
add("Early evening entertainment for the children.", "Animazione di inizio serata per i bambini.", "Unterhaltung am frühen Abend für die Kinder.", "Animación a primera hora de la noche para los niños.", "Animação ao início da noite para as crianças.");

add("Ground-floor bungalows, cots on request and a gentle beach make babies straightforward here.",
"Bungalow al piano terra, culle su richiesta e una spiaggia dolce rendono semplice il soggiorno con i neonati.",
"Bungalows im Erdgeschoss, Babybetten auf Anfrage und ein sanfter Strand machen es mit Babys unkompliziert.",
"Bungalows en planta baja, cunas bajo petición y una playa suave hacen sencillo el viaje con bebés.",
"Bungalows no rés do chão, berços a pedido e uma praia suave tornam simples a estadia com bebés.");
add("Zero-entry pool, shallow beach and the Grecoland garden club suit toddlers well.",
"Piscina a entrata graduale, spiaggia bassa e il club dell'orto Grecoland si adattano bene ai piccolissimi.",
"Pool mit flachem Einstieg, seichter Strand und der Grecoland-Gartenclub passen gut zu Kleinkindern.",
"Piscina de entrada progresiva, playa poco profunda y el club del huerto Grecoland van bien para los más pequeños.",
"Piscina de entrada gradual, praia pouco funda e o clube da horta Grecoland adaptam-se bem aos mais pequenos.");
add("The best age here: aqua park, kids club, beach and sports all included or on site.",
"L'età migliore qui: parco acquatico, miniclub, spiaggia e sport tutti inclusi o in loco.",
"Das beste Alter hier: Wasserpark, Kinderclub, Strand und Sport, alles inklusive oder vor Ort.",
"La mejor edad aquí: parque acuático, club infantil, playa y deportes, todo incluido o en el propio resort.",
"A melhor idade aqui: parque aquático, clube infantil, praia e desportos, tudo incluído ou no local.");
add("The aqua park, watersports and old-town trips keep teens happy, though the vibe stays family.",
"Parco acquatico, sport acquatici e gite in città vecchia tengono contenti i ragazzi, anche se l'atmosfera resta familiare.",
"Wasserpark, Wassersport und Altstadt-Ausflüge halten Teenager bei Laune, auch wenn die Stimmung familiär bleibt.",
"El parque acuático, los deportes acuáticos y las salidas al casco antiguo mantienen contentos a los adolescentes, aunque el ambiente sigue siendo familiar.",
"O parque aquático, os desportos aquáticos e os passeios ao centro histórico mantêm os adolescentes contentes, embora o ambiente continue familiar.");

add("Is the aqua park open all season?", "Il parco acquatico è aperto tutta la stagione?", "Ist der Wasserpark die ganze Saison geöffnet?", "¿El parque acuático abre toda la temporada?", "O parque aquático está aberto toda a época?");
add("It runs seasonally, mainly from July into the summer. If it is a priority, travel in high summer and confirm the opening dates when you book.",
"Funziona a stagione, soprattutto da luglio in avanti. Se è una priorità, viaggiate in piena estate e confermate le date di apertura al momento della prenotazione.",
"Er läuft saisonal, hauptsächlich ab Juli im Sommer. Wenn er wichtig ist, reist im Hochsommer und bestätigt die Öffnungszeiten bei der Buchung.",
"Funciona por temporada, sobre todo desde julio en verano. Si es una prioridad, viaja en pleno verano y confirma las fechas de apertura al reservar.",
"Funciona por época, sobretudo de julho em diante no verão. Se for prioridade, viajem em pleno verão e confirmem as datas de abertura ao reservar.");
add("Is the kids club free?", "Il miniclub è gratuito?", "Ist der Kinderclub kostenlos?", "¿El club infantil es gratuito?", "O clube infantil é gratuito?");
add("Yes. The Grecoland kids club for ages 4 to 12 is included, with a full daily programme of crafts, gardening and beach games.",
"Sì. Il miniclub Grecoland dai 4 ai 12 anni è incluso, con un programma giornaliero completo di laboratori, giardinaggio e giochi in spiaggia.",
"Ja. Der Grecoland-Kinderclub für 4- bis 12-Jährige ist inklusive, mit vollem Tagesprogramm aus Basteln, Gärtnern und Strandspielen.",
"Sí. El club infantil Grecoland de 4 a 12 años está incluido, con un programa diario completo de manualidades, jardinería y juegos de playa.",
"Sim. O clube infantil Grecoland dos 4 aos 12 anos está incluído, com um programa diário completo de trabalhos manuais, jardinagem e jogos de praia.");
add("Can we visit Rethymno easily?", "Si può visitare Rethymno facilmente?", "Kann man Rethymno leicht besuchen?", "¿Se puede visitar Rethymno fácilmente?", "Dá para visitar Rethymno facilmente?");
add("Yes. Rethymno old town, with its Venetian harbour and fortress, is about a ten-minute drive, easy for a half-day out with children.",
"Sì. La città vecchia di Rethymno, con il porto veneziano e la fortezza, è a circa dieci minuti in auto, comoda per una mezza giornata con i bambini.",
"Ja. Die Altstadt von Rethymno mit venezianischem Hafen und Festung ist etwa zehn Autominuten entfernt, gut für einen halben Tag mit Kindern.",
"Sí. El casco antiguo de Rethymno, con su puerto veneciano y su fortaleza, está a unos diez minutos en coche, ideal para una media jornada con niños.",
"Sim. O centro histórico de Rethymno, com o porto veneziano e a fortaleza, fica a cerca de dez minutos de carro, ideal para meio dia com as crianças.");

// === HOTEL 3: Anemos Luxury Grand Resort ===
add("Suite-style rooms and family suites, many with a separate living space and some with a private or swim-up pool. Family suites give you room for a cot plus older children, and the higher categories add the kind of space that makes a rainy afternoon survivable.",
"Camere in stile suite e suite familiari, molte con soggiorno separato e alcune con piscina privata o ad accesso diretto. Le suite familiari lasciano spazio per una culla e per i bambini più grandi, e le categorie superiori aggiungono quello spazio che rende sopportabile un pomeriggio di pioggia.",
"Zimmer im Suiten-Stil und Familiensuiten, viele mit separatem Wohnbereich und einige mit privatem oder direkt zugänglichem Pool. Familiensuiten bieten Platz für ein Babybett plus ältere Kinder, und die höheren Kategorien liefern den Raum, der einen verregneten Nachmittag erträglich macht.",
"Habitaciones tipo suite y suites familiares, muchas con salón aparte y algunas con piscina privada o de acceso directo. Las suites familiares dejan sitio para una cuna y para niños mayores, y las categorías superiores añaden ese espacio que hace llevadera una tarde de lluvia.",
"Quartos ao estilo suite e suites familiares, muitos com sala separada e alguns com piscina privada ou de acesso direto. As suites familiares deixam espaço para um berço e para crianças mais crescidas, e as categorias superiores acrescentam aquele espaço que torna suportável uma tarde de chuva.");

add("A five-star suites-and-spa resort on the edge of Georgioupolis, one of Crete's calmest, shallowest family beaches. The draw is water: four pools including a kids pool with waterslides, a free kids club and a long stretch of soft sand and gentle sea right nearby. It is smart and relaxed rather than a party spot, which suits families with younger children.",
"Un resort cinque stelle di suite e spa ai margini di Georgioupolis, una delle spiagge per famiglie più tranquille e basse di Creta. Il richiamo è l'acqua: quattro piscine, tra cui una per bambini con scivoli, un miniclub gratuito e una lunga distesa di sabbia morbida e mare dolce proprio accanto. È elegante e rilassato più che festaiolo, il che si addice alle famiglie con bambini piccoli.",
"Ein Fünf-Sterne-Resort mit Suiten und Spa am Rand von Georgioupolis, einem der ruhigsten und flachsten Familienstrände Kretas. Der Reiz ist das Wasser: vier Pools, darunter ein Kinderbecken mit Wasserrutschen, ein kostenloser Kinderclub und ein langer Streifen weichen Sandes und sanftes Meer gleich nebenan. Es ist edel und entspannt statt Partyort, was Familien mit jüngeren Kindern entgegenkommt.",
"Un resort de cinco estrellas de suites y spa a las afueras de Georgioupolis, una de las playas familiares más tranquilas y menos profundas de Creta. El reclamo es el agua: cuatro piscinas, entre ellas una infantil con toboganes, un club infantil gratuito y una larga franja de arena suave y mar apacible justo al lado. Es elegante y relajado más que fiestero, lo que va bien a familias con niños pequeños.",
"Um resort de cinco estrelas de suites e spa nos limites de Georgioupolis, uma das praias para famílias mais calmas e pouco fundas de Creta. O chamariz é a água: quatro piscinas, incluindo uma infantil com escorregas, um clube infantil gratuito e uma longa faixa de areia macia e mar suave mesmo ao lado. É elegante e descontraído em vez de festivo, o que agrada a famílias com crianças pequenas.");

add("Four outdoor pools including a kids pool with waterslides",
"Quattro piscine all'aperto, tra cui una per bambini con scivoli",
"Vier Außenpools, darunter ein Kinderbecken mit Wasserrutschen",
"Cuatro piscinas exteriores, incluida una infantil con toboganes",
"Quatro piscinas exteriores, incluindo uma infantil com escorregas");
add("Free kids club for ages 4 to 12, with a mini club for under-4s alongside a parent",
"Miniclub gratuito dai 4 ai 12 anni, con un mini-club per gli under 4 accompagnati da un genitore",
"Kostenloser Kinderclub für 4- bis 12-Jährige, mit einem Miniclub für unter 4-Jährige in Begleitung eines Elternteils",
"Club infantil gratuito de 4 a 12 años, con un miniclub para menores de 4 acompañados de un padre o madre",
"Clube infantil gratuito dos 4 aos 12 anos, com um mini-clube para menores de 4 acompanhados por um dos pais");
add("Right by Georgioupolis beach, known for calm, shallow, shelving water",
"Proprio accanto alla spiaggia di Georgioupolis, nota per l'acqua calma, bassa e a dolce pendenza",
"Direkt am Strand von Georgioupolis, bekannt für ruhiges, flaches, sanft abfallendes Wasser",
"Junto a la playa de Georgioupolis, conocida por su agua tranquila, poco profunda y de suave pendiente",
"Mesmo junto à praia de Georgioupolis, conhecida pela água calma, pouco funda e de declive suave");
add("Family suites with separate living areas and pool options",
"Suite familiari con soggiorno separato e opzioni con piscina",
"Familiensuiten mit separatem Wohnbereich und Pool-Optionen",
"Suites familiares con salón aparte y opciones con piscina",
"Suites familiares com sala separada e opções com piscina");
add("Full daily and evening kids programme, including a mini disco",
"Programma completo per bambini di giorno e di sera, mini-disco compreso",
"Volles Kinderprogramm tagsüber und abends, inklusive Minidisco",
"Programa infantil completo de día y de noche, con minidisco incluido",
"Programa infantil completo de dia e de noite, incluindo mini-disco");
add("Adults-only pool and spa for parents on downtime",
"Piscina riservata agli adulti e spa per i genitori nei momenti di pausa",
"Pool nur für Erwachsene und Spa für Eltern in Auszeiten",
"Piscina solo para adultos y spa para los padres en sus ratos libres",
"Piscina só para adultos e spa para os pais nos momentos de pausa");

add("Georgioupolis beach is one of the gentlest, shallowest on Crete",
"La spiaggia di Georgioupolis è una delle più dolci e basse di Creta",
"Der Strand von Georgioupolis ist einer der sanftesten und flachsten auf Kreta",
"La playa de Georgioupolis es una de las más suaves y poco profundas de Creta",
"A praia de Georgioupolis é uma das mais suaves e pouco fundas de Creta");
add("Free kids club and a kids pool with slides on site",
"Miniclub gratuito e una piscina per bambini con scivoli in loco",
"Kostenloser Kinderclub und ein Kinderbecken mit Rutschen vor Ort",
"Club infantil gratuito y una piscina infantil con toboganes en el propio resort",
"Clube infantil gratuito e uma piscina infantil com escorregas no local");
add("Spacious family suites and a calmer, non-party atmosphere",
"Suite familiari spaziose e un'atmosfera più tranquilla, non festaiola",
"Geräumige Familiensuiten und eine ruhigere, unpartyhafte Atmosphäre",
"Suites familiares amplias y un ambiente más tranquilo, no de fiesta",
"Suites familiares espaçosas e um ambiente mais calmo, sem festa");

add("The resort sits slightly back from the beach, so it is a short walk down",
"Il resort è leggermente arretrato rispetto alla spiaggia, quindi c'è una breve discesa a piedi",
"Das Resort liegt etwas vom Strand zurückgesetzt, es ist also ein kurzer Weg hinunter",
"El resort queda algo retirado de la playa, así que hay un breve paseo hasta abajo",
"O resort fica um pouco recuado da praia, por isso há uma curta descida a pé");
add("Georgioupolis can be breezy, and the open beach picks up wind on gusty days",
"Georgioupolis può essere ventosa, e la spiaggia aperta prende vento nelle giornate di raffiche",
"Georgioupolis kann windig sein, und der offene Strand fängt an böigen Tagen Wind auf",
"Georgioupolis puede ser ventoso, y la playa abierta coge viento los días de rachas",
"Georgioupolis pode ser ventoso, e a praia aberta apanha vento nos dias de rajadas");
add("Less baby-specific kit than some rivals, so bring your own essentials",
"Meno attrezzatura specifica per neonati rispetto ad alcuni concorrenti, quindi portate l'essenziale con voi",
"Weniger babyspezifische Ausstattung als bei manchen Mitbewerbern, bringt also eure Basics mit",
"Menos equipamiento específico para bebés que en algunos rivales, así que llevad vuestros básicos",
"Menos equipamento específico para bebés do que alguns concorrentes, por isso levem o essencial convosco");

add("A smart-value five-star for families who want a calm, shallow beach and a free kids club without a mega-resort crush. Best for toddlers and young children, with the gentle Georgioupolis sea as the headline.",
"Un cinque stelle dall'ottimo rapporto qualità-prezzo per le famiglie che vogliono una spiaggia calma e bassa e un miniclub gratuito senza la ressa di un mega-resort. Ideale per piccolissimi e bambini piccoli, con il mare dolce di Georgioupolis come protagonista.",
"Ein Fünf-Sterne-Haus mit gutem Preis-Leistungs-Verhältnis für Familien, die einen ruhigen, flachen Strand und einen kostenlosen Kinderclub ohne Mega-Resort-Gedränge wollen. Am besten für Kleinkinder und junge Kinder, mit dem sanften Meer von Georgioupolis als Highlight.",
"Un cinco estrellas de buena relación calidad-precio para familias que quieren una playa tranquila y poco profunda y un club infantil gratuito sin el agobio de un macrorresort. Ideal para los más pequeños y niños de corta edad, con el suave mar de Georgioupolis como protagonista.",
"Um cinco estrelas com ótima relação qualidade-preço para famílias que querem uma praia calma e pouco funda e um clube infantil gratuito sem a confusão de um mega-resort. Ideal para os mais pequenos e crianças de tenra idade, com o suave mar de Georgioupolis em destaque.");

add("Head to the beach in the morning: Georgioupolis is at its calmest and most sheltered before the afternoon breeze picks up.",
"Andate in spiaggia al mattino: Georgioupolis è al suo massimo di calma e riparo prima che si alzi la brezza del pomeriggio.",
"Geht morgens an den Strand: Georgioupolis ist am ruhigsten und geschütztesten, bevor am Nachmittag die Brise auffrischt.",
"Id a la playa por la mañana: Georgioupolis está en su punto más tranquilo y resguardado antes de que suba la brisa de la tarde.",
"Vão à praia de manhã: Georgioupolis está no seu ponto mais calmo e abrigado antes de a brisa da tarde aumentar.");

add("Georgioupolis, calm and shallow", "Georgioupolis, calma e bassa", "Georgioupolis, ruhig und flach", "Georgioupolis, tranquila y poco profunda", "Georgioupolis, calma e pouco funda");
add("With waterslides", "Con scivoli", "Mit Wasserrutschen", "Con toboganes", "Com escorregas");
add("Ages 4 to 12, free (mini club under 4)", "Dai 4 ai 12 anni, gratuito (mini-club under 4)", "4 bis 12 Jahre, kostenlos (Miniclub unter 4)", "De 4 a 12 años, gratuito (miniclub menores de 4)", "Dos 4 aos 12 anos, gratuito (mini-clube menores de 4)");
add("Four, including an adults-only pool", "Quattro, tra cui una riservata agli adulti", "Vier, darunter ein Pool nur für Erwachsene", "Cuatro, incluida una solo para adultos", "Quatro, incluindo uma só para adultos");
add("Spa and adult pool", "Spa e piscina adulti", "Spa und Erwachsenenpool", "Spa y piscina de adultos", "Spa e piscina de adultos");
add("About 45 min from Chania", "Circa 45 min da Chania", "Etwa 45 Min. von Chania", "A unos 45 min de Chania", "A cerca de 45 min de Chania");

add("Shallow-beach morning", "Mattina in spiaggia bassa", "Vormittag am flachen Strand", "Mañana de playa poco profunda", "Manhã de praia pouco funda");
add("Georgioupolis shelves gently, so toddlers can wade a long way out safely.",
"Georgioupolis ha una pendenza dolce, così i piccolissimi possono spingersi lontano in sicurezza.",
"Georgioupolis fällt sanft ab, sodass Kleinkinder sicher weit hinauswaten können.",
"Georgioupolis tiene una pendiente suave, así que los más pequeños pueden alejarse bastante con seguridad.",
"Georgioupolis tem um declive suave, por isso os mais pequenos podem afastar-se bastante em segurança.");
add("Kids pool and slides", "Piscina per bambini e scivoli", "Kinderbecken und Rutschen", "Piscina infantil y toboganes", "Piscina infantil e escorregas");
add("A dedicated children's pool with waterslides for the confident paddlers.",
"Una piscina dedicata ai bambini con scivoli per chi è già a proprio agio in acqua.",
"Ein eigenes Kinderbecken mit Wasserrutschen für die schon sicheren Planscher.",
"Una piscina infantil dedicada con toboganes para los que ya se manejan en el agua.",
"Uma piscina infantil dedicada com escorregas para os que já se sentem à vontade na água.");
add("Kids club crafts", "Laboratori al miniclub", "Basteln im Kinderclub", "Manualidades en el club infantil", "Trabalhos manuais no clube infantil");
add("Free supervised crafts and games, with a mini disco in the early evening.",
"Laboratori e giochi sorvegliati e gratuiti, con mini-disco di inizio serata.",
"Kostenloses betreutes Basteln und Spielen, mit Minidisco am frühen Abend.",
"Manualidades y juegos supervisados y gratuitos, con minidisco a primera hora de la noche.",
"Trabalhos manuais e jogos supervisionados e gratuitos, com mini-disco ao início da noite.");
add("Georgioupolis lake and river", "Lago e fiume di Georgioupolis", "See und Fluss von Georgioupolis", "Lago y río de Georgioupolis", "Lago e rio de Georgioupolis");
add("Nearby Lake Kournas and the river mouth make a gentle boat or pedalo outing.",
"Il vicino lago di Kournas e la foce del fiume sono perfetti per una tranquilla uscita in barca o pedalò.",
"Der nahe Kournas-See und die Flussmündung eignen sich für eine gemütliche Boots- oder Tretbootfahrt.",
"El cercano lago Kournas y la desembocadura del río permiten una tranquila salida en barca o patín.",
"O vizinho lago Kournas e a foz do rio são ideais para um passeio tranquilo de barco ou gaivota.");

add("Breakfast then beach", "Colazione e poi spiaggia", "Frühstück, dann Strand", "Desayuno y luego playa", "Pequeno-almoço e depois praia");
add("Calmest water is early.", "L'acqua è più calma di prima mattina.", "Am ruhigsten ist das Wasser früh.", "El agua está más tranquila temprano.", "A água está mais calma de manhã cedo.");
add("Paddle and sandcastles", "Bagnetto e castelli di sabbia", "Planschen und Sandburgen", "Chapuzón y castillos de arena", "Banho e castelos de areia");
add("Shallow, shelving sea for little ones.", "Mare basso e a pendenza dolce per i più piccoli.", "Flaches, sanft abfallendes Meer für die Kleinen.", "Mar poco profundo y de suave pendiente para los peques.", "Mar pouco fundo e de declive suave para os mais pequenos.");
add("Lunch and shade", "Pranzo e ombra", "Mittagessen und Schatten", "Almuerzo y sombra", "Almoço e sombra");
add("Quiet time in the suite.", "Momento tranquillo nella suite.", "Ruhige Zeit in der Suite.", "Rato de calma en la suite.", "Momento de sossego na suite.");
add("Kids pool and club", "Piscina per bambini e club", "Kinderbecken und Club", "Piscina infantil y club", "Piscina infantil e clube");
add("Slides for the kids, spa for the parents.", "Scivoli per i bambini, spa per i genitori.", "Rutschen für die Kinder, Spa für die Eltern.", "Toboganes para los niños, spa para los padres.", "Escorregas para as crianças, spa para os pais.");
add("Mini disco", "Mini-disco", "Minidisco", "Minidisco", "Mini-disco");
add("Wear them out before dinner.", "Stancateli prima di cena.", "Müde machen vor dem Abendessen.", "Cansadlos antes de la cena.", "Cansem-nos antes do jantar.");

add("The shallow, shelving beach and a kids pool make this a strong toddler pick.",
"La spiaggia bassa e a dolce pendenza e una piscina per bambini ne fanno un'ottima scelta per i piccolissimi.",
"Der flache, sanft abfallende Strand und ein Kinderbecken machen es zur starken Wahl für Kleinkinder.",
"La playa poco profunda y de suave pendiente y una piscina infantil lo convierten en una gran opción para los más pequeños.",
"A praia pouco funda e de declive suave e uma piscina infantil fazem dele uma ótima escolha para os mais pequenos.");
add("Waterslides, the free club and the nearby lake keep this age busy all day.",
"Scivoli, il club gratuito e il lago vicino tengono impegnata questa età tutto il giorno.",
"Wasserrutschen, der kostenlose Club und der nahe See halten dieses Alter den ganzen Tag auf Trab.",
"Los toboganes, el club gratuito y el lago cercano mantienen ocupada esta edad todo el día.",
"Os escorregas, o clube gratuito e o lago próximo mantêm esta idade ocupada o dia todo.");
add("Teens have watersports and lake trips, though Georgioupolis is quiet rather than lively.",
"I ragazzi hanno sport acquatici e gite al lago, anche se Georgioupolis è tranquilla più che vivace.",
"Teenager haben Wassersport und Seeausflüge, auch wenn Georgioupolis eher ruhig als lebhaft ist.",
"Los adolescentes tienen deportes acuáticos y salidas al lago, aunque Georgioupolis es tranquilo más que animado.",
"Os adolescentes têm desportos aquáticos e passeios ao lago, embora Georgioupolis seja calmo em vez de animado.");

add("Is the beach good for young children?", "La spiaggia è adatta ai bambini piccoli?", "Ist der Strand für kleine Kinder geeignet?", "¿La playa es buena para niños pequeños?", "A praia é boa para crianças pequenas?");
add("Yes. Georgioupolis beach is known for calm, shallow, gently shelving water, which is reassuring for toddlers, though the open beach can catch the wind in the afternoon.",
"Sì. La spiaggia di Georgioupolis è nota per l'acqua calma, bassa e a dolce pendenza, rassicurante per i piccolissimi, anche se la spiaggia aperta può prendere vento nel pomeriggio.",
"Ja. Der Strand von Georgioupolis ist für ruhiges, flaches, sanft abfallendes Wasser bekannt, das für Kleinkinder beruhigend ist, auch wenn der offene Strand am Nachmittag Wind abbekommen kann.",
"Sí. La playa de Georgioupolis es conocida por su agua tranquila, poco profunda y de suave pendiente, tranquilizadora para los más pequeños, aunque la playa abierta puede coger viento por la tarde.",
"Sim. A praia de Georgioupolis é conhecida pela água calma, pouco funda e de declive suave, tranquilizadora para os mais pequenos, embora a praia aberta possa apanhar vento à tarde.");
add("Is the kids club included?", "Il miniclub è incluso?", "Ist der Kinderclub inbegriffen?", "¿El club infantil está incluido?", "O clube infantil está incluído?");
add("Yes. The kids club for ages 4 to 12 is free, and under-4s can join a mini club alongside a parent, with a daily and evening programme.",
"Sì. Il miniclub dai 4 ai 12 anni è gratuito, e gli under 4 possono partecipare a un mini-club accompagnati da un genitore, con programma di giorno e di sera.",
"Ja. Der Kinderclub für 4- bis 12-Jährige ist kostenlos, und unter 4-Jährige können in Begleitung eines Elternteils an einem Miniclub teilnehmen, mit Tages- und Abendprogramm.",
"Sí. El club infantil de 4 a 12 años es gratuito, y los menores de 4 pueden unirse a un miniclub acompañados de un padre o madre, con programa de día y de noche.",
"Sim. O clube infantil dos 4 aos 12 anos é gratuito, e os menores de 4 podem participar num mini-clube acompanhados por um dos pais, com programa de dia e de noite.");
add("Is it suitable for babies?", "È adatto ai neonati?", "Ist es für Babys geeignet?", "¿Es adecuado para bebés?", "É adequado para bebés?");
add("It works, with cots on request and family suites, but there is less baby-specific kit than at some rivals, so pack your own essentials.",
"Funziona, con culle su richiesta e suite familiari, ma c'è meno attrezzatura specifica per neonati rispetto ad alcuni concorrenti, quindi portate l'essenziale.",
"Es funktioniert, mit Babybetten auf Anfrage und Familiensuiten, aber es gibt weniger babyspezifische Ausstattung als bei manchen Mitbewerbern, packt also eure Basics ein.",
"Funciona, con cunas bajo petición y suites familiares, pero hay menos equipamiento específico para bebés que en algunos rivales, así que llevad vuestros básicos.",
"Funciona, com berços a pedido e suites familiares, mas há menos equipamento específico para bebés do que alguns concorrentes, por isso levem o essencial.");

// === HOTEL 4: Creta Maris Resort ===
add("A huge estate of village-style bungalows and rooms spread through gardens down to the beach, with family rooms and connecting options. Bungalows near a pool suit families with small children; the trade-off is a large site where you will walk a fair bit between your room, the buffets and the water park.",
"Un'enorme tenuta di bungalow e camere in stile villaggio distribuiti tra i giardini fino alla spiaggia, con camere familiari e opzioni comunicanti. I bungalow vicino a una piscina sono adatti alle famiglie con bambini piccoli; il rovescio della medaglia è un sito ampio in cui si cammina parecchio tra camera, buffet e parco acquatico.",
"Ein riesiges Areal aus Bungalows und Zimmern im Dorfstil, verteilt durch Gärten bis zum Strand, mit Familienzimmern und Verbindungsoptionen. Bungalows in Poolnähe passen zu Familien mit kleinen Kindern; der Nachteil ist ein großes Gelände, auf dem man ein gutes Stück zwischen Zimmer, Buffets und Wasserpark läuft.",
"Una enorme finca de bungalows y habitaciones tipo pueblo repartidos por los jardines hasta la playa, con habitaciones familiares y opciones comunicadas. Los bungalows cerca de una piscina van bien para familias con niños pequeños; la contrapartida es un recinto grande en el que se camina bastante entre la habitación, los bufés y el parque acuático.",
"Uma enorme propriedade de bungalows e quartos ao estilo de aldeia espalhados pelos jardins até à praia, com quartos familiares e opções comunicantes. Os bungalows perto de uma piscina são bons para famílias com crianças pequenas; a contrapartida é um espaço grande onde se caminha bastante entre o quarto, os buffets e o parque aquático.");

add("One of Crete's original big all-inclusive resorts, Creta Maris in Hersonissos is a village of gardens, seventeen pools, a water park and its own beach on the north coast. It is large and busy in peak season, but the sheer amount included, from a free kids club to a teen club and open-air cinema, makes it a genuine one-price family holiday, and Heraklion and Knossos are an easy day trip.",
"Uno dei grandi resort all-inclusive storici di Creta, il Creta Maris a Hersonissos è un villaggio di giardini, diciassette piscine, un parco acquatico e una spiaggia propria sulla costa nord. È grande e affollato in alta stagione, ma la quantità di cose incluse, dal miniclub gratuito al club per ragazzi e al cinema all'aperto, ne fa una vera vacanza in famiglia a prezzo unico, e Heraklion e Knossos sono una gita facile.",
"Eines der ursprünglichen großen All-inclusive-Resorts Kretas: Creta Maris in Hersonissos ist ein Dorf aus Gärten, siebzehn Pools, einem Wasserpark und einem eigenen Strand an der Nordküste. Es ist groß und in der Hochsaison belebt, doch die schiere Menge an Inklusivleistungen, vom kostenlosen Kinderclub über einen Teenclub bis zum Freiluftkino, macht es zu einem echten Familienurlaub zum Festpreis, und Heraklion und Knossos sind ein leichter Tagesausflug.",
"Uno de los grandes resorts con todo incluido originales de Creta, el Creta Maris de Hersonissos es un pueblo de jardines, diecisiete piscinas, un parque acuático y playa propia en la costa norte. Es grande y concurrido en temporada alta, pero la cantidad de cosas incluidas, desde un club infantil gratuito hasta un club de adolescentes y un cine al aire libre, lo convierte en unas auténticas vacaciones en familia a precio único, y Heraklion y Knossos quedan a una excursión fácil.",
"Um dos grandes resorts com tudo incluído originais de Creta, o Creta Maris em Hersonissos é uma aldeia de jardins, dezassete piscinas, um parque aquático e praia própria na costa norte. É grande e movimentado na época alta, mas a quantidade de coisas incluídas, do clube infantil gratuito ao clube de adolescentes e ao cinema ao ar livre, faz dele umas verdadeiras férias em família a preço único, e Heraklion e Knossos ficam a um passeio fácil de um dia.");

add("Seventeen pools plus a water park with slides and splash zones",
"Diciassette piscine più un parco acquatico con scivoli e aree spruzzi",
"Siebzehn Pools plus ein Wasserpark mit Rutschen und Spritzzonen",
"Diecisiete piscinas más un parque acuático con toboganes y zonas de chapoteo",
"Dezassete piscinas mais um parque aquático com escorregas e zonas de salpicos");
add("Several children's pools, one with waterslides, across the gardens",
"Diverse piscine per bambini, una con scivoli, sparse nei giardini",
"Mehrere Kinderbecken, eines mit Wasserrutschen, verteilt in den Gärten",
"Varias piscinas infantiles, una con toboganes, repartidas por los jardines",
"Várias piscinas infantis, uma com escorregas, espalhadas pelos jardins");
add("Free kids club for ages 4 to 11 and a teens club for 12 to 15 in summer",
"Miniclub gratuito dai 4 agli 11 anni e club per ragazzi dai 12 ai 15 in estate",
"Kostenloser Kinderclub für 4- bis 11-Jährige und ein Teenclub für 12- bis 15-Jährige im Sommer",
"Club infantil gratuito de 4 a 11 años y un club de adolescentes de 12 a 15 en verano",
"Clube infantil gratuito dos 4 aos 11 anos e um clube de adolescentes dos 12 aos 15 no verão");
add("All-inclusive with seven restaurants and multiple snack points",
"All-inclusive con sette ristoranti e diversi punti snack",
"All-inclusive mit sieben Restaurants und mehreren Snackpunkten",
"Todo incluido con siete restaurantes y varios puntos de snack",
"Tudo incluído com sete restaurantes e vários pontos de snack");
add("Open-air cinema, playground and sports courts on site",
"Cinema all'aperto, area gioco e campi sportivi in loco",
"Freiluftkino, Spielplatz und Sportplätze vor Ort",
"Cine al aire libre, zona de juegos y pistas deportivas en el propio resort",
"Cinema ao ar livre, parque infantil e campos desportivos no local");
add("Own beach, and Heraklion and Knossos within an easy day trip",
"Spiaggia propria, e Heraklion e Knossos a portata di una gita facile",
"Eigener Strand, und Heraklion und Knossos in leichter Tagesausflugs-Reichweite",
"Playa propia, y Heraklion y Knossos a una excursión fácil de un día",
"Praia própria, e Heraklion e Knossos ao alcance de um passeio fácil de um dia");

add("Outstanding water: seventeen pools, kids pools and a water park",
"Acqua straordinaria: diciassette piscine, vasche per bambini e un parco acquatico",
"Herausragendes Wasserangebot: siebzehn Pools, Kinderbecken und ein Wasserpark",
"Agua excepcional: diecisiete piscinas, piscinas infantiles y un parque acuático",
"Água excecional: dezassete piscinas, piscinas infantis e um parque aquático");
add("All-inclusive with a free kids club and a teen club",
"All-inclusive con miniclub gratuito e club per ragazzi",
"All-inclusive mit kostenlosem Kinderclub und einem Teenclub",
"Todo incluido con club infantil gratuito y club de adolescentes",
"Tudo incluído com clube infantil gratuito e clube de adolescentes");
add("Great base for Knossos and Heraklion day trips",
"Ottima base per gite a Knossos e Heraklion",
"Gute Basis für Tagesausflüge nach Knossos und Heraklion",
"Gran base para excursiones a Knossos y Heraklion",
"Ótima base para passeios a Knossos e Heraklion");

add("It is a very large resort that gets busy and can feel impersonal in peak summer",
"È un resort molto grande che si affolla e può sembrare impersonale in piena estate",
"Es ist ein sehr großes Resort, das voll wird und im Hochsommer unpersönlich wirken kann",
"Es un resort muy grande que se llena y puede resultar impersonal en pleno verano",
"É um resort muito grande que fica cheio e pode parecer impessoal em pleno verão");
add("A lot of walking between rooms, buffets and the water park",
"Si cammina molto tra camere, buffet e parco acquatico",
"Viel Laufen zwischen Zimmern, Buffets und Wasserpark",
"Mucho caminar entre habitaciones, bufés y parque acuático",
"Muita caminhada entre quartos, buffets e parque aquático");
add("Hersonissos town nearby is lively and touristy, not a quiet village",
"La cittadina di Hersonissos vicina è vivace e turistica, non un villaggio tranquillo",
"Der nahe Ort Hersonissos ist lebhaft und touristisch, kein ruhiges Dorf",
"El pueblo cercano de Hersonissos es animado y turístico, no una aldea tranquila",
"A vila próxima de Hersonissos é animada e turística, não uma aldeia tranquila");

add("The classic big all-inclusive for families who want maximum water, maximum inclusions and a base for Knossos. Accept the scale and the crowds, and request a bungalow near a pool with young children.",
"Il classico grande all-inclusive per le famiglie che vogliono il massimo di acqua, il massimo di servizi inclusi e una base per Knossos. Accettate le dimensioni e la folla, e con bambini piccoli chiedete un bungalow vicino a una piscina.",
"Das klassische große All-inclusive für Familien, die maximales Wasserangebot, maximale Inklusivleistungen und eine Basis für Knossos wollen. Nehmt die Größe und den Andrang in Kauf und fragt mit kleinen Kindern nach einem Bungalow in Poolnähe.",
"El clásico gran todo incluido para familias que quieren el máximo de agua, el máximo de servicios incluidos y una base para Knossos. Aceptad las dimensiones y el gentío, y con niños pequeños pedid un bungalow cerca de una piscina.",
"O clássico grande tudo incluído para famílias que querem o máximo de água, o máximo de serviços incluídos e uma base para Knossos. Aceitem a dimensão e a multidão, e com crianças pequenas peçam um bungalow perto de uma piscina.");

add("Pick up a resort map on day one and pin down the nearest kids pool and toilets to your bungalow: it saves a lot of hot cross-garden marches.",
"Prendete una mappa del resort il primo giorno e individuate la piscina per bambini e i bagni più vicini al vostro bungalow: risparmia un sacco di traversate roventi tra i giardini.",
"Holt euch am ersten Tag einen Resortplan und ermittelt das nächste Kinderbecken und die nächsten Toiletten zu eurem Bungalow: Das erspart viele heiße Märsche quer durch den Garten.",
"Coged un plano del resort el primer día y localizad la piscina infantil y los baños más cercanos a vuestro bungalow: ahorra muchas caminatas calurosas cruzando el jardín.",
"Peçam um mapa do resort no primeiro dia e localizem a piscina infantil e as casas de banho mais próximas do vosso bungalow: poupa muitas travessias quentes pelo jardim.");

add("Seventeen, plus a water park", "Diciassette, più un parco acquatico", "Siebzehn, plus ein Wasserpark", "Diecisiete, más un parque acuático", "Dezassete, mais um parque aquático");
add("All-inclusive, seven restaurants", "All-inclusive, sette ristoranti", "All-inclusive, sieben Restaurants", "Todo incluido, siete restaurantes", "Tudo incluído, sete restaurantes");
add("Ages 4 to 11, free; teens 12 to 15", "Dai 4 agli 11 anni, gratuito; ragazzi 12-15", "4 bis 11 Jahre, kostenlos; Teens 12 bis 15", "De 4 a 11 años, gratuito; adolescentes 12 a 15", "Dos 4 aos 11 anos, gratuito; adolescentes 12 a 15");
add("Own beach on site", "Spiaggia propria in loco", "Eigener Strand vor Ort", "Playa propia en el resort", "Praia própria no local");
add("Easy day trip, about 25 km", "Gita facile, circa 25 km", "Leichter Tagesausflug, etwa 25 km", "Excursión fácil, unos 25 km", "Passeio fácil de um dia, cerca de 25 km");
add("About 25 min from Heraklion", "Circa 25 min da Heraklion", "Etwa 25 Min. von Heraklion", "A unos 25 min de Heraklion", "A cerca de 25 min de Heraklion");

add("Water park day", "Giornata al parco acquatico", "Tag im Wasserpark", "Día en el parque acuático", "Dia no parque aquático");
add("Slides and splash zones plus a children's pool with its own slides.",
"Scivoli e aree spruzzi più una piscina per bambini con i suoi scivoli.",
"Rutschen und Spritzzonen plus ein Kinderbecken mit eigenen Rutschen.",
"Toboganes y zonas de chapoteo más una piscina infantil con sus propios toboganes.",
"Escorregas e zonas de salpicos mais uma piscina infantil com escorregas próprios.");
add("Free kids club", "Miniclub gratuito", "Kostenloser Kinderclub", "Club infantil gratuito", "Clube infantil gratuito");
add("Supervised crafts, games and sports for 4 to 11s, included in the rate.",
"Laboratori, giochi e sport sorvegliati per i 4-11 anni, inclusi nella tariffa.",
"Betreutes Basteln, Spielen und Sport für 4- bis 11-Jährige, im Preis inbegriffen.",
"Manualidades, juegos y deportes supervisados para los de 4 a 11, incluidos en la tarifa.",
"Trabalhos manuais, jogos e desportos supervisionados para os dos 4 aos 11, incluídos na tarifa.");
add("Knossos day trip", "Gita a Knossos", "Tagesausflug nach Knossos", "Excursión a Knossos", "Passeio a Knossos");
add("The Minoan palace and Heraklion museum, about 25 km along the coast.",
"Il palazzo minoico e il museo di Heraklion, a circa 25 km lungo la costa.",
"Der minoische Palast und das Museum von Heraklion, etwa 25 km entlang der Küste.",
"El palacio minoico y el museo de Heraklion, a unos 25 km por la costa.",
"O palácio minoico e o museu de Heraklion, a cerca de 25 km ao longo da costa.");
add("Open-air cinema", "Cinema all'aperto", "Freiluftkino", "Cine al aire libre", "Cinema ao ar livre");
add("Family film nights under the stars, a gentle end to a busy day.",
"Serate cinema in famiglia sotto le stelle, una fine dolce dopo una giornata intensa.",
"Familienfilmabende unter den Sternen, ein sanfter Ausklang eines vollen Tages.",
"Noches de cine en familia bajo las estrellas, un final suave para un día ajetreado.",
"Noites de cinema em família sob as estrelas, um final suave para um dia agitado.");

add("Buffet breakfast", "Colazione a buffet", "Frühstücksbuffet", "Desayuno bufé", "Pequeno-almoço buffet");
add("Beat the queues before the pools open.", "Evitate la fila prima che aprano le piscine.", "Den Warteschlangen zuvorkommen, bevor die Pools öffnen.", "Adelantaos a las colas antes de que abran las piscinas.", "Evitem as filas antes de as piscinas abrirem.");
add("Pools and kids club", "Piscine e miniclub", "Pools und Kinderclub", "Piscinas y club infantil", "Piscinas e clube infantil");
add("Stake out a shady spot early.", "Accaparratevi un posto all'ombra presto.", "Sichert euch früh ein schattiges Plätzchen.", "Aseguraos pronto un sitio a la sombra.", "Garantam cedo um lugar à sombra.");
add("Lunch and siesta", "Pranzo e siesta", "Mittagessen und Siesta", "Almuerzo y siesta", "Almoço e sesta");
add("Cool down in the shaded bungalow.", "Rinfrescatevi nel bungalow all'ombra.", "Abkühlen im schattigen Bungalow.", "Refrescaos en el bungalow a la sombra.", "Refresquem-se no bungalow à sombra.");
add("Water park", "Parco acquatico", "Wasserpark", "Parque acuático", "Parque aquático");
add("Slides for the big kids.", "Scivoli per i più grandi.", "Rutschen für die Großen.", "Toboganes para los mayores.", "Escorregas para os mais crescidos.");
add("A calm end to the day.", "Una fine di giornata tranquilla.", "Ein ruhiger Tagesausklang.", "Un final tranquilo para el día.", "Um final de dia tranquilo.");

add("All-inclusive and cots on request help with babies, but the large site means a lot of pushing the pram.",
"L'all-inclusive e le culle su richiesta aiutano con i neonati, ma il sito grande significa spingere molto il passeggino.",
"All-inclusive und Babybetten auf Anfrage helfen mit Babys, aber das große Gelände bedeutet viel Kinderwagenschieben.",
"El todo incluido y las cunas bajo petición ayudan con los bebés, pero el recinto grande implica empujar mucho el cochecito.",
"O tudo incluído e os berços a pedido ajudam com os bebés, mas o espaço grande implica empurrar muito o carrinho.");
add("Several shallow kids pools and the free club suit toddlers, if you base near a pool.",
"Diverse piscine per bambini poco profonde e il club gratuito si adattano ai piccolissimi, se alloggiate vicino a una piscina.",
"Mehrere flache Kinderbecken und der kostenlose Club passen zu Kleinkindern, wenn ihr nahe einem Pool wohnt.",
"Varias piscinas infantiles poco profundas y el club gratuito van bien para los más pequeños, si os alojáis cerca de una piscina.",
"Várias piscinas infantis pouco fundas e o clube gratuito adaptam-se aos mais pequenos, se ficarem perto de uma piscina.");
add("The peak age here: water park, kids club, pools and the beach all included.",
"L'età top qui: parco acquatico, miniclub, piscine e spiaggia tutti inclusi.",
"Das ideale Alter hier: Wasserpark, Kinderclub, Pools und Strand, alles inklusive.",
"La mejor edad aquí: parque acuático, club infantil, piscinas y playa, todo incluido.",
"A idade ideal aqui: parque aquático, clube infantil, piscinas e praia, tudo incluído.");
add("A summer teens club, water park and Knossos trips keep 12 to 15s engaged.",
"Un club per ragazzi in estate, il parco acquatico e le gite a Knossos tengono impegnati i 12-15 anni.",
"Ein Teenclub im Sommer, Wasserpark und Knossos-Ausflüge halten 12- bis 15-Jährige bei der Stange.",
"Un club de adolescentes en verano, el parque acuático y las salidas a Knossos mantienen entretenidos a los de 12 a 15.",
"Um clube de adolescentes no verão, o parque aquático e os passeios a Knossos mantêm ocupados os dos 12 aos 15.");

add("Is it too big for young children?", "È troppo grande per i bambini piccoli?", "Ist es zu groß für kleine Kinder?", "¿Es demasiado grande para niños pequeños?", "É grande demais para crianças pequenas?");
add("It is a large resort, so there is a lot of walking. It works well with young children if you request a bungalow near a pool and the kids club when you book.",
"È un resort grande, quindi si cammina molto. Funziona bene con i bambini piccoli se chiedete un bungalow vicino a una piscina e al miniclub in fase di prenotazione.",
"Es ist ein großes Resort, also läuft man viel. Mit kleinen Kindern klappt es gut, wenn ihr bei der Buchung einen Bungalow nahe Pool und Kinderclub anfragt.",
"Es un resort grande, así que se camina mucho. Funciona bien con niños pequeños si pedís un bungalow cerca de una piscina y del club infantil al reservar.",
"É um resort grande, por isso caminha-se muito. Funciona bem com crianças pequenas se pedirem um bungalow perto de uma piscina e do clube infantil ao reservar.");
add("What is included in the all-inclusive?", "Cosa comprende l'all-inclusive?", "Was ist im All-inclusive enthalten?", "¿Qué incluye el todo incluido?", "O que inclui o tudo incluído?");
add("Meals across seven restaurants, snacks, drinks and the kids club are included. Some activities such as tennis lessons carry an extra charge.",
"Sono inclusi i pasti in sette ristoranti, snack, bevande e il miniclub. Alcune attività come le lezioni di tennis prevedono un supplemento.",
"Mahlzeiten in sieben Restaurants, Snacks, Getränke und der Kinderclub sind inbegriffen. Manche Aktivitäten wie Tennisstunden kosten extra.",
"Se incluyen las comidas en siete restaurantes, los snacks, las bebidas y el club infantil. Algunas actividades como las clases de tenis tienen un coste adicional.",
"Estão incluídas as refeições em sete restaurantes, snacks, bebidas e o clube infantil. Algumas atividades, como as aulas de ténis, têm custo extra.");
add("Can we visit Knossos from here?", "Si può visitare Knossos da qui?", "Kann man von hier Knossos besuchen?", "¿Se puede visitar Knossos desde aquí?", "Dá para visitar Knossos a partir daqui?");
add("Yes. The Minoan palace of Knossos and Heraklion are about 25 km away, an easy half or full-day trip by car or organised excursion.",
"Sì. Il palazzo minoico di Knossos e Heraklion sono a circa 25 km, una gita facile di mezza giornata o di un giorno in auto o con escursione organizzata.",
"Ja. Der minoische Palast von Knossos und Heraklion sind etwa 25 km entfernt, ein leichter Halb- oder Ganztagsausflug per Auto oder organisierter Tour.",
"Sí. El palacio minoico de Knossos y Heraklion están a unos 25 km, una excursión fácil de media jornada o de un día en coche o con visita organizada.",
"Sim. O palácio minoico de Knossos e Heraklion ficam a cerca de 25 km, um passeio fácil de meio dia ou de um dia de carro ou em excursão organizada.");

// === HOTEL 5: Candia Park Village ===
add("Two-storey, self-catering apartments styled like a colourful Cretan village, each with a kitchenette, dining area and a garden terrace or veranda. The whole resort is designed to be walkable with a pram, and the kitchenette makes early teas and fussy-eater breakfasts genuinely easy.",
"Appartamenti su due piani con angolo cottura, in stile villaggio cretese colorato, ognuno con kitchenette, zona pranzo e terrazza o veranda sul giardino. L'intero resort è pensato per essere percorribile col passeggino, e la kitchenette rende davvero semplici le cene presto e le colazioni dei più schizzinosi.",
"Zweistöckige Apartments mit Selbstverpflegung im Stil eines bunten kretischen Dorfes, jedes mit Kochnische, Essbereich und Gartenterrasse oder Veranda. Das gesamte Resort ist so angelegt, dass man es mit dem Kinderwagen begehen kann, und die Kochnische macht frühe Mahlzeiten und Frühstücke für heikle Esser wirklich leicht.",
"Apartamentos de dos plantas con cocina, al estilo de un colorido pueblo cretense, cada uno con kitchenette, zona de comedor y terraza o galería con jardín. Todo el resort está pensado para recorrerse con el cochecito, y la kitchenette hace realmente fáciles las cenas tempranas y los desayunos de los más quisquillosos.",
"Apartamentos de dois pisos com cozinha, ao estilo de uma aldeia cretense colorida, cada um com kitchenette, zona de refeições e terraço ou varanda com jardim. Todo o resort foi pensado para se percorrer com o carrinho, e a kitchenette torna realmente fáceis as refeições cedo e os pequenos-almoços dos mais esquisitos.");

add("A charming self-catering village on Mirabello Bay, between Agios Nikolaos and Elounda, built as a cluster of colourful two-storey apartments around gardens and pools. It is small, calm and unusually easy with babies and toddlers: everything is pram-friendly, there is a free kids club, and two little private beaches sit right below the resort.",
"Un incantevole villaggio con angolo cottura sulla baia di Mirabello, tra Agios Nikolaos ed Elounda, costruito come un insieme di appartamenti colorati su due piani intorno a giardini e piscine. È piccolo, tranquillo e insolitamente comodo con neonati e piccolissimi: tutto è accessibile col passeggino, c'è un miniclub gratuito e due piccole spiagge private si trovano proprio sotto il resort.",
"Ein reizendes Selbstverpflegungsdorf an der Mirabello-Bucht, zwischen Agios Nikolaos und Elounda, angelegt als Gruppe bunter zweistöckiger Apartments rund um Gärten und Pools. Es ist klein, ruhig und ungewöhnlich unkompliziert mit Babys und Kleinkindern: alles ist kinderwagenfreundlich, es gibt einen kostenlosen Kinderclub, und zwei kleine Privatstrände liegen direkt unterhalb des Resorts.",
"Un encantador pueblo con cocina en la bahía de Mirabello, entre Agios Nikolaos y Elounda, construido como un conjunto de coloridos apartamentos de dos plantas alrededor de jardines y piscinas. Es pequeño, tranquilo e inusualmente cómodo con bebés y muy pequeños: todo es accesible con el cochecito, hay un club infantil gratuito y dos pequeñas playas privadas quedan justo debajo del resort.",
"Uma encantadora aldeia com cozinha na baía de Mirabello, entre Agios Nikolaos e Elounda, construída como um conjunto de coloridos apartamentos de dois pisos à volta de jardins e piscinas. É pequena, calma e invulgarmente fácil com bebés e mais pequenos: tudo é acessível com o carrinho, há um clube infantil gratuito, e duas pequenas praias privadas ficam mesmo por baixo do resort.");

add("Self-catering apartments with kitchenettes, ideal for babies and toddlers",
"Appartamenti con angolo cottura e kitchenette, ideali per neonati e piccolissimi",
"Apartments mit Selbstverpflegung und Kochnische, ideal für Babys und Kleinkinder",
"Apartamentos con cocina y kitchenette, ideales para bebés y muy pequeños",
"Apartamentos com cozinha e kitchenette, ideais para bebés e mais pequenos");
add("Free Mini Blues kids club for ages 4 to 12, with babysitting available",
"Miniclub Mini Blues gratuito dai 4 ai 12 anni, con babysitting disponibile",
"Kostenloser Mini-Blues-Kinderclub für 4- bis 12-Jährige, Babysitting verfügbar",
"Club infantil Mini Blues gratuito de 4 a 12 años, con canguro disponible",
"Clube infantil Mini Blues gratuito dos 4 aos 12 anos, com babysitting disponível");
add("Two small private beaches and three pools right on Mirabello Bay",
"Due piccole spiagge private e tre piscine proprio sulla baia di Mirabello",
"Zwei kleine Privatstrände und drei Pools direkt an der Mirabello-Bucht",
"Dos pequeñas playas privadas y tres piscinas justo en la bahía de Mirabello",
"Duas pequenas praias privadas e três piscinas mesmo na baía de Mirabello");
add("Designed to be fully pram-friendly across the whole resort",
"Progettato per essere pienamente accessibile col passeggino in tutto il resort",
"Auf dem gesamten Resortgelände vollständig kinderwagenfreundlich gestaltet",
"Diseñado para ser totalmente accesible con el cochecito en todo el resort",
"Concebido para ser totalmente acessível com o carrinho em todo o resort");
add("Five minutes to Agios Nikolaos and Elounda for tavernas and shops",
"Cinque minuti da Agios Nikolaos ed Elounda per taverne e negozi",
"Fünf Minuten nach Agios Nikolaos und Elounda für Tavernen und Geschäfte",
"Cinco minutos a Agios Nikolaos y Elounda para tabernas y tiendas",
"Cinco minutos de Agios Nikolaos e Elounda para tavernas e lojas");
add("Calm, small-village feel rather than a huge resort",
"Atmosfera di piccolo villaggio tranquillo più che di grande resort",
"Ruhiges Kleindorf-Gefühl statt eines riesigen Resorts",
"Ambiente de pequeño pueblo tranquilo en lugar de un enorme resort",
"Ambiente de pequena aldeia calma em vez de um enorme resort");

add("Kitchenettes plus pram-friendly paths make babies and toddlers easy",
"Kitchenette e percorsi accessibili col passeggino semplificano neonati e piccolissimi",
"Kochnischen plus kinderwagenfreundliche Wege machen Babys und Kleinkinder leicht",
"Kitchenettes y caminos accesibles con el cochecito facilitan a bebés y muy pequeños",
"Kitchenettes e caminhos acessíveis ao carrinho facilitam bebés e mais pequenos");
add("Free kids club and babysitting in a small, calm resort",
"Miniclub gratuito e babysitting in un resort piccolo e tranquillo",
"Kostenloser Kinderclub und Babysitting in einem kleinen, ruhigen Resort",
"Club infantil gratuito y canguro en un resort pequeño y tranquilo",
"Clube infantil gratuito e babysitting num resort pequeno e calmo");
add("Two private beaches on a sheltered bay",
"Due spiagge private su una baia riparata",
"Zwei Privatstrände an einer geschützten Bucht",
"Dos playas privadas en una bahía resguardada",
"Duas praias privadas numa baía abrigada");

add("The private beaches are small, and partly pebbly rather than long soft sand",
"Le spiagge private sono piccole e in parte di ciottoli anziché lunga sabbia morbida",
"Die Privatstrände sind klein und teils kiesig statt langer weicher Sand",
"Las playas privadas son pequeñas y en parte de guijarros en vez de larga arena suave",
"As praias privadas são pequenas e em parte de seixos em vez de longa areia macia");
add("Dining choice on site is limited compared with big all-inclusive resorts",
"La scelta di ristorazione in loco è limitata rispetto ai grandi resort all-inclusive",
"Die gastronomische Auswahl vor Ort ist im Vergleich zu großen All-inclusive-Resorts begrenzt",
"La oferta gastronómica en el propio resort es limitada frente a los grandes todo incluido",
"A oferta de restauração no local é limitada face aos grandes resorts com tudo incluído");
add("You will want a car for beaches, tavernas and days out",
"Servirà un'auto per spiagge, taverne e gite",
"Für Strände, Tavernen und Ausflüge wollt ihr ein Auto",
"Querréis un coche para playas, tabernas y excursiones",
"Vão querer um carro para praias, tavernas e passeios");

add("The pick for families with babies and toddlers who want a kitchen, calm and a free kids club in a small, characterful village. Self-cater the tricky meals and use Agios Nikolaos and Elounda for evenings out.",
"La scelta per le famiglie con neonati e piccolissimi che vogliono una cucina, tranquillità e un miniclub gratuito in un piccolo villaggio pieno di carattere. Cucinate in autonomia i pasti difficili e usate Agios Nikolaos ed Elounda per le serate fuori.",
"Die Wahl für Familien mit Babys und Kleinkindern, die eine Küche, Ruhe und einen kostenlosen Kinderclub in einem kleinen, charaktervollen Dorf wollen. Kocht die kniffligen Mahlzeiten selbst und nutzt Agios Nikolaos und Elounda für Abende außer Haus.",
"La elección para familias con bebés y muy pequeños que quieren cocina, calma y un club infantil gratuito en un pueblo pequeño y con carácter. Cocinad por vuestra cuenta las comidas complicadas y usad Agios Nikolaos y Elounda para las salidas nocturnas.",
"A escolha para famílias com bebés e mais pequenos que querem cozinha, calma e um clube infantil gratuito numa aldeia pequena e cheia de carácter. Cozinhem por conta própria as refeições complicadas e usem Agios Nikolaos e Elounda para as saídas à noite.");

add("Bring or hire a car and stock the kitchenette on arrival: it turns early breakfasts and toddler teas into a non-event and keeps the holiday budget down.",
"Portate o noleggiate un'auto e rifornite la kitchenette all'arrivo: trasforma le colazioni presto e le cene dei piccolissimi in una formalità e tiene basso il budget delle vacanze.",
"Bringt oder mietet ein Auto und füllt bei der Ankunft die Kochnische auf: So werden frühe Frühstücke und Kleinkind-Mahlzeiten zur Nebensache und das Urlaubsbudget bleibt niedrig.",
"Llevad o alquilad un coche y abasteced la kitchenette al llegar: convierte los desayunos tempranos y las cenas de los peques en un trámite y mantiene bajo el presupuesto de las vacaciones.",
"Levem ou aluguem um carro e abasteçam a kitchenette à chegada: transforma os pequenos-almoços cedo e as refeições dos mais pequenos numa formalidade e mantém baixo o orçamento das férias.");

add("Kitchenette in every apartment", "Kitchenette in ogni appartamento", "Kochnische in jedem Apartment", "Kitchenette en cada apartamento", "Kitchenette em cada apartamento");
add("Two small private beaches", "Due piccole spiagge private", "Zwei kleine Privatstrände", "Dos pequeñas playas privadas", "Duas pequenas praias privadas");
add("Mini Blues, ages 4 to 12, free", "Mini Blues, dai 4 ai 12 anni, gratuito", "Mini Blues, 4 bis 12 Jahre, kostenlos", "Mini Blues, de 4 a 12 años, gratuito", "Mini Blues, dos 4 aos 12 anos, gratuito");
add("Fully pram-friendly resort", "Resort pienamente accessibile col passeggino", "Vollständig kinderwagenfreundliches Resort", "Resort totalmente accesible con el cochecito", "Resort totalmente acessível ao carrinho");
add("Car recommended", "Auto consigliata", "Auto empfohlen", "Coche recomendado", "Carro recomendado");
add("About 1 hr 15 from Heraklion", "Circa 1 h 15 da Heraklion", "Etwa 1 Std. 15 von Heraklion", "A una 1 h 15 de Heraklion", "A cerca de 1 h 15 de Heraklion");

add("Private beach morning", "Mattina in spiaggia privata", "Vormittag am Privatstrand", "Mañana de playa privada", "Manhã de praia privada");
add("Two small, sheltered beaches on Mirabello Bay for an easy paddle.",
"Due piccole spiagge riparate sulla baia di Mirabello per un bagnetto tranquillo.",
"Zwei kleine, geschützte Strände an der Mirabello-Bucht für entspanntes Planschen.",
"Dos pequeñas playas resguardadas en la bahía de Mirabello para un chapuzón tranquilo.",
"Duas pequenas praias abrigadas na baía de Mirabello para um banho tranquilo.");
add("Mini Blues kids club", "Miniclub Mini Blues", "Mini-Blues-Kinderclub", "Club infantil Mini Blues", "Clube infantil Mini Blues");
add("Free supervised games and crafts for 4 to 12s, with babysitting on request.",
"Giochi e laboratori sorvegliati e gratuiti per i 4-12 anni, con babysitting su richiesta.",
"Kostenlose betreute Spiele und Bastelaktionen für 4- bis 12-Jährige, Babysitting auf Anfrage.",
"Juegos y manualidades supervisados y gratuitos para los de 4 a 12, con canguro bajo petición.",
"Jogos e trabalhos manuais supervisionados e gratuitos para os dos 4 aos 12, com babysitting a pedido.");
add("Agios Nikolaos harbour", "Porto di Agios Nikolaos", "Hafen von Agios Nikolaos", "Puerto de Agios Nikolaos", "Porto de Agios Nikolaos");
add("Five minutes to the pretty harbour town, with its lake, boats and ice cream.",
"Cinque minuti dalla graziosa cittadina portuale, con il suo lago, le barche e i gelati.",
"Fünf Minuten zur hübschen Hafenstadt mit See, Booten und Eis.",
"Cinco minutos a la bonita ciudad portuaria, con su lago, sus barcos y sus helados.",
"Cinco minutos da bonita cidade portuária, com o seu lago, os barcos e os gelados.");
add("Spinalonga boat trip", "Gita in barca a Spinalonga", "Bootsausflug nach Spinalonga", "Excursión en barco a Spinalonga", "Passeio de barco a Spinalonga");
add("A short boat trip from Elounda to the old island fortress, an easy family outing.",
"Una breve gita in barca da Elounda alla vecchia fortezza sull'isola, un'uscita facile in famiglia.",
"Eine kurze Bootsfahrt von Elounda zur alten Inselfestung, ein leichter Familienausflug.",
"Una breve excursión en barco desde Elounda a la vieja fortaleza de la isla, una salida fácil en familia.",
"Um curto passeio de barco de Elounda à antiga fortaleza da ilha, uma saída fácil em família.");

add("Breakfast in the apartment", "Colazione in appartamento", "Frühstück im Apartment", "Desayuno en el apartamento", "Pequeno-almoço no apartamento");
add("Kitchenette makes it stress-free.", "La kitchenette lo rende senza stress.", "Die Kochnische macht es stressfrei.", "La kitchenette lo hace sin estrés.", "A kitchenette torna tudo sem stress.");
add("Private beach", "Spiaggia privata", "Privatstrand", "Playa privada", "Praia privada");
add("Sheltered water on Mirabello Bay.", "Acqua riparata sulla baia di Mirabello.", "Geschütztes Wasser an der Mirabello-Bucht.", "Agua resguardada en la bahía de Mirabello.", "Água abrigada na baía de Mirabello.");
add("Lunch and nap", "Pranzo e pisolino", "Mittagessen und Mittagsschlaf", "Almuerzo y siesta", "Almoço e sesta");
add("Quiet time on the garden terrace.", "Momento tranquillo sulla terrazza del giardino.", "Ruhige Zeit auf der Gartenterrasse.", "Rato de calma en la terraza del jardín.", "Momento de sossego no terraço do jardim.");
add("Pool and kids club", "Piscina e miniclub", "Pool und Kinderclub", "Piscina y club infantil", "Piscina e clube infantil");
add("Free club while parents relax.", "Club gratuito mentre i genitori si rilassano.", "Kostenloser Club, während die Eltern entspannen.", "Club gratuito mientras los padres se relajan.", "Clube gratuito enquanto os pais relaxam.");
add("Dinner in Agios Nikolaos", "Cena ad Agios Nikolaos", "Abendessen in Agios Nikolaos", "Cena en Agios Nikolaos", "Jantar em Agios Nikolaos");
add("Five minutes to harbour tavernas.", "Cinque minuti dalle taverne del porto.", "Fünf Minuten zu den Hafentavernen.", "Cinco minutos a las tabernas del puerto.", "Cinco minutos das tavernas do porto.");

add("The standout choice for babies: kitchenettes, pram-friendly paths and cots on request.",
"La scelta migliore per i neonati: kitchenette, percorsi accessibili col passeggino e culle su richiesta.",
"Die herausragende Wahl für Babys: Kochnischen, kinderwagenfreundliche Wege und Babybetten auf Anfrage.",
"La opción destacada para bebés: kitchenettes, caminos accesibles con el cochecito y cunas bajo petición.",
"A escolha de destaque para bebés: kitchenettes, caminhos acessíveis ao carrinho e berços a pedido.");
add("Small sheltered beaches, shallow pools and a free club make this easy with toddlers.",
"Piccole spiagge riparate, piscine basse e un club gratuito rendono tutto facile con i piccolissimi.",
"Kleine geschützte Strände, flache Pools und ein kostenloser Club machen es mit Kleinkindern leicht.",
"Pequeñas playas resguardadas, piscinas poco profundas y un club gratuito lo hacen fácil con los más pequeños.",
"Pequenas praias abrigadas, piscinas pouco fundas e um clube gratuito tornam tudo fácil com os mais pequenos.");
add("Kids get the club, pools, beaches and boat trips to Spinalonga nearby.",
"I bambini hanno il club, le piscine, le spiagge e le gite in barca a Spinalonga lì vicino.",
"Kinder bekommen den Club, Pools, Strände und Bootsausflüge zum nahen Spinalonga.",
"Los niños tienen el club, las piscinas, las playas y las excursiones en barco a la cercana Spinalonga.",
"As crianças têm o clube, as piscinas, as praias e os passeios de barco à vizinha Spinalonga.");
add("Quieter for teens, though watersports and Agios Nikolaos nightspots are close by.",
"Più tranquillo per i ragazzi, anche se sport acquatici e locali di Agios Nikolaos sono vicini.",
"Ruhiger für Teenager, auch wenn Wassersport und die Lokale von Agios Nikolaos nah sind.",
"Más tranquilo para los adolescentes, aunque los deportes acuáticos y el ocio de Agios Nikolaos quedan cerca.",
"Mais calmo para os adolescentes, embora os desportos aquáticos e a noite de Agios Nikolaos fiquem perto.");

add("Are the apartments really self-catering?", "Gli appartamenti sono davvero attrezzati per cucinare?", "Sind die Apartments wirklich mit Selbstverpflegung?", "¿Los apartamentos están realmente equipados para cocinar?", "Os apartamentos estão mesmo equipados para cozinhar?");
add("Yes. Each two-storey apartment has a kitchenette with a dining area, so you can do breakfasts and children's teas in the room. There are restaurants on site too.",
"Sì. Ogni appartamento su due piani ha una kitchenette con zona pranzo, così potete fare colazioni e cene dei bambini in camera. Ci sono anche ristoranti in loco.",
"Ja. Jedes zweistöckige Apartment hat eine Kochnische mit Essbereich, sodass ihr Frühstücke und Kindermahlzeiten im Zimmer machen könnt. Es gibt auch Restaurants vor Ort.",
"Sí. Cada apartamento de dos plantas tiene una kitchenette con zona de comedor, así que podéis preparar desayunos y cenas de los niños en la habitación. También hay restaurantes en el resort.",
"Sim. Cada apartamento de dois pisos tem uma kitchenette com zona de refeições, por isso podem fazer pequenos-almoços e refeições das crianças no quarto. Também há restaurantes no local.");
add("What are the beaches like?", "Come sono le spiagge?", "Wie sind die Strände?", "¿Cómo son las playas?", "Como são as praias?");
add("Two small private beaches sit on sheltered Mirabello Bay, calm for paddling but compact and partly pebbly rather than long soft sand.",
"Due piccole spiagge private si affacciano sulla riparata baia di Mirabello, calme per i bagnetti ma compatte e in parte di ciottoli anziché lunga sabbia morbida.",
"Zwei kleine Privatstrände liegen an der geschützten Mirabello-Bucht, ruhig zum Planschen, aber kompakt und teils kiesig statt langer weicher Sand.",
"Dos pequeñas playas privadas dan a la resguardada bahía de Mirabello, tranquilas para chapotear pero compactas y en parte de guijarros en vez de larga arena suave.",
"Duas pequenas praias privadas dão para a abrigada baía de Mirabello, calmas para o banho mas compactas e em parte de seixos em vez de longa areia macia.");
add("Do we need a car?", "Serve un'auto?", "Brauchen wir ein Auto?", "¿Necesitamos coche?", "Precisamos de carro?");
add("It helps a lot. Agios Nikolaos and Elounda are five minutes away, and a car makes beaches, tavernas and the Spinalonga boat trip much easier.",
"Aiuta molto. Agios Nikolaos ed Elounda sono a cinque minuti, e un'auto rende molto più facili spiagge, taverne e la gita in barca a Spinalonga.",
"Es hilft sehr. Agios Nikolaos und Elounda sind fünf Minuten entfernt, und ein Auto macht Strände, Tavernen und den Bootsausflug nach Spinalonga viel einfacher.",
"Ayuda mucho. Agios Nikolaos y Elounda están a cinco minutos, y un coche facilita mucho las playas, las tabernas y la excursión en barco a Spinalonga.",
"Ajuda muito. Agios Nikolaos e Elounda ficam a cinco minutos, e um carro torna muito mais fáceis as praias, as tavernas e o passeio de barco a Spinalonga.");

//__ENTRIES__

const LOCALES = ['it', 'de', 'es', 'pt'];
let count = 0;
const missing = new Set();

function isLocalizedNode(o) {
  return o && typeof o === 'object' && !Array.isArray(o) && Object.prototype.hasOwnProperty.call(o, 'en');
}

function translateValue(en) {
  if (typeof en === 'string') {
    const t = T[en];
    if (!t) { missing.add(en); return null; }
    return t;
  }
  if (Array.isArray(en)) {
    const out = { it: [], de: [], es: [], pt: [] };
    for (const item of en) {
      const t = T[item];
      if (!t) { missing.add(item); return null; }
      for (const l of LOCALES) out[l].push(t[l]);
    }
    return out;
  }
  return null;
}

function walk(node) {
  if (Array.isArray(node)) {
    for (const el of node) walk(el);
    return;
  }
  if (node && typeof node === 'object') {
    if (isLocalizedNode(node)) {
      const tr = translateValue(node.en);
      if (tr) {
        for (const l of LOCALES) node[l] = tr[l];
        count++;
      }
    }
    for (const k of Object.keys(node)) {
      const v = node[k];
      if (v && typeof v === 'object') walk(v);
    }
    return;
  }
}

walk(data);

if (missing.size > 0) {
  console.error('MISSING TRANSLATIONS (' + missing.size + '):');
  for (const m of missing) console.error(JSON.stringify(m));
  process.exit(1);
}

fs.writeFileSync(PATH, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('Localized nodes translated: ' + count);
