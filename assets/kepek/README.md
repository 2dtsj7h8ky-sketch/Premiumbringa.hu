# Kerékpár-fotók — `assets/kepek/`

Ide kerülnek a készlet fotói. A weboldal **automatikusan** behúzza őket:
minden bringa a saját `id`-ja alapján tölti be a képét.

## Elnevezési szabály

```
assets/kepek/<id>.jpg
```

A fájl neve = a bringa `id`-ja az `assets/data.js`-ben, kiterjesztés `.jpg`.
Ha a fájl létezik, megjelenik a kártyán; ha még nincs, marad a textúrás placeholder.
(Nem kell kódot szerkeszteni — elég a fájlt ide bemásolni.)

### Aktuális id-k (ezekkel a nevekkel keresi a képet)

| id (fájlnév) | modell |
|---|---|
| `cube-reaction-c62.jpg` | Cube Reaction C:62 |
| `cube-aim-sl.jpg` | Cube Aim SL |
| `cube-attention.jpg` | Cube Attention |
| `cube-kathmandu.jpg` | Cube Kathmandu |
| `cube-nuroad.jpg` | Cube Nuroad |
| `cube-access-ws.jpg` | Cube Access WS |
| `trek-marlin-7.jpg` | Trek Marlin 7 |
| `orbea-avant.jpg` | Orbea Avant H40 |
| `specialized-sirrus.jpg` | Specialized Sirrus |

## Más kiterjesztés / egyedi útvonal

Ha nem `.jpg` a kép (pl. `.png`, `.webp`), vagy máshonnan jön (pl. külső URL),
add meg pontosan a `data.js`-ben a `kep` mezőben — az felülírja az automatikus keresést:

```js
{ id:"cube-aim-sl", ..., kep:"assets/kepek/cube-aim-sl.webp" }
{ id:"cube-nuroad", ..., kep:"https://pelda.hu/kepek/nuroad.jpg" }
```

## Ajánlott méret

- Kártyákhoz **4:3** arány (pl. 1200×900 px), a kiemelt darabhoz **16:10**.
- JPG, ~150–300 KB/kép a gyors betöltésért.

## Hogyan frissül a készlet idővel

1. **Új bringa:** vegyél fel egy új objektumot az `assets/data.js` `KESZLET` tömbjébe
   (egyedi `id`-val), és tedd ide a `<id>.jpg` fotót.
2. **Ár/állapot módosítás:** írd át a `data.js` megfelelő mezőjét.
3. **Elkelt gép:** töröld a sort a `data.js`-ből (a fotó maradhat, nem zavar).

Minden oldal (főoldal, készlet, termékoldal, kiemelt darab) automatikusan frissül.
