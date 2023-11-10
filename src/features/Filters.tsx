import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import useSearchParams from "../shared/lib/use-search-params";

type FiltersProps = {
  name: string;
  options: string[];
  label: string;
};

const Filters = ({ options, name, label }: FiltersProps) => {
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
      css={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default Filters;
