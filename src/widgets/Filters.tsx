import { useEffect, useState } from "react";
import { SearchInput } from "@/features";
import { BOOK_CATEGORIES, SORT_TYPES } from "@/shared/constants";
import { useSearchParams } from "@/shared/lib";
import { Autocomplete } from "@/shared/ui";

const categoryOptions = Object.values(BOOK_CATEGORIES);
const filterOptions = Object.values(SORT_TYPES);

type Query = {
  search: string;
  subject: string;
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
    <div>
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
