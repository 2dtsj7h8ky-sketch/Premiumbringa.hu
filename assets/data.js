/* =========================================================================
   Premium Bringa: készletadat (egy helyen, minden oldal ezt használja)

   KÉP: `mappa` = az assets/kepek/ alatti mappa neve. A fotók sorrendben 1..10.
        A borító az 1.jpg (ha még nincs 1.jpg, automatikusan a 2.jpg-re vált).
   LEÍRÁS (`leiras`): NE az alkatrészeket sorold; azt szólja meg, KINEK ideális
        a kerékpár; szakértői, tanácsadó hangon. Kerüld a kötőjelet (—) és a "gép" szót.
        A MÉRETET/testmagasságot NE írd a leírásba: azt a méret-blokk tartalmazza.
   FELSZERELTSÉG (`reszletek`): csoportosított, bolti stílusú spec; a `suly` külön.
   megjegyzes (opcionális): ismert hiba/eltérés ŐSZINTE közlése; a termékoldalon
        külön, jól látható „Fontos" blokként jelenik meg. Az így közölt,
        átadáskor ismert hibára a 30 napos garancia nem terjed ki.
   eladva (opcionális, YYYY-MM-DD): a darab ELKELT. Az eladástól számított 14 napig
        még látszik „Eladva" jelöléssel (limitált érzet), utána magától lekerül.
   kiemelt: a főoldali hero showcase ezt a darabot mutatja (csak az első számít).
   felveve: a felvétel dátuma (YYYY-MM-DD). Ez hajtja a "Legfrissebb" rendezést,
        a "Friss" jelvényt (a legújabbhoz képest 14 napon belül) és a "Frissítve" dátumot.
        ÚJ bringánál mindig állítsd az aznapi dátumra.
   ========================================================================= */
