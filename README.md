# VaporLink – Phase 1

Erster echter App-Start für das ausgewählte schwarze/orange Design.

## Enthalten

- Verbindungs-/Startscreen im ausgewählten Stil
- Temperatursteuerung mit +/-
- Mock-Aufheizstatus
- Boost / Superboost UI
- Presets
- Vibrationseinstellung
- Bottom Navigation
- BLE-Service-Skelett für CRAFTY/CRAFTY+
- Designreferenz unter `docs/ui-reference.png`

## Wichtiger technischer Punkt

`react-native-ble-plx` benötigt nativen Code und läuft **nicht in Expo Go**. Für Bluetooth muss eine native Development Build erzeugt werden.

## Start

```bash
npm install
npx expo prebuild
npx expo run:android
```

Für iOS wird ein Mac mit Xcode benötigt:

```bash
npx expo run:ios
```

## Aktueller Modus

Der Button **Verbinden** schaltet in Phase 1 noch auf simulierte Gerätedaten um. Das ist Absicht: zuerst UI sauber, dann BLE-Protokoll mit dem echten Gerät prüfen.

## Phase 2

1. Android-Bluetooth-Berechtigungen prüfen
2. CRAFTY/CRAFTY+ scannen und verbinden
3. Services + Characteristics auslesen
4. bestätigte GATT-UUIDs dokumentieren
5. Akku / Ist-Temperatur lesen
6. Zieltemperatur schreiben
7. Boost/Superboost anbinden
8. Reconnect + Fehlerbehandlung
