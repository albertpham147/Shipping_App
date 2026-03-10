import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

import userImage from '@/assets/icons/user.png'

export default function orderTrackingScreen(){
  const [currentStatus, setCurrentStatus] = useState('preparing'); // confirmed, preparing, picking_up, delivering

  const router = useRouter();

  // Order details
  const order = {
    id: '12345',
    estimatedTime: '12:45',
    estimatedMinutes: 12,
    items: [
      {
        id: 1,
        name: '1x Bún đậu mắm tôm...',
        total: 65000,
      }
    ],
    driver: {
      name: 'Trần Văn Bình',
      vehicle: 'Honda AirBlade',
      licensePlate: '59-P1 888.88',
      rating: 4.9,
    }
  };

  // Order status timeline
  const statuses = [
    {
      id: 'confirmed',
      title: 'Đã nhận đơn hàng',
      subtitle: '12:30 • Nhà hàng đã xác nhận',
      icon: (<AntDesign name="check" size={24} color="white" />),
      iconBg: '#FF6B35',
      completed: true,
    },
    {
      id: 'preparing',
      title: 'Nhà hàng đang chuẩn bị món',
      subtitle: 'Đang nấu • Dự kiến hoàn tất lúc 12:42',
      icon: (<MaterialCommunityIcons name="silverware-fork-knife" size={24} color="white" />),
      iconBg: '#FF6B35',
      completed: false,
      active: true,
    },
    {
      id: 'picking_up',
      title: 'Tài xế đang đến lấy hàng',
      subtitle: '',
      icon: (<FontAwesome5 name="boxes" size={24} color="black" />),
      iconBg: '#E5E7EB',
      completed: false,
    },
    {
      id: 'delivering',
      title: 'Đang giao hàng',
      subtitle: '',
      icon: (<FontAwesome name="motorcycle" size={24} color="black" />),
      iconBg: '#E5E7EB',
      completed: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Map Section */}
      <View style={styles.mapContainer}>
        {/* Placeholder for map - you would use react-native-maps here */}
        <View style={styles.mapPlaceholder}>
          {/* <Text style={styles.mapText}>Map View</Text> */}
          <MapView 
            style={styles.map}
            provider={PROVIDER_GOOGLE}>
            
          </MapView>
        </View>


        <TouchableOpacity style={styles.backButton} onPress={() => {router.back();}}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        {/* Top Info Cards */}
        <View style={styles.topCards}>
            {/* Back Button */}

            <View style={styles.trackingCard}>
            <Text style={styles.trackingTitle}>Theo dõi đơn hàng</Text>
            <TouchableOpacity style={styles.supportButton}>
              <Text style={styles.supportText}>Hỗ trợ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      {/* Order Status Section */}
      <ScrollView style={styles.statusContainer} showsVerticalScrollIndicator={false}>
        {/* Status Timeline */}
        <View style={styles.timeline}>
          {statuses.map((status, index) => (
            <View key={status.id} style={styles.timelineItem}>
              <View style={styles.timelineIconContainer}>
                <View style={[
                  styles.timelineIcon,
                  { backgroundColor: status.iconBg }
                ]}>
                  <Text style={styles.timelineIconText}>
                    {status.icon}
                  </Text>
                </View>
                {index < statuses.length - 1 && (
                  <View style={[
                    styles.timelineLine,
                    status.completed && styles.timelineLineCompleted
                  ]} />
                )}
              </View>

              <View style={styles.timelineContent}>
                <Text style={[
                  styles.timelineTitle,
                  status.active && styles.timelineTitleActive
                ]}>
                  {status.title}
                </Text>
                {status.subtitle && (
                  <Text style={styles.timelineSubtitle}>{status.subtitle}</Text>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* Order Items */}
        <View style={styles.orderItemsSection}>
          {order.items.map((item) => (
            <View key={item.id} style={styles.orderItem}>
              <FontAwesome5 name="clipboard-list" size={24} color="black" style={styles.orderItemIcon}/>
              <View style={styles.orderItemInfo}>
                <Text style={styles.orderItemName}>{item.name}</Text>
                <Text style={styles.orderItemTotal}>
                  Tổng cộng: {item.total.toLocaleString('vi-VN')}đ
                </Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.orderItemDetail}>Chi tiết</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Driver Info */}
        <View style={styles.driverSection}>
          <Image 
            source={userImage}
            style={styles.driverPhoto}
          />
          <View style={styles.driverBadge}>
            <AntDesign name="star" size={24} color="#FCD34D" style={styles.driverBadgeIcon} />
          </View>
          
          <View style={styles.driverInfo}>
            <View style={styles.driverHeader}>
              <Text style={styles.driverName}>{order.driver.name}</Text>
              <View style={styles.partnerBadge}>
                <Text style={styles.partnerText}>ĐỐI TÁC</Text>
              </View>
            </View>
            <Text style={styles.driverVehicle}>
              {order.driver.vehicle} • {order.driver.licensePlate}
            </Text>
            <View style={styles.driverRating}>
              <Text style={styles.ratingText}>{order.driver.rating} </Text>
              <AntDesign name="star" size={24} color="black" style={styles.driverBadgeIcon} />
            </View>
          </View>
        </View>

        {/* Add spacing for buttons */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.messageButton} onPress={() => { alert('Mở cửa sổ chat với tài xế...'); }}>
          <AntDesign name="message" size={24} color="black" style={styles.messageIcon}/>
          <Text style={styles.messageButtonText}>NHẮN TIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.callButton} onPress={() => { alert('Gọi điện cho tài xế...'); router.push('/foods/orderConfirmation'); }}>
          <Feather name="phone" size={24} color="white" style={styles.callIcon}/>
          <Text style={styles.callButtonText}> Gọi điện</Text>
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
  
  // Map Section
  mapContainer: {
    height: 350,
    position: 'relative',
  },
  mapPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#D1FAE5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  restaurantMarker: {
    top: 100,
    left: 100,
    backgroundColor: '#1F2937',
  },
  driverMarker: {
    top: 180,
    right: 100,
    backgroundColor: '#FF6B35',
  },
  markerIcon: {
    fontSize: 24,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  // Top Cards
  topCards: {
    position: 'absolute',
    top: 16,
    left: 70,
    right: 16,
  },
  trackingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  trackingTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
  supportButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  supportText: {
    fontSize: 14,
    color: '#FF6B35',
    fontWeight: '600',
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
  serviceIconText: {
    fontSize: 24,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  serviceType: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
  estimatedTimeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  estimatedLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  estimatedTimeContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  estimatedTime: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1F2937',
  },
  
  // Status Container
  statusContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  // Timeline
  timeline: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  timelineIconContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  timelineIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineIconText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 4,
  },
  timelineLineCompleted: {
    backgroundColor: '#FF6B35',
  },
  timelineContent: {
    flex: 1,
    paddingBottom: 20,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: 4,
  },
  timelineTitleActive: {
    color: '#FF6B35',
    fontWeight: '700',
  },
  timelineSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  
  // Order Items
  orderItemsSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F3F4F6',
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
  },
  orderItemIcon: {
    marginRight: 12,
  },
  orderItemInfo: {
    flex: 1,
  },
  orderItemName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  orderItemTotal: {
    fontSize: 13,
    color: '#6B7280',
  },
  orderItemDetail: {
    fontSize: 14,
    color: '#FF6B35',
    fontWeight: '600',
  },
  
  // Driver Section
  driverSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  driverPhoto: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E5E7EB',
    marginRight: 12,
  },
  driverBadge: {
    position: 'absolute',
    left: 60,
    top: 65,
    width: 28,
    height: 28,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#3b3a3a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  driverBadgeIcon: {
    fontSize: 12,
  },
  driverInfo: {
    flex: 1,
  },
  driverHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  driverName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1F2937',
    marginRight: 8,
  },
  partnerBadge: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  partnerText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#DC2626',
  },
  driverVehicle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  driverRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  
  // Bottom Buttons
  bottomButtons: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    backgroundColor: '#FFFFFF',
  },
  messageButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FF6B35',
    borderRadius: 12,
    paddingVertical: 16,
  },
  messageIcon: {
    marginRight: 8,
  },
  messageButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FF6B35',
  },
  callButton: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    paddingVertical: 16,
  },
  callIcon: {
    marginRight: 8,
  },
  callButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

