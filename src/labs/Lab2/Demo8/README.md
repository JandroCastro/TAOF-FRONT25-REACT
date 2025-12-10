# 📘 Demo8 – useContext + Custom Hook (Gestión de Usuario)

## 🎯 Objetivo

Entender cómo compartir el estado del **usuario autenticado** en toda la aplicación usando `useContext`, y cómo simplificar su consumo mediante un **custom hook `useUser()`**.

---

## 🧩 1. Contexto global de usuario

React permite compartir datos globales como el usuario logueado, el idioma o el tema sin pasar props manualmente.

En este caso, `UserContext` gestiona:

- `user`: información del usuario actual (nombre, email, rol…).
- `login(name)`: simula el inicio de sesión.
- `logout()`: cierra la sesión.
- `isLogged`: indica si hay un usuario activo.

```jsx
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (name) =>
    setUser({ name, email: `${name}@mail.com`, role: "user" });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout, isLogged: !!user }}>
      {children}
    </UserContext.Provider>
  );
}
```

### 🧠 2. Custom hook: useUser()

Para no importar y usar useContext(UserContext) en cada componente, creamos un custom hook que encapsula esa lógica:

```jsx
export function useUser() {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUser debe usarse dentro de un UserProvider");
  return context;
}
```

Ahora desde cualquier componente:

```jsx
const { user, login, logout, isLogged } = useUser();
```

### 🧩 3. Ejemplo de uso

```jsx
function UserInfo() {
  const { user, login, logout, isLogged } = useUser();

  return (
    <div>
      {!isLogged ? (
        <>
          <p>Nadie ha iniciado sesión.</p>
          <button onClick={() => login("Jandro")}>Iniciar sesión</button>
        </>
      ) : (
        <>
          <p>Bienvenido, {user.name}</p>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      )}
    </div>
  );
}
```

### 💡 Buenas prácticas

✅ Usa useContext para información global que realmente lo sea (auth, tema, idioma, etc.).
✅ Combínalo con useReducer si el estado es complejo.
✅ Crea siempre un custom hook (useUser, useAuth, useSettings) para simplificar su consumo.
✅ Evita contextos enormes con demasiada lógica o dependencias.

### 🧩 4. Ejemplo real de uso

- Este patrón es habitual en:

- Apps con login (JWT, Clerk, Firebase…)

- Dashboards con roles de usuario

- Aplicaciones que necesitan información del perfil en cualquier pantalla

- Sistemas de permisos y navegación condicional
