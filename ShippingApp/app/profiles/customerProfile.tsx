import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const AVATAR_URI =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBwegcoQ7hoo-zkeXCKgUZ3V1odgbmfqdBzkbQVwMn-7wfe7vXQ25gU3QNPDlkX9t8tc8vG91s8qa3Nl-gymL-BB1g5SkYiMDqPuXkB5nVPRjBouGNF1FFtKIyY2HF-cGG3-egxb8X9awMk9ZrfgnWK4IAgFLaEabwf7j1RMQLdskNeICN7VDU-wBmobanSF9bEh9z4MvukExjjtAVRnNbJx2gFYgbtTTIbHHRneCt8_Argo0yl_Bu7xe1yhPGCswjBwj8weHd_ow24';

export default function CustomerProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft} />
        <Text style={styles.headerTitle}>Cá nhân</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <MaterialIcons name="settings" size={22} color="#181311" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.main} contentContainerStyle={styles.mainContent} showsVerticalScrollIndicator={false}>
        <View style={styles.profileBlock}>
          <Image source={{ uri: AVATAR_URI }} style={styles.avatar} />
          <Text style={styles.name}>Nguyễn Văn An</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Chỉnh sửa hồ sơ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuList}>
          <MenuRow icon="location-on" iconBg="#DBEAFE" iconColor="#2563EB" label="Địa chỉ đã lưu" />
          <MenuRow icon="payments" iconBg="#DCFCE7" iconColor="#16A34A" label="Phương thức thanh toán" />
          <MenuRow
            icon="electric-rickshaw"
            iconBg="#FFEDD5"
            iconColor="#F2590D"
            label="Trở thành đối tác của chúng tôi"
            onPress={() => router.push('/driverLogin')}
          />
          <MenuRow icon="help" iconBg="#F3F4F6" iconColor="#6B7280" label="Trung tâm trợ giúp" />
        </View>

        <View style={styles.bottomActions}>
          <TouchableOpacity style={styles.logoutButton}>
            <MaterialIcons name="logout" size={20} color="#EF4444" />
            <Text style={styles.logoutText}>Đăng xuất</Text>
          </TouchableOpacity>
          <Text style={styles.version}>Phiên bản 2.4.0</Text>
        </View>
      </ScrollView>

      <View style={styles.navBar}>
        <NavItem icon="home" label="Trang chủ" active={false} onPress={() => router.push('/(tabs)')} />
        <NavItem icon="receipt-long" label="Hoạt động" active={false} onPress={() => router.push('/(tabs)/explore')} />
        <NavItem icon="notifications" label="Thông báo" active={false} onPress={() => router.push('/notifications')} />
        <NavItem icon="person" label="Tôi" active />
      </View>

      <View style={styles.homeIndicator} />
    </SafeAreaView>
  );
}

function MenuRow({
  icon,
  iconBg,
  iconColor,
  label,
  onPress,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  iconBg: string;
  iconColor: string;
  label: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.menuRow} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.menuIcon, { backgroundColor: iconBg }]}>
        <MaterialIcons name={icon} size={20} color={iconColor} />
      </View>
      <Text style={styles.menuLabel}>{label}</Text>
      <MaterialIcons name="chevron-right" size={22} color="#9CA3AF" />
    </TouchableOpacity>
  );
}

function NavItem({
  icon,
  label,
  active,
  onPress,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  active: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress} activeOpacity={0.8}>
      <MaterialIcons name={icon} size={22} color={active ? '#F2590D' : '#9CA3AF'} />
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    backgroundColor: '#FFFFFF',
  },
  headerLeft: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#181311',
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
  },
  mainContent: {
    paddingBottom: 128,
  },
  profileBlock: {
    alignItems: 'center',
    paddingTop: 28,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: 'rgba(242, 89, 13, 0.2)',
    marginBottom: 14,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#181311',
    marginBottom: 10,
  },
  editButton: {
    paddingHorizontal: 22,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 999,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#181311',
  },
  menuList: {
    marginTop: 8,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F9FAFB',
    backgroundColor: '#FFFFFF',
    gap: 12,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#181311',
  },
  bottomActions: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  logoutButton: {
    height: 54,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EF4444',
  },
  version: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 12,
    color: '#9CA3AF',
  },
  navBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 84,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    gap: 1,
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#9CA3AF',
  },
  navLabelActive: {
    color: '#F2590D',
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 6,
    left: '50%',
    marginLeft: -64,
    width: 128,
    height: 6,
    borderRadius: 999,
    backgroundColor: '#E5E7EB',
  },
});

