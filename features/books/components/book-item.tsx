import PrimaryButton from '@/components/ui/primary-button';
import { BLURHASH } from '@/constants/images';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { SearchEngine, Star } from 'iconoir-react-native';
import { Text, View } from 'react-native';
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
    <View className="border-b mt-4">
      <View className="flex-row gap-4 pb-10">
        <View className="">
          <View className="border border-black p-1 h-[110px] bg-[#FEEFDB]">
            <Image
              source={book.image_url}
              style={{ width: 70, height: 100 }}
              contentFit="fill"
              contentPosition="center"
              transition={1000}
              placeholder={BLURHASH}
            />
          </View>
          <View>
            <Text className="font-dm-mono text-xs mt-2">{book.page_count}</Text>
            <Text className="font-dm-mono text-xs">pages</Text>
          </View>
        </View>
        <View className="flex-1 px-2">
          <Text className="font-roboto-mono-medium text-lg">{book.title}</Text>
          <Text className="font-roboto-mono-light text-sm">
            By{' '}
            <Text className="font-roboto-mono text-sm text-brown underline">
              {book.author}
            </Text>
          </Text>
          <Text className="font-roboto-mono mt-4 text-xs">
            {book.description.substring(0, 220)}...
          </Text>
        </View>
      </View>
      <View>
        <PrimaryButton
          label="Show"
          onPress={() => handleBookPress(book.id)}
          borderColor="black"
        />
        <View className="flex-row gap-2 py-6">
          <View className="flex-row gap-2 flex-1 justify-center items-center">
            <SearchEngine height={24} width={24} />
            <Text className="font-roboto-mono-medium text-sm">
              Read on Google
            </Text>
          </View>
          <View className="flex-row gap-2 flex-1 justify-center items-center">
            <Star height={24} width={24} />
            <Text className="font-roboto-mono-medium text-sm">Highlight</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookItem;
