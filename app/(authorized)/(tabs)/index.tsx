import { BLURHASH } from '@/constants/images';
import { useGetBooks } from '@/features/books/hooks/use-get-books';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Bookmark } from 'iconoir-react-native';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Home() {
  const router = useRouter();
  const { data: books, isLoading } = useGetBooks();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView showsVerticalScrollIndicator={false} className="p-6">
        <View>
          <View className="flex-col justify-between">
            <View className="flex-row justify-between pr-6 mb-4 items-center">
              <Text className="font-gm-medium text-md text-foreground">
                Your Books
              </Text>
              <TouchableOpacity onPress={() => router.push('/books')}>
                <Text className="font-gm-regular text-muted-foreground underline text-sm">
                  more
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                horizontal
                data={books}
                keyExtractor={({ id }) => id}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View className="w-4" />}
                renderItem={({ item }) => (
                  <View className="flex-1 flex-col items-center">
                    <View className="border border-foreground p-0.5 bg-background">
                      <Image
                        source={item.imageUrl}
                        style={{ width: 100, height: 150 }}
                        contentFit="fill"
                        contentPosition="center"
                        transition={500}
                        placeholder={BLURHASH}
                      />
                    </View>
                    <View className="mt-2 w-[110px]">
                      <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        className="text-foreground font-gm-regular text-sm text-left"
                      >
                        {item.title}
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        className="font-light text-muted-foreground text-xs text-left"
                      >
                        {item.author}
                      </Text>

                      <View className="flex-row items-center mt-2 justify-between w-full">
                        <View className="flex-row">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Text
                              key={star}
                              className="text-foreground text-xs"
                            >
                              ★
                            </Text>
                          ))}
                        </View>
                        <TouchableOpacity>
                          <Bookmark
                            width={16}
                            height={16}
                            color="#FAFAFA"
                            strokeWidth={2}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
        <View>
          <View className="flex-col justify-between mt-10">
            <View className="flex-row justify-between pr-6 items-center mb-4">
              <Text className="font-gm-medium text-md text-foreground">
                Recommended for You
              </Text>
              <TouchableOpacity onPress={() => router.push('/books')}>
                <Text className="font-gm-regular text-muted-foreground underline text-sm">
                  more
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                horizontal
                // TODO: wait for the api to get the recommended books
                data={books}
                keyExtractor={({ id }) => id}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View className="w-4" />}
                renderItem={({ item }) => (
                  <View className="flex-1 flex-col items-center">
                    <View className="border border-foreground p-0.5 bg-background">
                      <Image
                        source={item.imageUrl}
                        style={{ width: 100, height: 150 }}
                        contentFit="fill"
                        contentPosition="center"
                        transition={500}
                        placeholder={BLURHASH}
                      />
                    </View>
                    <View className="mt-2 w-[110px]">
                      <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        className="text-foreground font-gm-regular text-sm text-left"
                      >
                        {item.title}
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        className="font-light text-muted-foreground text-xs text-left"
                      >
                        {item.author}
                      </Text>

                      <View className="flex-row items-center mt-2 justify-between w-full">
                        <View className="flex-row">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Text
                              key={star}
                              className="text-foreground text-xs"
                            >
                              ★
                            </Text>
                          ))}
                        </View>
                        <TouchableOpacity>
                          <Bookmark
                            width={16}
                            height={16}
                            color="#FAFAFA"
                            strokeWidth={2}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
