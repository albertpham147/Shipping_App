import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';


const OrderDetailsScreen = () => {
  const router = useRouter()
  const [recipientName, setRecipientName] = useState('Nguyễn Văn A');
  const [recipientPhone, setRecipientPhone] = useState('0901234567');
  const [driverNote, setDriverNote] = useState('Ví dụ: Gọi khi đến cổng, lầu 4...');
  const [packageType, setPackageType] = useState('documents'); // documents, food, other
  const [weight, setWeight] = useState('2');
  const [selectedVehicle, setSelectedVehicle] = useState('motorbike'); // motorbike, truck

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thông tin chi tiết</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Locations Summary */}
        <View style={styles.locationsCard}>
          <View style={styles.locationRow}>
            <View style={styles.pickupDot} />
            <View style={styles.locationInfo}>
              <Text style={styles.locationLabel}>ĐIỂM LẤY HÀNG</Text>
              <Text style={styles.locationText}>235 Đông Khổi, Quận 1, TP. HCM</Text>
            </View>
          </View>

          <View style={styles.locationRow}>
            <View style={styles.deliveryDot} />
            <View style={styles.locationInfo}>
              <Text style={styles.locationLabel}>ĐIỂM GIAO HÀNG</Text>
              <Text style={styles.locationText}>123 Nguyễn Trãi, Quận 1, TP. HCM</Text>
            </View>
          </View>
        </View>

        {/* Recipient Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Feather name="user" size={18} color="black" />
            Thông tin người nhận
          </Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Họ và tên</Text>
            <TextInput
              style={styles.input}
              value={recipientName}
              onChangeText={setRecipientName}
              placeholder="Nhập họ và tên"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Số điện thoại</Text>
            <TextInput
              style={styles.input}
              value={recipientPhone}
              onChangeText={setRecipientPhone}
              placeholder="Nhập số điện thoại"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Ghi chú cho tài xế</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={driverNote}
              onChangeText={setDriverNote}
              placeholder="Ví dụ: Gọi khi đến cổng..."
              multiline
              numberOfLines={2}
            />
          </View>
        </View>

        {/* Package Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Feather name="box" size={18} color="black" />
            Chi tiết hàng hóa
          </Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Loại hàng</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>Tài liệu</Text>
              <MaterialIcons name="arrow-drop-down" size={12} color="black" style={styles.dropdownIcon}/>
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Khối lượng ước tính (kg)</Text>
            <View style={styles.weightInput}>
              <TextInput
                style={styles.weightTextInput}
                value={weight}
                onChangeText={setWeight}
                placeholder="Ví dụ: 2"
                keyboardType="numeric"
              />
              <Text style={styles.weightUnit}>kg</Text>
            </View>
          </View>
        </View>

        {/* Vehicle Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Loại xe vận chuyển
          </Text>
          
          
          <TouchableOpacity 
            style={[
              styles.vehicleOption,
              selectedVehicle === 'motorbike' && styles.vehicleOptionActive
            ]}
            onPress={() => setSelectedVehicle('motorbike')}
          >
            <View style={styles.vehicleInfo}>
              <MaterialCommunityIcons name="motorbike" size={24} color="black" style={styles.vehicleIcon}/>
              <View style={styles.vehicleDetails}>
                <Text style={[
                  styles.vehicleName,
                  selectedVehicle === 'motorbike' && styles.vehicleNameActive
                ]}>
                  Xe máy
                </Text>
                <Text style={styles.vehicleDesc}>Hàng nhỏ gọn (dưới 30kg)</Text>
              </View>
            </View>
            <View style={styles.priceContainer}>
              <Text style={[
                styles.vehiclePrice,
                selectedVehicle === 'motorbike' && styles.vehiclePriceActive
              ]}>
                45.000đ
              </Text>
              <View style={[
                styles.radio,
                selectedVehicle === 'motorbike' && styles.radioActive
              ]}>
                {selectedVehicle === 'motorbike' && <View style={styles.radioDot} />}
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.vehicleOption,
              selectedVehicle === 'truck' && styles.vehicleOptionActive
            ]}
            onPress={() => setSelectedVehicle('truck')}
          >
            <View style={styles.vehicleInfo}>
              <FontAwesome name="truck" size={24} color="black" style={styles.vehicleIcon}/>
              <View style={styles.vehicleDetails}>
                <Text style={[
                  styles.vehicleName,
                  selectedVehicle === 'truck' && styles.vehicleNameActive
                ]}>
                  Xe bán tải/Ba gác
                </Text>
                <Text style={styles.vehicleDesc}>Hàng cồng kềnh (tới 500kg)</Text>
              </View>
            </View>
            <View style={styles.priceContainer}>
              <Text style={[
                styles.vehiclePrice,
                selectedVehicle === 'truck' && styles.vehiclePriceActive
              ]}>
                120.000đ
              </Text>
              <View style={[
                styles.radio,
                selectedVehicle === 'truck' && styles.radioActive
              ]}>
                {selectedVehicle === 'truck' && <View style={styles.radioDot} />}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Cash On Delivery */}
        <TouchableOpacity style={styles.codSection}>
          <AntDesign name="credit-card" size={24} color="black" style={styles.codIcon}/>
          <Text style={styles.codText}>Tiền mặt</Text>
          <MaterialIcons name="arrow-right" size={24} color="black" style={styles.codArrow}/>
        </TouchableOpacity>

        {/* Add spacing for bottom button */}
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.totalSection}>
          <Text style={styles.totalLabel}>Tổng cộng</Text>
          <Text style={styles.totalAmount}>45.000đ</Text>
        </View>
        <TouchableOpacity style={styles.confirmButton} onPress={() => router.push("/deliverys/findingDriver")}>
          <Text style={styles.confirmButtonText}>Xác nhận gửi hàng</Text>
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
  locationsCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  pickupDot: {
    width: 20,
    height: 20,
    backgroundColor: '#10B981',
    borderRadius: 10,
    marginRight: 12,
    marginTop: 2,
  },
  deliveryDot: {
    width: 20,
    height: 20,
    backgroundColor: '#DC2626',
    borderRadius: 10,
    marginRight: 12,
    marginTop: 2,
  },
  locationInfo: {
    flex: 1,
  },
  locationLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: 4,
  },
  locationText: {
    fontSize: 14,
    color: '#1F2937',
  },
  section: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  input: {
    height: 48,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#1F2937',
  },
  textArea: {
    height: 72,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  dropdownText: {
    fontSize: 15,
    color: '#1F2937',
  },
  dropdownIcon: {
    color: '#6B7280',
  },
  weightInput: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  weightTextInput: {
    flex: 1,
    fontSize: 15,
    color: '#1F2937',
  },
  weightUnit: {
    fontSize: 15,
    color: '#6B7280',
    marginLeft: 8,
  },
  vehicleOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    marginBottom: 12,
  },
  vehicleOptionActive: {
    borderColor: '#FF6B35',
    backgroundColor: '#FFF7ED',
  },
  vehicleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  vehicleIcon: {
    marginRight: 12,
  },
  vehicleDetails: {
    flex: 1,
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  vehicleNameActive: {
    color: '#FF6B35',
  },
  vehicleDesc: {
    fontSize: 13,
    color: '#6B7280',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  vehiclePrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  vehiclePriceActive: {
    color: '#FF6B35',
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioActive: {
    borderColor: '#FF6B35',
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF6B35',
  },
  codSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 8,
  },
  codIcon: {
    marginRight: 12,
  },
  codText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  codArrow: {
    color: '#9CA3AF',
  },
  bottomBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    padding: 16,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 16,
    color: '#6B7280',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: '700',
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

export default OrderDetailsScreen;
