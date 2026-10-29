import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Toolbar } from '@/components/common/Toolbar';
import { Footer } from '@/components/common/Footer';
import { VehicleList } from '@/components/td1/VehicleList';
import { PlacesList } from '@/components/td1/PlacesList';
import { TravelCard } from '@/components/td1/TravelCard';

export default function HomeTabScreen() {
  const router = useRouter();

  return (
    <View style={screenStyles.screen}>
      <Toolbar
        title="TD 1: Layouts & UI Components"
        subtitle="Home Tab"
        backgroundColor="#0F172A"
      />

      <ScrollView
        style={screenStyles.scrollView}
        contentContainerStyle={screenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={screenStyles.academicHeader}>
          <View style={screenStyles.headerTextRow}>
            <View>
              <Text style={screenStyles.academicTag}>INGE 4 • SEMESTER 7</Text>
              <Text style={screenStyles.academicTitle}>Mobile Development Laboratory</Text>
            </View>
            <Text style={screenStyles.authorTag}>Abraham</Text>
          </View>
          <Text style={screenStyles.academicDesc}>
            Practice suite covering UI components, dialogs, action sheets,
            drawer navigation, and SQLite persistence.
          </Text>

          <View style={screenStyles.shortcutsRow}>
            <TouchableOpacity
              style={screenStyles.shortcutBtn}
              onPress={() => router.push('/tasks')}
              activeOpacity={0.7}
            >
              <Ionicons name="checkbox-outline" size={14} color="#0F172A" />
              <Text style={screenStyles.shortcutText}>Task Tracker</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={screenStyles.shortcutBtn}
              onPress={() => router.push('/people')}
              activeOpacity={0.7}
            >
              <Ionicons name="people-outline" size={14} color="#0F172A" />
              <Text style={screenStyles.shortcutText}>People Directory</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* TD 1 Blocks */}
        <VehicleList />
        <PlacesList />
        <TravelCard />

        <Footer authorName="Abraham" />
      </ScrollView>
    </View>
  );
}

const screenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 16,
  },
  academicHeader: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  headerTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  academicTag: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: 0.8,
  },
  academicTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 2,
  },
  authorTag: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0F172A',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  academicDesc: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 17,
    marginTop: 4,
    marginBottom: 12,
  },
  shortcutsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  shortcutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  shortcutText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0F172A',
  },
});
