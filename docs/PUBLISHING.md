# Veröffentlichung im Chrome Web Store

Herzlichen Glückwunsch! Deine Chrome-Erweiterung ist fertig und getestet. Jetzt ist es an der Zeit, sie mit der Welt zu teilen. Diese Anleitung führt dich Schritt für Schritt durch den Prozess der Veröffentlichung im offiziellen Chrome Web Store.

**Wichtiger Hinweis:** Für die Veröffentlichung benötigst du ein Google-Konto und musst eine einmalige Registrierungsgebühr von 5 US-Dollar an Google zahlen. Diese Gebühr dient dazu, die Anzahl von Spam-Erweiterungen zu reduzieren.

---

### Schritt 1: Vorbereitung der finalen Dateien

Bevor du etwas hochlädst, musst du sicherstellen, dass dein Projekt bereit für die Veröffentlichung ist.

1.  **Erstelle eine ZIP-Datei:**
    *   Das Wichtigste zuerst: Der Chrome Web Store akzeptiert nur eine einzige `.zip`-Datei.
    *   Gehe in den Hauptordner deiner Erweiterung (dorthin, wo `manifest.json` liegt).
    *   Wähle **alle** für die Erweiterung notwendigen Dateien und Ordner aus:
        - `manifest.json`
        - `popup.html`
        - `icons/` (der gesamte Ordner)
        - `src/` (der gesamte Ordner)
    *   **WICHTIG:** Wähle nicht den Projektordner selbst aus, sondern nur dessen Inhalt!
    *   Klicke mit der rechten Maustaste auf die ausgewählten Dateien und wähle "Senden an" > "ZIP-komprimierter Ordner" (Windows) oder "Komprimieren" (macOS).
    *   Benenne die resultierende ZIP-Datei sinnvoll, z. B. `cloud-finder-v1.0.zip`.

2.  **Bereite deine Store-Assets vor:**
    *   **Icons:** Du hast bereits die notwendigen Icons (16x16, 48x48, 128x128). Das 128x128-Icon wird für den Store-Eintrag verwendet.
    *   **Screenshots:** Erstelle mindestens einen Screenshot deiner Erweiterung in Aktion.
        - Öffne das Pop-up und mache einen Screenshot (z.B. mit dem Snipping Tool unter Windows oder `Cmd+Shift+4` auf dem Mac).
        - Die empfohlene Größe ist **1280x800 Pixel**. Du kannst deinen Screenshot in einem Bildbearbeitungsprogramm auf diese Größe zuschneiden oder auf einen passenden Hintergrund legen.
    *   **(Optional) Promo-Kachel:** Ein kleines Werbebild (440x280 Pixel), das auf der Startseite des Stores erscheinen kann.

---

### Schritt 2: Das Chrome Developer Dashboard

1.  **Gehe zum Dashboard:**
    *   Besuche das [Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard).
    *   Melde dich mit deinem Google-Konto an.

2.  **Zahle die Registrierungsgebühr:**
    *   Wenn du das Dashboard zum ersten Mal besuchst, wirst du aufgefordert, die einmalige Gebühr von 5 $ zu zahlen. Folge den Anweisungen. Es kann einige Minuten dauern, bis die Zahlung verarbeitet ist.

---

### Schritt 3: Erstellen eines neuen Eintrags

1.  **Neuen Artikel hinzufügen:**
    *   Klicke im Dashboard auf den Button **"+ NEUER ARTIKEL"**.

2.  **ZIP-Datei hochladen:**
    *   Es erscheint ein Dialogfenster. Wähle deine vorbereitete `.zip`-Datei (`cloud-finder-v1.0.zip`) aus und lade sie hoch.
    *   Wenn der Upload erfolgreich ist, wirst du zur Bearbeitungsseite für deinen Store-Eintrag weitergeleitet. Die meisten Felder werden automatisch aus deiner `manifest.json` ausgefüllt.

---

### Schritt 4: Ausfüllen des Store-Eintrags

Dies ist deine "Visitenkarte" im Store. Nimm dir Zeit, die Felder sorgfältig auszufüllen.

**Tab "Store-Eintrag":**

