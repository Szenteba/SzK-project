# Autket (SzK-project)

ZSZC Ganz Ábrahám Technikum — 2026/27 tanév, 13.A projektmunka

**Autket** egy jegyaukciós weboldal. A vevő élő aukciókat böngészhet és szűrhet; az eladó a saját jegyfelületét használja. A szerepkör a bejelentkezett fiók típusától függ.

Csapat: **Szente**, **Csongor** (Csuzma)

## Futtatás

Nyisd meg a `Front End/index.html` fájlt böngészőben. Backend / adatbázis még nincs.

## Struktúra

```
Front End/
  index.html    — fejléc (márka, vevő/eladó, beállítások, belépés), jegylista, szűrők
  style.css     — sötét téma, arany/kék kiemelés
  script.js     — navigációs panelek, belépő űrlap (egyelőre nem küld adatot)
Ideas.txt       — témaválasztás
HTML terv.png   — HTML elrendezési terv
```

Jelenlegi UI: ticket kártyák, kategória / helyszín / max. licit / állapot szűrők, beállítások (nyelv, értesítések, élő licit), bejelentkezés / regisztráció űrlap.

## Munkanapló

### 2026.09.24 — Projekt indítás

- Szente: `Ideas.txt` létrehozva és szerkesztve
- Csongor: `Ideas.txt` szerkesztve
- Téma: **jegyes weboldal** (Csuzma 2. ötlete)

### 2026.09.28 — Frontend alap

- Szente: frontend alap (`html` / `css` / `js`)

### 2026.10.02 — Elrendezés

- Szente, Csongor: HTML terv (`HTML terv.png`)

### 2026.10.05 — Autket felület

- Fejléc: AUTKET márka, vevő / eladó kapcsoló, beállítások, bejelentkezés
- Főnézet: jegylista + szűrőpanel (kategória, helyszín, max. licit, állapot)
- Sötét stílus és alap JS a panelekhez

### 2026.10.08 - Tanulási Folyamatok

- Szente, Csongor: A projekthez szükséges alaptudás megszerzése.
- Az adatbázishoz "teszt projekt" és Demo készítése.
- Egy Demo oldal létrehozása és az adatbázisból való lehívás.

### 2026.10.09 - Tanulási Folyamatok

- Csongor: Node telepítése
- `serever.js`, `package.json` hozzáadva és a node server felállítása.
- Alap test package létrehozva és a demo sikeres.