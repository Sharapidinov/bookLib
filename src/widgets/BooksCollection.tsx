import { useState, useEffect } from "react";
import {Alert, Button, CircularProgress, Stack, Typography} from "@mui/material";
import { BookCard } from "@/entites";
import { useFetchAllPostsQuery } from "@/store/query";
import { useSearchParams } from "@/shared/lib";
import { css } from "@emotion/react";
import { PAGINATION_STEP } from "@/shared/constants";
import {Book} from "@/shared/types/index.ts";

export type Error = {
  data: {
    error: {
      message: string;
    };
  };
}

const styles = {
  root: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 30,
  }),
  loadMore: css({
    marginTop: 24,
  }),
  booksContainer: css({
    flexDirection: "row",
    gap: 32,
    flexWrap: "wrap",
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
              {isLoading ? <CircularProgress size={64} />
                          : <>
                    <Typography variant="h6">Found {responseData?.totalItems} results </Typography>
                    <Stack css={styles.booksContainer}>
                      {data.map((book, index) => (
                          <BookCard key={book.id + index} book={book} />
                      ))}
                    </Stack>
                    {!isEnd ? (
                        <Button
                            onClick={() => setStartIndex((prev) => prev + PAGINATION_STEP)}
                            variant="contained"
                            css={styles.loadMore}
                            disabled={isFetching}
                        >
                          {isFetching ? <CircularProgress size={16} /> : "Load more..."}
                        </Button>
                    ) : null}
                  </>
              }


          </>
      }
    </div>
  );
};

export default BooksCollection;
