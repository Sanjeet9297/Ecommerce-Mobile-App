import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import SubmitButton from '../../components/shared/submitButton';
import { horizontalScale, verticalScale, moderateScale } from '../../constants/scaling';

const { height, width } = Dimensions.get('window');

/**
 * Get Started Screen
 * Navigates to the functional Homepage.
 */
export default function GetStarted() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground 
        source={require('../../assets/images/getstartedbg.png')} 
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>
              You want{"\n"}Authentic, here{"\n"}you go!
            </Text>
            <Text style={styles.subtitleText}>Find it here, buy it now!</Text>
          </View>

          {/* Navigates to the Home route */}
          <SubmitButton 
            title="Get Started" 
            onPress={() => router.replace('/home')} 
            style={{ height: verticalScale(60) }} 
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: verticalScale(60),
    paddingHorizontal: horizontalScale(25),
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(40),
  },
  titleText: {
    fontSize: moderateScale(34),
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: verticalScale(45),
    marginBottom: verticalScale(10),
  },
  subtitleText: {
    fontSize: moderateScale(14),
    color: '#F2F2F2',
    textAlign: 'center',
    fontWeight: '500',
  },
});
