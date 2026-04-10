# Cloud Finder – Technischer Report & Entwicklungsleitfaden

> **Status:** Veröffentlicht im Chrome Web Store | **Version:** 1.0 | **Autor:** Sascha Riemenschneider | **Datum:** 2026-04-10

---

## 1. Projektübersicht

**Cloud Finder** ist eine schlanke Chrome-Extension (Manifest V3), die Nutzern per Klick auf das Browser-Icon sofortigen Zugriff auf die 10 wichtigsten Cloud-Storage-Anbieter bietet. Jeder Eintrag öffnet die Zielseite in einem neuen Tab.

| Eigenschaft | Wert |
|-------------|------|
| **Zweck** | Schnellzugriff auf Top-10-Cloud-Dienste |
| **Status** | Veröffentlicht & angenommen (Chrome Web Store) |
| **Lizenz** | MIT |
| **Zielplattform** | Chrome (Manifest V3) |
| **Produktionsabhängigkeiten** | 0 (vollständig statisch) |
| **Gesamte Quellzeilen** | ~250 (JS + HTML + CSS) |

### Unterstützte Anbieter
Google Drive, OneDrive, iCloud, Dropbox, Box, MEGA, Amazon S3, MediaFire, pCloud, Sync.com

### Datenstrom (vereinfacht)
```
manifest.json
  └─► popup.html (170×350px Popup)
        ├─► src/styles/design_variables.css  (Design Tokens)
        ├─► src/styles/style.css             (Komponenten-Styling)
        └─► src/popup.js                     (Logik + DOM-Rendering)
              └─► DOMContentLoaded → renderCloudList()
                    └─► 10× <a class="cloud-item"> → #cloud-list
```

---

## 2. Tech Stack

| Schicht | Technologie | Version | Notiz |
|---------|-------------|---------|-------|
| **Erweiterungsstandard** | Chrome Manifest V3 | – | Sicher, modern |
| **Sprache** | Vanilla JavaScript (ES Modules) | ES2020+ | Kein Framework |
| **Markup** | HTML5 | – | `popup.html` |
| **Styling** | CSS3 mit Custom Properties | – | Glassmorphism, Dark Mode |
| **Tests** | Jest + jest-environment-jsdom | 30.2.0 | Unit-Tests |
| **JS-Linting** | ESLint (Flat Config) | 9.36.0 | + `eslint-plugin-jest` 29.0.1 |
| **CSS-Linting** | Stylelint | 16.24.0 | + `stylelint-config-standard` 38.0.0 |
| **CSS-Framework** | Tailwind CSS (konfiguriert) | – | Minimal genutzt; Design Tokens bevorzugt |
| **Paketmanager** | npm | – | `package-lock.json` vorhanden |

---

## 3. Architektur & Ordnerstruktur

```
cloud_finder_extension/
├── manifest.json                    # Chrome Extension Config (Manifest V3), 19 Zeilen
├── popup.html                       # Haupt-UI, 170×350px Popup, 50 Zeilen
├── src/
│   ├── popup.js                     # Gesamte Logik: Daten + DOM-Rendering, 56 Zeilen
│   └── styles/
│       ├── design_variables.css     # CSS Custom Properties (Tokens), 55 Zeilen
│       └── style.css                # Komponenten-Styles, 49 Zeilen
├── icons/                           # Extension-Icons (16/48/128px) + 10 Anbieter-Logos (30×30px)
│   ├── icon16.png, icon48.png, icon128.png
│   ├── google-drive.png ... sync.png
│   └── Screenshot.png               # Hintergrundbild im Popup
├── tests/
│   └── popup.test.js                # Jest Unit-Tests, 35 Zeilen
├── docs/
│   ├── FEATURES.md                  # Geplante Features (DE)
│   ├── PERFORMANCE.md               # Performance-Optimierungsguide
│   ├── PUBLISHING.md                # Schritt-für-Schritt Store-Guide
│   └── TESTING.md                   # Manuelles Testprotokoll
├── README.md                        # Projektdokumentation (232 Zeilen)
├── PRIVACY_POLICY.md                # DSGVO-konforme Datenschutzerklärung
├── dependency-audit-2025-09-29.md   # npm-Abhängigkeitsaudit
├── eslint.config.js                 # ESLint Flat Config, 52 Zeilen
├── jest.config.cjs                  # Jest-Konfiguration, 6 Zeilen
├── .stylelintrc.cjs                 # Stylelint-Konfiguration, 11 Zeilen
├── tailwind.config.js               # Tailwind (nur popup.html als content), 7 Zeilen
├── package.json                     # Projektmeta + npm-Scripts
└── cloud_finder_extension.zip       # Fertige Installations-ZIP (149KB)
```

