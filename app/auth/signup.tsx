import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import SubmitButton from '../../components/shared/submitButton';

/**
 * Signup Screen
 * Updated to use the shared SubmitButton component.
 */
export default function SignupScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.createAccountText}>Create an{"\n"}account</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.inputWrapper}>
             <Ionicons name="person-outline" size={20} color="#676767" style={styles.inputIcon} />
            <TextInput 
              placeholder="Username or Email" 
              placeholderTextColor="#676767"
              style={styles.input}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={20} color="#676767" style={styles.inputIcon} />
            <TextInput 
              placeholder="Password" 
              placeholderTextColor="#676767"
              style={styles.input}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#676767" />
            </TouchableOpacity>
          </View>

          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={20} color="#676767" style={styles.inputIcon} />
            <TextInput 
              placeholder="Confirm Password" 
              placeholderTextColor="#676767"
              style={styles.input}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#676767" />
            </TouchableOpacity>
          </View>

          <View style={styles.disclaimerContainer}>
            <Text style={styles.disclaimerText}>
              By clicking the <Text style={styles.highlightText}>Register</Text> button, you agree to the public offer
            </Text>
          </View>

          {/* Using Shared Component */}
          <SubmitButton 
            title="Create Account" 
            onPress={() => router.replace('/')} 
            style={{ marginTop: 20 }}
          />
        </View>

        {/* Social Login */}
        <View style={styles.socialSection}>
          <Text style={styles.socialTitle}>- OR Continue with -</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialCircle}>
              <FontAwesome name="google" size={24} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialCircle}>
              <FontAwesome name="apple" size={24} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialCircle}>
              <FontAwesome name="facebook" size={24} color="#4267B2" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>I Already Have an Account </Text>
          <TouchableOpacity onPress={() => router.push('/auth/login')}>
            <Text style={styles.loginText}>Login</Text>
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
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 20,
  },
  header: {
    marginBottom: 35,
  },
  createAccountText: {
    fontSize: 36,
    fontWeight: '800',
    color: '#000000',
    lineHeight: 45,
  },
  form: {
    gap: 20,
    marginBottom: 40,
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
  disclaimerContainer: {
    marginVertical: 5,
  },
  disclaimerText: {
    color: '#676767',
    fontSize: 12,
    lineHeight: 18,
  },
  highlightText: {
    color: '#F83758',
    fontWeight: '700',
  },
  socialSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  socialTitle: {
    fontSize: 12,
    color: '#575757',
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    gap: 15,
  },
  socialCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#F83758',
    backgroundColor: '#FCF3F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: 14,
    color: '#575757',
  },
  loginText: {
    fontSize: 14,
    color: '#F83758',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
