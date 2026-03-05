import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import { useRouter } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

const PickupLocationScreen = () => {
  const router = useRouter();
  const [address, setAddress] = useState('235 Đông Khởi, Quận 1, TP. HCM');
  const [selectedType, setSelectedType] = useState('home'); // home, office, nearby

  const region = {
    latitude: 10.7769,
    longitude: 106.7009,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Map */}
      <View style={styles.mapContainer}>
        <MapView 
          style={styles.map}
          initialRegion={region}
        >
          <Marker coordinate={{ latitude: 10.7769, longitude: 106.7009 }}>
            <View style={styles.markerContainer}>
              <View style={styles.marker} />
            </View>
          </Marker>
        </MapView>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black"/>
        </TouchableOpacity>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Octicons name="search" size={24} color="black" style={styles.searchIcon}/>
          <TextInput
            style={styles.searchInput}
            value={address}
            onChangeText={setAddress}
            placeholder="Nhập địa chỉ..."
          />
        </View>

        {/* Location Type Buttons */}
        <View style={styles.typeButtons}>
          <TouchableOpacity 
            style={[styles.typeButton, selectedType === 'home' && styles.typeButtonActive]}
            onPress={() => setSelectedType('home')}
          >
            <FontAwesome6 name="house" size={18} color="black" style={styles.typeIcon}/>
            <Text style={[styles.typeText, selectedType === 'home' && styles.typeTextActive]}>
              Nhà
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.typeButton, selectedType === 'office' && styles.typeButtonActive]}
            onPress={() => setSelectedType('office')}
          >
            <MaterialCommunityIcons name="office-building" size={18} color="black" style={styles.typeIcon}/>
            <Text style={[styles.typeText, selectedType === 'office' && styles.typeTextActive]}>
              Công ty
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.typeButton, selectedType === 'nearby' && styles.typeButtonActive]}
            onPress={() => setSelectedType('nearby')}
          >
            <AntDesign name="clock-circle" size={18} color="black" style={styles.typeIcon}/>
            <Text style={[styles.typeText, selectedType === 'nearby' && styles.typeTextActive]}>
              Gần đây
            </Text>
          </TouchableOpacity>
        </View>

        {/* Drag to Book Tooltip */}
        <View style={styles.tooltip}>
          <View style={styles.tooltipDots}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
          <Text style={styles.tooltipText}>Kéo để đặt vị trí</Text>
        </View>

        {/* View on Map Button */}
        <TouchableOpacity style={styles.viewMapButton}>
          <Entypo name="map" size={18} color="black" style={styles.viewMapIcon}/>
          <Text style={styles.viewMapText}>Xem trên bản đồ</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <View style={styles.handle} />
        
        <View style={styles.locationInfo}>
          <View style={styles.locationIcon}>
            <Entypo name="location-pin" size={28} color="black"/>
          </View>
          
          <View style={styles.locationDetails}>
            <Text style={styles.locationLabel}>ĐIỂM LẤY HÀNG</Text>
            <Text style={styles.locationAddress}>235 Đông Khởi</Text>
            <Text style={styles.locationSubAddress}>
              Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh
            </Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.changeText}>Thay đổi</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={() => router.push("/deliverys/deliveryLocation")}>
          <Text style={styles.confirmButtonText}>Xác nhận điểm lấy hàng</Text>
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
  markerContainer: {
    alignItems: 'center',
  },
  marker: {
    width: 40,
    height: 40,
    backgroundColor: '#10B981',
    borderRadius: 20,
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
  typeButtons: {
    position: 'absolute',
    top: 80,
    left: 16,
    flexDirection: 'row',
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
  tooltip: {
    position: 'absolute',
    left: '50%',
    top: '40%',
    transform: [{ translateX: -80 }],
    backgroundColor: '#FF6B35',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tooltipDots: {
    flexDirection: 'column',
    marginRight: 8,
    gap: 3,
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  tooltipText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  viewMapButton: {
    position: 'absolute',
    bottom: 320,
    right: 16,
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
    alignItems: 'center',
    marginBottom: 20,
  },
  locationIcon: {
    width: 56,
    height: 56,
    backgroundColor: '#D1FAE5',
    borderRadius: 28,
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
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 2,
  },
  locationSubAddress: {
    fontSize: 13,
    color: '#6B7280',
  },
  changeText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FF6B35',
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

export default PickupLocationScreen;
