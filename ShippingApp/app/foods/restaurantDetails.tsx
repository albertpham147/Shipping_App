import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

import promocodeImage from '@/assets/icons/promo-code.png'

export default function RestaurantDetailsSceen(){
    const [selectedTab, setSelectedTab] = useState('featured'); // featured, pho-bo, pho-ga, drinks, dessert
    const [cartCount, setCartCount] = useState(2);
    const [cartTotal, setCartTotal] = useState(120000);

    const [contentHeight, setContentHeight] = useState(0);

    const handleContentSizeChange = (contentWidth: number, contentHeight: number) => {
        setContentHeight(contentHeight);
        console.log("Content Width:", contentWidth, "Content Height:", contentHeight);
    };

    // Menu categories
    const categories = [
        { id: 'featured', label: 'Món Nổi Bật' },
        { id: 'pho-bo', label: 'Phở Bò' },
        { id: 'pho-ga', label: 'Phở Gà' },
        { id: 'drinks', label: 'Đồ Uống' },
        { id: 'dessert', label: 'Tráng miệng' },
    ];

    // Menu items
    const menuItems = [
    {
        id: 1,
        category: 'featured',
        name: 'Phở Bò Tái Nam Đặc Biệt',
        description: 'Nước dùng trong, thơm mùi quế hồi, thịt bò tươi tái chín vừa tới.',
        price: 65000,
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400',
    },
    {
        id: 2,
        category: 'featured',
        name: 'Phở Gà Ta Chất Miềng',
        description: 'Gà ta thả vườn, thịt chắc ngọt, da vàng giòn săn sắt.',
        price: 55000,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    },
    ];

    return (
        <SafeAreaView style={styles.container}>
        {/* Hero Image */}
        <View style={styles.heroContainer}>
            <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800' }}
            style={styles.heroImage}
            />
            
            {/* Header Buttons */}
            <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.headerButton}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            </View>

            {/* Restaurant Info Card */}
            <View style={styles.infoCard}>
            <View style={styles.infoHeader}>
                <Text style={styles.restaurantName}>Phở Gia Truyền - Lý Quốc Sư</Text>
                <View style={styles.partnerBadge}>
                <Text style={styles.partnerText}>ĐỐI TÁC</Text>
                </View>
            </View>

            <View style={styles.restaurantMeta}>
                <AntDesign name="star" style={styles.starIcon} size={14}/>
                <Text style={styles.metaSeparator}>•</Text>
                <Text style={styles.metaText}>100+ đánh giá</Text>
                <Text style={styles.metaSeparator}>•</Text>
                <Text style={styles.metaText}>1.2 km</Text>
            </View>

            <View style={styles.deliveryInfo}>
                <View style={styles.deliveryItem}>
                <AntDesign name="clock-circle" size={24} color="black" style={styles.clockIcon}/>
                <Text style={styles.deliveryText}>Giao hàng trong 15 - 25 phút</Text>
                </View>
                <View style={styles.discountBadge}>
                {/* <Text style={styles.discountIcon}>🎫</Text> */}
                <Image source={promocodeImage} style={styles.discountIcon}/>
                <Text style={styles.discountText}>Mã giảm 25k</Text>
                </View>
            </View>
            </View>
        </View>

        {/* Categories Tabs */}
        <View>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={styles.categoriesContainer}
                >
                {categories.map((category) => (
                <TouchableOpacity
                    key={category.id}
                    style={[
                        styles.categoryTab,
                        selectedTab === category.id && styles.categoryTabActive
                    ]}
                    onPress={() => setSelectedTab(category.id)}
                    >
                    <Text 
                        style={[
                            styles.categoryText,
                            selectedTab === category.id && styles.categoryTextActive
                        ]}>
                        {category.label}
                    </Text>
                </TouchableOpacity>
                ))}
        </ScrollView>
        </View>

        {/* Menu Items List */}
        <ScrollView 
            style={styles.menuList}
            showsVerticalScrollIndicator={false}
            >
            <Text style={styles.sectionTitle}>Món Nổi Bật</Text>

            {menuItems.map((item) => (
            <View key={item.id} style={styles.menuItem}>
                <View style={styles.menuItemInfo}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemDescription} numberOfLines={2}>
                    {item.description}
                </Text>
                <Text style={styles.menuItemPrice}>
                    {item.price.toLocaleString('vi-VN')}đ
                </Text>
                </View>

                <View style={styles.menuItemImageContainer}>
                <Image 
                    source={{ uri: item.image }}
                    style={styles.menuItemImage}
                />
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
                </View>
            </View>
            ))}

            {/* Section for other categories */}
            <Text style={styles.sectionTitle}>Phở Bò</Text>
            <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Đang tải thêm món...</Text>
            </View>

            {/* Add padding at bottom for cart button */}
            <View style={{ height: 100 }} />
        </ScrollView>

        {/* Cart Button */}
        <View style={styles.cartButtonContainer}>
            <TouchableOpacity style={styles.cartButton}>
            <View style={styles.cartButtonLeft}>
                <View style={styles.cartIconContainer}>
                <Entypo name="shopping-cart" size={30} color="black" />
                <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>{cartCount}</Text>
                </View>
                </View>
                <View>
                <Text style={styles.cartLabel}>GIỎ HÀNG</Text>
                <Text style={styles.cartItems}>{cartCount} Món</Text>
                </View>
            </View>

            <View style={styles.cartButtonRight}>
                <Text style={styles.cartTotal}>
                {cartTotal.toLocaleString('vi-VN')}đ
                </Text>
                <Text style={styles.cartChevron}>›</Text>
            </View>
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
    
    // Hero Section
    heroContainer: {
        position: 'relative',
    },
    heroImage: {
        width: '100%',
        height: 250,
        backgroundColor: '#1F2937',
    },
    headerButtons: {
        position: 'absolute',
        top: 16,
        left: 16,
        right: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerButtonsRight: {
        flexDirection: 'row',
        gap: 12,
    },
    headerButton: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    // Info Card
    infoCard: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 16,
        marginTop: -40,
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    infoHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    restaurantName: {
        flex: 1,
        fontSize: 20,
        fontWeight: '700',
        color: '#1F2937',
        marginRight: 12,
    },
    partnerBadge: {
        backgroundColor: '#FEE2E2',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
    },
    partnerText: {
        fontSize: 11,
        fontWeight: '700',
        color: '#DC2626',
    },
    restaurantMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    starIcon: {
        color: '#ffa534',
    },
    metaSeparator: {
        fontSize: 14,
        color: '#D1D5DB',
        marginHorizontal: 8,
    },
    metaText: {
        fontSize: 14,
        color: '#6B7280',
    },
    deliveryInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    deliveryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    clockIcon: {
        marginRight: 8,
    },
    deliveryText: {
        fontSize: 14,
        color: '#6B7280',
    },
    discountBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FEE2E2',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 6,
    },
    discountIcon: {
        height: 24,
        width: 24,
        marginRight: 4,
    },
    discountText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#DC2626',
    },
    
    // Categories
    categoriesContainer: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
        marginTop: 16,
        
    },
    categoryTab: {
        paddingHorizontal: 16,
        marginLeft: 16,
    },
    categoryTabActive: {
        borderBottomWidth: 2,
        borderBottomColor: '#FF6B35',
        height: 30
    },
    categoryText: {
        fontSize: 15,
        color: '#6B7280',
        fontWeight: '500',
    },
    categoryTextActive: {
        color: '#FF6B35',
        fontWeight: '700',
    },
    
    // Menu List
    menuList: {
        flex: 1,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1F2937',
        marginTop: 24,
        marginBottom: 16,
    },
    menuItem: {
        flexDirection: 'row',
        marginBottom: 24,
    },
    menuItemInfo: {
        flex: 1,
        marginRight: 16,
    },
    menuItemName: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 8,
    },
    menuItemDescription: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
        marginBottom: 12,
    },
    menuItemPrice: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FF6B35',
    },
    menuItemImageContainer: {
        position: 'relative',
    },
    menuItemImage: {
        width: 120,
        height: 120,
        borderRadius: 12,
        backgroundColor: '#E5E7EB',
    },
    addButton: {
        position: 'absolute',
        bottom: -8,
        right: -8,
        width: 40,
        height: 40,
        backgroundColor: '#FF6B35',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    addButtonText: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: '600',
    },
    placeholder: {
        padding: 32,
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: 14,
        color: '#9CA3AF',
    },
    
    // Cart Button
    cartButtonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
    },
    cartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FF6B35',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    cartButtonLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartIconContainer: {
        position: 'relative',
        marginRight: 12,
    },
    cartIcon: {
        fontSize: 28,
    },
    cartBadge: {
        position: 'absolute',
        top: -4,
        right: -4,
        backgroundColor: '#FFFFFF',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartBadgeText: {
        fontSize: 11,
        fontWeight: '700',
        color: '#FF6B35',
    },
    cartLabel: {
        fontSize: 12,
        color: '#FFFFFF',
        fontWeight: '600',
        opacity: 0.9,
    },
    cartItems: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '700',
    },
    cartButtonRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartTotal: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FFFFFF',
        marginRight: 8,
    },
    cartChevron: {
        fontSize: 28,
        color: '#FFFFFF',
        fontWeight: '300',
    },
});
