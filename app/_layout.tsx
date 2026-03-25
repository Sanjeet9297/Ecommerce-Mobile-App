import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from '@/store';
import "@/constants/theme"; 
import "@/hooks/use-color-scheme"; 

/**
 * Root Layout for the application.
 * Globally hides the headers to prevent "Splash screen" or other route names 
 * from appearing at the top of the onboarding screens.
 */
export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* We let the Stack handle all routes dynamically with headers hidden */}
      </Stack>
      <StatusBar style="dark" />
    </Provider>
  );
}
