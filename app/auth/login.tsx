import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import SubmitButton from '../../components/shared/submitButton';

/**
 * Login Screen
 * Updated navigation: Login button now leads to the Get Started screen temporarily.
 */
export default function LoginScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome{"\n"}Back!</Text>
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

          <TouchableOpacity 
            style={styles.forgotPasswordContainer}
            onPress={() => router.push('/auth/forgot-password')}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Temporarily navigating to Get Started as requested */}
          <SubmitButton 
            title="Login" 
            onPress={() => router.push('/auth/get-started')} 
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
          <Text style={styles.footerText}>Create An Account </Text>
          <TouchableOpacity onPress={() => router.push('/auth/signup')}>
            <Text style={styles.signUpText}>Sign Up</Text>
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
    marginBottom: 40,
  },
  welcomeText: {
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
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: '#F83758',
    fontSize: 12,
    fontWeight: '500',
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
  signUpText: {
    fontSize: 14,
    color: '#F83758',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
