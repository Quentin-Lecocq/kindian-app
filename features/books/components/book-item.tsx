import { Text, View } from 'react-native';
import { Book } from '../types';

type BookItemProps = {
  book: Book;
};

const BookItem = ({ book }: BookItemProps) => {
  return (
    <View>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
    </View>
  );
};

export default BookItem;
