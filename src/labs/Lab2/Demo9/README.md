# 📘 Demo9 – Custom Hook: `useFetch`

## 🎯 Objetivo

Aprender a encapsular lógica reutilizable combinando `useState` y `useEffect` para crear **custom hooks** que puedan servir datos a cualquier componente.

---

## 🧩 1. Qué hace este hook

`useFetch(url)`:

- Obtiene datos desde una API.
- Maneja automáticamente:
  - `loading`: estado de carga.
  - `error`: errores de red o respuesta.
  - `data`: resultado obtenido.
- Expone también `refetch` para volver a ejecutar la petición manualmente.

---

## 🧠 2. Por qué crear un Custom Hook

En vez de repetir el mismo patrón en varios componentes:

```jsx
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

Podemos extraer la lógica común a un hook reutilizable y simplemente hacer:

```jsx
const { data, loading, error } = useFetch("/api/users");
```

Así mantenemos el código limpio, mantenible y testable.

### ⚙️ Funcionamiento interno

```jsx
useEffect(() => {
  fetchData();
}, [url]);
```

El hook se vuelve a ejecutar cuando la url cambia.
fetchData usa try/catch/finally para controlar los estados de carga y error.

### 💡 Buenas prácticas

✅ Prefiere un custom hook cuando la misma lógica se repite en distintos componentes.
✅ Usa nombres descriptivos: useFetch, useUser, useForm, useToggle, etc.
✅ Devuelve siempre un objeto con datos y funciones ({ data, loading, error, refetch }).
✅ Mantén el hook puro: no renderiza nada, solo gestiona lógica.

### 🌍 Ejemplos reales

- useAuth(): manejar login/logout.

- useTheme(): cambiar entre modo claro/oscuro.

- useForm(): gestionar formularios controlados.

- useFetch(): como en este caso, centralizar llamadas a APIs.

Este patrón es una de las bases del diseño moderno con React: extraer lógica reutilizable fuera de los componentes visuales.
