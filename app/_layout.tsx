import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from '@/store';
import "@/constants/theme"; 
import "@/hooks/use-color-scheme"; 

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" options={{ animation: 'none' }} />
          <Stack.Screen name="wishlist" options={{ animation: 'none' }} />
          <Stack.Screen name="cart" options={{ animation: 'none' }} />
          <Stack.Screen name="orders" options={{ animation: 'none' }} />
          <Stack.Screen name="settings" options={{ animation: 'none' }} />
        </Stack>
        <StatusBar style="dark" />
      </SafeAreaProvider>
    </Provider>
  );
}
