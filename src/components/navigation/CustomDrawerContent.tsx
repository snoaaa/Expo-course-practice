import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ClassicAvatar } from '@/components/common/ClassicAvatar';

interface NavMenuItem {
  key: string;
  label: string;
  subtitle: string;
  route: string;
  icon: keyof typeof Ionicons.glyphMap;
  activeIcon: keyof typeof Ionicons.glyphMap;
}

const MENU_ITEMS: NavMenuItem[] = [
  {
    key: 'home',
    label: 'Home',
    subtitle: 'Tabs: Home, People, Fruits',
    route: '/home',
    icon: 'home-outline',
    activeIcon: 'home',
  },
  {
    key: 'preferences',
    label: 'Preferences',
    subtitle: 'Display, Haptics & Cache',
    route: '/preferences',
    icon: 'settings-outline',
    activeIcon: 'settings',
  },
  {
    key: 'profile',
    label: 'My Profile',
    subtitle: 'Abraham • INGE 4 (Sem 7)',
    route: '/profile',
    icon: 'person-outline',
    activeIcon: 'person',
  },
  {
    key: 'about',
    label: 'About',
    subtitle: 'Coursework & Details',
    route: '/about',
    icon: 'information-circle-outline',
    activeIcon: 'information-circle',
  },
  {
    key: 'tasks',
    label: 'Task Tracker (SQLite TD)',
    subtitle: 'expo-sqlite Database Lab',
    route: '/tasks',
    icon: 'checkbox-outline',
    activeIcon: 'checkbox',
  },
];

export const CustomDrawerContent: React.FC<any> = (props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (route: string) => {
    try {
      props.navigation?.dispatch(DrawerActions.closeDrawer());
    } catch {
      // ignore
    }
    router.push(route as any);
  };

  const isItemActive = (item: NavMenuItem) => {
    if (item.key === 'home') {
      return (
        pathname === '/' ||
        pathname === '' ||
        pathname.includes('/home') ||
        pathname.includes('/people') ||
        pathname.includes('/fruits')
      );
    }
    return pathname.includes(item.route);
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={drawerStyles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={drawerStyles.header}>
        <View style={drawerStyles.avatarRow}>
          <ClassicAvatar size={54} initial="A" />
          <View style={drawerStyles.headerTextCol}>
            <Text style={drawerStyles.userName}>Abraham</Text>
            <Text style={drawerStyles.userSub}>INGE 4 • Semester 7</Text>
            <Text style={drawerStyles.courseTag}>Mobile Development</Text>
          </View>
        </View>
      </View>

      <View style={drawerStyles.sectionHeadingWrap}>
        <Text style={drawerStyles.sectionHeading}>MENU</Text>
      </View>

      <View style={drawerStyles.itemsList}>
        {MENU_ITEMS.map((item) => {
          const active = isItemActive(item);

          return (
            <TouchableOpacity
              key={item.key}
              style={[
                drawerStyles.menuItem,
                active && drawerStyles.menuItemActive,
              ]}
              onPress={() => handleNavigate(item.route)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={active ? item.activeIcon : item.icon}
                size={20}
                color={active ? '#0F172A' : '#64748B'}
                style={drawerStyles.menuIcon}
              />

              <View style={drawerStyles.menuItemTextContainer}>
                <Text
                  style={[
                    drawerStyles.menuItemLabel,
                    active && drawerStyles.menuItemLabelActive,
                  ]}
                  numberOfLines={1}
                >
                  {item.label}
                </Text>
                <Text style={drawerStyles.menuItemSubtitle} numberOfLines={1}>
                  {item.subtitle}
                </Text>
              </View>

              {active && <View style={drawerStyles.activeIndicator} />}
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={drawerStyles.footer}>
        <Text style={drawerStyles.footerCopy}>© 2025 Abraham</Text>
        <Text style={drawerStyles.footerSub}>Expo Go • React Native</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const drawerStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 0,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#0F172A',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 48 : 28,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  headerTextCol: {
    flex: 1,
  },
  userName: {
    fontSize: 19,
    fontWeight: '700',
    color: '#F8FAFC',
    letterSpacing: 0.3,
  },
  userSub: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 2,
    fontWeight: '500',
  },
  courseTag: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 4,
    fontWeight: '500',
  },
  sectionHeadingWrap: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 8,
  },
  sectionHeading: {
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 0.8,
  },
  itemsList: {
    flex: 1,
    paddingHorizontal: 10,
    gap: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  menuItemActive: {
    backgroundColor: '#F1F5F9',
  },
  menuIcon: {
    marginRight: 12,
  },
  menuItemTextContainer: {
    flex: 1,
  },
  menuItemLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },
  menuItemLabelActive: {
    color: '#0F172A',
    fontWeight: '700',
  },
  menuItemSubtitle: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 1,
  },
  activeIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#0F172A',
  },
  footer: {
    padding: 18,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    alignItems: 'center',
  },
  footerCopy: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
  },
  footerSub: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 2,
  },
});
