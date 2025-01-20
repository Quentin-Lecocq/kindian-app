import { useSupabaseUser } from '@/hooks/useSupabaseUser';
import { useQuery } from '@tanstack/react-query';
import { getUserBooks } from '../api/books';
import { Book } from '../types';

export const useGetUserBooks = () => {
  const { supabaseUser } = useSupabaseUser();
  return useQuery<Book[]>({
    queryKey: ['books', supabaseUser?.id],
    queryFn: () => getUserBooks(supabaseUser?.id),
    enabled: !!supabaseUser?.id,
  });
};
