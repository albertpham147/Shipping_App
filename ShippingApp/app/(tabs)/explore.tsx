import React, { useMemo, useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, BorderRadius, Spacing } from '../../constants/theme';

type Kind = 'food' | 'ride' | 'delivery';
type Segment = 'incoming' | 'history';
type Filter = 'all' | Kind;

type Item = {
  id: string;
  kind: Kind;
  date: string;
  status: string;
  statusColor: string;
  statusBg: string;
  title: string;
  subtitle: string;
  amount: string;
  image?: string;
  driver?: string;
  reorder?: boolean;
};

const ITEMS: Item[] = [
  {
    id: '1',
    kind: 'food',
    date: '15 Th08 2023, 12:30',
    status: 'Đã giao',
    statusColor: '#16A34A',
    statusBg: '#F0FDF4',
    title: 'The Coffee House - Lê Đại Hành',
    subtitle: '1x Trà Đào Cam Sả (L), 1x Bánh Mì',
    amount: '55.000đ',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtGIfmBoeM5b2LbOCjVKKmCWZZIIi1YiONlID1AnLCncf3IN--Hrt35sZ71_OEBpJ9hTagySmm8ArIxsz-orIWOfqgR90HkfUmQ_4aa3L2P63ZnCXRZ5b_0gufX0Ol7m-KAhD8Pg4IOY1VRQrEE7R2d8I8wI2FycK6yHf8LINRiTYXafnunn23raTkc7gaQUciY5tqY6Tp4OrOV-kxd8lwcpwK9MVZFPxryUaftc_7aZiwTHhVhGGOi3K4dr1G-vjYUyb2dJw4kTRc',
    reorder: true,
  },
  {
    id: '2',
    kind: 'ride',
    date: '14 Th08 2023, 18:15',
    status: 'Hoàn thành',
    statusColor: '#6B7280',
    statusBg: '#F3F4F6',
    title: 'Vinhomes Central Park, Bình Thạnh',
    subtitle: 'Sân bay Tân Sơn Nhất, Quận TB',
    amount: '112.000đ',
    driver: 'Tài xế: Minh Quân',
  },
  {
    id: '3',
    kind: 'delivery',
    date: '12 Th08 2023, 09:00',
    status: 'Đã hủy',
    statusColor: '#EF4444',
    statusBg: '#FEF2F2',
    title: 'Giao cho Anh Hoàng',
    subtitle: 'Mã đơn: EX-9928310',
    amount: '32.000đ',
  },
  {
    id: '4',
    kind: 'food',
    date: '10 Th08 2023, 19:45',
    status: 'Đã giao',
    statusColor: '#16A34A',
    statusBg: '#F0FDF4',
    title: 'Phở Hùng - Nguyễn Trãi',
    subtitle: '2x Phở Đặc Biệt, 1x Quẩy',
    amount: '145.000đ',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtGIfmBoeM5b2LbOCjVKKmCWZZIIi1YiONlID1AnLCncf3IN--Hrt35sZ71_OEBpJ9hTagySmm8ArIxsz-orIWOfqgR90HkfUmQ_4aa3L2P63ZnCXRZ5b_0gufX0Ol7m-KAhD8Pg4IOY1VRQrEE7R2d8I8wI2FycK6yHf8LINRiTYXafnunn23raTkc7gaQUciY5tqY6Tp4OrOV-kxd8lwcpwK9MVZFPxryUaftc_7aZiwTHhVhGGOi3K4dr1G-vjYUyb2dJw4kTRc',
    reorder: true,
  },
];

