import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function RestaurantMenu(){
  const [searchText, setSearchText] = useState('Bánh Mì');
  const [selectedTab, setSelectedTab] = useState('nearby'); // nearby, bestseller, highrated, deals

  // Restaurant data
  const restaurants = [
    {
      id: 1,
      name: 'Bánh Mì Huỳnh Hoa - Lê Thị Ri...',
      image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800',
      rating: 4.8,
      distance: '2.5 km',
      deliveryTime: '20 phút',
      promo: 'PROMO',
      tags: [
        { label: 'Voucher 30k', color: '#FEE2E2', textColor: '#DC2626' },
        { label: 'Freeship', color: '#D1FAE5', textColor: '#059669' },
      ],
      menuItems: [
        {
          id: 1,
          name: 'Bánh Mì Thập...',
          price: '65.000đ',
          image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800',
        },
        {
          id: 2,
          name: 'Bánh Mì Gà Xé',
          price: '55.000đ',
          image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800',
        },
        {
          id: 3,
          name: 'Bánh Mì Pate',
          price: '45.000đ',
          image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800',
        },
      ],
    },
    {
      id: 2,
      name: 'Bánh Mì Hồng Hoa - Nguyễn Trãi',
      image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800',
      rating: 4.6,
      distance: '1.8 km',
      deliveryTime: '15 phút',
      tags: [
        { label: 'Deal 1đ', color: '#FEF3C7', textColor: '#D97706' },
      ],
      menuItems: [
        {
          id: 4,
          name: 'Bánh Mì Que',
          price: '35.000đ',
          image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800',
        },
        {
          id: 5,
          name: 'Heo Quay Giòn',
          price: '30.000đ',
          image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800',
        },
        {
          id: 6,
          name: 'Bánh Mì Ốp La',
          price: '22.000đ',
          image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800',
        },
      ],
    },
    {
      id: 3,
      name: 'Bánh Mì Bảy Hổ - Huỳnh Khương...',
      image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800',
      rating: 4.7,
      distance: '3.2 km',
      deliveryTime: '25 phút',
      tags: [
        { label: 'Quán Quen', color: '#DBEAFE', textColor: '#2563EB' },
      ],
      menuItems: [],
    },
  ];

  const tabs = [
    { id: 'nearby', label: 'Gần đây' },
    { id: 'bestseller', label: 'Bán chạy' },
    { id: 'highrated', label: 'Đánh giá cao' },
    { id: 'deals', label: 'Ưu đãi' },
  ];
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Tìm kiếm..."
          />
          {searchText.length > 0 && (
            <TouchableOpacity 
              style={styles.clearButton}
              onPress={() => setSearchText('')}
              >
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={styles.filterButton}>
          <AntDesign name="menu" size={24} color="black"/>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={{flex: 1, height: 30}}>  
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.tabsContainer}
          >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                selectedTab === tab.id && styles.tabActive
              ]}
              onPress={() => setSelectedTab(tab.id)}
            >
              <Text style={[
                styles.tabText,
                selectedTab === tab.id && styles.tabTextActive
              ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Restaurant List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {restaurants.map((restaurant) => (
          <View key={restaurant.id} style={styles.restaurantCard}>
            {/* Restaurant Header */}
            <TouchableOpacity style={styles.restaurantHeader}>
              <View style={styles.restaurantImageContainer}>
                <Image 
                  source={{ uri: restaurant.image }}
                  style={styles.restaurantImage}
                />
                {restaurant.promo && (
                  <View style={styles.promoTag}>
                    <Text style={styles.promoText}>{restaurant.promo}</Text>
                  </View>
                )}
              </View>

              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName} numberOfLines={1}>
                  {restaurant.name}
                </Text>
                
                <View style={styles.restaurantMeta}>
                  <AntDesign name="star" style={styles.starIcon} size={14}/>
                  <Text style={styles.metaSeparator}>•</Text>
                  <Text style={styles.metaText}>{restaurant.distance}</Text>
                  <Text style={styles.metaSeparator}>•</Text>
                  <Text style={styles.metaText}>{restaurant.deliveryTime}</Text>
                </View>

                <View style={styles.tagsContainer}>
                  {restaurant.tags.map((tag, index) => (
                    <View 
                      key={index}
                      style={[
                        styles.tag,
                        { backgroundColor: tag.color }
                      ]}
                    >
                      <Text style={[
                        styles.tagText,
                        { color: tag.textColor }
                      ]}>
                        {tag.label}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </TouchableOpacity>

            {/* Menu Items */}
            {restaurant.menuItems.length > 0 && (
              <View style={styles.menuSection}>
                <Text style={styles.menuTitle}>MÓN ĂN LIÊN QUAN</Text>
                
                <ScrollView 
                  horizontal 
                  showsHorizontalScrollIndicator={false}
                  style={styles.menuItemsContainer}
                >
                  {restaurant.menuItems.map((item) => (
                    <View key={item.id} style={styles.menuItem}>
                      <Image 
                        source={{ uri: item.image }}
                        style={styles.menuItemImage}
                      />
                      <Text style={styles.menuItemName} numberOfLines={1}>
                        {item.name}
                      </Text>
                      <Text style={styles.menuItemPrice}>{item.price}</Text>
                      
                      <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </ScrollView>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    gap: 12,
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
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 48,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  clearButton: {
    width: 24,
    height: 24,
    backgroundColor: '#D1D5DB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearIcon: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  filterButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Tabs
  tabsContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
    marginLeft: 12,
  },
  tabActive: {
    backgroundColor: '#FFF7ED',
    borderWidth: 2,
    borderColor: '#FF6B35',
  },
  tabText: {
    fontSize: 15,
    color: '#6B7280',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#FF6B35',
    fontWeight: '700',
    marginBottom: 6
  },
  
  // Restaurant Card
  restaurantCard: {
    backgroundColor: '#FFFFFF',
    marginTop: 12,
    paddingBottom: 16,
  },
  restaurantHeader: {
    flexDirection: 'row',
    padding: 16,
  },
  restaurantImageContainer: {
    position: 'relative',
  },
  restaurantImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
  },
  promoTag: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FF6B35',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  promoText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  restaurantInfo: {
    flex: 1,
    marginLeft: 12,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  restaurantMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  starIcon: {
    marginRight: 4,
    color: '#ffa534',
  },
  metaSeparator: {
    fontSize: 14,
    color: '#9CA3AF',
    marginHorizontal: 6,
  },
  metaText: {
    fontSize: 14,
    color: '#6B7280',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: {
    fontSize: 13,
    fontWeight: '600',
  },
  
  // Menu Section
  menuSection: {
    paddingLeft: 16,
  },
  menuTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#9CA3AF',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  menuItemsContainer: {
    paddingRight: 16,
  },
  menuItem: {
    width: 140,
    marginRight: 12,
    backgroundColor: '#FFFFFF',
  },
  menuItemImage: {
    width: 140,
    height: 120,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
    marginBottom: 8,
  },
  menuItemName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6B35',
    marginBottom: 8,
  },
  addButton: {
    width: 36,
    height: 36,
    backgroundColor: '#FF6B35',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

