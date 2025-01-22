import { supabase } from '@/utils/supabase';
import { Book } from '../types';

export const getUserBooks = async (userId: string | undefined) => {
  try {
    if (!userId) return [];
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .eq('user_id', userId);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteBook = async (bookId: string) => {
  try {
    const { error } = await supabase.from('books').delete().eq('id', bookId);
    if (error) throw error;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getBookById = async (bookId: string): Promise<Book> => {
  try {
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .eq('id', bookId)
      .single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
