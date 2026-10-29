import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { VEHICLES, Vehicle } from '@/data/vehicles';

export const VehicleList: React.FC = () => {
  const renderVehicle = ({ item }: { item: Vehicle }) => (
    <View style={vehicleStyles.card}>
      <View style={vehicleStyles.photoContainer}>
        <Image
          source={item.photo}
          style={vehicleStyles.photo}
          resizeMode="cover"
        />
        <View style={vehicleStyles.hpBadge}>
          <Ionicons name="speedometer-outline" size={12} color="#FFFFFF" />
          <Text style={vehicleStyles.hpText}>{item.horsepower} HP</Text>
        </View>
      </View>

      <View style={vehicleStyles.infoContainer}>
        <Text style={vehicleStyles.brand}>{item.brand}</Text>
        <Text style={vehicleStyles.model} numberOfLines={1}>
          {item.model}
        </Text>
        <Text style={vehicleStyles.category} numberOfLines={1}>
          {item.category}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={vehicleStyles.container}>
      <View style={vehicleStyles.headerRow}>
        <Text style={vehicleStyles.sectionTitle}>Vehicles</Text>
      </View>

      <FlatList
        data={VEHICLES}
        keyExtractor={(item) => item.id}
        renderItem={renderVehicle}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={vehicleStyles.listContent}
      />
    </View>
  );
};

const vehicleStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerRow: {
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  listContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  card: {
    width: 240,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  photoContainer: {
    position: 'relative',
    height: 130,
    backgroundColor: '#E2E8F0',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  hpBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 4,
  },
  hpText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  infoContainer: {
    padding: 12,
  },
  brand: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  model: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    marginVertical: 2,
  },
  category: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 16,
  },
});
