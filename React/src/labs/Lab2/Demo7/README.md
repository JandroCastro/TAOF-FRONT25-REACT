# Demo7 – Contador con useReducer

## 🎯 Objetivo

Aprender a manejar estados complejos con `useReducer` y ver cómo externalizar la lógica permite simplificar el componente principal.

---

## 🧠 Conceptos clave

### 1. useReducer vs useState

- `useState` es ideal para estados simples (un valor o flag).
- `useReducer` es recomendable cuando hay múltiples transiciones de estado, lógica compleja o se quiere centralizar la gestión del estado.

Ejemplo: un contador con incrementos, decrementos y reset, donde varias acciones pueden afectar el mismo estado.

---

### 2. Función reductora (Reducer)

- Es una función pura que recibe el **estado actual** y una **acción** y devuelve un **nuevo estado**.
- Nunca se debe mutar directamente el estado; siempre se retorna uno nuevo.

```js
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Acción desconocida");
  }
}
```

### 3. Dispatch

Se usa para enviar acciones al reducer:

dispatch({ type: 'increment' });

Cada acción provoca que el reducer calcule un nuevo estado, que reemplaza al anterior.

### 4. Externalización del reducer

Podemos mover la función reductora y el estado inicial a un archivo aparte (counterReducer.js):

```js
export const initialState = { count: 0 };
export function counterReducer(state, action) { ... }
```

En el componente principal solo importamos:

```js
import { counterReducer, initialState } from "./counterReducer";
const [state, dispatch] = useReducer(counterReducer, initialState);
```

#### Ventajas:

Código más limpio y legible.

Facilita la reutilización del reducer en otros componentes.

Facilita los tests unitarios de la lógica de estado.

### 5. Buenas prácticas

Mantener la función reductora pura (sin efectos secundarios).

Usar constantes para los tipos de acción si el proyecto crece.

Nunca mutar el estado directamente, siempre retornar un nuevo objeto.

Externalizar lógica compleja para mantener limpio el JSX del componente.

### 6. Flujo del componente

Componente se monta → `useReducer` establece el estado inicial.

El usuario interactúa con los botones → se ejecuta `dispatch()` con la acción correspondiente.

Reducer calcula un nuevo estado y React vuelve a renderizar con ese valor.

Si usamos reducer externalizado, la lógica está separada del JSX y el componente se mantiene simple y legible.

### 7. Visualización en la demo

Count muestra el valor actual.

Botones: Incrementar, Decrementar, Reset.

Cada acción modifica el estado de manera predecible.

Externalización y dispatch permiten que la lógica se entienda y mantenga fácilmente.
