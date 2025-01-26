import { Stack } from 'expo-router';

export default function AuthRoutesLayout() {
  // if (isSignedIn) {
  //   return <Redirect href="/(tabs)" />;
  // }

  return <Stack screenOptions={{ headerShown: false }} />;
}
