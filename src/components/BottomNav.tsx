import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';

export type TabKey = 'control' | 'presets' | 'stats' | 'more';

type Props = {
  active: TabKey;
  onChange: (tab: TabKey) => void;
};

const tabs: Array<{ key: TabKey; icon: string; label: string }> = [
  { key: 'control', icon: '⌂', label: 'Steuerung' },
  { key: 'presets', icon: '◒', label: 'Presets' },
  { key: 'stats', icon: '▥', label: 'Statistik' },
  { key: 'more', icon: '•••', label: 'Mehr' },
];

export function BottomNav({ active, onChange }: Props) {
  return (
    <View style={styles.wrap}>
      {tabs.map((tab) => {
        const selected = active === tab.key;
        return (
          <Pressable key={tab.key} onPress={() => onChange(tab.key)} style={styles.item}>
            <Text style={[styles.icon, selected && styles.selected]}>{tab.icon}</Text>
            <Text style={[styles.label, selected && styles.selected]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 78,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    backgroundColor: '#0E0F10',
    paddingBottom: 8,
    paddingTop: 7,
  },
  item: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 3 },
  icon: { color: theme.colors.muted, fontSize: 21, fontWeight: '700' },
  label: { color: theme.colors.muted, fontSize: 11, fontWeight: '600' },
  selected: { color: theme.colors.accent },
});
