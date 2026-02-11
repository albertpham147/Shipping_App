import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import GoogleImage from '@/assets/icons/google.png';
import FaceBookImage from '@/assets/icons/facebook.png';
import AppleImage from '@/assets/icons/apple.png';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';

const LoginScreen = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <Text style={styles.header}>Đăng nhập</Text>

          {/* Logo and Brand */}
          <View style={styles.brandContainer}>
            <View style={styles.logoCircle}>
              <Fontisto name="motorcycle" size={60} style={styles.logoIcon}/>
            </View>
            <Text style={styles.brandName}>APP SHIPPING</Text>
            <Text style={styles.welcomeText}>Chào mừng trở lại!</Text>
            <Text style={styles.subtitleText}>
              Đăng nhập để đặt món và gọi xe ngay
            </Text>
          </View>

          {/* Input Section */}
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Số điện thoại hoặc Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập số điện thoại hoặc email"
              placeholderTextColor="#9CA3AF"
              value={emailOrPhone}
              onChangeText={setEmailOrPhone}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>

          {/* Continue Button */}
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Tiếp tục</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Hoặc đăng nhập bằng</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Login Buttons */}
          <View style={styles.socialButtonsContainer}>
            {/* Google Button */}
            <TouchableOpacity style={styles.googleButton}>
              <Image style={styles.googleIcon} source={GoogleImage}/>
              <Text style={styles.googleButtonText}>Tiếp tục với Google</Text>
            </TouchableOpacity>

            {/* Facebook and Apple Buttons */}
            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.facebookButton}>
                <Image style={styles.facebookIcon} source={FaceBookImage}/>
                <Text style={styles.facebookButtonText}>Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.appleButton}>
                {/* <Image style={styles.appleIcon} source={AppleImage}/> */}
                <AntDesign name="apple" size={24} color="white" />
                <Text style={styles.appleButtonText}>Apple</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Bạn chưa có tài khoản? </Text>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Đăng ký ngay</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  
  // Header
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 40,
  },
  
  // Brand Section
  brandContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoCircle: {
    width: 120,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  logoIcon: {
    color: '#FF6B35'
  },
  brandName: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FF6B35',
    marginBottom: 12,
    letterSpacing: 1,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 15,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  
  // Input Section
  inputSection: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  input: {
    height: 56,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 12,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    fontSize: 15,
    color: '#FF6B35',
    fontWeight: '600',
  },
  
  // Continue Button
  continueButton: {
    height: 56,
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  
  // Divider
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    fontSize: 14,
    color: '#9CA3AF',
    marginHorizontal: 16,
  },
  
  // Social Buttons
  socialButtonsContainer: {
    marginBottom: 32,
  },
  googleButton: {
    height: 56,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  googleIcon: {
    marginRight: 8,
    height: 24,
    width: 24,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  socialRow: {
    flexDirection: 'row',
    gap: 12,
  },
  facebookButton: {
    flex: 1,
    height: 56,
    backgroundColor: '#1877F2',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookIcon: {
    marginRight: 8,
    height: 24,
    width: 24,
  },
  facebookButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  appleButton: {
    flex: 1,
    height: 56,
    backgroundColor: '#000000',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appleIcon: {
    marginRight: 8,
    height: 24,
    width: 24,
    color: 'white'
  },
  appleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  
  // Sign Up
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
  },
  signupText: {
    fontSize: 15,
    color: '#6B7280',
  },
  signupLink: {
    fontSize: 15,
    color: '#FF6B35',
    fontWeight: '700',
  },
});

export default LoginScreen;
