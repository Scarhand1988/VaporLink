import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';

type Props = {
  value: number;
  onChange: (next: number) => void;
};

export function TemperatureDial({ value, onChange }: Props) {
  const set = (next: number) => onChange(Math.max(40, Math.min(210, next)));

  return (
    <View style={styles.wrapper}>
      <View style={styles.dial}>
        <View style={styles.arc} />
        <Text style={styles.steam}>≋</Text>
        <Text style={styles.value}>{value}°C</Text>
        <Text style={styles.caption}>Zieltemperatur</Text>
      </View>
      <View style={styles.controls}>
        <Pressable style={styles.circleButton} onPress={() => set(value - 1)}>
          <Text style={styles.controlText}>−</Text>
        </Pressable>
        <Pressable style={styles.circleButton} onPress={() => set(value + 1)}>
          <Text style={styles.controlText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { alignItems: 'center', marginTop: 10 },
  dial: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 18,
    borderTopColor: theme.colors.accent,
    borderLeftColor: theme.colors.accent,
    borderBottomColor: theme.colors.accent,
    borderRightColor: theme.colors.track,
    transform: [{ rotate: '-42deg' }],
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0C0D0E',
  },
  arc: {
    position: 'absolute',
    top: 14,
    right: 14,
    bottom: 14,
    left: 14,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#252629',
  },
  steam: { color: theme.colors.muted, fontSize: 32, transform: [{ rotate: '42deg' }], marginBottom: 5 },
  value: { color: theme.colors.text, fontSize: 48, fontWeight: '300', transform: [{ rotate: '42deg' }] },
  caption: { color: theme.colors.muted, fontSize: 13, marginTop: 5, transform: [{ rotate: '42deg' }] },
  controls: { width: 210, flexDirection: 'row', justifyContent: 'space-between', marginTop: -16 },
  circleButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#232426',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#303136',
  },
  controlText: { color: theme.colors.text, fontSize: 32, fontWeight: '300' },
});
