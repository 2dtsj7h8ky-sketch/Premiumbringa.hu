/* =========================================================================
   Premium Bringa: készletadat (egy helyen, minden oldal ezt használja)

   KÉP: `mappa` = az assets/kepek/ alatti mappa neve. A fotók sorrendben 1..10.
        A borító az 1.jpg (ha még nincs 1.jpg, automatikusan a 2.jpg-re vált).
   LEÍRÁS (`leiras`): NE az alkatrészeket sorold; azt szólja meg, KINEK ideális
        a kerékpár; szakértői, tanácsadó hangon. Kerüld a kötőjelet (—) és a "gép" szót.
        A MÉRETET/testmagasságot NE írd a leírásba: azt a méret-blokk tartalmazza.
   FELSZERELTSÉG (`reszletek`): csoportosított, bolti stílusú spec; a `suly` külön.
   kiemelt: a főoldali hero showcase ezt a darabot mutatja (csak az első számít).
   ========================================================================= */
const KESZLET = [
  { id:"cube-stereo-120-pro", mappa:"CubeStereoPro", marka:"Cube", model:"Cube Stereo 120 Pro", magassag:[170,182],
    kategoria:"Trail · Fully", szegmens:"trail", allapot:"Kiváló", ev:2022, meret:"M (18″)", kerekmeret:"29″", suly:"14,8 kg", ar:430000,
    vaz:"HPA alumínium, ETC 4-csuklós · 14,8 kg", villa:"RockShox Judy Silver TK, 130 mm, zárható",
    hajtas:"SRAM NX Eagle 1×12", fek:"Magura MT Thirty hidraulikus, 180/180",
    kerek:"29″ Cube EX25 · Schwalbe Nobby Nic Addix 2.4",
    spec:"29″ trail fully · RockShox 130 / Manitou 120 mm · dropper · NX Eagle 1×12.",
    leiras:"Annak, aki ott is nyugodtan haladna, ahol a merevfarú már ver és fáraszt. A Cube Stereo 120 elöl és hátul is rugózással nyeli a talajt: 130 mm elöl, 120 mm hátul, hosszú, egész napos körökre hangolva, hogy többet és kényelmesebben tekerhess. A SRAM Eagle 1×12 egy karral adja a teljes tartományt, a dropper egy gombnyomásra eltűnik lefelé, a 29-es kerék pedig magabiztosan gördül át azon, amin más megakad. Alatta a Cube bevált HPA alumínium váza, német precizitással. Ideális, ha a merevfarú után lépnél feljebb, vagy egyből a kényelmes összteleszkópossal kezdenél, és azt a nyugalmat keresed, amiért a full suspensiont választják.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","HPA alumínium, ETC 4-csuklós hátsó rugózás"],["Teleszkóp","RockShox Judy Silver TK, 130 mm, zárható"],["Rugóstag","Manitou Radium Expert RL, 120 mm, zárható"],["Nyeregcső","Cube Dropper Post, 130 mm"]] },
      { cs:"Hajtás", t:[["Hajtómű","SRAM X1 1000 Eagle DUB, 30T"],["Hátsó váltó","SRAM NX Eagle, 12 sebesség"],["Fogaskoszorú","SRAM PG-1210 Eagle, 11–50T"],["Lánc","SRAM SX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fékek","Magura MT Thirty, 180/180"],["Kerékszett","29″ Cube EX25"],["Gumik","Schwalbe Nobby Nic Addix Performance, 2.4"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Newmen Evolution SL, 760 mm"],["Nyereg","Natural Fit Venec Lite"]] }
    ],
    kiemelt:true },

  { id:"trek-roscoe-7", mappa:"TrekRoscoe7", marka:"Trek", model:"Trek Roscoe 7", magassag:[176,186],
    kategoria:"Trail · Hardtail", szegmens:"trail", allapot:"Újszerű", ev:2025, meret:"M/L (18,5″)", kerekmeret:"29″", suly:"14,1 kg", ar:400000,
    vaz:"Alpha Gold Aluminium · 14,1 kg", villa:"RockShox Recon Silver, 140 mm, állítható",
    hajtas:"Shimano Deore 1×12", fek:"Shimano MT200 hidraulikus, 180/180",
    kerek:"29″ Bontrager Line TLR 30 · Bontrager XR4 / Maxxis Aggressor 2.6",
    spec:"29″ trail hardtail · RockShox Recon 140 mm · dropper · Deore 1×12.",
    leiras:"Annak, aki a lejtőn, a kanyarban és a gyökeres, technikás szakaszon szeretné igazán otthon érezni magát. A 140 mm-es RockShox Recon villa és a laza, magabiztos geometria bátrabb vonalakra ösztönöz, mint amire egy merevebb XC hardtailen vállalkoznál, a dropper nyeregcső pedig egy gombnyomásra eltűnik az utadból lefelé. A széles, 2,6 colos gumik ott is tapadnak, ahol más már csúszkál, a Shimano Deore 1×12 hajtás pedig egyszerű és megbízható: egy kar, teljes tartomány. Ideális, ha most szoksz rá a terepre, vagy régóta keresed a trail hardtailt, ami mer játszani. Legújabb, 2025-ös generáció, alig futott.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Alpha Gold Aluminium"],["Teleszkóp","RockShox Recon Silver, 140 mm, állítható keménység"],["Nyeregcső","TranzX dropper"]] },
      { cs:"Hajtás", t:[["Hajtómű","Shimano MT511, 30T"],["Hátsó váltó","Shimano Deore, 12 sebesség"],["Fogaskoszorú","Shimano Deore M6100, 10–51T"],["Lánc","Shimano Deore M6100"]] },
      { cs:"Fék & kerék", t:[["Fékek","Shimano MT200 hidraulikus, 180/180"],["Kerékszett","29″ Bontrager Line TLR 30, tubeless-ready"],["Gumik","Bontrager XR4 / Maxxis Aggressor, 2.6"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Bontrager Rhythm Comp, 780 mm"],["Nyereg","Bontrager Verse P3"]] }
    ] },

  { id:"specialized-chisel-expert", mappa:"SpecializedChiselExpert", marka:"Specialized", model:"Specialized Chisel Expert", magassag:[176,186],
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
    ] },

  { id:"cube-race-one", mappa:"CubeRaceOne", marka:"Cube", model:"Cube Race One", magassag:[168,180],
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

  { id:"cube-reaction-tm-pro", mappa:"CubeReactionTMPro", marka:"Cube", model:"Cube Reaction TM Pro", magassag:[168,183],
    kategoria:"Trail · Hardtail", szegmens:"trail", allapot:"Kiváló", ev:2019, meret:"M (18″)", kerekmeret:"27,5″", suly:"13,6 kg", ar:300000,
    vaz:"Erős aluminium · 13,6 kg", villa:"RockShox Sektor RL, 130 mm, állítható",
    hajtas:"Shimano SLX 1×10", fek:"Shimano MT520 hidraulikus, 180/180",
    kerek:"27,5″ Rodi Tryp 35 · Specialized Ground Control tubeless",
    spec:"27,5″ trail hardtail · RockShox Sektor 130 mm · dropper · SLX 1×10.",
    leiras:"Annak, aki nem csak túrázni akar, hanem játszani is a terepen. A trail-geometria, a dropper nyeregcső és a hosszabb rugóút magabiztossá tesz lejtőn és technikásabb szakaszon, miközben a merevváz könnyű és közvetlen marad. Ideális, ha a hétvégi erdei körökből többet szeretnél kihozni, vagy az első igazán terepképes bringádat keresed: bátrabb vonalakra ösztönöz, mégis megbocsátó.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Erős aluminium váz"],["Teleszkóp","RockShox Sektor RL, 130 mm, állítható keménység"],["Nyeregcső","Kind Shock LEV SI dropper, 120 mm"]] },
      { cs:"Hajtás", t:[["Hajtómű","Race Face, 32T"],["Hátsó váltó","Shimano SLX, 10 sebesség"],["Fogaskoszorú","SRAM PG-1130, 11–42T"],["Lánc","Shimano CN-HG701"]] },
      { cs:"Fék & kerék", t:[["Fékek","Shimano MT520 hidraulikus, 180/180"],["Kerékszett","27,5″ Rodi Tryp 35"],["Gumik","Specialized Ground Control Grid T7, tubeless"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Newmen Evolution, 760 mm"],["Nyereg","Natural Fit Active"]] }
    ] },

  { id:"cube-aim-sl", mappa:"CubeAimSL4", marka:"Cube", model:"Cube Aim SL", magassag:[184,196],
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
    ] },

  { id:"cube-analog", mappa:"CubeAnalogHpa", marka:"Cube", model:"Cube Analog HPA", magassag:[172,188],
    kategoria:"MTB · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2019, meret:"L (21″)", kerekmeret:"29″", suly:"14,2 kg", ar:220000,
    vaz:"HPA Aluminium Lite · 14,2 kg", villa:"RockShox XC30, 100 mm, távzár",
    hajtas:"Shimano Deore XT 3×9", fek:"Shimano MT200 hidraulikus, 160/160",
    kerek:"29″ Cube ZX20 · Schwalbe Smart Sam 2.25",
    spec:"29″ HPA alu · RockShox XC30 100 mm · Deore XT 3×9.",
    leiras:"Annak való, aki magabiztos, jól gördülő 29-es túra-MTB-t keres hosszabb körökre és könnyebb terepre, és nem bánja, ha kicsit ki is tűnik vele. A széles áttétel a meredekebb emelkedőket is barátságossá teszi, a villa pedig komfortossá a rosszabb utakat. Ideális hétvégi túrákra, vegyes terepre, mindennapokra. Feltűnő narancs-piros megjelenés.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","HPA Aluminium Lite"],["Teleszkóp","RockShox XC30 TK Coil, 100 mm, távzár"]] },
      { cs:"Hajtás", t:[["Hajtómű","Shimano FC-M2000, 40×30×22T"],["Első váltó","Shimano Alivio, 3 sebesség"],["Hátsó váltó","Shimano Deore XT, 9 sebesség"],["Fogaskoszorú","Shimano CS-HG400, 12–36T"],["Lánc","Shimano CN-HG53"]] },
      { cs:"Fék & kerék", t:[["Fékek","Shimano MT200 hidraulikus, 160/160"],["Kerékszett","29″ Cube ZX20"],["Gumik","Schwalbe Smart Sam Active, 2.25"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Rise Trail Bar, 680 mm"],["Nyereg","Syncross"]] }
    ] },

  { id:"ktm-ultra-flite", mappa:"KTMUltraFlite2", marka:"KTM", model:"KTM Ultra Flite", magassag:[168,180],
    kategoria:"MTB · Hardtail", szegmens:"xc", allapot:"Újszerű", ev:2021, meret:"M (17″)", kerekmeret:"29″", suly:"14,3 kg", ar:240000,
    vaz:"Könnyű alumínium · 14,3 kg", villa:"RockShox Judy Silver, 100 mm, zárható",
    hajtas:"Shimano Deore 2×10", fek:"Shimano MT200 hidraulikus, 180/160",
    kerek:"29″ KTM Line · Schwalbe Magic Mary / Hans Dampf",
    spec:"29″ alu hardtail · RockShox Judy 100 mm · Shimano Deore 2×10.",
    leiras:"Egy ritkábban látott, sportos osztrák hardtail annak, aki a kiszámítható tempót és a határozott irányíthatóságot keresi, és örül egy különlegesebb névnek a megszokott helyett. A könnyű váz és a minőségi gumipár lendületes, magabiztos tekerést ad túrán és erdei ösvényen. Jó választás, ha igényes, mégis elérhető MTB-t szeretnél, ami kicsit más, mint a tömegmodellek.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Könnyű alumínium váz"],["Teleszkóp","RockShox Judy Silver, 100 mm, zárható"]] },
      { cs:"Hajtás", t:[["Hajtómű","Shimano Deore, 36-26T"],["Első váltó","Shimano Deore M4100, 2 sebesség"],["Hátsó váltó","Shimano Deore M5120, 10 sebesség"],["Fogaskoszorú","Shimano Deore M4100, 11–42T"],["Lánc","Shimano Deore HG54"]] },
      { cs:"Fék & kerék", t:[["Fékek","Shimano MT200 hidraulikus, 180/160"],["Kerékszett","29″ KTM Line"],["Gumik","Schwalbe Magic Mary / Hans Dampf"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","KTM Comp Riser 15, 720 mm"]] }
    ] }
];

/* Szűrő-szegmensek (a Készlet-oldalon csak a raktáron lévők jelennek meg) */
const SZEGMENSEK = [
  { kulcs:"mind",  nev:"Összes" },
  { kulcs:"trail", nev:"Trail" },
  { kulcs:"xc",    nev:"XC / Túra" },
  { kulcs:"cross", nev:"Cross" },
  { kulcs:"noi",   nev:"Női" }
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
