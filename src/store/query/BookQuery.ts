import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book } from "@/shared/types/book";
import { PAGINATION_STEP } from "@/shared/constants/bookFilters";

interface BookQueryProps {
  maxResults?: number;
  filter?: string;
  orderBy?: string;
  startIndex?: number;
}

type BookResponse = {
  items: Book[];
  totalItems: string;
};

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/volumes/",
  }),
  endpoints: (builder) => ({
    fetchAllPosts: builder.query<BookResponse, BookQueryProps>({
      query: (args) => ({
        url: "",
        params: {
          ...args,
          key: import.meta.env.VITE_API_KEY,
          maxResults: args.maxResults || PAGINATION_STEP,
          startIndex: args.startIndex || 0,
        },
      }),
    }),
  }),
});

export const { useFetchAllPostsQuery } = bookApi;

export default bookApi;
