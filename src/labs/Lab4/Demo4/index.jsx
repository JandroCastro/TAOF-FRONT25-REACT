import { useEffect, useState } from "react";
import { userService } from "./api/userService";
import UserTable from "./components/UserTable";

export default function Demo4() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadUsers();
    }, []);

    async function loadUsers() {
        setLoading(true);
        try {
            const data = await userService.getUsers();
            setUsers(data);
        } catch (err) {
            alert("Error cargando usuarios");
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(id) {
        if (!confirm("¿Seguro que quieres borrar este usuario?")) return;

        try {
            await userService.deleteUser(id);
            setUsers(prev => prev.filter(u => u.id !== id));
        } catch {
            alert("No se pudo eliminar");
        }
    }

    async function handleEdit(user) {
        const newName = prompt("Nuevo nombre", user.name);
        if (!newName) return;
        try {
            const updated = await userService.updateUser(user.id, { ...user, name: newName });
            setUsers(prev => prev.map(u => u.id === user.id ? updated : u));
        } catch {
            alert("No se pudo actualizar");
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Demo 4 — Axios + API Service</h1>
            {loading ? <p>Cargando...</p> : null}
            <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}
