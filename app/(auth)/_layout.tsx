import useSupabaseUser from '@/hooks/useSupabaseUser';
import { Redirect, Stack } from 'expo-router';

export default function AuthRoutesLayout() {
  const supabaseUser = useSupabaseUser();

  if (supabaseUser) {
    return <Redirect href="/(tabs)" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
