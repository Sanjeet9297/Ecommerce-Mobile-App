import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BottomNavigation from '../shared/bottomNavigation';
import { horizontalScale, verticalScale, moderateScale } from '../../constants/scaling';

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
            <Ionicons name="chevron-back" size={moderateScale(28)} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconButton}>
            <Feather name="shopping-cart" size={moderateScale(24)} color="#000000" />
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
                <Ionicons name="chevron-forward" size={moderateScale(24)} color="#676767" />
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
                 <Ionicons key={i} name="star" size={moderateScale(16)} color="#EDB312" />
               ))}
               <Ionicons name="star-half" size={moderateScale(16)} color="#EDB312" />
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
               <Ionicons name="location-outline" size={moderateScale(16)} color="#676767" />
               <Text style={styles.badgeText}>Nearest Store</Text>
            </View>
            <View style={styles.badge}>
               <Feather name="lock" size={moderateScale(14)} color="#676767" />
               <Text style={styles.badgeText}>VIP</Text>
            </View>
            <View style={styles.badge}>
               <MaterialCommunityIcons name="keyboard-return" size={moderateScale(16)} color="#676767" />
               <Text style={styles.badgeText}>Return policy</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.cartButton}>
               <Ionicons name="cart-outline" size={moderateScale(24)} color="#FFFFFF" />
               <Text style={styles.actionBtnText}>Go to cart</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.buyButton}
              onPress={() => router.push('/shopping-bag')}
            >
               <FontAwesome5 name="hand-pointer" size={moderateScale(20)} color="#FFFFFF" />
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
                <Ionicons name="eye-outline" size={moderateScale(20)} color="#676767" />
                <Text style={styles.secondaryBtnText}>View Similar</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.secondaryBtn}>
                <Ionicons name="git-compare-outline" size={moderateScale(20)} color="#676767" />
                <Text style={styles.secondaryBtnText}>Add to Compare</Text>
             </TouchableOpacity>
          </View>

          {/* Similar Listing Section */}
          <View style={styles.similarHeader}>
             <Text style={styles.similarTitle}>Similar To</Text>
             <View style={styles.statsSubtitle}>
               <Text style={styles.itemCount}>282+ Items</Text>
               <View style={styles.filterRow}>
                 <TouchableOpacity style={styles.miniBtn}><Text style={styles.miniBtnText}>Sort</Text><Ionicons name="swap-vertical" size={moderateScale(12)} color="#000000"/></TouchableOpacity>
                 <TouchableOpacity style={styles.miniBtn}><Text style={styles.miniBtnText}>Filter</Text><Feather name="filter" size={moderateScale(12)} color="#000000"/></TouchableOpacity>
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
                   <Ionicons name="star" size={moderateScale(12)} color="#EDB312" />
                   <Ionicons name="star" size={moderateScale(12)} color="#EDB312" />
                   <Ionicons name="star" size={moderateScale(12)} color="#EDB312" />
                   <Ionicons name="star" size={moderateScale(12)} color="#EDB312" />
                   <Ionicons name="star-outline" size={moderateScale(12)} color="#EDB312" />
                 </View>
               </View>
             ))}
          </View>

        </View>

        <View style={{ height: verticalScale(100) }} />
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
    paddingBottom: verticalScale(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(50),
    paddingBottom: verticalScale(15),
  },
  headerIconButton: {
    width: moderateScale(44),
    height: moderateScale(44),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: moderateScale(22),
  },
  heroContainer: {
    width: width,
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  carouselWrapper: {
    width: width - horizontalScale(40),
    height: verticalScale(250),
    borderRadius: moderateScale(15),
    overflow: 'hidden',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  carouselNext: {
    position: 'absolute',
    right: horizontalScale(15),
    top: '50%',
    marginTop: verticalScale(-20),
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselDots: {
    flexDirection: 'row',
    gap: horizontalScale(8),
    marginTop: verticalScale(15),
  },
  dot: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: '#E0E0E0',
  },
  activeDot: {
    backgroundColor: '#F83758',
    width: moderateScale(20),
  },
  productInfoSection: {
    paddingHorizontal: horizontalScale(20),
  },
  sizeLabel: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: '#000000',
    marginBottom: verticalScale(10),
  },
  sizeScroll: {
    marginBottom: verticalScale(20),
  },
  sizeBox: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(6),
    borderWidth: 1,
    borderColor: '#F83758',
    marginRight: horizontalScale(10),
    backgroundColor: '#FFFFFF',
  },
  sizeBoxActive: {
    backgroundColor: '#F83758',
  },
  sizeText: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#F83758',
  },
  sizeTextActive: {
    color: '#FFFFFF',
  },
  productTitle: {
    fontSize: moderateScale(24),
    fontWeight: '800',
    color: '#000000',
    marginBottom: verticalScale(5),
  },
  productSubTitle: {
    fontSize: moderateScale(14),
    color: '#676767',
    marginBottom: verticalScale(10),
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(10),
    marginBottom: verticalScale(15),
  },
  stars: {
    flexDirection: 'row',
    gap: horizontalScale(2),
  },
  reviewCount: {
    fontSize: moderateScale(14),
    color: '#A8A8A8',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(12),
    marginBottom: verticalScale(20),
  },
  oldPrice: {
    fontSize: moderateScale(16),
    color: '#BBBBBB',
    textDecorationLine: 'line-through',
  },
  currentPrice: {
    fontSize: moderateScale(22),
    fontWeight: '800',
    color: '#000000',
  },
  discountText: {
    fontSize: moderateScale(16),
    color: '#F83758',
    fontWeight: '700',
  },
  detailsTitle: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: '#000000',
    marginBottom: verticalScale(8),
  },
  detailsText: {
    fontSize: moderateScale(12),
    color: '#000000',
    lineHeight: verticalScale(18),
    marginBottom: verticalScale(20),
  },
  moreText: {
    color: '#F83758',
    fontWeight: '700',
  },
  badgeRow: {
    flexDirection: 'row',
    gap: horizontalScale(12),
    marginBottom: verticalScale(30),
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(8),
    borderWidth: 1,
    borderColor: '#EEEEEE',
    gap: horizontalScale(6),
  },
  badgeText: {
    fontSize: moderateScale(11),
    color: '#676767',
    fontWeight: '500',
  },
  actionRow: {
    flexDirection: 'row',
    gap: horizontalScale(15),
    marginBottom: verticalScale(25),
  },
  cartButton: {
    flex: 1,
    flexDirection: 'row',
    height: verticalScale(55),
    backgroundColor: '#4392F1',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    gap: horizontalScale(10),
  },
  buyButton: {
    flex: 1,
    flexDirection: 'row',
    height: verticalScale(55),
    backgroundColor: '#50DB8C',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    gap: horizontalScale(10),
  },
  actionBtnText: {
    color: '#FFFFFF',
    fontSize: moderateScale(18),
    fontWeight: '700',
  },
  deliveryBanner: {
    backgroundColor: '#FFCCD5',
    padding: moderateScale(15),
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(25),
  },
  deliveryTop: {
    fontSize: moderateScale(12),
    color: '#000000',
  },
  deliveryTime: {
    fontSize: moderateScale(18),
    fontWeight: '800',
    color: '#000000',
  },
  secondaryActionRow: {
    flexDirection: 'row',
    gap: horizontalScale(15),
    marginBottom: verticalScale(40),
  },
  secondaryBtn: {
    flex: 1,
    flexDirection: 'row',
    height: verticalScale(50),
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    gap: horizontalScale(10),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  secondaryBtnText: {
    color: '#676767',
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
  similarHeader: {
    marginBottom: verticalScale(20),
  },
  similarTitle: {
    fontSize: moderateScale(22),
    fontWeight: '800',
    color: '#000000',
    marginBottom: verticalScale(8),
  },
  statsSubtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemCount: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: '#000000',
  },
  filterRow: {
    flexDirection: 'row',
    gap: horizontalScale(10),
  },
  miniBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(5),
    gap: horizontalScale(4),
    elevation: 1,
  },
  miniBtnText: {
    fontSize: moderateScale(12),
    color: '#000000',
  },
  similarGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  productCard: {
    width: (width - horizontalScale(55)) / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(20),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: verticalScale(180),
    backgroundColor: '#F3F3F3',
  },
  cardTitle: {
    fontSize: moderateScale(15),
    fontWeight: '700',
    color: '#000000',
    marginTop: verticalScale(8),
    paddingHorizontal: horizontalScale(8),
  },
  cardDesc: {
    fontSize: moderateScale(10),
    color: '#676767',
    paddingHorizontal: horizontalScale(8),
    marginBottom: verticalScale(6),
  },
  cardPrice: {
    fontSize: moderateScale(15),
    fontWeight: '800',
    color: '#000000',
    paddingHorizontal: horizontalScale(8),
  },
  cardRating: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(8),
    paddingBottom: verticalScale(10),
    marginTop: verticalScale(5),
    gap: horizontalScale(2),
  },
});
