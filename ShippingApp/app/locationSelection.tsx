import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function LocationSelectionScreen(){
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chọn địa chỉ</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm tòa nhà, tên đường..."
            placeholderTextColor="#9CA3AF"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Use Current Location Button */}
        <TouchableOpacity style={styles.currentLocationButton}>
          <View style={styles.currentLocationIcon}>
            <Text style={styles.targetIcon}>🎯</Text>
          </View>
          <View style={styles.currentLocationTextContainer}>
            <Text style={styles.currentLocationTitle}>Sử dụng vị trí hiện tại</Text>
            <Text style={styles.currentLocationSubtitle}>Đang bật định vị GPS</Text>
          </View>
        </TouchableOpacity>

        {/* Saved Locations Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ĐỊA CHỈ ĐÃ LƯU</Text>
          
          {/* Home */}
          <TouchableOpacity style={styles.locationItem}>
            <View style={styles.locationIconContainer}>
              <Text style={styles.locationIcon}>🏠</Text>
            </View>
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationTitle}>Nhà</Text>
              <Text style={styles.locationAddress} numberOfLines={2}>
                256 Nguyễn Đình Chiểu, Phường 6, Quận 3, TP. Hồ Chí Minh
              </Text>
            </View>
          </TouchableOpacity>

          {/* Work */}
          <TouchableOpacity style={styles.locationItem}>
            <View style={styles.locationIconContainer}>
              <Text style={styles.locationIcon}>💼</Text>
            </View>
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationTitle}>Công ty</Text>
              <Text style={styles.locationAddress} numberOfLines={2}>
                Tòa nhà Bitexco, 2 Hải Triều, Bến Nghé, Quận 1, TP. Hồ Chí Minh
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Recent Locations Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ĐỊA CHỈ GẦN ĐÂY</Text>
          
          <TouchableOpacity style={styles.locationItem}>
            <View style={styles.locationIconContainer}>
              <Text style={styles.historyIcon}>🕐</Text>
            </View>
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationTitle}>123 Lê Lợi</Text>
              <Text style={styles.locationAddress} numberOfLines={2}>
                Phường Bến Thành, Quận 1, TP. Hồ Chí Minh
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.locationItem}>
            <View style={styles.locationIconContainer}>
              <Text style={styles.historyIcon}>🕐</Text>
            </View>
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationTitle}>Landmark 81</Text>
              <Text style={styles.locationAddress} numberOfLines={2}>
                208 Nguyễn Hữu Cảnh, Phường 22, Bình...
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.locationItem}>
            <View style={styles.locationIconContainer}>
              <Text style={styles.historyIcon}>🕐</Text>
            </View>
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationTitle}>Vinhomes Central Park</Text>
              <Text style={styles.locationAddress} numberOfLines={2}>
                Phường 22, Quận Bình Thạnh, TP. Hồ Chí Minh
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapIcon}>🗺️</Text>
          <Text style={styles.mapButtonText}>Chọn trên bản đồ</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '#1F2937',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#1F2937',
  },
  currentLocationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFF7ED',
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 12,
  },
  currentLocationIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  targetIcon: {
    fontSize: 24,
  },
  currentLocationTextContainer: {
    flex: 1,
  },
  currentLocationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6B35',
    marginBottom: 4,
  },
  currentLocationSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#9CA3AF',
    letterSpacing: 0.5,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  locationIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#F3F4F6',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  locationIcon: {
    fontSize: 24,
  },
  historyIcon: {
    fontSize: 24,
  },
  locationTextContainer: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  locationAddress: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  bottomButtonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    backgroundColor: '#FFFFFF',
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6B35',
    paddingVertical: 16,
    borderRadius: 12,
  },
  mapIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  mapButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