**Architekturmuster:** Monolithisch-statisch – kein Build-Step, kein Bundler, keine Laufzeit-Abhängigkeiten. Die Extension wird direkt aus dem Repository-Root geladen.

---

## 4. Features & Funktionalität

### Implementierte Features

| Feature | Datei | Zeilen | Beschreibung |
|---------|-------|--------|--------------|
| **Cloud-Liste rendern** | `src/popup.js` | 21–44 | `renderCloudList()` erstellt dynamisch 10 `<a>`-Elemente mit Icon + Label |
| **Anbieter-Daten** | `src/popup.js` | 1–16 | `const clouds` – Array mit `{name, url, icon}` für alle 10 Dienste |
| **Link-Öffnung** | `src/popup.js` | 27–29 | `target="_blank"` + `rel="noopener"` – sicheres Öffnen in neuem Tab |
| **Glassmorphism-UI** | `src/styles/style.css` | 1–20 | Frosted-Glass-Effekt via Gradient + Transparenz |
| **Dark/Light Mode** | `src/styles/design_variables.css` | 46–54 | `prefers-color-scheme: light` Media Query |
| **Design Tokens** | `src/styles/design_variables.css` | 1–45 | CSS Custom Properties für Farben, Abstände, Typografie |
| **Hover-Effekt** | `src/styles/style.css` | 29–31 | Hintergrundfarbe auf `#e51061` bei `:hover` |
| **Hintergrundbild** | `popup.html` | 43 | `<img id="screenshot">` als absolut positionierter Hintergrund |

### Nutzer-Workflow
1. Nutzer klickt auf das Cloud-Finder-Icon in der Chrome-Toolbar
2. Popup (170×350px) öffnet sich mit Hintergrundbild + transparenter Liste
3. Nutzer sieht 10 Cloud-Anbieter mit Logo und Name
4. Klick auf einen Eintrag → Anbieter-Website öffnet sich in neuem Tab
5. Popup schließt sich automatisch (Chrome-Standardverhalten)

---

## 5. UI/UX-Beschreibung

### Layout
- **Popup-Größe:** 170×350px (fest, `overflow: hidden`)
- **Hintergrund:** `icons/Screenshot.png` – absolut positioniert, deckt das gesamte Popup ab
- **Inhalt:** `#content` – transparenter Container mit `border-radius: 12–16px`, `z-index: 1`
- **Liste:** `#cloud-list` – vertikale Flex-Spalte mit 10 Einträgen

### Komponenten
- **`.cloud-item`** – Flex-Row: `<img>` (30×30px) + `<span>` (Anbietername)
- **Font:** Roboto (über CSS-Variable `--font-family-body`)
- **Icon-Größe:** 30×30px (alle Logos einheitlich)
- **Schriftgröße:** 0.8rem (kompakt für Popup-Größe)

### Design-Sprache
| Token | Wert | Verwendung |
|-------|------|------------|
| `--color-primary` | `#ff6432` | Orange – Akzentfarbe |
| `--color-secondary` | `#4B0082` | Dunkelviolett |
| `--color-background` | `#0B0121` | Sehr dunkles Lila (Dark Mode) |
| `--color-text` | `#d6cab6` | Beige/Tan |
| Hover-Farbe | `#e51061` | Hot Pink (hardcoded, kein Token!) |

### Visuelle Effekte
- **Glassmorphism:** `background: linear-gradient(135deg, rgba(255,255,255,0.30), rgba(255,255,255,0.15))`
- **Box Shadow:** `0 4px 20px rgba(0,0,0,0.1)` + `0 0 0 1px rgba(255,255,255,0.40)`
- **Hover-Transition:** `transition: background-color 0.2s ease`

---

## 6. Sicherheit & Abhängigkeiten

