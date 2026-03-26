import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { horizontalScale, verticalScale, moderateScale } from '../../constants/scaling';

const { width } = Dimensions.get('window');

/**
 * Onboarding Root - Redirects correctly.
 */
export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.paginationLabel}>1/3</Text>
        <TouchableOpacity onPress={() => router.push('/auth/login')}>
          <Text style={styles.skipButton}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.illustrationContainer}>
           <Image 
             source={require('../../assets/images/onboarding1_clean.png')} 
             style={styles.illustration} 
             resizeMode="contain"
           />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Choose Products</Text>
          <Text style={styles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity onPress={() => router.push('/spalash/spalash2')}>
          <Text style={styles.nextButton}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: horizontalScale(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  paginationLabel: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: '#000000',
  },
  skipButton: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: '#000000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationContainer: {
    width: horizontalScale(width * 0.8),
    height: horizontalScale(width * 0.8),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(40),
    backgroundColor: '#FFFFFF',
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '800',
    color: '#000000',
    marginBottom: verticalScale(10),
    textAlign: 'center',
  },
  description: {
    fontSize: moderateScale(14),
    color: '#A0A0A1',
    textAlign: 'center',
    lineHeight: verticalScale(22),
    paddingHorizontal: horizontalScale(10),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(30),
    position: 'relative',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(8),
  },
  dot: {
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(5),
    backgroundColor: '#DEDEDE',
  },
  activeDot: {
    width: horizontalScale(30),
    backgroundColor: '#17223B',
    borderRadius: horizontalScale(5),
  },
  nextButton: {
    position: 'absolute',
    right: 0,
    bottom: verticalScale(25),
    fontSize: moderateScale(18),
    fontWeight: '700',
    color: '#F83758',
  },
});
