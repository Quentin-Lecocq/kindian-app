export type Book = {
  id: string;
  title: string;
  author: string;
  user_id: string;
  highlights_count: number;
  comments_count: number;
  bookmarks_count: number;
  isbn13: string;
  isbn10: string;
  page_count: number;
  image_url: string;
  subtitle: string;
  published_date: string;
  description: string;
  categories: string[];
  text_snippet: string;
  google_books_link: string;
};
