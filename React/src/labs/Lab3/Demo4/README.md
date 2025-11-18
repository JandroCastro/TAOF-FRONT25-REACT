# 📘 Demo 4 – Actions y Loaders en React Router

Esta demo muestra cómo funcionan **actions** y **loaders** en React Router 6.15+, aplicados a un pequeño flujo con login, redirecciones y carga de datos desde una API pública.

---

## 🎯 Objetivos

- Entender cómo **actions** procesan formularios sin `onSubmit`.
- Ver cómo **loaders** precargan datos antes de renderizar un componente.
- Reemplazar `useEffect()` y `useState()` cuando el dato depende de la ruta.
- Utilizar `redirect()` para controlar navegación en el servidor de rutas.
- Separar la lógica de datos del componente, colocando la responsabilidad en las rutas.

---

# 📁 Estructura

```

src/
App.jsx
Login.jsx
Products.jsx

```

---

# 🧠 Conceptos Clave

## 1. Loaders

Son funciones que se ejecutan **antes de que el componente se renderice**.  
Sirven para:

- cargar datos
- comprobar acceso
- lanzar errores
- redirigir

En esta demo, `Products.jsx` usa un loader que consulta una API pública:

```js
export async function loader() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Error al cargar productos");
  return res.json();
}
```

En el componente:

```js
const products = useLoaderData();
```

### Beneficios

- No necesitas `useEffect` ni estados para cargar datos.
- Evitas parpadeos de “cargando”.
- El componente recibe los datos ya listos.

---

## 2. Actions

Son funciones que procesan **peticiones POST** enviadas por un `<Form method="post">`.

React Router:

1. Intercepta el envío del formulario.
2. Ejecuta la `action` asociada a esa ruta.
3. La action devuelve datos o redirige.

Ejemplo del login:

```js
export async function action({ request }) {
  const formData = await request.formData();

  const user = formData.get("username");
  const pass = formData.get("password");

  if (user === "admin" && pass === "123") {
    return redirect("/admin");
  }

  return redirect("/user");
}
```

El formulario está conectado automáticamente a la acción:

```jsx
<Form method="post">
  <input name="username" />
  <input type="password" name="password" />
  <button>Entrar</button>
</Form>
```

No hay manejadores `onSubmit`, ni estado local, ni efectos.

---

# 🏗️ Código de la Demo (`App.jsx`)

```jsx
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Link,
} from "react-router-dom";
import Login, { action as loginAction } from "./Login";
import Products, { loader as productsLoader } from "./Products";

function Nav() {
  return (
    <nav>
      <Link to="/products">Products</Link>
    </nav>
  );
}

function Admin() {
  return (
    <div>
      <Nav />
      Panel de Administración
    </div>
  );
}

function User() {
  return (
    <div>
      <Nav />
      Área de Usuario
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/login", element: <Login />, action: loginAction },
  { path: "/admin", element: <Admin /> },
  { path: "/user", element: <User /> },
  { path: "/products", element: <Products />, loader: productsLoader },
  { path: "/", loader: () => redirect("/login") },
]);

export default function Demo4() {
  return <RouterProvider router={router} />;
}
```

---

# 🔍 Flujo completo de esta demo

### ➤ `/login`

- Renderiza un formulario.
- Al enviarse, ejecuta su **action**.
- La action decide si el usuario va a `/admin` o `/user`.

---

### ➤ `/products`

- Ejecuta el **loader antes de mostrar la página**.
- El componente recibe los productos ya preparados.

---

### ➤ `/`

- El loader redirige automáticamente a `/login`.

---

# 📦 Ventajas del paradigma loaders/actions

- Evita `useEffect` para cargar datos.
- Los formularios funcionan sin controladores.
- Redirecciones limpias desde las rutas.
- Componentes más simples y declarativos.
- Navegación más fluida y sin parpadeos.

---
