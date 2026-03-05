import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AssetUrls, Colors } from '@/constants/theme';

function Pin({
  label,
  color,
  icon,
  top,
  left,
  filled,
}: {
  label: string;
  color: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  top: string;
  left: string;
  filled?: boolean;
}) {
  return (
    <View style={[styles.pinWrap, { top, left }]}>
      <View style={[styles.pinShape, { backgroundColor: color }]}>
        <MaterialIcons name={icon} size={filled ? 18 : 16} color={Colors.white} style={styles.rotated45} />
      </View>
      <View style={styles.pinLabel}>
        <Text style={styles.pinLabelText}>{label}</Text>
      </View>
    </View>
  );
}

export default function RideFoundScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.topBack} onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios-new" size={20} color="#181311" />
          </TouchableOpacity>
          <View style={styles.topStatus}>
            <Text style={styles.topStatusText}>Đang đến đón</Text>
          </View>
          <View style={styles.spacer40} />
        </View>

        <View style={styles.mapArea}>
          <ImageBackground source={{ uri: AssetUrls.mapImage }} style={styles.mapImage} imageStyle={styles.mapImageStyle} />

          <Pin label="Tài xế" color={Colors.primary} icon="person" top="38%" left="43%" />
          <Pin label="Bạn" color={Colors.blue[500]} icon="person-pin-circle" top="60%" left="30%" filled />

          <View style={styles.mapTools}>
            <TouchableOpacity style={styles.toolBtn}>
              <MaterialIcons name="my-location" size={20} color="#181311" />
            </TouchableOpacity>
            <View style={styles.zoomWrap}>
              <TouchableOpacity style={[styles.toolBtn, styles.zoomTop]}>
                <MaterialIcons name="add" size={20} color="#181311" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.toolBtn}>
                <MaterialIcons name="remove" size={20} color="#181311" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.sheet}>
          <View style={styles.grabberWrap}>
            <View style={styles.grabber} />
          </View>

          <View style={styles.driverRow}>
            <View style={styles.driverLeft}>
              <ImageBackground source={{ uri: AssetUrls.driverAvatar }} style={styles.avatar} imageStyle={styles.avatarImageStyle} />
              <View style={styles.driverInfo}>
                <Text style={styles.driverName}>Nguyễn Văn A</Text>
                <Text style={styles.driverMeta}>Honda Wave • 29A1-123.45</Text>
                <View style={styles.ratingRow}>
                  <MaterialIcons name="star" size={14} color="#FACC15" />
                  <Text style={styles.ratingText}>4.9</Text>
                </View>
              </View>
            </View>

            <View style={styles.actionBtns}>
              <TouchableOpacity style={styles.callBtn}>
                <MaterialIcons name="call" size={22} color="#F2590D" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.chatBtn}>
                <MaterialIcons name="chat" size={22} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.progressCard}>
            <View style={styles.progressTop}>
              <View style={styles.progressTitleWrap}>
                <MaterialIcons name="schedule" size={18} color="#F2590D" />
                <Text style={styles.progressTitle}>Tài xế đang đến điểm đón</Text>
              </View>
              <Text style={styles.progressTime}>3 phút</Text>
            </View>
            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
          </View>

          <View style={styles.bottomRow}>
            <View style={styles.pickupRow}>
              <MaterialIcons name="location-on" size={18} color="#9CA3AF" />
              <Text style={styles.pickupText} numberOfLines={1}>
                123 Đường Lê Lợi, Phường Bến Thành...
              </Text>
            </View>
            <View style={styles.bottomActions}>
              <TouchableOpacity style={styles.testTripBtn} onPress={() => router.push('/ride/rideOnTrip')}>
                <Text style={styles.testTripText}>Test: Đang trong chuyến</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.detailBtn}>
                <Text style={styles.detailText}>Chi tiết chuyến đi</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelTripBtn}>
                <Text style={styles.cancelTripText}>Hủy chuyến</Text>
              </TouchableOpacity>
            </View>
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
  page: { flex: 1, backgroundColor: Colors.background.page },
  container: { flex: 1, maxWidth: 480, width: '100%', alignSelf: 'center', backgroundColor: Colors.white },
  spacer40: { width: 40 },
  rotated45: { transform: [{ rotate: '45deg' }] },
  mapImageStyle: { resizeMode: 'cover' },
  avatarImageStyle: { borderRadius: 32 },
  zoomTop: { borderBottomWidth: 1, borderBottomColor: Colors.gray[100] },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBack: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', elevation: 3 },
  topStatus: { backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 999, paddingHorizontal: 14, paddingVertical: 8 },
  topStatusText: { fontSize: 14, fontWeight: '700', color: '#181311' },
  mapArea: { flex: 1, minHeight: '50%' },
  mapImage: { ...StyleSheet.absoluteFillObject },
  pinWrap: { position: 'absolute', alignItems: 'center' },
  pinShape: {
    width: 44,
    height: 44,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    transform: [{ rotate: '-45deg' }],
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 4,
  },
  pinLabel: { marginTop: 6, backgroundColor: '#FFFFFF', borderRadius: 4, paddingHorizontal: 8, paddingVertical: 2, borderWidth: 1, borderColor: '#F3F4F6' },
  pinLabelText: { fontSize: 10, fontWeight: '700', color: '#181311' },
  mapTools: { position: 'absolute', right: 16, bottom: 96, gap: 8 },
  toolBtn: { width: 40, height: 40, borderRadius: 8, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },
  zoomWrap: { borderRadius: 8, overflow: 'hidden', backgroundColor: '#FFFFFF' },
  sheet: { backgroundColor: '#FFFFFF', borderTopLeftRadius: 16, borderTopRightRadius: 16, shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 10, elevation: 8 },
  grabberWrap: { alignItems: 'center', paddingTop: 10 },
  grabber: { width: 48, height: 6, borderRadius: 99, backgroundColor: '#E4E4E7' },
  driverRow: { marginTop: 8, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  driverLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 64, height: 64, borderRadius: 32 },
  driverInfo: { justifyContent: 'center' },
  driverName: { fontSize: 18, fontWeight: '700', color: '#181311' },
  driverMeta: { fontSize: 13, fontWeight: '500', color: '#8A6E60', marginTop: 2 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 },
  ratingText: { fontSize: 13, fontWeight: '700', color: '#181311' },
  actionBtns: { flexDirection: 'row', gap: 10 },
  callBtn: { width: 46, height: 46, borderRadius: 23, backgroundColor: '#F8F6F5', alignItems: 'center', justifyContent: 'center' },
  chatBtn: { width: 46, height: 46, borderRadius: 23, backgroundColor: '#F2590D', alignItems: 'center', justifyContent: 'center' },
  progressCard: {
    marginTop: 12,
    marginHorizontal: 20,
    backgroundColor: '#F8F6F5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    padding: 12,
  },
  progressTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  progressTitleWrap: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  progressTitle: { fontSize: 15, fontWeight: '600', color: '#181311' },
  progressTime: { fontSize: 18, fontWeight: '700', color: '#F2590D' },
  progressTrack: { height: 6, borderRadius: 99, backgroundColor: '#E5E7EB', marginTop: 10, overflow: 'hidden' },
  progressFill: { width: '75%', height: '100%', borderRadius: 99, backgroundColor: '#F2590D' },
  bottomRow: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 8 },
  pickupRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 },
  pickupText: { flex: 1, fontSize: 13, color: '#181311' },
  bottomActions: { borderTopWidth: 1, borderTopColor: '#F3F4F6', paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  testTripBtn: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8, backgroundColor: '#FFF0E6' },
  testTripText: { fontSize: 12, fontWeight: '700', color: '#F2590D' },
  detailBtn: { paddingHorizontal: 8, paddingVertical: 6, borderRadius: 8 },
  detailText: { fontSize: 13, fontWeight: '500', color: '#8A6E60' },
  cancelTripBtn: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  cancelTripText: { fontSize: 13, fontWeight: '700', color: '#EF4444' },
  indicatorWrap: { height: 28, alignItems: 'center', justifyContent: 'center' },
  indicator: { width: 128, height: 6, borderRadius: 99, backgroundColor: '#E4E4E7' },
});
