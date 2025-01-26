import { config } from '@/constants/iconoir';
import { SupabaseUserProvider } from '@/contexts/supabase-user-context';
// import {
//   GeistMono_100Thin,
//   GeistMono_200ExtraLight,
//   GeistMono_300Light,
//   GeistMono_400Regular,
//   GeistMono_500Medium,
//   GeistMono_600SemiBold,
//   GeistMono_700Bold,
//   GeistMono_800ExtraBold,
//   GeistMono_900Black,
// } from '@expo-google-fonts/geist-mono';
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
    // 'geist-mono-thin': GeistMono_100Thin,
    // 'geist-mono-extra-light': GeistMono_200ExtraLight,
    // 'geist-mono-light': GeistMono_300Light,
    // 'geist-mono': GeistMono_400Regular,
    // 'geist-mono-medium': GeistMono_500Medium,
    // 'geist-mono-semi-bold': GeistMono_600SemiBold,
    // 'geist-mono-bold': GeistMono_700Bold,
    // 'geist-mono-extra-bold': GeistMono_800ExtraBold,
    // 'geist-mono-black': GeistMono_900Black,
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
          <StatusBar style="auto" />
        </IconoirProvider>
      </SupabaseUserProvider>
    </QueryClientProvider>
  );
}
