# Codex-Auftrag – VaporLink

## Ziel
Baue diese React-Native-App schrittweise zu einer echten Bluetooth-Steuerung für CRAFTY/CRAFTY+ aus.

## Design ist verbindlich
Die Master-Referenz liegt unter:

`docs/ui-reference.jpg`

Das UI soll sich sehr eng daran orientieren:

- fast schwarzer Hintergrund
- matte anthrazitfarbene Karten
- Orange als einzige dominante Akzentfarbe
- große runde Temperatursteuerung
- klare, reduzierte Typografie
- abgerundete Karten und große Touch-Flächen
- keine bunten zusätzlichen Akzentfarben
- Bottom Navigation wie in der Referenz

## Regel
Erst Funktion + visuelle Nähe sauber fertigstellen, dann neue Features hinzufügen.

## Phase 1 – jetzt
- Startscreen
- simulierter Connect
- Steuerung
- Presets
- Einstellungen
- responsive Layout für Android/iPhone

## Phase 2 – BLE
Nutze `react-native-ble-plx`.

1. Bluetooth-Berechtigungen Android/iOS sauber behandeln.
2. Nach Geräten suchen, deren Name `CRAFTY` enthält.
3. Verbinden und `discoverAllServicesAndCharacteristics()` ausführen.
4. Noch keine unbekannten UUIDs erfinden.
5. Einen Diagnose-Screen/Log erstellen, der gefundene Services/Characteristics darstellt.
6. Erst nach Verifikation die Lese-/Schreibfunktionen für Temperatur, Akku, Boost usw. implementieren.

## Qualitätsregeln
- TypeScript strict
- keine fest erfundenen BLE-Werte im echten Modus
- Fehlerzustände sichtbar im UI
- Reconnect berücksichtigen
- BLE-Code vom UI trennen
- keine unnötigen Bibliotheken
