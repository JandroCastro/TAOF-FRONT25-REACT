# Demo 3 – Redux Toolkit (createSlice)

## 🎯 Objetivo

Migrar el ejemplo anterior a Redux Toolkit para mostrar:

- Menos boilerplate
- Reducers más expresivos
- Actions autogeneradas
- Immutable updates sin esfuerzo (Immer)
- Store más sencillo

---

## 📁 Estructura

```

Demo3/
│
├── index.jsx
│
├── store/
│   ├── store.js
│   └── counterSlice.js
│
└── components/
└── Counter.jsx

```

---

## 📦 Dependencias

Ya instaladas en la demo anterior:

```bash
npm install react-redux @reduxjs/toolkit
```

---

## 🧠 Conceptos clave

### 1. createSlice

Agrupa **estado**, **reducers** y **actions** en un solo módulo.

```js
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
  },
});
```

### 2. Actions autogeneradas

```js
export const { increment, decrement, reset } = counterSlice.actions;
```

### 3. Reducer integrado

```js
export const counterReducer = counterSlice.reducer;
```

### 4. Store simplificado

```js
configureStore({ reducer: counterReducer });
```

---

## 🔗 Qué veremos en la Demo 4

- Integración de **createAsyncThunk**
- Ciclos de petición: pending, fulfilled, rejected
- Reducers extra con `extraReducers`
- Un flujo real de datos desde API

Esta demo completa el paso de Redux Clásico → Redux Toolkit con lógica síncrona.
