import { useApi } from "./hooks/useApi";
import { getContracts } from './services/contractsApi'

export function Demo6() {
    const { data, loading, error } = useApi(getContracts);

    return (
        <div style={{ padding: "1rem" }}>
            <h1>Contacts / Users</h1>

            {loading && <p style={{ color: "blue" }}>Cargando datos...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <ul>
                {data?.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}
