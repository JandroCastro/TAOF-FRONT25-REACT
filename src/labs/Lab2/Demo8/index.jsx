import { UserProvider } from './UserContext';
import { useUser } from './useUser';

function UserInfo() {
  const { user, login, logout, isLogged } = useUser();

  return (
    <div className="user-card">
      <h2>👤 Estado del usuario</h2>

      {!isLogged ? (
        <>
          <p>Nadie ha iniciado sesión.</p>
          <button onClick={() => login('Jandro')}>Iniciar sesión</button>
        </>
      ) : (
        <>
          <p>Bienvenido, <strong>{user.name}</strong></p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      )}
    </div>
  );
}

export default function Demo8() {
    //4 Usamos el proveedor para envolver los componentes que necesitan acceso al contexto
  return (
    <UserProvider>
      <div className="context-demo">
        <h1>🧩 useContext + Custom Hook (UserContext)</h1>
        <UserInfo />
      </div>
    </UserProvider>
  );
}
