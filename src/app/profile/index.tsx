import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Toolbar } from '@/components/common/Toolbar';
import { Footer } from '@/components/common/Footer';
import { ClassicAvatar } from '@/components/common/ClassicAvatar';

export default function ProfileScreen() {
  const stats = [
    { label: 'Completed TDs', value: '4 / 4' },
    { label: 'Course Level', value: 'INGE 4' },
    { label: 'Semester', value: 'Semester 7' },
  ];

  const skills = [
    'React Native',
    'Expo Go',
    'expo-sqlite',
    'Ionicons',
    'Drawer Navigation',
    'Tabbed Navigation',
    'ActionSheet',
    'Flexbox Layouts',
  ];

  return (
    <View style={profStyles.screen}>
      <Toolbar
        title="My Profile"
        subtitle="Abraham • INGE 4 (Sem 7)"
        backgroundColor="#0F172A"
      />

      <ScrollView
        style={profStyles.scrollView}
        contentContainerStyle={profStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={profStyles.profileHeaderCard}>
          <ClassicAvatar size={76} initial="A" />

          <Text style={profStyles.name}>Abraham</Text>
          <Text style={profStyles.subtitle}>
            Student Software Engineer • INGE 4 (Semester 7)
          </Text>

          <View style={profStyles.badge}>
            <Text style={profStyles.badgeText}>Mobile Development Coursework</Text>
          </View>
        </View>

        <View style={profStyles.statsRow}>
          {stats.map((s, i) => (
            <View key={i} style={profStyles.statCard}>
              <Text style={profStyles.statValue}>{s.value}</Text>
              <Text style={profStyles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        <Text style={profStyles.sectionHeader}>ACADEMIC ENROLLMENT</Text>
        <View style={profStyles.detailsCard}>
          <View style={profStyles.detailItem}>
            <Text style={profStyles.detailLabel}>Student Name</Text>
            <Text style={profStyles.detailValue}>Abraham</Text>
          </View>

          <View style={profStyles.divider} />

          <View style={profStyles.detailItem}>
            <Text style={profStyles.detailLabel}>Program</Text>
            <Text style={profStyles.detailValue}>Software & Systems Engineering</Text>
          </View>

          <View style={profStyles.divider} />

          <View style={profStyles.detailItem}>
            <Text style={profStyles.detailLabel}>Course Unit</Text>
            <Text style={profStyles.detailValue}>Mobile Development (TD1, TD2, SQLite, Navigation)</Text>
          </View>

          <View style={profStyles.divider} />

          <View style={profStyles.detailItem}>
            <Text style={profStyles.detailLabel}>Target Runtime</Text>
            <Text style={profStyles.detailValue}>Expo Go (iOS & Android)</Text>
          </View>
        </View>

        <Text style={profStyles.sectionHeader}>CURRICULUM COMPETENCIES</Text>
        <View style={profStyles.skillsContainer}>
          {skills.map((skill, index) => (
            <View key={index} style={profStyles.skillPill}>
              <Ionicons name="checkmark" size={14} color="#0F172A" />
              <Text style={profStyles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>

        <Footer authorName="Abraham" />
      </ScrollView>
    </View>
  );
}

const profStyles = StyleSheet.create({
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
  profileHeaderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 3,
    textAlign: 'center',
  },
  badge: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 4,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  badgeText: {
    color: '#0F172A',
    fontSize: 11,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  statLabel: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  sectionHeader: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 0.8,
    marginBottom: 8,
    marginLeft: 2,
  },
  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 16,
  },
  detailItem: {
    paddingVertical: 12,
  },
  detailLabel: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  detailValue: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '500',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 16,
  },
  skillPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  skillText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0F172A',
  },
});
