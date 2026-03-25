import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import SubmitButton from '../../components/shared/submitButton';

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
            style={{ height: 60 }} 
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
    width: width,
    height: height,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 60,
    paddingHorizontal: 25,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  titleText: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 45,
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 14,
    color: '#F2F2F2',
    textAlign: 'center',
    fontWeight: '500',
  },
});
