import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, Spacing, BorderRadius } from '../../constants/theme';
import BottomNav from '../../components/BottomNav';

type AppTab = 'orders' | 'promotions';

type OrderItem = {
  id: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  iconBg: string;
  title: string;
  message: string;
  time: string;
  unread?: boolean;
};

type PromoItem = {
  id: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  iconBg: string;
  title: string;
  message: string;
  time: string;
  unread?: boolean;
  titlePrimary?: boolean;
};

const ORDER_NOTIFICATIONS: OrderItem[] = [
  {
    id: 'n1',
    icon: 'restaurant',
    iconBg: '#F2590D',
    title: 'Đơn hàng đã được giao',
    message: 'Món Phở Bò của bạn đã được giao thành công. Chúc bạn ngon miệng!',
    time: '10:30 • 15/10/2023',
    unread: true,
  },
  {
    id: 'n2',
    icon: 'directions-car',
    iconBg: '#3B82F6',
    title: 'Tài xế đang đến',
    message: 'Tài xế Nguyễn Văn A đang trên đường đến điểm đón bạn.',
    time: '09:15 • 15/10/2023',
  },
  {
    id: 'n3',
    icon: 'inventory-2',
    iconBg: '#22C55E',
    title: 'Giao hàng thành công',
    message: 'Kiện hàng mã #EX123 của bạn đã được ký nhận bởi người nhận.',
    time: 'Hôm qua',
    unread: true,
  },
  {
    id: 'n4',
    icon: 'restaurant',
    iconBg: '#F2590D',
    title: 'Đơn hàng đã được xác nhận',
    message: 'Quán Cơm Tấm Sài Gòn đã bắt đầu chuẩn bị món ăn cho bạn.',
    time: '12/10/2023',
  },
  {
    id: 'n5',
    icon: 'history',
    iconBg: '#3B82F6',
    title: 'Chuyến đi đã kết thúc',
    message: 'Cảm ơn bạn đã sử dụng dịch vụ. Hãy đánh giá tài xế ngay!',
    time: '11/10/2023',
  },
];

const PROMO_NOTIFICATIONS: PromoItem[] = [
  {
    id: 'p1',
    icon: 'restaurant',
    iconBg: '#EE0979',
    title: 'Giảm 50% cho món Phở',
    message: 'Thèm phở thì đặt ngay! Ưu đãi nửa giá chỉ áp dụng cho hôm nay tại các quán được yêu thích.',
    time: 'Hết hạn trong: 5 giờ • 10:30',
    unread: true,
    titlePrimary: true,
  },
  {
    id: 'p2',
    icon: 'local-shipping',
    iconBg: '#F2590D',
    title: 'Đồng giá 10k phí giao hàng',
    message: 'Không lo phí ship! Mọi đơn hàng dưới 2km đều được đồng giá giao hàng chỉ 10.000đ.',
    time: '09:15 • Hôm nay',
    unread: true,
    titlePrimary: true,
  },
  {
    id: 'p3',
    icon: 'confirmation-number',
    iconBg: '#00B6FE',
    title: 'Nhập mã APPSHIP để nhận 20k',
    message: 'Ưu đãi dành riêng cho dịch vụ di chuyển. Nhập mã ngay để nhận ưu đãi cho chuyến đi tiếp theo.',
    time: 'Hôm qua',
  },
  {
    id: 'p4',
    icon: 'coffee',
    iconBg: '#20C997',
    title: 'Mua 1 Tặng 1 Trà Sữa',
    message: 'Tiệc trà chiều linh đình cùng hội bạn thân. Deal hời mua 1 được 2 áp dụng cho menu Special.',
    time: '14/10/2023',
  },
  {
    id: 'p5',
    icon: 'celebration',
    iconBg: '#9CA3AF',
    title: 'Quà tặng sinh nhật tháng 10',
    message: 'Chúc mừng sinh nhật bạn! Nhận ngay gói voucher trị giá 500k như một món quà nhỏ từ chúng tôi.',
    time: '12/10/2023',
  },
];

