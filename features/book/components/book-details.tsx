import { Text, View } from 'react-native';

type BookDetailsProps = {
  pageCount: number;
  highlightsCount: number;
  bookmarksCount: number;
  commentsCount: number;
  isbn13: string;
  publishedDate: string;
};

const BookDetails = ({
  pageCount,
  highlightsCount,
  bookmarksCount,
  commentsCount,
  isbn13,
  publishedDate,
}: BookDetailsProps) => (
  <View className="flex-row gap-4">
    <View className="w-fit gap-2">
      <Text className="font-gm-regular text-foreground text-xs">Pages</Text>
      <Text className="font-gm-regular text-foreground text-xs">
        Highlights
      </Text>
      <Text className="font-gm-regular text-foreground text-xs">Bookmarks</Text>
      <Text className="font-gm-regular text-foreground text-xs">Comments</Text>
      <Text className="font-gm-regular text-foreground text-xs">ISBN13</Text>
      <Text className="font-gm-regular text-foreground text-xs">
        Published Date
      </Text>
    </View>
    <View className="flex-1 gap-2">
      <Text className="font-gm-semi-bold text-foreground text-xs">
        {pageCount || '-'}
      </Text>
      <Text className="font-gm-semi-bold text-foreground text-xs">
        {highlightsCount || '-'}
      </Text>
      <Text className="font-gm-semi-bold text-foreground text-xs">
        {bookmarksCount || '-'}
      </Text>
      <Text className="font-gm-semi-bold text-foreground text-xs">
        {commentsCount || '-'}
      </Text>
      <Text className="font-gm-semi-bold text-foreground text-xs">
        {isbn13 || '-'}
      </Text>
      <Text className="font-gm-semi-bold text-foreground text-xs">
        {publishedDate || '-'}
      </Text>
    </View>
  </View>
);

export default BookDetails;