const KESZLET = [
  { id:"focus-jam-c-sl", mappa:"FocusJamCSL", kepDb:15, marka:"Focus", model:"Focus Jam C SL", magassag:[178,188], felveve:"2026-10-10",
    kategoria:"Trail · Fully · Karbon", szegmens:"trail", allapot:"Kiváló", ev:2017, meret:"L", kerekmeret:"27,5″", suly:"kb. 12 kg", ar:550000,
    vaz:"Jam C teljes karbon, F.O.L.D. felfüggesztés · kb. 12 kg", villa:"RockShox Pike RCT3, 140 mm",
    hajtas:"SRAM X01 Eagle 1×12", fek:"SRAM Guide Ultimate négydugattyús, 180/180",
    kerek:"27,5″ DT Swiss XM 1501 Spline One · Continental Mountain King 2,4",
    spec:"27,5″ teljes karbon trail fully · RockShox Pike RCT3 és Monarch RT, 140 mm · SRAM X01 Eagle, Guide Ultimate.",
    leiras:"A Jam család csúcsmodellje, amivel a Focus 2017-ben új korszakot nyitott: a Design & Innovation Award a kategória akkori új mércéjeként írta le. A teljes karbon vázban a hátsó háromszög is egyetlen darabból készült, a szabadalmaztatott F.O.L.D. felfüggesztés pedig a hátsó rugózás mozgó elemeit a vázba rejti, ettől alacsony a súlypont és érzékenyebb a rugózás. A jellegzetes, kobrafejszerűen kiszélesedő felsőcső nem csak látvány, a kormányzás pontosságát szolgálja. Elöl Pike RCT3, a Pike legtöbbet tudó csillapításával, hátul Monarch RT, a fék körben négydugattyús Guide Ultimate, a hajtás X01 Eagle, a kerék svájci DT Swiss, a nyereg olasz fi'zi:k, az egész nagyjából tizenkét kiló. Annak való, aki régóta egy igazi csúcsmodellre vágyik, amelynek a története, a technológiája és a felszereltsége is ugyanazon a szinten van. A 6 999 eurós gyári ár helyett most 550 ezer forintért. Rendkívül keveset futott, megvigyázott, eredeti példány.",
    megjegyzes:"Egyetlen tudatos eltérés a gyári állapottól: a hidraulikus RockShox Reverb helyett mechanikus dropper nyeregcső került rá, a hosszú távú megbízhatóság érdekében. Szállításból adódó apró felületi karcok előfordulhatnak, a fotókon látható mértékben. A teleszkóp, a rugóstag és a csapágyak feszesen, csendesen dolgoznak, a kopóalkatrészek bőséges tartalékkal rendelkeznek.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Focus Jam C, MAX technology teljes karbon, 27,5″"],["Felfüggesztés","F.O.L.D., szabadalmaztatott, vázba rejtett"],["Teleszkóp","RockShox Pike RCT3, 140 mm"],["Rugóstag","RockShox Monarch RT, 140 mm"],["Nyeregcső","Mechanikus dropper"]] },
      { cs:"Hajtás", t:[["Váltó","SRAM X01 Eagle, 12 sebesség"],["Hajtómű","SRAM X01 Carbon, 32T"],["Kazetta","SRAM XG-1295 Eagle, 10–50T"],["Lánc","SRAM X01 Eagle"]] },
      { cs:"Fék & kerék", t:[["Fék","SRAM Guide Ultimate négydugattyús"],["Tárcsák","180 / 180 mm"],["Kerékszett","DT Swiss XM 1501 Spline One, 27,5″"],["Gumi","Continental Mountain King 2, 2,4"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Concept CPX karbon riser"],["Nyereg","fi'zi:k Tundra M3 karbon"],["Súly","kb. 12 kg"],["Gyári ár","6 999 €"]] }
    ] },
  { id:"bergamont-grandurance-5", mappa:"BergamontGrandurance5", marka:"Bergamont", model:"Bergamont Grandurance 5", magassag:[170,183], felveve:"2026-10-05",
    kategoria:"Gravel · All-road", szegmens:"gravel", allapot:"Kiváló", ev:2019, meret:"M (55 cm)", kerekmeret:"28″", suly:"10,4 kg", ar:320000,
    vaz:"Grandurance alumínium · 10,4 kg", villa:"Grandurance alumínium, tárcsafékes",
    hajtas:"Shimano Sora 2×9", fek:"Shimano BR-R317 tárcsafék, 160/160",
    kerek:"28″ BGM Allroad · Continental Grand Sport Race",
    spec:"28″ alumínium all-road gravel · Shimano Sora 2×9 · tárcsafék, 10,4 kg.",
    leiras:"A Bergamont hamburgi gyártó a Scott csoportból, a Grandurance pedig az all-road vonaluk: egy 10,4 kilogrammos gravel váz, amit ugyanúgy szántak a városi aszfaltra, mint a földútra. A szögletes, jellegzetes formája miatt messziről felismerni. A Shimano Sora hajtás egyszerű, megbízható és bárhol szervizelhető, a tárcsafék minden időben biztosan lassít, a kifelé hajló kormány pedig hosszú távon is kényelmes fogást ad. Most Continental Grand Sport Race gumikkal gurul, ami aszfalton kifejezetten gyorssá teszi. A váz viszont 37 milliméterig enged gumit, tehát egy cserével földúti gravellé alakítható, a sárvédő-fülekkel pedig ingázásra is berendezhető. Szép, megkímélt, gyári példány.",
    megjegyzes:"A kerékpáron kisebb, használatból adódó esztétikai nyomok láthatók, a fotókon szereplő mértékben. Ez kizárólag esztétikai jellegű, a működést nem érinti. Az árat ennek tudatában alakítottuk ki, és vásárlás előtt szívesen mutatunk róla közelebbi képet is.",
    reszletek:[
      { cs:"Váz & villa", t:[["Váz","Bergamont Grandurance, 700c alumínium"],["Villa","Grandurance alumínium"],["Gumihely","37 mm-ig"],["Felszerelhetőség","Sárvédő-fülek"],["Súly","10,4 kg"]] },
      { cs:"Hajtás", t:[["Hátsó váltó","Shimano Sora RD-R3000, 9 sebesség"],["Első váltó","Shimano Sora FD-R3000, 2 sebesség"],["Hajtómű","Shimano Sora FC-R3000, 50/34T"],["Kazetta","Shimano CS-HG201-9, 11–34T"],["Lánc","KMC X9"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano BR-R317 tárcsafék"],["Tárcsák","160 / 160 mm"],["Felni","28″ BGM Allroad"],["Gumi","Continental Grand Sport Race"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Syncros Creston 2.0, kifelé hajló"],["Nyereg","Syncros FL2.5"],["Kerékméret","28″"]] }
    ] },
  { id:"cube-acid-2", mappa:"CubeAcid2", marka:"Cube", model:"Cube Acid", magassag:[182,196], felveve:"2026-10-05",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Jó", ev:2020, meret:"XL (21″)", kerekmeret:"29″", suly:"13,3 kg", ar:230000,
    vaz:"Cube Aluminium Lite, dupla falazott · 13,3 kg", villa:"RockShox Recon Silver levegős, 100 mm, PopLoc kormányról zárható",
    hajtas:"SRAM NX Eagle 1×12", fek:"Shimano BR-MT400 hidraulikus, 180/160",
    kerek:"29″ Cube SD20 · Schwalbe Smart Sam Active 2,25",
    spec:"29″ alumínium XC merevvázas · levegős RockShox Recon 100 mm · SRAM NX Eagle 1×12.",
    leiras:"Az Acid az a Cube, amit a gyártó már a haladóknak szánt: ugyanaz a könnyű, dupla falazott váz, mint a Reaction vonalon, egy szinttel a belépő modellek fölötti felszereltséggel. A levegős RockShox Recon villát a saját súlyodra hangolod, a kormányról pedig egy mozdulattal zárod. A SRAM Eagle egyláncos hajtás egyetlen karral, tizenkét fokozattal ad megoldást minden emelkedőre és tempóra. A vázban rejtett csomagtartó-fülek vannak, tehát hétköznap ingázásra, hétvégén terepre is befogható, és egyikben sem érzel kompromisszumot. A villa és a hajtás is többet tud, mint amennyit az ára sejtet. Gyári, hibátlan műszaki állapotú, megkímélt példány.",
    megjegyzes:"A vázon használatból vagy szállításból adódó felületi esztétikai hibák láthatók, a fotókon szereplő mértékben. Ez kizárólag esztétikai jellegű, a műszaki állapot hibátlan. Az árat ennek tudatában alakítottuk ki, és vásárlás előtt szívesen mutatunk róla közelebbi képet is.",
    reszletek:[
      { cs:"Váz & futómű", t:[["Váz","Cube Acid, Aluminium Lite, dupla falazott, 29″"],["Teleszkóp","RockShox Recon Silver levegős, 100 mm"],["Zárás","PopLoc, kormányról"],["Súly","13,3 kg"]] },
      { cs:"Hajtás", t:[["Váltó","SRAM NX Eagle, 12 sebesség"],["Hajtómű","SRAM Stylo Eagle DUB, 32T"],["Kazetta","SRAM XG-1230 Eagle, 11–50T"],["Lánc","SRAM NX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano BR-MT400 hidraulikus tárcsa"],["Tárcsák","180 / 160 mm"],["Felni","29″ Cube SD20"],["Gumi","Schwalbe Smart Sam Active 2,25"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Rise Trail Bar, 680 mm"],["Nyereg","Natural Fit Venec Lite"],["Felszerelhetőség","Rejtett csomagtartó-fülek"],["Kerékméret","29″"]] }
    ] },
  { id:"cube-stereo-one22", mappa:"CubeStereoONE22", marka:"Cube", model:"Cube Stereo ONE22 HPC TM", magassag:[175,188], felveve:"2026-09-26", kiemelt:true,
    kategoria:"Trail · Fully", szegmens:"trail", allapot:"Újszerű", ev:2024, meret:"L", kerekmeret:"29″", suly:"13,5 kg", ar:700000,
    vaz:"HPC karbon monocoque első vázháromszög · 13,5 kg", villa:"Fox 34 Float Rhythm, 130 mm",
    hajtas:"SRAM GX Eagle 1×12", fek:"Shimano XT BR-M8120 négydugattyús, 203/180",
    kerek:"29″ Fulcrum Red Metal · Maxxis Ardent 2,4",
    spec:"29″ karbon trail fully · Fox 34 és Fox Float DPS, 130 mm · SRAM GX Eagle 1×12, XT fékkel.",
    leiras:"Egy összteleszkópos, amivel felfelé ugyanúgy öröm menni, mint lefelé. A számokban is látszik, miért: karbon első vázháromszöggel, Fox futóművel és XT fékkel együtt 13,5 kilogramm, ami ebben a kategóriában kivételesen kevés. A rugóstagon háromállású kapcsoló van, tehát nyitva nyeli a terepet, zárva viszont olyan feszes, mint egy merevvázas, és ez egyetlen mozdulat. A fék elöl négydugattyús XT 203-as tárcsával, ami hosszú ereszkedésen sem fárad el. A négycsuklós hátsó felfüggesztés fedett csapágyakkal nyugodt és tapadós marad. A flashgrey és olíva párosítás visszafogott, mégis karakteres, az a fajta szín, ami mellett elmész, aztán visszafordulsz. Keveset futott, szinte teljesen karcmentes példány, a teleszkóp, a rugóstag és a csapágyak feszesen, csendesen dolgoznak.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Cube Stereo ONE22 HPC, karbon monocoque, 29″"],["Teleszkóp","Fox 34 Float Rhythm, 130 mm"],["Rugóstag","Fox Float DPS, 130 mm, háromállású kapcsolóval"],["Hátsó felfüggesztés","ETC négycsuklós, fedett csapágyakkal"],["Nyeregcső","Cube dropper"]] },
      { cs:"Hajtás", t:[["Váltó","SRAM GX Eagle, 12 sebesség"],["Hajtómű","SRAM X1 1000 Eagle DUB, 30T"],["Kazetta","SRAM XG-1275 Eagle, 10–52T"],["Lánc","SRAM Eagle"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano XT BR-M8120 négydugattyús elöl, BR-M8100 hátul"],["Tárcsák","203 / 180 mm"],["Felni","29″ Fulcrum Red Metal, tubeless ready"],["Gumi","Maxxis Ardent 2,4, EXO, tubeless ready"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Newmen Evolution SL, 760 mm"],["Súly","13,5 kg"],["Kerékméret","29″"],["Fényezés","Flashgrey és olíva"]] }
    ] },
  { id:"cube-reaction-tm", mappa:"CubeReactionTM", marka:"Cube", model:"Cube Reaction TM", magassag:[176,188], felveve:"2026-09-18",
    kategoria:"Trail · Hardtail", szegmens:"trail", allapot:"Jó", ev:2020, meret:"L (20″)", kerekmeret:"27,5″", suly:"13,9 kg", ar:280000,
    vaz:"High Performance Aluminium · 13,9 kg", villa:"X-Fusion RC32, 130 mm, állítható keménység",
    hajtas:"SRAM SX Eagle 1×12", fek:"Magura MT Thirty hidraulikus, 180/180",
    kerek:"27,5″ Rodi TRYP 35 (Tubeless Ready) · Michelin Wild AM 2.6",
    spec:"27,5″ trail hardtail · X-Fusion 130 mm · SRAM Eagle 1×12, dropperrel.",
    leiras:"Annak, aki merevfarún is játszani akar, nem csak haladni. A Cube Reaction TM nem a klasszikus XC vonal, hanem trail felé tolt hardtail: a hosszabb, 130 mm-es rugóút, a stabilabb geometria és a vastagabb gumik együtt sokkal magabiztosabb, élvezetesebb terepet adnak. Az ugratás, a köves szakasz és a gyors lejtő nem hozza zavarba, sőt kedvet csinál hozzá. A dropper nyeregcső, az erősebb fékek és a trailre hangolt felépítés olyan karaktert adnak, ami közelebb áll az endurós élményhez, mint egy hagyományos merevfarúhoz. Megvan benne a Reaction gyorsasága, de mellé kapsz egy adag szabadságot és játékosságot.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","High Performance Aluminium váz"],["Teleszkóp","X-Fusion RC32, 130 mm, állítható keménység"],["Nyeregcső","Cube Dropper Post, 130 mm"]] },
      { cs:"Hajtás", t:[["Hajtómű","SRAM X1 1000 Eagle, 30T"],["Hátsó váltó","SRAM SX Eagle, 12 sebesség"],["Fogaskoszorú","SRAM PG-1210 Eagle, 11–50T"],["Lánc","SRAM SX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fékek","Magura MT Thirty hidraulikus, 180/180"],["Kerékszett","27,5″ Rodi TRYP 35, Tubeless Ready"],["Gumik","Michelin Wild AM 2.6, Tubeless Ready"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Newmen Evolution, 760 mm"]] }
    ] },

  { id:"cube-attention-sl", mappa:"CubeAttentionSL", marka:"Cube", model:"Cube Attention SL", magassag:[182,196], felveve:"2026-08-20",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2022, meret:"XL (21″)", kerekmeret:"29″", suly:"13,6 kg", ar:290000,
    vaz:"Aluminium Lite · 13,6 kg", villa:"RockShox Judy TK Air, 100 mm, zárható",
    hajtas:"Shimano Deore XT 1×12", fek:"Shimano MT200 hidraulikus, 180/160",
    kerek:"29″ Cube ZX20 · Schwalbe Smart Sam Active 2.25",
    spec:"29″ alu XC hardtail · RockShox Judy 100 mm · Shimano Deore XT 1×12.",
    leiras:"Annak, aki sportos, modern MTB-t keres valódi Cube minőséggel. A Cube Attention SL az a szint, ahol a merevfarú MTB igazi sporteszközzé válik: a könnyű alumínium váz és a modern geometria gyorssá, stabillá és magabiztossá teszi. Hátul Shimano Deore XT váltó dolgozik 1×12 hajtással, ami terhelés alatt is tisztán vált, elöl a kormányról zárható, levegős RockShox Judy villa. Elsősorban könnyű, sokoldalú társ a hétköznapokra: fürgén pörög a városi aszfalton és a kerékpárúton, elvisz egy hosszabb túrára, és a terepen is magabiztos marad, ahol izgalmasabbra fordul. Univerzális, kiszámítható és élvezetes, érezhetően dinamikusabb az átlagnál.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Aluminium Lite váz"],["Teleszkóp","RockShox Judy TK Air, 100 mm, zárható"]] },
      { cs:"Hajtás", t:[["Hajtómű","Acid, 32T"],["Hátsó váltó","Shimano Deore XT, 12 sebesség"],["Fogaskoszorú","Shimano Deore CS-M6100, 10–51T"],["Lánc","Shimano CN-M6100"]] },
      { cs:"Fék & kerék", t:[["Fékek","Shimano MT200 hidraulikus, 180/160"],["Kerékszett","29″ Cube ZX20"],["Gumik","Schwalbe Smart Sam Active 2.25"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Rise Trail Bar, 680 mm"],["Nyereg","Natural Fit Venec Lite"]] }
    ] },

  { id:"cube-cross-sl", mappa:"CubeCrossSL", marka:"Cube", model:"Cube Cross SL", magassag:[158,170], felveve:"2026-08-20",
    kategoria:"Trekking · Női", szegmens:"trekking", allapot:"Kiváló", ev:2020, meret:"S (46 cm)", kerekmeret:"28″", suly:"11,7 kg", ar:300000,
    vaz:"Aluminium SuperLite · 11,7 kg", villa:"RockShox Paragon Gold RMT, 65 mm, remote lockout",
    hajtas:"SRAM GX Eagle 1×12", fek:"Shimano XT M8100 hidraulikus, 180/160",
    kerek:"28″ DT Swiss CSW MA 1.9 · Specialized Pathfinder",
    spec:"28″ könnyű cross-trekking · RockShox Paragon 65 mm · SRAM GX Eagle 1×12.",
    leiras:"Annak, aki nem a jó, hanem a legjobb trekkinget keresi, kényelmes, könnyű felüléssel. A Cube Cross SL akkor született, amikor a Cube a legjobb alkatrészekből épített egy pehelykönnyű trekkinget: mindössze 11,7 kg, ami ebben a kategóriában mindent megváltoztat. A nyeregben azonnal érzed, fürge és élénk, és nem fárad el, akár a városban tekersz, akár egy egész napos túrán. A felszereltsége a szokásos trekkingek fölött jár: SRAM GX Eagle hajtás, Shimano XT fék és RockShox levegős teleszkóp. Az elegáns trapézváz kényelmes, könnyű fel- és leszállással, a súlya és a minősége viszont a csúcskategóriáé. Ha igényes vagy, és a látványra is adsz, ez a tiéd lesz.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Aluminium SuperLite váz"],["Teleszkóp","RockShox Paragon Gold RMT, 65 mm, remote lockout"]] },
      { cs:"Hajtás", t:[["Hajtómű","SRAM X1 Eagle DUB, 38T"],["Hátsó váltó","SRAM GX Eagle, 12 sebesség"],["Fogaskoszorú","SRAM XG-1230 Eagle, 11–50T"],["Lánc","SRAM NX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fékek","Shimano XT M8100 hidraulikus, 180/160"],["Kerékszett","28″ DT Swiss CSW MA 1.9"],["Gumik","Specialized Pathfinder"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Newmen Advanced Carbon, 740 mm"]] }
    ] },

  { id:"giant-escape-2", mappa:"GiantEscape", marka:"Giant", model:"Giant Escape 2", magassag:[175,188], felveve:"2026-08-15",
    kategoria:"Fitness · Hybrid", szegmens:"fitness", allapot:"Kiváló", ev:2021, meret:"L", kerekmeret:"28″", suly:"kb. 13 kg", ar:230000,
    vaz:"ALUXX-Grade alumínium · kb. 13 kg", villa:"Merev (rigid) villa",
    hajtas:"Shimano Altus 2×8", fek:"Tektro HD-R280 hidraulikus tárcsa, 160/160",
    kerek:"28″ Giant GX · Giant S-X2 (defektvédett)",
    spec:"28″ fitness hybrid · merev villa · Shimano 2×8, hidraulikus tárcsafék.",
    leiras:"Annak, aki praktikus, gyors és szép bringát keres a mindennapokra és a szabadidős tekerésre. A Giant Escape fitness hybrid a városban van a legnagyobb előnyben: fürgébb és gyorsabb, mint egy MTB, kényelmesebb és barátságosabb, mint egy országúti vagy gravel. A könnyű ALUXX alumínium váz és a merev villa feszes, közvetlen élményt ad, minden pedálnyomásod tiszta lendület lesz, az egyenes kormány pedig magabiztos, kényelmes testtartást ad a rövid ingázáson és a hosszabb távon is. A Shimano hajtással az emelkedő és a sík út is könnyedén megy, a bordó váz pedig elegáns, ízléses megjelenést kölcsönöz. Mivel a hétvégi körök nagy része kerékpárúton zajlik, ez a bringa nemcsak a városban, hanem a szabadidős tekerésen is pontosan a helyén van.",
    reszletek:[
      { cs:"Váz & villa", t:[["Váz","ALUXX-Grade alumínium váz"],["Villa","Merev (rigid) villa"]] },
      { cs:"Hajtás", t:[["Hajtómű","Kovácsolt alu hajtókar, 30×46T"],["Első váltó","Shimano FD-TY710, 2 sebesség"],["Hátsó váltó","Shimano Altus, 8 sebesség"],["Fogaskoszorú","Shimano CS-HG31, 11–34T"],["Lánc","KMC Z8.3"]] },
      { cs:"Fék & kerék", t:[["Fékek","Tektro HD-R280 hidraulikus tárcsa, 160/160"],["Kerékszett","28″ Giant GX"],["Gumik","Giant S-X2 (defektvédett)"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Giant Sport XC (egyenes)"],["Nyereg","Giant Sport Comfort"]] }
    ] },

  { id:"mondraker-chrono", mappa:"MondrakerChrono", marka:"Mondraker", model:"Mondraker Chrono", magassag:[174,186], felveve:"2026-08-09", eladva:"2026-10-26",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Újszerű", ev:2022, meret:"L", kerekmeret:"29″", suly:"12,9 kg", ar:360000,
    vaz:"6061 Xtralite alumínium · 12,9 kg", villa:"X-Fusion RC32, állítható keménység + előfeszítés",
    hajtas:"SRAM SX Eagle 1×12", fek:"SRAM Level TL hidraulikus, 160/160",
    kerek:"29″ MDK-XP1 (Tubeless Ready) · Maxxis Ikon 2,2",
    spec:"29″ alu XC hardtail · X-Fusion RC32 · SRAM SX Eagle 1×12.",
    leiras:"Annak, aki nem tucatbringát keres, hanem saját, felismerhető karaktert. A Mondrakert nem látni minden sarkon, és épp ez a szép benne: a spanyolok a World Cup pályákon élesítik a tudást, ami a Chronóban is ott van. A mindössze 12,9 kg-os vázat már az első pedálnyomásnál megérzed, ahogy előre rántja magát alólad, a márka sajátja, a Forward Geometry pedig másképp osztja el a súlyodat a keréken, közvetlenebb és magabiztosabb érzést adva. Fürge, gyors és pontos a reggeli körön és a hosszú túrán is, a letisztult, jellegzetes formaterv pedig az a plusz, amitől tényleg más, mint a szokásos. Ideális, ha egyedi, gyorsaságra hangolt alumínium XC-re vágysz.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","6061 Xtralite alumínium váz"],["Teleszkóp","X-Fusion RC32, állítható keménység + előfeszítés"]] },
      { cs:"Hajtás", t:[["Hajtómű","SRAM SX Eagle, Boost DUB, 32T"],["Hátsó váltó","SRAM SX Eagle, 12 sebesség"],["Fogaskoszorú","SRAM PG-1210, 11–50T"],["Lánc","SRAM SX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fékek","SRAM Level TL hidraulikus, 160/160"],["Kerékszett","29″ MDK-XP1, Tubeless Ready"],["Gumik","Maxxis Ikon 2,2"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Onoff Sulfur, 740 mm"],["Nyereg","Mondraker Cross Country Series"]] }
    ] },

  { id:"ktm-ultra-1964-pro", mappa:"KTMUltra1964Pro", marka:"KTM", model:"KTM Ultra 1964 Pro", magassag:[183,196], felveve:"2026-08-09",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2023, meret:"XL (53 cm)", kerekmeret:"29″", suly:"12,9 kg", ar:380000, regiAr:410000,
    vaz:"6061 alumínium · 12,9 kg", villa:"Fox 32 Float Rhythm, 100 mm, remote lockout",
    hajtas:"Shimano XT / Deore 1×12", fek:"Shimano Deore M6100 hidraulikus, 180/160",
    kerek:"29″ Shimano WH-MT501 · Schwalbe Racing Ray / Racing Ralph (Addix)",
    spec:"29″ alu XC hardtail · Fox 32 Float 100 mm · Shimano XT 1×12.",
    leiras:"Annak, aki az alumínium XC csúcsát keresi, egy ritkán látott, karakteres darab formájában. A KTM Ultra 1964 Pro-n minden a helyén van: a letisztult osztrák formaterv és a felső kategóriás felszereltség összhangja fürge, pontos, közvetlen élményt ad, ami minden mozdulatodra azonnal válaszol. Otthon van a reggeli gyors körön és a hétvégi, egész napos túrán is, végig könnyedén és magabiztosan. Ebből a szintből keveset látni idehaza, és épp ez, az ötven éves versenymúlttal és a különleges formatervvel együtt teszi igazán egyedivé. Ideális, ha nem a tömeggyártott középszintet, hanem egy jellegzetes, igényes XC-t keresel.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","6061 alumínium váz"],["Teleszkóp","Fox 32 Float Rhythm, 100 mm, remote lockout"]] },
      { cs:"Hajtás", t:[["Hajtómű","Shimano Deore XT M8100, 34T"],["Hátsó váltó","Shimano Deore XT Shadow+, 12 sebesség"],["Fogaskoszorú","Shimano Deore M6100, 10–51T"],["Lánc","Shimano Deore M6100"]] },
      { cs:"Fék & kerék", t:[["Fékek","Shimano Deore M6100 hidraulikus, 180/160"],["Kerékszett","29″ Shimano WH-MT501"],["Gumik","Schwalbe Racing Ray / Racing Ralph, Addix"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","KTM Team Flat Top, 740 mm"],["Nyereg","KTM Comp MTB Sport"]] }
    ] },

  { id:"cube-race-one", mappa:"CubeRaceOne", marka:"Cube", model:"Cube Race One", magassag:[168,180], felveve:"2026-06-08",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Újszerű", ev:2017, meret:"M (18″)", kerekmeret:"27,5″", suly:"12,7 kg", ar:300000, regiAr:320000,
    vaz:"Aluminium Lite · 12,7 kg", villa:"Fox 32 Float Performance, 100 mm, állítható",
    hajtas:"Shimano SLX / XT 2×11", fek:"Shimano Deore BR-M615 hidraulikus, 180/160",
    kerek:"27,5″ Cube ZX20 · Schwalbe Tough Tom / Rapid Rob",
    spec:"27,5″ XC hardtail · Fox 32 Float 100 mm · Shimano SLX/XT 2×11.",
    leiras:"A Race One-t a Cube olyan karakterrel építette, amilyet ma is ritkán látni: versenyre hangolt XC merevfarú, Fox Performance Float 32 villával és Shimano XT hajtással, mindössze 12,7 kg-ban. Ez a páros rendszerint drágább kerékpárokon jár, itt pedig egy gyakorlatilag új állapotban fennmaradt példányon ül. És hogy miért pont ez: mert az első pedálnyomásra azonnal ugrik, a Fox csendesen, pontosan dolgozik, aszfalton feszes marad, az XT terhelés alatt is tisztán vált, a 27,5-es kerék alacsonyabb súlypontja pedig egyedibb, fürgébb karaktert ad, amit azonnal megérzel. Pont ott áll, ahol a felső kategóriás alkatrészek, a könnyű váz és az elérhető ár összeér. Az a bringa, ami a terepet és a kerékpárutas száguldást is érezhetően élvezetesebbé teszi, és az első métereken meggyőz. Annak, aki a részletekre is ad, és a hétvégi körből élményt akar.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Aluminium Lite"],["Teleszkóp","Fox 32 Float Performance, 100 mm, állítható keménység"]] },
      { cs:"Hajtás", t:[["Hajtómű","Shimano XT FC-M8000, 36×26T"],["Első váltó","Shimano SLX, 2 sebesség"],["Hátsó váltó","Shimano Deore XT, 11 sebesség"],["Fogaskoszorú","Shimano SLX CS-M7000, 11–42T"],["Lánc","Shimano CN-HG600"]] },
      { cs:"Fék & kerék", t:[["Fékek","Shimano Deore BR-M615 hidraulikus, 180/160"],["Kerékszett","27,5″ Cube ZX20"],["Gumik","Schwalbe Tough Tom / Rapid Rob"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Flat Race Bar, 720 mm"],["Nyereg","Cube Active"]] }
    ] },,


];

