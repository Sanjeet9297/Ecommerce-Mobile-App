import { useColorScheme as _useColorScheme } from 'react-native';

/**
 * Returns the current color scheme of the device (light/dark).
 * A simple wrapper for consistency.
 */
export function useColorScheme() {
  return _useColorScheme() ?? 'light';
}
