# Demo 5 — Formularios: Controlado vs No Controlado

## 🎯 Objetivo

Mostrar de forma clara la diferencia entre:

- **Formularios controlados**: React como fuente de verdad.
- **Formularios no controlados**: DOM como fuente de verdad.

Se incluye un mini ejemplo comparativo de `<input value/onChange>` vs `<input ref>`.

---

## 🛠️ Tecnologías usadas

- **React**: manejo de estado y referencias.
- **JavaScript**: eventos, refs, manejo de formularios.

---

## 🚀 Puesta en marcha

1. Instalar dependencias:

```bash
npm install
````

2. Iniciar la app:

```bash
npm run dev
```

3. Renderizar la Demo5 desde `App.jsx`:

```jsx
import Demo5 from './Lab6/Demo5';
<Demo5 />
```

---

## 📁 Estructura del proyecto

```
Lab6/Demo5/
│
├── index.jsx
├── ControlledForm.jsx
├── UncontrolledForm.jsx
```

---

## 🧠 Conceptos

### 1. Formularios Controlados

* React es la **fuente de verdad**.
* El valor del input se mantiene en **estado**.
* Ventajas:

  * Permite validaciones en tiempo real.
  * Facilita integración con componentes o librerías externas.
  * Fácil de testear.
* Desventajas:

  * Requiere más código para inputs simples.

**Ejemplo:**

```jsx
<input value={name} onChange={(e) => setName(e.target.value)} />
```

---

### 2. Formularios No Controlados

* El DOM es la **fuente de verdad**.
* Se accede al valor mediante un **ref** solo al enviar el formulario.
* Ventajas:

  * Menos código para formularios simples.
* Desventajas:

  * Validaciones dinámicas más complicadas.
  * Menos testable.

**Ejemplo:**

```jsx
<input type="text" ref={nameRef} />
```

---

### 3. Cuándo usar cada uno

* Formularios simples (un solo input o búsqueda rápida) → **no controlados** son suficientes.
* Formularios con múltiples campos, validaciones o dependencias entre campos → **controlados** facilitan la gestión de datos y la consistencia del estado.

