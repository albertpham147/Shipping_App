import React, { useState } from 'react';
import { View, Text,StyleSheet, ScrollView,TextInput, TouchableOpacity,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { restaurants, categories } from '../restaurants/RestaurantData';

import PromoCodeIcon from '@/assets/icons/promo-code.png';

import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const FoodDeliveryScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => ({
      ...prev,
      id: !prev[id]
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
          
          <View style={styles.locationContainer}>
            <View style={styles.locationIcon}>
              <Entypo name="location-pin" size={24} color="#f2590d" />
            </View>
            <View style={styles.locationTextContainer}>
              <Text style={styles.deliveryLabel}>GIAO ĐẾN</Text>
              <View style={styles.addressRow}>
                <Text style={styles.address}>123 Nguyễn Huệ, Quận 1, TP.HCM</Text>
                {/* <Text style={styles.dropdownIcon}>▼</Text> */}
              </View>
            </View>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm món Việt chuẩn vị..."
            placeholderTextColor="#9CA3AF"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category, index) => (
            <TouchableOpacity 
              key={category.id} 
              style={styles.categoryItem}
            >
              <View style={[
                styles.categoryIconContainer,
                index === 0 && styles.categoryIconActive
              ]}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
              </View>
              <Text style={[
                styles.categoryName,
                index === 0 && styles.categoryNameActive
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Section Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Món Việt gợi ý</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>Xem tất cả ›</Text>
          </TouchableOpacity>
        </View>

        {/* Restaurant Cards */}
        <View style={styles.restaurantsContainer}>
          {restaurants.map((restaurant) => (
            <TouchableOpacity 
              key={restaurant.id} 
              style={styles.restaurantCard}
            >
              <View style={styles.imageContainer}>
                <Image 
                  source={{ uri: restaurant.image }}
                  style={styles.restaurantImage}
                />
                
                {/* Tag */}
                <View style={[
                  styles.tag,
                  { backgroundColor: restaurant.tagColor }
                ]}>
                  <Text style={styles.tagText}>{restaurant.tag}</Text>
                </View>

                {/* Favorite Button */}
                {/* <TouchableOpacity 
                  style={styles.favoriteButton}
                  onPress={() => toggleFavorite(restaurant.id)}
                >
                  <Text style={styles.favoriteIcon}>
                    {favorites[restaurant.id] ? '❤️' : '🤍'}
                  </Text>
                </TouchableOpacity> */}
              </View>

              {/* Restaurant Info */}
              <View style={styles.restaurantInfo}>
                <View style={styles.restaurantTitleRow}>
                  <Text style={styles.restaurantName} numberOfLines={1}>
                    {restaurant.name}
                  </Text>
                  <View style={styles.ratingContainer}>
                    <AntDesign name="star" style={styles.starIcon} size={14}/>
                    <Text style={styles.rating}>{restaurant.rating}</Text>
                  </View>
                </View>

                <View style={styles.metaRow}>
                  <View style={styles.metaItem}>
                    <EvilIcons name="clock" style={styles.clockIcon} size={24} color="black" />
                    <Text style={styles.metaText}>{restaurant.deliveryTime}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <EvilIcons name="location" style={styles.locationIconSmall} size={24} color="black" />
                    <Text style={styles.metaText}>{restaurant.distance}</Text>
                  </View>
                </View>

                <View style={styles.discountContainer}>
                  <Image style={styles.discountIcon} source={PromoCodeIcon}/>
                  <Text style={styles.discountText}>{restaurant.discount}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
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
  locationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  locationIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#FEE2E2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinIcon: {
    fontSize: 20,
  },
  locationTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  deliveryLabel: {
    fontSize: 11,
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    fontSize: 15,
    color: '#1F2937',
    fontWeight: '700',
    flex: 1,
  },
  dropdownIcon: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 20,
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
  categoriesContainer: {
    paddingHorizontal: 12,
    marginBottom: 24,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 70,
  },
  categoryIconContainer: {
    width: 56,
    height: 56,
    backgroundColor: '#F3F4F6',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryIconActive: {
    backgroundColor: '#FEE2E2',
  },
  categoryIcon: {
    fontSize: 28,
  },
  categoryName: {
    fontSize: 13,
    color: '#4B5563',
    fontWeight: '500',
    textAlign: 'center',
  },
  categoryNameActive: {
    color: '#FF6B35',
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },
  seeAll: {
    fontSize: 15,
    color: '#FF6B35',
    fontWeight: '600',
  },
  restaurantsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  restaurantCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  restaurantImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E5E7EB',
  },
  tag: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  tagText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
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
  favoriteIcon: {
    fontSize: 20,
  },
  restaurantInfo: {
    padding: 16,
  },
  restaurantTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    flex: 1,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFBEB',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  starIcon: {
    marginRight: 4,
    color: '#ffa534',
  },
  rating: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  clockIcon: {
    marginRight: 4,
  },
  locationIconSmall: {
    marginRight: 4,
  },
  metaText: {
    fontSize: 13,
    color: '#6B7280',
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  discountIcon: {
    marginRight: 6,
    height: 24,
    width: 24,
  },
  discountText: {
    fontSize: 13,
    color: '#D97706',
    fontWeight: '600',
  },
});

export default FoodDeliveryScreen;