### Sicherheitsanalyse

| Punkt | Status | Details |
|-------|--------|---------|
| **API-Schlüssel / Secrets** | ✅ Keine | Vollständig statisch |
| **Externe Anfragen** | ✅ Keine | Kein fetch/XHR |
| **`rel="noopener"`** | ✅ Gesetzt | `popup.js:29` – verhindert `window.opener`-Zugriff |
| **Manifest-Berechtigungen** | ✅ Minimal | Keine expliziten Permissions deklariert |
| **Datenverfolgung** | ✅ Keine | DSGVO-konform, keine Analytics |
| **Hardcoded Hover-Farbe** | ⚠️ Minor | `style.css:33` – `#e51061` sollte CSS-Variable werden |
| **Tailwind konfiguriert, kaum genutzt** | ⚠️ Minor | `tailwind.config.js` existiert, aber Build-Step fehlt |
| **XSS-Risiko** | ✅ Kein Risiko | `textContent` statt `innerHTML` für Benutzerdaten |
| **`innerHTML = ''`** | ✅ Sicher | Nur zum Leeren des Containers (`popup.js:24`) |

### Abhängigkeiten (Stand: 2025-09-29)

| Paket | Version | Typ | Sicherheit |
|-------|---------|-----|------------|
| `eslint` | 9.36.0 | dev | ✅ Aktuell |
| `eslint-plugin-jest` | 29.0.1 | dev | ✅ Aktuell |
| `jest` | 30.2.0 | dev | ✅ Aktuell |
| `jest-environment-jsdom` | 30.2.0 | dev | ✅ Aktuell |
| `stylelint` | 16.24.0 | dev | ✅ Aktuell |
| `stylelint-config-standard` | 38.0.0 | dev | ✅ Aktuell |

**Produktionsabhängigkeiten:** 0  
**Bekannte Schwachstellen:** 0 (frühere GHSA-xffm-g5w8-qvg7 in `@eslint/plugin-kit` durch ESLint-Update behoben)

---

## 7. Testing-Status

### Automatisierte Tests

**Datei:** `tests/popup.test.js` (35 Zeilen)  
**Runner:** Jest 30.2.0 + jsdom  
**Ausführung:** `npm test`

| Test | Status | Beschreibung |
|------|--------|--------------|
| `should create a list of 10 cloud providers` | ✅ Bestanden | Prüft `#cloud-list.children.length === 10` |
| `each cloud provider should have a link and an icon` | ✅ Bestanden | Prüft `href`, `img.src` für alle 10 Einträge |

### Linting

| Prüfung | Befehl | Status |
|---------|--------|--------|
| JS-Linting | `npm run lint:js` | ✅ Keine Fehler |
| CSS-Linting | `npm run lint:css` | ✅ Keine Fehler |

### Fehlende Tests

| Bereich | Fehlender Test | Priorität |
|---------|---------------|-----------|
| Link-Attribute | `target="_blank"` und `rel="noopener"` verifizieren | Hoch |
| DOM-Bereinigung | Mehrfachaufruf von `renderCloudList()` ohne Duplikate | Mittel |
| Fehlerfall | Verhalten wenn `#cloud-list` nicht im DOM existiert | Mittel |
| URL-Validierung | Alle 10 URLs auf HTTPS-Präfix prüfen | Niedrig |

### Manuelle Tests
Protokoll verfügbar in `docs/TESTING.md` – Checkliste für UI, Funktionalität und Performance.

---

## Development Roadmap

### Phase 1 – Kritische Korrekturen & Stabilisierung
> Sollte vor weiterer Entwicklung abgeschlossen sein

- [ ] **Hover-Farbe als CSS-Variable** – `style.css:33` `#e51061` durch `--color-hover` in `design_variables.css` ersetzen
- [ ] **Fehlende Tests ergänzen** – `target="_blank"` und `rel="noopener"` in `popup.test.js` testen
- [ ] **`icons-not/`-Ordner aufräumen** – Ungenutzte Icons entfernen oder dokumentieren warum sie behalten werden
- [ ] **Tailwind entscheiden** – Entweder Build-Step einrichten (PostCSS) oder `tailwind.config.js` + Abhängigkeit entfernen
- [ ] **`manifest.json` Version synchronisieren** – `manifest.json` zeigt `"version": "1.0"`, `package.json` zeigt `"version": "1.0.0"` – angleichen

