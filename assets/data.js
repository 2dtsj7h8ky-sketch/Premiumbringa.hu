/* =========================================================================
   Premium Bringa — készletadat (egy helyen, minden oldal ezt használja)
   Új bringa: másold egy meglévő objektum mintáját. Az `id` egyedi (URL-slug).
   KÉP: alapból automatikus — a weboldal az `assets/kepek/<id>.jpg` fájlt tölti be.
        Elég a fotót ezzel a névvel az assets/kepek/ mappába tenni (lásd az ottani README-t).
        A `kep` mező csak akkor kell, ha más a kiterjesztés/útvonal (felülírja az automatikust).
        Ha nincs fájl, marad a textúrás placeholder.
   kiemelt: a főoldali hero showcase ezt a darabot mutatja (csak az első számít).
   ========================================================================= */
const KESZLET = [
  {
    id:"cube-reaction-c62", marka:"Cube", model:"Cube Reaction C:62",
    kategoria:"Prémium · Karbon", szegmens:"premium", allapot:"Kiváló",
    ev:2021, meret:"L", ar:429000,
    vaz:"C:62 karbon, belső kábelvezetés", villa:"RockShox SID, levegős, 100 mm",
    hajtas:"Shimano XT 1×12", fek:"Shimano hidraulikus tárcsa", kerek:"29″ Newmen",
    spec:"Karbon váz · Shimano XT 1×12 · levegős villa · 29″.",
    leiras:"Könnyű karbon hardtail komoly XC-ambíciókhoz. Az XT hajtás pontos és tartós, a SID villa finoman dolgozik. Rendezett, karbantartott példány, normál használati nyomokkal.",
    kep:"", kepek:[], kiemelt:true
  },
  {
    id:"cube-aim-sl", marka:"Cube", model:"Cube Aim SL",
    kategoria:"MTB · Hardtail", szegmens:"belepo", allapot:"Kiváló",
    ev:2022, meret:"L", ar:219000,
    vaz:"Aluminium, 29″", villa:"Suntour levegős, zárható, 100 mm",
    hajtas:"Shimano Deore 1×12", fek:"Shimano hidraulikus tárcsa", kerek:"29″ alu",
    spec:"29″ alu · Shimano Deore 1×12 · levegős villa · hidraulikus tárcsafék.",
    leiras:"Megbízható belépő MTB a városba és a könnyebb terepre egyaránt. A Deore hajtás megbízható, a villa zárható az aszfaltos szakaszokhoz. Kiváló kiindulópont első rendes bringához.",
    kep:"", kepek:[]
  },
  {
    id:"cube-attention", marka:"Cube", model:"Cube Attention",
    kategoria:"MTB · Hardtail", szegmens:"belepo", allapot:"Újszerű",
    ev:2021, meret:"M", ar:249000,
    vaz:"Aluminium, belső kábelvezetés", villa:"RockShox levegős, 100 mm",
    hajtas:"Shimano 1×12", fek:"Shimano hidraulikus tárcsa", kerek:"29″ alu",
    spec:"29″ alu · 1×12 · RockShox villa · belső kábelvezetés.",
    leiras:"Alig futott darab, újszerű állapotban. A RockShox villa és az 1×12 hajtás kényelmes, kiszámítható túrázást ad. Tiszta, rendezett gép.",
    kep:"", kepek:[]
  },
  {
    id:"cube-kathmandu", marka:"Cube", model:"Cube Kathmandu",
    kategoria:"Trekking", szegmens:"trekking", allapot:"Kiváló",
    ev:2021, meret:"54", ar:259000,
    vaz:"Aluminium trekking, 28″", villa:"Suntour rugós, zárható",
    hajtas:"Shimano Deore", fek:"Hidraulikus tárcsa", kerek:"28″ agydinamós",
    spec:"28″ alu · Deore · agydinamó · sárvédő & csomagtartó.",
    leiras:"Komplett trekking-felszereltség: agydinamós világítás, sárvédő és csomagtartó. Mindennapi közlekedésre és hosszabb túrákra egyaránt kész. Karbantartott, rendezett állapot.",
    kep:"", kepek:[]
  },
  {
    id:"cube-nuroad", marka:"Cube", model:"Cube Nuroad",
    kategoria:"Gravel", szegmens:"gravel", allapot:"Újszerű",
    ev:2022, meret:"56", ar:279000,
    vaz:"Aluminium gravel, 700c", villa:"Karbon",
    hajtas:"Shimano GRX 2×10", fek:"Hidraulikus tárcsa", kerek:"700c gravel",
    spec:"Alu gravel · Shimano GRX 2×10 · tárcsafék · 700c.",
    leiras:"Sokoldalú gravel a burkolt és földes utakra. A GRX hajtás kifejezetten gravelre készült, a karbon villa csillapít. Újszerű, gyári gumikkal.",
    kep:"", kepek:[]
  },
  {
    id:"cube-access-ws", marka:"Cube", model:"Cube Access WS",
    kategoria:"Női · XC", szegmens:"belepo", allapot:"Jó",
    ev:2021, meret:"S", ar:199000,
    vaz:"Aluminium, női geometria", villa:"Suntour levegős, 100 mm",
    hajtas:"Shimano 1×12", fek:"Hidraulikus tárcsa", kerek:"29″ alu",
    spec:"29″ alu · női geometria · 1×12 · levegős villa.",
    leiras:"Női geometriájú XC hardtail, kényelmes pozícióval. Tisztességes, látható használati nyomokkal — őszintén jelölve. Jó ár-érték a kezdéshez.",
    kep:"", kepek:[]
  },
  {
    id:"trek-marlin-7", marka:"Trek", model:"Trek Marlin 7",
    kategoria:"MTB · Hardtail", szegmens:"belepo", allapot:"Kiváló",
    ev:2022, meret:"M", ar:229000,
    vaz:"Alpha Silver aluminium", villa:"RockShox Judy, 100 mm",
    hajtas:"Shimano Deore 1×10", fek:"Hidraulikus tárcsa", kerek:"29″ alu",
    spec:"29″ alu · Deore 1×10 · RockShox Judy · belső kábelvezetés.",
    leiras:"Népszerű, jól bevált belépő MTB a Trektől. Strapabíró és könnyen kezelhető. Szervizelt, kiváló állapot.",
    kep:"", kepek:[]
  },
  {
    id:"orbea-avant", marka:"Orbea", model:"Orbea Avant H40",
    kategoria:"Országúti", szegmens:"premium", allapot:"Kiváló",
    ev:2021, meret:"53", ar:389000,
    vaz:"Aluminium, komfort-geometria", villa:"Karbon",
    hajtas:"Shimano 105 2×11", fek:"Hidraulikus tárcsa", kerek:"700c országúti",
    spec:"Alu váz · karbon villa · Shimano 105 2×11 · tárcsafék.",
    leiras:"Komfortos endurance országúti a hosszú kilométerekhez. A 105 csoport pontos, a tárcsafék minden időben kiszámítható. Rendezett, karbantartott példány.",
    kep:"", kepek:[]
  },
  {
    id:"specialized-sirrus", marka:"Specialized", model:"Specialized Sirrus",
    kategoria:"Fitness · City", szegmens:"trekking", allapot:"Jó",
    ev:2020, meret:"M", ar:179000,
    vaz:"A1 Premium aluminium", villa:"Aluminium",
    hajtas:"Shimano 2×9", fek:"Hidraulikus tárcsa", kerek:"700c",
    spec:"Könnyű alu · lapos kormány · hidraulikus tárcsafék · 700c.",
    leiras:"Fürge fitness-kerékpár a városi tekeréshez és a napi ingázáshoz. Könnyű, kezes, megbízható. Tisztességes használati nyomokkal, őszintén jelölve.",
    kep:"", kepek:[]
  }
];

/* Szűrő-szegmensek (sorrend számít) */
const SZEGMENSEK = [
  { kulcs:"mind",     nev:"Összes" },
  { kulcs:"belepo",   nev:"Belépő XC" },
  { kulcs:"trekking", nev:"Trekking" },
  { kulcs:"premium",  nev:"Prémium" },
  { kulcs:"gravel",   nev:"Gravel" }
];

const ALLAPOTOK = ["Újszerű", "Kiváló", "Jó"];