export default function NotificationsScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AppTab>('promotions');
  const [allRead, setAllRead] = useState(false);

  const list = activeTab === 'orders' ? ORDER_NOTIFICATIONS : PROMO_NOTIFICATIONS;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconButton} />
        <Text style={styles.headerTitle}>Thông báo</Text>
        <TouchableOpacity style={styles.readAllButton} onPress={() => setAllRead(true)}>
          <Text style={styles.readAllText}>Đọc tất cả</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        <TabButton label="Đơn hàng" active={activeTab === 'orders'} onPress={() => setActiveTab('orders')} />
        <TabButton label="Khuyến mãi" active={activeTab === 'promotions'} onPress={() => setActiveTab('promotions')} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {list.map((item) => {
          const unread = item.unread && !allRead;
          const promoMode = activeTab === 'promotions';

          return (
            <View key={item.id} style={[styles.row, unread && styles.rowUnread]}>
              <View style={[styles.rowIcon, { backgroundColor: item.iconBg }, promoMode && styles.rowIconPromo]}>
                <MaterialIcons name={item.icon} size={promoMode ? 28 : 22} color="#FFFFFF" />
              </View>

              <View style={styles.rowBody}>
                <View style={styles.rowTitleLine}>
                  <Text
                    style={[
                      styles.rowTitle,
                      unread && !promoMode && styles.rowTitleUnread,
                      promoMode && item.titlePrimary && styles.rowTitlePrimary,
                    ]}>
                    {item.title}
                  </Text>
                  {unread ? <View style={styles.dot} /> : null}
                </View>
                <Text style={[styles.rowMessage, promoMode && styles.rowMessagePromo]}>{item.message}</Text>
                <Text style={styles.rowTime}>{item.time}</Text>
              </View>
            </View>
          );
        })}
        <View style={{ height: 90 }} />
      </ScrollView>

      <BottomNav
        items={[
          { icon: 'home', label: 'Trang chủ', onPress: () => router.push('/(tabs)') },
          { icon: 'receipt-long', label: 'Hoạt động', onPress: () => router.push('/(tabs)/explore') },
          { icon: 'notifications', label: 'Thông báo', active: true },
          { icon: 'person', label: 'Cá nhân', onPress: () => router.push('/profiles/customerProfile') },
        ]}
      />
    </SafeAreaView>
  );
}

function TabButton({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.tabItem} onPress={onPress}>
      <Text style={[styles.tabText, active && styles.tabTextActive]}>{label}</Text>
      <View style={[styles.tabUnderline, active && styles.tabUnderlineActive]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '700',
    color: Colors.black,
  },
  readAllButton: {
    minWidth: 72,
    alignItems: 'flex-end',
    paddingRight: 4,
  },
  readAllText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primary,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#9CA3AF',
  },
  tabTextActive: {
    color: Colors.primary,
  },
  tabUnderline: {
    marginTop: 8,
    width: '100%',
    height: 2,
    backgroundColor: 'transparent',
  },
  tabUnderlineActive: {
    backgroundColor: Colors.primary,
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: Spacing.md,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[50],
    backgroundColor: Colors.white,
  },
  rowUnread: {
    backgroundColor: '#FFF7F2',
  },
  rowIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowIconPromo: {
    width: 56,
    height: 56,
    borderRadius: 16,
  },
  rowBody: {
    flex: 1,
  },
  rowTitleLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  rowTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
  },
  rowTitleUnread: {
    fontWeight: '700',
  },
  rowTitlePrimary: {
    color: Colors.primary,
    fontWeight: '700',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    marginTop: 5,
  },
  rowMessage: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 20,
    color: '#6B7280',
  },
  rowMessagePromo: {
    color: '#4B5563',
  },
  rowTime: {
    marginTop: 6,
    fontSize: 11,
    color: '#9CA3AF',
  },

});