### Phase 2 – Verbesserungen der Codequalität
> Architektur, Performance, Wartbarkeit

- [ ] **Anbieterdaten auslagern** – `clouds`-Array aus `popup.js` in eigene Datei `src/data/providers.js` extrahieren (bessere Testbarkeit)
- [ ] **CSS-Inlining entfernen** – Inline-`<style>` aus `popup.html:12-38` in `style.css` verschieben
- [ ] **`renderCloudList()` splitten** – Hilfsfunktion `createCloudItem(provider)` extrahieren (eine Verantwortlichkeit pro Funktion)
- [ ] **Double-Init-Guard prüfen** – `popup.js:49-52` (doppelter Init-Check für `readyState === 'complete'`) auf Notwendigkeit prüfen und ggf. vereinfachen
- [ ] **Alle URL-Ziele prüfen** – Jede Anbieter-URL auf Aktualität und korrekte Domain verifizieren (besonders `https://aws.amazon.com/s3`)
- [ ] **`npm audit`** – Audit aktualisieren (letzter Stand: 2025-09-29, jetzt 2026-04-10)

### Phase 3 – Feature-Erweiterungen
> Geplante Verbesserungen und neue Funktionen

- [ ] **Anpassbare Anbieterliste** – Nutzer kann Anbieter per Drag-and-Drop sortieren und deaktivieren (via `chrome.storage.sync`)
- [ ] **Weitere Anbieter hinzufügen** – z.B. Nextcloud, Internxt, Filen.io als optionale Einträge
- [ ] **Suchfilter** – Kleines Textfeld oben im Popup zum Filtern der Anbieterliste
- [ ] **Dark/Light-Mode-Toggle** – Manueller Schalter zusätzlich zur System-Media-Query
- [ ] **Keyboard-Navigation** – Pfeiltasten + Enter zum Navigieren/Öffnen der Links (Accessibility)
- [ ] **`aria-label` ergänzen** – Alle Links und Icons mit `aria-label` versehen (`popup.js:22-34`)

### Phase 4 – Zukünftige Features & Vision
> Langfristige Ideen und optionale Upgrades (aus `docs/FEATURES.md`)

- [ ] **Speicherplatz-Anzeige** – OAuth-Integration zum Anzeigen von genutztem/freiem Speicher pro Dienst
- [ ] **Kontext-Highlighting** – Aktiven Cloud-Dienst (aktuell offene Tab-Domain) hervorheben
- [ ] **Datei-Schnellsuche** – Dienstübergreifende Dateisuche über deren APIs
- [ ] **Animations-Themes** – Auswählbare Popup-Animationen und Farbthemen
- [ ] **Firefox-Port** – Extension für Firefox (WebExtensions API, weitgehend kompatibel)
- [ ] **i18n** – Mehrsprachigkeit via `_locales/`-Ordner (Chrome Extensions i18n API)
- [ ] **Chrome Web Store Screenshots** – Professionelle Store-Grafiken (Promotional Images 440×280px) erstellen

---

## Notes & Offene Fragen

1. **Tailwind vs. reines CSS** – Tailwind ist konfiguriert (`tailwind.config.js`), aber kein Build-Step vorhanden. Die bestehenden Design Tokens in `design_variables.css` arbeiten direkt. Entscheidung notwendig: Build-Pipeline einführen oder Tailwind komplett entfernen?

2. **`icons-not/`-Ordner** – Enthält anscheinend verworfene Icons. Müssen diese für ein Rollback aufgehoben werden oder können sie gelöscht werden?

3. **Amazon S3 als Nutzer-Link** – `https://aws.amazon.com/s3` ist die Marketing-Seite, nicht die S3-Konsole (`https://s3.console.aws.amazon.com`). Welche URL ist für Endnutzer sinnvoller?

4. **Store-Version vs. npm-Version** – Nach dem nächsten Feature-Update: Strategie für Versions-Synchronisierung zwischen `manifest.json` und `package.json` festlegen.

5. **`public/`-Ordner** – Enthält SVG-Icons als Referenz. Werden diese aktiv verwendet oder sind es Entwurfs-Artefakte?
