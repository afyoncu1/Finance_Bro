import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.financebro.app',
  appName: 'Finance Bro',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      androidAutoHideSplashScreen: true,
    },
  },
  ios: {
    contentInset: 'automatic',
  },
};

export default config;
