import { DefaultTheme, Stack, ThemeProvider } from 'expo-router';

import '@/global.css';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { colors } from '@/constants/colors';

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.white },
        }}
      />
    </ThemeProvider>
  );
}
