# Demo 1 – Consumo básico de API con `useEffect`

## 🎯 Objetivo

Introducir las bases del consumo de APIs HTTP en aplicaciones React utilizando **fetch** y **useEffect**.  
El objetivo es entender cómo realizar peticiones desde un componente y cómo gestionar su ciclo de vida.

En esta demo aprenderás a:

- Realizar una petición HTTP desde React.
- Usar `useEffect` para ejecutar efectos secundarios al montar un componente.
- Gestionar estados de **carga**, **éxito** y **error**.
- Cancelar peticiones en curso usando `AbortController`.
- Renderizar UI en función del estado de la petición.

---

## 🧠 Conceptos clave

### 📌 ¿Por qué usamos `useEffect` para hacer peticiones?

En React, el render debe ser **síncrono y puro**.  
Las peticiones HTTP son **efectos secundarios**, por lo que no deben ejecutarse durante el render.

`useEffect` permite:

- Ejecutar lógica una vez montado el componente.
- Mantener el render limpio.
- Controlar cuándo se ejecuta la petición (con dependencias).

```tsx
useEffect(() => {
  // Aquí va la petición
}, []);
```

El array vacío `[]` significa que se ejecuta **solo una vez**, ideal para cargar datos iniciales.

---

### 📌 Loading, error y data: los 3 estados esenciales

Toda petición HTTP profesional debe gestionar:

- **Loading** → mientras esperamos la respuesta.
- **Error** → si la petición falla.
- **Data** → cuando la respuesta llega correctamente.

Esto permite renderizar una UI coherente en cada fase.

---

### 📌 Cancelación de peticiones: `AbortController`

Si el componente se desmonta antes de terminar la petición, React puede lanzar advertencias o provocar _memory leaks_.

`AbortController` permite abortar la petición en el cleanup del efecto:

```tsx
const controller = new AbortController();

return () => controller.abort();
```

Es un patrón profesional imprescindible.

---

### 📌 Render condicional

La UI debe reaccionar al estado de la petición:

- Mostrar un mensaje o spinner mientras carga.
- Notificar errores.
- Renderizar los datos cuando están listos.

Esto ayuda a explicar por qué separar estados es crucial.

---

## ✔️ Qué se enseña en esta demo

- Cómo estructurar una petición HTTP básica en React.
- Por qué las peticiones van dentro de `useEffect`.
- Manejo completo del ciclo de carga (loading → data/error).
- Prevención de errores mediante `AbortController`.
- Render dinámico en función del estado.
- Codificación limpia como base para crear un **custom hook** en la Demo 2.

Es la base necesaria para el resto del Lab 4.

```

```
