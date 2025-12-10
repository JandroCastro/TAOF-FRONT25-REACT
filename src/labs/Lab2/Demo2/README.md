# Demo2 – Buenas y malas prácticas con useState

## 🎯 Objetivo

Comprender cómo React gestiona el estado y por qué **no debe modificarse directamente**.  
La inmutabilidad es clave para que React detecte los cambios y renderice correctamente los componentes.

---

## 🧠 Conceptos clave

### 🔹 1. El estado es **inmutable**

React detecta cambios comparando **referencias**.  
Si mutas el estado directamente (por ejemplo con `.push()`, `.splice()` o modificando propiedades de un objeto), **la referencia no cambia** → React no renderiza de nuevo.

### 🔹 2. `setState` crea un nuevo estado

Cuando llamas a `setState`, React planifica un nuevo render con una **nueva referencia** del estado.  
Por eso, al actualizar arrays u objetos debes crear copias:

```js
// Correcto
setItems((prev) => [...prev, newItem]);
setUser((prev) => ({ ...prev, name: "Nuevo" }));
```
