# Kerékpár-fotók — `assets/kepek/`

Minden bringának **egy saját mappája** van itt, benne a fotók **sorrendben számozva**.
A weboldal automatikusan behúzza őket a `data.js`-ben megadott `mappa` mező alapján.

## Szabály

```
assets/kepek/<mappa>/1.jpg   ← BORÍTÓ (az oldalas, logós, teljes bringa)
assets/kepek/<mappa>/2.jpg
...
assets/kepek/<mappa>/10.jpg
```

- A **borító mindig az `1.jpg`** — ez jelenik meg a kártyán és a kiemelt darabon.
- A termékoldalon a galéria **1-től sorrendben** mutatja a képeket; a hiányzó számok kimaradnak.
- Ha még nincs `1.jpg`, a borító átmenetileg a `2.jpg`-re vált, amíg fel nem töltöd.
- A bringák azonos szögből (sablon) készülnek, ezért a megjelenítés a **teljes bringát, levágás nélkül** mutatja (álló 3:4).

## Aktuális mappák → bringák

| mappa | modell (a `data.js`-ben) |
|---|---|
| `CubeReactionTMPro` | Cube Reaction TM Pro |
| `CubeReactionTM3` | Cube Reaction TM |
| `CubeCrossSL` | Cube Cross SL |
| `CubeAimSL4` | Cube Aim SL |
| `CubeAimPro2` | Cube Aim Pro |
| `CubeAttentionHpa2` | Cube Attention |
| `CubeAnalogHpa` | Cube Analog |
| `CubeAccess2` | Cube Access WS |
| `KTMUltraFlite2` | KTM Ultra Flite |
| `TrekRoscoe6.3` | Trek Roscoe 6 |

## Ajánlott

- A `1.jpg` legyen az oldalas, logós, teljes bringa (ez a sablon borítókép).
- JPG, ~150–300 KB/kép a gyors betöltésért.

## Új bringa felvétele

1. Hozz létre egy új mappát ide a fotókkal (`1.jpg` … `N.jpg`).
2. Vegyél fel egy új sort a `assets/data.js` `KESZLET` tömbjébe `mappa:"<mappanév>"`-vel.
3. A többi adatot (ár, állapot, specifikáció, leírás) a Marketplace-hirdetésből töltjük.
