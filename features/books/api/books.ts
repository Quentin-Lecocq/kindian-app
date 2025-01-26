import { supabase } from '@/utils/supabase';
import { getAccessToken } from '@/utils/user';
import { Book } from '../types';

export const getBooks = async (): Promise<Book[]> => {
  const token = await getAccessToken();

  if (!token) throw new Error('No access token');

  const response = await fetch('http://localhost:4000/api/books/my-books', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error('Failed to fetch books');

  const data = await response.json();
  // TODO: fix this, can i return all the data?
  return data.data;
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
