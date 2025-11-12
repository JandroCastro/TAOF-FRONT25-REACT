import { useFetch } from './useFetch';
import './styles.css';

export default function Demo9() {
  const { data: users, loading, error, refetch } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  return (
    <div className="custom-hook-demo">
      <h2>🪝 Custom Hook: useFetch</h2>

      {loading && <p className="status">Cargando usuarios...</p>}
      {error && <p className="error">Error: {error}</p>}

      {users && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> – {user.email}
            </li>
          ))}
        </ul>
      )}

      <button onClick={refetch}>🔄 Volver a cargar</button>
    </div>
  );
}
