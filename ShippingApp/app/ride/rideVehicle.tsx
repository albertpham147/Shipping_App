import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, Spacing, BorderRadius, ButtonHeights } from '@/constants/theme';

export default function RideVehicleScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.topActions}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={22} color="#27272A" />
          </TouchableOpacity>
        </View>

        <View style={styles.mapArea}>
          <View style={styles.gridOverlay} />

          <View style={[styles.road, styles.roadA]} />
          <View style={[styles.road, styles.roadB]} />
          <View style={[styles.road, styles.roadC]} />

          <View style={styles.poiA}>
            <Text style={styles.poiText}>Công viên Lê Văn Tám</Text>
          </View>
          <View style={styles.poiB}>
            <Text style={styles.poiText}>Bưu điện TP</Text>
          </View>

          <View style={styles.routeWrap}>
            <View style={styles.routeSegmentA} />
            <View style={styles.routeSegmentB} />
          </View>
          <View style={styles.pickupDotOuter}>
            <View style={styles.pickupDotInner} />
          </View>
          <View style={styles.dropDotOuter}>
            <View style={styles.dropDotInner} />
          </View>
        </View>

        <View style={styles.sheet}>
          <View style={styles.grabberWrap}>
            <View style={styles.grabber} />
          </View>

          <ScrollView style={styles.vehicleScroll} contentContainerStyle={styles.vehicleContent} showsVerticalScrollIndicator={false}>
            <VehicleRow icon="two-wheeler" title="Xe máy" eta="2 phút • Đến lúc 14:35" price="15.000đ" selected />
            <VehicleRow icon="directions-car" title="Ô tô (4 chỗ)" eta="5 phút • Đến lúc 14:38" price="42.000đ" />
            <VehicleRow icon="airport-shuttle" title="Ô tô (7 chỗ)" eta="8 phút • Đến lúc 14:41" price="65.000đ" faded />
          </ScrollView>

          <View style={styles.footer}>
            <View style={styles.footerTop}>
              <View style={styles.walletPill}>
                <MaterialIcons name="account-balance-wallet" size={16} color="#2563EB" />
                <Text style={styles.walletText}>Ví ShopeePay</Text>
                <MaterialIcons name="expand-more" size={16} color="#A1A1AA" />
              </View>

              <View style={styles.promoRow}>
                <MaterialIcons name="sell" size={16} color="#F2590D" />
                <Text style={styles.promoText}>Ưu đãi lên đến 20k</Text>
                <MaterialIcons name="chevron-right" size={16} color="#F2590D" />
              </View>
            </View>

            <TouchableOpacity style={styles.bookButton} onPress={() => router.push('/ride/rideSearching')}>
              <Text style={styles.bookButtonText}>Đặt xe</Text>
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

function VehicleRow({
  icon,
  title,
  eta,
  price,
  selected,
  faded,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  eta: string;
  price: string;
  selected?: boolean;
  faded?: boolean;
}) {
  return (
    <TouchableOpacity style={[styles.vehicleItem, selected && styles.vehicleItemSelected, faded && styles.vehicleItemFaded]}>
      <View style={[styles.vehicleIcon, selected ? styles.vehicleIconSelected : styles.vehicleIconNormal]}>
        <MaterialIcons name={icon} size={36} color={selected ? Colors.primary : Colors.gray[400]} />
      </View>

      <View style={styles.vehicleInfo}>
        <View style={styles.vehicleHeader}>
          <Text style={styles.vehicleTitle}>{title}</Text>
          <Text style={styles.vehiclePrice}>{price}</Text>
        </View>
        <Text style={styles.vehicleEta}>{eta}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.gray[100],
  },
  flexOne: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  topActions: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 30,
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  mapArea: {
    height: '48%',
    backgroundColor: '#F1F5F9',
  },
  gridOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2,
    backgroundColor: '#F1F5F9',
  },
  road: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  roadA: {
    top: '20%',
    left: -20,
    right: -20,
    height: 32,
    transform: [{ rotate: '12deg' }],
  },
  roadB: {
    top: -20,
    bottom: -20,
    left: '40%',
    width: 48,
    transform: [{ rotate: '-6deg' }],
  },
  roadC: {
    bottom: '30%',
    left: -20,
    right: -20,
    height: 36,
    transform: [{ rotate: '-3deg' }],
  },
  poiA: {
    position: 'absolute',
    top: '15%',
    left: '20%',
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  poiB: {
    position: 'absolute',
    bottom: '40%',
    right: '15%',
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  poiText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#71717A',
    textTransform: 'uppercase',
  },
  routeWrap: {
    position: 'absolute',
    left: 120,
    right: 90,
    top: 150,
    bottom: 82,
  },
  routeSegmentA: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 110,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#F2590D',
    transform: [{ rotate: '-8deg' }],
  },
  routeSegmentB: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 130,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#F2590D',
    transform: [{ rotate: '82deg' }],
  },
  pickupDotOuter: {
    position: 'absolute',
    left: 116,
    bottom: 80,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickupDotInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.green,
  },
  dropDotOuter: {
    position: 'absolute',
    right: 88,
    top: 146,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropDotInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  sheet: {
    flex: 1,
    marginTop: -24,
    borderTopLeftRadius: BorderRadius.xxl,
    borderTopRightRadius: BorderRadius.xxl,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },
  grabberWrap: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 6,
  },
  grabber: {
    width: 40,
    height: 4,
    borderRadius: 999,
    backgroundColor: '#E4E4E7',
  },
  vehicleScroll: {
    flex: 1,
  },
  vehicleContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  vehicleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  vehicleItemSelected: {
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: 'rgba(249,115,22,0.08)',
  },
  vehicleItemFaded: {
    opacity: 0.8,
  },
  vehicleIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  vehicleIconSelected: {
    backgroundColor: Colors.white,
  },
  vehicleIconNormal: {
    backgroundColor: '#F4F4F5',
  },
  vehicleInfo: {
    flex: 1,
  },
  vehicleHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  vehicleTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
  },
  vehiclePrice: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.black,
  },
  vehicleEta: {
    marginTop: 2,
    fontSize: 12,
    color: '#71717A',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  footerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  walletPill: {
    height: 34,
    borderRadius: 999,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletText: {
    marginHorizontal: 6,
    fontSize: 12,
    fontWeight: '700',
    color: Colors.gray[700],
  },
  promoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  promoText: {
    marginHorizontal: 2,
    fontSize: 12,
    fontWeight: '700',
    color: Colors.primary,
  },
  bookButton: {
    height: ButtonHeights.xl,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primary,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  bookButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.white,
  },
  indicatorWrap: {
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    width: 128,
    height: 6,
    borderRadius: 999,
    backgroundColor: '#E4E4E7',
  },
});
