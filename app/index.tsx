import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../constants/scaling';

/**
 * Splash Screen (Entry point)
 * Features a pure white background and the "Stylish" logo with interlocking shapes.
 * Automatically navigates to the onboarding sequence.
 */
export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to onboarding after 2 seconds
    const timer = setTimeout(() => {
      router.replace('/spalash/spalash1');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#FFFFFF" />
      <View style={styles.logoContainer}>
        <View style={styles.logoShapes}>
          {/* Interlocking circles representation - opacity set to 1 for maximum clarity */}
          <View style={[styles.circle, styles.circleRed]} />
          <View style={[styles.circle, styles.circleBlue]} />
        </View>
        <Text style={styles.logoText}>Stylish</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Pure White
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoShapes: {
    width: horizontalScale(70),
    height: verticalScale(50),
    justifyContent: 'center',
    marginRight: horizontalScale(10),
  },
  circle: {
    width: horizontalScale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(20),
    position: 'absolute',
    opacity: 1, // Full opacity to avoid looking "gray"
  },
  circleRed: {
    backgroundColor: '#F83758',
    left: 0,
  },
  circleBlue: {
    backgroundColor: '#4392F1',
    right: 0,
    opacity: 0.9, // Slight overlap effect
  },
  logoText: {
    fontSize: moderateScale(50),
    fontWeight: '700',
    color: '#F83758',
  },
});
