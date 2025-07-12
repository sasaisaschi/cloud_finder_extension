# Copilot Instructions – Projektvorlage

## Projekt: Cloud Finder Extension

## Zielsetzung
Erstelle eine Erstelle eine schlanke Chrome-Extension, die beim Klick die Top-10-Cloud-Anbieter mit Logo und Link in einem Popup anzeigt..

---

## Technischer Stack (Vorgabe für Copilot)
Bitte verwende folgende Technologien für die Implementierung:
- **Frontend:** Vanilla JavaScript, HTML5, CSS3
- **Backend:** 
- **Datenbank:** 
- **Hosting:** 
- **Weitere Tools:** Chrome Extension: Manifest V3
Icons/Assets: PNG 32×32 im Ordner icons/
ESLint
Stylelint
Tailwind CSS

---

### Künstliche Intelligenz (AI)
- **KI-Feature:** 
- **AI-Modell:** 
- **API Basis-URL:** 

---

## Kernmerkmale (MVP)

### Feature 1: Popup öffnen: Klick auf Extension-Icon öffnet Popup (popup.html).
Popup öffnen: Klick auf Extension-Icon öffnet Popup (popup.html).

### Feature 2: Cloud-Liste: Anzeige von const clouds in scrollbarem Div.
Cloud-Liste: Anzeige von const clouds in scrollbarem Div.
// Liste der Top-10-Clouds mit URL und Icon
const clouds = [
  { name: "Google Drive", url: "https://drive.google.com",      icon: "icons/google-drive.png" },
  { name: "OneDrive",     url: "https://onedrive.live.com",      icon: "icons/onedrive.png"     },
  { name: "iCloud",       url: "https://www.icloud.com",         icon: "icons/icloud.png"       },
  { name: "Dropbox",      url: "https://www.dropbox.com",        icon: "icons/dropbox.png"      },
  { name: "Box",          url: "https://www.box.com",            icon: "icons/box.png"          },
  { name: "MEGA",         url: "https://mega.nz",                icon: "icons/mega.png"         },
  { name: "Amazon S3",    url: "https://aws.amazon.com/s3",      icon: "icons/aws-s3.png"       },
  { name: "MediaFire",    url: "https://www.mediafire.com",      icon: "icons/mediafire.png"    },
  { name: "pCloud",       url: "https://www.pcloud.com",         icon: "icons/pcloud.png"       },
  { name: "Sync.com",     url: "https://www.sync.com",           icon: "icons/sync.png"         }
];


### Feature 3: Logo + Name: Jedes Item zeigt 32×32-Icon links, Text rechts.
Logo + Name: Jedes Item zeigt 32×32-Icon links, Text rechts.

### Feature 4: Klick-Event: Klick auf Item öffnet Ziel-URL in neuem Tab.
Klick-Event: Klick auf Item öffnet Ziel-URL in neuem Tab.

### Feature 5: Responsive: Popup passt sich bis 300 px Breite an.
Responsive: Popup passt sich bis 300 px Breite an.

### Feature 6: Minimales CSS: Einfache Flexbox-Anordnung, Abstand 5 px.
Minimales CSS: Einfache Flexbox-Anordnung, Abstand 5 px.

### Feature 7: Performance: Keine externen Abhängigkeiten, alle Assets lokal.
Performance: Keine externen Abhängigkeiten, alle Assets lokal.

### Feature 8: Manifest-Konfiguration: Rechte nur für activeTab.
Manifest-Konfiguration: Rechte nur für activeTab.

### Feature 9: Entwicklermodus-Ready: Einfaches Laden via chrome://extensions.
Entwicklermodus-Ready: Einfaches Laden via chrome://extensions.

### Feature 10: Erweiterbar: Leichter Austausch/Add von Cloud-Objekten in popup.js.
Erweiterbar: Leichter Austausch/Add von Cloud-Objekten in popup.js.

---

## Design-Assets
* **Favicon:** Im `public/` Ordner befindet sich eine `favicon.ico`-Datei. Diese ist bereits in der generierten `index.html` verlinkt.
* **Design-Variablen:** Die Datei `src/styles/design_variables.css` enthält alle globalen CSS-Variablen für Farben, Schriftarten und Schatten, die in der `index.html` verlinkt ist. Nutze diese Variablen für das Styling der Komponenten.

---

## Implementierungsanweisungen für GitHub Copilot

