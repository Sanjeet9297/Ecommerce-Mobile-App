import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Dimensions } from 'react-native';
import { Ionicons, Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BottomNavigation from '../shared/bottomNavigation';

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
        <Ionicons name="chevron-forward" size={20} color="#C4C4C4" />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 44 }} />
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
           <Feather name="edit-3" size={20} color="#F83758" />
        </TouchableOpacity>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>ACCOUNT</Text>
          <SettingsItem 
            icon={<Ionicons name="person-outline" size={22} color="#4392F1" />} 
            label="Personal Information" 
            subLabel="Manage your profile and details"
            iconColor="#4392F1"
            onPress={() => router.push('/profile')}
          />
          <SettingsItem 
            icon={<Ionicons name="mail-outline" size={22} color="#50DB8C" />} 
            label="Email Settings" 
            subLabel="Update your contact email"
            iconColor="#50DB8C"
          />
        </View>

        {/* Shopping Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>SHOPPING</Text>
          <SettingsItem 
            icon={<Ionicons name="receipt-outline" size={22} color="#F83758" />} 
            label="My Orders" 
            subLabel="Track and view history"
            iconColor="#F83758"
            onPress={() => router.push('/orders')}
          />
          <SettingsItem 
            icon={<Ionicons name="heart-outline" size={22} color="#FF7E5F" />} 
            label="My Wishlist" 
            subLabel="Items you saved for later"
            iconColor="#FF7E5F"
            onPress={() => router.push('/wishlist')}
          />
          <SettingsItem 
            icon={<Ionicons name="location-outline" size={22} color="#9B59B6" />} 
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
            icon={<Ionicons name="notifications-outline" size={22} color="#F1C40F" />} 
            label="Notifications" 
            isSwitch={true}
            value={isNotificationsEnabled}
            onToggle={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
            iconColor="#F1C40F"
          />
          <SettingsItem 
            icon={<MaterialCommunityIcons name="earth" size={22} color="#3498DB" />} 
            label="Language" 
            subLabel="English (US)"
            iconColor="#3498DB"
          />
          <SettingsItem 
            icon={<Ionicons name="card-outline" size={22} color="#2ECC71" />} 
            label="Payment Methods" 
            subLabel="Manage saved cards"
            iconColor="#2ECC71"
          />
        </View>

        {/* Support & Logout */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>SUPPORT</Text>
          <SettingsItem 
            icon={<Feather name="help-circle" size={22} color="#1ABC9C" />} 
            label="Help Center" 
            iconColor="#1ABC9C"
          />
          <SettingsItem 
            icon={<Feather name="shield" size={22} color="#34495E" />} 
            label="Privacy Policy" 
            iconColor="#34495E"
          />
          <TouchableOpacity 
            style={styles.logoutBtn}
            onPress={() => router.replace('/auth/login')}
          >
             <Ionicons name="log-out-outline" size={24} color="#F83758" />
             <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
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
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
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
    paddingVertical: 15,
  },
  profileSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  profileImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FDECEF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#F8375830',
  },
  profileInitial: {
    fontSize: 24,
    fontWeight: '800',
    color: '#F83758',
  },
  profileTextInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  profileEmail: {
    fontSize: 13,
    color: '#777777',
    marginTop: 2,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '800',
    color: '#BBBBBB',
    letterSpacing: 1.2,
    marginBottom: 12,
    marginLeft: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
  },
  subLabel: {
    fontSize: 11,
    color: '#999999',
    marginTop: 2,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDECEF',
    padding: 16,
    borderRadius: 15,
    marginTop: 10,
    gap: 12,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F83758',
  },
});
