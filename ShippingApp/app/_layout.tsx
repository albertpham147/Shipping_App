import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Splash Screen - Initial Route */}
        <Stack.Screen name="index" options={{ headerShown: false }} />

        {/* Tabs Navigation */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Main Screens */}
        <Stack.Screen name="main/customerLogin" options={{ headerShown: false }} />
        <Stack.Screen name="main/customerRegister" options={{ headerShown: false }} />
        <Stack.Screen name="main/notifications" options={{ headerShown: false }} />

        {/* Profile */}
        <Stack.Screen name="profiles/customerProfile" options={{ headerShown: false }} />

        {/* Ride Screens */}
        <Stack.Screen name="ride/rideSearch" options={{ headerShown: false }} />
        <Stack.Screen name="ride/rideDestination" options={{ headerShown: false }} />
        <Stack.Screen name="ride/rideSearching" options={{ headerShown: false }} />
        <Stack.Screen name="ride/rideFound" options={{ headerShown: false }} />
        <Stack.Screen name="ride/rideVehicle" options={{ headerShown: false }} />
        <Stack.Screen name="ride/rideOnTrip" options={{ headerShown: false }} />
        <Stack.Screen name="ride/rideReceipt" options={{ headerShown: false }} />
        <Stack.Screen name="ride/rideTripNextTest" options={{ headerShown: false }} />

        {/* Food Screens */}
        <Stack.Screen name="foods/restaurantList" options={{ headerShown: false }} />
        <Stack.Screen name="foods/foodMenuList" options={{ headerShown: false }} />
        <Stack.Screen name="foods/restaurantMenu" options={{ headerShown: false }} />
        <Stack.Screen name="foods/restaurantDetails" options={{ headerShown: false }} />
        <Stack.Screen name="foods/cart" options={{ headerShown: false }} />
        <Stack.Screen name="foods/orderConfirmation" options={{ headerShown: false }} />
        <Stack.Screen name="foods/orderTracking" options={{ headerShown: false }} />
        <Stack.Screen name="foods/dishReviews" options={{ headerShown: false }} />
        <Stack.Screen name="foods/rating" options={{ headerShown: false }} />

        {/* Deliverys Screens */}
        <Stack.Screen name="deliverys/pickupLocation" options={{ headerShown: false }} />
        <Stack.Screen name="deliverys/deliveryLocation" options={{ headerShown: false }} />
        <Stack.Screen name="deliverys/orderDetails" options={{ headerShown: false }} />
        <Stack.Screen name="deliverys/findingDriver" options={{ headerShown: false }} />
        <Stack.Screen name="deliverys/driverEnRoute" options={{ headerShown: false }} />
        <Stack.Screen name="deliverys/orderConfirmation" options={{ headerShown: false }} />
        <Stack.Screen name="deliverys/deliverySuccess" options={{ headerShown: false }} />

      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
