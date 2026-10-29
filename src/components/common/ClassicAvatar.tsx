import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

interface ClassicAvatarProps {
  size?: number;
  initial?: string;
}

export const ClassicAvatar: React.FC<ClassicAvatarProps> = ({
  size = 64,
  initial = 'A',
}) => {
  const fontSize = Math.round(size * 0.44);
  const borderWidth = Math.max(2, Math.round(size * 0.035));

  return (
    <View
      style={[
        avatarStyles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth,
        },
      ]}
    >
      <Text style={[avatarStyles.initial, { fontSize }]}>{initial}</Text>
    </View>
  );
};

const avatarStyles = StyleSheet.create({
  container: {
    backgroundColor: '#0F172A',
    borderColor: '#94A3B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initial: {
    color: '#F8FAFC',
    fontWeight: '700',
    fontFamily: Platform.select({ ios: 'Georgia', android: 'serif', default: 'serif' }),
  },
});
