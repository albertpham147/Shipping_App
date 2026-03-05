import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, BorderRadius, Spacing } from '../../constants/theme';

type ServiceCard = {
  label: string;
  image: string;
  orange?: boolean;
  route?: '/ride/rideSearch' | '/foods/restaurantList';
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    label: 'Đặt đồ ăn',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxPSAd9YYaE9c58-U9JMOkKsWACI0e87w22T-5IwdDBTfIsvbunJG1CMCsOQ5AyALCnSjYGntcG8uw7NSRPuWKsR1Z-pebyP0ud9W9Rens61IeeVayHfPBj2xz0B7l790U8TYQJ2K8QjSKJG7iiH94vKeXwFU4iHCDH3jdabMqouAELj3J2OqiTVrhtFWMMsfLkpu8JwgSeYvz6oonJQSpsqA6N7Hyu1MS8bf7I_LAp1lGELY9DIkc6euy8zv7VyN4f_55LWyq5gEa',
    orange: true,
    route: '/foods/restaurantList',
  },
  {
    label: 'Xe ôm',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAt-yvwqui5T21s7j713zZp5_e9obaCBPXnXnFvwZ3khjntT7fU337tzADVzXuGJXlh4DWrrTixFBoq212j9YrwItPK2CwampdzaAScF5MLfqByiEYr-MYqPDIpOTLkqTe7wr9joDaQVph957jEhLt8DHq--engkBoBuS47YKPlti7cGhmaKzP731q2VGxPzbskLNPTQ4Yb9qoqqJvZKxFOMuKumN5Bvd9qDP4-KnZMhxZvYQbsdFtr_N0XRbUJlXAXRX8RHC1vFrHa',
    route: '/ride/rideSearch',
  },
  {
    label: 'Giao hàng',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDu77nZCIPUIsciGH3kwpx6U620-Wckf6Kf7aSUAQB6HK5RZCx37Bpy0eVgJNicUNVki4_DHtyUIap0zkaJHFNO1UkcnX0SLka5rp5jUWmqQHUqeVrEVPQqpuNld3IbiAlbVkHsQJZL8Z8FHVJTvC7JLQdf3b7r4Ay0v_8Z1aQFniCHhkUZNzQpauTiCybFjTnAkrWk_dalPD8J8Xm7tHqeG7EMGkdrae9P6UgQUB_-PPrtte0jUBpgCETc4TFYV7uvvboximjyx1X',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.topSticky}>
          <View style={styles.locationRow}>
            <View style={styles.locationIconWrap}>
              <MaterialIcons name="location-on" size={22} color="#F2590D" />
            </View>
            <View style={styles.locationTextWrap}>
              <Text style={styles.locationLabel}>Giao đến</Text>
              <Text style={styles.locationValue}>123 Nguyễn Huệ, Quận 1, TP.HCM</Text>
            </View>
          </View>

          <View style={styles.searchWrap}>
            <View style={styles.searchIconWrap}>
              <MaterialIcons name="search" size={20} color="#8A6E60" />
            </View>
            <TextInput style={styles.searchInput} placeholder="Tìm kiếm món ngon, dịch vụ..." placeholderTextColor="#8A6E60" />
          </View>
        </View>

        <View style={styles.serviceGrid}>
          {SERVICE_CARDS.map((card) => (
            <TouchableOpacity key={card.label} style={styles.serviceCard} onPress={() => card.route && router.push(card.route)}>
              <ImageBackground source={{ uri: card.image }} style={styles.serviceBg} imageStyle={styles.serviceBgImage}>
                <View style={[styles.serviceOverlay, card.orange && styles.serviceOverlayOrange]} />
                <Text style={styles.serviceText}>{card.label}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>

        <SectionTitle title="Ưu đãi độc quyền" right="Xem tất cả" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.bannerRow}>
          <Banner
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCL8pdcuLqqfwN0oPR06EW5-Aa6IIzjQtNuS9uA3q-yHid9kqAl4PaYN2JEMmvorSm4-M4BB7tf3fUZCi0mF_ww_FyXjYkk_sp5q7-ratl6m0QGyolhy7PTKVg-c4lmg-TlsfUuvWcu9rboSYQ52XCaSFcifEEekQS-bPCqQ99M2HWD393yEGzE34xW3gp3eMoIuCFlO__VOG4kRbut1tVCTPSdi6WHGtakS0U1s8YvMwZB5FHGKd7psg8aP9ogg4AAaU95BTiQxAiV"
            title="Đại tiệc 0đ"
            subtitle="Áp dụng cho đơn đầu tiên"
            badge="Mã: FREE50"
          />
          <Banner
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCjm5o19NkuptiKABqIPpoz3JStj6uBymknXtqodJ0XiSpQUoeAXM0XPijn6ruFvMYM6t0lKTctMIWLjJWhztS3oaumqfaYOkVVEOGVe6aW50vr18woasNphzLJoR9SQFptEcJ3hnwenzpqsz-jC_3SDF9_emGIliJLMkzjCpOFnnNhmuioWO4kDQo7xlxSkS-AhawvpYJ5THhBIOVt0LdJhMnbOHqBSajO5gLqLZk7qE3AS5Y1ztUYaBni3gjblvApHba5BM-FcsK8"
            title="Freeship Xtra"
            subtitle="Số lượng có hạn hàng ngày"
          />
        </ScrollView>

        <SectionTitle title="Gợi ý cho bạn" />
        <View style={styles.recommendList}>
          <RecommendCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDLuLSJpb-ySNFX6FeEeV1XqqmWmm1hhz6jQ29WGIA7H2VjYv8QLhFsxtAfK41Y73olihAaLHo-gamyiSUeNdHeRyyO8W5NPFcUB1MNNgT96SFrfo5Rn_q2VoFQYe-LlhDZ59X_gYR_gWRngWLllcjpgY0TCbgQm_JwCH3WC4I8rwAlekvLpuIwotcoRsyc5hJvuUR76YyGV6P9N0qQCmz-nqt_3EeP5Li8ZNqw4rfWTijbzMINRhzmgWCWHpnEV_icusBFtaEmNE4N"
            title="Bánh Mì Huỳnh Hoa - Lê Thị Riêng"
            info="4.8 • 1.2km • 20 phút"
            badges={['Ưu đãi đến 30k', 'Freeship']}
          />
          <RecommendCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuC70Mds1ym2nmOFoiOVxEP8rqyT09TF2Y3W8aSCMDmIWewE8jsIpnmg2400xscHuVMdtWU56dj6mCmOoP3ioAKNuz7qJzP3d7fj_10b34lX1IqD6xQa1CcSuV0eoqP5bNIQeriG2Gowjy8l1ANNaRCraTu3kQFfYGixWM9S0CzSNv5764aq8lwNFoIFjNrAXqaUI4pkDeMfNYAyQZc6dcaWlHp0YhnwdIr62TmPKNvE3SCC0z3TYiEN1-ZS1RS4_6n_WGcUBKLv4kH7"
            title="Phúc Long Coffee & Tea"
            info="4.5 • 0.5km • 10 phút"
            badges={['MUA 1 TẶNG 1']}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <NavItem icon="home" label="Trang chủ" active />
        <NavItem icon="receipt-long" label="Hoạt động" onPress={() => router.push('/(tabs)/explore')} />
        <NavItem icon="notifications" label="Thông báo" onPress={() => router.push('/main/notifications')} />
        <NavItem icon="person" label="Tôi" onPress={() => router.push('/profiles/customerProfile')} />
      </View>
    </SafeAreaView>
  );
}

function SectionTitle({ title, right }: { title: string; right?: string }) {
  return (
    <View style={styles.sectionTitleRow}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {right ? <Text style={styles.sectionRight}>{right}</Text> : null}
    </View>
  );
}

function Banner({ image, title, subtitle, badge }: { image: string; title: string; subtitle: string; badge?: string }) {
  return (
    <ImageBackground source={{ uri: image }} style={styles.bannerCard} imageStyle={styles.bannerImage}>
      <View style={styles.bannerOverlay}>
        {badge ? <Text style={styles.bannerBadge}>{badge}</Text> : null}
        <Text style={styles.bannerTitle}>{title}</Text>
        <Text style={styles.bannerSubtitle}>{subtitle}</Text>
      </View>
    </ImageBackground>
  );
}

function RecommendCard({ image, title, info, badges }: { image: string; title: string; info: string; badges: string[] }) {
  return (
    <View style={styles.recommendCard}>
      <ImageBackground source={{ uri: image }} style={styles.recommendImage} imageStyle={styles.recommendImageInner} />
      <View style={styles.recommendContent}>
        <Text style={styles.recommendTitle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.recommendInfo}>{info}</Text>
        <View style={styles.badgeRow}>
          {badges.map((badge, idx) => (
            <Text key={`${badge}-${idx}`} style={[styles.badge, idx === 1 && styles.badgeGreen]}>
              {badge}
            </Text>
          ))}
        </View>
      </View>
    </View>
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
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress} activeOpacity={0.8}>
      <MaterialIcons name={icon} size={22} color={active ? Colors.primary : '#8A6E60'} />
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white },
  scrollContent: { paddingBottom: 90 },
  topSticky: { paddingTop: 6, backgroundColor: Colors.white },
  locationRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: Spacing.md, paddingVertical: 8 },
  locationIconWrap: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.full,
    backgroundColor: '#FEE9DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationTextWrap: { marginLeft: 10, flex: 1 },
  locationLabel: { fontSize: 10, color: '#8A6E60', fontWeight: '500', textTransform: 'uppercase' },
  locationValue: { fontSize: 14, fontWeight: '700', color: Colors.black },
  searchWrap: {
    marginHorizontal: Spacing.md,
    marginTop: 4,
    marginBottom: 10,
    height: 48,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.gray[100],
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIconWrap: { paddingLeft: 14, paddingRight: 8 },
  searchInput: { flex: 1, fontSize: 15, color: Colors.black, paddingRight: 12 },
  serviceGrid: { flexDirection: 'row', gap: 10, paddingHorizontal: Spacing.md, paddingTop: 6 },
  serviceCard: { flex: 1, aspectRatio: 3 / 4.5, borderRadius: BorderRadius.lg, overflow: 'hidden' },
  serviceBg: { flex: 1, justifyContent: 'flex-end' },
  serviceBgImage: { borderRadius: BorderRadius.lg },
  serviceOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(34,22,16,0.55)' },
  serviceOverlayOrange: { backgroundColor: 'rgba(242,89,13,0.6)' },
  serviceText: { color: Colors.white, fontSize: 14, fontWeight: '700', textAlign: 'center', marginBottom: 10 },
  sectionTitleRow: {
    marginTop: 18,
    marginBottom: 8,
    paddingHorizontal: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: Colors.black },
  sectionRight: { fontSize: 12, fontWeight: '700', color: Colors.primary },
  bannerRow: { paddingHorizontal: Spacing.md, gap: 12 },
  bannerCard: { width: 300, aspectRatio: 21 / 9, borderRadius: BorderRadius.lg, overflow: 'hidden' },
  bannerImage: { borderRadius: BorderRadius.lg },
  bannerOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent: 'center', paddingHorizontal: 14 },
  bannerBadge: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.primary,
    color: Colors.white,
    fontSize: 10,
    fontWeight: '700',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 4,
  },
  bannerTitle: { color: Colors.white, fontSize: 22, fontWeight: '700' },
  bannerSubtitle: { color: 'rgba(255,255,255,0.88)', fontSize: 12, marginTop: 2 },
  recommendList: { paddingHorizontal: Spacing.md, gap: 12 },
  recommendCard: {
    flexDirection: 'row',
    backgroundColor: Colors.gray[50],
    borderRadius: BorderRadius.lg,
    padding: 10,
    alignItems: 'center',
    gap: 10,
  },
  recommendImage: { width: 80, height: 80 },
  recommendImageInner: { borderRadius: 10 },
  recommendContent: { flex: 1 },
  recommendTitle: { fontSize: 14, fontWeight: '700', color: Colors.black },
  recommendInfo: { marginTop: 5, fontSize: 12, color: '#8A6E60' },
  badgeRow: { flexDirection: 'row', gap: 6, marginTop: 6, flexWrap: 'wrap' },
  badge: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.primary,
    backgroundColor: '#FEE9DE',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeGreen: { backgroundColor: '#DCFCE7', color: '#15803D' },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 74,
    borderTopWidth: 1,
    borderTopColor: Colors.gray[200],
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: { alignItems: 'center', gap: 2 },
  navLabel: { fontSize: 10, color: '#8A6E60', fontWeight: '500' },
  navLabelActive: { color: Colors.primary, fontWeight: '700' },
});