export default function ActivityScreen() {
  const router = useRouter();
  const [segment, setSegment] = useState<Segment>('history');
  const [filter, setFilter] = useState<Filter>('all');

  const data = useMemo(() => ITEMS.filter((x) => filter === 'all' || x.kind === filter), [filter]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          <View style={styles.sideBtn} />
          <Text style={styles.headerTitle}>Hoạt động</Text>
          <TouchableOpacity style={styles.sideBtn}>
            <MaterialIcons name="search" size={22} color={Colors.black} />
          </TouchableOpacity>
        </View>

        <View style={styles.segmentRow}>
          <Segment label="Đang đến" active={segment === 'incoming'} onPress={() => setSegment('incoming')} />
          <Segment label="Lịch sử" active={segment === 'history'} onPress={() => setSegment('history')} />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
          <FilterChip label="Tất cả" active={filter === 'all'} onPress={() => setFilter('all')} />
          <FilterChip label="Đồ ăn" icon="restaurant" active={filter === 'food'} onPress={() => setFilter('food')} />
          <FilterChip label="Giao hàng" icon="moped" active={filter === 'delivery'} onPress={() => setFilter('delivery')} />
          <FilterChip label="Di chuyển" icon="directions-car" active={filter === 'ride'} onPress={() => setFilter('ride')} />
        </ScrollView>
      </View>

      <ScrollView style={styles.list} contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
        {data.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.leftTop}>
                <View style={[styles.typeIcon, kindBg(item.kind)]}>
                  <MaterialIcons name={kindIcon(item.kind)} size={16} color={kindColor(item.kind)} />
                </View>
                <View>
                  <Text style={styles.kindLabel}>{kindName(item.kind)}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
              </View>
              <Text style={[styles.status, { color: item.statusColor, backgroundColor: item.statusBg }]}>{item.status}</Text>
            </View>

            {item.kind === 'ride' ? (
              <View style={styles.rideBlock}>
                <View style={styles.routeRow}>
                  <MaterialIcons name="radio-button-checked" size={12} color="#F2590D" />
                  <Text style={styles.routeText}>{item.title}</Text>
                </View>
                <View style={styles.routeRow}>
                  <MaterialIcons name="location-on" size={12} color="#9CA3AF" />
                  <Text style={styles.routeText}>{item.subtitle}</Text>
                </View>
              </View>
            ) : (
              <View style={styles.itemBlock}>
                {item.image ? <ImageBackground source={{ uri: item.image }} style={styles.thumb} imageStyle={styles.thumbImage} /> : null}
                <View style={styles.itemText}>
                  <Text style={styles.itemTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.itemSub} numberOfLines={1}>
                    {item.subtitle}
                  </Text>
                </View>
              </View>
            )}

            <View style={styles.cardBottom}>
              <Text style={styles.driver}>{item.driver ?? ''}</Text>
              <View style={styles.priceGroup}>
                <Text style={styles.price}>{item.amount}</Text>
                {item.reorder ? (
                  <TouchableOpacity style={styles.reorderBtn}>
                    <Text style={styles.reorderTxt}>Đặt lại</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <Nav icon="home" label="Trang chủ" onPress={() => router.push('/(tabs)')} />
        <Nav icon="assignment" label="Hoạt động" active />
        <Nav icon="notifications" label="Thông báo" onPress={() => router.push('/main/notifications')} />
        <Nav icon="person" label="Tôi" onPress={() => router.push('/profiles/customerProfile')} />
      </View>
    </SafeAreaView>
  );
}

function Segment({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.segment} onPress={onPress}>
      <Text style={[styles.segmentText, active && styles.segmentTextActive]}>{label}</Text>
      <View style={[styles.segmentLine, active && styles.segmentLineActive]} />
    </TouchableOpacity>
  );
}

function FilterChip({
  label,
  icon,
  active,
  onPress,
}: {
  label: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={[styles.chip, active && styles.chipOn]} onPress={onPress}>
      {icon ? <MaterialIcons name={icon} size={14} color={active ? '#FFFFFF' : '#374151'} /> : null}
      <Text style={[styles.chipText, active && styles.chipTextOn]}>{label}</Text>
    </TouchableOpacity>
  );
}

function Nav({
  icon,
  label,
  active,
  onPress,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color={active ? Colors.primary : Colors.gray[400]} />
      <Text style={[styles.navText, active && styles.navTextOn]}>{label}</Text>
    </TouchableOpacity>
  );
}

function kindName(k: Kind) {
  if (k === 'food') return 'Đồ ăn';
  if (k === 'ride') return 'Di chuyển';
  return 'Giao hàng';
}

function kindIcon(k: Kind): keyof typeof MaterialIcons.glyphMap {
  if (k === 'food') return 'restaurant';
  if (k === 'ride') return 'directions-car';
  return 'local-shipping';
}

function kindColor(k: Kind) {
  if (k === 'food') return Colors.primary;
  if (k === 'ride') return Colors.blue;
  return '#7C3AED';
}

function kindBg(k: Kind) {
  if (k === 'food') return { backgroundColor: '#FFF7ED' };
  if (k === 'ride') return { backgroundColor: '#EFF6FF' };
  return { backgroundColor: '#F5F3FF' };
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: Colors.gray[50] },
  topSection: { backgroundColor: Colors.white, borderBottomWidth: 1, borderBottomColor: Colors.gray[100] },
  headerRow: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  sideBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 16, fontWeight: '700', color: Colors.black },
  segmentRow: { flexDirection: 'row', paddingHorizontal: 16 },
  segment: { flex: 1, alignItems: 'center', paddingTop: 8 },
  segmentText: { fontSize: 13, fontWeight: '700', color: '#9CA3AF' },
  segmentTextActive: { color: Colors.primary },
  segmentLine: { marginTop: 8, width: '100%', height: 2, backgroundColor: 'transparent' },
  segmentLineActive: { backgroundColor: Colors.primary },
  filterRow: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  chip: {
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.gray[100],
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  chipOn: { backgroundColor: Colors.primary },
  chipText: { fontSize: 12, fontWeight: '500', color: '#374151' },
  chipTextOn: { color: Colors.white },
  list: { flex: 1 },
  listContent: { paddingTop: 4, paddingBottom: 90 },
  card: {
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.gray[100],
  },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  leftTop: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  typeIcon: { width: 28, height: 28, borderRadius: 6, alignItems: 'center', justifyContent: 'center' },
  kindLabel: { fontSize: 10, fontWeight: '700', color: '#9CA3AF', textTransform: 'uppercase' },
  date: { fontSize: 10, color: '#9CA3AF' },
  status: { fontSize: 10, fontWeight: '700', paddingHorizontal: 6, paddingVertical: 3, borderRadius: 4, overflow: 'hidden' },
  itemBlock: { flexDirection: 'row', gap: 10 },
  thumb: { width: 52, height: 52 },
  thumbImage: { borderRadius: 6 },
  itemText: { flex: 1, justifyContent: 'center' },
  itemTitle: { fontSize: 14, fontWeight: '700', color: Colors.black },
  itemSub: { marginTop: 3, fontSize: 12, color: '#6B7280' },
  rideBlock: { gap: 6, paddingLeft: 2 },
  routeRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  routeText: { flex: 1, fontSize: 12, color: '#374151' },
  cardBottom: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F9FAFB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  driver: { fontSize: 11, color: '#6B7280', maxWidth: 130 },
  priceGroup: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  price: { fontSize: 14, fontWeight: '700', color: Colors.black },
  reorderBtn: {
    height: 28,
    minWidth: 72,
    borderRadius: 6,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  reorderTxt: { fontSize: 11, fontWeight: '700', color: Colors.white },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.gray[100],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  navItem: { flex: 1, alignItems: 'center', gap: 1 },
  navText: { fontSize: 10, fontWeight: '500', color: '#9CA3AF' },
  navTextOn: { color: Colors.primary },
});
