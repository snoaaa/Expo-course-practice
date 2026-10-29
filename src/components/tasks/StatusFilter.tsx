import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '@/styles/appStyles';

interface StatusFilterProps {
  activeFilter: string;
  onSelectFilter: (filter: string) => void;
}

const FILTERS = ['All', 'Pending', 'Ongoing', 'Completed'];

export const StatusFilter: React.FC<StatusFilterProps> = ({
  activeFilter,
  onSelectFilter,
}) => {
  return (
    <View style={styles.filterContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {FILTERS.map((filter) => {
          const isActive = activeFilter.toLowerCase() === filter.toLowerCase();
          return (
            <TouchableOpacity
              key={filter}
              style={[styles.filterPill, isActive && styles.filterPillActive]}
              onPress={() => onSelectFilter(filter)}
              activeOpacity={0.7}
            >
              <Text
                style={[styles.filterText, isActive && styles.filterTextActive]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
