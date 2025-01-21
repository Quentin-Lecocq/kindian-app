import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Page() {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <View>
      <SignedIn>
        <Text className="text-2xl font-bold text-center">
          Welcome to Kindian
        </Text>
        <Text className="text-lg">
          Hello {user?.emailAddresses[0].emailAddress}
        </Text>
        <Text className="text-lg">You can now start using the app</Text>
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
    </View>
  );
}
