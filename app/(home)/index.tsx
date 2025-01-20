import { useBooks } from '@/hooks/useBooks';
import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { Button, FlatList, Text, View } from 'react-native';

export default function Page() {
  const { user } = useUser();
  const { signOut } = useAuth();

  const { books, isLoading: booksLoading, error: booksError } = useBooks();

  if (booksError) return <Text>Error: {booksError.message}</Text>;

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Text>You can now start using the app</Text>
        <Button title="Sign out" onPress={() => signOut()} />
        <Text>Books : {books.length}</Text>
        <FlatList
          data={books}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.id}
        />
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
