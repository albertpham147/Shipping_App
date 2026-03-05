import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AssetUrls, Colors } from '@/constants/theme';

export default function RideOnTripScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios-new" size={20} color="#181311" />
          </TouchableOpacity>
          <View style={styles.statusPill}>
            <Text style={styles.statusText}>Đang trên chuyến đi</Text>
          </View>
          <View style={styles.spacer40} />
        </View>

        <View style={styles.mapArea}>
          <ImageBackground source={{ uri: AssetUrls.mapImage }} style={styles.mapImage} imageStyle={styles.mapImageStyle} />
          <View style={styles.routeLine} />
          <View style={styles.destinationPin}>
            <MaterialIcons name="location-on" size={18} color="#FFFFFF" />
          </View>
          <View style={styles.driverPin}>
            <MaterialIcons name="two-wheeler" size={16} color={Colors.white} style={styles.rotated45} />
          </View>
          <TouchableOpacity style={styles.locateBtn}>
            <MaterialIcons name="my-location" size={20} color="#181311" />
          </TouchableOpacity>
        </View>

        <View style={styles.sheet}>
          <View style={styles.grabberWrap}>
            <View style={styles.grabber} />
          </View>

          <View style={styles.tripHeader}>
            <View style={styles.livePill}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>Đang trên chuyến đi</Text>
            </View>
            <Text style={styles.priceText}>25.000đ</Text>
          </View>

          <View style={styles.destRow}>
            <View style={styles.destIconWrap}>
              <MaterialIcons name="location-on" size={20} color={Colors.primary} />
            </View>
            <View style={styles.flexOne}>
              <Text style={styles.destTitle}>Vincom Center Đồng Khởi</Text>
              <Text style={styles.destSub}>72 Lê Thánh Tôn, Bến Nghé, Quận 1, TP.HCM</Text>
            </View>
          </View>

          <View style={styles.driverRow}>
            <View style={styles.driverLeft}>
              <ImageBackground source={{ uri: AssetUrls.driverAvatar }} style={styles.avatar} imageStyle={styles.avatarImageStyle} />
              <View>
                <Text style={styles.driverName}>Nguyễn Văn A</Text>
                <Text style={styles.driverMeta}>29A1-123.45 • 4.9</Text>
              </View>
            </View>
            <View style={styles.driverActions}>
              <TouchableOpacity style={styles.sosBtn}>
                <MaterialIcons name="local-police" size={22} color="#71717A" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.chatBtn}>
                <MaterialIcons name="chat-bubble" size={22} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.testNavRow}>
            <TouchableOpacity style={styles.testPrevBtn} onPress={() => router.push('/ride/rideFound')}>
              <Text style={styles.testPrevText}>Test: Màn trước</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.testNextBtn} onPress={() => router.push('/ride/rideReceipt')}>
              <Text style={styles.testNextText}>Test: Kết thúc chuyến</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: Colors.background.page },
  container: { flex: 1, maxWidth: 480, width: '100%', alignSelf: 'center', backgroundColor: Colors.white },
  spacer40: { width: 40 },
  flexOne: { flex: 1 },
  rotated45: { transform: [{ rotate: '45deg' }] },
  mapImageStyle: { resizeMode: 'cover' },
  avatarImageStyle: { borderRadius: 24 },
  topBar: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  backBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },
  statusPill: { backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 999, paddingHorizontal: 16, paddingVertical: 8 },
  statusText: { fontSize: 14, fontWeight: '700', color: '#181311' },
  mapArea: { height: '60%', backgroundColor: '#E5E7EB' },
  mapImage: { ...StyleSheet.absoluteFillObject },
  routeLine: { position: 'absolute', left: '48%', top: '53%', width: 130, height: 5, backgroundColor: '#F2590D', transform: [{ rotate: '-35deg' }], borderRadius: 99 },
  destinationPin: { position: 'absolute', top: '30%', left: '75%', width: 34, height: 34, borderRadius: 17, backgroundColor: '#F2590D', alignItems: 'center', justifyContent: 'center' },
  driverPin: { position: 'absolute', top: '53%', left: '48%', width: 38, height: 38, borderTopLeftRadius: 19, borderTopRightRadius: 19, borderBottomLeftRadius: 19, backgroundColor: '#F2590D', transform: [{ rotate: '-45deg' }], alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#FFFFFF' },
  locateBtn: { position: 'absolute', right: 16, bottom: 40, width: 40, height: 40, borderRadius: 10, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },
  sheet: { flex: 1, marginTop: -24, borderTopLeftRadius: 24, borderTopRightRadius: 24, backgroundColor: '#FFFFFF', paddingHorizontal: 20 },
  grabberWrap: { alignItems: 'center', paddingTop: 10, paddingBottom: 6 },
  grabber: { width: 48, height: 4, borderRadius: 99, backgroundColor: '#E5E7EB' },
  tripHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  livePill: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF7ED', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 5 },
  liveDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#F2590D', marginRight: 6 },
  liveText: { fontSize: 11, fontWeight: '700', color: '#F2590D', textTransform: 'uppercase' },
  priceText: { fontSize: 26, fontWeight: '700', color: '#181311' },
  destRow: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  destIconWrap: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#FFF7ED', alignItems: 'center', justifyContent: 'center' },
  destTitle: { fontSize: 20, fontWeight: '700', color: '#181311' },
  destSub: { marginTop: 2, fontSize: 13, color: '#6B7280' },
  driverRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 6, marginBottom: 14 },
  driverLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatar: { width: 48, height: 48, borderRadius: 24 },
  driverName: { fontSize: 16, fontWeight: '700', color: '#181311' },
  driverMeta: { marginTop: 2, fontSize: 12, color: '#6B7280' },
  driverActions: { flexDirection: 'row', gap: 10 },
  sosBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center' },
  chatBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#F2590D', alignItems: 'center', justifyContent: 'center' },
  testNavRow: { marginTop: 'auto', marginBottom: 14, flexDirection: 'row', gap: 10 },
  testPrevBtn: { flex: 1, height: 42, borderRadius: 12, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center' },
  testPrevText: { fontSize: 13, fontWeight: '700', color: '#4B5563' },
  testNextBtn: { flex: 1, height: 42, borderRadius: 12, backgroundColor: '#F2590D', alignItems: 'center', justifyContent: 'center' },
  testNextText: { fontSize: 13, fontWeight: '700', color: '#FFFFFF' },
});
