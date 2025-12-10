# Demo 2 – Redux Clásico (con store moderno)

## 🎯 Objetivo

Comprender el flujo fundamental de Redux **sin usar Redux Toolkit para reducers**, pero utilizando `configureStore` para evitar APIs obsoletas.

En esta demo verás:

- Reducer puro hecho a mano
- Actions + action creators
- Store global
- Dispatch + Selector
- Conexión con React mediante `Provider`

Esta base permitirá entender qué problema resuelve Redux Toolkit en la siguiente demo.

---

## 📁 Estructura del proyecto

```

Demo2/
│
├── index.jsx
│
├── store/
│   ├── store.js
│   ├── counterReducer.js
│   └── counterActions.js
│
└── components/
└── Counter.jsx

```

---

## 📦 Instalación necesaria

Para esta demo solo necesitas:

```bash
npm install react-redux @reduxjs/toolkit
```

- `react-redux`: para usar Provider, useSelector, useDispatch
- `@reduxjs/toolkit`: solo para `configureStore` (no usamos createSlice todavía)

> **Nota:** No es necesario instalar `redux`, ya viene incluido dentro de Redux Toolkit.

---

## 🚀 Ejecución

Esta demo se monta dentro de tu `Lab5`, así que únicamente debes importarla donde corresponda:

```jsx
import Demo2 from "./Demo2/index";
```

---

## 🧠 Conceptos clave

### 1. Store global creado con `configureStore`

```js
export const store = configureStore({
  reducer: counterReducer,
});
```

### 2. Reducer clásico

```js
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    ...
  }
}
```

### 3. Actions y action creators

```js
export const increment = () => ({ type: "INCREMENT" });
```

### 4. Hooks de React-Redux

```jsx
const count = useSelector((state) => state.count);
const dispatch = useDispatch();
```

---

## 🔗 Conexión con la Demo 3

Gracias a esta demo podrás comprender claramente:

- Qué partes de Redux son puro boilerplate
- Qué pasos son repetitivos (types, creators, switch)
- Por qué Redux Toolkit simplifica el flujo
- Cómo `createSlice` genera actions y reducers automáticamente

En la **Demo 3** migraremos este mismo ejemplo a **Redux Toolkit** usando `createSlice`, manteniendo la misma UI para apreciar el cambio.

![alt text](image.png)
