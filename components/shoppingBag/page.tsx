import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

/**
 * Shopping Bag Page Component
 * High-fidelity representation of the checkout basket as requested.
 */
export default function ShoppingBagPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 1. Header with Back arrow and Wishlist heart */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shopping Bag</Text>
        <TouchableOpacity style={styles.wishlistButton}>
          <Ionicons name="heart-outline" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* 2. Product Summary Card */}
        <View style={styles.itemCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop' }} 
            style={styles.itemImage}
          />
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>Women's Casual Wear</Text>
            <Text style={styles.itemSubtitle}>Checked Single-Breasted{"\n"}Blazer</Text>
            
            <View style={styles.selectorsRow}>
                <TouchableOpacity style={styles.selector}>
                   <Text style={styles.selectorText}>Size <Text style={styles.selectorValue}>42</Text></Text>
                   <Ionicons name="chevron-down" size={14} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.selector}>
                   <Text style={styles.selectorText}>Qty <Text style={styles.selectorValue}>1</Text></Text>
                   <Ionicons name="chevron-down" size={14} color="#000" />
                </TouchableOpacity>
            </View>

            <View style={styles.deliveryRow}>
               <Text style={styles.deliveryLabel}>Delivery by</Text>
               <Text style={styles.deliveryDate}>10 May 2XXX</Text>
            </View>
          </View>
        </View>

        {/* 3. Coupon Section */}
        <TouchableOpacity style={styles.couponSection}>
           <View style={styles.couponLeft}>
              <MaterialCommunityIcons name="ticket-percent-outline" size={24} color="#000000" />
              <Text style={styles.couponText}>Apply Coupons</Text>
           </View>
           <Text style={styles.selectLink}>Select</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        {/* 4. Payment Details Section */}
        <View style={styles.paymentContainer}>
           <Text style={styles.sectionHeader}>Order Payment Details</Text>
           
           <View style={styles.paymentRow}>
              <Text style={styles.paymentLabel}>Order Amounts</Text>
              <Text style={styles.amountBold}>₹ 7,000.00</Text>
           </View>

           <View style={styles.paymentRow}>
              <View style={styles.labelWithLink}>
                <Text style={styles.paymentLabel}>Convenience</Text>
                <TouchableOpacity><Text style={styles.linkTextSmall}>Know More</Text></TouchableOpacity>
              </View>
              <TouchableOpacity><Text style={styles.redLink}>Apply Coupon</Text></TouchableOpacity>
           </View>

           <View style={styles.paymentRow}>
              <Text style={styles.paymentLabel}>Delivery Fee</Text>
              <Text style={styles.freeText}>Free</Text>
           </View>
        </View>

        <View style={styles.divider} />

        {/* 5. Total Section */}
        <View style={styles.totalContainer}>
           <View style={styles.paymentRow}>
              <Text style={styles.orderTotalLabel}>Order Total</Text>
              <Text style={styles.amountBoldBig}>₹ 7,000.00</Text>
           </View>
           
           <View style={styles.emiRow}>
              <Text style={styles.emiLabel}>EMI Available</Text>
              <TouchableOpacity><Text style={styles.redLink}>Details</Text></TouchableOpacity>
           </View>
        </View>

      </ScrollView>

      {/* 6. Sticky Bottom Action Bar */}
      <View style={styles.stickyFooter}>
          <View style={styles.footerLeft}>
             <Text style={styles.footerTotal}>₹ 7,000.00</Text>
             <TouchableOpacity><Text style={styles.viewDetailsText}>View Details</Text></TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={styles.proceedButton}
            onPress={() => router.push('/payment')}
          >
             <Text style={styles.proceedText}>Proceed to Payment</Text>
          </TouchableOpacity>
      </View>
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
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
  },
  wishlistButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  itemCard: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  itemImage: {
    width: 130,
    height: 160,
    borderRadius: 8,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 5,
  },
  itemSubtitle: {
    fontSize: 13,
    color: '#333333',
    lineHeight: 18,
    marginBottom: 10,
  },
  selectorsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    gap: 8,
  },
  selectorText: {
    fontSize: 12,
    color: '#000000',
  },
  selectorValue: {
    fontWeight: '700',
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  deliveryLabel: {
    fontSize: 12,
    color: '#333333',
  },
  deliveryDate: {
    fontSize: 12,
    fontWeight: '800',
    color: '#000000',
  },
  couponSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    marginBottom: 15,
    marginTop: 10,
  },
  couponLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  couponText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
  },
  selectLink: {
    color: '#F83758',
    fontSize: 15,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 15,
  },
  paymentContainer: {
    paddingVertical: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 20,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  paymentLabel: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '500',
  },
  amountBold: {
    fontSize: 15,
    fontWeight: '800',
    color: '#000000',
  },
  labelWithLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  linkTextSmall: {
    fontSize: 12,
    color: '#F83758',
    fontWeight: '600',
  },
  redLink: {
    fontSize: 13,
    color: '#F83758',
    fontWeight: '600',
  },
  freeText: {
    fontSize: 15,
    color: '#F83758',
    fontWeight: '700',
  },
  totalContainer: {
    paddingVertical: 10,
  },
  orderTotalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  amountBoldBig: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
  },
  emiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  emiLabel: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
  stickyFooter: {
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#F9F9F9',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  footerLeft: {
    flex: 1,
  },
  footerTotal: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
  },
  viewDetailsText: {
    fontSize: 12,
    color: '#F83758',
    fontWeight: '600',
    marginTop: 4,
  },
  proceedButton: {
    backgroundColor: '#F83758',
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 10,
  },
  proceedText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});
