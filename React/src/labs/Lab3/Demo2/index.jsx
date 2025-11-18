import { BrowserRouter, Routes, Route, useParams, Link, Outlet } from 'react-router-dom';

const users = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
];

function Layout() {
  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Home</Link> | <Link to="/users">Usuarios</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Home() {
  return <h1>Bienvenido a la Demo de Rutas Dinámicas</h1>;
}

function Users() {
  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserLayout() {
  const { id } = useParams();
  const user = users.find(u => u.id === id);

  if (!user) return <h1>Usuario no encontrado</h1>;

  return (
    <div>
      <h1>{user.name}</h1>
      <nav style={{ marginBottom: 10 }}>
        <Link to="profile">Perfil</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function UserProfile() {
  const { id } = useParams();
  return <p>Información de perfil del usuario #{id}</p>;
}

export default function Demo2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />

          {/* RUTA ANIDADA */}
          <Route path="/users/:id" element={<UserLayout />}>
            <Route path="profile" element={<UserProfile />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
