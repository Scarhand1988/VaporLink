import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';

export function PlaceholderScreen({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>Dieser Bereich kommt im nächsten Ausbau.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bg, paddingHorizontal: 24, paddingTop: 54 },
  title: { color: theme.colors.text, fontSize: 28, fontWeight: '600' },
  text: { color: theme.colors.muted, marginTop: 12, fontSize: 15 },
});
