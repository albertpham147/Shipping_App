import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AssetUrls, Colors } from '@/constants/theme';

export default function RideReceiptScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeBtn} onPress={() => router.replace('/(tabs)')}>
          <MaterialIcons name="close" size={22} color="#181311" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Biên nhận chuyến đi</Text>
        <View style={styles.closeBtn} />
      </View>

      <View style={styles.main}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.card}>
            <View style={styles.successWrap}>
              <View style={styles.checkCircle}>
                <MaterialIcons name="check" size={34} color="#FFFFFF" />
              </View>
              <Text style={styles.successTitle}>Cảm ơn bạn đã sử dụng dịch vụ!</Text>
              <Text style={styles.successSub}>Chuyến đi của bạn đã kết thúc an toàn.</Text>
            </View>

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Tổng cộng</Text>
              <Text style={styles.totalValue}>25.000đ</Text>
            </View>

            <View style={styles.infoList}>
              <View style={styles.infoRow}>
                <View style={styles.infoIconGray}>
                  <MaterialIcons name="schedule" size={20} color={Colors.gray[500]} />
                </View>
                <View style={styles.flexOne}>
                  <Text style={styles.infoSmall}>THỜI GIAN DI CHUYỂN</Text>
                  <Text style={styles.infoMain}>15 phút (3.2 km)</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <View style={styles.infoIconOrange}>
                  <MaterialIcons name="location-on" size={20} color={Colors.primary} />
                </View>
                <View style={styles.flexOne}>
                  <Text style={styles.infoSmall}>ĐIỂM ĐẾN</Text>
                  <Text style={styles.infoMain}>Vincom Center Đồng Khởi</Text>
                  <Text style={styles.infoSub}>72 Lê Thánh Tôn, Bến Nghé, Quận 1</Text>
                </View>
              </View>
            </View>

            <View style={styles.rateWrap}>
              <ImageBackground source={{ uri: AssetUrls.driverAvatar }} style={styles.avatar} imageStyle={styles.avatarImageStyle} />
              <Text style={styles.rateText}>
                Bạn thấy tài xế <Text style={styles.rateDriver}>Nguyễn Văn A</Text> thế nào?
              </Text>
              <View style={styles.starRow}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <MaterialIcons key={i} name="star" size={34} color="#FACC15" />
                ))}
              </View>
              <TextInput
                style={styles.commentInput}
                multiline
                numberOfLines={3}
                placeholder="Nhập nhận xét về tài xế (không bắt buộc)..."
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.homeBtn} onPress={() => router.replace('/(tabs)')}>
          <Text style={styles.homeBtnText}>Về trang chủ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.indicatorWrap}>
        <View style={styles.indicator} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: Colors.background.page },
  flexOne: { flex: 1 },
  scrollView: { flex: 1 },
  scrollContent: { paddingBottom: 12 },
  avatarImageStyle: { borderRadius: 32 },
  header: {
    height: 74,
    paddingTop: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
  closeBtn: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 18, fontWeight: '700', color: '#181311' },
  main: { flex: 1, paddingHorizontal: 16, paddingTop: 8 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    overflow: 'hidden',
  },
  successWrap: { alignItems: 'center', paddingVertical: 28, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  checkCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#F2590D', alignItems: 'center', justifyContent: 'center' },
  successTitle: { marginTop: 16, fontSize: 22, fontWeight: '700', color: '#181311', textAlign: 'center' },
  successSub: { marginTop: 6, fontSize: 13, color: '#6B7280', textAlign: 'center' },
  totalRow: { paddingHorizontal: 20, paddingTop: 18, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  totalLabel: { fontSize: 16, fontWeight: '500', color: '#6B7280' },
  totalValue: { fontSize: 30, fontWeight: '700', color: '#F2590D' },
  infoList: { paddingHorizontal: 20, paddingTop: 14, gap: 14 },
  infoRow: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  infoIconGray: { marginTop: 2, width: 36, height: 36, borderRadius: 10, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center' },
  infoIconOrange: { marginTop: 2, width: 36, height: 36, borderRadius: 10, backgroundColor: '#FFF7ED', alignItems: 'center', justifyContent: 'center' },
  infoSmall: { fontSize: 10, fontWeight: '700', color: '#9CA3AF', letterSpacing: 0.6 },
  infoMain: { marginTop: 2, fontSize: 14, fontWeight: '600', color: '#181311' },
  infoSub: { marginTop: 2, fontSize: 11, color: '#6B7280' },
  rateWrap: { marginTop: 16, borderTopWidth: 1, borderTopColor: '#F3F4F6', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 20, alignItems: 'center' },
  avatar: { width: 64, height: 64, borderRadius: 32, borderWidth: 2, borderColor: '#F2590D' },
  rateText: { marginTop: 12, fontSize: 14, color: '#6B7280', textAlign: 'center' },
  rateDriver: { fontWeight: '700', color: '#181311' },
  starRow: { marginTop: 10, flexDirection: 'row', gap: 2 },
  commentInput: {
    marginTop: 14,
    width: '100%',
    minHeight: 86,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 14,
    paddingTop: 10,
    textAlignVertical: 'top',
    color: '#181311',
    fontSize: 13,
  },
  homeBtn: {
    marginTop: 12,
    marginBottom: 8,
    height: 54,
    borderRadius: 16,
    backgroundColor: '#F2590D',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F2590D',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  homeBtnText: { fontSize: 18, fontWeight: '700', color: '#FFFFFF' },
  indicatorWrap: { height: 18, alignItems: 'center', justifyContent: 'center' },
  indicator: { width: 128, height: 6, borderRadius: 99, backgroundColor: '#D1D5DB' },
});
