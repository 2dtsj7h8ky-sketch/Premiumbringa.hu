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
  { id:"cube-attention-sl-2", mappa:"CubeAttentionSL2", marka:"Cube", model:"Cube Attention SL", magassag:[168,180], felveve:"2026-09-22",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2021, meret:"M (18″)", kerekmeret:"29″", suly:"13,5 kg", ar:260000,
    vaz:"Cube Aluminium Lite · 13,5 kg", villa:"RockShox Judy Silver levegős, 100 mm, PopLoc kormányról zárható",
    hajtas:"Shimano XT M8100 1×12", fek:"Shimano BR-MT200 hidraulikus, 180/160",
    kerek:"29″ Cube ZX20 · Schwalbe Smart Sam 2,25",
    spec:"29″ alumínium XC merevvázas · levegős RockShox Judy Silver 100 mm · Shimano XT M8100 1×12.",
    leiras:"A hátsó váltó az az alkatrész, amit egy tekerésen több százszor használsz, és ide Shimano XT került, vagyis a felső középkategória, nem a belépő szint. Pontosan, halkan és terhelés alatt is megbízhatóan vált, és ez az, amit hosszú távon a legjobban megérzel. Elöl levegős RockShox Judy Silver dolgozik, amit a saját súlyodra hangolsz: terepen nyeli a köveket, aszfalton egy karral feszesre zárod. Reggel a városban fürge, hétvégén a túrán és az erdei körökön magabiztos. A petrol fényezés a piros részletekkel egyedi és ízléses, olyan párosítás, amit az újabb kerékpároknál hiányolni szoktam. Ebben az árban ilyen felszereltség ritkán jön szembe, ebben az állapotban még ritkábban: a használat nyomai a szokásosnál jóval kisebb mértékben látszanak, a lánc, a fékbetétek és a gumik bőséges tartalékkal.",
    reszletek:[
      { cs:"Váz & futómű", t:[["Váz","Cube Attention SL, Aluminium Lite, 29″"],["Teleszkóp","RockShox Judy Silver levegős, 100 mm"],["Zárás","PopLoc, kormányról"],["Súly","13,5 kg"]] },
      { cs:"Hajtás", t:[["Váltó","Shimano XT RD-M8100, 12 sebesség"],["Hajtómű","Shimano FC-MT511, 32T"],["Kazetta","Shimano Deore CS-M6100, 10–51T"],["Lánc","Shimano CN-M6100"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano BR-MT200 hidraulikus tárcsa"],["Tárcsák","180 / 160 mm"],["Felni","29″ Cube ZX20"],["Gumi","Schwalbe Smart Sam 2,25"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Rise Trail Bar, 680 mm"],["Nyereg","Natural Fit Venec Lite"],["Kerékméret","29″"],["Fényezés","Petrol, piros részletekkel"]] }
    ] },
  { id:"cube-attention-3", mappa:"CubeAttention3", marka:"Cube", model:"Cube Attention", magassag:[176,186], felveve:"2026-09-22",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2023, meret:"L", kerekmeret:"29″", suly:"13,8 kg", ar:280000,
    vaz:"Cube Aluminium Lite · 13,8 kg", villa:"RockShox Judy Silver levegős, 100 mm, PopLoc kormányról zárható",
    hajtas:"Shimano Deore / SLX 2×11", fek:"Shimano BR-MT200/UR300 hidraulikus, 180/160",
    kerek:"29″ Cube ZX20 · Schwalbe Smart Sam 2,25",
    spec:"29″ alumínium XC merevvázas · levegős RockShox Judy Silver 100 mm · Shimano Deore és SLX 2×11.",
    leiras:"Ebben az árfekvésben ritka, hogy a villa levegős legyen és a kormányról lehessen zárni, itt viszont pontosan ez a helyzet, Shimano Deore és SLX hajtással kiegészítve. Ez az a szint, ahol a hétköznapi tekerés is jó lesz, a hétvégi terepezés pedig igazi élmény. Reggel fürgén bevisz a városba, szombaton magabiztosan viszi a túrát. A tűznarancs gyöngyházas fényezés élőben mélyebb és élénkebb, mint fotón, és pont annyira feltűnő, amennyire egy sportos darabnak illik. Igényesen tartott példány, bőséges kopóalkatrész-tartalékkal és új gumival.",
    reszletek:[
      { cs:"Váz & futómű", t:[["Váz","Cube Attention, Aluminium Lite, 29″"],["Teleszkóp","RockShox Judy Silver levegős, 100 mm"],["Zárás","PopLoc, kormányról"],["Súly","13,8 kg"]] },
      { cs:"Hajtás", t:[["Hátsó váltó","Shimano Deore RD-M4120, 11 sebesség"],["Első váltó","Shimano SLX FD-M7025, 2 sebesség"],["Hajtómű","Shimano Deore FC-M5100, 36/26T"],["Kazetta","Shimano CS-M5100, 11–42T"],["Lánc","KMC X11"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano BR-MT200 / UR300 hidraulikus tárcsa"],["Tárcsák","180 / 160 mm"],["Felni","29″ Cube ZX20"],["Gumi","Schwalbe Smart Sam 2,25, új"]] },
      { cs:"Egyéb", t:[["Sebességek","2×11"],["Kerékméret","29″"],["Fényezés","Tűznarancs gyöngyházas"],["Szerviz","Átvizsgálva és leszervizelve, menetkészen"]] }
    ] },
  { id:"cube-nuroad", mappa:"CubeNuroad", marka:"Cube", model:"Cube Nuroad", magassag:[172,182], felveve:"2026-09-22",
    kategoria:"Gravel · Karbon villa", szegmens:"gravel", allapot:"Kiváló", ev:2022, meret:"M", kerekmeret:"28″", suly:"10,8 kg", ar:340000,
    vaz:"Cube T6 Superlite alumínium · 10,8 kg", villa:"Cube Nuroad teljes karbon, Flat Mount Disc",
    hajtas:"Shimano Claris 2×8", fek:"Tektro MD-C510 tárcsa, 160/160",
    kerek:"28″ Cube GR 2.3 · Schwalbe G-One Allround 40 mm",
    spec:"28″ gravel karbon villával · Cube Gravel Comfort geometria · Shimano Claris 2×8, tárcsafékkel.",
    leiras:"Egyetlen bringa a hétköznapra és a hétvégére. Az alumínium váz feszesen adja tovább az erőt, a teljes karbon villa viszont már a kormány előtt elnyeli a rezgést, tehát a hosszú kilométerek után is marad erőd. A Cube Gravel Comfort geometriája nyugodt, kiszámítható fekvést ad, akár aszfalton tekersz, akár laza földúton. Hétfőn a munkába, szombaton a folyópartra, és közben nem kell két kerékpárt tartanod. A 45 milliméteres gumihely és a sárvédő-előkészítés nyitva hagyja az utat, ha később vadabb terepre vagy egész napos túrára hangolnád.",
    megjegyzes:"A vázon a váztáska okozta felületi festékkopások láthatók, a fotókon szereplő mértékben. Ez kizárólag esztétikai jellegű, a váz szerkezetét nem érinti. Az árat ennek tudatában alakítottuk ki, és vásárlás előtt szívesen mutatunk róla közelebbi képet is.",
    reszletek:[
      { cs:"Váz & villa", t:[["Váz","Cube Nuroad, T6 Superlite alumínium, 28″"],["Villa","Cube Nuroad Flat Mount Disc, teljes karbon"],["Geometria","Cube Gravel Comfort"],["Súly","10,8 kg"]] },
      { cs:"Hajtás", t:[["Hátsó váltó","Shimano Claris RD-R2000, 8 sebesség"],["Első váltó","Shimano Claris, 2 sebesség"],["Hajtómű","Shimano Claris FC-R2000, 50/34T"],["Kazetta","Shimano CS-HG31, 11–34T"],["Lánc","KMC Z8.3"]] },
      { cs:"Fék & kerék", t:[["Fék","Tektro MD-C510 tárcsafék"],["Tárcsák","160 / 160 mm"],["Felni","28″ Cube GR 2.3"],["Gumi","Schwalbe G-One Allround, 40-622"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Compact Race Bar"],["Nyereg","Natural Fit Venec Lite"],["Gumihely","45 mm-ig"],["Felszerelhetőség","Sárvédő-előkészítés"]] }
    ] },
  { id:"trek-x-caliber-8", mappa:"TrekXcaliber8", marka:"Trek", model:"Trek X-Caliber 8", magassag:[185,198], felveve:"2026-09-21", eladva:"2026-09-22",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Újszerű", ev:2022, meret:"XL", kerekmeret:"29″", suly:"13,1 kg", ar:320000,
    vaz:"Alpha Gold alumínium · 13,1 kg", villa:"RockShox Judy SL Solo Air, 100 mm, kormányról zárható",
    hajtas:"Shimano XT M8100 1×12", fek:"Shimano MT200 hidraulikus, 180/160",
    kerek:"29″ Bontrager Kovee · Maxxis Ardent Race 2,35",
    spec:"29″ alumínium XC merevvázas · RockShox Judy SL 100 mm · Shimano XT M8100 1×12.",
    leiras:"A Trek kínálatában ez az a pont, ahol egy merevvázas már valódi sporteszköz, de még mindennapi társ marad. A váltó Shimano XT, tehát nem a belépő szint: pontosan, halkan és terhelés alatt is megbízhatóan vált, ami hosszú távon a legtöbbet számít. A villa levegős és a kormányról zárható, így aszfalton feszes, terepen pedig dolgozik. Fürgén pörög a kerékpárúton, elvisz egy hosszabb túrára, és az erdei körökön is otthon van. A fehér-piros fényezésre a garázsban is visszanéz az ember. Bolti állapotú, karcmentes, néhányszor elővett, teljesen gyári példány.",
    reszletek:[
      { cs:"Váz & futómű", t:[["Váz","Trek X-Caliber, Alpha Gold alumínium, 29″"],["Teleszkóp","RockShox Judy SL, Solo Air, TurnKey lockout, 100 mm"],["Vázméret","XL, 21,5″"],["Súly","13,1 kg"]] },
      { cs:"Hajtás", t:[["Váltó","Shimano XT M8100, 12 sebesség"],["Hajtómű","Shimano MT511, 30T"],["Kazetta","Shimano Deore M6100, 10–51T"],["Lánc","Shimano Deore M6100"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano MT200 hidraulikus tárcsa"],["Tárcsák","180 / 160 mm"],["Felni","29″ Bontrager Kovee"],["Gumi","Maxxis Ardent Race 2,35, EXO, tubeless ready"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Bontrager, 750 mm"],["Nyereg","Bontrager Arvada"],["Markolat","Bontrager XR Endurance"],["Kerékméret","29″"]] }
    ] },
  { id:"orbea-alma-m51", mappa:"OrbeaAlmaM51", marka:"Orbea", model:"Orbea Alma M51", magassag:[168,180], felveve:"2026-09-20", eladva:"2026-09-26",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Újszerű", ev:2024, meret:"M", kerekmeret:"29″", suly:"11,5 kg", ar:430000,
    vaz:"Orbea Carbon OMR monocoque · 11,5 kg", villa:"RockShox Judy Silver TK Solo Air, 100 mm, kormányról zárható",
    hajtas:"SRAM NX Eagle 1×12", fek:"Shimano MT201 hidraulikus, 180/160",
    kerek:"29″ tubeless felni · Maxxis Ikon 2,2",
    spec:"29″ karbon XC versenyváz · RockShox Judy Silver 100 mm · SRAM NX Eagle 1×12, dropperrel.",
    leiras:"Az Alma az Orbea versenyvonala, és ennél a darabnál a váz a lényeg: monocoque karbon, amelyik az erőt nem nyeli el, hanem továbbadja. Megemeled, és már abból tudod, mire számíts, 11,5 kilogramm alatta van annak, amit ebben az árban szokás. A villa a kormányról zárható, tehát aszfalton feszes, terepen pedig dolgozik. Matt arany fényezés, ami élőben sokkal komolyabb, mint fotón. Annak való, aki tempós hétvégi köröket, maratont vagy versenyt tervez, és tudja, hogy egy jó karbon vázra később bármi ráépíthető. Gyakorlatilag új, karcmentes, keveset futott példány.",
    reszletek:[
      { cs:"Váz & futómű", t:[["Váz","Orbea Alma, Carbon OMR monocoque, 29″"],["Teleszkóp","RockShox Judy Silver TK Remote Solo Air, 100 mm"],["Fejcsapágy","Acros, kormánykorlátozóval"],["Nyeregcső","OC2 dropper, 80 mm"]] },
      { cs:"Hajtás", t:[["Váltó","SRAM NX Eagle, 12 sebesség"],["Hajtómű","SRAM Stylo 6K Eagle DUB Boost, 32T"],["Kazetta","SRAM PG-1230 Eagle, 11–50T"],["Lánc","SRAM NX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano MT201 hidraulikus tárcsa"],["Tárcsák","180 / 160 mm"],["Felni","29″ alu, tubeless ready"],["Gumi","Maxxis Ikon 2,2"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","OC1 lapos, 740 mm"],["Nyereg","Selle Italia Model X"],["Súly","11,5 kg"],["Vázgarancia","Orbea élettartam-garancia a vázra"]] }
    ] },
  { id:"cannondale-habit-4", mappa:"CannondaleHabit4", marka:"Cannondale", model:"Cannondale Habit 4", magassag:[168,180], felveve:"2026-09-20", eladva:"2026-09-26",
    kategoria:"Trail · Fully", szegmens:"trail", allapot:"Kiváló", ev:2019, meret:"M", kerekmeret:"29″", suly:"15,3 kg", ar:440000,
    vaz:"SmartForm C1 alumínium · 15,3 kg", villa:"Fox Float Rhythm 34, 130 mm",
    hajtas:"SRAM NX Eagle 1×12", fek:"SRAM Guide T hidraulikus, 180/180",
    kerek:"29″ WTB ST i25 TCS · Maxxis Minion DHF / High Roller II",
    spec:"29″ alumínium trail fully · Fox 34 és Fox DPS, 130 mm · SRAM NX Eagle 1×12, dropperrel.",
    leiras:"Az a fajta kerékpár, amelyik nem kényszerít választásra. Elöl is, hátul is 130 milliméter Fox futómű dolgozik, ami elég ahhoz, hogy a gyökeres, köves szakaszokon nyugodtan hagyd futni, viszont nem annyi, hogy hosszabb emelkedőn kilóra menne a dolog. A Cannondale ezt a geometriát arra szabta, hogy egész napos túrán is jól viselje magát, és ez pontosan érződik rajta. A dropper nyeregcsővel egy mozdulat a váltás a tekerés és az ereszkedés között. Szinte karcmentes, csak nagyon minimális nyommal, keveset futott, teljesen gyári példány.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Cannondale Habit, SmartForm C1 alumínium, 29″"],["Teleszkóp","Fox Float Rhythm 34, 130 mm"],["Rugóstag","Fox Float Performance DPS EVOL, 130 mm"],["Nyeregcső","TranzX dropper, 125 mm"]] },
      { cs:"Hajtás", t:[["Váltó","SRAM NX Eagle, 12 sebesség"],["Hajtómű","Truvativ Stylo 6K, 32T"],["Kazetta","SRAM NX Eagle, 10–50T"],["Lánc","SRAM NX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fék","SRAM Guide T hidraulikus tárcsa"],["Tárcsák","180 / 180 mm"],["Felni","WTB ST i25 TCS 2.0, tubeless ready"],["Gumi","Maxxis Minion DHF 2,5 elöl · High Roller II 2,30 hátul"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cannondale C3 Riser, 780 mm"],["Kormányszár","Cannondale C3"],["Nyereg","Cannondale Stage 3"],["Súly","15,3 kg"]] }
    ] },
  { id:"radon-swoop-cf-9", mappa:"RadonSwoop9.0", marka:"Radon", model:"Radon Swoop CF 9.0", magassag:[184,196], felveve:"2026-09-20",
    kategoria:"Enduro · Fully", szegmens:"trail", allapot:"Újszerű", ev:2021, meret:"XL", kerekmeret:"29″", suly:"15,3 kg", ar:650000,
    vaz:"Swoop Carbon szénszál · 15,3 kg", villa:"RockShox ZEB Select, Charger RC, 170 mm",
    hajtas:"SRAM GX Eagle 1×12", fek:"Magura MT5 négydugattyús, 203/203",
    kerek:"29″ DT Swiss E1900 Spline · Schwalbe Magic Mary / Big Betty",
    spec:"29″ karbon enduro fully · RockShox ZEB 170 mm · SRAM GX Eagle 1×12, dropperrel.",
    leiras:"Annak, aki a saját képességeit szereti feszegetni, nem a bringáét. A Swoop a Radon enduro platformja, amivel évek óta versenyeznek, a 9.0 pedig ennek a karbon vázas kiadása: nem kirakatmodell, hanem az a változat, amit a márka a saját csapatának is odaad. A masszívan erősített, mégis feszes karbon váznak köszönhetően 170 mm rugóúttal is 15,3 kg körül marad, vagyis fürgén fordul, könnyed, és nagy tempónál is a kezedben marad. Elöl a 38 mm-es csúszócsövű RockShox ZEB, hátul a Super Deluxe Select+ dolgozik, a négydugattyús Magura MT5 pedig ott is adagolható erőt ad, ahol a legnagyobb szükség van rá. A német direkt gyártó miatt ez a szint más név alatt jóval drágábban indul. A többit elintézi az első lejtő.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Swoop Carbon szénszálas váz"],["Teleszkóp","RockShox ZEB Select, Charger RC, DebonAir+, 170 mm"],["Rugóstag","RockShox Super Deluxe Select+, DebonAir+, 170 mm"],["Nyeregcső","Radon Competition dropper, 150 mm"]] },
      { cs:"Hajtás", t:[["Hajtómű","SRAM GX Eagle DUB, 30T"],["Hátsó váltó","SRAM GX Eagle, 12 sebesség"],["Fogaskoszorú","SRAM GX Eagle XG-1275, 10–52T"],["Lánc","SRAM SX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fékek","Magura MT5 négydugattyús, Storm 203/203"],["Kerékszett","29″ DT Swiss E1900 Spline"],["Gumik","Schwalbe Magic Mary / Big Betty"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Race Face Aeffect R, 780 mm"]] }
    ],
    kiemelt:true },

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

  { id:"cube-attention-2", mappa:"CubeAttention2", marka:"Cube", model:"Cube Attention", magassag:[182,195], felveve:"2026-08-20", eladva:"2026-09-26",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2021, meret:"XL (21″)", kerekmeret:"29″", suly:"13,7 kg", ar:240000,
    vaz:"Aluminium Lite · 13,7 kg", villa:"RockShox Judy Silver TK, 100 mm, PopLoc",
    hajtas:"Shimano Deore 2×10", fek:"Shimano MT200 hidraulikus, 180/160",
    kerek:"29″ Cube ZX20 · Schwalbe Smart Sam 2.25",
    spec:"29″ alu XC hardtail · RockShox Judy 100 mm · Shimano Deore 2×10.",
    leiras:"Annak, aki stílusos, megbízható MTB-t szeretne, ami nem csak kiszolgálja a hétvégi túrát, hanem kedvet is csinál a következőhöz. A Cube Attention sportos, jól felszerelt terepbringa: a kiegyensúlyozott geometria, a tiszta Shimano 2×10 váltás és a finoman dolgozó, levegős RockShox Judy villa együtt meglepően összeszedett, könnyen megszerethető karaktert adnak. Kényelmes, mégis van benne sportosság, a megjelenése modern, de nem hivalkodó. Igazi mindenre kész társ, amivel könnyű beleszeretni a terepbringázásba, akár most kezded, akár egy megbízható hétköznapi bringát keresel.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Aluminium Lite váz"],["Teleszkóp","RockShox Judy Silver TK, 100 mm, PopLoc"]] },
      { cs:"Hajtás", t:[["Hajtómű","Shimano Deore FC-M4100, 36×26T"],["Első váltó","Shimano Deore FD-M6025, 2 sebesség"],["Hátsó váltó","Shimano Deore RD-M4120, 10 sebesség"],["Fogaskoszorú","Shimano Deore CS-M4100, 11–42T"],["Lánc","KMC X10"]] },
      { cs:"Fék & kerék", t:[["Fékek","Shimano MT200 hidraulikus, 180/160"],["Kerékszett","29″ Cube ZX20"],["Gumik","Schwalbe Smart Sam 2.25"]] },
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

  { id:"mondraker-chrono", mappa:"MondrakerChrono", marka:"Mondraker", model:"Mondraker Chrono", magassag:[174,186], felveve:"2026-08-09",
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

  { id:"cube-reaction-c62-one", mappa:"CubeReactionC62One", marka:"Cube", model:"Cube Reaction C:62 One", magassag:[180,192], felveve:"2026-08-09", eladva:"2026-09-22",
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

  { id:"specialized-chisel-expert", mappa:"SpecializedChiselExpert", marka:"Specialized", model:"Specialized Chisel Expert", magassag:[176,186], felveve:"2026-06-02", eladva:"2026-09-16",
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
    ] }
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
