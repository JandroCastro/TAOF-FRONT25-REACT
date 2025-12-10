# Demo4 – El lugar idóneo para el estado

## 🎯 Objetivo

Aprender a **colocar el estado en el componente adecuado** para que todos los hijos que lo necesiten puedan acceder a él sin duplicar lógica ni props innecesarias.

---

## 🧠 Conceptos clave

### 🔹 1. Lifting State Up

Cuando varios componentes necesitan el mismo estado:

- No dupliques el estado en cada componente.
- Coloca el estado en el **padre común más cercano**.
- Pasa el estado y las funciones de actualización como props.

En la demo:

- `count` vive en el componente padre `Demo4`.
- `ChildA` puede leer y modificar `count`.
- `ChildB` solo lo lee.

### 🔹 2. Por qué es importante

- Evita inconsistencias de estado.
- Reduce complejidad.
- Facilita más adelante **usar `useContext`** para no tener que pasar props por muchos niveles.

### 🔹 3. Conexión con useContext

Si el contador necesitara ser accesible por muchos niveles de componentes:

- Pasar props sería tedioso.
- Aquí entra `useContext` para **compartir estado global** de forma sencilla.

---

## 💡 Buenas prácticas

✅ Coloca el estado donde **todos los componentes que lo necesiten puedan acceder a él**.  
✅ Evita duplicar estado en componentes hijos.  
✅ Usa funciones de actualización (`setState(prev => ...)`) si la actualización depende del estado anterior.  
✅ Cuando la jerarquía se vuelva profunda, considera `useContext` o un estado global.

---
