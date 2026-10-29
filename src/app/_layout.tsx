import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { CustomDrawerContent } from '@/components/navigation/CustomDrawerContent';

export default function RootDrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props: any) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: '#2563EB',
          drawerInactiveTintColor: '#475569',
          drawerActiveBackgroundColor: '#EFF6FF',
          drawerLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
            marginLeft: -8,
          },
          drawerItemStyle: {
            borderRadius: 8,
            marginVertical: 3,
            paddingHorizontal: 8,
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerItemStyle: { display: 'none' },
          }}
        />

        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color as string} />
            ),
          }}
        />

        <Drawer.Screen
          name="preferences/index"
          options={{
            drawerLabel: 'Preferences',
            title: 'Preferences',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color as string} />
            ),
          }}
        />

        <Drawer.Screen
          name="profile/index"
          options={{
            drawerLabel: 'My Profile',
            title: 'My Profile',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color as string} />
            ),
          }}
        />

        <Drawer.Screen
          name="about/index"
          options={{
            drawerLabel: 'About',
            title: 'About',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="information-circle-outline" size={size} color={color as string} />
            ),
          }}
        />

        <Drawer.Screen
          name="tasks/index"
          options={{
            drawerLabel: 'Task Tracker (SQLite TD)',
            title: 'Task Tracker',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="checkbox-outline" size={size} color={color as string} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
