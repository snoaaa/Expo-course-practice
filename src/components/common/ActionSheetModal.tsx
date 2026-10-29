import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export type ActionOption = 'Call' | 'Info' | 'Share' | 'Delete' | 'Cancel';

interface ActionSheetModalProps {
  visible: boolean;
  personName: string;
  onClose: () => void;
  onSelectOption: (option: ActionOption) => void;
}

interface OptionConfig {
  key: ActionOption;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  isDestructive?: boolean;
}

const PRIMARY_OPTIONS: OptionConfig[] = [
  { key: 'Call', label: 'Call Contact', icon: 'call-outline' },
  { key: 'Info', label: 'View Contact Info', icon: 'information-circle-outline' },
  { key: 'Share', label: 'Share Contact Card', icon: 'share-social-outline' },
  { key: 'Delete', label: 'Delete from Directory', icon: 'trash-outline', isDestructive: true },
];

export const ActionSheetModal: React.FC<ActionSheetModalProps> = ({
  visible,
  personName,
  onClose,
  onSelectOption,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={sheetStyles.overlay}>
        <Pressable style={sheetStyles.backdrop} onPress={onClose} />

        <View style={sheetStyles.sheetContainer}>
          <View style={sheetStyles.header}>
            <Text style={sheetStyles.headerTag}>CONTACT</Text>
            <Text style={sheetStyles.personName} numberOfLines={1}>
              {personName || 'Contact'}
            </Text>
          </View>

          <View style={sheetStyles.actionGroup}>
            {PRIMARY_OPTIONS.map((item, index) => (
              <React.Fragment key={item.key}>
                {index > 0 && <View style={sheetStyles.divider} />}
                <TouchableOpacity
                  style={sheetStyles.optionRow}
                  onPress={() => onSelectOption(item.key)}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name={item.icon}
                    size={19}
                    color={item.isDestructive ? '#DC2626' : '#334155'}
                    style={sheetStyles.optionIcon}
                  />
                  <Text
                    style={[
                      sheetStyles.optionLabel,
                      item.isDestructive && sheetStyles.destructiveLabel,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </View>

          <TouchableOpacity
            style={sheetStyles.cancelButton}
            onPress={() => onSelectOption('Cancel')}
            activeOpacity={0.8}
          >
            <Ionicons name="close-outline" size={18} color="#64748B" style={sheetStyles.optionIcon} />
            <Text style={sheetStyles.cancelLabel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const sheetStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    paddingHorizontal: 12,
    paddingBottom: 24,
  },
  backdrop: {
    flex: 1,
  },
  sheetContainer: {
    width: '100%',
    maxWidth: 440,
    alignSelf: 'center',
    gap: 8,
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  headerTag: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 0.8,
  },
  personName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 2,
  },
  actionGroup: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 16,
  },
  optionIcon: {
    marginRight: 12,
  },
  optionLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1E293B',
  },
  destructiveLabel: {
    color: '#DC2626',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
  },
  cancelButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cancelLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#475569',
  },
});
