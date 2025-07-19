# Testen der "Cloud Finder" Chrome Extension

Das Testen von Chrome-Erweiterungen ist ein wichtiger Schritt, um sicherzustellen, dass sie wie erwartet funktionieren und keine Fehler enthalten. Dieses Dokument beschreibt, wie du die "Cloud Finder"-Erweiterung manuell testen kannst und enthält ein Testprotokoll, das du bei jeder neuen Version durchgehen solltest.

## Teil 1: Einrichten der Testumgebung

Bevor du mit dem Testen beginnst, musst du die Erweiterung in deinem Browser im Entwicklermodus installieren.

1.  **Öffne Google Chrome.**
2.  **Gehe zur URL `chrome://extensions`.** Gib diese Adresse in die Adressleiste ein und drücke Enter.
3.  **Aktiviere den Entwicklermodus.** Finde den Schalter oben rechts auf der Seite und schalte ihn ein.
4.  **Lade die Erweiterung.**
    *   Klicke auf den Button **"Entpackte Erweiterung laden"**, der nach der Aktivierung des Entwicklermodus erscheint.
    *   Navigiere zu dem Ordner, in dem sich der Code der Erweiterung befindet (der Ordner, der die `manifest.json` enthält), und wähle ihn aus.
5.  **Passe deine Toolbar an.**
    *   Die Erweiterung "Cloud Finder" sollte nun in der Liste erscheinen.
    *   Klicke auf das Puzzle-Icon (🧩) in der Toolbar deines Browsers.
    *   Finde "Cloud Finder" in der Liste der Erweiterungen und klicke auf das Pin-Icon (📌) daneben. Das Icon der Erweiterung wird nun dauerhaft in deiner Toolbar angezeigt.

## Teil 2: Manuelles Testprotokoll

Führe die folgenden Schritte sorgfältig durch und dokumentiere alle unerwarteten Ergebnisse.

---

### Testprotokoll für Version: `1.0`

**Testdatum:** `TT.MM.JJJJ`
**Tester:** `Dein Name`

| Testfall-ID | Beschreibung des Tests                                                              | Erwartetes Ergebnis                                                                                                   | Tatsächliches Ergebnis (OK / Fehler) | Anmerkungen                                          |
| :---------- | :---------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :----------------------------------- | :--------------------------------------------------- |
| **UI-01**   | **Pop-up-Öffnung**<br>Klicke auf das Cloud Finder-Icon in der Toolbar.                | Das Pop-up-Fenster öffnet sich sofort und ohne sichtbare Verzögerung.                                                 | `OK`                                 |                                                      |
| **UI-02**   | **Pop-up-Anzeige**<br>Überprüfe das geöffnete Pop-up visuell.                         | - Ein Hintergrundbild ist sichtbar.<br>- Eine Liste von 10 Einträgen wird auf einem halbtransparenten Overlay angezeigt.<br>- Jeder Eintrag hat ein Icon und einen Namen. | `OK`                                 |                                                      |
| **UI-03**   | **Scrolling**<br>Versuche, in der Liste der Cloud-Anbieter zu scrollen.             | Das Scrollen innerhalb des Content-Bereichs ist flüssig möglich. Der Hintergrund bleibt fixiert.                    | `OK`                                 |                                                      |
| **FUNC-01** | **Link-Funktionalität (Stichprobe 1)**<br>Klicke auf den "Google Drive"-Eintrag.     | Ein neuer Tab öffnet sich mit der URL `https://drive.google.com`. Der Fokus wechselt zu diesem neuen Tab.         | `OK`                                 | Überprüfe die exakte URL.                            |
| **FUNC-02** | **Link-Funktionalität (Stichprobe 2)**<br>Klicke auf den "Dropbox"-Eintrag.          | Ein neuer Tab öffnet sich mit der URL `https://www.dropbox.com`.                                                      | `OK`                                 |                                                      |
| **FUNC-03** | **Link-Funktionalität (Stichprobe 3)**<br>Klicke auf den "MEGA"-Eintrag.             | Ein neuer Tab öffnet sich mit der URL `https://mega.nz`.                                                              | `OK`                                 |                                                      |
| **PERF-01** | **Performance beim wiederholten Öffnen**<br>Schließe und öffne das Pop-up 5 Mal schnell hintereinander. | Die Erweiterung reagiert weiterhin sofort und ohne Verzögerung oder Flackern.                                         | `OK`                                 |                                                      |
| **COMP-01** | **Kompatibilität mit verschiedenen Seiten**<br>Öffne das Pop-up auf verschiedenen Webseiten (z.B. Google, eine Nachrichten-Seite, eine leere "Neuer Tab"-Seite). | Die Erweiterung funktioniert auf allen Seiten konsistent und wie erwartet.                                           | `OK`                                 | Die Funktionalität sollte seitenunabhängig sein.     |
| **DEV-01**  | **Prüfung der Entwicklerkonsole**<br>Rechtsklicke auf das Pop-up und wähle "Untersuchen". Prüfe den "Console"-Tab. | Es sollten keine Fehlermeldungen (rote Einträge) in der Konsole erscheinen.                                            | `OK`                                 | Geringfügige Warnungen sind oft unkritisch.          |

---

### Was tun bei Fehlern?

Wenn ein Test fehlschlägt (du ein anderes Ergebnis als das erwartete erhältst):

1.  **Notiere den Fehler:** Schreibe eine detaillierte Beschreibung des Problems in die Spalte "Anmerkungen". Was genau ist passiert? Was hast du erwartet?
2.  **Mache einen Screenshot:** Ein Bild sagt mehr als tausend Worte.
3.  **Reproduziere den Fehler:** Versuche, den Fehler zuverlässig zu reproduzieren. Finde heraus, welche Schritte genau zum Problem führen.
4.  **Melde den Fehler:** Wenn du mit anderen zusammenarbeitest, erstelle ein "Issue" im Projekt-Repository (z.B. auf GitHub). Beschreibe das Problem so genau wie möglich.
5.  **Behebe den Fehler:** Wenn du selbst entwickelst, nutze die Entwicklertools (wie die Konsole oder den Debugger), um die Ursache zu finden und zu beheben.
6.  **Teste erneut:** Nachdem der Fehler behoben wurde, führe das gesamte Testprotokoll erneut durch, um sicherzustellen, dass die Korrektur keine neuen Probleme verursacht hat (Regressionstests).
