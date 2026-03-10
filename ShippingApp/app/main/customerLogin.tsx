import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors, Spacing, BorderRadius, ButtonHeights } from '@/constants/theme';

export default function CustomerLoginScreen() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState('');

  return (
    <SafeAreaView style={styles.page}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Đăng nhập</Text>
          </View>

          <View style={styles.brandArea}>
            <View style={styles.logoCircle}>
              <MaterialCommunityIcons name="motorbike" size={62} color={Colors.primary} />
            </View>
            <Text style={styles.appName}>App Shipping</Text>
            <Text style={styles.welcome}>Chào mừng trở lại!</Text>
            <Text style={styles.subtitle}>Đăng nhập để đặt món và gọi xe ngay</Text>
          </View>

          <View style={styles.formArea}>
            <Text style={styles.label}>Số điện thoại hoặc Email</Text>
            <TextInput
              style={styles.input}
              value={identifier}
              onChangeText={setIdentifier}
              placeholder="Nhập số điện thoại hoặc email"
              placeholderTextColor="#8A6E60"
            />
            <TouchableOpacity style={styles.forgotWrap}>
              <Text style={styles.forgot}>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.continueButton} onPress={() => router.replace('/(tabs)')}>
            <Text style={styles.continueButtonText}>Tiếp tục</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Hoặc đăng nhập bằng</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialArea}>
            <TouchableOpacity style={styles.googleButton}>
              <FontAwesome name="google" size={20} color="#EA4335" />
              <Text style={styles.googleButtonText}>Tiếp tục với Google</Text>
            </TouchableOpacity>

            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.facebookButton}>
                <FontAwesome name="facebook-square" size={20} color="#FFFFFF" />
                <Text style={styles.socialWhiteText}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.appleButton}>
                <FontAwesome name="apple" size={20} color="#FFFFFF" />
                <Text style={styles.socialWhiteText}>Apple</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Bạn chưa có tài khoản?</Text>
            <TouchableOpacity onPress={() => router.push('/main/customerRegister')}>
              <Text style={styles.footerLink}>Đăng ký ngay</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.background.page,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: Spacing.xl,
  },
  header: {
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.black,
  },
  brandArea: {
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
  },
  logoCircle: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    marginBottom: 18,
  },
  appName: {
    fontSize: 34,
    fontWeight: '800',
    textTransform: 'uppercase',
    color: Colors.primary,
    letterSpacing: 0.3,
  },
  welcome: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: '700',
    color: Colors.black,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#8A6E60',
  },
  formArea: {
    marginTop: 22,
    paddingHorizontal: Spacing.lg,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
    marginBottom: Spacing.sm,
  },
  input: {
    height: ButtonHeights.xl,
    borderWidth: 1,
    borderColor: '#E6DFDB',
    borderRadius: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    fontSize: 16,
    color: Colors.black,
  },
  forgotWrap: {
    alignItems: 'flex-end',
    marginTop: Spacing.sm,
  },
  forgot: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.primary,
  },
  continueButton: {
    marginTop: Spacing.lg,
    marginHorizontal: Spacing.lg,
    height: ButtonHeights.xl,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.white,
  },
  divider: {
    marginTop: Spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E6DFDB',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 13,
    fontWeight: '500',
    color: '#8A6E60',
  },
  socialArea: {
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    gap: 10,
  },
  googleButton: {
    height: ButtonHeights.xl,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.gray[200],
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  googleButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.gray[700],
  },
  socialRow: {
    flexDirection: 'row',
    gap: 10,
  },
  facebookButton: {
    flex: 1,
    height: ButtonHeights.xl,
    borderRadius: BorderRadius.md,
    backgroundColor: '#1877F2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
  },
  appleButton: {
    flex: 1,
    height: ButtonHeights.xl,
    borderRadius: BorderRadius.md,
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
  },
  socialWhiteText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.white,
  },
  footer: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  footerText: {
    fontSize: 14,
    color: '#8A6E60',
  },
  footerLink: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primary,
  },
  driverLinkButton: {
    marginTop: Spacing.md,
    marginHorizontal: Spacing.lg,
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.orange[200],
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
    backgroundColor: '#FFF8F3',
  },
  driverLinkText: {
    fontSize: 14,
    color: Colors.primaryDark,
    fontWeight: '600',
  },
});
