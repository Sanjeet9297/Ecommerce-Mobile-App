import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, FlatList, Dimensions, ImageBackground } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

/**
 * Homepage Main Component
 * Built according to high-fidelity designs with full horizontal scrollable sections.
 */
export default function Homepage() {
  const router = useRouter();
  
  // Categories data
  const categories = [
    { id: '1', name: 'Beauty', icon: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?w=200&h=200&fit=crop' },
    { id: '2', name: 'Fashion', icon: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&h=200&fit=crop' },
    { id: '3', name: 'Kids', icon: 'https://images.unsplash.com/photo-1519457431-75df50953a81?w=200&h=200&fit=crop' },
    { id: '4', name: 'Mens', icon: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?w=200&h=200&fit=crop' },
    { id: '5', name: 'Womens', icon: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=200&h=200&fit=crop' },
  ];

  // Products data
  const products = [
    { id: '1', name: 'Women Printed Kurta', desc: 'Neque porro quisquam est qui dolorem ipsum quia', price: '₹1500', oldPrice: '₹2499', off: '40%Off', rating: 4.5, reviews: '56890', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop' },
    { id: '2', name: 'HRX by Hrithik Roshan', desc: 'Neque porro quisquam est qui dolorem ipsum quia', price: '₹2499', oldPrice: '₹4999', off: '50%Off', rating: 4.8, reviews: '344567', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Top Header Bar */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Feather name="menu" size={26} color="#000000" />
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

      {/* Search Bar section */}
      <View style={styles.searchSection}>
        <View style={styles.searchWrapper}>
          <Feather name="search" size={20} color="#BBBBBB" style={styles.searchIcon} />
          <TextInput 
            placeholder="Search any Product.." 
            placeholderTextColor="#BBBBBB"
            style={styles.searchInput}
          />
          <TouchableOpacity>
             <MaterialIcons name="mic-none" size={24} color="#BBBBBB" />
          </TouchableOpacity>
        </View>
      </View>

      {/* All Featured Section Title */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>All Featured</Text>
        <View style={styles.filterButtons}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Sort</Text>
            <Ionicons name="swap-vertical" size={16} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Filter</Text>
            <Feather name="filter" size={16} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories Horizontal Scroll */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.categoryScroll}
        contentContainerStyle={{ paddingLeft: 20 }}
      >
        {categories.map((item) => (
          <View key={item.id} style={styles.categoryCard}>
            <Image source={{ uri: item.icon }} style={styles.categoryImage} />
            <Text style={styles.categoryLabel}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Promotional Banner */}
      <View style={styles.bannerContainer}>
         <ImageBackground 
           source={{ uri: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=500&fit=crop' }} 
           style={styles.banner}
           imageStyle={styles.bannerImg}
         >
            <Text style={styles.bannerTitle}>50-40% OFF</Text>
            <Text style={styles.bannerSub}>Now in (product){"\n"}All colours</Text>
            <TouchableOpacity style={styles.shopNowButton}>
              <Text style={styles.shopNowText}>Shop Now</Text>
              <Feather name="arrow-right" size={18} color="#FFFFFF" />
            </TouchableOpacity>
         </ImageBackground>
         <View style={styles.dotsContainer}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
         </View>
      </View>

      {/* Deal of the Day functionality */}
      <View style={styles.dealSection}>
         <View style={styles.dealContent}>
            <Text style={styles.dealTitle}>Deal of the Day</Text>
            <View style={styles.timerRow}>
               <Feather name="clock" size={16} color="#FFFFFF" />
               <Text style={styles.timerText}>22h 55m 20s remaining</Text>
            </View>
         </View>
         <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View all</Text>
            <Feather name="arrow-right" size={18} color="#FFFFFF" />
         </TouchableOpacity>
      </View>

      {/* Products Grid (Horizontal) */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.productScroll}
        contentContainerStyle={{ paddingLeft: 20 }}
      >
        {products.map((item) => (
          <View key={item.id} style={styles.productCard}>
             <Image source={{ uri: item.image }} style={styles.productImage} />
             <View style={styles.productInfo}>
                <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.productDesc} numberOfLines={2}>{item.desc}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <View style={styles.priceRow}>
                   <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                   <Text style={styles.offText}>{item.off}</Text>
                </View>
                <View style={styles.ratingRow}>
                  <View style={styles.stars}>
                    {[1,2,3,4,5].map((_, i) => (
                      <Ionicons key={i} name="star" size={12} color="#EDB312" />
                    ))}
                  </View>
                  <Text style={styles.reviewsText}>{item.reviews}</Text>
                </View>
             </View>
          </View>
        ))}
      </ScrollView>

      {/* Special Offers Section */}
      <View style={styles.specialOffersContainer}>
         <View style={styles.specialHeader}>
           <Image 
             source={{ uri: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=200&h=200&fit=crop' }} 
             style={styles.offerIcon}
           />
           <View style={{ flex: 1, marginLeft: 15 }}>
             <Text style={styles.offerTitle}>Special Offers 🌟</Text>
             <Text style={styles.offerDesc}>We make sure you get the offer you need at best prices</Text>
           </View>
         </View>
      </View>

      <View style={{ height: 100 }} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  headerButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoShapes: {
    width: 35,
    height: 25,
    justifyContent: 'center',
    marginRight: 5,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
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
    fontSize: 22,
    fontWeight: '700',
    color: '#4392F1',
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#EEEEEE',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  searchSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 55,
    paddingHorizontal: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
  filterButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    gap: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  filterText: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '500',
  },
  categoryScroll: {
    marginBottom: 20,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryImage: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    marginBottom: 8,
  },
  categoryLabel: {
    fontSize: 12,
    color: '#212121',
    fontWeight: '500',
  },
  bannerContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  banner: {
    width: '100%',
    height: 180,
    padding: 20,
    justifyContent: 'center',
  },
  bannerImg: {
    borderRadius: 15,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  bannerSub: {
    fontSize: 12,
    color: '#FFFFFF',
    marginBottom: 15,
    lineHeight: 18,
  },
  shopNowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    gap: 8,
  },
  shopNowText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    gap: 6,
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
  dealSection: {
    backgroundColor: '#4392F1',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dealContent: {
    flex: 1,
  },
  dealTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  timerText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 5,
  },
  viewAllText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  productScroll: {
    marginBottom: 30,
  },
  productCard: {
    width: width * 0.45,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginRight: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#F0F0F0',
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  productDesc: {
    fontSize: 10,
    color: '#575757',
    marginBottom: 8,
    lineHeight: 14,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 2,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  oldPrice: {
    fontSize: 10,
    color: '#BBBBBB',
    textDecorationLine: 'underline',
  },
  offText: {
    fontSize: 10,
    color: '#F83758',
    fontWeight: '600',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  stars: {
    flexDirection: 'row',
  },
  reviewsText: {
    fontSize: 10,
    color: '#BBBBBB',
  },
  specialOffersContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    marginBottom: 20,
  },
  specialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  offerIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  offerDesc: {
    fontSize: 11,
    color: '#575757',
    lineHeight: 16,
  },
});
