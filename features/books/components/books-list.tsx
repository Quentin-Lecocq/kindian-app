import { router } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';
import { useDeleteBook } from '../hooks/use-delete-book';
import { Book } from '../types';
import BookItem from './book-item';

type BooksListProps = {
  books: Book[];
};

// title
// author
// id
// img
// pages
// google books links

const BooksList = ({ books }: BooksListProps) => {
  const { mutate: deleteBook } = useDeleteBook();
  console.log({ books });

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
      renderItem={({ item }) => <BookItem book={item} />}
      // <View style={styles.bookContainer}>
      //   <View>
      //     <Text style={styles.title}>{item.title}</Text>
      //     <Text style={styles.author}>by {item.author}</Text>
      //   </View>
      //   <View style={styles.containerButton}>
      //     <TouchableHighlight
      //       underlayColor={'white'}
      //       onPress={() => handleDelete(item.id)}
      //     >
      //       <View style={styles.button}>
      //         <Text style={styles.buttonText}>Delete</Text>
      //       </View>
      //     </TouchableHighlight>
      //     <TouchableHighlight onPress={() => handleBookPress(item.id)}>
      //       <View style={styles.button}>
      //         <Text style={styles.buttonText}>Show</Text>
      //       </View>
      //     </TouchableHighlight>
      //   </View>
      // </View>
      // )}
    />
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
