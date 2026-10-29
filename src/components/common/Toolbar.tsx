import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ToolbarProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  tintColor?: string;
  showMenuButton?: boolean;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  title,
  subtitle,
  backgroundColor = '#0F172A',
  tintColor = '#FFFFFF',
  showMenuButton = true,
}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleOpenMenu = () => {
    try {
      navigation.dispatch(DrawerActions.openDrawer());
    } catch {
      Alert.alert('Menu', 'Swipe from the left edge to open the drawer.');
    }
  };

  return (
    <>
      <View
        style={[
          toolbarStyles.container,
          {
            backgroundColor,
            paddingTop: Math.max(
              insets.top,
              Platform.OS === 'android' ? (StatusBar.currentHeight ?? 12) : 12
            ),
          },
        ]}
      >
        <View style={toolbarStyles.contentRow}>
          {showMenuButton ? (
            <TouchableOpacity
              onPress={handleOpenMenu}
              style={toolbarStyles.iconButton}
              accessibilityLabel="Open Left Menu"
            >
              <Ionicons name="menu-outline" size={24} color={tintColor} />
            </TouchableOpacity>
          ) : (
            <View style={toolbarStyles.iconPlaceholder} />
          )}

          <View style={toolbarStyles.titleContainer}>
            <Text style={[toolbarStyles.title, { color: tintColor }]} numberOfLines={1}>
              {title}
            </Text>
            {subtitle && (
              <Text
                style={[toolbarStyles.subtitle, { color: tintColor, opacity: 0.8 }]}
                numberOfLines={1}
              >
                {subtitle}
              </Text>
            )}
          </View>

          <TouchableOpacity
            onPress={() => setOptionsVisible(true)}
            style={toolbarStyles.iconButton}
            accessibilityLabel="More Options"
          >
            <Ionicons name="ellipsis-vertical-outline" size={21} color={tintColor} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={optionsVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setOptionsVisible(false)}
      >
        <Pressable
          style={toolbarStyles.modalBackdrop}
          onPress={() => setOptionsVisible(false)}
        >
          <View style={toolbarStyles.menuCard}>
            <Text style={toolbarStyles.menuTitle}>Details</Text>

            <View style={toolbarStyles.menuDivider} />

            <View style={toolbarStyles.menuItem}>
              <Text style={toolbarStyles.menuLabel}>Screen</Text>
              <Text style={toolbarStyles.menuValue}>{title}</Text>
            </View>

            <View style={toolbarStyles.menuItem}>
              <Text style={toolbarStyles.menuLabel}>Author</Text>
              <Text style={toolbarStyles.menuValue}>Abraham (INGE 4)</Text>
            </View>

            <TouchableOpacity
              style={toolbarStyles.menuButton}
              onPress={() => {
                setOptionsVisible(false);
                Alert.alert('Info', `${title}\nAuthor: Abraham`);
              }}
            >
              <Text style={toolbarStyles.menuButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

const toolbarStyles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.08)',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 40,
  },
  iconButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPlaceholder: {
    width: 36,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 1,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.4)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 64,
    paddingRight: 16,
  },
  menuCard: {
    width: 240,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  menuTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F172A',
    textTransform: 'uppercase',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 10,
  },
  menuItem: {
    paddingVertical: 4,
  },
  menuLabel: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  menuValue: {
    fontSize: 13,
    color: '#1E293B',
    fontWeight: '600',
    marginTop: 1,
  },
  menuButton: {
    marginTop: 12,
    backgroundColor: '#0F172A',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  menuButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
  },
});
