import React, { ChangeEvent, KeyboardEvent } from 'react';
import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";

const SearchInput = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParams({
            ...searchParams,
            q: e.target.value
        });
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            // Вызывайте вашу функцию после нажатия Enter здесь
            // Например, отправка запроса или навигация
            console.log('Enter pressed. Do something...');
        }
    };

    return (
        <div style={{ paddingTop: "30px" }}>
            <TextField
                onChange={handleSearchInput}
                onKeyDown={handleKeyDown}
                fullWidth
                label="Outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Search />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};

export default SearchInput;
