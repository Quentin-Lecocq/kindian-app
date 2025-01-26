import { config } from '@/constants/iconoir';
import { SupabaseUserProvider } from '@/contexts/supabase-user-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { IconoirProvider } from 'iconoir-react-native';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../global.css';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'gm-thin': require('@/assets/fonts/GeistMono-Thin.ttf'),
    'gm-extra-light': require('@/assets/fonts/GeistMono-ExtraLight.ttf'),
    'gm-light': require('@/assets/fonts/GeistMono-Light.ttf'),
    'gm-regular': require('@/assets/fonts/GeistMono-Regular.ttf'),
    'gm-medium': require('@/assets/fonts/GeistMono-Medium.ttf'),
    'gm-semi-bold': require('@/assets/fonts/GeistMono-SemiBold.ttf'),
    'gm-bold': require('@/assets/fonts/GeistMono-Bold.ttf'),
    'gm-extra-bold': require('@/assets/fonts/GeistMono-ExtraBold.ttf'),
    'gm-black': require('@/assets/fonts/GeistMono-Black.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded || error) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SupabaseUserProvider>
        <IconoirProvider iconProps={config}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="book/[id]" />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="light" />
        </IconoirProvider>
      </SupabaseUserProvider>
    </QueryClientProvider>
  );
}
