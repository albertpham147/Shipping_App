import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';

import promoCodeImage from '@/assets/icons/promo-code.png';


export default function CartScreen() {
  const router = useRouter();
  const [promoCode, setPromoCode] = useState('');

  // Cart items with quantities
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      restaurantName: 'Bún Đậu Mắm Tôm Cô Bông',
      restaurantLogo: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200',
      name: 'Bún đậu mắm tôm thập cẩm',
      description: 'Thêm chả cốm, không lấy đậu phụ',
      price: 55000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400',
    },
    {
      id: 2,
      restaurantName: 'Bún Đậu Mắm Tôm Cô Bông',
      restaurantLogo: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200',
      name: 'Trà tắc mật ong',
      description: 'Ít đá, ít đường',
      price: 30000,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400',
    },
  ]);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 15000;
  const discount = -10000;
  const total = subtotal + deliveryFee + discount;

  const updateQuantity = (itemId: number, change: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(0, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  function HandleOrderCart(){
    // alert('Đặt hàng thành công!'); 
    Alert.alert('Đặt Đồ Ăn', "Bạn chắc có muốn đặt đồ ăn không ?", [
      {
        text: "Có", 
        onPress: () => {
          router.push('/foods/orderTracking'); 
        }
      },
      {
        text: "Không", 
        onPress: () => {
          console.log("Hủy");
        },
        style: 'cancel'

      }
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => { router.back() }}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Giỏ hàng</Text>
        <TouchableOpacity>
          <Text style={styles.clearAllText}>Xóa tất cả</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Delivery Address */}
        <TouchableOpacity style={styles.deliveryAddress}>
          <View style={styles.addressIcon}>
            <FontAwesome6 name="location-dot" size={24} color="black" />
          </View>
          <View style={styles.addressInfo}>
            <Text style={styles.addressTitle}>Giao đến: 123 Đường Lê Lợi,...</Text>
            <Text style={styles.addressSubtitle} numberOfLines={1}>
              Ghi chú cho tài xế: Cổng báo vệ...
            </Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#D1D5DB" />
        </TouchableOpacity>

        {/* Cart Items by Restaurant */}
        {cartItems.length > 0 && (
          <View style={styles.restaurantSection}>
            {/* Restaurant Header */}
            <View style={styles.restaurantHeader}>
              <Image
                source={{ uri: cartItems[0].restaurantLogo }}
                style={styles.restaurantLogo}
              />
              <Text style={styles.restaurantName}>{cartItems[0].restaurantName}</Text>
            </View>

            {/* Cart Items */}
            {cartItems.map((item) => (
              <View key={item.id} style={styles.cartItem}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.itemImage}
                />

                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemDescription} numberOfLines={2}>
                    {item.description}
                  </Text>
                  <Text style={styles.itemPrice}>
                    {item.price.toLocaleString('vi-VN')}đ
                  </Text>
                </View>

                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item.id, -1)}
                  >
                    <Entypo name="minus" size={24} color="black" style={styles.quantityButtonIcon}/>
                  </TouchableOpacity>

                  <Text style={styles.quantity}>{item.quantity}</Text>

                  <TouchableOpacity
                    style={[styles.quantityButton, styles.quantityButtonAdd]}
                    onPress={() => updateQuantity(item.id, 1)}
                  >
                    <Entypo name="plus" size={24} color="black" style={styles.quantityButtonIconAdd}></Entypo>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Promo Code Section */}
        <View style={styles.promoSection}>
          <Text style={styles.promoTitle}>Mã giảm giá</Text>

          <View style={styles.promoInputContainer}>
            <View style={styles.promoInput}>
              <Image source={promoCodeImage} style={styles.promoIcon} />
              <TextInput
                style={styles.promoTextInput}
                placeholder="Nhập mã giảm giá"
                placeholderTextColor="#9CA3AF"
                value={promoCode}
                onChangeText={setPromoCode}
              />
            </View>

            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Order Summary */}
        <View style={styles.summarySection}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tạm tính</Text>
            <Text style={styles.summaryValue}>
              {subtotal.toLocaleString('vi-VN')}đ
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Phí giao hàng (1.2km)</Text>
            <Text style={styles.summaryValue}>
              {deliveryFee.toLocaleString('vi-VN')}đ
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Giảm giá</Text>
            <Text style={styles.discountValue}>
              {discount.toLocaleString('vi-VN')}đ
            </Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Tổng cộng</Text>
            <Text style={styles.totalValue}>
              {total.toLocaleString('vi-VN')}đ
            </Text>
          </View>
        </View>

        {/* Add spacing for checkout button */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Checkout Button */}
      <View style={styles.checkoutButtonContainer}>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => HandleOrderCart()}>
          <Text style={styles.checkoutButtonText}>Đặt hàng</Text>
          <Text style={styles.checkoutButtonPrice}>
            {total.toLocaleString('vi-VN')}đ
          </Text>
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

  // Header
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
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    flex: 1,
    textAlign: 'center',
  },
  clearAllText: {
    fontSize: 15,
    color: '#FF6B35',
    fontWeight: '600',
  },

  // Delivery Address
  deliveryAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginTop: 8,
  },
  addressIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#FEE2E2',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  addressInfo: {
    flex: 1,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  addressSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },

  // Restaurant Section
  restaurantSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    paddingBottom: 16,
  },
  restaurantHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  restaurantLogo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
    marginRight: 12,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },

  // Cart Item
  cartItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 8,
    lineHeight: 18,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6B35',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  quantityButton: {
    width: 36,
    height: 36,
    backgroundColor: '#F3F4F6',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonAdd: {
    backgroundColor: '#FF6B35',
  },
  quantityButtonIcon: {
    fontSize: 20,
    color: '#6B7280',
    fontWeight: '600',
  },
  quantityButtonIconAdd: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginHorizontal: 16,
  },

  // Promo Section
  promoSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    padding: 16,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
  },
  promoInputContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  promoInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
  },
  promoIcon: {
    height: 30,
    width: 30,
    marginRight: 8,
  },
  promoTextInput: {
    flex: 1,
    fontSize: 15,
    color: '#1F2937',
  },
  applyButton: {
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  // Summary Section
  summarySection: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    padding: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 15,
    color: '#6B7280',
  },
  summaryValue: {
    fontSize: 15,
    color: '#1F2937',
    fontWeight: '500',
  },
  discountValue: {
    fontSize: 15,
    color: '#10B981',
    fontWeight: '600',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF6B35',
  },

  // Checkout Button
  checkoutButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  checkoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  checkoutButtonPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});