import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Dimensions } from 'react-native';
import { Ionicons, Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BottomNavigation from '../shared/bottomNavigation';
import { horizontalScale, verticalScale, moderateScale } from '../../constants/scaling';

const { width } = Dimensions.get('window');

/**
 * Settings Page Component
 * Clean, list-based UI for Account, Shopping, and App Preferences.
 */
export default function SettingsPage() {
  const router = useRouter();
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true);

  // Reusable component for settings item
  const SettingsItem = ({ icon, label, subLabel, onPress, iconColor = "#000", isSwitch = false, value, onToggle }: any) => (
    <TouchableOpacity 
      style={styles.itemContainer} 
      onPress={onPress} 
      disabled={isSwitch}
      activeOpacity={0.7}
    >
      <View style={[styles.iconWrapper, { backgroundColor: iconColor + '10' }]}>
         {icon}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        {subLabel && <Text style={styles.subLabel}>{subLabel}</Text>}
      </View>
      {isSwitch ? (
        <Switch 
          value={value} 
          onValueChange={onToggle}
          trackColor={{ false: "#D1D1D1", true: "#F8375830" }}
          thumbColor={value ? "#F83758" : "#F4F3F4"}
        />
      ) : (
        <Ionicons name="chevron-forward" size={moderateScale(20)} color="#C4C4C4" />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={moderateScale(28)} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: horizontalScale(44) }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Profile Card Header */}
        <TouchableOpacity style={styles.profileSummary} onPress={() => router.push('/profile')}>
           <View style={styles.profileImagePlaceholder}>
              <Text style={styles.profileInitial}>A</Text>
           </View>
           <View style={styles.profileTextInfo}>
              <Text style={styles.profileName}>Aashifa</Text>
              <Text style={styles.profileEmail}>aashifa@gmail.com</Text>
           </View>
           <Feather name="edit-3" size={moderateScale(20)} color="#F83758" />
        </TouchableOpacity>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>ACCOUNT</Text>
          <SettingsItem 
            icon={<Ionicons name="person-outline" size={moderateScale(22)} color="#4392F1" />} 
            label="Personal Information" 
            subLabel="Manage your profile and details"
            iconColor="#4392F1"
            onPress={() => router.push('/profile')}
          />
          <SettingsItem 
            icon={<Ionicons name="mail-outline" size={moderateScale(22)} color="#50DB8C" />} 
            label="Email Settings" 
            subLabel="Update your contact email"
            iconColor="#50DB8C"
          />
        </View>

        {/* Shopping Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>SHOPPING</Text>
          <SettingsItem 
            icon={<Ionicons name="receipt-outline" size={moderateScale(22)} color="#F83758" />} 
            label="My Orders" 
            subLabel="Track and view history"
            iconColor="#F83758"
            onPress={() => router.push('/orders')}
          />
          <SettingsItem 
            icon={<Ionicons name="heart-outline" size={moderateScale(22)} color="#FF7E5F" />} 
            label="My Wishlist" 
            subLabel="Items you saved for later"
            iconColor="#FF7E5F"
            onPress={() => router.push('/wishlist')}
          />
          <SettingsItem 
            icon={<Ionicons name="location-outline" size={moderateScale(22)} color="#9B59B6" />} 
            label="Saved Addresses" 
            subLabel="Delivery locations"
            iconColor="#9B59B6"
            onPress={() => router.push('/orders')} // Redirecting to checkout for now
          />
        </View>

        {/* App Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>PREFERENCES</Text>
          <SettingsItem 
            icon={<Ionicons name="notifications-outline" size={moderateScale(22)} color="#F1C40F" />} 
            label="Notifications" 
            isSwitch={true}
            value={isNotificationsEnabled}
            onToggle={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
            iconColor="#F1C40F"
          />
          <SettingsItem 
            icon={<MaterialCommunityIcons name="earth" size={moderateScale(22)} color="#3498DB" />} 
            label="Language" 
            subLabel="English (US)"
            iconColor="#3498DB"
          />
          <SettingsItem 
            icon={<Ionicons name="card-outline" size={moderateScale(22)} color="#2ECC71" />} 
            label="Payment Methods" 
            subLabel="Manage saved cards"
            iconColor="#2ECC71"
          />
        </View>

        {/* Support & Logout */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>SUPPORT</Text>
          <SettingsItem 
            icon={<Feather name="help-circle" size={moderateScale(22)} color="#1ABC9C" />} 
            label="Help Center" 
            iconColor="#1ABC9C"
          />
          <SettingsItem 
            icon={<Feather name="shield" size={moderateScale(22)} color="#34495E" />} 
            label="Privacy Policy" 
            iconColor="#34495E"
          />
          <TouchableOpacity 
            style={styles.logoutBtn}
            onPress={() => router.replace('/auth/login')}
          >
             <Ionicons name="log-out-outline" size={moderateScale(24)} color="#F83758" />
             <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: verticalScale(40) }} />
      </ScrollView>

      {/* Persistent Bottom Navigation */}
      <BottomNavigation />
    </View>
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
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(50),
    backgroundColor: '#FFFFFF',
    paddingBottom: verticalScale(20),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  backButton: {
    width: horizontalScale(44),
    height: horizontalScale(44),
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: moderateScale(20),
    fontWeight: '800',
    color: '#000000',
  },
  scrollContent: {
    paddingVertical: verticalScale(15),
  },
  profileSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
    marginBottom: verticalScale(25),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  profileImagePlaceholder: {
    width: horizontalScale(60),
    height: horizontalScale(60),
    borderRadius: horizontalScale(30),
    backgroundColor: '#FDECEF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: horizontalScale(15),
    borderWidth: 1,
    borderColor: '#F8375830',
  },
  profileInitial: {
    fontSize: moderateScale(24),
    fontWeight: '800',
    color: '#F83758',
  },
  profileTextInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: '#000000',
  },
  profileEmail: {
    fontSize: moderateScale(13),
    color: '#777777',
    marginTop: verticalScale(2),
  },
  section: {
    marginBottom: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
  },
  sectionHeader: {
    fontSize: moderateScale(12),
    fontWeight: '800',
    color: '#BBBBBB',
    letterSpacing: 1.2,
    marginBottom: verticalScale(12),
    marginLeft: horizontalScale(5),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: horizontalScale(15),
    borderRadius: moderateScale(15),
    marginBottom: verticalScale(12),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  iconWrapper: {
    width: horizontalScale(44),
    height: horizontalScale(44),
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: horizontalScale(15),
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: moderateScale(15),
    fontWeight: '600',
    color: '#000000',
  },
  subLabel: {
    fontSize: moderateScale(11),
    color: '#999999',
    marginTop: verticalScale(2),
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDECEF',
    padding: horizontalScale(16),
    borderRadius: moderateScale(15),
    marginTop: verticalScale(10),
    gap: horizontalScale(12),
  },
  logoutText: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: '#F83758',
  },
});
