import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AssetUrls, Colors, Spacing, BorderRadius } from '@/constants/theme';

export default function RideDestinationScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <ImageBackground source={{ uri: AssetUrls.mapImage }} style={styles.map} imageStyle={styles.mapImage}>
          <View style={styles.topOverlay}>
            <View style={styles.searchTopRow}>
              <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                <MaterialIcons name="arrow-back" size={22} color={Colors.black} />
              </TouchableOpacity>
              <View style={styles.searchBox}>
                <MaterialIcons name="location-on" size={20} color={Colors.primary} />
                <TextInput style={styles.searchInput} defaultValue="Landmark 81, Vinhomes Central Park" />
                <TouchableOpacity>
                  <MaterialIcons name="cancel" size={20} color={Colors.gray[400]} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.centerMarker}>
            <Text style={styles.centerMarkerLabel}>Chọn điểm đến</Text>
            <MaterialIcons name="location-on" size={52} color={Colors.primary} />
          </View>

          <View style={styles.rightMapBtns}>
            <TouchableOpacity style={styles.circleBtn}>
              <MaterialIcons name="my-location" size={22} color="#3F3F46" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleBtn}>
              <MaterialIcons name="layers" size={22} color="#3F3F46" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.bottomSheet}>
          <View style={styles.grabber} />
          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <MaterialIcons name="location-on" size={20} color={Colors.primary} />
            </View>
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoTitle}>Địa chỉ đã chọn</Text>
              <Text style={styles.infoSub}>720A Điện Biên Phủ, Phường 22, Bình Thạnh, Thành phố Hồ Chí Minh</Text>
            </View>
            <TouchableOpacity style={styles.changeBtn}>
              <Text style={styles.changeBtnText}>Thay đổi</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.quickWrap}>
            <QuickBtn icon="home" label="Nhà riêng" />
            <QuickBtn icon="work" label="Công ty" />
            <QuickBtn icon="add" label="Khác" />
          </View>

          <TouchableOpacity style={styles.confirmBtn} onPress={() => router.push('/ride/rideVehicle')}>
            <Text style={styles.confirmText}>Xác nhận điểm đến</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

function QuickBtn({ icon, label }: { icon: keyof typeof MaterialIcons.glyphMap; label: string }) {
  return (
    <TouchableOpacity style={styles.quickBtn}>
      <MaterialIcons name={icon} size={16} color="#52525B" />
      <Text style={styles.quickText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F4F4F5' },
  container: { flex: 1, maxWidth: 480, width: '100%', alignSelf: 'center', backgroundColor: '#FFFFFF' },
  map: { flex: 1 },
  mapImage: { resizeMode: 'cover' },
  topOverlay: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30, padding: 16 },
  searchTopRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F4F4F5',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchInput: { flex: 1, fontSize: 14, color: '#27272A', fontWeight: '500' },
  centerMarker: { position: 'absolute', top: '40%', left: 0, right: 0, alignItems: 'center' },
  centerMarkerLabel: {
    marginBottom: 2,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
    backgroundColor: '#F2590D',
  },
  rightMapBtns: { position: 'absolute', right: 16, bottom: 200, gap: 12 },
  circleBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingBottom: 22,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  grabber: { alignSelf: 'center', width: 40, height: 4, borderRadius: 999, backgroundColor: '#E4E4E7', marginBottom: 12 },
  infoRow: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  infoIcon: {
    marginTop: 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF7ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTextWrap: { flex: 1 },
  infoTitle: { fontSize: 14, fontWeight: '700', color: '#181311' },
  infoSub: { marginTop: 2, fontSize: 13, color: '#71717A', lineHeight: 18 },
  changeBtn: {
    borderWidth: 1,
    borderColor: '#FFEDD5',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  changeBtnText: { fontSize: 12, fontWeight: '700', color: '#F2590D' },
  quickWrap: { marginTop: 14, flexDirection: 'row', gap: 8 },
  quickBtn: {
    flex: 1,
    height: 38,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F4F4F5',
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  quickText: { fontSize: 12, fontWeight: '500', color: '#52525B' },
  confirmBtn: {
    marginTop: 14,
    height: 54,
    borderRadius: 16,
    backgroundColor: '#F2590D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: { color: '#FFFFFF', fontSize: 17, fontWeight: '700' },
});
