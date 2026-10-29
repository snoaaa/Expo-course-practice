import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FRUITS, Fruit } from '@/data/fruits';

export const FruitsList: React.FC = () => {
  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);

  return (
    <View style={fruitStyles.container}>
      <View style={fruitStyles.headerRow}>
        <Text style={fruitStyles.sectionTitle}>Fruits Collection</Text>
        <Text style={fruitStyles.hintText}>
          Tap any fruit to view nutritional details.
        </Text>
      </View>

      <View style={fruitStyles.list}>
        {FRUITS.map((fruit) => (
          <TouchableOpacity
            key={fruit.id}
            style={fruitStyles.card}
            onPress={() => setSelectedFruit(fruit)}
            activeOpacity={0.7}
          >
            <Image
              source={fruit.photo}
              style={fruitStyles.image}
              resizeMode="cover"
            />

            <View style={fruitStyles.content}>
              <View style={fruitStyles.titleRow}>
                <Text style={fruitStyles.fruitName}>{fruit.name}</Text>
                <View style={fruitStyles.calorieBadge}>
                  <Text style={fruitStyles.calorieText}>
                    {fruit.caloriesPer100g} kcal
                  </Text>
                </View>
              </View>

              <Text style={fruitStyles.botanical}>{fruit.botanicalName}</Text>
              <Text style={fruitStyles.taste} numberOfLines={1}>
                {fruit.taste}
              </Text>
              <Text style={fruitStyles.originText} numberOfLines={1}>
                Origin: {fruit.origin}
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={16} color="#94A3B8" style={{ marginRight: 12 }} />
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        visible={selectedFruit !== null}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedFruit(null)}
      >
        <Pressable
          style={fruitStyles.modalOverlay}
          onPress={() => setSelectedFruit(null)}
        >
          <View style={fruitStyles.modalCard}>
            {selectedFruit && (
              <>
                <Image
                  source={selectedFruit.photo}
                  style={fruitStyles.modalImage}
                  resizeMode="cover"
                />

                <View style={fruitStyles.modalContent}>
                  <Text style={fruitStyles.modalTitle}>{selectedFruit.name}</Text>
                  <Text style={fruitStyles.modalBotanical}>
                    {selectedFruit.botanicalName} • {selectedFruit.caloriesPer100g} kcal / 100g
                  </Text>

                  <Text style={fruitStyles.modalDesc}>
                    {selectedFruit.description}
                  </Text>

                  <Text style={fruitStyles.infoBoxTitle}>Vitamins & Nutrients</Text>
                  <View style={fruitStyles.pillContainer}>
                    {selectedFruit.vitamins.map((vit, idx) => (
                      <View key={idx} style={fruitStyles.nutrientPill}>
                        <Text style={fruitStyles.nutrientText}>{vit}</Text>
                      </View>
                    ))}
                  </View>

                  <TouchableOpacity
                    style={fruitStyles.closeBtn}
                    onPress={() => setSelectedFruit(null)}
                  >
                    <Text style={fruitStyles.closeBtnText}>Done</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const fruitStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  headerRow: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },
  hintText: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  list: {
    gap: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  image: {
    width: 90,
    height: 90,
    backgroundColor: '#E2E8F0',
  },
  content: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fruitName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    flex: 1,
  },
  calorieBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  calorieText: {
    color: '#475569',
    fontSize: 10,
    fontWeight: '700',
  },
  botanical: {
    fontSize: 11,
    fontStyle: 'italic',
    color: '#64748B',
    marginTop: 1,
  },
  taste: {
    fontSize: 12,
    color: '#475569',
    marginTop: 3,
  },
  originText: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 3,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalCard: {
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
    height: 150,
  },
  modalContent: {
    padding: 18,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },
  modalBotanical: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#64748B',
    marginTop: 2,
    marginBottom: 10,
  },
  modalDesc: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 18,
    marginBottom: 14,
  },
  infoBoxTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0F172A',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 16,
  },
  nutrientPill: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  nutrientText: {
    fontSize: 11,
    color: '#334155',
    fontWeight: '500',
  },
  closeBtn: {
    backgroundColor: '#0F172A',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  closeBtnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },
});
