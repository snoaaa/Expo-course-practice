import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Toolbar } from '@/components/common/Toolbar';
import { Footer } from '@/components/common/Footer';

export default function PreferencesScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [offlineSync, setOfflineSync] = useState(true);
  const [haptics, setHaptics] = useState(true);

  const handleReset = () => {
    Alert.alert(
      'Reset Preferences',
      'Restore all default preferences?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            setDarkMode(false);
            setNotifications(true);
            setOfflineSync(true);
            setHaptics(true);
            Alert.alert('Reset Complete', 'Default preferences restored.');
          },
        },
      ]
    );
  };

  return (
    <View style={prefStyles.screen}>
      <Toolbar
        title="Preferences"
        subtitle="System & App Configuration"
        backgroundColor="#0F172A"
      />

      <ScrollView
        style={prefStyles.scrollView}
        contentContainerStyle={prefStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={prefStyles.sectionHeader}>DISPLAY & APPEARANCE</Text>
        <View style={prefStyles.card}>
          <View style={prefStyles.settingRow}>
            <View style={prefStyles.settingInfo}>
              <Text style={prefStyles.settingTitle}>Dark Theme</Text>
              <Text style={prefStyles.settingDesc}>Use low-light interface</Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#CBD5E1', true: '#0F172A' }}
            />
          </View>

          <View style={prefStyles.divider} />

          <View style={prefStyles.settingRow}>
            <View style={prefStyles.settingInfo}>
              <Text style={prefStyles.settingTitle}>Haptic Feedback</Text>
              <Text style={prefStyles.settingDesc}>Vibration on interactive taps</Text>
            </View>
            <Switch
              value={haptics}
              onValueChange={setHaptics}
              trackColor={{ false: '#CBD5E1', true: '#0F172A' }}
            />
          </View>
        </View>

        <Text style={prefStyles.sectionHeader}>STORAGE & DATABASE</Text>
        <View style={prefStyles.card}>
          <View style={prefStyles.settingRow}>
            <View style={prefStyles.settingInfo}>
              <Text style={prefStyles.settingTitle}>SQLite Local Persistence</Text>
              <Text style={prefStyles.settingDesc}>Persist records locally in todoApp.db</Text>
            </View>
            <Switch
              value={offlineSync}
              onValueChange={setOfflineSync}
              trackColor={{ false: '#CBD5E1', true: '#0F172A' }}
            />
          </View>

          <View style={prefStyles.divider} />

          <View style={prefStyles.settingRow}>
            <View style={prefStyles.settingInfo}>
              <Text style={prefStyles.settingTitle}>Course Notifications</Text>
              <Text style={prefStyles.settingDesc}>Task deadline reminders</Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#CBD5E1', true: '#0F172A' }}
            />
          </View>
        </View>

        <TouchableOpacity style={prefStyles.resetButton} onPress={handleReset}>
          <Text style={prefStyles.resetButtonText}>Reset Preferences to Default</Text>
        </TouchableOpacity>

        <Footer authorName="Abraham" />
      </ScrollView>
    </View>
  );
}

const prefStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 24,
  },
  sectionHeader: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 0.8,
    marginBottom: 8,
    marginLeft: 2,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 18,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 13,
  },
  settingInfo: {
    flex: 1,
    paddingRight: 10,
  },
  settingTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
  },
  settingDesc: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
  },
  resetButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FECDD3',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  resetButtonText: {
    color: '#E11D48',
    fontWeight: '600',
    fontSize: 13,
  },
});
