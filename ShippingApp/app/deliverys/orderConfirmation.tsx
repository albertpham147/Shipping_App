import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

const OrderConfirmationScreen = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('wallet'); // wallet, cash, card

  const order = {
    service: 'Giao hàng nhanh (Express)',
    serviceTime: '30-60 phút',
    pickupAddress: 'Hẻm 458 Ba Tháng Hai, Quận 10',
    deliveryAddress: '123 Nguyễn Trãi, Quận 1, TP. HCM',
    recipientName: 'Nguyễn Văn A',
    packageType: 'Quần áo',
    vehicleType: 'Xe máy',
    distance: 4.5,
    baseFare: 50000,
    serviceFee: 5000,
    discount: -10000,
    total: 45000,
    itemCount: 1,
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Xác nhận đơn hàng</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Service Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Dịch vụ</Text>
          <TouchableOpacity style={styles.serviceCard}>
            <View style={styles.serviceIcon}>
              <MaterialCommunityIcons name="lightning-bolt" size={24} color="black" />
            </View>
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>{order.service}</Text>
              <Text style={styles.serviceTime}>Giao ngay trong {order.serviceTime}</Text>
            </View>
            <MaterialIcons name="arrow-right" size={24} color="black" style={styles.chevron}/>
          </TouchableOpacity>
        </View>

        {/* Journey Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Hành trình</Text>
          
          <View style={styles.journeyCard}>
            {/* Pickup */}
            <View style={styles.journeyRow}>
              <View style={styles.journeyDot}>
                <View style={styles.pickupDot} />
              </View>
              <View style={styles.journeyLine} />
              <View style={styles.journeyInfo}>
                <Text style={styles.journeyLabel}>Điểm lấy hàng</Text>
                <Text style={styles.journeyAddress}>{order.pickupAddress}</Text>
              </View>
            </View>

            {/* Delivery */}
            <View style={[styles.journeyRow, { marginTop: 15 }]}>
              <View style={styles.journeyDot}>
                <View style={styles.deliveryDot} />
              </View>
              <View style={styles.journeyInfo}>
                <Text style={styles.journeyLabel}>
                  Điểm giao hàng • {order.recipientName}
                </Text>
                <Text style={styles.journeyAddress}>{order.deliveryAddress}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Package & Vehicle Info */}
        <View style={styles.infoRow}>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>LOẠI HÀNG HÓA</Text>
            <View style={styles.infoContent}>
              <Feather name="box" size={24} color="black" style={styles.infoIcon}/>
              <Text style={styles.infoText}>{order.packageType}</Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>PHƯƠNG THỨC</Text>
            <View style={styles.infoContent}>
              <FontAwesome name="motorcycle" size={24} color="black" style={styles.infoIcon}/>
              <Text style={styles.infoText}>{order.vehicleType}</Text>
            </View>
          </View>
        </View>

        {/* Payment Details */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Chi tiết thanh toán</Text>
          
          <View style={styles.paymentCard}>
            <View style={styles.paymentRow}>
              <Text style={styles.paymentLabel}>Giá cước ({order.distance} km)</Text>
              <Text style={styles.paymentValue}>
                {order.baseFare.toLocaleString('vi-VN')}đ
              </Text>
            </View>

            <View style={styles.paymentRow}>
              <Text style={styles.paymentLabel}>Phí dịch vụ</Text>
              <Text style={styles.paymentValue}>
                {order.serviceFee.toLocaleString('vi-VN')}đ
              </Text>
            </View>

            <View style={styles.paymentRow}>
              <Text style={[styles.paymentLabel, styles.discountLabel]}>
                Khuyến mãi
              </Text>
              <Text style={styles.discountValue}>
                {order.discount.toLocaleString('vi-VN')}đ
              </Text>
            </View>
          </View>
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.paymentMethodCard}>
            <View style={styles.paymentMethodIcon}>
              <AntDesign name="credit-card" size={24} color="white"/>
            </View>
            <View style={styles.paymentMethodInfo}>
              <Text style={styles.paymentMethodLabel}>Thanh toán bằng</Text>
              <Text style={styles.paymentMethodText}>Ví điện tử</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.changeText}>Thay đổi</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        {/* Add spacing for bottom bar */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.confirmButton} onPress={() => router.push("/deliverys/deliverySuccess")}>
          <View style={styles.confirmButtonLeft}>
            <Text style={styles.confirmPrice}>
              {order.total.toLocaleString('vi-VN')}đ
            </Text>
            <Text style={styles.confirmItems}>• {order.itemCount} kiện hàng</Text>
          </View>
          <View style={styles.confirmButtonRight}>
            <Text style={styles.confirmText}>Thanh toán & Đặt đơn</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
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
  section: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 8,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
  },
  serviceIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#FFF7ED',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  serviceTime: {
    fontSize: 13,
    color: '#6B7280',
  },
  chevron: {
    color: '#9CA3AF',
  },
  journeyCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
  },
  journeyRow: {
    flexDirection: 'row',
    position: 'relative',
  },
  journeyDot: {
    width: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 4,
  },
  pickupDot: {
    width: 12,
    height: 12,
    backgroundColor: '#9CA3AF',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#9CA3AF',
  },
  deliveryDot: {
    width: 12,
    height: 12,
    backgroundColor: '#FF6B35',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#FF6B35',
  },
  journeyLine: {
    position: 'absolute',
    left: 11,
    top: 20,
    width: 2,
    height: 30,
    backgroundColor: '#E5E7EB',
  },
  journeyInfo: {
    flex: 1,
    marginLeft: 12,
  },
  journeyLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 4,
  },
  journeyAddress: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  infoRow: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  },
  infoLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#9CA3AF',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  infoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    marginRight: 8,
  },
  infoText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  paymentCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  paymentLabel: {
    fontSize: 15,
    color: '#6B7280',
  },
  paymentValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  discountLabel: {
    color: '#10B981',
  },
  discountValue: {
    fontSize: 15,
    fontWeight: '700',
    color: '#10B981',
  },
  paymentMethodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
  },
  paymentMethodIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#FF6B35',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  paymentMethodInfo: {
    flex: 1,
  },
  paymentMethodLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 2,
  },
  paymentMethodText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  changeText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FF6B35',
  },
  bottomBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    padding: 16,
  },
  confirmButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    padding: 16,
    height: 64,
  },
  confirmButtonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  confirmPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  confirmItems: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  confirmButtonRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  confirmText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginRight: 8,
  },
  confirmArrow: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default OrderConfirmationScreen;
