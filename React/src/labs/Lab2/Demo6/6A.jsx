import React, { useEffect, useState } from 'react'

function Demo6A() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUser = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1', { signal });
        if (!res.ok) throw new Error('Error en la petición');
        const data = await res.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchUser();

    // Cleanup para cancelar fetch si el componente se desmonta
    return () => controller.abort();
  }, []);

  return (
    <div className="fetch-demo">
      <h2>🌐 Fetch de datos con useEffect</h2>

      {loading && <p>Cargando usuario...</p>}
      {error && <p className="error">Error: {error}</p>}
      {user && (
        <div className="user-card">
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Ciudad:</strong> {user.address.city}</p>
        </div>
      )}
    </div>
  );
}

export default Demo6A