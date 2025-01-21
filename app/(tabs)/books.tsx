import BooksList from '@/features/books/components/books-list';
import { useGetUserBooks } from '@/features/books/hooks/use-get-user-books';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BooksScreen() {
  const { data: books, isLoading } = useGetUserBooks();

  return (
    <SafeAreaView className="p-4">
      {!isLoading && books?.length ? <BooksList books={books} /> : null}
    </SafeAreaView>
  );
}
