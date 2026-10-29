import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Toolbar } from '@/components/common/Toolbar';
import { Footer } from '@/components/common/Footer';
import { PeopleList } from '@/components/td2/PeopleList';

export default function PeopleTabScreen() {
  return (
    <View style={screenStyles.screen}>
      <Toolbar
        title="People Directory"
        subtitle="TD 2: Action Sheet & Icons"
        backgroundColor="#1E293B"
        tintColor="#FFFFFF"
      />

      <ScrollView
        style={screenStyles.scrollView}
        contentContainerStyle={screenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <PeopleList />
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
    paddingTop: 16,
    paddingBottom: 16,
  },
});
