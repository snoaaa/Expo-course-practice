import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FooterProps {
  authorName?: string;
  courseTag?: string;
}

export const Footer: React.FC<FooterProps> = ({
  authorName = 'Abraham',
  courseTag = 'Mobile Development',
}) => {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.text}>
        © Copyright 2025 {authorName}
      </Text>
      <Text style={footerStyles.subText}>
        {courseTag}
      </Text>
    </View>
  );
};

const footerStyles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },
  subText: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 3,
  },
});
