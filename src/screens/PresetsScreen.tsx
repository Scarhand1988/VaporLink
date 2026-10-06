import React, { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { theme } from '../theme';

const presets = [
  { key: 'flavor', icon: '◒', name: 'Geschmack', temp: 170, desc: 'Volles Aroma. Sanfter Dampf.' },
  { key: 'standard', icon: '◒', name: 'Standard', temp: 185, desc: 'Ausgewogener Geschmack und spürbare Wirkung.' },
  { key: 'strong', icon: '♨', name: 'Stark', temp: 200, desc: 'Maximale Leistung.' },
];

export function PresetsScreen() {
  const [selected, setSelected] = useState('flavor');
  const [vibration, setVibration] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Presets & Einstellungen</Text>
      <View style={styles.sectionHeader}>
        <Text style={styles.section}>Voreinstellungen</Text>
        <Text style={styles.manage}>Verwalten</Text>
      </View>

      <View style={{ gap: 12 }}>
        {presets.map((preset) => (
          <Pressable
            key={preset.key}
            onPress={() => setSelected(preset.key)}
            style={[styles.preset, selected === preset.key && styles.presetSelected]}
          >
            <Text style={[styles.presetIcon, selected === preset.key && { color: theme.colors.accent }]}>
              {preset.icon}
            </Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.presetName}>{preset.name}</Text>
              <Text style={styles.temp}>{preset.temp}°C</Text>
              <Text style={styles.desc}>{preset.desc}</Text>
            </View>
            <View style={[styles.radio, selected === preset.key && styles.radioSelected]} />
          </Pressable>
        ))}
      </View>

      <Text style={[styles.section, { marginTop: 26 }]}>Geräteeinstellungen</Text>
      <View style={styles.settingsCard}>
        <View style={styles.row}>
          <Text style={styles.rowIcon}>≋</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowTitle}>Vibration</Text>
            <Text style={styles.rowSub}>Bei Zieltemperatur und Abschaltung</Text>
          </View>
          <Switch
            value={vibration}
            onValueChange={setVibration}
            trackColor={{ false: '#3A3B3E', true: theme.colors.accent }}
            thumbColor="#FFF"
          />
        </View>
        <View style={styles.separator} />
        <View style={styles.row}>
          <Text style={styles.rowIcon}>☼</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowTitle}>LED-Helligkeit</Text>
            <Text style={styles.rowSub}>Mittel</Text>
          </View>
          <Text style={styles.chev}>›</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.row}>
          <Text style={styles.rowIcon}>◷</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowTitle}>Automatische Abschaltung</Text>
            <Text style={styles.rowSub}>Nach 5 Minuten Inaktivität</Text>
          </View>
          <Text style={styles.chev}>›</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bg, paddingHorizontal: 22, paddingTop: 54 },
  title: { color: theme.colors.text, fontSize: 24, fontWeight: '600', marginBottom: 28 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
  section: { color: theme.colors.text, fontSize: 18, fontWeight: '600' },
  manage: { color: theme.colors.muted, fontSize: 13, textDecorationLine: 'underline' },
  preset: { minHeight: 106, backgroundColor: '#17181A', borderRadius: 16, borderWidth: 1, borderColor: theme.colors.border, flexDirection: 'row', alignItems: 'center', padding: 15, gap: 14 },
  presetSelected: { borderColor: theme.colors.accent, backgroundColor: '#21150F' },
  presetIcon: { fontSize: 27, color: '#C8C8CA' },
  presetName: { color: theme.colors.text, fontSize: 16, fontWeight: '600' },
  temp: { color: theme.colors.accent, fontSize: 15, fontWeight: '700', marginTop: 2 },
  desc: { color: theme.colors.muted, fontSize: 12, marginTop: 4 },
  radio: { width: 23, height: 23, borderRadius: 12, borderWidth: 2, borderColor: '#E6E6E6' },
  radioSelected: { borderColor: theme.colors.accent, borderWidth: 7 },
  settingsCard: { marginTop: 12, borderRadius: 16, backgroundColor: '#17181A', borderWidth: 1, borderColor: theme.colors.border, overflow: 'hidden' },
  row: { minHeight: 72, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 13 },
  rowIcon: { color: theme.colors.text, fontSize: 23, width: 25 },
  rowTitle: { color: theme.colors.text, fontSize: 15, fontWeight: '600' },
  rowSub: { color: theme.colors.muted, fontSize: 11, marginTop: 3 },
  chev: { color: theme.colors.text, fontSize: 30, fontWeight: '200' },
  separator: { height: 1, backgroundColor: theme.colors.border, marginLeft: 54 },
});
