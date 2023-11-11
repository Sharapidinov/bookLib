import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useSearchParams } from "@/shared/lib";

type FiltersProps = {
  name: string;
  options: string[];
  label: string;
};

export const Filters = ({ options, name, label }: FiltersProps) => {
  const [value, setValue] = useState<string>(options[0]);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value: string) => {
    setValue(value);
    setSearchParams({ ...searchParams, [name]: value });
  };

  return (
    <Autocomplete
      disablePortal
      options={options}
      value={value}
      onChange={(_, option) => handleChange(option || "")}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default Filters;
