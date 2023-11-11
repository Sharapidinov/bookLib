import { Autocomplete as MuiAutocomplete, TextField, css } from "@mui/material";

type AutocompleteProps = {
  label: string;
  options: string[];
  onChange: (value: string) => void;
  value: string;
};

const styles = {
  root: css({
    '@media (max-width: 767.98px)': {
      width: 'calc(50% - 8px)'
    },
  }),
};

export const Autocomplete = ({
  options,
  label,
  onChange,
  ...rest
}: AutocompleteProps) => {
  return (
    <MuiAutocomplete
      css={styles.root}
      {...rest}
      options={options}
      onChange={(_, option) => onChange(option as string)}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
