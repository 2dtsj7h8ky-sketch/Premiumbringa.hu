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
  { id:"specialized-rockhopper-pro", mappa:"SpecializedRockhopperPro", kepDb:10, marka:"Specialized", model:"Specialized Rockhopper Pro", magassag:[182,192], felveve:"2026-11-08",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Újszerű", ev:2018, meret:"XL", kerekmeret:"29″", ar:240000,
    vaz:"Specialized A1 SL alumínium", villa:"Manitou Markhor TS Air, 100 mm",
    hajtas:"Shimano SLX / Deore 2×10", fek:"Shimano M365 hidraulikus, 180/160",
    kerek:"29″ Stout XC SL 25, Tubeless Ready · Specialized Ground Control Sport 2,3 / 2,1",
    spec:"29″ alu XC hardtail · levegős Manitou Markhor 100 mm · Shimano SLX / Deore 2×10, hidraulikus tárcsafékkel.",
    leiras:"A Rockhopper 1986 óta fut, ezzel a világ egyik legrégebbi, ma is gyártott hegyikerékpárja, a Pro pedig a 2018-as széria csúcsa volt. Azoknak szól, akik lelkes hobbibringásként komolyan veszik a hétvégi köröket, de nem akarnak egy versenybringa árát kiadni. Elöl levegős Manitou teleszkóp dolgozik, az egyik legrégebbi amerikai teleszkópgyártótól, a rugóútját pedig a Specialized méretenként hangolta, hogy minden vázméret arányos maradjon. A két első lánckerékkel a síkon is tartod a tempót, a kisebbiken pedig a meredek emelkedők is barátságosabbak. A gumik defektvédő réteget kaptak, a felnik pedig belső nélküli szerelésre is alkalmasak. A Specialized itthon is az egyik legkeresettebb márka, a Rockhopper pedig a használt piacon is jól tartja az értékét. A fényes fekete vázon a neonzöld és a mentazöld részletek frissen és sportosan hatnak. Gyakorlatilag új, rendkívül megkímélt, karcmentes példány, bolti szintű, feszes menetélménnyel, nálunk alaposan átvizsgálva, átfogó alapszerviz után, azonnal menetkész.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Specialized A1 SL alumínium, 29″"],["Teleszkóp","Manitou Markhor TS Air, 100 mm"]] },
      { cs:"Hajtás", t:[["Hátsó váltó","Shimano SLX, 10 sebesség"],["Első váltó","Shimano Deore, 2 sebesség"],["Hajtómű","Specialized Stout 2×10, 36×22T"],["Kazetta","SunRace, 11–36T"],["Lánc","KMC X10"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano M365 hidraulikus tárcsa"],["Tárcsák","180 / 160 mm"],["Felni","29″ Stout XC SL 25, Tubeless Ready"],["Gumi","Specialized Ground Control Sport, 2,3 elöl / 2,1 hátul, defektvédelemmel"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Specialized Stout Pro, 720 mm"],["Nyereg","Specialized Henge Sport"],["Kerékméret","29″"],["Fényezés","Fényes fekete, neonzöld és mentazöld részletekkel"]] }
    ] },
  { id:"mondraker-chrono-2", mappa:"MondrakerChrono2", kepDb:11, marka:"Mondraker", model:"Mondraker Chrono", magassag:[168,180], felveve:"2026-11-08",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Jó", ev:2021, meret:"M (43 cm)", kerekmeret:"29″", suly:"kb. 13 kg", ar:280000,
    vaz:"Mondraker Xtralite alumínium · kb. 13 kg", villa:"RockShox Judy Silver TK Air, 100 mm, zárható",
    hajtas:"SRAM SX Eagle 1×12", fek:"Avid Elixir 1 hidraulikus, 160/160",
    kerek:"29″ MDK XP1 · Kenda Slant Six 2,35",
    spec:"29″ alu XC hardtail · RockShox Judy Silver TK Air 100 mm · SRAM SX Eagle 1×12, új Avid hidraulikus fékkel, kb. 13 kg.",
    leiras:"A spanyol Mondraker egyszer már átírta a hegyikerékpárok geometriáját: a hosszú váz és a rövid stucni ötlete tőlük indult, ma pedig szinte minden gyártó ezt követi. A Chrono ennek a gondolkodásnak a terepversenyekre szánt hardtailje, a márka kapuja a sportos hegyikerékpározás felé. Azoknak szól, akik lelkes hobbibringásként hétvégén a hegyekben, hétköznap edzésen tekernek, és szeretik, ha a bringájuk kilóg a sorból. A hosszú elejű geometriát nyugodt, kiszámítható irányításra tervezték, a levegős RockShox teleszkóp aszfaltra zárható, a 12 sebességes Eagle hajtás pedig a meredek emelkedőkön is ad még egy könnyebb fokozatot. A széles gumik és a rugós nyeregcső a hosszabb túrákat is kényelmesebbé teszik. Spanyol hardtailből itthon kevés gurul, Mondrakerből még kevesebb. A matt fekete vázat lángvörös és égkék csíkok törik meg: versenyes, de nem hivalkodó. Spanyol tervezés, versenyes karakter, ritka név: hardtail azoknak, akik nem a tömeggel tekernek. Műszakilag hibátlan példány a használatból és a tárolásból adódó esztétikai nyomokkal, hosszú távra elegendő kopóalkatrészekkel, új Avid hidraulikus fékrendszerrel és a gyári merev nyeregcső helyett kényelmesebb rugós nyeregcsővel, nálunk alaposan átvizsgálva, átfogó alapszerviz után, azonnal menetkész.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Mondraker Xtralite alumínium, 29″, Forward Geometry"],["Teleszkóp","RockShox Judy Silver TK Air, 100 mm, zárható"],["Nyeregcső","Rugós nyeregcső, a gyári merev helyett"],["Súly","kb. 13 kg"]] },
      { cs:"Hajtás", t:[["Hátsó váltó","SRAM SX Eagle, 12 sebesség"],["Hajtómű","SRAM SX Eagle, DUB"],["Kazetta","SRAM SX Eagle, 11–50T"],["Lánc","SRAM SX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fék","Avid Elixir 1 hidraulikus tárcsa, új fékrendszer"],["Tárcsák","160 / 160 mm"],["Felni","29″ MDK XP1"],["Gumi","Kenda Slant Six 29×2,35"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Onoff Sulfur"],["Kerékméret","29″"],["Fényezés","Matt fekete, lángvörös és égkék csíkokkal"]] }
    ] },
  { id:"cube-reaction-tm-one", mappa:"CubeReactionTMONE", kepDb:12, marka:"Cube", model:"Cube Reaction TM One", magassag:[170,182], felveve:"2026-11-08",
    kategoria:"Trail · Hardtail", szegmens:"trail", allapot:"Kiváló", ev:2025, meret:"M (18″)", kerekmeret:"29″", suly:"kb. 15,5 kg", ar:360000,
    vaz:"Cube Aluminium Lite, 2025-ös generáció · kb. 15,5 kg", villa:"SR Suntour XCR34 Air, 140 mm",
    hajtas:"Shimano CUES 1×10", fek:"Magura MT Thirty hidraulikus, négydugattyús, 203/180",
    kerek:"29″ Cube EX30 · Schwalbe Magic Mary / Big Betty 2,4",
    spec:"29″ trail hardtail, 140 mm · SR Suntour XCR34 Air · Shimano CUES 1×10, dropperrel és négydugattyús Magura fékkel.",
    leiras:"Elöl 140 mm, a kormányszög 65 fok: a Reaction TM a Cube népszerű hardtail szériájának lejtőkre hangolt változata, 2025-re teljesen új, robusztusabb vázzal. Azoknak szól, akik a hétvégi körön a köves, gyökeres lejtőt nem kikerülik, hanem megkeresik. A rövid láncvilla a pontos irányításért és a tapadásért közelebb hozza a hátsó kereket a súlypontodhoz, a dropperes nyeregcső pedig a kormányról leengedhető a lejtő előtt. A levegős teleszkóp nyomása és csillapítása is állítható, így pontosan a terephez és hozzád hangolhatod. Elöl négydugattyús Magura fék dolgozik 203 mm-es tárcsával, ami hosszú lejtőkön is bőven ad tartalékot. A hajtás a Shimano strapabíró CUES családjából jön, a láncot pedig gyári láncvezető és láncvédő tartja a helyén. Gyárilag a Schwalbe lejtős terepre szánt gumipárosa fut rajta, a vázba pedig akár 2,5 colos gumik is beférnek. A 2025-ös generációból használt példány még alig van a piacon. Az arany-lime és fekete fényezésével a fák között sem lehet szem elől téveszteni. Új generációs váz, dropper és négydugattyús fék: modern trail hardtail, használt áron. Gyári, igényes, műszakilag megbízható példány, hosszú távra elegendő kopóalkatrészekkel, nálunk alaposan átvizsgálva, átfogó alapszerviz után, azonnal menetkész.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Cube Aluminium Lite, 29″, 2025-ös generáció, 65°-os kormányszög"],["Teleszkóp","SR Suntour XCR34 Air, 140 mm"],["Nyeregcső","Cube Dropper Post, 31,6 mm"],["Gumihely","2,5″-ig"],["Súly","kb. 15,5 kg"]] },
      { cs:"Hajtás", t:[["Hátsó váltó","Shimano CUES, 10 sebesség"],["Hajtómű","Shimano CUES, 32T, láncvezetővel"],["Kazetta","Shimano CUES, 11–48T"],["Lánc","KMC xGlide"]] },
      { cs:"Fék & kerék", t:[["Fék","Magura MT Thirty hidraulikus tárcsa, négydugattyús"],["Tárcsák","203 / 180 mm"],["Felni","29″ Cube EX30"],["Gumi","Schwalbe Magic Mary elöl, Big Betty hátul, 2,4"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Rise Trail Bar, 760 mm"],["Nyereg","Acid Venec Lite"],["Kerékméret","29″"],["Fényezés","Arany-lime és fekete"]] }
    ] },
  { id:"cube-reaction-c62-pro", mappa:"CubeReactionC62Pro", kepDb:12, marka:"Cube", model:"Cube Reaction C:62 Pro", magassag:[178,190], felveve:"2026-11-08",
    kategoria:"XC · Hardtail · Karbon", szegmens:"xc", allapot:"Újszerű", ev:2022, meret:"L (19″)", kerekmeret:"29″", suly:"kb. 11,5 kg", ar:420000,
    vaz:"Cube C:62 karbon · kb. 11,5 kg", villa:"RockShox Judy Gold RL Air, 100 mm, kormányról zárható",
    hajtas:"Shimano XT 1×12", fek:"Shimano XT hidraulikus, 180/160",
    kerek:"29″ Answer Atac AM, Tubeless Ready · Schwalbe Racing Ray / Racing Ralph 2,25",
    spec:"29″ karbon XC hardtail · RockShox Judy Gold RL Air 100 mm · Shimano XT 1×12 és XT fék, kb. 11,5 kg.",
    leiras:"Aki alumínium Cube-on kezdte, előbb-utóbb egy karbon Reactionről kezd álmodni. A C:62 Pro ennek az álomnak a legokosabb változata: a karbon Reactionök közül ez az első, amelyiken a fék és a hátsó váltó már XT, a teleszkóp pedig levegős RockShox. Azoknak szól, akik a következő szintre lépnének, legyen szó gyorsabb hétvégi körökről a Bükkben és a Mátrában, vagy egy rajtszámról a hazai maratonokon. Az XT ott van, ahol a legtöbbet számít, a fékeken és a váltón, a kopóalkatrészek pedig Deore szintűek, így a lánc és a kazetta cseréje sem kerül vagyonokba. A teleszkóp a kormányról zárható, így az aszfaltos összekötőkön és a hosszú emelkedőkön minden watt a kerékbe megy. A kerekeken a Schwalbe versenypárosa fut: elöl a tapadósabb Racing Ray, hátul a gyorsabban gördülő Racing Ralph, a felnik pedig tubeless szerelésre is alkalmasak, ami kevesebb defektet jelent. A váz dropperes nyeregcsőre is elő van készítve, így ha a lejtők felé is nyitnál, a bringa veled tart. Karbon, XT, RockShox: a következő szint, használt áron. Rendkívül keveset futott, teljesen gyári, karcmentes példány, nálunk alaposan átvizsgálva, átfogó alapszerviz után, azonnal menetkész.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Cube C:62 karbon, 29″, dropperes nyeregcsőre előkészítve"],["Teleszkóp","RockShox Judy Gold RL Air, 100 mm, kormányról zárható"],["Nyeregcső","Cube Performance, 27,2 mm"],["Súly","kb. 11,5 kg"]] },
      { cs:"Hajtás", t:[["Hátsó váltó","Shimano XT, 12 sebesség"],["Hajtómű","Shimano FC-MT611, 32T"],["Kazetta","Shimano Deore, 10–51T"],["Lánc","Shimano Deore CN-M6100"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano XT hidraulikus tárcsa"],["Tárcsák","180 / 160 mm"],["Felni","29″ Answer Atac AM, Tubeless Ready"],["Gumi","Schwalbe Racing Ray elöl, Racing Ralph hátul, 29×2,25"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Flat Race Bar, 720 mm"],["Nyereg","Natural Fit Venec"],["Kerékméret","29″"]] }
    ] },
  { id:"cube-nuroad-c62-pro", mappa:"CubeNuroadC62Pro", kepDb:12, marka:"Cube", model:"Cube Nuroad C:62 Pro", magassag:[172,182], felveve:"2026-11-06",
    kategoria:"Gravel · Karbon", szegmens:"gravel", allapot:"Kiváló", ev:2023, meret:"M (56 cm)", kerekmeret:"28″", suly:"9 kg", ar:650000,
    vaz:"Cube C:62 Advanced Twin Mold karbon · 9 kg", villa:"Cube C:62 Technology, karbon",
    hajtas:"Shimano GRX 1×11", fek:"Shimano GRX BR-RX400 hidraulikus, 160/160",
    kerek:"28″ Newmen Performance X.R. 25 · Schwalbe G-One Allround 40",
    spec:"28″ karbon gravel, karbon villával és nyeregcsővel · Shimano GRX 1×11 · hidraulikus GRX tárcsafék, 9 kg.",
    leiras:"Karbon gravel bringáról sokan álmodnak, de kevesen adnak ki érte új árat. A Nuroad C:62 Pro a Cube legelérhetőbb karbon gravel kerékpárja, ezért azoknak szól, akik most váltanának karbonra. A váz, a villa és a nyeregcső is karbon, így az egész bringa 9 kiló, és a murva rezgéseiből is kevesebb jut el hozzád. Az egytányéros Shimano GRX hajtás és a hidraulikus fékek egyszerű, hálás páros: első váltó nélkül is minden emelkedőre jut áttétel, a karbantartásuk pedig minimális. Ha hosszabb útra indulnál, csomagtartó, sárvédő és kitámasztó is felszerelhető, a vázban pedig 45 milliméteres gumiknak is jut hely. Használt karbon Nuroadot itthon ritkán látni. Külön kedvencünk a mocsárszürke fényezés: már a neve elárulja, hogy nem fél a sártól. Kevesebb kiló, több kilométer, józan áron. Igényes, esztétikailag szinte újszerű, teljesen gyári példány, egyedül a hátsó gumi új, a gyári specifikációval azonos. Nálunk alaposan átvizsgálva, átfogó alapszerviz után, azonnal menetkész.",
    reszletek:[
      { cs:"Váz & villa", t:[["Váz","Cube C:62 Advanced Twin Mold karbon, 28″"],["Villa","Cube C:62 Technology, karbon"],["Nyeregcső","Newmen Advanced, karbon"],["Gumihely","45 mm-ig"],["Felszerelhetőség","Csomagtartó, sárvédő és kitámasztó"],["Súly","9 kg"]] },
      { cs:"Hajtás", t:[["Hátsó váltó","Shimano GRX RD-RX812, 11 sebesség"],["Hajtómű","Shimano GRX FC-RX600, 40T, egytányéros"],["Kazetta","Shimano XT CS-M8000, 11–42T"],["Lánc","Shimano CN-HG601, 11 sebesség"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano GRX BR-RX400 hidraulikus tárcsa"],["Tárcsák","160 / 160 mm"],["Felni","28″ Newmen Performance X.R. 25"],["Gumi","Schwalbe G-One Allround, Kevlar, 40-622"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Gravel Race Bar"],["Kerékméret","28″"],["Fényezés","Mocsárszürke"]] }
    ] },
  { id:"cube-nuroad-pro", mappa:"CubeNuroadPro", kepDb:13, marka:"Cube", model:"Cube Nuroad Pro", magassag:[175,182], felveve:"2026-11-03", eladva:"2026-11-06",
    kategoria:"Gravel · All-road", szegmens:"gravel", allapot:"Újszerű", ev:2023, meret:"M (56 cm)", kerekmeret:"28″", suly:"10,4 kg", ar:380000,
    vaz:"Cube Aluminium 6061 T6 Superlite · 10,4 kg", villa:"Cube Nuroad Flat Mount Disc, full carbon",
    hajtas:"Shimano GRX 2×10", fek:"TRP Spyre mechanikus tárcsafék, 160/160",
    kerek:"28″ Cube GR 2.3 · Schwalbe G-One Allround 40",
    spec:"28″ alumínium gravel karbon villával · Shimano GRX 2×10 · kétdugattyús TRP Spyre tárcsafék, 10,4 kg.",
    leiras:"A Nuroad a Cube válasza arra, hogy a bringa ne szabjon határt: aszfalt, murva, földút, hétvégén akár csomagokkal megpakolva, mindez ugyanazzal a kerékpárral. Azoknak szól, akik egy bringával akarnak edzeni, ingázni és felfedezni, és nem akarnak minden új útnál azon gondolkodni, hogy elbírja-e. Elöl két lánckerék dolgozik: a nagyobbikkal aszfalton is tartod a tempót, a kisebbikkel a meredek, murvás emelkedőn is marad tartalék. A kétdugattyús TRP fékek mindkét oldalról zárják a tárcsát, mégis bowdenesek, így egy túra közepén is egyszerűen beállíthatók, légtelenítés nélkül. A vázon és a karbon villán is ott vannak a sárvédő és a csomagtartó rögzítési pontjai, a vázban pedig 45 milliméteres gumiknak is jut hely, vagyis a bringa veled együtt nő, ahogy a túráid hosszabbodnak. A kényelmes, hosszú napokra hangolt geometriát a rezgéseket szűrő karbon villa egészíti ki. A legtöbb gravel bringa fekete vagy szürke, ez nem. Külön kedvencünk a bronzos arany fényezése: ritkán látott, meleg árnyalat, ami napfényben aranyosan villan, a murva porában pedig még jobban mutat. Minden adott hozzá, már csak a kalandvágyad hiányzik. Rendkívül igényes, újszerű példány, aminek a java még rád marad, nálunk alaposan átvizsgálva, átfogó alapszerviz után, azonnal menetkész.",
    reszletek:[
      { cs:"Váz & villa", t:[["Váz","Cube Aluminium 6061 T6 Superlite, 28″"],["Villa","Cube Nuroad Flat Mount Disc, full carbon"],["Gumihely","45 mm-ig"],["Felszerelhetőség","Sárvédő és csomagtartó rögzítés a vázon és a villán"],["Súly","10,4 kg"]] },
      { cs:"Hajtás", t:[["Hátsó váltó","Shimano GRX RD-RX400, 10 sebesség"],["Első váltó","Shimano GRX FD-RX400, 2 sebesség"],["Hajtómű","Shimano GRX FC-RX600, 46/30T"],["Kazetta","Shimano CS-HG50, 11–36T"],["Lánc","KMC X10"]] },
      { cs:"Fék & kerék", t:[["Fék","TRP Spyre MD-C610C mechanikus tárcsa, kétdugattyús"],["Tárcsák","160 / 160 mm"],["Felni","28″ Cube GR 2.3"],["Gumi","Schwalbe G-One Allround, Kevlar, 40-622"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Gravel Race Bar"],["Nyereg","Natural Fit Venec Lite"],["Kerékméret","28″"],["Fényezés","Bronzos arany"]] }
    ] },
  { id:"cube-cross-race-sl", mappa:"CubeCrossRaceSL", kepDb:11, marka:"Cube", model:"Cube Cross Race SL", magassag:[175,182], felveve:"2026-11-03",
    kategoria:"Cyclocross · Gravel", szegmens:"gravel", allapot:"Újszerű", ev:2021, meret:"M (56 cm)", kerekmeret:"28″", suly:"9,5 kg", ar:400000,
    vaz:"Cube Aluminium Superlite · 9,5 kg", villa:"Cube Cross Race Disc, full carbon",
    hajtas:"Shimano GRX 1×11", fek:"Shimano GRX BR-RX400 hidraulikus, 160/160",
    kerek:"28″ Fulcrum Racing 77 DB · Schwalbe X-One Allround 33",
    spec:"28″ alumínium cyclocross karbon villával · Shimano GRX 1×11 · hidraulikus GRX tárcsafék, 9,5 kg.",
    leiras:"Versenyre tervezték, és pont ettől lesz egy lelkes bringás büszkesége. A Cross Race SL a 2021-ben megújult Cube cyclocross széria legjobban felszerelt alumínium tagja, fölötte már csak a karbon vázas modellek jönnek. Azoknak szól, akik versenyminőséget akarnak a hétköznapokra: aszfaltra, földútra, téli edzésre, és ha kedvük támad, egy cyclocross futamra is. Az egytányéros, földútra fejlesztett Shimano GRX hajtásnál nincs első váltó, amit állítgatni kellene, a kuplungos hátsó váltó pedig rázós terepen is a helyén tartja a láncot. A hidraulikus GRX tárcsafék sárban és esőben ugyanolyan biztosan lassít, mint szárazon. A kábelek a vázban futnak, így a sár sem fér hozzájuk, a karbon villa pedig elveszi a rezgések élét. Az egész kerékpár mindössze 9,5 kiló, bármikor vállra kapod. Ilyen szintű cyclocross itthon ritkán kerül használtan piacra. Külön kedvencünk a piros a pirosban fényezése: visszafogott, mégis mindenki megnézi. Báránybőrbe bújt farkas, jóval új ár alatt. Szinte új, megkímélt példány, nálunk alaposan átvizsgálva, átfogó alapszerviz után, azonnal menetkész.",
    reszletek:[
      { cs:"Váz & villa", t:[["Váz","Cube Aluminium Superlite, 28″, belső kábelvezetés"],["Villa","Cube Cross Race Disc, full carbon"],["Súly","9,5 kg"]] },
      { cs:"Hajtás", t:[["Hátsó váltó","Shimano GRX RD-RX812, 11 sebesség, kuplungos"],["Hajtómű","Shimano GRX FC-RX600, 40T, egytányéros"],["Kazetta","Shimano SLX CS-M7000, 11–42T"],["Lánc","Shimano CN-HG601, 11 sebesség"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano GRX BR-RX400 hidraulikus tárcsa"],["Tárcsák","160 / 160 mm"],["Felni","28″ Fulcrum Racing 77 DB"],["Gumi","Schwalbe X-One Allround Performance, 33-622"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Newmen Evolution Wing Bar"],["Nyereg","Natural Fit Nuance Lite"],["Kerékméret","28″"],["Fényezés","Piros a pirosban"]] }
    ] },
  { id:"trek-remedy-7", mappa:"TrekRemedy7", kepDb:12, marka:"Trek", model:"Trek Remedy 7", magassag:[170,180], felveve:"2026-11-02",
    kategoria:"All Mountain · Fully", szegmens:"trail", allapot:"Kiváló", ev:2019, meret:"M/L (18,5″)", kerekmeret:"27,5″", suly:"kb. 14,5 kg", ar:430000,
    vaz:"Trek Alpha Platinum alumínium, ABP felfüggesztés · kb. 14,5 kg", villa:"RockShox Yari RC DebonAir, 160 mm",
    hajtas:"SRAM NX Eagle 1×12", fek:"SRAM Level T hidraulikus, 200/180",
    kerek:"27,5″ Bontrager Line Comp 30, Tubeless Ready · Maxxis High Roller II 2,4",
    spec:"27,5″ all mountain fully, 160/150 mm · RockShox Yari és Deluxe RL · SRAM NX Eagle 1×12, 125 mm-es dropperrel.",
    leiras:"A Remedy a Trek lejtőkre épített hegyi kerékpárja, de úgy, hogy felfelé se kelljen tolni. Azoknak szól, akik a Bükkben vagy a Mátrában már nem kerülgetni akarják a köveket, hanem átmenni rajtuk. Elöl 160, hátul 150 milliméter rugóút dolgozik, RockShox Yari villával és Deluxe rugóstaggal. Az egyik forgáspontot a Trek a hátsó kerék tengelyébe tette, így fékezés közben is dolgozik a rugózás, és a kerék akkor is a talajon marad, amikor a legnagyobb szükség van rá. A kormányütköző gondoskodik róla, hogy egy esésnél se csapódjon a kormány a vázba. A geometria pedig egy kis forgatható betéttel két állásba hangolható: laposabbra a gyors lejtőkhöz, magasabbra a technikás szakaszokhoz. A Trek itthon is erős márka, a RockShox és a SRAM alkatrészekhez bárhol hozzáférsz, így a szerviz sem lesz fejtörés. Az antracit váz az élénkpiros felirattal a sáros hétvégéket is jól viseli, a garázsban pedig akkor is jó ránézni, amikor épp nem tekersz. A gyári gumik helyére minőségi Maxxis High Roller II került, ami lejtőn többet tud, mint az eredeti. Hosszú rugóút, okos megoldások, Trek név: komoly hegyi kerékpár, baráti áron. Igényes, megkímélt példány, nálunk alaposan átvizsgálva, átfogó alapszerviz után, azonnal menetkész.",
    megjegyzes:"A hátsó felnin egy felütés található. A kerék nyolcasmentes, a használatot nem befolyásolja, egy esetleges belső nélküli, tubeless átalakításnál viszont ronthatja a tömítést.",
    reszletek:[
      { cs:"Váz & felfüggesztés", t:[["Váz","Trek Alpha Platinum alumínium, 27,5″, ABP, Knock Block, Mino Link"],["Teleszkóp","RockShox Yari RC, DebonAir, Motion Control, 160 mm"],["Rugóstag","RockShox Deluxe RL, 150 mm"],["Nyeregcső","Dropper, 125 mm"],["Súly","kb. 14,5 kg"]] },
      { cs:"Hajtás", t:[["Váltó","SRAM NX Eagle, 12 sebesség"],["Hajtómű","SRAM NX Eagle DUB, 32T"],["Kazetta","SRAM PG-1230 Eagle, 11–50T"],["Lánc","SRAM NX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fék","SRAM Level T hidraulikus tárcsa"],["Tárcsák","200 / 180 mm"],["Felni","27,5″ Bontrager Line Comp 30, Tubeless Ready"],["Gumi","Maxxis High Roller II, 2,4"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Bontrager Rhythm Comp, 780 mm"],["Nyereg","Bontrager Arvada"],["Kerékméret","27,5″"],["Fényezés","Antracit, élénkpiros felirattal"]] }
    ] },
  { id:"canyon-pathlite-5", mappa:"CanyonPathlite5", kepDb:12, marka:"Canyon", model:"Canyon Pathlite 5", magassag:[184,195], felveve:"2026-11-01",
    kategoria:"Cross · Trekking", szegmens:"cross", allapot:"Kiváló", ev:2021, meret:"XL", kerekmeret:"28″", suly:"13 kg", ar:240000,
    vaz:"Canyon Pathlite AL alumínium · 13 kg", villa:"SR Suntour NRX-D, 75 mm, zárható",
    hajtas:"Shimano Deore M5100 1×11", fek:"Shimano MT200 hidraulikus, 160/160",
    kerek:"28″ alumínium · Schwalbe G-One Bite",
    spec:"28″ könnyű cross-trekking · SR Suntour NRX-D 75 mm, zárható · Shimano Deore 1×11, 11–51.",
    leiras:"Ahol véget ér az aszfalt, a legtöbb városi kerékpárral vissza kell fordulni. A Pathlite-tal ott kezdődik a java. Annak való, aki nem akar választani a városi és a hegyi bringa között: hétköznap munkába, hétvégén a Tisza-gátra. Aszfalton lezárod a teleszkópot, a kátyús dűlőúton kinyitod. A váltás egyetlen karral megy, és szembeszélben vagy emelkedőn is mindig van hova visszaváltani, a 11–51-es kazettával a leghosszabb kaptató sem gond. A súlya olyan barátságos, hogy a negyedik emeletre is gond nélkül felviszed. Új Canyont itthon boltban nem találsz, mert a gyártó közvetlenül, a saját webáruházában árul, és használt is ritkán akad. Egy kerékpár, ami minden útra igent mond, jóval az új ár alatt. Keveset futott, megkímélt, gyári példány, nálunk átvizsgálva, alapszerviz után, azonnal menetkész.",
    reszletek:[
      { cs:"Váz & futómű", t:[["Váz","Canyon Pathlite AL, alumínium, 28″"],["Teleszkóp","SR Suntour NRX-D, 75 mm, zárható"],["Súly","13 kg"]] },
      { cs:"Hajtás", t:[["Váltó","Shimano Deore M5100, 11 sebesség"],["Hajtómű","Shimano Deore M5100, 32T"],["Kazetta","Shimano Deore M5100, 11–51T"],["Lánc","KMC X11-93"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano MT200 hidraulikus tárcsa"],["Tárcsák","160 / 160 mm"],["Felni","28″ alumínium"],["Gumi","Schwalbe G-One Bite, gravel"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Iridium Flatbar"],["Nyereg","Canyon Sport Saddle EP1249"],["Kerékméret","28″"],["Fényezés","Világos kékesszürke, fekete részletekkel"]] }
    ] },
  { id:"specialized-rockhopper-expert", mappa:"SpecializedRockhopperExpert", kepDb:12, marka:"Specialized", model:"Specialized Rockhopper Expert", magassag:[182,195], felveve:"2026-11-01",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2021, meret:"XL", kerekmeret:"29″", suly:"14,5 kg", ar:300000,
    vaz:"Specialized A1 Premium alumínium · 14,5 kg", villa:"RockShox Judy Solo Air levegős, 100 mm, zárható",
    hajtas:"SRAM SX Eagle 1×12", fek:"Shimano BR-MT200 hidraulikus, 180/180",
    kerek:"29″ Specialized Alloy · Specialized Ground Control 2,3",
    spec:"29″ alumínium merevvázas · levegős RockShox Judy 100 mm · SRAM SX Eagle 1×12, rugózott nyeregcsővel.",
    leiras:"Kevés név jelent annyit a hegyikerékpározásban, mint a Rockhopper: a Specialized 1986 óta építi, és generációk első igazi terepes kerékpárja lett. Az Expert ennek a legendának a csúcskiépítése, a 2021-es, alaposan megújított generációból: könnyebb váz, belső kábelvezetés, levegős RockShox Judy villa, SRAM Eagle 12 sebességes hajtás és Shimano hidraulikus fékek, vagyis olyan felszereltség, ami messze túlnő a belépő szinten. Annak való, aki nem csak egy bringát, hanem egy nevet akar, olyat, amit minden terepező ismer és tisztel, és aki a 29-es kerekek nyugodt gurulását szereti hosszabb erdei és dombvidéki köröknél. A szatén ezüst fényezés az egyik legszebb Rockhopper szín: visszafogott és elegáns, de ahogy a fény ráesik, a holografikus Specialized felirat szivárványszínekben játszik. Ennél a példánynál a gyári felszereltséget rugózott SR Suntour NCX nyeregcsővel és kényelmi nyereggel egészítették ki, így hosszú túrán is többet ad, mint gyárilag. Keveset futott, megkímélt, gyári példány, nálunk átvizsgálva, alapszerviz után, azonnal menetkész.",
    reszletek:[
      { cs:"Váz & futómű", t:[["Váz","Specialized A1 Premium alumínium, 29″, belső kábelvezetés"],["Teleszkóp","RockShox Judy Solo Air levegős, 100 mm, zárható"],["Nyeregcső","SR Suntour NCX rugózott"],["Súly","14,5 kg"]] },
      { cs:"Hajtás", t:[["Váltó","SRAM SX Eagle, 12 sebesség"],["Hajtómű","SRAM SX Eagle, Powerspline"],["Kazetta","SRAM PG-1210 Eagle, 11–50T"],["Lánc","SRAM SX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano BR-MT200 hidraulikus tárcsa"],["Tárcsák","180 / 180 mm"],["Felni","29″ Specialized Alloy, Shimano FH-RM35 agy"],["Gumi","Specialized Ground Control 2,3"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Specialized Stout alumínium"],["Nyereg","Kényelmi nyereg"],["Kerékméret","29″"],["Fényezés","Szatén ezüst, holografikus felirattal"]] }
    ] },
  { id:"canyon-grand-canyon-8", mappa:"CanyonGrandCanyon8", kepDb:12, marka:"Canyon", model:"Canyon Grand Canyon 8", magassag:[180,192], felveve:"2026-10-31", eladva:"2026-11-02",
    kategoria:"Trail · Hardtail", szegmens:"trail", allapot:"Újszerű", ev:2021, meret:"L", kerekmeret:"29″", suly:"13,6 kg", ar:380000,
    vaz:"Canyon Grand Canyon AL SL alumínium · 13,6 kg", villa:"Fox 34 Rhythm, 120 mm, zárható",
    hajtas:"Shimano Deore XT 1×12", fek:"Shimano SLX hidraulikus, 180/160",
    kerek:"29″ Alexrims MD25 · Schwalbe Nobby Nic Performance 2,35",
    spec:"29″ alumínium trail merevvázas · Fox 34 Rhythm 120 mm · Shimano XT 1×12, 150 mm-es dropperrel.",
    leiras:"A Canyon az a márka, amiről mindenki hallott, de élőben kevesen láttak: a gyártó csak online árul, mégis a legelismertebb kerékpárgyártók közé tartozik. A Grand Canyon a kínálatuk sokoldalú, mindenre kész merevvázasa, a 8-as pedig a sorozat jól felszerelt kiadása, és pontosan látszik rajta, hol számít a minőség. A villa Fox 34, amit általában trail fullykon látni. A hátsó váltó Shimano XT, vagyis azon nem spóroltak, amit egy tekerésen a legtöbbször használsz. Gyárilag jár hozzá a 150 milliméteres dropper. Annak való, aki egy merevvázastól is igazi terepes tudást vár, és szeretné, ha a kerékpár már gyárilag mindent tudna, amit a terep kér. Ennél a példánynál a gyári fék helyére jobb teljesítményű Shimano SLX került, tehát többet tud, mint amikor a gyárból kigördült. Rendkívül igényes, megvigyázott, friss és feszes példány.",
    reszletek:[
      { cs:"Váz & futómű", t:[["Váz","Canyon Grand Canyon AL SL, alumínium, 29″"],["Teleszkóp","Fox 34 Rhythm, 120 mm, zárható"],["Nyeregcső","Iridium dropper, 150 mm"],["Súly","13,6 kg"]] },
      { cs:"Hajtás", t:[["Váltó","Shimano Deore XT, 12 sebesség"],["Hajtómű","Shimano MT611, 30T"],["Kazetta","Shimano Deore, 11–50T"],["Lánc","Shimano CN-M7100"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano SLX hidraulikus tárcsa"],["Tárcsák","180 / 160 mm"],["Felni","29″ Alexrims MD25"],["Gumi","Schwalbe Nobby Nic Performance 2,35, Addix"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Newmen, Iridium kormányszárral"],["Nyereg","Iridium Trail"],["Kerékméret","29″"],["Fényezés","Világosszürke, piros részletekkel"]] }
    ] },
  { id:"trek-marlin-8-gen3", mappa:"TrekMarlin8", marka:"Trek", model:"Trek Marlin 8 Gen 3", magassag:[172,182], felveve:"2026-10-30",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Újszerű", ev:2024, meret:"M/L (18,5″)", kerekmeret:"29″", suly:"14,3 kg", ar:300000,
    vaz:"Trek Alpha Silver alumínium · 14,3 kg", villa:"RockShox Judy Silver levegős, 100 mm, zárható",
    hajtas:"SRAM SX Eagle 1×12", fek:"Shimano BR-MT200 hidraulikus, 180/160",
    kerek:"29″ Bontrager Kovee · Maxxis Ardent, tubeless",
    spec:"29″ alumínium merevvázas · levegős RockShox Judy 100 mm · SRAM SX Eagle 1×12, 150 mm-es dropperrel.",
    leiras:"A Marlin az a kerékpár, amivel tízezrek kezdték a terepezést, és nem véletlenül a Trek legkelendőbb hegyi modellje. A 8-as Gen 3 ennek a legjobban felszerelt kiadása: levegős RockShox villa, és a Marlin történetében először gyári dropper nyeregcső, vagyis a széria itt már a komolyabb kerékpárok eszköztárával érkezik. A Gen 3 geometriája alacsony súlypontú és játékos, a széles kormány és a tapadós Maxxis Ardent gumik pontosan ehhez a karakterhez illenek: a kanyargós terepen van igazán elemében. Annak való, aki az első perctől komolyan veszi a terepet, és olyan bringát akar, ami a fejlődésével együtt nő, utólagos fejlesztgetés nélkül. Népszerű modell, csúcskiadás és újszerű állapot, ez a három ritkán jön össze egyszerre. Keveset futott, feszes, gyári példány.",
    reszletek:[
      { cs:"Váz & futómű", t:[["Váz","Trek Marlin Gen 3, Alpha Silver alumínium, 29″"],["Teleszkóp","RockShox Judy Silver levegős, 100 mm, zárható"],["Nyeregcső","TranzX JD-YSP18 dropper, 150 mm"],["Súly","14,3 kg"]] },
      { cs:"Hajtás", t:[["Váltó","SRAM SX Eagle, 12 sebesség"],["Hajtómű","SRAM SX Eagle, 30T"],["Kazetta","SRAM PG-1210 Eagle, 11–50T"],["Lánc","SRAM SX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano BR-MT200 hidraulikus tárcsa"],["Tárcsák","180 / 160 mm"],["Felni","29″ Bontrager Kovee"],["Gumi","Maxxis Ardent, tubeless"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Bontrager alumínium, 750 mm"],["Nyereg","Bontrager Arvada"],["Kerékméret","29″"],["Fényezés","Piros, fehér részletekkel"]] }
    ] },
  { id:"cube-analog-2", mappa:"CubeAnalog", marka:"Cube", model:"Cube Analog", magassag:[174,186], felveve:"2026-10-30",
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Újszerű", ev:2024, meret:"L (19″)", kerekmeret:"29″", suly:"13,8 kg", ar:240000,
    vaz:"Cube könnyű alumínium · 13,8 kg", villa:"RockShox Judy TK Coil, 100 mm, zárható",
    hajtas:"SRAM SX Eagle 1×12", fek:"Shimano BR-MT200 hidraulikus, 180/160",
    kerek:"29″ Cube ZX20 · Schwalbe Smart Sam 2,25",
    spec:"29″ alumínium merevvázas · zárható RockShox Judy 100 mm · SRAM SX Eagle 1×12, hidraulikus fékkel.",
    leiras:"A kezdő és haladó közötti kategória jól eltalált receptje, és nem véletlenül a Cube egyik legnépszerűbb merevvázasa: pontosan annyit tud, amennyi a terepezés megszerettetéséhez és a fejlődéshez kell. Az egykaros, széles áttételű hajtással a meredek emelkedőre és a gyors sík szakaszra is van fokozat, a zárható RockShox villa terepen kényelmes, aszfalton feszes, a hidraulikus tárcsafékkel pedig minden időben magabiztosan állsz meg. Annak való, aki most ismerkedik a tereppel és olyan kerékpárt szeretne, ami a fejlődésével is lépést tart, de annak is, aki egy megbízható, jó nevű darabot keres a mindennapokra és a hétvégi túrákra. Ez a példány a ritkább, flash lime színből való, a fekete részletekkel kifejezetten mutatós. Karcmentes, alig gurult, bolti állapotú, teljesen gyári.",
    reszletek:[
      { cs:"Váz & futómű", t:[["Váz","Cube Analog, könnyű alumínium, 29″"],["Teleszkóp","RockShox Judy TK Coil, 100 mm"],["Zárás","Kormányról zárható"],["Súly","13,8 kg"]] },
      { cs:"Hajtás", t:[["Váltó","SRAM SX Eagle, 12 sebesség"],["Hajtómű","SRAM SX Eagle Powerspline, 32T"],["Kazetta","SRAM PG-1210 Eagle, 11–50T"],["Lánc","SRAM SX Eagle"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano BR-MT200 hidraulikus tárcsa"],["Tárcsák","180 / 160 mm"],["Felni","29″ Cube ZX20"],["Gumi","Schwalbe Smart Sam 2,25"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Cube Rise Trail Bar, 680 mm"],["Nyereg","Natural Fit Venec"],["Kerékméret","29″"],["Fényezés","Flash lime, fekete részletekkel"]] }
    ] },
  { id:"focus-jam-c-sl", mappa:"FocusJamCSL", kepDb:15, marka:"Focus", model:"Focus Jam C SL", magassag:[178,188], felveve:"2026-10-10",
    kategoria:"Trail · Fully · Karbon", szegmens:"trail", allapot:"Kiváló", ev:2017, meret:"L", kerekmeret:"27,5″", suly:"kb. 12 kg", ar:550000,
    vaz:"Jam C teljes karbon, F.O.L.D. felfüggesztés · kb. 12 kg", villa:"RockShox Pike RCT3, 140 mm",
    hajtas:"SRAM X01 Eagle 1×12", fek:"SRAM Guide Ultimate négydugattyús, 180/180",
    kerek:"27,5″ DT Swiss XM 1501 Spline One · Continental Mountain King 2,4",
    spec:"27,5″ teljes karbon trail fully · RockShox Pike RCT3 és Monarch RT, 140 mm · SRAM X01 Eagle, Guide Ultimate.",
    leiras:"A Jam család csúcsmodellje, amivel a Focus 2017-ben új korszakot nyitott: a Design & Innovation Award a kategória akkori új mércéjeként írta le. A teljes karbon vázban a hátsó háromszög is egyetlen darabból készült, a szabadalmaztatott F.O.L.D. felfüggesztés pedig a hátsó rugózás mozgó elemeit a vázba rejti, ettől alacsony a súlypont és érzékenyebb a rugózás. A jellegzetes, kobrafejszerűen kiszélesedő felsőcső nem csak látvány, a kormányzás pontosságát szolgálja. Elöl Pike RCT3, a Pike legtöbbet tudó csillapításával, hátul Monarch RT, a fék körben négydugattyús Guide Ultimate, a hajtás X01 Eagle, a kerék svájci DT Swiss, a nyereg olasz fi'zi:k, az egész nagyjából tizenkét kiló. Annak való, aki régóta egy igazi csúcsmodellre vágyik, amelynek a története, a technológiája és a felszereltsége is ugyanazon a szinten van. A 6 999 eurós gyári ár helyett most 550 ezer forintért. Rendkívül keveset futott, megvigyázott, eredeti példány, egyetlen tudatos fejlesztéssel: a hidraulikus RockShox Reverb helyett mechanikus dropper került rá, a hosszú távú megbízhatóság érdekében.",
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
    reszletek:[
      { cs:"Váz & villa", t:[["Váz","Bergamont Grandurance, 700c alumínium"],["Villa","Grandurance alumínium"],["Gumihely","37 mm-ig"],["Felszerelhetőség","Sárvédő-fülek"],["Súly","10,4 kg"]] },
      { cs:"Hajtás", t:[["Hátsó váltó","Shimano Sora RD-R3000, 9 sebesség"],["Első váltó","Shimano Sora FD-R3000, 2 sebesség"],["Hajtómű","Shimano Sora FC-R3000, 50/34T"],["Kazetta","Shimano CS-HG201-9, 11–34T"],["Lánc","KMC X9"]] },
      { cs:"Fék & kerék", t:[["Fék","Shimano BR-R317 tárcsafék"],["Tárcsák","160 / 160 mm"],["Felni","28″ BGM Allroad"],["Gumi","Continental Grand Sport Race"]] },
      { cs:"Vezérlés & komfort", t:[["Kormány","Syncros Creston 2.0, kifelé hajló"],["Nyereg","Syncros FL2.5"],["Kerékméret","28″"]] }
    ] },
  { id:"cube-acid-2", mappa:"CubeAcid2", marka:"Cube", model:"Cube Acid", magassag:[182,196], felveve:"2026-10-05", eladva:"2026-11-02",
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
  { id:"cube-reaction-tm", mappa:"CubeReactionTM", marka:"Cube", model:"Cube Reaction TM", magassag:[176,188], felveve:"2026-09-18", eladva:"2026-11-06",
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
    kategoria:"Fitness · Hybrid", szegmens:"fitness", allapot:"Kiváló", ev:2021, meret:"L", kerekmeret:"28″", suly:"kb. 13 kg", ar:200000, regiAr:230000,
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
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Kiváló", ev:2023, meret:"XL (53 cm)", kerekmeret:"29″", suly:"12,9 kg", ar:360000, regiAr:410000,
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
    kategoria:"XC · Hardtail", szegmens:"xc", allapot:"Újszerű", ev:2017, meret:"M (18″)", kerekmeret:"27,5″", suly:"12,7 kg", ar:290000, regiAr:320000,
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
    ] },


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
