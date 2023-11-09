import React from 'react';
import SearchInput from "../features/SearchInput";
import Filters from "../features/Filters";
import {BOOK_CATEGORIES, SORT_TYPES} from "../shared/constants/bookFilters";

const categoryOptions = Object.values(BOOK_CATEGORIES)
const filterOptions = Object.values(SORT_TYPES)

const SearchBlock = () => {
    return (
        <div>
            <SearchInput/>
            <Filters sort={categoryOptions} label={"Categories"}/>
            <Filters sort={filterOptions} label={"Sorting by"} />
        </div>
    );
};

export default SearchBlock;