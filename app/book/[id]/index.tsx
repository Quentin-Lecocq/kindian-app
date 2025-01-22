import PrimaryButton from '@/components/ui/primary-button';
import SecondaryButton from '@/components/ui/secondary-button';
import { BLURHASH } from '@/constants/images';
import { useGetBookDetails } from '@/features/books/hooks/use-get-book-details';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  ArrowLeft,
  Bell,
  Bookmark,
  CloudDownload,
  Play,
  Trash,
} from 'iconoir-react-native';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const BookDetailScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: book, isLoading } = useGetBookDetails(id);

  // if (isLoading) return <Text>Loading...</Text>;

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <View className="border flex-row justify-between items-center h-20">
        <TouchableOpacity
          onPress={() => router.back()}
          className="border-r h-full items-center justify-center flex-row w-20"
        >
          <ArrowLeft width={22} height={22} strokeWidth={2} />
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className="text-md flex-1 p-4 text-center font-bold font-roboto-mono-semi-bold text-black"
        >
          {book?.title}
        </Text>
        <View className="border-l h-full items-center justify-center flex-row w-20">
          <Bell width={22} height={22} strokeWidth={2} />
        </View>
      </View>
      <ScrollView>
        <View className="px-6 py-4 flex-1 gap-4">
          <View className="flex-row gap-4">
            <View className="border border-black p-1  bg-[#FEEFDB]">
              <Image
                source={book?.image_url}
                style={{ width: 100, height: 140 }}
                contentFit="fill"
                contentPosition="center"
                transition={1000}
                placeholder={BLURHASH}
              />
            </View>
            <View className="flex-1">
              <Text className="font-dm-mono-medium text-xl">{book?.title}</Text>
              <Text className="font-roboto-mono-light text-sm">
                By:{' '}
                <Text className="font-roboto-mono text-sm text-brown underline">
                  {book?.author}
                </Text>
              </Text>
            </View>
          </View>
          <SecondaryButton
            label="Read on Google"
            textCenter
            onPress={() => {}}
          />
          <PrimaryButton
            label="Play Sample"
            icon={<Play strokeWidth={2} />}
            onPress={() => {}}
          />
          <View className="flex-row justify-between h-24">
            <TouchableOpacity className="flex-1 border items-center justify-center gap-1">
              <CloudDownload strokeWidth={2} />
              <Text className="font-roboto-mono-medium text-sm">Download</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 border items-center justify-center gap-1">
              <Bookmark strokeWidth={2} />
              <Text className="font-roboto-mono-medium text-sm">Save</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 items-center border justify-center gap-1">
              <Trash strokeWidth={2} />
              <Text className="font-roboto-mono-medium text-sm">Delete</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row gap-4">
            <View className="w-fit gap-2">
              <Text className="font-roboto-mono text-sm">Highlights</Text>
              <Text className="font-roboto-mono  text-sm">Bookmarks</Text>
              <Text className="font-roboto-mono text-sm">Comments</Text>
              <Text className="font-roboto-mono text-sm">ISBN13</Text>
              <Text className="font-roboto-mono text-sm">Published Date</Text>
            </View>
            <View className="flex-1 gap-2">
              <Text className="font-roboto-mono-semi-bold text-sm">
                {book?.highlights_count || '-'}
              </Text>
              <Text className="font-roboto-mono-semi-bold text-sm">
                {book?.bookmarks_count || '-'}
              </Text>
              <Text className="font-roboto-mono text-sm">
                {book?.comments_count || '-'}
              </Text>
              <Text className="font-roboto-mono-semi-bold text-sm">
                {book?.isbn13 || '-'}
              </Text>
              <Text className="font-roboto-mono-semi-bold text-sm">
                {book?.published_date || '-'}
              </Text>
            </View>
          </View>
          <View className="border-t pt-6 mt-4">
            <Text className="font-dm-mono leading-6 text-sm">
              {book?.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetailScreen;
