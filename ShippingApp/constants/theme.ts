import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  primary: '#F2590D',
  primaryLight: '#FFF7F2',
  primaryDark: '#C85313',
  secondary: '#22C55E',
  white: '#FFFFFF',
  black: '#181311',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  blue: {
    500: '#3B82F6',
    600: '#2563EB',
    50: '#DBEAFE',
  },
  red: {
    500: '#EF4444',
  },
  green: {
    500: '#22C55E',
    50: '#ECFDF3',
    100: '#D1FAE5',
  },
  orange: {
    50: '#FFF0E6',
    100: '#FFF7ED',
    200: '#F6D5C3',
  },
  background: {
    page: '#F8F6F5',
    card: '#FFFFFF',
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 999,
};

export const IconSizes = {
  xs: 16,
  sm: 18,
  md: 20,
  lg: 22,
  xl: 24,
  xxl: 28,
};

export const ButtonHeights = {
  sm: 40,
  md: 46,
  lg: 52,
  xl: 56,
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

export const AssetUrls = {
  mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi4cVwth_2rt2eKy4yKQqNxsfvTNFyKwpL1aUvyXw_OXXCA7SiJP3nyVoO_PaHk8ReMPCpkFh-mJ33eRzKAjW2cFz32Q5YhHC4oGPJHbyOWYo6E_D31YJxAj7zGEcH7VoEdRiGNDoIR5bs5rjiBTuUoUzf43h_k1kCUjdBAsc-Si1YcuAFXHkafGclgr_9-5UYZhEvHz_eOSbdKv_a9HpnZ92lOUevKvPJTFy9h4pZ4PfVnuqieuDThb4EDVKXNjWuP57gut5rEt3K',
  driverAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCocSVCtmKFkq9U7LJlO4xNKsDukp37tbAyjjzv71sKBBUR5jtzUolB_AUfAyk0ZGAHF9Yg8oUmx7xMGLxSzKZcfX4TfgvDyYKeInJH9kLtRofxiuz90v_tR-ymOAlM-FtCxc6GBDxYdLYpuXq93QPpDpO6zBxC-LCO7vO5boyktdpjFBP7-LW0D-_SqA9RnNTp9oMCcfMYUchvMMUjaZ9I4El4c9qJ_6T9qzGUb_Yw3bCfuvHjiX3LFDIE67S_HlSsPu05DCmAx0d',
};
