import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

const { width } = Dimensions.get('window');

/**
 * Custom Bottom Navigation Component
 * Updated: Replaced Search with Orders (4th Position).
 */
const BottomNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', icon: 'home-outline', activeIcon: 'home', route: '/home' },
    { name: 'Wishlist', icon: 'heart-outline', activeIcon: 'heart', route: '/wishlist' },
    { name: 'Cart', icon: 'cart-outline', activeIcon: 'cart', isCenter: true, route: '/cart' },
    { name: 'Orders', icon: 'receipt-outline', activeIcon: 'receipt', route: '/orders' }, // Changed from Search to Orders
    { name: 'Setting', icon: 'settings-outline', activeIcon: 'settings', route: '/settings' },
  ];

  return (
    <View style={styles.container}>
      {navItems.map((item, index) => {
        const isActive = pathname === item.route;
        const color = isActive ? '#F83758' : '#000000';

        if (item.isCenter) {
          return (
            <View key={index} style={styles.centerButtonWrapper}>
              <TouchableOpacity 
                style={[styles.centerButton, isActive && styles.centerButtonActive]}
                onPress={() => router.push(item.route as any)}
                activeOpacity={0.9}
              >
                 <Ionicons 
                   name={(isActive ? item.activeIcon : item.icon) as any} 
                   size={30} 
                   color={isActive ? '#FFFFFF' : '#000000'} 
                 />
              </TouchableOpacity>
            </View>
          );
        }

        return (
          <TouchableOpacity 
            key={index} 
            style={styles.navItem}
            onPress={() => router.push(item.route as any)}
          >
            <Ionicons name={(isActive ? item.activeIcon : item.icon) as any} size={24} color={color} />
            <Text style={[styles.navText, { color }]}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 5,
    position: 'absolute',
    bottom: 0,
    width: width,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 10,
    marginTop: 4,
    fontWeight: '500',
  },
  centerButtonWrapper: {
    marginTop: -45, 
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  centerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  centerButtonActive: {
    backgroundColor: '#F83758',
    borderColor: '#F83758',
  },
});

export default BottomNavigation;
