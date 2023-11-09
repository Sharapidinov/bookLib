import React, {useState} from 'react';
import {Button, Stack} from "@mui/material";
import BookCard from "../entites/BookCard";
import {useFetchAllPostsQuery} from "../store/query/BookQuery";

const PAGINATION_STEP = 30
const BooksCollection = () => {
    const[maxResults, setMaxResults] = useState(PAGINATION_STEP)
    const {data} = useFetchAllPostsQuery({
        q:"js",
        maxResults
    })
    console.log(data)
    const onLoadMore = () => {
        setMaxResults(prevState => prevState + PAGINATION_STEP)
    }

    return (
        <>
            <Stack direction={"row"} gap={"32px"} flexWrap="wrap">
                {data?.items?.map(book => (
                    <BookCard key={book.id} book={book}/>
                ))}
            </Stack>
            <Button
                onClick={onLoadMore}
                variant="contained" >
                Load more...
            </Button>
        </>
    );
};

export default BooksCollection;