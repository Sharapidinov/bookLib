import { ChangeEvent, KeyboardEvent, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { css } from "@emotion/react";

const styles = {
  button: css({
    cursor: "pointer",
  }),
};

type SearchInputProps = {
  label: string;
  initialValue: string;
  onChange: (value: string) => void;
};

const SearchInput = ({ onChange, initialValue, ...rest }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState(initialValue || "");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onChange(inputValue);
    }
  };

  return (
    <div style={{ paddingTop: "30px" }}>
      <TextField
        {...rest}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
        fullWidth
        value={inputValue}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search css={styles.button} onClick={() => onChange(inputValue)} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchInput;
