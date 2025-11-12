# Demo3 – Actualizaciones de estado asíncronas

## 🎯 Objetivo

Entender cómo React gestiona las **actualizaciones de estado** y por qué, cuando se ejecutan varias seguidas, el resultado puede no ser el esperado si no usamos la forma funcional de `setState`.

---

## 🧠 Conceptos clave

### 🔹 1. React no actualiza el estado inmediatamente

React **agrupa (batch)** varias actualizaciones de estado para optimizar los renderizados.  
Eso significa que si llamas varias veces seguidas a `setCount(count + 1)`, **todas verán el mismo valor de `count`** (el actual del render), y solo aplicarás una actualización.

```js
// ❌ Mal: las tres usan el mismo valor de count
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
// Resultado final: +1
```

### 🔹 2. setState puede recibir una función

Para solucionar esto, setState (por ejemplo, setCount) puede recibir una función de actualización.
Esa función no la ejecutas tú, la ejecuta React internamente, pasándole como argumento el valor más reciente del estado.

```js
// ✅ Bien: React pasa el estado actual a cada llamada
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
// Resultado final: +3
```

En esa función, `prev` representa el valor anterior del estado, que React inyecta automáticamente.
No hay magia: es el mismo principio que cuando haces array.map(item => ...); map te pasa item en cada iteración.

### 🔹 3. ¿Por qué esto importa?

En situaciones donde actualizas el estado varias veces seguidas (como en contadores, formularios o lógicas de negocio), **usar el valor anterior es esencial** para evitar resultados inconsistentes.

---

### ⚙️ Funcionamiento de esta demo

| Ejemplo           | Qué hace                                     | Resultado            |
| ----------------- | -------------------------------------------- | -------------------- |
| ❌ **Incorrecto** | Llama 3 veces a `setCount(count + 1)`        | Solo suma 1          |
| ✅ **Correcto**   | Llama 3 veces a `setCount(prev => prev + 1)` | Suma correctamente 3 |

---

### 💬 Analogía

Imagina que `setCount` es una nota que le dejas a React:

- Si le dices **“pon count = count + 1”**, todas las notas usan el mismo valor (el viejo).
- Si le dices **“usa el valor más reciente y súmale 1”**, React aplica los cambios uno tras otro, correctamente.

---

### 💡 Buenas prácticas

- ✅ Usa la forma `setX(prev => nuevaVersionDe(prev))` siempre que tu nueva actualización dependa del valor actual.
- ✅ Evita confiar en el valor de estado “en memoria” dentro del mismo render.
- ✅ Ten presente que los cambios de estado **no son inmediatos**.
