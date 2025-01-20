import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

const BookDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <Text>BookDetailScreen : {id}</Text>;
};

export default BookDetailScreen;
