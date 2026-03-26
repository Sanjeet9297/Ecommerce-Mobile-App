import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BottomNavigation from '../shared/bottomNavigation';
import { horizontalScale, verticalScale, moderateScale } from '../../constants/scaling';

const { width } = Dimensions.get('window');

/**
 * Orders / Checkout Page Component
 * High-fidelity representation with address cards and shopping item list.
 */
export default function OrdersPage() {
  const router = useRouter();

  // Mock Orders data as per image
  const orderItems = [
    { 
      id: '1', 
      name: 'Women\'s Casual Wear', 
      variations: ['Black', 'Red'], 
      rating: 4.8, 
      price: '$ 34.00', 
      oldPrice: '$ 64.00', 
      off: 'upto 33% off',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop' 
    },
    { 
      id: '2', 
      name: 'Men\'s Jacket', 
      variations: ['Green', 'Grey'], 
      rating: 4.7, 
      price: '$ 45.00', 
      oldPrice: '$ 67.00', 
      off: 'upto 28% off',
      image: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?w=400&h=400&fit=crop' 
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={moderateScale(28)} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: horizontalScale(44) }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* 1. Delivery Address Section */}
        <View style={styles.sectionHeader}>
           <Ionicons name="location-outline" size={moderateScale(20)} color="#000000" />
           <Text style={styles.sectionTitle}>Delivery Address</Text>
        </View>

        <View style={styles.addressRow}>
           <View style={styles.addressCard}>
              <View style={styles.addressHeader}>
                 <Text style={styles.addressName}>Address :</Text>
                 <TouchableOpacity>
                   <MaterialCommunityIcons name="pencil-outline" size={moderateScale(18)} color="#676767" />
                 </TouchableOpacity>
              </View>
              <Text style={styles.addressValue}>
                216 St Paul's Rd, London N1 2LL, UK{"\n"}
                Contact : +44-784232
              </Text>
           </View>
           
           <TouchableOpacity style={styles.addAddressCard}>
              <Ionicons name="add-circle-outline" size={moderateScale(36)} color="#000000" />
           </TouchableOpacity>
        </View>

        {/* 2. Shopping List Section */}
        <Text style={[styles.sectionTitle, { marginTop: verticalScale(30), marginBottom: verticalScale(20) }]}>Shopping List</Text>

        {orderItems.map((item) => (
          <View key={item.id} style={styles.orderCard}>
             <View style={styles.orderMain}>
                <Image source={{ uri: item.image }} style={styles.orderImage} />
                <View style={styles.orderInfo}>
                   <Text style={styles.itemName}>{item.name}</Text>
                   <View style={styles.variationRow}>
                      <Text style={styles.variationLabel}>Variations :</Text>
                      {item.variations.map((v, idx) => (
                        <View key={idx} style={styles.variationBadge}>
                           <Text style={styles.variationText}>{v}</Text>
                        </View>
                      ))}
                   </View>
                   <View style={styles.ratingRow}>
                      <Text style={styles.ratingValue}>{item.rating}</Text>
                      <View style={styles.stars}>
                        {[1,2,3,4].map((_, i) => (
                          <Ionicons key={i} name="star" size={moderateScale(14)} color="#EDB312" />
                        ))}
                        <Ionicons name="star-outline" size={moderateScale(14)} color="#EDB312" />
                      </View>
                   </View>
                   <View style={styles.priceContainer}>
                      <View style={styles.priceBox}>
                         <Text style={styles.currentPrice}>{item.price}</Text>
                      </View>
                      <View style={styles.discountBox}>
                         <Text style={styles.offText}>{item.off}</Text>
                         <Text style={styles.oldPrice}>{item.oldPrice}</Text>
                      </View>
                   </View>
                </View>
             </View>
             <View style={styles.orderFooter}>
                <Text style={styles.totalLabel}>Total Order (1) :</Text>
                <Text style={styles.totalPrice}>{item.price}</Text>
             </View>
          </View>
        ))}

        <View style={{ height: verticalScale(100) }} />
      </ScrollView>

      {/* Persistent Bottom Navigation */}
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(50),
    backgroundColor: '#FFFFFF',
    paddingBottom: verticalScale(20),
  },
  backButton: {
    width: horizontalScale(44),
    height: horizontalScale(44),
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: moderateScale(18),
    fontWeight: '800',
    color: '#000000',
  },
  scrollContent: {
    paddingHorizontal: horizontalScale(20),
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(8),
    marginBottom: verticalScale(20),
  },
  sectionTitle: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: '#000000',
  },
  addressRow: {
    flexDirection: 'row',
    gap: horizontalScale(15),
  },
  addressCard: {
    flex: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(12),
    padding: horizontalScale(15),
    borderWidth: 1,
    borderColor: '#EEEEEE',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  addAddressCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
  },
  addressName: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    color: '#000000',
  },
  addressValue: {
    fontSize: moderateScale(12),
    color: '#333333',
    lineHeight: verticalScale(18),
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginBottom: verticalScale(25),
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  orderMain: {
    flexDirection: 'row',
    padding: horizontalScale(15),
  },
  orderImage: {
    width: horizontalScale(100),
    height: horizontalScale(100),
    borderRadius: moderateScale(10),
    marginRight: horizontalScale(15),
  },
  orderInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: moderateScale(16),
    fontWeight: '800',
    color: '#000000',
    marginBottom: verticalScale(8),
  },
  variationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(6),
    marginBottom: verticalScale(8),
  },
  variationLabel: {
    fontSize: moderateScale(12),
    color: '#333333',
  },
  variationBadge: {
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(4),
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  variationText: {
    fontSize: moderateScale(11),
    color: '#000000',
    fontWeight: '500',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(6),
    marginBottom: verticalScale(12),
  },
  ratingValue: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    color: '#000000',
  },
  stars: {
    flexDirection: 'row',
    gap: horizontalScale(2),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(15),
  },
  priceBox: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(8),
  },
  currentPrice: {
    fontSize: moderateScale(16),
    fontWeight: '800',
    color: '#000000',
  },
  discountBox: {
    justifyContent: 'center',
  },
  offText: {
    fontSize: moderateScale(10),
    color: '#F83758',
    fontWeight: '700',
  },
  oldPrice: {
    fontSize: moderateScale(12),
    color: '#BBBBBB',
    textDecorationLine: 'line-through',
  },
  orderFooter: {
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: horizontalScale(15),
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: moderateScale(14),
    color: '#333333',
    fontWeight: '500',
  },
  totalPrice: {
    fontSize: moderateScale(14),
    fontWeight: '800',
    color: '#000000',
  },
});
