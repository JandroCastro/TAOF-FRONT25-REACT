# Demo6 – Lista de usuarios con Fetch

## 🎯 Objetivo

Aprender a:

- Hacer fetch a una API usando `useEffect`.
- Añadir nuevos datos a un estado existente sin perder los anteriores.
- Manejar loading y errores de manera clara.

---

## 🧠 Conceptos clave

1. **Estado acumulativo**
   - `setUsers(prev => [...prev, data])` permite mantener los usuarios previos.
2. **Botón para pedir más usuarios**
   - Cada click incrementa `userId` y hace fetch del siguiente usuario.
3. **useEffect inicial**
   - Solo ejecuta el fetch inicial al montar el componente.
4. **Loading y error**
   - `loading` indica que la petición está en curso.
   - `error` captura posibles errores.

---

## ⚙️ Funcionamiento

1. Componente se monta → se carga el primer usuario.
2. Cada click en “Pedir siguiente usuario” → fetch del usuario siguiente.
3. La lista de usuarios se va actualizando acumulativamente.
4. Loading y errores se muestran correctamente durante la petición.

---

## 💡 Buenas prácticas

- Siempre usar el estado anterior cuando actualices listas.
- Controlar loading y error para dar feedback al usuario.
- Mantener efectos independientes claros en `useEffect`.
