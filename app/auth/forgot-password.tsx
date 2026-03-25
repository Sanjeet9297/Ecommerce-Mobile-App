import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import SubmitButton from '../../components/shared/submitButton';

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
            <Ionicons name="mail-outline" size={22} color="#676767" style={styles.inputIcon} />
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
            style={{ marginTop: 10 }}
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
    paddingHorizontal: 25,
    paddingTop: 60,
  },
  header: {
    marginBottom: 40,
  },
  titleText: {
    fontSize: 36,
    fontWeight: '800',
    color: '#000000',
    lineHeight: 45,
  },
  formSection: {
    gap: 25,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderWidth: 1,
    borderColor: '#A8A8A8',
    borderRadius: 10,
    height: 55,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
  disclaimerSection: {
    paddingRight: 40,
  },
  disclaimerText: {
    fontSize: 12,
    color: '#676767',
    lineHeight: 18,
  },
  asterisk: {
    color: '#F83758',
    fontWeight: '700',
  },
});
