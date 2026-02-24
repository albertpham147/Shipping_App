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
import * as ImagePicker from 'expo-image-picker';

// Type definition for React Native FormData file upload
interface ImageFile {
  uri: string;
  name: string;
  type: string;
}

export default function RatingSceen(){
  const [foodRating, setFoodRating] = useState(4);
  const [serviceRating, setServiceRating] = useState(5);
  const [review, setReview] = useState('');
  const [images, setImages] = useState<string[]>([]);

  // Order/Dish info
  const dish = {
    name: 'Phở Bò Đặc Biệt',
    restaurant: 'Quán Phở Gia Truyền',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400',
  };

  const handleFoodRating = (rating: number) => {
    setFoodRating(rating);
  };

  const handleServiceRating = (rating: number) => {
    setServiceRating(rating);
  };

  const handlePickImage = async () => {
    if (images.length >= 3) {
      alert('Tối đa 3 ảnh');
      return;
    }

    // Request permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Cần quyền truy cập thư viện ảnh');
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled && result.assets && result.assets[0]) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmitReview = async () => {
    try {
      const formData = new FormData();
      formData.append('foodRating', foodRating.toString());
      formData.append('serviceRating', serviceRating.toString());
      formData.append('review', review);

      // Upload images with proper type casting for React Native
      images.forEach((imageUri, index) => {
        const filename = imageUri.split('/').pop() || `image_${index}.jpg`;
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : 'image/jpeg';

        formData.append('images', {
          uri: imageUri,
          name: filename,
          type: type,
        } as any); // Type assertion for React Native FormData
      });

      // Submit to API
      const response = await fetch('https://api.yourapp.com/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (response.ok) {
        alert('Cảm ơn bạn đã đánh giá!');
        // Navigate back or to home
        // navigation.goBack();
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đánh giá</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Dish Info Card */}
        <View style={styles.dishCard}>
          <Image
            source={{ uri: dish.image }}
            style={styles.dishImage}
          />
          <View style={styles.dishInfo}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.restaurantName}>{dish.restaurant}</Text>
          </View>
        </View>

        {/* Food Quality Rating */}
        <View style={styles.ratingSection}>
          <Text style={styles.ratingTitle}>Chất lượng món ăn</Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => handleFoodRating(star)}
                style={styles.starButton}
              >
                <Text style={[
                  styles.star,
                  foodRating >= star && styles.starActive
                ]}>
                  ★
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Review Text Input */}
        <TextInput
          style={styles.reviewInput}
          placeholder="Hãy chia sẻ cảm nhận của bạn về món ăn..."
          placeholderTextColor="#9CA3AF"
          multiline
          numberOfLines={4}
          value={review}
          onChangeText={setReview}
          textAlignVertical="top"
        />

        {/* Photo Upload Section */}
        <View style={styles.photoSection}>
          <Text style={styles.photoTitle}>Thêm hình ảnh (Tối đa 3 ảnh)</Text>

          <View style={styles.photoGrid}>
            {/* Add Photo Button */}
            <TouchableOpacity
              style={[styles.photoBox, styles.photoBoxAdd]}
              onPress={handlePickImage}
            >
              <Text style={styles.photoIcon}>📷</Text>
            </TouchableOpacity>

            {/* Uploaded Images */}
            {images.map((image, index) => (
              <View key={index} style={styles.photoBox}>
                <Image source={{ uri: image }} style={styles.photoImage} />
                <TouchableOpacity
                  style={styles.removePhotoButton}
                  onPress={() => handleRemoveImage(index)}
                >
                  <Text style={styles.removePhotoIcon}>✕</Text>
                </TouchableOpacity>
              </View>
            ))}

            {/* Empty Photo Boxes */}
            {images.length < 3 && [...Array(2 - images.length)].map((_, index) => (
              <View key={`empty-${index}`} style={styles.photoBoxEmpty}>
                <Text style={styles.photoIconEmpty}>🖼️</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Service Rating */}
        <View style={styles.ratingSection}>
          <Text style={styles.ratingTitle}>Dịch vụ nhà hàng</Text>
          <Text style={styles.ratingSubtitle}>Nhân viên & Tốc độ chuẩn bị</Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => handleServiceRating(star)}
                style={styles.starButton}
              >
                <Text style={[
                  styles.star,
                  serviceRating >= star && styles.starActive
                ]}>
                  ★
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Add spacing for submit button */}
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Submit Button */}
      <View style={styles.submitButtonContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitReview}
        >
          <Text style={styles.submitButtonText}>Gửi đánh giá</Text>
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

  // Header
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
  backIcon: {
    fontSize: 32,
    color: '#1F2937',
    fontWeight: '300',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
  },

  // Content
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },

  // Dish Card
  dishCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  dishImage: {
    width: 72,
    height: 72,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
    marginRight: 16,
  },
  dishInfo: {
    flex: 1,
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
  },

  // Rating Section
  ratingSection: {
    marginBottom: 24,
  },
  ratingTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 4,
  },
  ratingSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 16,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  starButton: {
    padding: 4,
  },
  star: {
    fontSize: 48,
    color: '#E5E7EB',
  },
  starActive: {
    color: '#FF6B35',
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
    minHeight: 120,
    marginBottom: 24,
  },

  // Photo Section
  photoSection: {
    marginBottom: 24,
  },
  photoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  photoGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  photoBox: {
    width: 100,
    height: 100,
    borderRadius: 12,
    position: 'relative',
  },
  photoBoxAdd: {
    backgroundColor: '#FFF7ED',
    borderWidth: 2,
    borderColor: '#FF6B35',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoBoxEmpty: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoIcon: {
    fontSize: 32,
  },
  photoIconEmpty: {
    fontSize: 32,
    opacity: 0.3,
  },
  photoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  removePhotoButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#DC2626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removePhotoIcon: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  // Submit Button
  submitButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  submitButton: {
    height: 56,
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});