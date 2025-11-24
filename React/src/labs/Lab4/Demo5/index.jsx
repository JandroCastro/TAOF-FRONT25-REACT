import { useEffect, useState } from "react";
import { userService } from "../Demo4/api/userService";
import UsersTable from "./components/UsersTable";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import useQueryParams from "./hooks/useQueryParams";


export default function Demo5() {
    const { getParam, setParamsMulti, setParam } = useQueryParams();

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    // Query params sincronizados
    const page = Number(getParam("page")) || 1;
    const search = getParam("search") || "";
    const pageSize = 5;

    useEffect(() => {
        async function fetchUsers() {
            setLoading(true);
            try {
                const data = await userService.getUsers();
                setUsers(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    // --- FILTRO ---
    const filtered = users.filter(u =>
        u.name.toLowerCase().includes(search.toLowerCase())
    );

    // --- PAGINACIÓN ---
    const totalPages = Math.ceil(filtered.length / pageSize);
    const start = (page - 1) * pageSize;
    const paginated = filtered.slice(start, start + pageSize);

    // --- HANDLERS ---
    const handleSearch = (value) => {
        setParamsMulti({
            search: value,
            page: 1
        });
    };

    const handlePageChange = (newPage) => {
        setParam(
            'page', newPage
        );
    };


    return (
        <div style={{ padding: 20 }}>
            <h2>Demo 5 — Paginación, filtros y query params</h2>

            <SearchBar value={search} onChange={handleSearch} />

            {loading ? <p>Cargando...</p> : <UsersTable users={paginated} />}

            <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
