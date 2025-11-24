# 🧪 Demo 5 — Paginación, Filtros y Query Params (React Router + API local)

Esta demo enseña un patrón muy usado en aplicaciones reales: **sincronizar la UI con la URL** usando _query params_.  
Esto permite crear interfaces totalmente compartibles, navegables y coherentes con el historial del navegador.

---

# 🎯 Objetivos de la demo

- Mantener **paginación**, **búsqueda** y **estado de la tabla** sincronizados con la URL.
- Usar `useSearchParams` de React Router.
- Crear un hook personalizado `useQueryParams` para simplificar el uso de query params.
- Realizar filtrado y paginación **en el frontend**, simulando una API real.
- Construir un flujo profesional presente en dashboards y CRUDs.

---

# 📁 Estructura

```

Demo5/
│── index.jsx
│── hooks/
│ └── useQueryParams.js
│── components/
│ ├── SearchBar.jsx
│ ├── Pagination.jsx
│ └── UsersTable.jsx

```

---

# 🧠 Conceptos clave

### 1. **La URL es una fuente de estado**

En aplicaciones profesionales (SaaS, admin panels…) la barra de direcciones **refleja el estado**:

```

?page=2&search=juan

```

Esto permite:

- Compartir la vista exacta mediante un enlace.
- Usar el botón “atrás” para deshacer filtros.
- Persistir la página actual incluso tras recargar.

---

### 2. `useSearchParams` de React Router

React Router permite leer y modificar query params:

```js
const [params, setParams] = useSearchParams();
params.get("page");
setParams(newParams);
```

Pero manejarlo directamente es tedioso → creamos un hook.

---

### 3. Hook `useQueryParams` (versión mejorada)

Este hook abstrae la gestión de parámetros:

- `getParam(key)` → leer
- `setParam(key, value)` → escribir
- `setParamsMulti({})` → actualizar varios a la vez (soluciona problemas de render)

Es útil y profesional, y evita código repetido en los componentes.

---

### 4. Filtrado + paginado

Para simular una API real:

1. Se obtienen los usuarios desde `userService.getUsers()`.
2. Se filtran por el texto buscado.
3. Se dividen en páginas.

Esto reproduce lo que ocurriría si la API soportase:

```
?search=...&page=...&limit=5
```

---

# 🧩 Funcionamiento del flujo

### 🔍 **Buscar**

- El usuario escribe en el input.
- Se actualizan **search** y **page=1** usando `setParamsMulti`.
- La URL cambia.
- El componente se re-renderiza automáticamente.
- Se recalculan filtros y paginación.

---

### 📄 **Cambiar de página**

- Al pulsar “Siguiente” o “Anterior”, se ejecuta:

```js
setParam("page", newPage);
```

- La URL se actualiza.
- El estado de la vista se mantiene sincronizado.

---

# 🔧 Código principal explicado

### Hook personalizado

```js
export default function useQueryParams() {
  const [params, setParams] = useSearchParams();

  function getParam(key) {
    return params.get(key);
  }

  function setParam(key, value) {
    const newParams = new URLSearchParams(params);
    if (!value) newParams.delete(key);
    else newParams.set(key, value);
    setParams(newParams);
  }

  function setParamsMulti(updates) {
    const newParams = new URLSearchParams(params);
    for (const [key, value] of Object.entries(updates)) {
      if (!value) newParams.delete(key);
      else newParams.set(key, value);
    }
    setParams(newParams);
  }

  return { getParam, setParam, setParamsMulti };
}
```

---

### Componente principal

- Sincroniza page y search con la URL.
- Filtra y pagina los datos.

```js
const page = Number(getParam("page")) || 1;
const search = getParam("search") || "";
```

---

### Filtrado

```js
const filtered = users.filter((u) =>
  u.name.toLowerCase().includes(search.toLowerCase())
);
```

---

### Paginación

```js
const start = (page - 1) * pageSize;
const paginated = filtered.slice(start, start + pageSize);
```

---

### Handlers principales

```js
const handleSearch = (value) => {
  setParamsMulti({
    search: value,
    page: 1,
  });
};

const handlePageChange = (newPage) => {
  setParam("page", newPage);
};
```

---

# 🧼 Resultado final

En esta demo obtenemos:

- Una tabla paginada
- Barra de búsqueda sincronizada con la URL
- Botones de paginación que funcionan como en una aplicación real
- Estado compartido vía URL (profesional y limpio)
- Un hook reutilizable para toda la app

---

# 🚀 Conclusión

Esta demo introduce uno de los pilares de una aplicación profesional basada en React Router: **la URL como primera fuente de verdad**.
Lo que se ha construido aquí es la base de paneles reales:

- dashboards
- sistemas de gestión
- tablas con filtros avanzados
- CRMs / ERPs / SaaS
