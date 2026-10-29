import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const TravelCard: React.FC = () => {
  const [seePlaceModalVisible, setSeePlaceModalVisible] = useState(false);

  const placeData = {
    name: 'Mount Fuji & Lake Kawaguchi',
    city: 'Fujikawaguchiko',
    country: 'Japan',
    image: require('../../../assets/images/places/mount-fuji.jpg'),
    description:
      'A cultural landmark where volcano peaks reflect across alpine waters, bordered by traditional pine sanctuaries and historic temples.',
    highlights: [
      'Elevated Observation Deck at 2,300m',
      'Seasonal Alpine Walkways',
      'Lake Steamboat Transit',
      'Panoramic Ropeway Station',
    ],
  };

  const handleVisit = () => {
    Alert.alert(
      'Schedule a Visit',
      `Create an itinerary for ${placeData.name} in ${placeData.city}, ${placeData.country}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm Pass',
          onPress: () =>
            Alert.alert(
              'Pass Confirmed',
              `Your travel itinerary for ${placeData.name} has been added.`
            ),
        },
      ]
    );
  };

  return (
    <View style={travelStyles.container}>
      <View style={travelStyles.headerRow}>
        <Text style={travelStyles.sectionTitle}>Travel Destination</Text>
      </View>

      <View style={travelStyles.card}>
        <View style={travelStyles.imageWrapper}>
          <Image
            source={placeData.image}
            style={travelStyles.image}
            resizeMode="cover"
          />
          <View style={travelStyles.coordsBadge}>
            <Text style={travelStyles.coordsText}>35.3606° N, 138.7274° E</Text>
          </View>
        </View>

        <View style={travelStyles.content}>
          <Text style={travelStyles.cityCountry}>
            {placeData.city}, {placeData.country}
          </Text>
          <Text style={travelStyles.placeName}>{placeData.name}</Text>
          <Text style={travelStyles.description}>{placeData.description}</Text>

          {/* 2 buttons: Visit and See the place */}
          <View style={travelStyles.buttonsRow}>
            <TouchableOpacity
              style={[travelStyles.actionBtn, travelStyles.visitBtn]}
              onPress={handleVisit}
              activeOpacity={0.8}
            >
              <Text style={travelStyles.visitBtnText}>Visit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[travelStyles.actionBtn, travelStyles.seePlaceBtn]}
              onPress={() => setSeePlaceModalVisible(true)}
              activeOpacity={0.8}
            >
              <Text style={travelStyles.seePlaceBtnText}>See the place</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal
        visible={seePlaceModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setSeePlaceModalVisible(false)}
      >
        <Pressable
          style={travelStyles.modalBackdrop}
          onPress={() => setSeePlaceModalVisible(false)}
        >
          <View style={travelStyles.previewCard}>
            <Image
              source={placeData.image}
              style={travelStyles.modalImage}
              resizeMode="cover"
            />
            <View style={travelStyles.modalBody}>
              <Text style={travelStyles.modalTitle}>{placeData.name}</Text>
              <Text style={travelStyles.modalSubtitle}>
                {placeData.city}, {placeData.country}
              </Text>

              <Text style={travelStyles.highlightsHeader}>Key Features</Text>
              {placeData.highlights.map((item, index) => (
                <View key={index} style={travelStyles.highlightItem}>
                  <Ionicons name="ellipse" size={5} color="#64748B" style={{ marginRight: 6 }} />
                  <Text style={travelStyles.highlightText}>{item}</Text>
                </View>
              ))}

              <TouchableOpacity
                style={travelStyles.closeModalBtn}
                onPress={() => setSeePlaceModalVisible(false)}
              >
                <Text style={travelStyles.closeModalBtnText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const travelStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  headerRow: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  imageWrapper: {
    position: 'relative',
    height: 180,
    backgroundColor: '#E2E8F0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  coordsBadge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 4,
  },
  coordsText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  content: {
    padding: 14,
  },
  cityCountry: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  placeName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginVertical: 4,
  },
  description: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 18,
    marginBottom: 14,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  visitBtn: {
    backgroundColor: '#0F172A',
  },
  visitBtnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },
  seePlaceBtn: {
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  seePlaceBtnText: {
    color: '#334155',
    fontWeight: '600',
    fontSize: 13,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  previewCard: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  modalImage: {
    width: '100%',
    height: 180,
  },
  modalBody: {
    padding: 16,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  modalSubtitle: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
    marginBottom: 12,
  },
  highlightsHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F172A',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  highlightText: {
    fontSize: 13,
    color: '#475569',
  },
  closeModalBtn: {
    marginTop: 14,
    paddingVertical: 9,
    backgroundColor: '#0F172A',
    borderRadius: 6,
    alignItems: 'center',
  },
  closeModalBtnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },
});
