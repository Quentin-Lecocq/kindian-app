import { BLURHASH } from '@/constants/images';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { SearchEngine, Star } from 'iconoir-react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { Book } from '../types';

type BookItemProps = {
  book: Book;
};

const BookItem = ({ book }: BookItemProps) => {
  const handleBookPress = (bookId: string) => {
    router.push(`/book/${bookId}`);
  };

  // Todo: add delete and highlight

  return (
    <View className="border-b border-border mt-4">
      <View className="flex-row gap-4 pb-10">
        <View className="">
          <View className="border border-foreground p-0.5 h-[105px] bg-background">
            <Image
              source={book.imageUrl}
              style={{ width: 70, height: 100 }}
              contentFit="fill"
              contentPosition="center"
              transition={1000}
              placeholder={BLURHASH}
            />
          </View>
          <View>
            <Text className="font-dm-mono text-foreground text-xs mt-2">
              {book.pageCount}
            </Text>
            <Text className="font-dm-mono text-xs text-foreground">pages</Text>
          </View>
        </View>
        <View className="flex-1 px-2">
          <Text className="font-gm-semi-bold text-foreground ">
            {book.title}
          </Text>
          <Text className="font-gm-light text-xs text-foreground">
            By{' '}
            <Text className="text-sm text-muted-foreground underline">
              {book.author}
            </Text>
          </Text>
          <Text className="font-gm-extra-light mt-4 text-foreground text-xs">
            {book.description.substring(0, 220)}...
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => handleBookPress(book.id)}>
          <View className="flex-row gap-2 py-3 border flex-1 justify-center items-center bg-foreground border-foreground">
            <Text className="font-gm-medium text-sm text-center text-background">
              Show
            </Text>
          </View>
        </TouchableOpacity>
        <View className="flex-row gap-2 py-6">
          <View className="flex-row gap-2 flex-1 justify-center items-center">
            <SearchEngine color="#FAFAFA" />
            <Text className="font-gm-medium text-sm text-foreground">
              Read on Google
            </Text>
          </View>
          <View className="flex-row gap-2 flex-1 justify-center items-center">
            <Star color="#FAFAFA" />
            <Text className="font-gm-medium text-sm text-foreground">
              Highlight
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookItem;
