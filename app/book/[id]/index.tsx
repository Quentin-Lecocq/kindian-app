import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';

const BookDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text className="text-4xl font-bold text-center font-bodoni-moda-bold text-black">
        BookDetailScreen : {id}
      </Text>
    </SafeAreaView>
  );
};

export default BookDetailScreen;
