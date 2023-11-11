import { useEffect, useState } from "react";
import { SearchInput } from "@/features";
import { BOOK_CATEGORIES, SORT_TYPES } from "@/shared/constants";
import { useSearchParams } from "@/shared/lib";
import { Autocomplete } from "@/shared/ui";
import { css } from "@emotion/react";

const categoryOptions = Object.values(BOOK_CATEGORIES);
const filterOptions = Object.values(SORT_TYPES);

type Query = {
  search: string;
  subject: string;
};

const styles = {
  root: css({
    background: 'white',
    padding: '16px',
    borderRadius: '10px',
    display: "grid",
    gridTemplateColumns: '1fr 0.4fr 0.4fr',
    gap: '16px',
    '@media (max-width: 767.98px)': {
      display: "flex",
      flexWrap: 'wrap',
    },
    '@media (max-width: 599px)': {
      gridTemplateColumns: '1fr',
      padding: '12px 16px',
    },
  }),
};

const Filters = () => {
  const [query, setQuery] = useState<Query>({
    search: "",
    subject: BOOK_CATEGORIES.ALL,
  });
  const [orderBy, setOrderBy] = useState<string>(SORT_TYPES.RELEVANCE);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const formattedQuery = Object.values(query)
      .filter((el) => !!el)
      .join("+");
    setSearchParams({ ...searchParams, orderBy, q: formattedQuery });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, orderBy]);

  const handleQueryChange = (value: string, key: string) => {
    setQuery((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div css={styles.root}>
      <SearchInput
        label="Search"
        onChange={(value) => handleQueryChange(value, "search")}
        initialValue={searchParams.search}
      />
      <Autocomplete
        options={categoryOptions}
        label="Categories"
        value={query.subject}
        onChange={(value) => handleQueryChange(value, "subject")}
      />
      <Autocomplete
        options={filterOptions}
        label="Sorting by"
        value={orderBy}
        onChange={(value) => setOrderBy(value)}
      />
    </div>
  );
};

export default Filters;
