import { ThemeProvider, DefaultTheme } from 'expo-router';

import '@/global.css';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { BottomNavigation } from '@/components/navigation/BottomNavigation';

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <AnimatedSplashOverlay />
      <BottomNavigation />
    </ThemeProvider>
  );
}
