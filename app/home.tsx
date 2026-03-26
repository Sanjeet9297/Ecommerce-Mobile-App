import React from 'react';
import { View, StyleSheet } from 'react-native';
import Homepage from '../components/homepage/page';

/**
 * Main Home Route
 * Renders the high-fidelity Homepage with the custom Bottom Navigation.
 */
export default function HomeRoute() {
  return (
    <View style={styles.container}>
      <Homepage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
