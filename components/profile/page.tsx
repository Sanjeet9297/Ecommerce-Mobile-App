import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

/**
 * Profile / Checkout Details Screen
 * Multi-section form for Personal, Business Address, and Bank details.
 */
export default function ProfilePage() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Checkout</Text>
          <View style={{ width: 44 }} /> {/* Empty space for balance */}
        </View>

        {/* Profile Image with Edit Action */}
        <View style={styles.profileSection}>
          <View style={styles.imageWrapper}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' }} 
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editButton}>
               <Feather name="edit-2" size={12} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* 1. Personal Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput style={styles.input} value="aashifa@gmail.com" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput style={styles.input} value="**********" secureTextEntry />
            <TouchableOpacity style={styles.changePassContainer}>
              <Text style={styles.changePassText}>Change Password</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.divider} />

        {/* 2. Business Address Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Business Address Details</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Pincode</Text>
            <TextInput style={styles.input} value="450116" keyboardType="numeric" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Address</Text>
            <TextInput style={styles.input} value="216 St Paul's Rd," />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>City</Text>
            <TextInput style={styles.input} value="London" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>State</Text>
            <TouchableOpacity style={styles.dropdownInput}>
              <Text style={styles.dropdownValue}>N1 2LL,</Text>
              <Ionicons name="chevron-down" size={20} color="#676767" />
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Country</Text>
            <TextInput style={styles.input} value="United Kingdom" />
          </View>
        </View>

        <View style={styles.divider} />

        {/* 3. Bank Account Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bank Account Details</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Bank Account Number</Text>
            <TextInput style={styles.input} value="204356XXXXXXXX" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Account Holder's Name</Text>
            <TextInput style={styles.input} value="Abhiraj Sisodiya" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>IFSC Code</Text>
            <TextInput style={styles.input} value="SBIN00428" />
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
           <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// Wrapper to handle padding and safe areas
const SafeAreaView = ({ children, style }: any) => (
  <View style={[styles.safeArea, style]}>{children}</View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
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
  profileSection: {
    alignItems: 'center',
    marginBottom: 35,
  },
  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#EEEEEE',
  },
  editButton: {
    position: 'absolute',
    bottom: 5,
    right: 0,
    backgroundColor: '#4392F1',
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 12,
    color: '#333333',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
  },
  dropdownInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
  },
  dropdownValue: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
  },
  changePassContainer: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  changePassText: {
    fontSize: 12,
    color: '#F83758',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 10,
    marginBottom: 25,
  },
  saveButton: {
    backgroundColor: '#F83758',
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});
