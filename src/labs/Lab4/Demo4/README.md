Perfecto Jandro, aquí tienes el **README en Markdown** para la Demo 4 — Axios + API Service, adaptado a la versión minimalista que acabamos de crear:

---

# Demo 4 — Manejo profesional de API Services con Axios

## 🎯 Objetivo

En esta demo se introduce una **capa de servicios** y el uso de **Axios con interceptores** para manejar llamadas HTTP de manera profesional:

- Centralizar la configuración de Axios (`baseURL`, headers, timeout).
- Añadir interceptores de request y response.
- Crear servicios desacoplados (`userService`) que exponen métodos limpios (`getUsers`, `createUser`, etc.).
- Mantener los componentes independientes de la lógica de red.
- Logging de requests/responses para desarrollo.
- Base para manejo de tokens y autorización en aplicaciones reales.

---

## 🛠️ Tecnologías usadas

- **React** (componentes y estado).
- **Axios** (peticiones HTTP y configuración global).
- **JSONPlaceholder** como API de ejemplo pública.

---

## 🚀 Puesta en marcha

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar la app:

```bash
npm run dev
```

No se requiere backend propio, la demo consume la API pública `https://jsonplaceholder.typicode.com/users`.

---

## 📁 Estructura del proyecto

```
Demo4/
│
├── index.jsx           ← aplicación principal
├── api/
│   ├── axiosClient.js  ← instancia Axios + interceptores
│   └── userService.js  ← métodos GET/POST/PUT/DELETE
└── components/
    └── UserTable.jsx   ← tabla de usuarios
```

---

## 🧠 Conceptos explicados en esta demo

### 1. Axios Client

- Crear una instancia central (`axios.create`) con `baseURL`, headers y timeout.
- Evitar repetir la configuración en cada petición.

### 2. Interceptores

- **Request:** añadir token JWT si existe, logging en desarrollo.
- **Response:** logging y manejo global de errores.
- Permiten centralizar el comportamiento de la API.

### 3. Servicios desacoplados

```js
export const userService = {
  getUsers(),
  createUser(),
  updateUser(),
  deleteUser()
}
```

- Los componentes no conocen la URL ni la implementación de Axios.
- Facilita testing y mantenimiento.

### 4. Componente independiente

- `Demo4` solo se preocupa de **estado y UI**.
- Llama a `userService` para cualquier operación.
- `UserTable` es completamente **presentacional**.

---

## 🔍 Qué aprendemos con esta demo

- Crear una **capa de servicios profesional** en React.
- Manejar Axios con interceptores y logging.
- Separar la lógica de red de los componentes UI.
- Preparar la base para autorización con tokens.
- Cómo organizar proyectos de forma escalable.

---

## ✔️ Resultado final

Una app funcional que muestra usuarios desde una API pública, con:

- CRUD básico (GET, PUT, DELETE; POST se podría agregar).
- Logging de requests/responses en desarrollo.
- Arquitectura desacoplada lista para producción.
