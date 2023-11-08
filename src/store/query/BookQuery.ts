// https://www.googleapis.com/books/v1/volumes?q=flowers&key=AIzaSyDNZnmLNtB0fJawUN_j7f3qMJNu55OpKPQ&maxResults=5

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
interface iProps {
    maxResults?:number,
    filter?:string,
    orderBy?:string,
    q?:string,
}
export const bookQuery = createApi({
    reducerPath: "bookQuery",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://www.googleapis.com/books/v1/volumes/`,
    }),
    tagTypes: [],
    endpoints: (build) => ({

        fetchAllPosts: build.query<any, iProps>({
            query: (params) => ({
                url:"",
                params: {...params ,key:import.meta.env.VITE_API_KEY},
            }),
            providesTags: () => ["postListData"],
        }),


    }),
});

export const {
    useFetchAllPostsQuery
} = bookQuery;