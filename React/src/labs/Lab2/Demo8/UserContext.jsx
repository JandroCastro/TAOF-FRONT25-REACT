import { createContext, useState } from 'react';

//1 Creamos el contexto
export const UserContext = createContext();


//2 Creamos el proveedor
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (name) => {
    setUser({ name, email: `${name.toLowerCase()}@mail.com`, role: 'user' });
  };

  const logout = () => setUser(null);

  const value = { user, login, logout, isLogged: !!user };

  //3 en value servimos la información que queramos compartir

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
