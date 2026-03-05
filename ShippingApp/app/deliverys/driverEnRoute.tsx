import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import MapView, { Marker, Polyline } from 'react-native-maps';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const DriverEnRouteScreen = () => {
  const router = useRouter();
  const region = {
    latitude: 10.7750,
    longitude: 106.6995,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  // Route from driver to pickup
  const routeCoordinates = [
    { latitude: 10.7720, longitude: 106.6980 }, // Driver location
    { latitude: 10.7769, longitude: 106.7009 }, // Pickup location
  ];

  const order = {
    id: 'EX-982310',
    price: 45000,
    recipient: 'Nguyễn Văn A',
    address: '123 Nguyễn Trãi, Quận 1, TP. HCM',
    estimatedTime: '12:45',
  };

  const driver = {
    name: 'Nguyễn Văn Tài',
    vehicle: 'Honda Winner',
    licensePlate: '29-G1',
    rating: 4.9,
    distance: 123.45,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Map */}
      <View style={styles.mapContainer}>
        <MapView 
          style={styles.map}
          initialRegion={region}
        >
          {/* Route Line */}
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#FF6B35"
            strokeWidth={3}
            lineDashPattern={[10, 5]}
          />

          {/* Driver Marker */}
          <Marker coordinate={routeCoordinates[0]}>
            <View style={styles.driverMarker}>
              <FontAwesome name="motorcycle" size={18} color="white" />
            </View>
          </Marker>

          {/* Pickup Marker */}
          <Marker coordinate={routeCoordinates[1]}>
            <View style={styles.pickupMarker}>
              <Entypo name="location-pin" size={18} color="white" />
            </View>
          </Marker>
        </MapView>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Theo dõi đơn hàng</Text>
          <TouchableOpacity style={styles.helpButton}>
            <FontAwesome name="question" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Map Controls */}
        <View style={styles.mapControls}>
          <TouchableOpacity style={styles.controlButton}>
            <Entypo name="location-pin" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <AntDesign name="minus" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <View style={styles.handle} />

        {/* Status */}
        <View style={styles.statusSection}>
          <View style={styles.statusDot} />
          <View style={styles.statusInfo}>
            <Text style={styles.statusTitle}>Đang giao hàng</Text>
            <Text style={styles.statusSubtitle}>
              Tài xế đang đến vị trí của bạn
            </Text>
          </View>
          <View style={styles.estimatedTime}>
            <Text style={styles.estimatedLabel}>Dự kiến: </Text>
            <Text style={styles.estimatedValue}>{order.estimatedTime}</Text>
          </View>
        </View>

        {/* Order Card */}
        <View style={styles.orderCard}>
          <View style={styles.orderIcon}>
            <Feather name="box" size={20} color="white" />
          </View>
          
          <View style={styles.orderDetails}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderId}>ID: #{order.id}</Text>
              <Text style={styles.orderPrice}>
                {order.price.toLocaleString('vi-VN')}đ
              </Text>
            </View>
            <Text style={styles.orderRecipient}>Người nhận: {order.recipient}</Text>
            <Text style={styles.orderAddress} numberOfLines={1}>
              Địa chỉ: {order.address}
            </Text>
          </View>
        </View>

        {/* Driver Card */}
        <View style={styles.driverCard}>
          <View style={styles.driverPhotoContainer}>
            <Image 
              source={{ uri: driver.photo }}
              style={styles.driverPhoto}
            />
            <View style={styles.ratingBadge}>
              <Text style={styles.ratingText}>{driver.rating}</Text>
              <AntDesign name="star" size={12} color="black" />
            </View>
          </View>

          <View style={styles.driverInfo}>
            <Text style={styles.driverName}>{driver.name}</Text>
            <Text style={styles.driverVehicle}>
              {driver.vehicle} • {driver.licensePlate}
            </Text>
            <Text style={styles.driverDistance}>{driver.distance} km</Text>
          </View>

          <View style={styles.driverActions}>
            <TouchableOpacity style={styles.callButton} onPress={() => router.push("/deliverys/orderConfirmation")}>
              <AntDesign name="phone" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.messageButton}>
              <AntDesign name="message" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
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
    height: '50%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  driverMarker: {
    width: 40,
    height: 40,
    backgroundColor: '#FF6B35',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  pickupMarker: {
    width: 40,
    height: 40,
    backgroundColor: '#FF6B35',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    flex: 1,
    textAlign: 'center',
  },
  helpButton: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    borderRadius: 20,
  },
  mapControls: {
    position: 'absolute',
    bottom: 20,
    right: 16,
    gap: 12,
  },
  controlButton: {
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
  bottomSheet: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  statusSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusDot: {
    width: 12,
    height: 12,
    backgroundColor: '#10B981',
    borderRadius: 6,
    marginRight: 12,
  },
  statusInfo: {
    flex: 1,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FF6B35',
    marginBottom: 4,
  },
  statusSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  estimatedTime: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF7ED',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  estimatedLabel: {
    fontSize: 13,
    color: '#6B7280',
  },
  estimatedValue: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FF6B35',
  },
  orderCard: {
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  orderIcon: {
    width: 56,
    height: 56,
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  orderDetails: {
    flex: 1,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6B35',
  },
  orderRecipient: {
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 4,
  },
  orderAddress: {
    fontSize: 13,
    color: '#6B7280',
  },
  driverCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
  },
  driverPhotoContainer: {
    position: 'relative',
    marginRight: 12,
  },
  driverPhoto: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E5E7EB',
  },
  ratingBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FCD34D',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1F2937',
    marginRight: 2,
  },
  driverInfo: {
    flex: 1,
  },
  driverName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  driverVehicle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2,
  },
  driverDistance: {
    fontSize: 13,
    color: '#6B7280',
  },
  driverActions: {
    flexDirection: 'row',
    gap: 12,
  },
  callButton: {
    width: 48,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  messageButton: {
    width: 48,
    height: 48,
    backgroundColor: '#FF6B35',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DriverEnRouteScreen;