*   **Beschreibung:** Dies ist das wichtigste Feld. Beschreibe klar und prägnant, was deine Erweiterung tut. Du kannst den Text aus deiner `README.md` als Basis verwenden. Erkläre den Nutzen für den Anwender.
*   **Kategorie:** Wähle die passende Kategorie aus, z. B. "Produktivität".
*   **Sprache:** Wähle die Hauptsprache deiner Erweiterung (z.B. "Deutsch").
*   **Grafische Elemente:**
    *   **Icon:** Das 128x128-Icon sollte bereits hochgeladen sein.
    *   **Screenshots:** Lade hier deine vorbereiteten Screenshots hoch. Ziehe sie per Drag-and-Drop in den dafür vorgesehenen Bereich.
    *   **(Optional) YouTube-Video-URL:** Wenn du ein kurzes Demo-Video hast, kannst du es hier verlinken.
    *   **(Optional) Promo-Kacheln:** Lade hier deine Promo-Bilder hoch.

**Tab "Datenschutz":**

*   **Zweckangabe:** Du musst für jede Berechtigung, die deine Erweiterung anfordert, einen klaren Grund angeben.
    *   Deine `manifest.json` fordert `"activeTab"`.
    *   **Begründung:** "Diese Berechtigung ist erforderlich, damit die Erweiterung auf einer Webseite ausgeführt werden kann. Sie wird jedoch in der aktuellen Version nicht aktiv genutzt, ist aber für zukünftige kontextbezogene Funktionen vorgesehen." (Sei hier ehrlich und klar).
*   **Datenschutzerklärung:**
    *   Da deine Erweiterung **keine Benutzerdaten sammelt oder übermittelt**, ist dies einfach.
    *   Du kannst angeben, dass du keine Daten sammelst. Für eine professionelle Herangehensweise könntest du eine einfache Datenschutzerklärung auf einer Seite wie [GitHub Gist](https://gist.github.com/) oder [Privacy Policy Generator](https://www.privacypolicygenerator.info/) erstellen und den Link dort eintragen. Darin steht dann sinngemäß: "Diese Erweiterung sammelt, speichert oder übermittelt keine persönlichen Daten."

**Tab "Vertrieb":**

*   **Sichtbarkeit:** Wähle "Öffentlich", damit jeder deine Erweiterung finden kann. (Alternativ "Privat" für Tester oder "Nicht gelistet", wenn nur Personen mit dem direkten Link sie finden sollen).
*   **Standorte:** Wähle aus, in welchen Ländern deine Erweiterung verfügbar sein soll. "Alle Länder" ist eine gute Standardeinstellung.
*   **Preisgestaltung:** Diese Erweiterung ist kostenlos. Stelle sicher, dass "Kostenlos" ausgewählt ist.

---

### Schritt 5: Einreichen zur Überprüfung

1.  **Speichere den Entwurf:** Klicke oben auf der Seite auf **"Entwurf speichern"**.
2.  **Zur Überprüfung einreichen:** Wenn du mit allem zufrieden bist, klicke auf den Button **"Zur Überprüfung einreichen"**.

**Was passiert jetzt?**

*   Deine Erweiterung wird nun von einem Google-Team überprüft. Dieser Prozess kann von **wenigen Stunden bis zu mehreren Tagen (oder in seltenen Fällen Wochen)** dauern.
*   Die Prüfer achten auf:
    *   **Sicherheit:** Enthält die Erweiterung schädlichen Code?
    *   **Datenschutz:** Ford-ert sie übermäßige Berechtigungen an?
    *   **Funktionalität:** Tut sie, was sie in der Beschreibung verspricht?
    *   **Qualität:** Ist die Erweiterung fehlerhaft oder irreführend?

*   Du erhältst eine E-Mail, wenn der Überprüfungsprozess abgeschlossen ist.
    *   **Genehmigt:** Deine Erweiterung ist live im Chrome Web Store! Du erhältst den direkten Link.
    *   **Abgelehnt:** Die E-Mail enthält eine Begründung. Du musst die genannten Probleme beheben, eine neue Version deiner ZIP-Datei erstellen, diese im Dashboard hochladen und den Eintrag erneut zur Überprüfung einreichen.

Herzlichen Glückwunsch, du hast es geschafft!
