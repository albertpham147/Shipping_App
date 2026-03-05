import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors, Spacing, BorderRadius, ButtonHeights } from '@/constants/theme';

export default function CustomerRegisterScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <SafeAreaView style={styles.page}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.topBrand}>
            <View style={styles.logoCircle}>
              <MaterialCommunityIcons name="motorbike" size={62} color={Colors.primary} />
            </View>
            <Text style={styles.title}>Đăng ký</Text>
            <Text style={styles.subtitle}>Tạo tài khoản mới để bắt đầu sử dụng dịch vụ</Text>
          </View>

          <View style={styles.form}>
            <Field label="Họ và tên" icon="account-outline">
              <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
                placeholder="Nhập họ và tên"
                placeholderTextColor="#A1A1AA"
              />
            </Field>

            <Field label="Số điện thoại" icon="phone-outline">
              <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="Nhập số điện thoại"
                placeholderTextColor="#A1A1AA"
                keyboardType="phone-pad"
              />
            </Field>

            <Field label="Mật khẩu" icon="lock-outline">
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Nhập mật khẩu"
                placeholderTextColor="#A1A1AA"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity style={styles.eyeBtn} onPress={() => setShowPassword((v) => !v)}>
                <MaterialCommunityIcons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color={Colors.gray[400]}
                />
              </TouchableOpacity>
            </Field>

            <TouchableOpacity style={styles.termsRow} onPress={() => setAgree((v) => !v)}>
              <View style={[styles.checkbox, agree && styles.checkboxOn]}>
                {agree ? <MaterialCommunityIcons name="check" size={14} color={Colors.white} /> : null}
              </View>
              <Text style={styles.termsText}>
                Tôi đồng ý với <Text style={styles.link}>Điều khoản sử dụng</Text> và{' '}
                <Text style={styles.link}>Chính sách bảo mật</Text>.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerBtn} onPress={() => router.replace('/(tabs)')}>
              <Text style={styles.registerText}>Đăng ký</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Bạn đã có tài khoản?</Text>
            <TouchableOpacity onPress={() => router.replace('/main/customerLogin')}>
              <Text style={styles.footerLink}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrap}>
        <MaterialCommunityIcons name={icon} size={20} color={Colors.gray[400]} style={styles.leftIcon} />
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: Colors.white },
  flex: { flex: 1 },
  content: { flexGrow: 1 },
  topBrand: {
    alignItems: 'center',
    paddingTop: 64,
    paddingBottom: 30,
    paddingHorizontal: Spacing.xxl,
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
  title: { fontSize: 35, fontWeight: '700', color: Colors.black, letterSpacing: -0.2 },
  subtitle: { marginTop: Spacing.sm, fontSize: 14, color: '#71717A', textAlign: 'center' },
  form: { paddingHorizontal: Spacing.xxl, gap: 14 },
  field: { gap: 6 },
  label: { fontSize: 14, fontWeight: '600', color: Colors.black, marginLeft: 4 },
  inputWrap: {
    height: ButtonHeights.xl,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: '#E4E4E7',
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  leftIcon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16, color: Colors.black },
  eyeBtn: { padding: 4 },
  termsRow: { flexDirection: 'row', gap: 10, alignItems: 'flex-start', marginTop: 2 },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D4D4D8',
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  checkboxOn: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  termsText: { flex: 1, fontSize: 13, lineHeight: 19, color: '#52525B' },
  link: { color: Colors.primary, fontWeight: '500' },
  registerBtn: {
    marginTop: Spacing.sm,
    height: ButtonHeights.xl,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primary,
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 7,
  },
  registerText: { fontSize: 20, fontWeight: '700', color: Colors.white },
  footer: {
    marginTop: 26,
    marginBottom: Spacing.xxl,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  footerText: { fontSize: 14, color: '#71717A' },
  footerLink: { fontSize: 14, fontWeight: '700', color: Colors.primary },
});
