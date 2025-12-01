# Demo 4 – CRUD con Redux Toolkit y Selectores Memoizados

## 🎯 Objetivo

En esta demo los alumnos aprenderán:

1. Cómo manejar un **CRUD completo** con `createSlice` y `createAsyncThunk`.
2. Cómo gestionar **errores individuales** y estados de carga (`loading`).
3. Cómo usar **selectores simples** y **selectores memoizados** (`createSelector`) para derivar datos.
4. La diferencia entre acceder directamente al estado, usar selectores simples y selectores complejos.
5. Cómo escalar Redux en un proyecto más grande y mantener la lógica clara y reusable.

Esta demo combina los conceptos de Redux con una **base de datos fake** y operaciones simuladas para que los alumnos vean los efectos de la memoización y la optimización de renders.

---

## 📁 Estructura del proyecto

```
src/
│
├── features/
│   ├── posts/
│   │   ├── postsSlice.js          # Slice con CRUD fake y errores aleatorios
│   │   ├── postsSelectors.js      # Selectores simples y memoizados
│   │   └── PostsStateDirect.jsx   # Componente usando estado directo
│   │   └── PostsSimpleSelectors.jsx # Componente usando selectores simples
│   │   └── PostsMemoizedSelectors.jsx # Componente usando selectores complejos/memoizados
│
└── index.jsx                      # Punto de entrada de la Demo
```

---

## 🚀 Cómo ejecutar

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

3. Abrir en el navegador en `http://localhost:3000` (o el puerto configurado).

---

## 🔹 Teoría y conceptos clave

### 1️⃣ Slice y Thunks

- `createSlice` permite definir **reducers y estado inicial** de forma compacta.
- `createAsyncThunk` simplifica **acciones asíncronas**, integrando `pending`, `fulfilled` y `rejected`.
- Se manejan errores individuales por operación (`fetch`, `add`, `update`, `delete`) para un control fino de la UI.

### 2️⃣ Datos iniciales más visuales

El set de datos tiene:

```js
[
  { id: 1, title: "Introducción a Redux", author: "DEV" },
  { id: 2, title: "Redux Toolkit Avanzado", author: "DEV" },
  { id: 3, title: "useReducer vs Redux", author: "Jandro" },
  { id: 4, title: "Optimización con createSelector", author: "Jandro" },
  { id: 5, title: "Thunks Async", author: "Alice" },
  { id: 6, title: "Errores y manejo de estados", author: "Bob" },
  { id: 7, title: "Renderizado memoizado", author: "Alice" },
  { id: 8, title: "CRUD completo con RTK", author: "Charlie" },
];
```

Esto permite **probar filtros, conteos y resúmenes**, mostrando claramente la utilidad de los selectors.

---

### 3️⃣ Selectores

#### a) Selectores simples

```js
export const selectPosts = (state) => state.posts.items;
export const selectLoading = (state) => state.posts.loading;
export const selectErrors = (state) => state.posts.errors;
```

- Devuelven datos directos del estado.
- Útiles para componentes pequeños o prototipos.

#### b) Selectores memoizados (createSelector)

```js
export const selectPostsByAuthor = (author) =>
  createSelector([selectPosts], (posts) =>
    posts.filter((p) => p.author === author)
  );

export const selectPostCountByKeyword = (keyword) =>
  createSelector(
    [selectPosts],
    (posts) => posts.filter((p) => p.title.includes(keyword)).length
  );

export const selectPostsSummaryByAuthor = createSelector(
  [selectPosts],
  (posts) => {
    const summary = {};
    posts.forEach((p) => {
      summary[p.author] = (summary[p.author] || 0) + 1;
    });
    return summary;
  }
);
```

- Solo recalculan si **cambian sus inputs** → optimización de render.
- Devuelven la **misma referencia** si no hay cambios → evita re-renders innecesarios.
- Permiten **derivar datos complejos** sin ensuciar los componentes.

---

### 4️⃣ Tres enfoques de consumo

| Componente                   | Qué consume                     | Para qué sirve                                |
| ---------------------------- | ------------------------------- | --------------------------------------------- |
| `PostsStateDirect.jsx`       | `state.posts` directo           | Ver cómo se accede al estado sin selectors    |
| `PostsSimpleSelectors.jsx`   | Selectores simples              | Código más limpio, reutilizable               |
| `PostsMemoizedSelectors.jsx` | Selectores complejos/memoizados | Optimización de renders y derivación de datos |

---

### 5️⃣ Qué aprendemos

1. Cómo manejar un **CRUD completo** con RTK y thunks.
2. Cómo gestionar **errores por operación** y estados de carga.
3. Diferencia entre acceder al estado directo y usar **selectores simples vs memoizados**.
4. Cómo **escalar un slice** para aplicaciones grandes con filtros, conteos y resúmenes.
5. Principio de **optimización de renders con memoización**, base para apps eficientes.

---

💡 **Tip**: Para ver la potencia de los selectors complejos, cambiar los filtros (`authorFilter` o `keyword`) en `PostsMemoizedSelectors.jsx`. Observar cómo los renders de lista solo ocurren cuando realmente cambian los datos relevantes.

![alt text](image.png)
