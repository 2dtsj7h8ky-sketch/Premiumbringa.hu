/* =========================================================================
   Premium Bringa — készletadat (egy helyen, minden oldal ezt használja)

   KÉP: `mappa` = az assets/kepek/ alatti mappa neve. A fotók sorrendben 1..10.
        A borító az 1.jpg (ha még nincs 1.jpg, automatikusan a 2.jpg-re vált).
   ADAT: a model/ár/specifikáció/állapot/leírás a Marketplace-hirdetésből töltődik.
   kiemelt: a főoldali hero showcase ezt a darabot mutatja (csak az első számít).
   ========================================================================= */
const KESZLET = [
  { id:"cube-reaction-tm-pro", mappa:"CubeReactionTMPro", marka:"Cube", model:"Cube Reaction TM Pro", magassag:[168,183],
    kategoria:"Trail · Hardtail", szegmens:"trail", allapot:"Újszerű", ev:2019, meret:"M (18″)", ar:300000,
    vaz:"Erős aluminium · 13,6 kg", villa:"RockShox Sektor RL, 130 mm, állítható",
    hajtas:"Shimano SLX 1×10", fek:"Shimano MT520 hidraulikus, 180/180",
    kerek:"27,5″ Rodi Tryp 35 · Specialized Ground Control tubeless",
    spec:"27,5″ trail hardtail · RockShox Sektor 130 mm · dropper · SLX 1×10.",
    leiras:"Trail irányba hangolt „fun” hardtail: 130 mm-es RockShox Sektor villa, dropper nyeregcső, szélesebb tubeless gumik és stabil geometria — magabiztos, játékos terepezés. Shimano SLX hajtás, MT520 fékek. Újszerű, nagyon megvigyázott, szép fényezésű példány; műszakilag hibátlan, menetkész.",
    kiemelt:true },

  { id:"cube-reaction-tm", mappa:"CubeReactionTM3", marka:"Cube", model:"Cube Reaction TM", magassag:[168,180],
    kategoria:"Trail · Hardtail", szegmens:"trail", allapot:"Újszerű", ev:2021, meret:"M (29″)", ar:310000,
    vaz:"Cube Aluminium Lite, Agile Ride Geometry · belső kábelvezetés", villa:"X-Fusion RC32, 130 mm, zárható",
    hajtas:"SRAM SX Eagle 1×12", fek:"Magura MT Thirty hidraulikus, 203/180 (elöl 4 dugattyú)",
    kerek:"29″ Cube EX30 tubeless ready · Maxxis Assegai / Minion DHR II",
    spec:"29″ trail hardtail · X-Fusion 130 mm · SRAM 1×12 · Magura · dropper.",
    leiras:"Terep-orientált trail-hardtail 130 mm-es légvillával, dropper nyeregcsővel és gyári Maxxis enduro-gumipárral (Assegai / Minion DHR II). SRAM 1×12 Eagle hajtás, erős Magura fékek. Újszerű, alacsony futású, kivételesen szép, szervizelt példány — néhány apró tárolási jellel." },

  { id:"trek-roscoe-6", mappa:"TrekRoscoe6.3", marka:"Trek", model:"Trek Roscoe 6", magassag:[168,185],
    kategoria:"Trail · Hardtail", szegmens:"trail", allapot:"Újszerű", ev:2021, meret:"M/L (19,5″)", ar:240000,
    vaz:"Alpha Gold Aluminium · 15,8 kg", villa:"SR Suntour XCM 32, 120 mm, zárható",
    hajtas:"Shimano Deore 1×10", fek:"Shimano MT400 hidraulikus, 180/160",
    kerek:"27,5″ Alex MD35 · Kenda Havok 2.80",
    spec:"27,5″ trail hardtail · 120 mm villa · dropper · Shimano Deore 1×10.",
    leiras:"Trail-orientált merevvázas MTB játékos geometriával és dropper nyeregcsővel — terepen több kontroll, lejtőn nagyobb mozgástér. 120 mm-es zárható villa, széles Kenda gumik. Keveset futott, megkímélt példány; mindössze apró felületi nyomok, műszakilag hibátlan, menetkész." },

  { id:"cube-cross-sl", mappa:"CubeCrossSL", marka:"Cube", model:"Cube Cross SL", magassag:[174,188],
    kategoria:"Cross · Trekking", szegmens:"cross", allapot:"Kiváló", ev:2019, meret:"L (58 cm)", ar:310000,
    vaz:"Aluminium Superlite · 12 kg", villa:"RockShox Paragon Gold, zárható",
    hajtas:"Shimano XTR 2×11", fek:"Shimano XT BR-M8000 hidraulikus, 180/180",
    kerek:"28″ DT Swiss · Schwalbe Smart Sam",
    spec:"28″ cross-trekking · XTR váltó · XT fékek · DT Swiss · 12 kg.",
    leiras:"Csúcskategóriás cross-trekking versenyszintű felszereltséggel: Shimano XTR hátsó váltó, XT hidraulikus fékek, DT Swiss kerékszett, karbon kormány. Mindössze 12 kg. Egyenes kormányos, univerzális gép városra, túrára és könnyű terepre. Esztétikailag szép, megkímélt; műszakilag kifogástalan." },

  { id:"cube-aim-sl", mappa:"CubeAimSL4", marka:"Cube", model:"Cube Aim SL", magassag:[165,182],
    kategoria:"MTB · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2022, meret:"M (18″)", ar:220000,
    vaz:"Könnyű alumínium · 13,8 kg", villa:"RockShox Judy Silver TK, 100 mm, zárható",
    hajtas:"Shimano Alivio 2×9", fek:"Shimano MT200 hidraulikus, 160/160",
    kerek:"29″ Cube ZX20 · Schwalbe Smart Sam 2.25",
    spec:"29″ alu hardtail · RockShox Judy 100 mm · Shimano 2×9.",
    leiras:"Kiegyensúlyozott XC hardtail RockShox villával és Shimano hajtással, könnyű (13,8 kg) alumínium vázon. Gyönyörű állapotú, kevés futású, gyári felszereltségű, sérülésmentes példány — néhány apró tárolási nyommal. Csendes, feszes működés, azonnal használatra kész." },

  { id:"cube-attention", mappa:"CubeAttentionHpa2", marka:"Cube", model:"Cube Attention SL HPA", magassag:[172,188],
    kategoria:"MTB · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2019, meret:"L (21″)", ar:230000,
    vaz:"HPA Aluminium Lite · 13,6 kg", villa:"RockShox Recon Silver SoloAir, 100 mm, zárható",
    hajtas:"Shimano Deore XT 2×10", fek:"Shimano MT200 hidraulikus, 160/160",
    kerek:"29″ Cube ZX20 · Schwalbe Smart Sam 2.25",
    spec:"29″ HPA alu · RockShox Recon levegős 100 mm · Deore XT 2×10.",
    leiras:"Az Attention-vonal felső, légvillás kiépítése: RockShox Recon SoloAir villa (kormányról zárható) és Shimano Deore XT hátsó váltó tág áttétellel. Könnyű, strapabíró HPA váz. Univerzális használat városban és terepen. Megkímélt, beállított, csendes működésű példány." },

  { id:"cube-analog", mappa:"CubeAnalogHpa", marka:"Cube", model:"Cube Analog HPA", magassag:[172,188],
    kategoria:"MTB · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2019, meret:"L (21″)", ar:220000,
    vaz:"HPA Aluminium Lite · 14,2 kg", villa:"RockShox XC30, 100 mm, távzár",
    hajtas:"Shimano Deore XT 3×9", fek:"Shimano MT200 hidraulikus, 160/160",
    kerek:"29″ Cube ZX20 · Schwalbe Smart Sam 2.25",
    spec:"29″ HPA alu · RockShox XC30 100 mm · Deore XT 3×9.",
    leiras:"Jól bevált német hardtail HPA alumínium vázon, RockShox XC30 villával és Shimano Deore XT 3×9 hajtással — széles áttétel emelkedőre és túrára. Feltűnő narancs-piros színvilág. Megkímélt, beállított, csendes működésű, gondozott példány." },

  { id:"cube-aim-pro", mappa:"CubeAimPro2", marka:"Cube", model:"Cube Aim Pro", magassag:[172,184],
    kategoria:"MTB · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2022, meret:"L (19″)", ar:190000,
    vaz:"Aluminium Lite · 14,6 kg", villa:"SR Suntour XCT, 100 mm",
    hajtas:"Shimano Acera 2×8", fek:"Tektro HD-M275 hidraulikus, 160/160",
    kerek:"29″ Cube ZX20 · Impac Smartpac 2.25",
    spec:"29″ alu hardtail · SR Suntour 100 mm · Shimano Acera 2×8.",
    leiras:"Megbízható német belépő-MTB komoly alapokkal: könnyű alumínium váz, 100 mm-es villa, hidraulikus tárcsafék. Jó választás első igényesebb terepbringának. Megkímélt, beállított, csendes működésű példány; kisebb használati nyomok előfordulhatnak." },

  { id:"ktm-ultra-flite", mappa:"KTMUltraFlite2", marka:"KTM", model:"KTM Ultra Flite", magassag:[168,180],
    kategoria:"MTB · Hardtail", szegmens:"xc", allapot:"Újszerű", ev:2021, meret:"M (17″)", ar:240000,
    vaz:"Könnyű alumínium · 14,3 kg", villa:"RockShox Judy Silver, 100 mm, zárható",
    hajtas:"Shimano Deore 2×10", fek:"Shimano MT200 hidraulikus, 180/160",
    kerek:"29″ KTM Line · Schwalbe Magic Mary / Hans Dampf",
    spec:"29″ alu hardtail · RockShox Judy 100 mm · Shimano Deore 2×10.",
    leiras:"Sportos osztrák merevvázas MTB könnyű alumínium vázon, RockShox Judy villával. Minőségi Schwalbe gumipár, Shimano Deore hajtás. Ritkábban előforduló modell. Újszerű, gyári felszereltségű, sérülés- és karcmentes — legfeljebb 1–2 apró tárolási nyom. Bevetésre kész." },

  { id:"cube-access", mappa:"CubeAccess2", marka:"Cube", model:"Cube Access WS", magassag:[168,180],
    kategoria:"Női · MTB", szegmens:"noi", allapot:"Kiváló", ev:"", meret:"L", ar:190000,
    vaz:"Aluminium Lite · 14,2 kg", villa:"SR Suntour XCM RL, 100 mm, távzár",
    hajtas:"Shimano Acera 2×8", fek:"Shimano MT200 hidraulikus, 160/160",
    kerek:"29″ Cube ZX20 · Schwalbe Smart Sam 2.1",
    spec:"29″ női geometria · SR Suntour 100 mm · Shimano 2×8.",
    leiras:"A Cube női (Women Series) vázgeometriájára épülő MTB — a méretezés és üléshelyzet kifejezetten női testalkatra szabva. SR Suntour villa, Shimano hajtás, hidraulikus tárcsafék. Igényes, gondozott, sérülésmentes példány; átnézve, beállítva." }
];

/* Szűrő-szegmensek (a valós készlethez igazítva, sorrend számít) */
const SZEGMENSEK = [
  { kulcs:"mind",  nev:"Összes" },
  { kulcs:"trail", nev:"Trail" },
  { kulcs:"xc",    nev:"XC / Túra" },
  { kulcs:"cross", nev:"Cross" },
  { kulcs:"noi",   nev:"Női" }
];

const ALLAPOTOK = ["Újszerű", "Kiváló", "Jó"];
