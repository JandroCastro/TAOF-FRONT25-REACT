import { useEffect, useState } from "react";

export function useApi(apiFn, ...args) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await apiFn(signal, ...args); // el hook pasa el signal
                setData(res.data);
            } catch (err) {
                if (err.code === "ERR_CANCELED") {
                    console.log("Petición cancelada al desmontar");
                    return;
                }
                setError(err.message || "Error al cargar datos");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => controller.abort(); // cancelación al desmontar
    }, [apiFn, ...args]);

    return { data, loading, error };
}
