import { FlatList, Text, View } from 'react-native';
import { useDeleteBook } from '../hooks/use-delete-book';
import { useGetBooks } from '../hooks/use-get-books';
import BookItem from './book-item';

const BooksList = () => {
  const { data: books, isLoading } = useGetBooks();
  const { mutate: deleteBook } = useDeleteBook();

  const handleDelete = (bookId: string) => {
    deleteBook(bookId, {
      onSuccess: () => {
        console.log('Book deleted successfully');
      },
    });
  };

  if (!books) return null;

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View className="py-4 px-6">
      <FlatList
        data={books}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => <View className="h-6" />}
        renderItem={({ item }) => <BookItem book={item} />}
      />
    </View>
  );
};

export default BooksList;
