import { supabase } from '@/utils/supabase';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSupabaseUser } from './useSupabaseUser';

export type Book = {
  id: string;
  title: string;
  user_id: string;
};

const fetchBooks = async (userId: string | undefined) => {
  if (!userId) return [];

  const { data, error } = await supabase
    .from('books')
    .select('*')
    .eq('user_id', userId);

  if (error) throw error;
  return data || [];
};

const deleteBook = async (bookId: string) => {
  const { error } = await supabase.from('books').delete().eq('id', bookId);
  if (error) throw error;
};

export const useBooks = () => {
  const { supabaseUser } = useSupabaseUser();

  return useQuery<Book[]>({
    queryKey: ['books', supabaseUser?.id],
    queryFn: () => fetchBooks(supabaseUser?.id),
    enabled: !!supabaseUser?.id,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};

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
