import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BottomNavigation from '../shared/bottomNavigation';

const { width } = Dimensions.get('window');

/**
 * Product Details / Shop Page component (Linked to Cart button)
 * High-fidelity representation of the product details as requested.
 */
export default function ProductDetailsPage() {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState('7 UK');
  const sizes = ['6 UK', '7 UK', '8 UK', '9 UK', '10 UK'];

  // Similar Products data
  const similarProducts = [
    { id: '1', name: 'Nike Sneakers', desc: 'Nike Air Jordan Retro 1 Low Mystic Black', price: '₹1,900', rating: 4.5, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop' },
    { id: '2', name: 'Nike Sneakers', desc: 'Mid Peach Mocha Shoes For Men White Black Pink S...', price: '₹1,900', rating: 4.8, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* 1. Header with Back and Cart icons */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerIconButton}>
            <Ionicons name="chevron-back" size={28} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconButton}>
            <Feather name="shopping-cart" size={24} color="#000000" />
          </TouchableOpacity>
        </View>

        {/* 2. Main Product Image (Carousel style) */}
        <View style={styles.heroContainer}>
          <View style={styles.carouselWrapper}>
             <Image 
               source={{ uri: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=600&fit=crop' }} 
               style={styles.heroImage} 
               resizeMode="cover"
             />
             {/* Carousel navigation arrow overlay */}
             <TouchableOpacity style={styles.carouselNext}>
                <Ionicons name="chevron-forward" size={24} color="#676767" />
             </TouchableOpacity>
          </View>
          <View style={styles.carouselDots}>
             <View style={[styles.dot, styles.activeDot]} />
             <View style={styles.dot} />
             <View style={styles.dot} />
             <View style={styles.dot} />
             <View style={styles.dot} />
          </View>
        </View>

        {/* 3. Product Info Section */}
        <View style={styles.productInfoSection}>
          <Text style={styles.sizeLabel}>Size: {selectedSize}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sizeScroll}>
            {sizes.map((size) => (
              <TouchableOpacity 
                key={size} 
                onPress={() => setSelectedSize(size)}
                style={[styles.sizeBox, selectedSize === size && styles.sizeBoxActive]}
              >
                <Text style={[styles.sizeText, selectedSize === size && styles.sizeTextActive]}>{size}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.productTitle}>Nike Sneakers</Text>
          <Text style={styles.productSubTitle}>Vision Alta Men's Shoes Size (All Colours)</Text>
          
          <View style={styles.ratingRow}>
            <View style={styles.stars}>
               {[1,2,3,4].map((_, i) => (
                 <Ionicons key={i} name="star" size={16} color="#EDB312" />
               ))}
               <Ionicons name="star-half" size={16} color="#EDB312" />
            </View>
            <Text style={styles.reviewCount}>56,890</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.oldPrice}>₹2,999</Text>
            <Text style={styles.currentPrice}>₹1,500</Text>
            <Text style={styles.discountText}>50% Off</Text>
          </View>

          <Text style={styles.detailsTitle}>Product Details</Text>
          <Text style={styles.detailsText}>
            Perhaps the most iconic sneaker of all-time, this original "Chicago" colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the... <Text style={styles.moreText}>More</Text>
          </Text>

          {/* Features Badges */}
          <View style={styles.badgeRow}>
            <View style={styles.badge}>
               <Ionicons name="location-outline" size={16} color="#676767" />
               <Text style={styles.badgeText}>Nearest Store</Text>
            </View>
            <View style={styles.badge}>
               <Feather name="lock" size={14} color="#676767" />
               <Text style={styles.badgeText}>VIP</Text>
            </View>
            <View style={styles.badge}>
               <MaterialCommunityIcons name="keyboard-return" size={16} color="#676767" />
               <Text style={styles.badgeText}>Return policy</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.cartButton}>
               <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
               <Text style={styles.actionBtnText}>Go to cart</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.buyButton}
              onPress={() => router.push('/shopping-bag')}
            >
               <FontAwesome5 name="hand-pointer" size={20} color="#FFFFFF" />
               <Text style={styles.actionBtnText}>Buy Now</Text>
            </TouchableOpacity>
          </View>

          {/* Delivery Banner */}
          <View style={styles.deliveryBanner}>
             <Text style={styles.deliveryTop}>Delivery in</Text>
             <Text style={styles.deliveryTime}>1 within Hour</Text>
          </View>

          {/* Secondary Actions */}
          <View style={styles.secondaryActionRow}>
             <TouchableOpacity style={styles.secondaryBtn}>
                <Ionicons name="eye-outline" size={20} color="#676767" />
                <Text style={styles.secondaryBtnText}>View Similar</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.secondaryBtn}>
                <Ionicons name="git-compare-outline" size={20} color="#676767" />
                <Text style={styles.secondaryBtnText}>Add to Compare</Text>
             </TouchableOpacity>
          </View>

          {/* Similar Listing Section */}
          <View style={styles.similarHeader}>
             <Text style={styles.similarTitle}>Similar To</Text>
             <View style={styles.statsSubtitle}>
               <Text style={styles.itemCount}>282+ Items</Text>
               <View style={styles.filterRow}>
                 <TouchableOpacity style={styles.miniBtn}><Text style={styles.miniBtnText}>Sort</Text><Ionicons name="swap-vertical" size={12} color="#000000"/></TouchableOpacity>
                 <TouchableOpacity style={styles.miniBtn}><Text style={styles.miniBtnText}>Filter</Text><Feather name="filter" size={12} color="#000000"/></TouchableOpacity>
               </View>
             </View>
          </View>

          <View style={styles.similarGrid}>
             {similarProducts.map((item) => (
               <View key={item.id} style={styles.productCard}>
                 <Image source={{ uri: item.image }} style={styles.cardImg} />
                 <Text style={styles.cardTitle}>{item.name}</Text>
                 <Text style={styles.cardDesc} numberOfLines={2}>{item.desc}</Text>
                 <Text style={styles.cardPrice}>{item.price}</Text>
                 <View style={styles.cardRating}>
                   <Ionicons name="star" size={12} color="#EDB312" />
                   <Ionicons name="star" size={12} color="#EDB312" />
                   <Ionicons name="star" size={12} color="#EDB312" />
                   <Ionicons name="star" size={12} color="#EDB312" />
                   <Ionicons name="star-outline" size={12} color="#EDB312" />
                 </View>
               </View>
             ))}
          </View>

        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Persistent Bottom Navigation with highlighted center icon */}
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
  },
  headerIconButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 22,
  },
  heroContainer: {
    width: width,
    alignItems: 'center',
    marginBottom: 20,
  },
  carouselWrapper: {
    width: width - 40,
    height: 250,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  carouselNext: {
    position: 'absolute',
    right: 15,
    top: '50%',
    marginTop: -20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselDots: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
  },
  activeDot: {
    backgroundColor: '#F83758',
    width: 20,
  },
  productInfoSection: {
    paddingHorizontal: 20,
  },
  sizeLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 10,
  },
  sizeScroll: {
    marginBottom: 20,
  },
  sizeBox: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#F83758',
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  sizeBoxActive: {
    backgroundColor: '#F83758',
  },
  sizeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F83758',
  },
  sizeTextActive: {
    color: '#FFFFFF',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 5,
  },
  productSubTitle: {
    fontSize: 14,
    color: '#676767',
    marginBottom: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },
  stars: {
    flexDirection: 'row',
    gap: 2,
  },
  reviewCount: {
    fontSize: 14,
    color: '#A8A8A8',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  oldPrice: {
    fontSize: 16,
    color: '#BBBBBB',
    textDecorationLine: 'line-through',
  },
  currentPrice: {
    fontSize: 22,
    fontWeight: '800',
    color: '#000000',
  },
  discountText: {
    fontSize: 16,
    color: '#F83758',
    fontWeight: '700',
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 12,
    color: '#000000',
    lineHeight: 18,
    marginBottom: 20,
  },
  moreText: {
    color: '#F83758',
    fontWeight: '700',
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 30,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    gap: 6,
  },
  badgeText: {
    fontSize: 11,
    color: '#676767',
    fontWeight: '500',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 25,
  },
  cartButton: {
    flex: 1,
    flexDirection: 'row',
    height: 55,
    backgroundColor: '#4392F1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buyButton: {
    flex: 1,
    flexDirection: 'row',
    height: 55,
    backgroundColor: '#50DB8C',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  actionBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  deliveryBanner: {
    backgroundColor: '#FFCCD5',
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
  },
  deliveryTop: {
    fontSize: 12,
    color: '#000000',
  },
  deliveryTime: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
  },
  secondaryActionRow: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 40,
  },
  secondaryBtn: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  secondaryBtnText: {
    color: '#676767',
    fontSize: 14,
    fontWeight: '600',
  },
  similarHeader: {
    marginBottom: 20,
  },
  similarTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 8,
  },
  statsSubtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemCount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  filterRow: {
    flexDirection: 'row',
    gap: 10,
  },
  miniBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    gap: 4,
    elevation: 1,
  },
  miniBtnText: {
    fontSize: 12,
    color: '#000000',
  },
  similarGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  productCard: {
    width: (width - 55) / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: 180,
    backgroundColor: '#F3F3F3',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000000',
    marginTop: 8,
    paddingHorizontal: 8,
  },
  cardDesc: {
    fontSize: 10,
    color: '#676767',
    paddingHorizontal: 8,
    marginBottom: 6,
  },
  cardPrice: {
    fontSize: 15,
    fontWeight: '800',
    color: '#000000',
    paddingHorizontal: 8,
  },
  cardRating: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingBottom: 10,
    marginTop: 5,
    gap: 2,
  },
});
