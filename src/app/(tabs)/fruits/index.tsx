import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Toolbar } from '@/components/common/Toolbar';
import { Footer } from '@/components/common/Footer';
import { FruitsList } from '@/components/fruits/FruitsList';

export default function FruitsTabScreen() {
  return (
    <View style={screenStyles.screen}>
      <Toolbar
        title="Fruits Catalog"
        subtitle="Assignment • Tab Navigation"
        backgroundColor="#143628"
        tintColor="#FFFFFF"
      />

      <ScrollView
        style={screenStyles.scrollView}
        contentContainerStyle={screenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <FruitsList />
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
