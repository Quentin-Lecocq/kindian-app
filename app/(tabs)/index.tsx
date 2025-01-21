import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { Button, SafeAreaView, Text } from 'react-native';

export default function Page() {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <SafeAreaView>
      <SignedIn>
        <Text className="text-4xl my-8 font-bold text-center font-bodoni-moda-bold text-black">
          KINDIAN
        </Text>
        <Text className="text-sm font-roboto-mono">
          Hello {user?.emailAddresses[0].emailAddress}
        </Text>
        <Text className="text-sm font-roboto-mono">
          You can now start using the app
        </Text>
        <Text className="text-sm mt-8 font-dm-mono-medium">
          Lorem ipsum dolor sit amet consectetur forever adipisicing elit.
          Quisquam, quos.
        </Text>
        <Button title="Sign out" onPress={() => signOut()} />
      </SignedIn>
      <SignedOut>
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
    </SafeAreaView>
  );
}
