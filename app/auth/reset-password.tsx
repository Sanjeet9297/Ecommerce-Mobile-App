import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { horizontalScale, verticalScale, moderateScale } from '../../constants/scaling';

/**
 * Reset Password Screen
 * Features brand-consistent design and password visibility toggles.
 */
export default function ResetPassword() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.titleText}>Reset{"\n"}Password</Text>
        </View>

        {/* Input Form Section */}
        <View style={styles.formSection}>
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={moderateScale(22)} color="#676767" style={styles.inputIcon} />
            <TextInput 
              placeholder="New Password" 
              placeholderTextColor="#676767"
              style={styles.input}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={moderateScale(22)} color="#676767" />
            </TouchableOpacity>
          </View>

          <View style={styles.inputWrapper}>
             <Ionicons name="lock-closed-outline" size={moderateScale(22)} color="#676767" style={styles.inputIcon} />
            <TextInput 
              placeholder="Confirm Password" 
              placeholderTextColor="#676767"
              style={styles.input}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} size={moderateScale(22)} color="#676767" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.confirmButton}
            onPress={() => router.replace('/auth/login')} // Return to login
          >
            <Text style={styles.confirmButtonText}>Confirm Changes</Text>
          </TouchableOpacity>
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
  confirmButton: {
    backgroundColor: '#F83758',
    height: verticalScale(55),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: moderateScale(18),
    fontWeight: '700',
  },
});