/* Szűrő-szegmensek (a Készlet-oldalon csak a raktáron lévők jelennek meg) */
/* A `fo:true` szegmensek a fő terepbringa-kategóriák (Trail/Enduro, XC/Túra):
   ezek kapnak kiemelt, kategória-jellegű stílust a Készlet szűrőjében. */
const SZEGMENSEK = [
  { kulcs:"mind",  nev:"Összes" },
  { kulcs:"xc",      nev:"XC MTB",         fo:true },
  { kulcs:"trail",   nev:"Trail / Enduro", fo:true },
  { kulcs:"gravel",   nev:"Gravel" },
  { kulcs:"fitness",  nev:"Fitness" },
  { kulcs:"trekking", nev:"Trekking" },
  { kulcs:"cross",    nev:"Cross" },
  { kulcs:"noi",      nev:"Női" }
];

const ALLAPOTOK = ["Újszerű", "Kiváló", "Jó"];

/* Méret-sávok a Készlet szűrőhöz: magasság (cm) tartományra képezve */
const MERETEK = [
  { kulcs:"mind", nev:"Minden méret" },
  { kulcs:"xss",  nev:"XS–S", h:[140,163] },
  { kulcs:"sm",   nev:"S–M",  h:[164,171] },
  { kulcs:"m",    nev:"M",    h:[172,179] },
  { kulcs:"l",    nev:"L",    h:[180,186] },
  { kulcs:"xl",   nev:"XL",   h:[187,205] }
];

