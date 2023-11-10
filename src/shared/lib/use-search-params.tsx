import { useLocation, useNavigate } from "react-router-dom";

export default function useSearchParams<T extends string>() {
  const params = Object.fromEntries(new URLSearchParams(useLocation().search));

  const navigate = useNavigate();
  const setSearchParams = (newParams: Partial<Record<T, string>>) => {
    navigate("?" + new URLSearchParams({ ...params, ...newParams }).toString());
  };

  return [params, setSearchParams] as const;
}
