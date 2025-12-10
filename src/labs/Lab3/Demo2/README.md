# 🧩 Demo 2 – Rutas Dinámicas + Nested Routes

Esta demo muestra cómo implementar **rutas dinámicas** y **rutas anidadas (nested routes)** con React Router v6.  
Es un patrón típico para aplicaciones que tienen páginas dependientes de un recurso (usuarios, productos, artículos, etc.).

---

## 🎯 Objetivos de la Demo

- Crear rutas básicas y dinámicas.
- Usar `useParams()` para acceder a parámetros de la URL.
- Definir un **Layout global** compartido entre todas las rutas.
- Implementar **nested routes**, donde una ruta hijo existe dentro del contexto de una ruta padre.
- Construir una estructura realista de navegación entre listas y detalles.

---

## 🛣️ Conceptos clave usados

### 1. **Rutas Dinámicas (`/users/:id`)**

Permiten mostrar contenido según el parámetro de la URL:

```jsx
const { id } = useParams();
```

Se usa para cargar el usuario correspondiente.

---

### 2. **Layout Global con `<Outlet />`**

Todo el contenido visible pasa por un layout común:

```jsx
<Route element={<Layout />}>...</Route>
```

`<Outlet />` representa donde se renderizan las rutas hijas.

---

### 3. **Nested Routes**

Un ejemplo clásico:
`/users/:id/profile` depende de `users/:id`.

El padre (`UserLayout`) muestra la información base del usuario y el hijo (`UserProfile`) su detalle.

---

## 🧱 Flujo de Navegación

1. `/`
   → Home

2. `/users`
   → Lista de usuarios

3. `/users/1`
   → Vista del usuario con su propio Layout

4. `/users/1/profile`
   → Información adicional dentro de la ruta del usuario

Esto replica la estructura típica de un panel:

```
Usuarios
 └── Usuario #1
        ├── Perfil
        ├── Ajustes
        └── Historial
```

_(En esta demo solo implementamos “Perfil”)._

---

## 🧪 Qué aprenden los alumnos con esta demo

- La importancia de estructurar rutas de manera jerárquica.
- Cómo hacer una navegación limpia entre lista → detalle → subdetalle.
- Uso de `<Outlet />` para layouts parciales y globales.
- Qué aporta React Router al diseño modular de vistas.

---

## 🔍 Archivos incluidos

### `index.jsx`

Contiene:

- `Layout` global con navegación.
- Lista de usuarios.
- Ruta dinámica `/users/:id`.
- Ruta anidada `/users/:id/profile`.
- Componentes simples para entender el flujo.

---

## ✔️ Resultado final

Una demo para aprender:

- Parámetros de URL
- Layouts compartidos
- Nested routing
- Navegación realista en aplicaciones web de producción
