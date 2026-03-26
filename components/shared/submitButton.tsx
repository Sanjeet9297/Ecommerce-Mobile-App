import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../constants/scaling';

interface SubmitButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

/**
 * Shared Submit Button component
 * Standardized across the entire Auth flow.
 */
const SubmitButton: React.FC<SubmitButtonProps> = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F83758',
    height: verticalScale(55),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: moderateScale(18),
    fontWeight: '700',
  },
});

export default SubmitButton;
