import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { BottomNav, TabKey } from './src/components/BottomNav';
import { ConnectScreen } from './src/screens/ConnectScreen';
import { ControlScreen } from './src/screens/ControlScreen';
import { PlaceholderScreen } from './src/screens/PlaceholderScreen';
import { PresetsScreen } from './src/screens/PresetsScreen';
import { theme } from './src/theme';

export default function App() {
  const [connected, setConnected] = useState(false);
  const [tab, setTab] = useState<TabKey>('control');

  if (!connected) {
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.bg} />
        <ConnectScreen onConnect={() => setConnected(true)} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.bg} />
      <View style={styles.content}>
        {tab === 'control' && <ControlScreen />}
        {tab === 'presets' && <PresetsScreen />}
        {tab === 'stats' && <PlaceholderScreen title="Statistik" />}
        {tab === 'more' && <PlaceholderScreen title="Mehr" />}
      </View>
      <BottomNav active={tab} onChange={setTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.bg },
  content: { flex: 1 },
});
