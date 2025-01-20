import { supabase } from '@/utils/supabase';

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
