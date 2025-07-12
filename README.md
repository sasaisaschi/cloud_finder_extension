# Cloud Finder Extension

**Cloud Finder** ist eine schlanke Chrome Extension im Manifest V3, die auf Knopfdruck die Top‑10 Cloud‑Speicher‑Anbieter mit Logo und Link in einem Popup anzeigt.

## 🚀 Features

- **Top‑10 Cloud‑Anbieter**: Google Drive, OneDrive, iCloud, Dropbox, Box, MEGA, Amazon S3, MediaFire, pCloud und Sync.com
- **Logo & Name**: Anzeige jedes Anbieters mit 32×32‑Icon und Namen
- **Direkter Link**: Klick öffnet die Website im neuen Tab
- **Dark & Light Mode**: Automatische Farbmodi via CSS Custom Properties
- **Kein Build‑System nötig**: Pure HTML, Vanilla JS und CSS
- **Leicht erweiterbar**: Einfach `clouds`‑Array in `popup.js` anpassen

## 📁 Projektstruktur

```
cloud_finder_extension/
├── icons/                        # 32×32‑Icons im PNG‑Format
│   ├── google-drive.png
│   ├── onedrive.png
│   └── ...
├── src/
│   ├── styles/
│   │   ├── design_variables.css  # CSS Variablen für Dark/Light Modes
│   │   └── style.css             # Popup‑Styling
│   └── popup.js                  # Logik zum Rendern der Cloud‑Liste
├── popup.html                    # Popup‑Markup inkl. Favicon und CSS
├── manifest.json                 # Extension Manifest V3
├── package.json                  # NPM Konfiguration & Scripts
└── README.md                     # Dieses Dokument
```

## 📦 Installation & Entwicklung

1. Repository klonen:
   ```bash
   git clone https://github.com/sasaisaschi/cloud_finder_extension.git
   cd cloud_finder_extension
   ```
2. Abhängigkeiten installieren (nur für Linter/Tests/Tailwind):
   ```bash
   npm install
   ```
3. CSS generieren (falls Tailwind genutzt wird):
   ```bash
   npm run build:css
   ```
4. Tests ausführen:
   ```bash
   npm test
   ```
5. Linting:
   ```bash
   npm run lint:js
   npm run lint:css
   ```
6. Extension in Chrome laden:
   - `chrome://extensions/` öffnen
   - Entwicklermodus aktivieren
   - „Entpackte Erweiterung laden“ → Projektordner auswählen

## 🛠️ Anpassung

- **Cloud‑Liste**: In `src/popup.js` das Array `clouds` editieren oder erweitern.
- **Favicon**: `popup.html` nutzt `favicon.ico` aus `public/` oder Projektroot.
- **Styling**: Farben und Abstände in `src/styles/design_variables.css` anpassen.

## ❤️ Mitwirken

Beiträge, Bugreports und Feature‑Anfragen sind willkommen. Erstelle einfach ein Issue oder einen Pull Request im GitHub‑Repository.

## 📄 Lizenz

Dieses Projekt steht unter der [MIT License](LICENSE).

