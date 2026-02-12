import { Image } from 'expo-image';
import { Platform, Pressable, StyleSheet, View, Text } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  const router = useRouter()

  return (
    <SafeAreaView>
      <View>
        <Pressable onPress={() => {router.push('/foods/orderTracking')}}>
          <View>
            <Text>
              Page order tracking
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {router.push('/foods/cart')}}>
          <View>
            <Text>
              Page cart
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {router.push('/locationSelection')}}>
          <View>
            <Text>
              Page location selection
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
