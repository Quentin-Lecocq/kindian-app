import { FlatList, Text, View } from 'react-native';

type BookInfoProps = {
  title: string;
  subtitle: string;
  author: string;
  categories: string[];
};

const BookInfo = ({ title, subtitle, author, categories }: BookInfoProps) => {
  return (
    <View className="flex-1">
      <Text className="font-gm-bold text-foreground text-lg">{title}</Text>
      <Text className="font-gm-light text-foreground text-xs">{subtitle}</Text>
      <Text className="font-gm-light text-foreground text-xs">
        By:{' '}
        <Text className="text-sm text-muted-foreground underline">
          {author}
        </Text>
      </Text>
      <View className="pt-2">
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Text className="font-gm-light text-background p-1 text-xs bg-foreground">
              {item}
            </Text>
          )}
        />
      </View>
    </View>
  );
};

export default BookInfo;
