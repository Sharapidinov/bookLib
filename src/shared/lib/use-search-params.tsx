import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useSearchParams<T extends string>() {
    const location = useLocation();
    const params = useMemo(
        () => Object.fromEntries(new URLSearchParams(location.search)),
        [location]
    );

    const navigate = useNavigate();
    const setSearchParams = (newParams: Partial<Record<T, string>>) => {
        navigate(
            "?" + new URLSearchParams({ ...params, ...newParams }).toString()
        );
    };

    return [params, setSearchParams] as const;
}
