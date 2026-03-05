import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useRouter } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { push } from 'expo-router/build/global-state/routing';

const FindingDriverScreen = () => {
  const [searchTime, setSearchTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSearchTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const region = {
    latitude: 10.7769,
    longitude: 106.7009,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  };

  // Nearby drivers
  const nearbyDrivers = [
    { id: 1, latitude: 10.7750, longitude: 106.6990 },
    { id: 2, latitude: 10.7780, longitude: 106.7020 },
    { id: 3, latitude: 10.7740, longitude: 106.7040 },
    { id: 4, latitude: 10.7790, longitude: 106.6980 },
  ];

  const handleCancel = () => {
    // Cancel order
    console.log('Cancel order');
    // Test next page
    router.push("/deliverys/driverEnRoute")
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Map */}
      <View style={styles.mapContainer}>
        <MapView 
          style={styles.map}
          initialRegion={region}
        >
          {/* Pickup Location */}
          <Marker coordinate={{ latitude: 10.7769, longitude: 106.7009 }}>
            <View style={styles.packageMarker}>
              <Feather name="box" size={24} color="white" />
            </View>
          </Marker>

          {/* Nearby Drivers */}
          {nearbyDrivers.map((driver) => (
            <Marker key={driver.id} coordinate={driver}>
              <View style={styles.driverMarker}>
                <FontAwesome name="motorcycle" size={20} color="white" />
              </View>
            </Marker>
          ))}
        </MapView>

        {/* Pickup Location Label */}
        <View style={styles.locationLabel}>
          <Text style={styles.locationLabelText}>235 Đông Khởi</Text>
        </View>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Loading Section */}
      <View style={styles.loadingSection}>
        <ActivityIndicator size="large" color="#FF6B35" />
        <Text style={styles.loadingTitle}>Đang tìm tài xế giao hàng...</Text>
        <Text style={styles.loadingSubtitle}>
          Hệ thống đang kết nối với tài xế gần bạn nhất
        </Text>
      </View>

      {/* Order Info */}
      <View style={styles.orderInfo}>
        <View style={styles.serviceCard}>
          <View style={styles.serviceIcon}>
            <MaterialCommunityIcons name="lightning-bolt" size={24} color="white" />
          </View>
          <View style={styles.serviceDetails}>
            <Text style={styles.serviceName}>Giao hàng Express</Text>
            <Text style={styles.servicePrice}>45.000đ</Text>
          </View>
        </View>

        <View style={styles.deliveryAddress}>
          <Text style={styles.deliveryLabel}>ĐẾN</Text>
          <Text style={styles.deliveryText}>
            123 Nguyễn Trãi, Quận 1, TP. HCM
          </Text>
        </View>
      </View>

      {/* Cancel Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Hủy chuyến</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mapContainer: {
    height: 400,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  packageMarker: {
    width: 40,
    height: 40,
    backgroundColor: '#3B82F6',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  driverMarker: {
    width: 40,
    height: 40,
    backgroundColor: '#FF6B35',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  locationLabel: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: [{ translateX: -60 }, { translateY: -80 }],
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationLabelText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 48,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loadingSection: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  loadingTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 16,
    marginBottom: 8,
  },
  loadingSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  orderInfo: {
    paddingHorizontal: 24,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF7ED',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  serviceIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#FF6B35',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  serviceDetails: {
    flex: 1,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  servicePrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FF6B35',
  },
  deliveryAddress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#9CA3AF',
    marginRight: 8,
  },
  deliveryText: {
    flex: 1,
    fontSize: 14,
    color: '#1F2937',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  cancelButton: {
    height: 56,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
  },
});

export default FindingDriverScreen;
