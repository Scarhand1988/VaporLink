import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';

type Props = { onConnect: () => void };

export function ConnectScreen({ onConnect }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Text style={styles.mark}>≈</Text>
        <Text style={styles.gear}>⚙</Text>
      </View>

      <Text style={styles.title}>Dein Vaporizer.</Text>
      <Text style={styles.accentTitle}>Intelligent verbunden.</Text>
      <Text style={styles.sub}>Mehr Kontrolle. Mehr Genuss.{`\n`}Jederzeit. Überall.</Text>

      <View style={styles.heroRow}>
        <View style={styles.deviceMock}>
          <View style={styles.mouthpiece} />
          {Array.from({ length: 12 }).map((_, i) => <View key={i} style={styles.rib} />)}
          <View style={styles.deviceLight} />
        </View>

        <View style={styles.infoStack}>
          <InfoCard icon="⌁" value={"Nicht\nverbunden"} />
          <InfoCard icon="▣" value="78 %" />
          <InfoCard icon="▯" value="CRAFTY+" />
        </View>
      </View>

      <Pressable style={styles.connect} onPress={onConnect}>
        <Text style={styles.connectText}>⌁  Verbinden</Text>
      </Pressable>
      <Text style={styles.link}>Anderes Gerät wählen</Text>
    </View>
  );
}

function InfoCard({ icon, value }: { icon: string; value: string }) {
  return (
    <View style={styles.infoCard}>
      <Text style={styles.infoIcon}>{icon}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bg, paddingHorizontal: 28, paddingTop: 56 },
  logoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  mark: { color: theme.colors.accent, fontSize: 38, fontWeight: '900' },
  gear: { color: theme.colors.muted, fontSize: 24 },
  title: { color: theme.colors.text, fontSize: 34, fontWeight: '300', marginTop: 14 },
  accentTitle: { color: theme.colors.accent, fontSize: 29, fontWeight: '600', marginTop: 1 },
  sub: { color: '#B6B6B8', fontSize: 15, lineHeight: 22, marginTop: 10 },
  heroRow: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', minHeight: 360 },
  deviceMock: {
    width: 170,
    height: 310,
    backgroundColor: '#242528',
    borderRadius: 44,
    paddingHorizontal: 16,
    paddingTop: 26,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
  },
  mouthpiece: {
    position: 'absolute',
    width: 72,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#1C1D1F',
    top: -9,
    right: 6,
    transform: [{ rotate: '-35deg' }],
  },
  rib: { height: 12, borderRadius: 7, backgroundColor: '#08090A', marginVertical: 4, borderWidth: 1, borderColor: '#3C3D40' },
  deviceLight: { position: 'absolute', width: 8, height: 44, borderRadius: 5, backgroundColor: theme.colors.accent, left: 12, bottom: 44 },
  infoStack: { gap: 12, width: 108 },
  infoCard: { minHeight: 82, backgroundColor: '#222325', borderRadius: 14, borderWidth: 1, borderColor: '#3A3B3E', justifyContent: 'center', alignItems: 'center', padding: 8 },
  infoIcon: { color: theme.colors.text, fontSize: 21 },
  infoValue: { color: theme.colors.text, textAlign: 'center', marginTop: 6, fontSize: 13, lineHeight: 17 },
  connect: { height: 58, borderRadius: 29, backgroundColor: theme.colors.accent, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  connectText: { color: '#FFF', fontSize: 20, fontWeight: '600' },
  link: { color: '#C4C4C5', textAlign: 'center', textDecorationLine: 'underline', paddingBottom: 24 },
});
