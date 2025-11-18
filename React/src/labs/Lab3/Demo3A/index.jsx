import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { RoleLayout } from './RoleLayout';
import { AuthProvider, useAuth } from './AuthContext';


function Login() {
  const { login } = useAuth();

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>

      <button onClick={() => login('admin')} style={{ marginRight: 10 }}>
        Entrar como Admin
      </button>

      <button onClick={() => login('user')}>
        Entrar como User
      </button>
    </div>
  );
}


function Layout() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Navegación</h1>

      <nav style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/user">User</Link>
      </nav>

      <Outlet />
    </div>
  );
}


function Home() {
  return <h2>Bienvenido. Usa la barra de navegación.</h2>;
}

function Unauthorized() {
  return <h1>Acceso no permitido</h1>;
}

function AdminDashboard() {
  return <h3>Sección exclusiva de admin</h3>;
}

function UserDashboard() {
  return <h3>Sección exclusiva de usuario</h3>;
}


export default function Demo3A() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route element={<RoleLayout />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              {/* </Route>
          </Route> */}

              <Route path="/unauthorized" element={<Unauthorized />} />


              <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                <Route path="/admin" element={<AdminDashboard />} />
              </Route>

              <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
                <Route path="/user" element={<UserDashboard />} />
              </Route>

            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
