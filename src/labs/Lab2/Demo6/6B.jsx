import { useState, useEffect } from 'react';
import './styles.css';

export default function Demo6B() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(1); // Para pedir usuarios consecutivos

  // Fetch inicial y cuando userId cambie (solo si lo usamos desde botón)
  const fetchUser = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!res.ok) throw new Error('Error en la petición');
      const data = await res.json();
      setUsers(prev => [...prev, data]); // Mantener los anteriores
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Fetch inicial
  useEffect(() => {
    fetchUser(userId);
  }, []); // Solo al montar

  const handleAddUser = () => {
    const nextId = userId + 1;
    fetchUser(nextId);
    setUserId(nextId);
  };

  return (
    <div className="fetch-demo">
      <h2>🌐 Lista de usuarios con Fetch</h2>

      {loading && <p>Cargando usuario...</p>}
      {error && <p className="error">Error: {error}</p>}

      <ul className="user-list">
        {users.map(user => (
          <li key={user.id} className="user-card">
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Ciudad:</strong> {user.address.city}</p>
          </li>
        ))}
      </ul>

      <button onClick={handleAddUser}>Pedir siguiente usuario</button>
    </div>
  );
}
