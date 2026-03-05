import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, Spacing, BorderRadius, ButtonHeights } from '@/constants/theme';

function DriverPin({ top, left, right }: { top?: string; left?: string; right?: string }) {
  return (
    <View style={[styles.driverPinWrap, top ? { top } : null, left ? { left } : null, right ? { right } : null]}>
      <View style={styles.driverPinHead}>
        <MaterialIcons name="two-wheeler" size={16} color={Colors.white} style={styles.pinIconUpright} />
      </View>
      <View style={styles.driverPinShadow} />
    </View>
  );
}

export default function RideSearchingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.mapArea}>
          <View style={styles.mapTexture} />
          <View style={[styles.park, styles.parkA]} />
          <View style={[styles.park, styles.parkB]} />
          <View style={[styles.building, styles.buildingA]} />
          <View style={[styles.building, styles.buildingB]} />
          <View style={[styles.building, styles.buildingC]} />
          <View style={[styles.building, styles.buildingD]} />
          <View style={[styles.roadH, { top: '35%' }]} />
          <View style={[styles.roadH, { top: '75%' }]} />
          <View style={[styles.roadV, { left: '30%' }]} />
          <View style={[styles.roadV, { right: '25%' }]} />

          <View style={styles.userWrap}>
            <View style={styles.userPulseOuter} />
            <View style={styles.userPulseInner} />
            <View style={styles.userDotOuter}>
              <View style={styles.userDotInner} />
            </View>
          </View>

          <DriverPin top="28%" left="22%" />
          <DriverPin top="42%" right="18%" />
          <DriverPin top="20%" right="35%" />
          <DriverPin top="52%" left="30%" />

          <View style={styles.backWrap}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <MaterialIcons name="arrow-back-ios-new" size={20} color="#27272A" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sheet}>
          <View style={styles.grabberWrap}>
            <View style={styles.grabber} />
          </View>

          <View style={styles.content}>
            <View style={styles.spinnerWrap}>
              <View style={styles.spinnerRing} />
              <View style={styles.spinnerCenter}>
                <MaterialIcons name="two-wheeler" size={24} color={Colors.white} />
              </View>
            </View>

            <Text style={styles.title}>Đang tìm tài xế trên bản đồ...</Text>
            <Text style={styles.subtitle}>Chúng tôi đang kết nối với tài xế gần nhất</Text>

            <View style={styles.tripCard}>
              <View style={styles.tripLeft}>
                <View style={styles.dotBlue} />
                <View style={styles.dotLine} />
                <View style={styles.dotOrange} />
              </View>
              <View style={styles.tripMid}>
                <Text style={styles.tripLabel}>ĐIỂM ĐÓN</Text>
                <Text style={styles.tripValue}>123 Đường Lê Lợi, Quận 1</Text>
                <Text style={[styles.tripLabel, { marginTop: 12 }]}>ĐIỂM ĐẾN</Text>
                <Text style={styles.tripValue}>Landmark 81, Bình Thạnh</Text>
              </View>
              <View style={styles.tripRight}>
                <Text style={styles.tripLabel}>DỊCH VỤ</Text>
                <View style={styles.serviceRow}>
                  <Text style={styles.serviceText}>Xe máy</Text>
                  <View style={styles.serviceIconWrap}>
                    <MaterialIcons name="two-wheeler" size={18} color="#F2590D" />
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.testButton} onPress={() => router.push('/ride/rideFound')}>
              <Text style={styles.testButtonText}>Đã tìm thấy tài xế (test)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton}>
              <MaterialIcons name="close" size={20} color="#71717A" />
              <Text style={styles.cancelText}>Hủy chuyến</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.indicatorWrap}>
            <View style={styles.indicator} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexOne: { flex: 1 },
  page: { flex: 1, backgroundColor: Colors.gray[100] },
  container: { flex: 1, maxWidth: 480, width: '100%', alignSelf: 'center', backgroundColor: Colors.white, overflow: 'hidden' },
  mapArea: { height: '65%', backgroundColor: '#F8F9FA', overflow: 'hidden' },
  mapTexture: { ...StyleSheet.absoluteFillObject, opacity: 0.3, backgroundColor: '#E5E7EB' },
  park: { position: 'absolute', backgroundColor: '#DCFCE7', borderColor: '#BBF7D0', borderWidth: 1, borderRadius: 8 },
  parkA: { width: 128, height: 160, top: 40, left: -20, transform: [{ rotate: '12deg' }] },
  parkB: { width: 96, height: 96, top: '50%', right: -10 },
  building: { position: 'absolute', backgroundColor: '#F1F5F9', borderColor: '#E2E8F0', borderWidth: 1, borderRadius: 4 },
  buildingA: { width: 64, height: 48, top: 80, left: 96 },
  buildingB: { width: 80, height: 64, top: 192, left: 48 },
  buildingC: { width: 48, height: 80, top: 128, right: 128 },
  buildingD: { width: 96, height: 64, bottom: 80, left: 160 },
  roadH: { position: 'absolute', left: 0, right: 0, height: 24, backgroundColor: '#FFFFFF', borderTopWidth: 2, borderBottomWidth: 2, borderColor: '#CBD5E1' },
  roadV: { position: 'absolute', top: 0, bottom: 0, width: 24, backgroundColor: '#FFFFFF', borderLeftWidth: 2, borderRightWidth: 2, borderColor: '#CBD5E1' },
  userWrap: { position: 'absolute', top: '55%', left: '50%', marginLeft: -12, marginTop: -12, alignItems: 'center', justifyContent: 'center' },
  userPulseOuter: { position: 'absolute', width: 96, height: 96, borderRadius: 48, backgroundColor: 'rgba(59,130,246,0.25)' },
  userPulseInner: { position: 'absolute', width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(59,130,246,0.15)' },
  userDotOuter: { width: 24, height: 24, borderRadius: 12, backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center' },
  userDotInner: { width: 14, height: 14, borderRadius: 7, backgroundColor: '#3B82F6', borderWidth: 2, borderColor: '#BFDBFE' },
  driverPinWrap: { position: 'absolute', alignItems: 'center' },
  driverPinHead: {
    width: 40,
    height: 40,
    borderTopLeftRadius: BorderRadius.full,
    borderTopRightRadius: BorderRadius.full,
    borderBottomLeftRadius: BorderRadius.full,
    backgroundColor: Colors.primary,
    transform: [{ rotate: '45deg' }],
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  pinIconUpright: {
    transform: [{ rotate: '-45deg' }],
  },
  driverPinShadow: { marginTop: 6, width: 24, height: 8, borderRadius: 99, backgroundColor: 'rgba(0,0,0,0.2)' },
  backWrap: { position: 'absolute', top: 48, left: 16, zIndex: 20 },
  backButton: { width: 44, height: 44, borderRadius: 22, backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center', elevation: 4 },
  sheet: {
    flex: 1,
    marginTop: -24,
    backgroundColor: Colors.white,
    borderTopLeftRadius: BorderRadius.xxxl,
    borderTopRightRadius: BorderRadius.xxxl,
    shadowColor: Colors.black,
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  grabberWrap: { alignItems: 'center', paddingTop: 12 },
  grabber: { width: 48, height: 6, borderRadius: 99, backgroundColor: '#E4E4E7' },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 10 },
  spinnerWrap: { alignSelf: 'center', width: 80, height: 80, alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  spinnerRing: { position: 'absolute', width: 72, height: 72, borderRadius: 36, borderWidth: 5, borderColor: Colors.primary, opacity: 0.25 },
  spinnerCenter: { width: 48, height: 48, borderRadius: 24, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center' },
  title: { textAlign: 'center', fontSize: 20, fontWeight: '700', color: Colors.black },
  subtitle: { textAlign: 'center', marginTop: 6, fontSize: 13, fontWeight: '500', color: '#71717A' },
  tripCard: { marginTop: 20, backgroundColor: '#FAFAFA', borderRadius: 16, borderWidth: 1, borderColor: '#F3F4F6', padding: 14, flexDirection: 'row' },
  tripLeft: { width: 16, alignItems: 'center', marginTop: 4 },
  dotBlue: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#3B82F6' },
  dotLine: { width: 1.5, height: 24, backgroundColor: '#E4E4E7', marginVertical: 4 },
  dotOrange: { width: 10, height: 10, borderRadius: 5, backgroundColor: Colors.primary },
  tripMid: { flex: 1, paddingLeft: 10 },
  tripRight: { width: 110, borderLeftWidth: 1, borderLeftColor: '#E4E4E7', paddingLeft: 12 },
  tripLabel: { fontSize: 10, fontWeight: '700', color: '#A1A1AA', letterSpacing: 0.6 },
  tripValue: { marginTop: 2, fontSize: 14, fontWeight: '600', color: '#27272A' },
  serviceRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8, justifyContent: 'flex-end' },
  serviceText: { fontSize: 14, fontWeight: '700', color: Colors.black, marginRight: 8 },
  serviceIconWrap: { width: 28, height: 28, borderRadius: 8, backgroundColor: '#FFF0E6', alignItems: 'center', justifyContent: 'center' },
  footer: { paddingHorizontal: 24, paddingTop: 10, gap: 10 },
  testButton: {
    height: ButtonHeights.md,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  testButtonText: { fontSize: 14, fontWeight: '700', color: Colors.white },
  cancelButton: {
    height: 54,
    borderRadius: 16,
    backgroundColor: '#F4F4F5',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  cancelText: { fontSize: 17, fontWeight: '700', color: '#71717A' },
  indicatorWrap: { paddingVertical: 12, alignItems: 'center' },
  indicator: { width: 128, height: 6, borderRadius: 999, backgroundColor: '#E4E4E7' },
});
