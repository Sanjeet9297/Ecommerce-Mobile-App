import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import SubmitButton from '../../components/shared/submitButton';
import { horizontalScale, verticalScale, moderateScale } from '../../constants/scaling';

/**
 * Forgot Password Screen
 * Updated to use the shared SubmitButton component.
 */
export default function ForgotPassword() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.titleText}>Forgot{"\n"}password?</Text>
        </View>

        {/* Input Form */}
        <View style={styles.formSection}>
          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={moderateScale(22)} color="#676767" style={styles.inputIcon} />
            <TextInput 
              placeholder="Enter your email address" 
              placeholderTextColor="#676767"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.disclaimerSection}>
            <Text style={styles.disclaimerText}>
              <Text style={styles.asterisk}>*</Text> We will send you a message to set or reset your new password
            </Text>
          </View>

          {/* Using Shared Component */}
          <SubmitButton 
            title="Submit" 
            onPress={() => router.push('/auth/verify-otp')} 
            style={{ marginTop: verticalScale(10) }}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: horizontalScale(25),
    paddingTop: verticalScale(60),
  },
  header: {
    marginBottom: verticalScale(40),
  },
  titleText: {
    fontSize: moderateScale(36),
    fontWeight: '800',
    color: '#000000',
    lineHeight: verticalScale(45),
  },
  formSection: {
    gap: verticalScale(25),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderWidth: 1,
    borderColor: '#A8A8A8',
    borderRadius: moderateScale(10),
    height: verticalScale(55),
    paddingHorizontal: horizontalScale(15),
  },
  inputIcon: {
    marginRight: horizontalScale(10),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(14),
    color: '#000000',
    fontWeight: '500',
  },
  disclaimerSection: {
    paddingRight: horizontalScale(40),
  },
  disclaimerText: {
    fontSize: moderateScale(12),
    color: '#676767',
    lineHeight: verticalScale(18),
  },
  asterisk: {
    color: '#F83758',
    fontWeight: '700',
  },
});
