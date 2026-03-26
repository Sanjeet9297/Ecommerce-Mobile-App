import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import SubmitButton from '../../components/shared/submitButton';
import { horizontalScale, verticalScale, moderateScale } from '../../constants/scaling';

/**
 * Verify OTP Screen
 * Updated to use the shared SubmitButton component.
 */
export default function VerifyOTP() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    // Only allow numbers
    const cleanText = text.replace(/[^0-9]/g, '');
    const newOtp = [...otp];
    newOtp[index] = cleanText;
    setOtp(newOtp);

    // Auto-focus next input
    if (cleanText && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Handling backspace to go to previous input
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.titleText}>Verify{"\n"}OTP</Text>
        </View>

        <View style={styles.formSection}>
          <Text style={styles.instructionText}>
            Please enter the 4-digit code sent to your email address.
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => { inputRefs.current[index] = ref; }}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                selectionColor="#F83758"
              />
            ))}
          </View>

          {/* Using Shared Component */}
          <SubmitButton 
            title="Verify & Proceed" 
            onPress={() => router.push('/auth/get-started')} 
            style={{ marginTop: verticalScale(10) }}
          />

          <View style={styles.resendContainer}>
             <Text style={styles.resendText}>Didn't receive code? </Text>
             <TouchableOpacity>
               <Text style={styles.resendLink}>Resend</Text>
             </TouchableOpacity>
          </View>
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
  instructionText: {
    fontSize: moderateScale(14),
    color: '#676767',
    lineHeight: verticalScale(22),
    marginBottom: verticalScale(10),
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: horizontalScale(20),
    marginBottom: verticalScale(20),
  },
  otpInput: {
    width: horizontalScale(60),
    height: verticalScale(70),
    backgroundColor: '#F3F3F3',
    borderWidth: 1,
    borderColor: '#A8A8A8',
    borderRadius: moderateScale(12),
    textAlign: 'center',
    fontSize: moderateScale(24),
    fontWeight: '700',
    color: '#000000',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  resendText: {
    fontSize: moderateScale(14),
    color: '#676767',
  },
  resendLink: {
    fontSize: moderateScale(14),
    color: '#F83758',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
