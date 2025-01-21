import BooksList from '@/features/books/components/books-list';
import { useGetUserBooks } from '@/features/books/hooks/use-get-user-books';
import { useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const fakeSearchItems = [
  {
    id: '1',
    value: 'Titles',
  },
  {
    id: '2',
    value: 'Authors',
  },
  {
    id: '3',
    value: 'Categories',
  },
  {
    id: '4',
    value: 'Highlights',
  },
  {
    id: '5',
    value: 'Comments',
  },
];

export default function BooksScreen() {
  const [currentSearch, setCurrentSearch] = useState('Titles');
  const { data: books, isLoading } = useGetUserBooks();

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <View className="border flex-row justify-between items-center h-20 px-6">
        <Text className="text-3xl font-bold font-roboto-mono-bold text-black">
          Books
        </Text>
      </View>
      <View className="pl-6 py-6 gap-4 bg-tertiary">
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={fakeSearchItems}
          keyExtractor={({ id }) => id}
          ItemSeparatorComponent={() => <View className="w-2" />}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setCurrentSearch(item.value)}
              className={`border px-3 py-2 ${
                currentSearch === item.value
                  ? 'bg-primary border-primary'
                  : 'bg-secondary'
              }`}
            >
              <Text className="font-roboto-mono text-sm">{item.value}</Text>
            </TouchableOpacity>
          )}
        />
        <TextInput
          className="border mr-6 px-4 py-6 font-roboto-mono text-base bg-secondary placeholder:text-black"
          placeholder={`Search in ${currentSearch}`}
        />
      </View>
      {!isLoading && books?.length ? <BooksList books={books} /> : null}
    </SafeAreaView>
  );
}
