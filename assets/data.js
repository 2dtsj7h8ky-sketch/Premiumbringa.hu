/* =========================================================================
   Premium Bringa — készletadat (egy helyen, minden oldal ezt használja)

   KÉP: `mappa` = az assets/kepek/ alatti mappa neve. A fotók sorrendben 1..10.
        A borító az 1.jpg (ha még nincs 1.jpg, automatikusan a 2.jpg-re vált).
        Egyedi útvonal/kiterjesztés esetén a `kep` mező felülírja.
   ADAT: a model/ár/specifikáció/állapot/leírás a Marketplace-hirdetésből töltődik.
        Üres mező = a kártyán/termékoldalon kimarad vagy „érdeklődj/hamarosan" jelenik meg.
   kiemelt: a főoldali hero showcase ezt a darabot mutatja (csak az első számít).
   ========================================================================= */
const KESZLET = [
  { id:"cube-reaction-tm-pro", mappa:"CubeReactionTMPro", marka:"Cube", model:"Cube Reaction TM Pro",
    kategoria:"MTB · Hardtail", szegmens:"premium", allapot:"", ev:"", meret:"", ar:null,
    vaz:"", villa:"", hajtas:"", fek:"", kerek:"", spec:"", leiras:"", kiemelt:true },

  { id:"cube-reaction-tm", mappa:"CubeReactionTM3", marka:"Cube", model:"Cube Reaction TM",
    kategoria:"MTB · Hardtail", szegmens:"premium", allapot:"", ev:"", meret:"", ar:null,
    vaz:"", villa:"", hajtas:"", fek:"", kerek:"", spec:"", leiras:"" },

  { id:"cube-cross-sl", mappa:"CubeCrossSL", marka:"Cube", model:"Cube Cross SL",
    kategoria:"Cyclocross · Gravel", szegmens:"gravel", allapot:"", ev:"", meret:"", ar:null,
    vaz:"", villa:"", hajtas:"", fek:"", kerek:"", spec:"", leiras:"" },

  { id:"cube-aim-sl", mappa:"CubeAimSL4", marka:"Cube", model:"Cube Aim SL",
    kategoria:"MTB · Hardtail", szegmens:"belepo", allapot:"", ev:"", meret:"", ar:null,
    vaz:"", villa:"", hajtas:"", fek:"", kerek:"", spec:"", leiras:"" },

  { id:"cube-aim-pro", mappa:"CubeAimPro2", marka:"Cube", model:"Cube Aim Pro",
    kategoria:"MTB · Hardtail", szegmens:"belepo", allapot:"", ev:"", meret:"", ar:null,
    vaz:"", villa:"", hajtas:"", fek:"", kerek:"", spec:"", leiras:"" },

  { id:"cube-attention", mappa:"CubeAttentionHpa2", marka:"Cube", model:"Cube Attention",
    kategoria:"MTB · Hardtail", szegmens:"belepo", allapot:"", ev:"", meret:"", ar:null,
    vaz:"", villa:"", hajtas:"", fek:"", kerek:"", spec:"", leiras:"" },

  { id:"cube-analog", mappa:"CubeAnalogHpa", marka:"Cube", model:"Cube Analog",
    kategoria:"MTB · Hardtail", szegmens:"belepo", allapot:"", ev:"", meret:"", ar:null,
    vaz:"", villa:"", hajtas:"", fek:"", kerek:"", spec:"", leiras:"" },

  { id:"cube-access", mappa:"CubeAccess2", marka:"Cube", model:"Cube Access WS",
    kategoria:"Női · XC", szegmens:"belepo", allapot:"", ev:"", meret:"", ar:null,
    vaz:"", villa:"", hajtas:"", fek:"", kerek:"", spec:"", leiras:"" },

  { id:"ktm-ultra-flite", mappa:"KTMUltraFlite2", marka:"KTM", model:"KTM Ultra Flite",
    kategoria:"MTB · Hardtail", szegmens:"belepo", allapot:"", ev:"", meret:"", ar:null,
    vaz:"", villa:"", hajtas:"", fek:"", kerek:"", spec:"", leiras:"" },

  { id:"trek-roscoe-6", mappa:"TrekRoscoe6.3", marka:"Trek", model:"Trek Roscoe 6",
    kategoria:"Trail · Hardtail", szegmens:"belepo", allapot:"", ev:"", meret:"", ar:null,
    vaz:"", villa:"", hajtas:"", fek:"", kerek:"", spec:"", leiras:"" }
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
