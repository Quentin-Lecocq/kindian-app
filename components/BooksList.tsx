import { Book, useDeleteBook } from '@/hooks/useBooks';
import { Button, FlatList, Text, View } from 'react-native';

type BooksListProps = {
  books: Book[];
};

export const BooksList = ({ books }: BooksListProps) => {
  const { mutate: deleteBook, isPending } = useDeleteBook();

  const handleDelete = (bookId: string) => {
    deleteBook(bookId, {
      onSuccess: () => {
        console.log('Book deleted successfully');
      },
      onError: (error) => {
        console.error('Error deleting book:', error);
      },
    });
  };

  return (
    <FlatList
      data={books}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <View
          style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
        >
          <Text>{item.title}</Text>
          <Button
            title={'Delete'}
            onPress={() => handleDelete(item.id)}
            // disabled={isPending}
          />
        </View>
      )}
    />
  );
};
