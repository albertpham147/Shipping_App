import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>        
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />

        {/* Login */}
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />

        {/* Profile */}
        <Stack.Screen name="profiles/profile" options={{ headerShown: false }} />

        {/* Restaurants */}
        <Stack.Screen name="foods/restaurantList" options={{ headerShown: false }} />
        <Stack.Screen name="foods/restaurantMenu" options={{ headerShown: false }} />
        <Stack.Screen name="foods/restaurantDetails" options={{ headerShown: false }} />
        <Stack.Screen name="foods/cart" options={{ headerShown: false }} />
        <Stack.Screen name="foods/orderTracking" options={{ headerShown: false }} />
        <Stack.Screen name="foods/orderConfirmation" options={{ headerShown: false }} />
        <Stack.Screen name="foods/dishReviews" options={{ headerShown: false }} />
        <Stack.Screen name="foods/rating" options={{ headerShown: false }} />


        {/* Location Selection */}
        <Stack.Screen name="locationSelection" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
