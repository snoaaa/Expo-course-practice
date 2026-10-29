import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Toolbar } from '@/components/common/Toolbar';
import { Footer } from '@/components/common/Footer';

export default function AboutScreen() {
  const router = useRouter();

  const modules = [
    {
      title: 'TD 1: Layouts & UI Components',
      desc: 'Vehicle catalogue (5), favorite places with confirmation dialog (Cancel, Go there, Later), and travel map destination card with Visit/See actions.',
      badge: 'TD 1',
    },
    {
      title: 'TD 2: Action Sheet, Icons & Colors',
      desc: 'Dynamic directory of people, action sheet displaying chosen person name with Call, Info, Share, Delete, Cancel with Ionicons, and Toolbar/Footer.',
      badge: 'TD 2',
    },
    {
      title: 'Assignment: Left Menu & Tabbed Navigation',
      desc: 'Left drawer (Home, Preferences, My Profile, About, Task Tracker), <Tabs> inside Home (Home, People, Fruits), folder routing with index.tsx, and custom header colors.',
      badge: 'Assignment',
    },
    {
      title: 'Database: SQLite Task Tracker',
      desc: 'Local SQLite transactions using expo-sqlite (openDatabaseSync, execSync, runSync, getAllSync), TaskCounter, TaskInput, TaskItem, and StatusFilter.',
      badge: 'SQLite Lab',
    },
  ];

  return (
    <View style={aboutStyles.screen}>
      <Toolbar
        title="About Application"
        subtitle="Architecture & Modules • Abraham"
        backgroundColor="#0F172A"
      />

      <ScrollView
        style={aboutStyles.scrollView}
        contentContainerStyle={aboutStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={aboutStyles.bannerCard}>
          <Text style={aboutStyles.bannerTag}>INGE 4 • SEMESTER 7</Text>
          <Text style={aboutStyles.bannerTitle}>
            Mobile Development Practice Suite
          </Text>
          <Text style={aboutStyles.bannerDeveloper}>
            Author: Abraham • Year 2025
          </Text>
          <Text style={aboutStyles.bannerBody}>
            A modular implementation of all coursework tutorials,
            assignments, and database labs using React Native and Expo Go.
          </Text>
        </View>

        <Text style={aboutStyles.sectionHeader}>CURRICULUM SPECIFICATIONS</Text>
        <View style={aboutStyles.modulesList}>
          {modules.map((mod, i) => (
            <View key={i} style={aboutStyles.moduleCard}>
              <View style={aboutStyles.moduleHeader}>
                <View style={aboutStyles.moduleBadge}>
                  <Text style={aboutStyles.moduleBadgeText}>{mod.badge}</Text>
                </View>
                <Text style={aboutStyles.moduleTitle}>{mod.title}</Text>
              </View>
              <Text style={aboutStyles.moduleDesc}>{mod.desc}</Text>
            </View>
          ))}
        </View>

        <Text style={aboutStyles.sectionHeader}>SHORTCUTS</Text>
        <View style={aboutStyles.shortcutRow}>
          <TouchableOpacity
            style={aboutStyles.shortcutBtn}
            onPress={() => router.push('/tasks')}
            activeOpacity={0.8}
          >
            <Ionicons name="checkbox-outline" size={16} color="#0F172A" />
            <Text style={aboutStyles.shortcutBtnText}>Task Tracker</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={aboutStyles.shortcutBtn}
            onPress={() => router.push('/home')}
            activeOpacity={0.8}
          >
            <Ionicons name="home-outline" size={16} color="#0F172A" />
            <Text style={aboutStyles.shortcutBtnText}>Home (TD 1)</Text>
          </TouchableOpacity>
        </View>

        <Footer authorName="Abraham" />
      </ScrollView>
    </View>
  );
}

const aboutStyles = StyleSheet.create({
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
  bannerCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  bannerTag: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 0.8,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginVertical: 4,
  },
  bannerDeveloper: {
    fontSize: 12,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
  },
  bannerBody: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 18,
  },
  sectionHeader: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 0.8,
    marginBottom: 8,
    marginLeft: 2,
  },
  modulesList: {
    gap: 8,
    marginBottom: 16,
  },
  moduleCard: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  moduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  moduleBadge: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  moduleBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#0F172A',
  },
  moduleTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  moduleDesc: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 16,
  },
  shortcutRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  shortcutBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingVertical: 10,
    borderRadius: 8,
  },
  shortcutBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F172A',
  },
});
