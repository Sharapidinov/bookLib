import { useState, useEffect } from "react";
import { Button, Stack } from "@mui/material";
import BookCard from "../entites/BookCard";
import { useFetchAllPostsQuery } from "../store/query/BookQuery";
import useSearchParams from "../shared/lib/use-search-params";
import { css } from "@emotion/react";

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
};

const BooksCollection = () => {
  const [searchParams] = useSearchParams();
  const [startIndex, setStartIndex] = useState(0);
  const [data, setData] = useState([]);

  const {
    data: responseData,
    error,
    isFetching,
    isPreviousData,
  } = useFetchAllPostsQuery({
    ...searchParams,
    startIndex,
  });

  useEffect(() => {
    if (responseData && responseData.items) {
      setData((prevData) => [...prevData, ...responseData.items]);
    }
  }, [responseData]);

  const onLoadMore = () => {
    if (!isFetching && !isPreviousData && responseData?.totalItems > startIndex) {
      setStartIndex((prev) => prev + 10); // Измените количество элементов на ваш выбор
    }
  };

  return (
      <div css={styles.root}>
        <Stack direction={"row"} gap={"32px"} flexWrap="wrap">
          {(data || []).map((book, index) => (
              <BookCard key={book.id + index} book={book} />
          ))}
        </Stack>
        <Button
            onClick={onLoadMore}
            variant="contained"
            css={styles.loadMore}
            disabled={isFetching || isPreviousData || !responseData?.totalItems}
        >
          {isFetching ? "Loading..." : "Load more..."}
        </Button>
      </div>
  );
};

export default BooksCollection;
