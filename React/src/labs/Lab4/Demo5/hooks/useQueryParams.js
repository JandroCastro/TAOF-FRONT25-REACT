import { useSearchParams } from "react-router-dom";

export default function useQueryParams() {
    const [params, setParams] = useSearchParams();



    function getParam(key) {
        return params.get(key);
    }

    function setParam(key, value) {
        const newParams = new URLSearchParams(params);
        if (value === null || value === "") {
            newParams.delete(key);
        } else {
            newParams.set(key, value);
        }
        setParams(newParams);
    }

    function setParamsMulti(updates) {
        const newParams = new URLSearchParams(params);

        for (const [key, value] of Object.entries(updates)) {
            if (value === null || value === "") {
                newParams.delete(key);
            } else {
                newParams.set(key, value);
            }
        }

        setParams(newParams);
    }

    return { getParam, setParam, setParamsMulti };
}
