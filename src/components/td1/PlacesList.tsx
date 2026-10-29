import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PLACES, PlaceItem } from '@/data/places';

export const PlacesList: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<PlaceItem | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handlePlacePress = (place: PlaceItem) => {
    setSelectedPlace(place);
  };

  const handleChoice = (choice: 'Cancel' | 'Go there' | 'Later') => {
    if (!selectedPlace) return;

    const currentPlace = selectedPlace;
    setSelectedPlace(null);

    if (choice === 'Cancel') {
      setFeedbackMessage(`Cancelled navigation to ${currentPlace.name}.`);
    } else if (choice === 'Go there') {
      setFeedbackMessage(`Navigating to ${currentPlace.name}, ${currentPlace.city}.`);
    } else if (choice === 'Later') {
      setFeedbackMessage(`Saved ${currentPlace.name} for later.`);
    }

    setTimeout(() => {
      setFeedbackMessage(null);
    }, 3500);
  };

  return (
    <View style={placeStyles.container}>
      <View style={placeStyles.headerRow}>
        <Text style={placeStyles.sectionTitle}>Favorite Places</Text>
        <Text style={placeStyles.hintText}>
          Tap any destination to choose an action.
        </Text>
      </View>

      {feedbackMessage && (
        <View style={placeStyles.feedbackBanner}>
          <Ionicons name="information-circle-outline" size={16} color="#0F172A" />
          <Text style={placeStyles.feedbackText}>{feedbackMessage}</Text>
        </View>
      )}

      <View style={placeStyles.listContainer}>
        {PLACES.map((place) => (
          <TouchableOpacity
            key={place.id}
            style={placeStyles.placeCard}
            onPress={() => handlePlacePress(place)}
            activeOpacity={0.7}
          >
            <View
              style={[
                placeStyles.colorIndicator,
                { backgroundColor: place.backgroundColor },
              ]}
            />

            <View style={placeStyles.placeDetails}>
              <View style={placeStyles.placeTitleRow}>
                <Text style={placeStyles.placeName} numberOfLines={1}>
                  {place.name}
                </Text>
                <View
                  style={[
                    placeStyles.colorPill,
                    { borderColor: place.backgroundColor },
                  ]}
                >
                  <Text
                    style={[
                      placeStyles.colorPillText,
                      { color: place.backgroundColor },
                    ]}
                  >
                    {place.city}
                  </Text>
                </View>
              </View>

              <Text style={placeStyles.placeAddress} numberOfLines={1}>
                {place.address}
              </Text>
              <Text style={placeStyles.placeCity}>
                {place.city}, {place.country}
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={16} color="#94A3B8" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Confirmation Dialog Box (Cancel, Go there, Later) */}
      <Modal
        visible={selectedPlace !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedPlace(null)}
      >
        <Pressable
          style={placeStyles.modalOverlay}
          onPress={() => setSelectedPlace(null)}
        >
          <View style={placeStyles.dialogBox}>
            <Text style={placeStyles.dialogTitle}>Confirm Choice</Text>
            <Text style={placeStyles.dialogMessage}>
              Select an action for {selectedPlace?.name}:
            </Text>
            <Text style={placeStyles.dialogLocation}>
              {selectedPlace?.address}, {selectedPlace?.city}
            </Text>

            <View style={placeStyles.dialogButtonsCol}>
              <TouchableOpacity
                style={[placeStyles.dialogBtn, placeStyles.btnGoThere]}
                onPress={() => handleChoice('Go there')}
                activeOpacity={0.8}
              >
                <Text style={placeStyles.btnGoThereText}>Go there</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[placeStyles.dialogBtn, placeStyles.btnLater]}
                onPress={() => handleChoice('Later')}
                activeOpacity={0.8}
              >
                <Text style={placeStyles.btnLaterText}>Later</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[placeStyles.dialogBtn, placeStyles.btnCancel]}
                onPress={() => handleChoice('Cancel')}
                activeOpacity={0.8}
              >
                <Text style={placeStyles.btnCancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const placeStyles = StyleSheet.create({
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
  hintText: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  feedbackBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#F1F5F9',
    borderColor: '#CBD5E1',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 6,
    marginBottom: 10,
  },
  feedbackText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#1E293B',
  },
  listContainer: {
    gap: 8,
  },
  placeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
    paddingRight: 14,
  },
  colorIndicator: {
    width: 4,
    alignSelf: 'stretch',
    marginRight: 12,
  },
  placeDetails: {
    flex: 1,
    paddingVertical: 12,
  },
  placeTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 8,
    marginBottom: 3,
  },
  placeName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    flex: 1,
  },
  colorPill: {
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
    marginLeft: 6,
  },
  colorPillText: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  placeAddress: {
    fontSize: 12,
    color: '#475569',
  },
  placeCity: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  dialogBox: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  dialogTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
  },
  dialogMessage: {
    fontSize: 13,
    color: '#475569',
  },
  dialogLocation: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
    marginBottom: 16,
  },
  dialogButtonsCol: {
    gap: 8,
  },
  dialogBtn: {
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGoThere: {
    backgroundColor: '#0F172A',
  },
  btnGoThereText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  btnLater: {
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  btnLaterText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },
  btnCancel: {
    backgroundColor: 'transparent',
  },
  btnCancelText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#64748B',
  },
});
