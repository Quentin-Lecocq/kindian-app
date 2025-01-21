import { tokenCache } from '@/cache';
import { config } from '@/constants/iconoir';
import { SupabaseUserProvider } from '@/contexts/supabase-user-context';
import { ClerkProvider } from '@clerk/clerk-expo';
import {
  BodoniModa_400Regular,
  BodoniModa_500Medium,
  BodoniModa_700Bold,
  BodoniModa_800ExtraBold,
  BodoniModa_900Black,
} from '@expo-google-fonts/bodoni-moda';
import {
  DMMono_300Light,
  DMMono_300Light_Italic,
  DMMono_400Regular,
  DMMono_400Regular_Italic,
  DMMono_500Medium,
  DMMono_500Medium_Italic,
} from '@expo-google-fonts/dm-mono';
import {
  RobotoMono_100Thin,
  RobotoMono_200ExtraLight,
  RobotoMono_300Light,
  RobotoMono_400Regular,
  RobotoMono_500Medium,
  RobotoMono_600SemiBold,
  RobotoMono_700Bold,
} from '@expo-google-fonts/roboto-mono';
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
    'Roboto-Mono-Thin': RobotoMono_100Thin,
    'Roboto-Mono-ExtraLight': RobotoMono_200ExtraLight,
    'Roboto-Mono-Light': RobotoMono_300Light,
    'Roboto-Mono-Regular': RobotoMono_400Regular,
    'Roboto-Mono-Medium': RobotoMono_500Medium,
    'Roboto-Mono-SemiBold': RobotoMono_600SemiBold,
    'Roboto-Mono-Bold': RobotoMono_700Bold,
    'Bodoni-Moda': BodoniModa_400Regular,
    'Bodoni-Moda-Bold': BodoniModa_700Bold,
    'Bodoni-Moda-Medium': BodoniModa_500Medium,
    'Bodoni-Moda-ExtraBold': BodoniModa_800ExtraBold,
    'Bodoni-Moda-Black': BodoniModa_900Black,
    'DM-Mono-Light': DMMono_300Light,
    'DM-Mono-Light-Italic': DMMono_300Light_Italic,
    'DM-Mono': DMMono_400Regular,
    'DM-Mono-Italic': DMMono_400Regular_Italic,
    'DM-Mono-Medium': DMMono_500Medium,
    'DM-Mono-Medium-Italic': DMMono_500Medium_Italic,
  });

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  if (!publishableKey) {
    throw new Error('EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY is not set');
  }

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
      <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
        <SupabaseUserProvider>
          <IconoirProvider iconProps={config}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen
                name="book/[id]"
                options={{ title: 'Book Details' }}
              />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </IconoirProvider>
        </SupabaseUserProvider>
      </ClerkProvider>
    </QueryClientProvider>
  );
}
