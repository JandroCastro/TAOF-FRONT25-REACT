export default function UsersTable({ users }) {
    return (
        <table border="1" cellPadding="8" style={{ width: "100%", marginTop: 10 }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
