import ActionButtons from '@/features/book/components/actions-buttons';
import BookDescription from '@/features/book/components/book-description';
import BookDetails from '@/features/book/components/book-details';
import BookImage from '@/features/book/components/book-image';
import BookInfo from '@/features/book/components/book-info';
import Header from '@/features/book/components/header';
import { useGetBookDetails } from '@/features/books/hooks/use-get-book-details';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView, ScrollView, View } from 'react-native';

const BookDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: book } = useGetBookDetails(id);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Header title={book?.title || ''} />
      <ScrollView>
        <View className="px-6 py-4 flex-1 gap-4">
          <View className="flex-row gap-4">
            <BookImage imageUrl={book?.imageUrl || ''} />
            <BookInfo
              title={book?.title || ''}
              subtitle={book?.subtitle || ''}
              author={book?.author || ''}
              categories={book?.categories || []}
            />
          </View>
          <ActionButtons
            onRead={() => {}}
            onDownload={() => {}}
            onSave={() => {}}
            onDelete={() => {}}
          />
          <BookDetails
            pageCount={book?.pageCount || 0}
            highlightsCount={book?.highlightsCount || 0}
            bookmarksCount={book?.bookmarksCount || 0}
            commentsCount={book?.commentsCount || 0}
            isbn13={book?.isbn13 || ''}
            publishedDate={book?.publishedDate || ''}
          />
          <BookDescription description={book?.description || ''} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetailScreen;
