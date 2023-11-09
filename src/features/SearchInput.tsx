import React, { ChangeEvent, KeyboardEvent, useState, useRef } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useSearchParams , useParams} from "react-router-dom";
import { useClickOutside } from "../shared/lib/use-click-outside";
import {css} from "@emotion/react";

const styles={
    button:css({
        cursor:"pointer"
    })
}

const SearchInput = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchInput, setSearchInput] = useState(searchParams.get("q") || "");
    const searchInputRef = useRef();
    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const changeSearchParams = () => {

        setSearchParams({
            ...searchParams,
            ...(!!searchInput && { q: searchInput }),
        });
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            changeSearchParams();
        }
    };

    useClickOutside(searchInputRef, changeSearchParams);

    return (
        <div style={{ paddingTop: "30px" }}>
            <TextField
                onChange={handleSearchInput}
                onKeyDown={handleKeyDown}
                fullWidth
                ref={searchInputRef}
                value={searchInput}
                label="Outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Search
                                css={styles.button}
                                onClick={changeSearchParams}
                            />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};

export default SearchInput;