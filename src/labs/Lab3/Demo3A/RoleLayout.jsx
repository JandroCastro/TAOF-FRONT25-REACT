import { Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

export function RoleLayout() {
  const { user } = useAuth();


  return (
    <div>
      <header>
        {user ? <>
          {user.role === 'admin' && <h2>Panel de Administración</h2>}
          {user.role === 'user' && <h2>Área de Usuario</h2>}
          {user.role === 'guest' && <h2>Contenido Público</h2>}
        </> : <h2>Sin loguear</h2>
        }
      </header>

      <Outlet />
    </div>
  );
}
