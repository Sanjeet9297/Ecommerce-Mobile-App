import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BottomNavigation from '../shared/bottomNavigation';
import { horizontalScale, verticalScale, moderateScale } from '../../constants/scaling';

const { width } = Dimensions.get('window');
const columnWidth = (width - horizontalScale(50)) / 2; // Scaled width for 2 columns

/**
 * Wishlist Page Component
 * High-fidelity layout with product grid, sort/filter, and search functionality.
 */
export default function WishlistPage() {
  const router = useRouter();
  
  // High-fidelity Wishlist data as per image
  const wishlistItems = [
    { id: '1', name: 'Black Winter...', desc: 'Autumn And Winter Casual cotton-padded jacket...', price: '₹499', rating: 4.2, reviews: '6,090', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop' },
    { id: '2', name: 'Mens Starry', desc: 'Mens Starry Sky Printed Shirt 100% Cotton Fabric', price: '₹399', rating: 4.5, reviews: '1,52,344', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop' },
    { id: '3', name: 'Black Dress', desc: 'Solid Black Dress for Women, Sexy Chain Shorts Ladi...', price: '₹2,000', rating: 4.8, reviews: '5,23,456', image: 'https://images.unsplash.com/photo-1539008835279-434680933241?w=400&h=600&fit=crop' },
    { id: '4', name: 'Pink Embroide...', desc: 'EARTHEN Rose Pink Embroidered Tiered Max...', price: '₹1,900', rating: 4.0, reviews: '45,678', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=600&fit=crop' },
    { id: '5', name: 'Flare Dress', desc: 'Antheas Black & Rust Orange Floral Print Tiered Midi F...', price: '₹1,990', rating: 4.2, reviews: '3,35,566', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=600&fit=crop' },
    { id: '6', name: 'denim dress', desc: 'Blue cotton denim dress Look 2 Printed cotton dr...', price: '₹999', rating: 4.5, reviews: '27,344', image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=600&fit=crop' },
    { id: '7', name: 'Jordan Stay', desc: 'The classic Air Jordan 12 to create a shoe that\'s fres...', price: '₹4,999', rating: 4.9, reviews: '10,23,466', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop' },
    { id: '8', name: 'Realme 7', desc: '6 GB RAM | 64 GB ROM | Expandable Upto 258...', price: '₹13,499', rating: 4.6, reviews: '3,44,567', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop' },
  ];

  const renderItem = ({ item }: { item: typeof wishlistItems[0] }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.cardDesc} numberOfLines={2}>{item.desc}</Text>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <View style={styles.ratingRow}>
          <View style={styles.stars}>
            {[1, 2, 3, 4].map((_, i) => (
              <Ionicons key={i} name="star" size={moderateScale(12)} color="#EDB312" />
            ))}
            <Ionicons name="star-outline" size={moderateScale(12)} color="#EDB312" />
          </View>
          <Text style={styles.reviewsText}>{item.reviews}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 1. Header with interlocking logo shapes */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Feather name="menu" size={moderateScale(26)} color="#000000" />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
            <View style={styles.logoShapes}>
              <View style={[styles.circle, styles.circleRed]} />
              <View style={[styles.circle, styles.circleBlue]} />
            </View>
            <Text style={styles.logoText}>Stylish</Text>
        </View>
        <TouchableOpacity 
          style={styles.profileButton}
          onPress={() => router.push('/profile')}
        >
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' }} 
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* 2. Search Field */}
      <View style={styles.searchSection}>
        <View style={styles.searchWrapper}>
          <Feather name="search" size={moderateScale(20)} color="#BBBBBB" style={styles.searchIcon} />
          <TextInput 
            placeholder="Search any Product.." 
            placeholderTextColor="#BBBBBB"
            style={styles.searchInput}
          />
          <TouchableOpacity>
             <MaterialIcons name="mic-none" size={moderateScale(24)} color="#BBBBBB" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 3. Sort/Filter Header */}
      <View style={styles.statsRow}>
        <Text style={styles.itemCount}>52,082+ Items</Text>
        <View style={styles.filterButtons}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Sort</Text>
            <Ionicons name="swap-vertical" size={moderateScale(16)} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Filter</Text>
            <Feather name="filter" size={moderateScale(16)} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 4. Products Masonry-style Grid */}
      <FlatList
        data={wishlistItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContent}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        ListFooterComponent={<View style={{ height: verticalScale(20) }} />}
      />

      {/* Shared Bottom Navigation (Active screen Wishlist recognized by route name) */}
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(50),
    paddingBottom: verticalScale(20),
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoShapes: {
    width: horizontalScale(35),
    height: verticalScale(25),
    justifyContent: 'center',
    marginRight: horizontalScale(5),
  },
  circle: {
    width: horizontalScale(20),
    height: horizontalScale(20),
    borderRadius: horizontalScale(10),
    position: 'absolute',
  },
  circleRed: {
    backgroundColor: '#F83758',
    left: 0,
  },
  circleBlue: {
    backgroundColor: '#4392F1',
    right: 0,
    opacity: 0.9,
  },
  logoText: {
    fontSize: moderateScale(22),
    fontWeight: '700',
    color: '#4392F1',
  },
  profileButton: {
    width: horizontalScale(44),
    height: horizontalScale(44),
    borderRadius: horizontalScale(22),
    overflow: 'hidden',
    backgroundColor: '#EEEEEE',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  searchSection: {
    paddingHorizontal: horizontalScale(20),
    paddingBottom: verticalScale(20),
    backgroundColor: '#FFFFFF',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(10),
    height: verticalScale(55),
    paddingHorizontal: horizontalScale(15),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  searchIcon: {
    marginRight: horizontalScale(10),
  },
  searchInput: {
    flex: 1,
    fontSize: moderateScale(14),
    color: '#000000',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(15),
  },
  itemCount: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: '#000000',
  },
  filterButtons: {
    flexDirection: 'row',
    gap: horizontalScale(10),
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(6),
    gap: horizontalScale(5),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  filterText: {
    fontSize: moderateScale(12),
    color: '#000000',
    fontWeight: '500',
  },
  gridContent: {
    paddingHorizontal: horizontalScale(15),
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: verticalScale(15),
  },
  card: {
    width: columnWidth,
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(12),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: verticalScale(180),
    backgroundColor: '#F3F3F3',
  },
  cardInfo: {
    padding: horizontalScale(10),
  },
  cardTitle: {
    fontSize: moderateScale(15),
    fontWeight: '700',
    color: '#000000',
    marginBottom: verticalScale(4),
  },
  cardDesc: {
    fontSize: moderateScale(10),
    color: '#676767',
    marginBottom: verticalScale(6),
    lineHeight: verticalScale(14),
  },
  cardPrice: {
    fontSize: moderateScale(15),
    fontWeight: '700',
    color: '#000000',
    marginBottom: verticalScale(6),
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(4),
  },
  stars: {
    flexDirection: 'row',
  },
  reviewsText: {
    fontSize: moderateScale(10),
    color: '#A8A8A8',
  },
});
