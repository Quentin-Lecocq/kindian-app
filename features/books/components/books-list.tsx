import { router } from 'expo-router';
import { Button, FlatList, Pressable, Text, View } from 'react-native';
import { useDeleteBook } from '../hooks/use-delete-book';
import { Book } from '../types';

type BooksListProps = {
  books: Book[];
};

const BooksList = ({ books }: BooksListProps) => {
  const { mutate: deleteBook } = useDeleteBook();

  const handleDelete = (bookId: string) => {
    deleteBook(bookId, {
      onSuccess: () => {
        console.log('Book deleted successfully');
      },
    });
  };

  const handleBookPress = (bookId: string) => {
    router.push(`/book/${bookId}`);
  };

  return (
    <FlatList
      data={books}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <View
          style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
        >
          <Pressable onPress={() => handleBookPress(item.id)}>
            <Text>{item.title}</Text>
          </Pressable>
          <Button title={'Delete'} onPress={() => handleDelete(item.id)} />
        </View>
      )}
    />
  );
};

export default BooksList;
