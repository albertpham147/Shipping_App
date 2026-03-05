import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const DeliverySuccessScreen = () => {
  const router = useRouter();
  const [driverRating, setDriverRating] = useState(4);
  const [review, setReview] = useState('');

  const order = {
    id: 'EX-982310',
    recipient: 'Nguyễn Văn A',
    deliveryTime: '15:45',
    deliveryDate: '24/05/2024',
    total: 45000,
  };

  const driver = {
    name: 'Trần Văn Bình',
    role: 'Tài xế của bạn',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  };

  const handleRatingStar = (rating: number) => {
    setDriverRating(rating);
  };

  const handleSubmitReview = () => {
    console.log('Submit review:', { rating: driverRating, review });
    // Navigate to home
    router.push('/(tabs)')
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Xác nhận giao hàng</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Success Icon */}
        <View style={styles.successSection}>
          <View style={styles.successCircleOuter}>
            <View style={styles.successCircle}>
              <AntDesign name="check" size={48} color="white" />
            </View>
          </View>
        </View>

        {/* Success Message */}
        <Text style={styles.successTitle}>Giao hàng thành công</Text>
        <Text style={styles.successSubtitle}>
          Đơn hàng của bạn đã được giao đến nơi an toàn.
        </Text>

        {/* Order Summary Card */}
        <View style={styles.orderCard}>
          <Text style={styles.orderCardTitle}>CHI TIẾT ĐƠN HÀNG</Text>
          <Text style={styles.orderId}>#{order.id}</Text>
          
          <View style={styles.orderDetails}>
            <View style={styles.orderDetailRow}>
              <Text style={styles.orderDetailLabel}>Người nhận:</Text>
              <Text style={styles.orderDetailValue}>{order.recipient}</Text>
            </View>
            
            <View style={styles.orderDetailRow}>
              <Text style={styles.orderDetailLabel}>Thời gian giao:</Text>
              <Text style={styles.orderDetailValue}>
                {order.deliveryTime}, {order.deliveryDate}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Tổng thanh toán</Text>
            <Text style={styles.totalAmount}>
              {order.total.toLocaleString('vi-VN')}đ
            </Text>
          </View>
        </View>

        {/* Driver Rating Section */}
        <Text style={styles.ratingTitle}>Đánh giá tài xế</Text>

        <View style={styles.driverCard}>
          <Image 
            source={{ uri: driver.photo }}
            style={styles.driverPhoto}
          />
          <View style={styles.driverInfo}>
            <Text style={styles.driverName}>{driver.name}</Text>
            <Text style={styles.driverRole}>{driver.role}</Text>
          </View>
        </View>

        {/* Star Rating */}
        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity
              key={star}
              onPress={() => handleRatingStar(star)}
              style={styles.starButton}
            >
              <AntDesign name="star" size={24} color="black" style={[
                styles.star,
                driverRating >= star && styles.starActive
              ]}/>
            </TouchableOpacity>
          ))}
        </View>

        {/* Review Input */}
        <TextInput
          style={styles.reviewInput}
          placeholder="Chia sẻ trải nghiệm của bạn về dịch vụ..."
          placeholderTextColor="#9CA3AF"
          multiline
          numberOfLines={4}
          value={review}
          onChangeText={setReview}
          textAlignVertical="top"
        />

        {/* Add spacing for buttons */}
        <View style={{ height: 140 }} />
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity 
          style={styles.homeButton}
          onPress={handleSubmitReview}
        >
          <Text style={styles.homeButtonText}>Về trang chủ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.receiptButton}>
          <Text style={styles.receiptButtonText}>Xem biên nhận</Text>
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
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  successSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  successCircleOuter: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFF7ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF6B35',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  successSubtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
  },
  orderCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 20,
    marginBottom: 32,
  },
  orderCardTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#9CA3AF',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  orderId: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  orderDetails: {
    marginBottom: 16,
  },
  orderDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderDetailLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  orderDetailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 16,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF6B35',
  },
  ratingTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 20,
  },
  driverCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  driverPhoto: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E5E7EB',
    marginRight: 16,
  },
  driverInfo: {
    alignItems: 'flex-start',
  },
  driverName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  driverRole: {
    fontSize: 14,
    color: '#6B7280',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    gap: 8,
  },
  starButton: {
    padding: 4,
  },
  star: {
    fontSize: 40,
    color: '#E5E7EB',
  },
  starActive: {
    color: '#FF6B35',
  },
  reviewInput: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    color: '#1F2937',
    minHeight: 120,
    marginBottom: 24,
  },
  bottomButtons: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  homeButton: {
    height: 56,
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  homeButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  receiptButton: {
    height: 56,
    backgroundColor: 'transparent',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  receiptButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6B35',
  },
});

export default DeliverySuccessScreen;
