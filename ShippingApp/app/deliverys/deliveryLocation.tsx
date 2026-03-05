import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import MapView, { Marker, Polyline } from 'react-native-maps';

import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const DeliveryLocationScreen = () => {
  const router = useRouter();
  const [address, setAddress] = useState('123 Nguyễn Trãi, Quận 1');
  const [selectedType, setSelectedType] = useState('office'); // office, home, favorite, custom

  const region = {
    latitude: 10.7720,
    longitude: 106.6980,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  // Route coordinates
  const routeCoordinates = [
    { latitude: 10.7769, longitude: 106.7009 }, // Pickup
    { latitude: 10.7720, longitude: 106.6980 }, // Delivery
  ];

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
          
          {/* Pickup Marker */}
          <Marker coordinate={routeCoordinates[0]}>
            <View style={styles.pickupMarker} />
          </Marker>

          {/* Delivery Marker */}
          <Marker coordinate={routeCoordinates[1]}>
            <View style={styles.deliveryMarker} />
          </Marker>
        </MapView>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Entypo name="location-pin" size={20} color="black" style={styles.searchIcon}/>
          <TextInput
            style={styles.searchInput}
            value={address}
            onChangeText={setAddress}
            placeholder="Nhập địa chỉ giao hàng..."
          />
          <TouchableOpacity onPress={() => setAddress('')}>
            <AntDesign name="close" size={18} color="black" style={styles.clearIcon}/>
          </TouchableOpacity>
        </View>

        {/* Location Type Buttons */}
        <View style={styles.typeButtons}>
          <TouchableOpacity 
            style={[styles.typeButton, selectedType === 'office' && styles.typeButtonActive]}
            onPress={() => setSelectedType('office')}
          >
            <AntDesign name="clock-circle" size={18} color="black" style={styles.typeIcon}/>
            <Text style={[styles.typeText, selectedType === 'office' && styles.typeTextActive]}>
              Công ty
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.typeButton, selectedType === 'home' && styles.typeButtonActive]}
            onPress={() => setSelectedType('home')}
          >
            <FontAwesome6 name="house" size={18} color="black" style={styles.typeIcon}/>
            <Text style={[styles.typeText, selectedType === 'home' && styles.typeTextActive]}>
              Nhà riêng
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.typeButton, selectedType === 'favorite' && styles.typeButtonActive]}
            onPress={() => setSelectedType('favorite')}
          >
            <AntDesign name="star" size={18} color="black" style={styles.typeIcon}/>
            <Text style={[styles.typeText, selectedType === 'favorite' && styles.typeTextActive]}>
              Yêu thích
            </Text>
          </TouchableOpacity>

          <Text style={styles.customLabel}>ÉN TẠO DẪN</Text>
        </View>

        {/* View on Map Button */}
        <TouchableOpacity style={styles.viewMapButton}>
          <Entypo name="map" size={18} color="black" style={styles.viewMapIcon}/>
          <Text style={styles.viewMapText}>Xem trên bản đồ</Text>
        </TouchableOpacity>

        {/* Map Controls */}
        <View style={styles.mapControls}>
          <TouchableOpacity style={styles.controlButton}>
            <AntDesign name="compass" size={24} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Entypo name="location-pin" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <View style={styles.handle} />
        
        <View style={styles.locationInfo}>
          <View style={styles.locationIcon}>
            <Entypo name="location-pin" size={24} color="black" />
          </View>
          
          <View style={styles.locationDetails}>
            <Text style={styles.locationLabel}>ĐIỂM GIAO HÀNG</Text>
            <Text style={styles.locationAddress}>
              123 Nguyễn Trãi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh
            </Text>
            <Text style={styles.nearbyText}>Gần khách sạn New World</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.changeText}>Sửa</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noteSection}>
          <MaterialIcons name="edit-note" size={24} color="black" style={styles.noteIcon}/>
          <TextInput
            style={styles.noteInput}
            placeholder="Ghi chú cho tài xế (VD: Lầu 2...)"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={() => router.push("/deliverys/orderDetails")}>
          <Text style={styles.confirmButtonText}>Xác nhận điểm giao</Text>
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
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  pickupMarker: {
    width: 30,
    height: 30,
    backgroundColor: '#10B981',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  deliveryMarker: {
    width: 30,
    height: 30,
    backgroundColor: '#DC2626',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#FFFFFF',
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
  searchBar: {
    position: 'absolute',
    top: 16,
    left: 72,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#1F2937',
  },
  clearIcon: {
    color: '#9CA3AF',
    paddingHorizontal: 8,
  },
  typeButtons: {
    position: 'absolute',
    top: 80,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  typeButton: {
    flexDirection: 'row',
    alignItems: 'center',
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
  typeButtonActive: {
    backgroundColor: '#FF6B35',
  },
  typeIcon: {
    marginRight: 6,
  },
  typeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  typeTextActive: {
    color: '#FFFFFF',
  },
  customLabel: {
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '600',
  },
  viewMapButton: {
    position: 'absolute',
    bottom: 320,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
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
  viewMapIcon: {
    marginRight: 6,
  },
  viewMapText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  mapControls: {
    position: 'absolute',
    bottom: 320,
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
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
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
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  locationIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#FEE2E2',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  locationDetails: {
    flex: 1,
  },
  locationLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#9CA3AF',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  locationAddress: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  nearbyText: {
    fontSize: 13,
    color: '#6B7280',
  },
  changeText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FF6B35',
  },
  noteSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  noteIcon: {
    marginRight: 12,
  },
  noteInput: {
    flex: 1,
    fontSize: 15,
    color: '#1F2937',
  },
  confirmButton: {
    height: 56,
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default DeliveryLocationScreen;
