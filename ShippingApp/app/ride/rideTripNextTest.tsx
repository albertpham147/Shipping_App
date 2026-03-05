import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, BorderRadius, ButtonHeights } from '@/constants/theme';

export default function RideTripNextTestScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.wrap}>
        <Text style={styles.title}>Màn sau (test)</Text>
        <Text style={styles.sub}>Placeholder để test điều hướng trong luồng chuyến đi.</Text>
        <TouchableOpacity style={styles.btn} onPress={() => router.push('/ride/rideOnTrip')}>
          <Text style={styles.btnText}>Quay lại màn Đang trong chuyến</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: Colors.gray[50] },
  wrap: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 },
  title: { fontSize: 24, fontWeight: '700', color: Colors.black },
  sub: { marginTop: 8, fontSize: 14, color: Colors.gray[500], textAlign: 'center' },
  btn: { marginTop: 18, height: ButtonHeights.md, borderRadius: BorderRadius.lg, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18 },
  btnText: { color: Colors.white, fontSize: 14, fontWeight: '700' },
});
