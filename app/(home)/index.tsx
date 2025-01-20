import { BooksList } from '@/components/BooksList';
import { useBooks } from '@/hooks/useBooks';
import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Page() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const { data: books, isLoading, error } = useBooks();

  // if (isLoading) return <Text>Loading books...</Text>;
  // if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Text>You can now start using the app</Text>
        <Button title="Sign out" onPress={() => signOut()} />
        {!isLoading && books?.length ? <BooksList books={books} /> : null}
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
