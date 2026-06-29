/* =========================================================================
   Premium Bringa: készletadat (egy helyen, minden oldal ezt használja)

   KÉP: `mappa` = az assets/kepek/ alatti mappa neve. A fotók sorrendben 1..10.
        A borító az 1.jpg (ha még nincs 1.jpg, automatikusan a 2.jpg-re vált).
   LEÍRÁS (`leiras`): NE az alkatrészeket sorold; azt szólja meg, KINEK ideális
        a kerékpár; szakértői, tanácsadó hangon. Kerüld a kötőjelet (—) és a "gép" szót.
   FELSZERELTSÉG (`reszletek`): csoportosított, bolti stílusú spec; a `suly` külön.
   kiemelt: a főoldali hero showcase ezt a darabot mutatja (csak az első számít).
   ========================================================================= */
const KESZLET = [
  { id:"cube-reaction-tm-pro", mappa:"CubeReactionTMPro", marka:"Cube", model:"Cube Reaction TM Pro", magassag:[168,183],
    kategoria:"Trail · Hardtail", szegmens:"trail", allapot:"Újszerű", ev:2019, meret:"M (18″)", kerekmeret:"27,5″", suly:"13,6 kg", ar:300000,
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
    ],
    kiemelt:true },

  { id:"cube-aim-sl", mappa:"CubeAimSL4", marka:"Cube", model:"Cube Aim SL", magassag:[184,196],
    kategoria:"MTB · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2022, meret:"XL (21″)", kerekmeret:"29″", suly:"13,8 kg", ar:220000,
    vaz:"Könnyű alumínium · 13,8 kg", villa:"RockShox Judy Silver TK, 100 mm, zárható",
    hajtas:"Shimano Alivio 2×9", fek:"Shimano MT200 hidraulikus, 160/160",
    kerek:"29″ Cube ZX20 · Schwalbe Smart Sam 2.25",
    spec:"29″ alu hardtail · RockShox Judy 100 mm · Shimano 2×9.",
    leiras:"Sokoldalú belépő a minőségi terepbringázásba annak, aki kiszámítható, gondtalan tekerésre vágyik. A légrugós villa és a finom váltás csendes, precíz működést ad, a könnyű váz pedig fürgévé teszi a hétvégi erdei körökön és a mindennapokban egyaránt. XL vázméret a magasabb tekerőknek. Jó döntés első komolyabb MTB-nek, vagy megbízható túratársnak a földutakra.",
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
