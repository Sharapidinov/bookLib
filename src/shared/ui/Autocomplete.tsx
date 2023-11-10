import { Autocomplete as MuiAutocomplete, TextField } from "@mui/material";

type AutocompleteProps = {
  label: string;
  options: string[];
  onChange: (value: string) => void;
  value: string;
};

export const Autocomplete = ({
  options,
  label,
  onChange,
  ...rest
}: AutocompleteProps) => {
  return (
    <MuiAutocomplete
      {...rest}
      options={options}
      onChange={(_, option) => onChange(option as string)}
      css={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
