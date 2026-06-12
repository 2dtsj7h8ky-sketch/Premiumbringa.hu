# Premium Bringa — weboldal

Statikus, többoldalas weboldal a Premium Bringa (Debrecen) prémium használt
kerékpár kereskedés számára. Külső build-eszköz nélkül, közös CSS/JS assetekkel.

## Oldalak

| Fájl | Tartalom |
|------|----------|
| `index.html` | Főoldal — hero + kiemelt darab, trust-sáv, felkészítés, készlet-előnézet, értékek, sztori |
| `keszlet.html` | Teljes készlet — szűrés szegmens + állapot szerint, rendezés |
| `bringa.html` | Termék-részletoldal (`?id=…` alapján adatból renderel) |
| `felkeszites.html` | Felkészítési folyamat + garancia + GYIK |
| `rolunk.html` | Történet, márkák, értékek |
| `kapcsolat.html` | Térkép-jelölő, nyitvatartás, telefon + másolható e-mail |

## Megosztott assetek

- `assets/styles.css` — teljes arculat (egy helyen)
- `assets/data.js` — `KESZLET` tömb (a készlet egyetlen forrása) + szegmensek
- `assets/app.js` — navigáció, szűrők, render, kiemelt darab, GYIK, e-mail másolás

Új kerékpár felvétele vagy ár/állapot módosítása **csak az `assets/data.js`-ben**
történik — minden oldal automatikusan frissül. Fotóhoz a `kep` mezőt kell kitölteni.

## Arculat

- Betűk: Archivo (display), Hanken Grotesk (folyószöveg), IBM Plex Mono (címkék) — Google Fonts
- Színek: karbon-fekete felület, törtfehér szöveg, réz akcentus, világos „showroom" szekciók

## Megnyitás / futtatás

Nyisd meg az `index.html`-t böngészőben, vagy indíts egy egyszerű szervert:

```bash
python3 -m http.server 4599
# majd: http://localhost:4599
```
