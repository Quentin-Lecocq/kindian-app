import { FlatList, View } from 'react-native';
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
