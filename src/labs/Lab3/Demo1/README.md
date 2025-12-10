# Demo 1 – Enrutamiento básico con React Router

## 🎯 Objetivo

Introducir las bases del enrutamiento en aplicaciones React utilizando **React Router DOM**, el estándar de facto para gestionar navegación en Single Page Applications.

En esta demo aprenderás a:

- Configurar el enrutamiento con `BrowserRouter`.
- Declarar rutas con `Routes` y `Route`.
- Navegar sin recargar la página usando `Link`.
- Comprender por qué React Router controla la URL desde el cliente.

---

## 🧠 Conceptos clave

### 📌 ¿Qué es `BrowserRouter`?

Es el componente que **habilita el sistema de enrutamiento**. Escucha cambios en la URL y permite a React Router decidir qué componente renderizar.

➡️ Usa la API de _History_ del navegador (`pushState`, `popstate`) en lugar de recargar la página.

---

### 📌 `Routes` y `Route`

- `Routes` analiza la URL actual.
- Cada `Route` define un camino (`path`) y el componente que se debe renderizar (`element`).

Son el equivalente a un “switch” de rutas, pero optimizado.

---

### 📌 Navegación declarativa: `Link`

`<Link>` evita recargar la página.

```jsx
<Link to="/about">About</Link>
```

Esto cambia la URL internamente y React Router actualiza la UI.

**Nunca uses `<a href>` salvo para enlaces externos**, porque fuerza una recarga completa.

---

## 📄 Archivos

### `index.jsx`

Contiene:

- Configuración del router.
- Declaración del menú de navegación.
- Definición de rutas simples (`/` y `/about`).

---

## ✔️ Qué se enseña en esta demo

- Cómo estructurar rutas básicas en React.
- Navegación sin recarga mediante `Link`.
- Relación entre URL y componente renderizado.
- Configuración mínima para empezar a usar React Router.

Es la base necesaria para el resto del Lab 3.
