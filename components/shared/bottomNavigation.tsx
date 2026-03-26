import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { horizontalScale, moderateScale, verticalScale } from '../../constants/scaling';

const { width } = Dimensions.get('window');

/**
 * Custom Bottom Navigation Component
 * Updated: Replaced Search with Orders (4th Position).
 */
const BottomNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const navItems = [
    { name: 'Home', icon: 'home-outline', activeIcon: 'home', route: '/home' },
    { name: 'Wishlist', icon: 'heart-outline', activeIcon: 'heart', route: '/wishlist' },
    { name: 'Cart', icon: 'cart-outline', activeIcon: 'cart', isCenter: true, route: '/cart' },
    { name: 'Orders', icon: 'receipt-outline', activeIcon: 'receipt', route: '/orders' }, // Changed from Search to Orders
    { name: 'Setting', icon: 'settings-outline', activeIcon: 'settings', route: '/settings' },
  ];

  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, verticalScale(10)) }]}>
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
                  size={moderateScale(30)}
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
            <Ionicons name={(isActive ? item.activeIcon : item.icon) as any} size={moderateScale(24)} color={color} />
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
    height: verticalScale(70),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: verticalScale(10),
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
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
    fontSize: moderateScale(10),
    marginTop: verticalScale(4),
    fontWeight: '500',
  },
  centerButtonWrapper: {
    marginTop: verticalScale(-40),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  centerButton: {
    width: horizontalScale(60),
    height: horizontalScale(60), // Keep it circular
    borderRadius: horizontalScale(30),
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
