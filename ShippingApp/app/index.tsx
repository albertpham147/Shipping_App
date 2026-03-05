import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function SplashScreen() {
  const router = useRouter();
  const loadingAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loadingLoop = Animated.loop(
      Animated.timing(loadingAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
      })
    );

    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    loadingLoop.start();
    pulseLoop.start();

    const timeout = setTimeout(() => {
      router.replace('/main/customerLogin');
    }, __DEV__ ? 500 : 2200);

    return () => {
      clearTimeout(timeout);
      loadingLoop.stop();
      pulseLoop.stop();
    };
  }, [loadingAnim, pulseAnim, router]);

  const loadingWidth = loadingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['25%', '90%'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.patternOverlay} />

      <View style={styles.mainContent}>
        <View style={styles.logoFrame}>
          <Animated.View style={[styles.logoPulseRing, { transform: [{ scale: pulseAnim }] }]} />
          <View style={styles.logoCircle}>
            <MaterialCommunityIcons name="motorbike" size={62} color="#F2590D" style={styles.logoIconFix} />
          </View>
        </View>

        <Text style={styles.appName}>App Shipping</Text>
        <Text style={styles.tagline}>Fast. Reliable. Everywhere.</Text>
      </View>

      <View style={styles.bottomArea}>
        <View style={styles.loadingTrack}>
          <Animated.View style={[styles.loadingFill, { width: loadingWidth }]} />
        </View>
        <Text style={styles.loadingText}>Loading Resources...</Text>
        <Text style={styles.version}>v1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2590D',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  patternOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.12,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoFrame: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  logoPulseRing: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.28)',
  },
  logoCircle: {
    width: 132,
    height: 132,
    borderRadius: 66,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },
  logoIconFix: {
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  appName: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  tagline: {
    marginTop: 8,
    color: 'rgba(255,255,255,0.92)',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.4,
  },
  bottomArea: {
    alignItems: 'center',
    gap: 10,
  },
  loadingTrack: {
    width: 220,
    height: 7,
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderRadius: 99,
    overflow: 'hidden',
  },
  loadingFill: {
    height: '100%',
    borderRadius: 99,
    backgroundColor: '#FFFFFF',
  },
  loadingText: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.86)',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: '600',
  },
  version: {
    marginTop: 8,
    color: 'rgba(255,255,255,0.65)',
    fontSize: 10,
    letterSpacing: 2,
  },
});
