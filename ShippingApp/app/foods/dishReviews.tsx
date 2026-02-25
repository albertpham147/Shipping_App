import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  timeAgo: string;
  comment: string;
  images?: string[];
  likes: number;
  hasLiked: boolean;
}

export default function DishReviewsSceen() {
  const [selectedFilter, setSelectedFilter] = useState('all'); // all, 5star, 4star, has-images

  const router = useRouter();

  // Dish info
  const dish = {
    name: 'Phở Bò Đặc Biệt',
    restaurant: 'Phở Gia Truyền - Lý Quốc Sư',
    rating: 4.9,
    totalReviews: 1200,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400',
  };

  // Filter options
  const filters = [
    { id: 'all', label: 'Tất cả', count: 1150 },
    { id: '5star', label: '5 sao', count: 1150 },
    { id: '4star', label: '4 sao', count: 85 },
    { id: 'has-images', label: 'Có hình ảnh', count: 0 },
  ];

  // Reviews data
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      userName: 'Lê Minh Anh',
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 5,
      timeAgo: '2 giờ trước',
      comment: 'Phở ngon, nước dùng rất đậm đà và thơm mùi quế hồi. Thịt bò mềm, không bị dai. Đặc biệt là quầy gíon tan. Sẽ tiếp tục ủng hộ quán!',
      images: [
        'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400',
        'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400',
      ],
      likes: 12,
      hasLiked: false,
    },
    {
      id: '2',
      userName: 'Trần Thu Thảo',
      userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      rating: 5,
      timeAgo: 'Hôm qua',
      comment: 'Giao hàng nhanh, phở vẫn còn nóng hổi khi nhận. Đóng gói rất cẩn thận, không bị đổ nước ra ngoài. Đánh giá 5 sao cho chất lượng dịch vụ.',
      likes: 5,
      hasLiked: false,
    },
    {
      id: '3',
      userName: 'Hoàng Nam',
      userAvatar: '',
      rating: 4,
      timeAgo: '3 ngày trước',
      comment: 'Hương vị ổn, giá hơi cao so với mặt bằng chung nhưng chất lượng thịt thì đáng đồng tiền. Nước dùng thanh, ít mỡ.',
      likes: 2,
      hasLiked: false,
    },
  ]);

  const handleLikeReview = (reviewId: string) => {
    setReviews(reviews.map(review => {
      if (review.id === reviewId) {
        return {
          ...review,
          hasLiked: !review.hasLiked,
          likes: review.hasLiked ? review.likes - 1 : review.likes + 1,
        };
      }
      return review;
    }));
  };

  const renderStars = (rating: number) => {
    return (
      <View style={styles.starsRow}>
        {[1, 2, 3, 4, 5].map((star) => (
          <AntDesign name="star" size={24} key={star} style={[
            styles.star,
            star <= rating ? styles.starFilled : styles.starEmpty
          ]} />
        ))}
      </View>
    );
  };

  const renderReviewItem = ({ item }: { item: Review }) => (
    <View style={styles.reviewCard}>
      {/* User Info */}
      <View style={styles.reviewHeader}>
        <View style={styles.userInfo}>
          {item.userAvatar ? (
            <Image source={{ uri: item.userAvatar }} style={styles.userAvatar} />
          ) : (
            <View style={styles.userAvatarPlaceholder}>
              <Text style={styles.userAvatarText}>
                {item.userName.split(' ').map(n => n[0]).join('').toUpperCase()}
              </Text>
            </View>
          )}

          <View style={styles.userDetails}>
            <Text style={styles.userName}>{item.userName}</Text>
            <View style={styles.ratingRow}>
              {renderStars(item.rating)}
              <Text style={styles.timeAgo}>{item.timeAgo}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.menuButton}>
          <Entypo name="dots-three-horizontal" size={20} color="black" style={styles.menuIcon}/>
        </TouchableOpacity>
      </View>

      {/* Review Comment */}
      <Text style={styles.reviewComment}>{item.comment}</Text>

      {/* Review Images */}
      {item.images && item.images.length > 0 && (
        <View style={styles.reviewImages}>
          {item.images.map((imageUri, index) => (
            <Image
              key={index}
              source={{ uri: imageUri }}
              style={styles.reviewImage}
            />
          ))}
        </View>
      )}

      {/* Actions */}
      <View style={styles.reviewActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleLikeReview(item.id)}
        >
          <AntDesign name="like" size={24} color="black" style={[
            styles.actionIcon,
            item.hasLiked && styles.actionIconActive
          ]}/>
          <Text style={styles.actionText}>Hữu ích ({item.likes})</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome5 name="comment" size={24} color="black" style={styles.actionIcon} />
          <Text style={styles.actionText}>Phản hồi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đánh giá món ăn</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Feather name="search" size={24} color="black" style={styles.searchIcon}/>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Dish Info Card */}
        <View style={styles.dishCard}>
          <Image source={{ uri: dish.image }} style={styles.dishImage} />

          <View style={styles.dishInfo}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.restaurantName}>{dish.restaurant}</Text>

            <View style={styles.ratingRow}>
              <Text style={styles.ratingNumber}>{dish.rating}</Text>
              {renderStars(5)}
              <Text style={styles.totalReviews}>
                ({(dish.totalReviews / 1000).toFixed(1)}k)
              </Text>
            </View>
          </View>
        </View>

        {/* Filter Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersContainer}
          contentContainerStyle={styles.filtersContent}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.id}
              style={[
                styles.filterButton,
                selectedFilter === filter.id && styles.filterButtonActive
              ]}
              onPress={() => setSelectedFilter(filter.id)}
            >
              <Text style={[
                styles.filterText,
                selectedFilter === filter.id && styles.filterTextActive
              ]}>
                {filter.label} ({filter.count})
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Reviews List */}
        <View style={styles.reviewsList}>
          {reviews.map((review) => (
            <View key={review.id}>
              {renderReviewItem({ item: review })}
            </View>
          ))}
        </View>

        {/* Add spacing for bottom button */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Home Button */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.homeButton}>
          <FontAwesome6 name="house" size={24} color="white" style={styles.homeIcon} />
          <Text style={styles.homeButtonText}>Về Trang Chủ</Text>
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
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    flex: 1,
    textAlign: 'center',
  },
  searchButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 20,
  },

  // Dish Card
  dishCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  dishImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
    marginRight: 16,
  },
  dishInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  dishName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  restaurantName: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  ratingNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF6B35',
    marginRight: 8,
  },
  starsRow: {
    flexDirection: 'row',
    marginRight: 8,
  },
  star: {
    fontSize: 16,
    marginRight: 2,
  },
  starFilled: {
    color: '#FF6B35',
  },
  starEmpty: {
    color: '#E5E7EB',
  },
  totalReviews: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Filters
  filtersContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
  },
  filtersContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: '#FF6B35',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },

  // Reviews List
  reviewsList: {
    paddingTop: 8,
  },
  reviewCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 8,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  userInfo: {
    flexDirection: 'row',
    flex: 1,
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E5E7EB',
    marginRight: 12,
  },
  userAvatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E5E7EB',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAvatarText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6B7280',
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  timeAgo: {
    fontSize: 13,
    color: '#9CA3AF',
  },
  menuButton: {
    padding: 4,
  },
  menuIcon: {
    color: '#9CA3AF',
  },
  reviewComment: {
    fontSize: 15,
    color: '#1F2937',
    lineHeight: 22,
    marginBottom: 12,
  },
  reviewImages: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  reviewImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
  },
  reviewActions: {
    flexDirection: 'row',
    gap: 24,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 18,
    marginRight: 6,
    opacity: 0.6,
  },
  actionIconActive: {
    opacity: 1,
  },
  actionText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },

  // Home Button
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    backgroundColor: '#FF6B35',
    borderRadius: 12,
  },
  homeIcon: {
    marginRight: 8,
  },
  homeButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});