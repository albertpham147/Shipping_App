import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AssetUrls, Colors } from '@/constants/theme';

export default function RideSearchScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.mapSection}>
          <ImageBackground source={{ uri: AssetUrls.mapImage }} style={styles.mapImage} imageStyle={styles.mapImageInner}>
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
              <MaterialIcons name="arrow-back" size={22} color="#181311" />
            </TouchableOpacity>

            <View style={styles.centerPinWrap}>
              <Text style={styles.pinLabel}>Bạn đang ở đây</Text>
              <View style={styles.pingCircle} />
              <MaterialIcons name="location-on" size={40} color="#F2590D" />
            </View>
          </ImageBackground>
        </View>

        <View style={styles.sheet}>
          <View style={styles.grabber} />

          <View style={styles.searchCard}>
            <View style={styles.dashLine} />
            <View style={styles.inputRow}>
              <View style={styles.startDot} />
              <TextInput style={styles.inputNormal} defaultValue="123 Nguyễn Huệ, Quận 1" placeholder="Điểm đón của bạn" />
            </View>
            <View style={styles.divider} />
            <View style={styles.inputRow}>
              <MaterialIcons name="location-on" size={22} color="#F2590D" />
              <TextInput style={styles.inputPrimary} placeholder="Bạn muốn đi đâu?" autoFocus />
              <TouchableOpacity>
                <MaterialIcons name="map" size={18} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Địa điểm gần đây</Text>
            <TouchableOpacity>
              <Text style={styles.editText}>Chỉnh sửa</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
            <LocationRow icon="home" title="Nhà" subtitle="456 Lê Lợi, Phường Bến Thành, Quận 1" />
            <LocationRow icon="work" title="Công ty" subtitle="Bitexco Financial Tower, 2 Hải Triều, Q1" />
            <LocationRow icon="history" title="Vincom Center Đồng Khởi" subtitle="72 Lê Thánh Tôn, Quận 1, TP.HCM" />
            <View style={styles.spacer20} />
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.continueBtn} onPress={() => router.push('/ride/rideDestination')}>
              <Text style={styles.continueText}>Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function LocationRow({ icon, title, subtitle }: { icon: keyof typeof MaterialIcons.glyphMap; title: string; subtitle: string }) {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.rowIcon}>
        <MaterialIcons name={icon} size={20} color="#6B7280" />
      </View>
      <View style={styles.rowBody}>
        <Text style={styles.rowTitle}>{title}</Text>
        <Text style={styles.rowSub} numberOfLines={1}>
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: Colors.background.page },
  container: { flex: 1, maxWidth: 480, width: '100%', alignSelf: 'center', backgroundColor: Colors.white },
  spacer20: { height: 20 },
  mapSection: { height: '45%', backgroundColor: '#E5E7EB' },
  mapImage: { flex: 1 },
  mapImageInner: { resizeMode: 'cover' },
  backBtn: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerPinWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinLabel: {
    marginBottom: 4,
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
    backgroundColor: '#F2590D',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  pingCircle: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(242,89,13,0.2)',
  },
  sheet: {
    flex: 1,
    marginTop: -24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  grabber: { alignSelf: 'center', marginTop: 12, width: 40, height: 4, borderRadius: 999, backgroundColor: '#E4E4E7' },
  searchCard: {
    marginTop: 12,
    borderRadius: 16,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    padding: 12,
  },
  dashLine: {
    position: 'absolute',
    left: 26,
    top: 34,
    bottom: 34,
    width: 2,
    borderLeftWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#D4D4D8',
  },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  startDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#22C55E',
    borderWidth: 4,
    borderColor: '#DCFCE7',
  },
  inputNormal: { flex: 1, fontSize: 14, fontWeight: '500', color: '#181311', paddingVertical: 2 },
  divider: { marginVertical: 10, height: 1, backgroundColor: '#F3F4F6', marginLeft: 34 },
  inputPrimary: { flex: 1, fontSize: 14, fontWeight: '700', color: '#F2590D', paddingVertical: 2 },
  listHeader: { marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  listTitle: { fontSize: 14, fontWeight: '700', color: '#27272A' },
  editText: { fontSize: 12, fontWeight: '700', color: '#F2590D' },
  list: { marginTop: 8, flex: 1 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#FAFAFA',
  },
  rowIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F4F4F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowBody: { flex: 1 },
  rowTitle: { fontSize: 14, fontWeight: '700', color: '#181311' },
  rowSub: { marginTop: 2, fontSize: 12, color: '#71717A' },
  footer: { paddingTop: 12, paddingBottom: 20, borderTopWidth: 1, borderTopColor: '#F3F4F6' },
  continueBtn: {
    height: 54,
    borderRadius: 16,
    backgroundColor: '#F2590D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueText: { color: '#FFFFFF', fontSize: 18, fontWeight: '700' },
});
