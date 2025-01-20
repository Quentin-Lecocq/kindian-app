import { supabase } from '@/utils/supabase';
import { useEffect, useState } from 'react';
import { useSupabaseUser } from './useSupabaseUser';

export type Book = {
  id: string;
  title: string;
  user_id: string;
};

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { supabaseUser } = useSupabaseUser();

  useEffect(() => {
    const getBooks = async () => {
      if (!supabaseUser) return;

      try {
        const { data, error } = await supabase
          .from('books')
          .select('*')
          .eq('user_id', supabaseUser.id);

        if (error) throw error;
        setBooks(data || []);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Failed to fetch books')
        );
      } finally {
        setIsLoading(false);
      }
    };

    getBooks();
  }, [supabaseUser]);

  return { books, isLoading, error };
};
