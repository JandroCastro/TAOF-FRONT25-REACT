export default function UserTable({ users, onEdit, onDelete }) {
    return (
        <table border="1" cellPadding="8" style={{ marginTop: 20 }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => onEdit(user)}>Editar</button>
                            <button onClick={() => onDelete(user.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
