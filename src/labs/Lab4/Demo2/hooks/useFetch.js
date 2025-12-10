import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                setLoading(true);

                const res = await fetch(url, { signal: controller.signal });

                if (!res.ok) throw new Error("Error al obtener los datos");

                const json = (await res.json())
                setData(json);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        }

        load();

        return () => controller.abort();
    }, [url]);

    return { data, loading, error };
}
