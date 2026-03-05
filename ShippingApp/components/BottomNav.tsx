import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, Spacing } from '@/constants/theme';

interface NavItemProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  active?: boolean;
  onPress?: () => void;
}

function NavItem({ icon, label, active, onPress }: NavItemProps) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <MaterialIcons name={icon} size={22} color={active ? Colors.primary : Colors.gray[400]} />
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

interface BottomNavProps {
  items: NavItemProps[];
}

export default function BottomNav({ items }: BottomNavProps) {
  return (
    <View style={styles.bottomNav}>
      {items.map((item, index) => (
        <NavItem key={`${item.icon}-${index}`} {...item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    borderTopWidth: 1,
    borderTopColor: Colors.gray[100],
    backgroundColor: Colors.white,
    paddingHorizontal: 26,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xxl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    gap: 2,
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.gray[400],
  },
  navLabelActive: {
    color: Colors.primary,
    fontWeight: '700',
  },
});
