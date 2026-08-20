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
   kiemelt: a főoldali hero showcase ezt a darabot mutatja (csak az első számít).
   felveve: a felvétel dátuma (YYYY-MM-DD). Ez hajtja a "Legfrissebb" rendezést,
        a "Friss" jelvényt (a legújabbhoz képest 14 napon belül) és a "Frissítve" dátumot.
        ÚJ bringánál mindig állítsd az aznapi dátumra.
   ========================================================================= */
const KESZLET = [
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

  { id:"ghost-sl-amr-x-59", mappa:"GhostSLAMRX5.9", marka:"Ghost", model:"Ghost SL AMR X 5.9", magassag:[170,182], felveve:"2026-08-20",
    kategoria:"Trail · Fully", szegmens:"trail", allapot:"Jó", ev:2019, meret:"M", kerekmeret:"29″", suly:"14,2 kg", ar:380000,
    vaz:"SL AMR AL alumínium · 14,2 kg", villa:"RockShox Yari, 160 mm, rebound + lockout",
    hajtas:"SRAM GX Eagle 1×12", fek:"SRAM G2 RE hidraulikus, 200/180",
    kerek:"29″ DT Swiss M1900 Spline · Continental Kryptotal",
    spec:"29″ alu trail fully · RockShox Yari 160 mm + Cane Creek coil · SRAM GX Eagle 1×12, dropperrel.",
    megjegyzes:"Ez a példány néhány szépséghibát visel, cserébe kedvező áron vihető. A hátsó lengőkaron (kerékjárat) jelentősebb felületi festékleverődés látszik, a villa csúszócsövének felső, becsúszó szakaszán pedig egy kisebb felületi karc. Ez a karc a rugóút azon végén van, ameddig a villa normál használatban nem süllyed be, így a működést gyakorlatilag nem érinti. Megjelenésre és fényezésre egyébként gyönyörű, és minden hibát megmutatunk a fotókon.",
    leiras:"Annak, aki a saját határait szereti feszegetni, nem a bringáét. A Ghost SL AMR X abból a fajtából való, amiből ma keveset látni: komoly képességű trail-enduro darab, ami felfelé hatékonyan repít, lefelé pedig felszabadul. A német mérnöki háttér pont erre a kettősségre épített: elég gyors a hosszú, egész napos túrához, és elég bátor a legtechnikásabb terephez is. Az igazi karakterét a tekercsrugós Cane Creek hátsó futómű adja, elöl pedig egy utólag beépített RockShox Yari villa dolgozik, ami sokat dob rajta. Ehhez fogós Continental gumipár, DT Swiss kerék és SRAM GX Eagle hajtás jön. Ha a lejtő adja a napod fénypontját, ez a te bringád.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","SL AMR AL alumínium váz"],["Teleszkóp","RockShox Yari, 160 mm, rebound + lockout"],["Rugóstag","Cane Creek Inline Coil CS, 145 mm"],["Nyeregcső","JD dropper (állítható)"]] },
      { cs:"Hajtás", t:[["Hajtómű","SRAM Truvativ Descendant 6K Eagle, 32T"],["Hátsó váltó","SRAM GX Eagle, 12 sebesség"],["Fogaskoszorú","SRAM XG-1275, 10–50T"]] },
      { cs:"Fék & kerék", t:[["Fékek","SRAM G2 RE hidraulikus, 200/180"],["Kerékszett","29″ DT Swiss M1900 Spline"],["Gumik","Continental Kryptotal"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Ground Fiftyone Race 35, 780 mm"],["Nyereg","SDG Fly Mountain"]] }
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

  { id:"cube-attention", mappa:"CubeAttention", marka:"Cube", model:"Cube Attention", magassag:[174,186], felveve:"2026-08-15",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2021, meret:"L (19″)", kerekmeret:"29″", suly:"13,7 kg", ar:240000,
    vaz:"Aluminium Lite · 13,7 kg", villa:"RockShox Judy Silver TK Air, 100 mm, PopLoc",
    hajtas:"Shimano Deore 2×10", fek:"Shimano MT200 hidraulikus, 180/160",
    kerek:"29″ Cube ZX20 · Schwalbe Smart Sam 2.25",
    spec:"29″ alu XC hardtail · RockShox Judy 100 mm · Shimano Deore 2×10.",
    leiras:"Annak, aki szereti, ha a bringája észreveteti magát, de a tudás is ott van alatta. A sárga Cube Attention fürge, sportos XC hardtail: reggel elrepít a munkába, hétvégén felvisz a dombra, és egyiket sem érzi tehernek. A levegős, zárható RockShox Judy villa sima úton feszes, terepen nyel, a Shimano 2×10 hajtással pedig minden emelkedőhöz és lapos szakaszhoz van fokozatod. Alatta a Cube neve, vagyis német minőség, amiben nem kell csalódni. Igazi mindennapos társ a hétköznapokhoz és a kalandokhoz is, amire ráadásul öröm ránézni. Ha neked a megjelenés annyit számít, mint a tudás, ez a te bringád.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Aluminium Lite váz"],["Teleszkóp","RockShox Judy Silver TK Air, 100 mm, PopLoc zárás"]] },
      { cs:"Hajtás", t:[["Hajtómű","Shimano Deore FC-M4100, 36×26T"],["Első váltó","Shimano Deore FD-M6025, 2 sebesség"],["Hátsó váltó","Shimano Deore RD-M4120, 10 sebesség"],["Fogaskoszorú","Shimano Deore CS-M4100, 11–42T"],["Lánc","KMC X10"]] },
      { cs:"Fék & kerék", t:[["Fékek","Shimano MT200 hidraulikus, 180/160"],["Kerékszett","29″ Cube ZX20"],["Gumik","Schwalbe Smart Sam 2.25"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Rise Trail Bar, 680 mm"],["Nyereg","Natural Fit Venec Lite"]] }
    ] },

  { id:"cube-aim-ex", mappa:"CubeAimEX", marka:"Cube", model:"Cube Aim EX", magassag:[174,186], felveve:"2026-08-09",
    kategoria:"MTB · Hardtail", szegmens:"xc", allapot:"Újszerű", ev:2023, meret:"L (19″)", kerekmeret:"29″", suly:"14,3 kg", ar:230000,
    vaz:"Aluminium Lite · 14,3 kg", villa:"SR Suntour XCM, 100 mm, zárható",
    hajtas:"Shimano Deore 2×10", fek:"Shimano MT200 / UR300 hidraulikus, 160/160",
    kerek:"29″ Cube ZX20 · Schwalbe Smart Sam 2.25",
    spec:"29″ alu MTB hardtail · SR Suntour XCM 100 mm · Shimano Deore 2×10.",
    leiras:"Annak, aki stílusos, megbízható MTB-t keres, ami nem csak kiszolgálja a hétvégi túrát, hanem kedvet is csinál a következőhöz. A korszerű alumínium váz, a tiszta Shimano Deore váltás és a hidraulikus tárcsafék összeszedett, könnyen megszerethető karaktert ad: lendületes a kerékpárúton, mégis megvan benne a terepszabadság, akár ingázásról, akár egy hétvégi túráról van szó. Kényelmes, mégis sportos, a Cube neve pedig a német minőség garanciája. A gyári karamell fényezés ritkán látott árnyalat, ránézésre is kitűnik a sorból. Igazi mindenre kész társ, amivel könnyű beleszeretni a tekerésbe, akár most kezdesz bele, akár egy megbízható hétköznapi bringát keresel.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Aluminium Lite váz"],["Teleszkóp","SR Suntour XCM, 100 mm, zárható"]] },
      { cs:"Hajtás", t:[["Hajtómű","Shimano Deore FC-M4100, 36×26T"],["Első váltó","Shimano Deore FD-M6025, 2 sebesség"],["Hátsó váltó","Shimano Deore RD-M5120, 10 sebesség"],["Fogaskoszorú","Sunrace CSM52, 11–42T"],["Lánc","KMC X10"]] },
      { cs:"Fék & kerék", t:[["Fékek","Shimano MT200 / UR300 hidraulikus, 160/160"],["Kerékszett","29″ Cube ZX20"],["Gumik","Schwalbe Smart Sam 2.25"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Rise Trail Bar, 680 mm"],["Nyereg","Natural Fit Venec Lite"]] }
    ] },

  { id:"mondraker-chrono", mappa:"MondrakerChrono", marka:"Mondraker", model:"Mondraker Chrono", magassag:[174,186], felveve:"2026-08-09",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Újszerű", ev:2022, meret:"L", kerekmeret:"29″", suly:"12,9 kg", ar:360000,
    vaz:"6061 Xtralite alumínium · 12,9 kg", villa:"X-Fusion RC32, állítható keménység + előfeszítés",
    hajtas:"SRAM SX Eagle 1×12", fek:"SRAM Level TL hidraulikus, 160/160",
    kerek:"29″ MDK-XP1 (Tubeless Ready) · Maxxis Ikon 2.2",
    spec:"29″ alu XC hardtail · X-Fusion RC32 · SRAM SX Eagle 1×12.",
    leiras:"Annak, aki nem tucatbringát keres, hanem saját, felismerhető karaktert. A Mondrakert nem látni minden sarkon, és épp ez a szép benne: a spanyolok a World Cup pályákon élesítik a tudást, ami a Chronóban is ott van. A mindössze 12,9 kg-os vázat már az első pedálnyomásnál megérzed, ahogy előre rántja magát alólad, a márka sajátja, a Forward Geometry pedig másképp osztja el a súlyodat a keréken, közvetlenebb és magabiztosabb érzést adva. Fürge, gyors és pontos a reggeli körön és a hosszú túrán is, a letisztult, jellegzetes formaterv pedig az a plusz, amitől tényleg más, mint a szokásos. Ideális, ha egyedi, gyorsaságra hangolt alumínium XC-re vágysz.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","6061 Xtralite alumínium váz"],["Teleszkóp","X-Fusion RC32, állítható keménység + előfeszítés"]] },
      { cs:"Hajtás", t:[["Hajtómű","SRAM SX Eagle, Boost DUB, 32T"],["Hátsó váltó","SRAM SX Eagle, 12 sebesség"],["Fogaskoszorú","SRAM PG-1210, 11–50T"],["Lánc","SRAM SX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fékek","SRAM Level TL hidraulikus, 160/160"],["Kerékszett","29″ MDK-XP1, Tubeless Ready"],["Gumik","Maxxis Ikon 2.2"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Onoff Sulfur, 740 mm"],["Nyereg","Mondraker Cross Country Series"]] }
    ] },

  { id:"ktm-ultra-1964-pro", mappa:"KTMUltra1964Pro", marka:"KTM", model:"KTM Ultra 1964 Pro", magassag:[183,196], felveve:"2026-08-09",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2023, meret:"XL (53 cm)", kerekmeret:"29″", suly:"12,9 kg", ar:410000,
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

  { id:"cube-reaction-c62-one", mappa:"CubeReactionC62One", marka:"Cube", model:"Cube Reaction C:62 One", magassag:[180,192], felveve:"2026-08-09",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2022, meret:"XL (21″)", kerekmeret:"29″", suly:"11,5 kg", ar:380000,
    vaz:"C:62 Monocoque karbon · 11,5 kg", villa:"SR Suntour Raidon 32, 100 mm",
    hajtas:"SRAM SX / NX Eagle 1×12", fek:"Magura MT Thirty hidraulikus, 180/160",
    kerek:"29″ Answer Atac AM (Tubeless Ready) · Schwalbe Racing Ray 2.25",
    spec:"29″ karbon XC hardtail · SR Suntour Raidon 100 mm · SRAM Eagle 1×12.",
    megjegyzes:"Ennél a példánynál a villa zárás (lockout) funkciója nem működik, ami ezeknél a villáknál jellemzően a hosszabb állásból ered. A rugózás egyébként kifogástalan, a villa mechanikailag hibátlanul dolgozik, a hiba kizárólag a zárhatóságot érinti. Az árat ennek tudatában alakítottuk ki, és vásárlás előtt szívesen bemutatjuk.",
    leiras:"Annak, aki a karbon XC érzését keresi, de nem versenyzőként, hanem a hétköznapok és a hétvégi kalandok kedvéért. A monocoque karbonváz ott nyeli a rezgést, ahol kell, és ott feszes, ahol az erőt kell átadni, ezért a hosszú túrán is friss maradsz, a lendületed pedig nem vész el. Az alacsony tömeget már az első emelkedőnél megérzed: nem téged dolgoztat, hanem viszi a tempódat. Ugyanaz a bringa a reggeli gyors körre és az egész napos, nagy kirándulásra, a tűzpiros szín pedig élőben teszi igazán különlegessé. Ideális, ha valódi karbon XC-re vágysz olyan áron, amiért ezen a szinten sokszor még alumíniumot adnak.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","C:62 Monocoque karbon váz"],["Teleszkóp","SR Suntour Raidon 32, 100 mm (a zárás/lockout jelenleg nem működik)"]] },
      { cs:"Hajtás", t:[["Hajtómű","SRAM SX Eagle DUB, 32T"],["Hátsó váltó","SRAM NX Eagle, 12 sebesség"],["Fogaskoszorú","SRAM XG-1230 Eagle, 11–50T"],["Lánc","SRAM SX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fékek","Magura MT Thirty hidraulikus, 180/160"],["Kerékszett","29″ Answer Atac AM, Tubeless Ready"],["Gumik","Schwalbe Racing Ray, Addix Performance 2.25"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Flat Race Bar, 720 mm"],["Nyereg","Natural Fit Venec Sequence"]] }
    ] },

  { id:"specialized-chisel-expert", mappa:"SpecializedChiselExpert", marka:"Specialized", model:"Specialized Chisel Expert", magassag:[176,186], felveve:"2026-06-02",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Újszerű", ev:2019, meret:"L", kerekmeret:"29″", suly:"12,3 kg", ar:380000,
    vaz:"D'Aluisio Smartweld M5 alumínium · 12,3 kg", villa:"RockShox Reba RL, 100 mm, állítható keménység",
    hajtas:"SRAM NX Eagle 1×12", fek:"SRAM Level TL hidraulikus, 180/160",
    kerek:"29″ Specialized XC · Fast Trak GRIPTON 2.3",
    spec:"29″ verseny-XC hardtail · RockShox Reba 100 mm · SRAM NX Eagle 1×12.",
    leiras:"Annak, aki verseny-XC érzésre vágyik carbon ára nélkül, és a legszívesebben első sorból indulna. A D'Aluisio Smartweld alumíniumváz feszes és könnyű, ezért az emelkedő rövidebbnek, a hosszú kör könnyebbnek érződik, és a bringa azonnal reagál arra, amit a lábad belead. Ideális maratonra, tempós hétvégi körökre vagy első komoly XC hardtailnek, ha a valódi tudást fizetnéd meg a név helyett.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","D'Aluisio Smartweld M5 alumínium"],["Teleszkóp","RockShox Reba RL, 100 mm, állítható keménység"]] },
      { cs:"Hajtás", t:[["Hajtómű","Truvativ Stylo DUB, 32T"],["Hátsó váltó","SRAM NX Eagle, 12 sebesség"],["Fogaskoszorú","SRAM NX Eagle, 11–50T"],["Lánc","SRAM NX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fékek","SRAM Level TL hidraulikus, 180/160"],["Kerékszett","29″ Specialized XC"],["Gumik","Specialized Fast Trak GRIPTON, 2.3"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Specialized Alloy Minirise, 750 mm"],["Nyereg","Body Geometry Phenom Comp"]] }
    ],
    kiemelt:true },

  { id:"cube-race-one", mappa:"CubeRaceOne", marka:"Cube", model:"Cube Race One", magassag:[168,180], felveve:"2026-06-08",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Újszerű", ev:2017, meret:"M (18″)", kerekmeret:"27,5″", suly:"12,7 kg", ar:320000,
    vaz:"Aluminium Lite · 12,7 kg", villa:"Fox 32 Float Performance, 100 mm, állítható",
    hajtas:"Shimano SLX / XT 2×11", fek:"Shimano Deore BR-M615 hidraulikus, 180/160",
    kerek:"27,5″ Cube ZX20 · Schwalbe Tough Tom / Rapid Rob",
    spec:"27,5″ XC hardtail · Fox 32 Float 100 mm · Shimano SLX/XT 2×11.",
    leiras:"Annak, aki már beleszeretett a tekerésbe, és egy lépcsővel feljebb lépne a belépő szintről. A Fox Performance villát rendszerint jóval drágább kerékpárokon látni, itt viszont adott, és pont ez árulja el, mennyivel többet tud ez a felszereltség az árához képest. A Shimano SLX és XT párosa terhelés alatt is tisztán és pontosan vált, a könnyű alumínium váz semmit nem veszít az erődből, a 27,5-es kerék pedig fürge és gyors a szűk, kanyargós ösvényen. Ideális, ha a hétvégi kört néha versennyé fokoznád, de a legtöbbször csak élveznéd, ahogy minden mozdulatra azonnal válaszol.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Aluminium Lite"],["Teleszkóp","Fox 32 Float Performance, 100 mm, állítható keménység"]] },
      { cs:"Hajtás", t:[["Hajtómű","Shimano XT FC-M8000, 36×26T"],["Első váltó","Shimano SLX, 2 sebesség"],["Hátsó váltó","Shimano Deore XT, 11 sebesség"],["Fogaskoszorú","Shimano SLX CS-M7000, 11–42T"],["Lánc","Shimano CN-HG600"]] },
      { cs:"Fék & kerék", t:[["Fékek","Shimano Deore BR-M615 hidraulikus, 180/160"],["Kerékszett","27,5″ Cube ZX20"],["Gumik","Schwalbe Tough Tom / Rapid Rob"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Flat Race Bar, 720 mm"],["Nyereg","Cube Active"]] }
    ] },

  { id:"cube-aim-sl", mappa:"CubeAimSL4", marka:"Cube", model:"Cube Aim SL", magassag:[184,196], felveve:"2026-05-12",
    kategoria:"MTB · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2022, meret:"XL (21″)", kerekmeret:"29″", suly:"13,8 kg", ar:220000,
    vaz:"Könnyű alumínium · 13,8 kg", villa:"RockShox Judy Silver TK, 100 mm, zárható",
    hajtas:"Shimano Alivio 2×9", fek:"Shimano MT200 hidraulikus, 160/160",
    kerek:"29″ Cube ZX20 · Schwalbe Smart Sam 2.25",
    spec:"29″ alu hardtail · RockShox Judy 100 mm · Shimano 2×9.",
    leiras:"Sokoldalú belépő a minőségi terepbringázásba annak, aki kiszámítható, gondtalan tekerésre vágyik. A légrugós villa és a finom váltás csendes, precíz működést ad, a könnyű váz pedig fürgévé teszi a hétvégi erdei körökön és a mindennapokban egyaránt. Jó döntés első komolyabb MTB-nek, vagy megbízható túratársnak a földutakra.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Könnyű alumínium váz"],["Teleszkóp","RockShox Judy Silver TK, 100 mm, zárható"]] },
      { cs:"Hajtás", t:[["Hajtómű","Shimano FC-MT101, 36×22T"],["Első váltó","Shimano Altus, 2 sebesség"],["Hátsó váltó","Shimano Alivio, 9 sebesség"],["Fogaskoszorú","Shimano CS-HG201, 11–36T"],["Lánc","KMC X9"]] },
      { cs:"Fék & kerék", t:[["Fékek","Shimano MT200 hidraulikus, 160/160"],["Kerékszett","29″ Cube ZX20"],["Gumik","Schwalbe Smart Sam, 2.25"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Rise Trail Bar, 680 mm"],["Nyereg","Natural Fit Venec Lite"]] }
    ] }
];

/* Szűrő-szegmensek (a Készlet-oldalon csak a raktáron lévők jelennek meg) */
/* A `fo:true` szegmensek a fő terepbringa-kategóriák (Trail/Enduro, XC/Túra):
   ezek kapnak kiemelt, kategória-jellegű stílust a Készlet szűrőjében. */
const SZEGMENSEK = [
  { kulcs:"mind",  nev:"Összes" },
  { kulcs:"xc",      nev:"XC / Túra",      fo:true },
  { kulcs:"trail",   nev:"Trail / Enduro", fo:true },
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
