import { useRouter } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Home() {
  const router = useRouter();
  // const { data: books, isLoading } = useGetUserBooks();

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
              {/* <FlatList
                horizontal
                data={books}
                keyExtractor={({ id }) => id}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View className="w-4" />}
                renderItem={({ item }) => (
                  <View className="flex-1 flex-col items-center">
                    <View className="border border-black p-1 bg-[#FEEFDB] rounded-sm">
                      <Image
                        source={item.image_url}
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
                        className="font-roboto-mono-medium text-sm text-left"
                      >
                        {item.title}
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        className="font-roboto-mono-light text-xs text-left"
                      >
                        {item.author}
                      </Text>

                      <View className="flex-row items-center mt-2 justify-between w-full">
                        <View className="flex-row">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Text key={star} className="text-primary text-xs">
                              ★
                            </Text>
                          ))}
                        </View>
                        <TouchableOpacity>
                          <Bookmark
                            width={16}
                            height={16}
                            color="#0E0D0A"
                            strokeWidth={2}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              /> */}
            </View>
          </View>
        </View>
        <View>
          <View className="flex-col justify-between">
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
              {/* <FlatList
                horizontal
                data={books}
                keyExtractor={({ id }) => id}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View className="w-4" />}
                renderItem={({ item }) => (
                  <View className="flex-1 flex-col items-center">
                    <View className="border border-black p-1 bg-[#FEEFDB] rounded-sm">
                      <Image
                        source={item.image_url}
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
                        className="font-roboto-mono-medium text-sm text-left"
                      >
                        {item.title}
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        className="font-roboto-mono-light text-xs text-left"
                      >
                        {item.author}
                      </Text>

                      <View className="flex-row items-center mt-2 justify-between w-full">
                        <View className="flex-row">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Text key={star} className="text-primary text-xs">
                              ★
                            </Text>
                          ))}
                        </View>
                        <TouchableOpacity>
                          <Bookmark
                            width={16}
                            height={16}
                            color="#0E0D0A"
                            strokeWidth={2}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              /> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
