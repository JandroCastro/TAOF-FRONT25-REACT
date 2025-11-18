# 🧭 Demo 3 – Navegación Programática con `useNavigate`

Esta demo introduce una de las herramientas más útiles de React Router:  
**la navegación programática** mediante el hook `useNavigate()`.

Mientras que `<Link>` sirve para navegación declarativa (enlaces visibles),  
`useNavigate()` permite navegar **desde lógica de JavaScript**, normalmente tras eventos, validaciones, acciones o flujos de usuario.

---

## 🎯 Objetivos de la Demo

- Entender qué es la navegación programática.
- Usar el hook `useNavigate()` para mover al usuario entre páginas.
- Comparar navegación declarativa vs. programática.
- Ver un caso muy común: _un botón que redirige a otra página_ tras hacer click.

---

## 🧠 ¿Cuándo se usa `useNavigate()`?

Situaciones típicas:

- Tras un **submit** exitoso.
- Después de una **validación**.
- Para redirigir si falta información (ej: rutas protegidas).
- Para completar un **flujo de usuario** (wizard, checkout…).
- Para navegar desde componentes sin `<Link>`.

La navegación deja de depender del marcado HTML y pasa a la **lógica del componente**.

---

## 🧱 Qué contiene la Demo

### `PageA`

Tiene un botón que al pulsarse llama:

```jsx
navigate("/pageb");
```

Esto redirige al usuario de forma inmediata.

### `PageB`

Simple pantalla de destino para demostrar el cambio de ruta.

### `Demo3`

Define las rutas:

- `/` → `PageA`
- `/pageb` → `PageB`

---

## 📌 Detalles importantes

### 1. `useNavigate()` crea una función de navegación

```jsx
const navigate = useNavigate();
```

La función resultante permite:

- `navigate('/pageb')`
- `navigate(-1)` ir atrás
- `navigate('/admin', { replace: true })` para reemplazar en el historial

---

### 2. Navegación “imperativa”

Es imperativa porque tú decides cuándo ocurre:
**no depende de un enlace, depende del código.**

```jsx
onClick={() => navigate('/pageb')}
```

---

## ✔️ Lo que aprendemos

- Cómo redirigir manualmente desde un componente.
- Cómo funciona el historial de navegación.
- Cuándo es preferible `useNavigate` sobre `<Link>`.
- Cómo encaja `useNavigate` en flujos reales (formularios, wizards, logins…).

---

## 🚀 Resultado final

Un ejemplo minimalista pero fundamental:
un botón que controla la navegación mediante lógica interna del componente.

Esta base se reutiliza en:

- Rutas protegidas
- Formularios con redirección
- Layouts que redirigen según estado
- Dashboards con flujos complejos
