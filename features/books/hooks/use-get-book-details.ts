import { useQuery } from '@tanstack/react-query';
import { getBookById } from '../api/books';
import { Book } from '../types';

export const useGetBookDetails = (bookId: string) => {
  return useQuery<Book>({
    queryKey: ['book', bookId],
    queryFn: () => getBookById(bookId),
    enabled: !!bookId,
  });
};
