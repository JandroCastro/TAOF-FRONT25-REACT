# Demo 1 – Introducción a Redux desde useReducer

## 🎯 Objetivo

Mostrar cómo `useReducer` actúa como puente conceptual hacia Redux:

- Usa _reducer functions_
- Trabaja con _actions_
- Mantiene la lógica en funciones puras
- Separa la UI de la gestión del estado

Esta demo establece la base para entender por qué Redux se construye sobre estas mismas ideas, pero aplicadas a un estado global.

---

## 📁 Estructura del proyecto

```

src/
│
├── reducer/
│ ├── counterActions.js # action types + creators
│ └── counterReducer.js # reducer + initialState
│
└── components/
└── Counter.jsx # uso práctico con useReducer

```

---

## 🚀 Cómo ejecutar

1. Instalar dependencias:

```bash
npm install
```

2. Levantar el servidor de desarrollo:

```bash
npm run dev
```

---

## 🧠 Conceptos clave

### 1. Estado inicial

```js
export const initialState = { count: 0 };
```

### 2. Reducer puro

```js
export function counterReducer(state, action) {
  ...
}
```

### 3. Actions

```js
{
  type: "INCREMENT";
}
```

### 4. useReducer en React

```jsx
const [state, dispatch] = useReducer(counterReducer, initialState);
```

---

## 🔗 Transición hacia Redux

En la siguiente demo se verá:

- Cómo este reducer pasa a un _store global_
- Cómo `dispatch` deja de ser local
- Cómo Redux añade herramientas y patrones de predictibilidad

Esta demo es el “piso 0” de toda la arquitectura de Redux.

![alt text](image.png)
