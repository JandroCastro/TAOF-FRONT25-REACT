# 🔐 Demo 3A – Rutas Protegidas por Roles + Layout Dinámico

Esta demo profundiza en un tema crucial para aplicaciones profesionales:

**gestión de acceso por roles en el enrutamiento**  
y **layouts distintos según el tipo de usuario**.

Aquí combinamos:

- Contexto de autenticación.
- Rutas protegidas mediante `<ProtectedRoute />`.
- Roles dinámicos (`admin`, `user`, ...).
- Un layout reactivo que adapta su UI según el rol.
- Uso de `<Outlet />` para controlar qué se renderiza dentro de cada nivel.

---

## 🎯 Objetivos de la Demo

En esta demo aprenderás a:

- **Crear un AuthContext** que almacene usuario y rol.
- **Restringir rutas** según los roles permitidos.
- **Redirigir automáticamente** cuando no se tiene permiso.
- Renderizar un **Layout específico por rol**, que cambia títulos, secciones o estilos.
- Usar `<Outlet />` para anidar rutas protegidas.
- Encadenar niveles:  
  Layout → ProtectedRoute → Pantalla final.

---

## 🧠 Caso realista

Una plataforma SaaS con distintos roles:

- **admin**: acceso a panel de control, informes, gestión de usuarios.
- **user**: acceso a su dashboard personal.
- **guest**: solo contenido público.

Al navegar a `/admin`, solo el rol **admin** tiene permiso.  
Al navegar a `/user`, usuarios y administradores pueden entrar.  
Los demás son redirigidos a **/unauthorized**.

Este flujo es idéntico al de aplicaciones reales: ERPs, paneles internos, e-commerce con roles, etc.

---

## 📄 Archivos y responsabilidades

### `AuthContext.jsx`

Provee:

- `user`: `{ name, role }`
- `login(role)`
- `logout()`

Es la **fuente única de verdad** del rol y del estado del usuario.

### `ProtectedRoute.jsx`

Es el guardián de la ruta.

1. Si no hay usuario → redirige a `/login`.
2. Si el rol no coincide → redirige a `/unauthorized`.
3. Si todo está OK → renderiza `<Outlet />`.

Es una **ruta envolvente** que valida permisos **antes** de renderizar el contenido interno.

### `RoleLayout.jsx`

Layout dinámico dependiente del rol:

- Muestra encabezados distintos:
  - "Panel de Administración"
  - "Área de Usuario"
  - "Contenido Público"

Esto enseña cómo usar la ruta padre para definir UI compartida por todas las rutas hijas.

### `Demo3A.jsx`

Define las rutas y combina todas las piezas:

- `/login`
- `/unauthorized`
- Rutas protegidas para **admin** y **user**, envueltas por `RoleLayout`.

---

## 📌 Conceptos importantes

### 1. **Rutas anidadas para control de permisos**

En lugar de proteger pantalla por pantalla:

```jsx
<Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
  <Route path="/admin" element={<AdminDashboard />} />
</Route>
```

Esto permite **encapsular la lógica** y mantener el código limpio.

---

### 2. **Layouts específicos según rol**

`RoleLayout` es una ruta padre que:

- Lee el rol del usuario.
- Renderiza encabezados, menús o secciones distintas.
- Delegando el contenido final a `<Outlet />`.

Es exactamente como funcionan paneles reales.

---

### 3. **Niveles de control de UX**

La estructura final es:

```
AuthProvider
└─ BrowserRouter
   └─ RoleLayout (Layout según rol)
      └─ ProtectedRoute (Control de acceso)
         └─ Ruta Final (Dashboard)
```

Cada nivel añade responsabilidad sin romper el resto.

---

### 4. **Navegación de seguridad**

Las redirecciones `replace` evitan que el usuario pueda volver atrás con el navegador.

---

## ✔️ Qué aprendemos:

- Una guía práctica de cómo implementar seguridad básica en React Router.
- Un patrón escalable y profesional usado en aplicaciones reales.
- Entender cómo combinar contextos, layouts, rutas anidadas y guards.
- Un ejemplo extensible para:

  - permisos por módulo,
  - rutas invisibles,
  - menús dinámicos,
  - distintas experiencias de UI por rol.

---

## 🚀 Resultado final

Un ejemplo completo y modular para enseñar **control de acceso por roles** en React Router:

- Roles separados.
- Layout dinámico según nivel de permiso.
- Redirecciones coherentes.
- Rutas protegidas claras y escalables.

Si quieres, puedo preparar un **ejemplo 3B** con roles múltiples, permisos por feature o integración con loaders/actions.
