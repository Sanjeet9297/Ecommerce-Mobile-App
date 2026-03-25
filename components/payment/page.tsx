import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Modal, Image } from 'react-native';
import { Ionicons, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BottomNavigation from '../shared/bottomNavigation';

const { width, height } = Dimensions.get('window');

/**
 * Payment / Checkout Finalization Screen
 * High-fidelity representation with order summary, payment methods, and success modal.
 */
export default function PaymentPage() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState('Visa');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const paymentMethods = [
    { id: 'Visa', name: 'Visa', icon: 'cc-visa', masked: '*********2109', color: '#1A1F71' },
    { id: 'PayPal', name: 'PayPal', icon: 'paypal', masked: '*********2109', color: '#003087' },
    { id: 'Maestro', name: 'Maestro', icon: 'cc-mastercard', masked: '*********2109', color: '#EB001B' },
    { id: 'ApplePay', name: 'ApplePay', icon: 'apple', masked: '*********2109', color: '#000000' },
  ];

  return (
    <View style={styles.container}>
      {/* 1. Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* 2. Order Summary */}
        <View style={styles.summarySection}>
           <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Order</Text>
              <Text style={styles.summaryValue}>₹ 7,000</Text>
           </View>
           <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Shipping</Text>
              <Text style={styles.summaryValue}>₹ 30</Text>
           </View>
           <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>₹ 7,030</Text>
           </View>
        </View>

        <View style={styles.divider} />

        {/* 3. Payment Methods */}
        <View style={styles.paymentSection}>
           <Text style={styles.sectionTitle}>Payment</Text>

           {paymentMethods.map((method) => (
             <TouchableOpacity 
               key={method.id} 
               style={[
                 styles.methodCard, 
                 selectedMethod === method.id && styles.selectedCard
               ]}
               onPress={() => setSelectedMethod(method.id)}
             >
                <View style={styles.methodInfo}>
                   {method.id === 'ApplePay' ? (
                     <FontAwesome name="apple" size={24} color="#000" />
                   ) : (
                     <FontAwesome5 
                       name={method.icon} 
                       size={24} 
                       color={method.color} 
                     />
                   )}
                   {method.id !== 'ApplePay' && <Text style={[styles.methodName, { color: method.color }]}>{method.name}</Text>}
                </View>
                <Text style={styles.maskedNumber}>{method.masked}</Text>
             </TouchableOpacity>
           ))}
        </View>

        {/* 4. Continue Action */}
        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => setShowSuccessModal(true)}
        >
           <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Success Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showSuccessModal}
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalOverlay}>
           <View style={styles.modalContent}>
              {/* Confetti / Dots representation */}
              <View style={styles.dotsContainer}>
                  <View style={[styles.miniDot, { top: 10, left: 30, backgroundColor: '#FFB6C1' }]} />
                  <View style={[styles.miniDot, { top: 40, right: 20, backgroundColor: '#FF69B4' }]} />
                  <View style={[styles.miniDot, { bottom: 30, left: 10, backgroundColor: '#FFC0CB' }]} />
              </View>

              <View style={styles.successCircle}>
                 <Ionicons name="checkmark" size={50} color="#FFFFFF" />
              </View>
              <Text style={styles.successText}>Payment done successfully.</Text>
              
              {/* Auto-closing or clicking elsewhere should return to Home */}
              <TouchableOpacity 
                style={styles.modalDismiss}
                onPress={() => {
                   setShowSuccessModal(false);
                   router.replace('/home');
                }}
              >
                  <Text style={styles.okText}>Back to Home</Text>
              </TouchableOpacity>
           </View>
        </View>
      </Modal>

      {/* Bottom Navigation */}
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
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000000',
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  summarySection: {
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  summaryValue: {
    fontSize: 16,
    color: '#888888',
    fontWeight: '600',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '700',
  },
  totalValue: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '800',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 15,
  },
  paymentSection: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 20,
  },
  methodCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: '#F83758',
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowColor: '#F83758',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  methodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  methodName: {
    fontSize: 16,
    fontWeight: '800',
  },
  maskedNumber: {
    fontSize: 14,
    color: '#676767',
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#F83758',
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.85,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 40,
    alignItems: 'center',
    position: 'relative',
  },
  dotsContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  miniDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
  },
  successCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F83758',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 10,
  },
  successText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 30,
  },
  okText: {
    fontSize: 16,
    color: '#F83758',
    fontWeight: '700',
  },
  modalDismiss: {
     marginTop: 10,
  }
});
