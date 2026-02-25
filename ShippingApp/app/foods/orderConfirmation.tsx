import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

import AntDesign from '@expo/vector-icons/AntDesign';

interface OrderConfirmationModalProps {
    visible: boolean;
    onClose: () => void;
    order: {
        id: string;
        restaurantName: string;
        deliveryTime: string;
        deliveryDate: string;
        total: number;
        image: string;
    };
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
    visible,
    onClose,
    order,
    }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleStarPress = (star: number) => {
        setRating(star);
    };

    const handleGoHome = () => {
        onClose();
        // Navigate to home
    };

    const handleViewOrderDetail = () => {
        onClose();
        // Navigate to order detail
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    {/* Close Button */}
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Header */}
                    <Text style={styles.header}>Xác nhận đơn hàng</Text>

                    <ScrollView showsVerticalScrollIndicator={false}>
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
                            Cảm ơn bạn đã tin dùng dịch vụ!
                        </Text>

                        {/* Order Info Card */}
                        <View style={styles.orderCard}>
                            <View style={styles.orderHeader}>
                                <Image
                                    source={{ uri: order.image }}
                                    style={styles.orderImage}
                                />
                                <View style={styles.orderInfo}>
                                    <Text style={styles.restaurantName}>{order.restaurantName}</Text>
                                    <Text style={styles.deliveryInfo}>
                                        Đã giao lúc {order.deliveryTime} • {order.deliveryDate}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.divider} />

                            <View style={styles.totalRow}>
                                <Text style={styles.totalLabel}>Tổng cộng (1 món)</Text>
                                <Text style={styles.totalAmount}>
                                    {order.total.toLocaleString('vi-VN')}đ
                                </Text>
                            </View>
                        </View>

                        {/* Rating Section */}
                        <Text style={styles.ratingTitle}>Đánh giá bữa ăn của bạn</Text>

                        <View style={styles.starsContainer}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <TouchableOpacity
                                    key={star}
                                    onPress={() => handleStarPress(star)}
                                    style={styles.starButton}
                                    >
                                    <AntDesign name="star" size={36} color="black" style={[
                                        styles.star,
                                        rating >= star && styles.starActive
                                    ]}/>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Review Input */}
                        <TextInput
                            style={styles.reviewInput}
                            placeholder="Hãy chia sẻ cảm nhận của bạn về món ăn nhé..."
                            placeholderTextColor="#9CA3AF"
                            multiline
                            numberOfLines={4}
                            value={review}
                            onChangeText={setReview}
                            textAlignVertical="top"
                        />

                        {/* Buttons */}
                        <TouchableOpacity
                            style={styles.homeButton}
                            onPress={handleGoHome}
                        >
                            <Text style={styles.homeButtonText}>Về trang chủ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.detailButton}
                            onPress={handleViewOrderDetail}
                        >
                            <Text style={styles.detailButtonText}>Xem chi tiết đơn hàng</Text>
                        </TouchableOpacity>

                        {/* Add spacing at bottom */}
                        <View style={{ height: 40 }} />
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

// Example usage component
export default function OrderConfirmationScreen() {
    const [modalVisible, setModalVisible] = useState(true);
    const router = useRouter();

    const sampleOrder = {
        id: '12345',
        restaurantName: 'Bún Đậu Mắm Tôm - Cô Ba',
        deliveryTime: '12:45',
        deliveryDate: '12/10/2023',
        total: 65000,
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400',
    };

    return (
        <View style={styles.container}>
            <OrderConfirmationModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                order={sampleOrder}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },

    // Modal
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingTop: 24,
        paddingHorizontal: 24,
        maxHeight: '95%',
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    // Header
    header: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1F2937',
        textAlign: 'center',
        marginBottom: 32,
    },

    // Success Section
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
        marginBottom: 24,
    },

    // Order Card
    orderCard: {
        backgroundColor: '#F9FAFB',
        borderRadius: 12,
        padding: 16,
        marginBottom: 32,
    },
    orderHeader: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    orderImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        backgroundColor: '#E5E7EB',
        marginRight: 12,
    },
    orderInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    restaurantName: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 4,
    },
    deliveryInfo: {
        fontSize: 13,
        color: '#6B7280',
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
        fontSize: 15,
        color: '#6B7280',
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FF6B35',
    },

    // Rating Section
    ratingTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F2937',
        textAlign: 'center',
        marginBottom: 16,
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
        color: '#E5E7EB',
    },
    starActive: {
        color: '#FCD34D',
    },

    // Review Input
    reviewInput: {
        backgroundColor: '#F9FAFB',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        padding: 16,
        fontSize: 15,
        color: '#1F2937',
        minHeight: 100,
        marginBottom: 24,
    },

    // Buttons
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
    detailButton: {
        height: 56,
        backgroundColor: 'transparent',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FF6B35',
    },
});

export { OrderConfirmationModal };