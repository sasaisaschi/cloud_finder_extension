# Cloud Finder Chrome Extension

## Kurzbeschreibung

Cloud Finder ist eine einfache und benutzerfreundliche Chrome-Erweiterung, die Ihnen schnellen Zugriff auf die Top 10 der beliebtesten Cloud-Speicheranbieter bietet. Mit nur einem Klick auf das Extension-Icon in Ihrer Browser-Toolbar erhalten Sie eine übersichtliche Liste mit den Logos und direkten Links zu den jeweiligen Diensten.

Diese Erweiterung ist ideal für alle, die regelmäßig mit mehreren Cloud-Diensten arbeiten und eine schnelle Möglichkeit suchen, zwischen ihnen zu wechseln, ohne Lesezeichen verwalten oder URLs manuell eingeben zu müssen.

## Was ist eine Chrome Extension?

Eine Chrome-Erweiterung (oder Chrome Extension) ist ein kleines Programm, das Sie zu Ihrem Google Chrome-Browser hinzufügen können, um dessen Funktionalität zu erweitern und Ihr Surferlebnis anzupassen. Stellen Sie es sich wie eine App für Ihren Browser vor.

Erweiterungen können eine Vielzahl von Aufgaben erfüllen, wie zum Beispiel:

- **Produktivität steigern:** Passwort-Manager, To-Do-Listen, Notiz-Apps.
- **Informationen anzeigen:** Wettervorhersagen, Nachrichten-Ticker, eben wie dieser Cloud Finder.
- **Webseiten anpassen:** Werbeblocker, Dark-Mode-Enabler, Schriftarten-Änderer.
- **Entwickler-Tools:** Code-Inspektoren, Design-Hilfsmittel, Performance-Analysatoren.

Sie werden mit den gleichen Web-Technologien wie Webseiten erstellt (HTML, CSS, JavaScript) und können mit den Webseiten, die Sie besuchen, interagieren, um zusätzliche Funktionen bereitzustellen.

### Wie benutzt man eine Chrome Extension?

1.  **Finden und Installieren:**
    *   Der primäre Ort, um Erweiterungen zu finden, ist der [Chrome Web Store](https://chrome.google.com/webstore/category/extensions).
    *   Suchen Sie nach dem Namen der Erweiterung oder stöbern Sie durch die Kategorien.
    *   Klicken Sie auf der Detailseite der Erweiterung auf den Button "Hinzufügen" oder "Zu Chrome hinzufügen".
    *   Ein Pop-up wird Sie um bestimmte Berechtigungen bitten (z. B. Zugriff auf Ihre Tabs). Lesen Sie diese und klicken Sie auf "Erweiterung hinzufügen", wenn Sie einverstanden sind.

2.  **Verwalten und Anpinnen:**
    *   Nach der Installation erscheint das Icon der Erweiterung normalerweise in der Toolbar oben rechts neben der Adressleiste.
    *   Wenn Sie viele Erweiterungen haben, werden einige möglicherweise in einem Puzzle-Icon (🧩) zusammengefasst. Klicken Sie darauf, um alle Ihre Erweiterungen zu sehen.
    *   Neben jeder Erweiterung in der Liste finden Sie ein Pin-Icon (📌). Klicken Sie darauf, um die Erweiterung dauerhaft in der Toolbar sichtbar zu machen.

3.  **Benutzen:**
    *   Klicken Sie einfach auf das Icon der Erweiterung in der Toolbar, um sie zu aktivieren.
    *   Je nach Funktion öffnet sich ein kleines Pop-up-Fenster (wie bei Cloud Finder), es wird eine neue Seite geöffnet oder die aktuelle Webseite wird modifiziert.

## Ordnerstruktur

Das Projekt ist wie folgt aufgebaut:

```
.
├── icons/                # Alle Icons für die Extension und die Cloud-Anbieter
├── src/                  # Der Quellcode der Extension
│   ├── popup.js          # Die Logik für das Pop-up-Fenster
│   └── styles/           # CSS-Dateien für das Styling
│       ├── design_variables.css
│       └── style.css
├── tests/                # Testdateien
│   └── popup.test.js
├── .gitignore            # Ignoriert Dateien für Git
├── manifest.json         # Die Konfigurationsdatei der Chrome Extension
├── package.json          # Definiert Projekt-Metadaten und Abhängigkeiten
├── popup.html            # Die HTML-Struktur des Pop-up-Fensters
└── README.md             # Diese Datei
```

## Installation der Entwicklungsumgebung

Um an dieser Extension zu arbeiten, benötigen Sie [Node.js](https://nodejs.org/) und [npm](https://www.npmjs.com/) (wird mit Node.js installiert).

1.  **Klonen Sie das Repository:**
    ```bash
    git clone https://github.com/sasaisaschi/cloud_finder_extension.git
    cd cloud_finder_extension
    ```

2.  **Installieren Sie die Abhängigkeiten:**
    ```bash
    npm install
    ```

## Lokales Testen der Extension in Chrome

1.  Öffnen Sie Google Chrome.
2.  Gehen Sie zur URL `chrome://extensions`.
3.  Aktivieren Sie den **Entwicklermodus** (Schalter oben rechts).
4.  Klicken Sie auf den Button **"Entpackte Erweiterung laden"**.
5.  Wählen Sie den gesamten Projektordner (`cloud_finder_extension`) aus.
6.  Die "Cloud Finder"-Erweiterung sollte nun in Ihrer Liste der Erweiterungen erscheinen. Pinnen Sie sie an Ihre Toolbar, um schnell darauf zugreifen zu können.

## Mitwirkende

Idee und Entwicklung von Sascha Riemenschneider.

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz.