**WICHTIGE ANWEISUNG:** Erstelle **KEINE** Standard-Projektstrukturen mittels `npx create-react-app`, `vue create`, `nest new` oder ähnlichen Befehlen. **Lege die Ordner und Initialdateien für den Frontend- (Vanilla JavaScript, HTML5, CSS3), Backend- () und (falls zutreffend) `Weitere Tools/Bibliotheken`- (Chrome Extension: Manifest V3
Icons/Assets: PNG 32×32 im Ordner icons/
ESLint
Stylelint
Tailwind CSS) Teil des Projekts manuell an.**

1.  **Projektstruktur und Initialisierung:**
    * Erstelle das Basisverzeichnis für das Projekt.
    * Lege die notwendigen Dateien und Verzeichnisse für das gewählte Frontend-Framework (z.B. `src/components`, `src/pages` etc.) und das Backend (z.B. `src/controllers`, `src/routes` etc.) **manuell** an.
    * Sorge dafür, dass `src/styles/design_variables.css` (die du aus den Design-Assets verwenden sollst) korrekt in die Haupt-HTML-Datei oder die Haupt-App-Komponente des Frontends eingebunden ist, sodass die Design-Variablen global verfügbar sind.

2.  **Basiskomponenten/-logik:** Implementiere die erforderlichen Komponenten oder Skripte, um die im Abschnitt "Kernmerkmale (MVP)" beschriebenen Features umzusetzen.

    * **Feature 1:** Popup öffnen: Klick auf Extension-Icon öffnet Popup (popup.html).
    * **Feature 2:** Cloud-Liste: Anzeige von const clouds in scrollbarem Div.
// Liste der Top-10-Clouds mit URL und Icon
const clouds = [
  { name: "Google Drive", url: "https://drive.google.com",      icon: "icons/google-drive.png" },
  { name: "OneDrive",     url: "https://onedrive.live.com",      icon: "icons/onedrive.png"     },
  { name: "iCloud",       url: "https://www.icloud.com",         icon: "icons/icloud.png"       },
  { name: "Dropbox",      url: "https://www.dropbox.com",        icon: "icons/dropbox.png"      },
  { name: "Box",          url: "https://www.box.com",            icon: "icons/box.png"          },
  { name: "MEGA",         url: "https://mega.nz",                icon: "icons/mega.png"         },
  { name: "Amazon S3",    url: "https://aws.amazon.com/s3",      icon: "icons/aws-s3.png"       },
  { name: "MediaFire",    url: "https://www.mediafire.com",      icon: "icons/mediafire.png"    },
  { name: "pCloud",       url: "https://www.pcloud.com",         icon: "icons/pcloud.png"       },
  { name: "Sync.com",     url: "https://www.sync.com",           icon: "icons/sync.png"         }
];

    * **Feature 3:** Logo + Name: Jedes Item zeigt 32×32-Icon links, Text rechts.
    * **Feature 4:** Klick-Event: Klick auf Item öffnet Ziel-URL in neuem Tab.
    * **Feature 5:** Responsive: Popup passt sich bis 300 px Breite an.
    * **Feature 6:** Minimales CSS: Einfache Flexbox-Anordnung, Abstand 5 px.
    * **Feature 7:** Performance: Keine externen Abhängigkeiten, alle Assets lokal.
    * **Feature 8:** Manifest-Konfiguration: Rechte nur für activeTab.
    * **Feature 9:** Entwicklermodus-Ready: Einfaches Laden via chrome://extensions.
    * **Feature 10:** Erweiterbar: Leichter Austausch/Add von Cloud-Objekten in popup.js.
3.  **Styling:** Wende das Design aus `src/styles/design_variables.css` konsistent auf alle UI-Elemente an.
4.  **Interaktivität & Datenhaltung:** Implementiere die Logik für Benutzerinteraktionen und die Speicherung/Verwaltung der Daten, wie in den Feature-Beschreibungen festgelegt.

6.  **Tests:** Erstelle geeignete Unit- und/oder Integrationstests für die implementierten Funktionen.
7.  **Optimierung:** Stelle sicher, dass der Code sauber, performant und wartbar ist.

---

## Nächste Schritte für den Entwickler

1.  Öffne dieses Projektverzeichnis in deiner IDE (z.B. WebStorm).
2.  Interagiere mit GitHub Copilot in den relevanten Code-Dateien, um die Implementierungsanweisungen umzusetzen.
3.  Führe die Tests aus und validiere die Funktionalität.
4.  Baue das Projekt und starte es lokal, um die Entwicklung zu überprüfen.
