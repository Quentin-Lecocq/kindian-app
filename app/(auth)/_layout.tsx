import useSupabaseUser from '@/hooks/useSupabaseUser';
import { Redirect, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function AuthRoutesLayout() {
  const supabaseUser = useSupabaseUser();

  if (supabaseUser) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <>
      <StatusBar style="inverted" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
