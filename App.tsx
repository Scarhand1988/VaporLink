import React, { useMemo, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { BottomNav, TabKey } from './src/components/BottomNav';
import { ConnectScreen } from './src/screens/ConnectScreen';
import { ControlScreen } from './src/screens/ControlScreen';
import { PlaceholderScreen } from './src/screens/PlaceholderScreen';
import { PresetsScreen, PresetKey, PRESETS } from './src/screens/PresetsScreen';
import { theme } from './src/theme';

export default function App() {
  const [connected, setConnected] = useState(false);
  const [tab, setTab] = useState<TabKey>('control');
  const [targetTemperature, setTargetTemperature] = useState(185);
  const [selectedPreset, setSelectedPreset] = useState<PresetKey>('standard');

  const actualTemperature = useMemo(
    () => Math.max(40, Math.min(targetTemperature, targetTemperature - 16)),
    [targetTemperature],
  );

  const heatingProgress = useMemo(() => {
    if (targetTemperature <= 40) return 100;
    return Math.max(0, Math.min(100, Math.round((actualTemperature / targetTemperature) * 100)));
  }, [actualTemperature, targetTemperature]);

  const handlePresetSelect = (key: PresetKey) => {
    setSelectedPreset(key);
    setTargetTemperature(PRESETS.find((item) => item.key === key)?.temp ?? 185);
  };

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
        {tab === 'control' && (
          <ControlScreen
            target={targetTemperature}
            actual={actualTemperature}
            progress={heatingProgress}
            onTargetChange={(value) => {
              setTargetTemperature(value);
              setSelectedPreset('custom');
            }}
          />
        )}
        {tab === 'presets' && (
          <PresetsScreen selected={selectedPreset} onSelect={handlePresetSelect} />
        )}
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
