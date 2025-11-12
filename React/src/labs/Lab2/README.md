# 🧠 Lab 2 – Hooks en React

## 1. Introducción teórica

### Contexto

En el **Lab 1** aprendimos a construir componentes funcionales, trabajar con props, manejar eventos y elevar el estado entre componentes.  
Sin embargo, las primeras versiones de React obligaban a usar **componentes de clase** para manejar estado o efectos secundarios.

Los **Hooks** (introducidos en React 16.8) permiten usar _estado, ciclo de vida, contexto y lógica reutilizable_ **sin escribir clases**, haciendo el código más predecible, reutilizable y fácil de testear.

---

### Objetivos del Lab

En este lab aprenderás a:

- Entender cómo y cuándo usar los principales hooks nativos de React.
- Aplicar patrones y buenas prácticas en el manejo del estado y efectos secundarios.
- Reutilizar lógica mediante **custom hooks**.
- Organizar tu código de manera más limpia y mantenible.

---

### Hooks que estudiaremos

| Hook           | Propósito principal                                                          |
| -------------- | ---------------------------------------------------------------------------- |
| `useState`     | Manejar y actualizar estado local.                                           |
| `useEffect`    | Gestionar efectos secundarios (fetch, subscripciones, temporizadores, etc.). |
| `useReducer`   | Manejar estados complejos con lógica centralizada.                           |
| `useContext`   | Compartir estado global entre componentes.                                   |
| _Custom Hooks_ | Reutilizar lógica de estado o efectos en varios componentes.                 |

---

## 🧩 2. Listado de Demos del Lab 2

| Demo      | Título                                          | Concepto clave                                                                   |
| --------- | ----------------------------------------------- | -------------------------------------------------------------------------------- |
| **Demo1** | _Cambiador de tema (useState básico)_           | Introducción a `useState` y buenas prácticas de actualización de estado.         |
| **Demo2** | _Formulario controlado_                         | Cómo manejar múltiples estados con `useState` y actualizar campos dinámicamente. |
| **Demo3** | _Reloj en vivo (useEffect)_                     | Ejemplo de efectos y limpieza con `useEffect`.                                   |
| **Demo4** | _Buscador con fetch (useEffect + dependencias)_ | Cómo manejar efectos asíncronos y dependencias controladas.                      |
| **Demo5** | _Contador con reducer (useReducer)_             | Estados complejos y acciones con `useReducer`.                                   |
| **Demo6** | _Panel de usuario global (useContext)_          | Compartir estado global entre componentes.                                       |
| **Demo7** | _Hook personalizado: useFetch_                  | Creación y uso de un custom hook reutilizable.                                   |
