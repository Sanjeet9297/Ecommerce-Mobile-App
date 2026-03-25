import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

/**
 * Onboarding Step 2: Make Payment
 */
export default function OnboardingSecond() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.paginationLabel}>2/3</Text>
        <TouchableOpacity onPress={() => router.push('/auth/login')}>
          <Text style={styles.skipButton}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.illustrationContainer}>
           <Image 
             source={require('../../assets/images/onboarding2_clean.png')} 
             style={styles.illustration} 
             resizeMode="contain"
           />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Make Payment</Text>
          <Text style={styles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.prevButtonContainer}>
          <Text style={styles.prevButton}>Prev</Text>
        </TouchableOpacity>

        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity onPress={() => router.push('/spalash/spalash3')}>
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
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  paginationLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  skipButton: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationContainer: {
    width: width * 0.8,
    height: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
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
    fontSize: 24,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#A0A0A1',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    position: 'relative',
  },
  prevButtonContainer: {
    position: 'absolute',
    left: 0,
    bottom: 25,
  },
  prevButton: {
    fontSize: 18,
    fontWeight: '700',
    color: '#C4C4C4',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#DEDEDE',
  },
  activeDot: {
    width: 30,
    backgroundColor: '#17223B',
    borderRadius: 5,
  },
  nextButton: {
    position: 'absolute',
    right: 0,
    bottom: 25,
    fontSize: 18,
    fontWeight: '700',
    color: '#F83758',
  },
});
