import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBook } from '../api/books';
import { Book } from '../types';

export const useDeleteBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBook,
    onMutate: async (bookId) => {
      await queryClient.cancelQueries({ queryKey: ['books'] });
      const previousBooks = queryClient.getQueryData<Book[]>(['books']);

      queryClient.setQueryData(['books'], (old: Book[] | undefined) =>
        old?.filter((book) => book.id !== bookId)
      );

      return { previousBooks };
    },
    onError: (err, bookId, context) => {
      queryClient.setQueryData(['books'], context?.previousBooks);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });
};
