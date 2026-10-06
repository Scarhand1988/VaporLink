import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TemperatureDial } from '../components/TemperatureDial';
import { theme } from '../theme';

export function ControlScreen() {
  const [target, setTarget] = useState(185);
  const [boost, setBoost] = useState<'none' | 'boost' | 'super'>('none');
  const actual = 169;
  const progress = 82;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Steuerung</Text>
          <View style={styles.underline} />
        </View>
        <Text style={styles.sliders}>☷</Text>
      </View>

      <TemperatureDial value={target} onChange={setTarget} />

      <View style={styles.statusRow}>
        <View style={styles.statusBlock}>
          <Text style={styles.muted}>Aktuell</Text>
          <Text style={styles.actual}>{actual}°C</Text>
        </View>
        <View style={styles.divider} />
        <View style={[styles.statusBlock, { flex: 1.2 }]}>
          <Text style={styles.muted}>Aufheizen …</Text>
          <View style={styles.progressRow}>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>
            <Text style={styles.progressText}>{progress} %</Text>
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <Action
          title="Boost"
          subtitle="+15 °C / 2 Min."
          selected={boost === 'boost'}
          onPress={() => setBoost(boost === 'boost' ? 'none' : 'boost')}
        />
        <Action
          title="Superboost"
          subtitle="+25 °C / 2 Min."
          selected={boost === 'super'}
          onPress={() => setBoost(boost === 'super' ? 'none' : 'super')}
          strong
        />
      </View>
    </View>
  );
}

function Action({
  title,
  subtitle,
  selected,
  onPress,
  strong,
}: {
  title: string;
  subtitle: string;
  selected: boolean;
  onPress: () => void;
  strong?: boolean;
}) {
  return (
    <Pressable onPress={onPress} style={[styles.actionCard, selected && styles.actionSelected]}>
      <Text style={[styles.flame, (selected || strong) && { color: theme.colors.accent }]}>♨</Text>
      <Text style={[styles.actionTitle, selected && { color: theme.colors.accent }]}>{title}</Text>
      <Text style={styles.actionSub}>{subtitle}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bg, paddingHorizontal: 24, paddingTop: 52 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: theme.colors.text, fontSize: 24, fontWeight: '600' },
  underline: { width: 31, height: 3, borderRadius: 2, backgroundColor: theme.colors.accent, marginTop: 8 },
  sliders: { color: theme.colors.muted, fontSize: 26 },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginTop: 28, marginBottom: 18 },
  statusBlock: { flex: 1 },
  muted: { color: theme.colors.muted, fontSize: 14, marginBottom: 4 },
  actual: { color: theme.colors.accent, fontSize: 28, fontWeight: '500' },
  divider: { width: 1, height: 54, backgroundColor: theme.colors.border, marginHorizontal: 22 },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  progressTrack: { flex: 1, height: 12, borderRadius: 999, backgroundColor: theme.colors.track, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 999, backgroundColor: theme.colors.accent },
  progressText: { color: theme.colors.text, fontSize: 14 },
  actions: { flexDirection: 'row', gap: 12, marginTop: 12 },
  actionCard: { flex: 1, minHeight: 136, backgroundColor: '#17181A', borderRadius: 17, borderWidth: 1, borderColor: theme.colors.border, alignItems: 'center', justifyContent: 'center', padding: 12 },
  actionSelected: { borderColor: theme.colors.accent, backgroundColor: '#24160F' },
  flame: { color: theme.colors.text, fontSize: 29, marginBottom: 4 },
  actionTitle: { color: theme.colors.text, fontSize: 18, fontWeight: '600' },
  actionSub: { color: theme.colors.muted, fontSize: 13, marginTop: 7 },
});
