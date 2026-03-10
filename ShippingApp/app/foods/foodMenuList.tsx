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
import { router, useRouter } from 'expo-router';

import { testDishes } from './Data/dishData';
import { Dish } from './Data/dishData';
import { filterByCategory, filterByDistance, filterByPrice, filterByRating } from './Data/dishData';

const VietnameseFoodMenuScreen = () => {
    const [selectedFilter, setSelectedFilter] = useState('nearby'); // nearby, bestseller, price, delivery

    const router = useRouter();
    // Filter options
    const filters = [
        { id: 'nearby', label: 'Gần tôi', icon: '▼' },
        { id: 'bestseller', label: 'Bán chạy', icon: '▼' },
        { id: 'price', label: 'Giá rẻ', icon: '▼' },
        { id: 'delivery', label: 'Đồng giá ship', icon: '' },
    ];

    // Dishes data
    const dishes: Dish[] = testDishes;

    const renderDishItem = ({ item }: { item: Dish }) => (
        <TouchableOpacity style={styles.dishCard}>
            <View style={styles.dishInfo}>
                <Text style={styles.dishName}>{item.name}</Text>
                <Text style={styles.dishDescription} numberOfLines={2}>
                    {item.description}
                </Text>
                <Text style={styles.dishPrice}>
                    {item.price.toLocaleString('vi-VN')}đ
                </Text>
            </View>

            <Image
                source={{ uri: item.image }}
                style={styles.dishImage}
            />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Món ăn Việt</Text>
                <TouchableOpacity style={styles.searchButton}>
                    <Text style={styles.searchIcon}>🔍</Text>
                </TouchableOpacity>
            </View>

            {/* Filters */}
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
                            {filter.label}
                        </Text>
                        {filter.icon && (
                            <Text style={[
                                styles.filterIcon,
                                selectedFilter === filter.id && styles.filterIconActive
                            ]}>
                                {filter.icon}
                            </Text>
                        )}
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Dishes List */}
            <FlatList
                data={dishes}
                renderItem={renderDishItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.dishList}
                showsVerticalScrollIndicator={false}
            />
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
        fontSize: 24,
        color: '#1F2937',
    },
    headerTitle: {
        fontSize: 20,
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

    // Filters
    filtersContainer: {
        borderBottomWidth: 3,
        borderBottomColor: '#F3F4F6',
        backgroundColor: '#FFFFFF',
    },
    filtersContent: {
        paddingHorizontal: 16,
        gap: 8,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15,
        backgroundColor: '#FFF7ED',
        borderWidth: 1,
        borderColor: '#FED7AA',
        marginRight: 8,
    },
    filterButtonActive: {
        backgroundColor: '#FF6B35',
        borderColor: '#FF6B35',
    },
    filterText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FF6B35',
        marginRight: 4,
    },
    filterTextActive: {
        color: '#FFFFFF',
    },
    filterIcon: {
        fontSize: 12,
        color: '#FF6B35',
    },
    filterIconActive: {
        color: '#FFFFFF',
    },

    // Dishes List
    dishList: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 24,
    },
    dishCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
    },
    dishInfo: {
        flex: 1,
        marginRight: 16,
    },
    dishName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 8,
    },
    dishDescription: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
        marginBottom: 12,
    },
    dishPrice: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FF6B35',
    },
    dishImage: {
        width: 140,
        height: 140,
        borderRadius: 12,
        backgroundColor: '#E5E7EB',
    },
});

export default VietnameseFoodMenuScreen;