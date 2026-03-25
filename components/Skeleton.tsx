import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
}

/**
 * A standard Skeleton loader component with subtle pulsing animation.
 * Optimized with StyleSheet.flatten to prevent TypeScript/Runtime style conflicts.
 */
export default function Skeleton({ 
  width = '100%', 
  height = 20, 
  borderRadius = 4, 
  style 
}: SkeletonProps) {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    // Pulse animation from 0.3 to 0.7 opacity
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.7,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  // Pre-process container styles to ensure type safety and performance
  const containerStyle = StyleSheet.flatten([
    { 
      width: width as any, 
      height: height as any, 
      borderRadius, 
      overflow: 'hidden' as const 
    },
    style
  ]);

  return (
    <View style={containerStyle}>
      <Animated.View 
        style={[
          styles.skeleton, 
          { 
            opacity, 
            flex: 1, 
            width: '100%',
            height: '100%'
          }
        ]} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: '#E1E9EE',
  },
});
