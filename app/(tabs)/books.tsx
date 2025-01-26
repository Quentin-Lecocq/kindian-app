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

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="pl-6 py-6 gap-4 bg-border">
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
                  ? 'bg-foreground border-foreground'
                  : 'bg-background border-background'
              }`}
            >
              <Text
                className={`font-gm-regular text-xs ${
                  currentSearch === item.value
                    ? 'text-background'
                    : 'text-foreground'
                }`}
              >
                {item.value}
              </Text>
            </TouchableOpacity>
          )}
        />
        <TextInput
          className="border mr-6 px-2 py-3 font-gm-regular text-sm bg-background placeholder:text-foreground"
          placeholder={`Search in ${currentSearch}`}
        />
      </View>
      {/* {!isLoading && books?.length ? <BooksList books={books} /> : null} */}
    </SafeAreaView>
  );
}
