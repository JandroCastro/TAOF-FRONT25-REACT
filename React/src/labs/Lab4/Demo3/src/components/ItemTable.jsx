export default function ItemTable({ items, onEdit, onDelete }) {
    return (
        <table border="1" cellPadding="8">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio (€)</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <button onClick={() => onEdit(item)}>Editar</button>
                            <button onClick={() => onDelete(item.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
