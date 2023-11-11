import { useState, useEffect } from "react";
import { Alert, Box, Button, CircularProgress, Stack, Typography } from "@mui/material";
import { useFetchAllPostsQuery } from "@/store/query";
import { useSearchParams } from "@/shared/lib";
import { css } from "@emotion/react";
import { PAGINATION_STEP } from "@/shared/constants";
import { Book } from "@/shared/types/index.ts";
import { BookCard } from "@/entites/BookCard/BookCard";

export type Error = {
  data: {
    error: {
      message: string;
    };
  };
}

const styles = {
  root: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  }),
  loadMore: css({
    width: '100%',
    background: 'white',
    padding: '12px 16px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
  }),
  booksContainer: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(215px, 1fr))',
    gap: '16px',
    background: 'white',
    padding: '16px',
    borderRadius: '10px',
    '@media (max-width: 599px)': {
      padding: '12px 16px',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px 8px',
    },
  }),
  found: css({
    background: 'white',
    padding: '12px 16px',
    borderRadius: '10px',
    font: '500 18px Roboto',
    '@media (max-width: 599px)': {
      font: '500 16px Roboto'
    },
  }),
  loader: css({
    margin: '12px auto 0'
  }),
};

const BooksCollection = () => {
  const [searchParams] = useSearchParams();
  const [startIndex, setStartIndex] = useState(0);
  const [data, setData] = useState<Book[]>([]);

  const {
    data: responseData,
    isFetching,
    error,
    refetch,
  } = useFetchAllPostsQuery({
    ...searchParams,
    startIndex,
  });

  useEffect(() => {
    if (startIndex !== 0) {
      refetch().then(({ data }) =>
        setData((prev) => [...prev, ...(data?.items || [])])
      );
    }
  }, [startIndex, searchParams, refetch]);

  useEffect(() => {
    setStartIndex(0);
    refetch().then(({ data }) => setData(data?.items || []));
  }, [refetch, searchParams]);

  const isEnd =
    startIndex + PAGINATION_STEP >= Number(responseData?.totalItems || 0);

  const isLoading = isFetching && startIndex === 0

  return (
    <div css={styles.root}>
      {error ? <Alert severity="error">{(error as Error)?.data?.error?.message}</Alert>
        :
        <>
          {isLoading ? <CircularProgress css={styles.loader} size={54} />
            : <>
              <Typography css={styles.found} variant="h6">Found: {responseData?.totalItems} results </Typography>
              <Stack css={styles.booksContainer}>
                {data.map((book, index) => (
                  <BookCard key={book.id + index} book={book} />
                ))}
              </Stack>
              {!isEnd && (
                <Box css={styles.loadMore}>
                  <Button
                    onClick={() => setStartIndex((prev) => prev + PAGINATION_STEP)}
                    variant="contained"
                    disabled={isFetching}
                  >
                    {isFetching ? <CircularProgress size={24.5} /> : "Load more..."}
                  </Button>
                </Box>
              )}
            </>
          }
        </>
      }
    </div>
  );
};

export default BooksCollection;
