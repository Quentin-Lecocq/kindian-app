import { FlatList, StyleSheet, View } from 'react-native';
import { useDeleteBook } from '../hooks/use-delete-book';
import { Book } from '../types';
import BookItem from './book-item';

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

  return (
    <View className="py-4 px-6">
      <FlatList
        data={books}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => <View className="h-6" />}
        renderItem={({ item }) => <BookItem book={item} />}
      />
    </View>
  );
};

export default BooksList;
const styles = StyleSheet.create({
  bookContainer: {
    borderRadius: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    gap: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 12,
    color: 'gray',
  },
  containerButton: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 4,
    borderRadius: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
  },
});
