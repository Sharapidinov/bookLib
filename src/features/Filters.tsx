import React, {useState} from 'react';
import {Autocomplete, TextField} from "@mui/material";

const Filters = ({sort,label}) => {
    const [value, setValue] = useState(sort[0])

    return (
        <>
            <Autocomplete
                disablePortal
                options={sort}
                value={value}
                onChange={(_,option) => setValue(option)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label={label} />}
            />
        </>
    );
};

export default Filters;