/* Állapot-besorolás — a termékoldali skálához (a kereskedés saját definíciói) */
const ALLAPOT_LEIRAS = {
  "Újszerű": "Alig használt kerékpár, minimális használati nyommal, közel karcmentes; ami nyom egyáltalán van, az csak közelről, célzott fényben látszik. Nagyon alacsony futás. Minden kopóalkatrész (hajtáslánc, fékbetét, gumi) gyári és alig használt, bőséges tartalékkal. A legközelebbi állapot az újhoz, annak töredékéért.",
  "Kiváló":  "Újszerű összképet mutató, igényes kerékpár néhány apró, használatból eredő nyommal. Az összkép friss, az esztétikai hibák minimálisak (finom kopásnyomok, esetleg egy-egy alig látható karc). Több mint fél szezont futott, de végig gondozott. Az alkatrészek gyáriak, a gumi jellemzően eredeti és jó profilú, a kopóelemek bőven a használati tartományon belül.",
  "Jó":      "Szervizelt, kifogástalanul működő kerékpár a használat látható nyomaival. A karcokat és kopásnyomokat nyíltan vállaljuk, és a fotókon is megmutatjuk. A kopóalkatrészeket állapot szerint felülvizsgáltuk, és ahol indokolt volt, cseréltük. Ugyanaz a műszaki felkészítés és 30 napos garancia, mint minden kerékpárunknál. A legjobb ár-érték a kínálatban."
};
