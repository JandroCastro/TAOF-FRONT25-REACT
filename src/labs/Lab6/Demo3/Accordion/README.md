# Demo 3 — Compound Components (Accordion)

## 🎯 Objetivo

Aprender a crear interfaces flexibles mediante el patrón **Compound Components**, un enfoque que permite que varios componentes trabajen como piezas de un mismo “mini-lenguaje” dentro de tu UI.
En esta demo se construye un **Accordion** donde el estado se gestiona en el componente raíz, mientras que sus hijos (`AccordionItem`, `AccordionHeader`, `AccordionPanel`) reciben la información necesaria mediante **contexto interno**, sin pasar props manualmente.

---

# 🧠 ¿Qué es el patrón Compound Components?

Es un patrón muy usado en React para diseñar **APIs declarativas** que se leen como si fueran elementos HTML personalizados.

Ejemplo:

```jsx
<Accordion>
  <AccordionItem>
    <AccordionHeader>Sección 1</AccordionHeader>
    <AccordionPanel>Contenido</AccordionPanel>
  </AccordionItem>
</Accordion>
```

La idea principal:

* El componente padre controla el **estado y la lógica interna**.
* Los hijos se comportan según ese estado sin recibir props explícitas.
* El desarrollador obtiene una API **simple, intuitiva y flexible**.

Este patrón se usa ampliamente en librerías modernas como:

* Radix UI
* Headless UI
* Reach UI
* Downshift
* React Aria

---

# 🧩 ¿Cuándo se usa en proyectos reales?

### ✔️ Cuando varios componentes deben compartir estado

Ejemplos típicos:

* Tabs
* Accordions
* Wizards / Steps
* Dropdowns
* Select personalizados
* Menús interactivos

---

### ✔️ Cuando necesitas una API flexible para el desarrollador

Por ejemplo:

```jsx
<AccordionHeader>
  <IconArrow />
  Título
</AccordionHeader>
```

Puedes meter lo que quieras sin romper la lógica.

---

### ✔️ Cuando quieres evitar props complejas y difíciles de mantener

Sin Compound Components:

```jsx
<Accordion
  headers={["H1", "H2"]}
  content={["Texto1", "Texto2"]}
  allowMultiple={false}
/>
```

Con Compound Components:

```jsx
<Accordion>
  <AccordionItem>...</AccordionItem>
</Accordion>
```

Mucho más claro y escalable.

---

# 🤔 ¿Se sigue usando hoy en día?

### **Sí. Y muchísimo.**

Pero sobre todo **encapsulado en librerías headless** que añaden:

* Accesibilidad (ARIA roles)
* Gestión del foco
* Navegación con teclado
* Animaciones
* Portales

En proyectos profesionales, rara vez escribes un acordeón desde cero, pero **si creas un design system interno, es el patrón ideal**.

---

# 🛠️ Tecnologías usadas

* React
* Context API
* JSX declarativo
* CSS simple para los estilos

---


---

# 🧠 Conceptos explicados

## 1. Estado compartido mediante Context

El componente padre gestiona el estado:

```jsx
const [activeIndex, setActiveIndex] = useState(null);
```

Los hijos consumen ese estado a través del contexto, sin props manuales.

---

## 2. API declarativa estilo DSL

El UI se lee como un mini lenguaje especializado:

```jsx
<Accordion>
  <AccordionItem index={0}>
    <AccordionHeader index={0}>Título</AccordionHeader>
    <AccordionPanel index={0}>Contenido</AccordionPanel>
  </AccordionItem>
</Accordion>
```

---

## 3. Control centralizado en el componente padre

El padre decide:

* qué panel está abierto
* cuándo se cierra
* si solo uno puede estar activo

Los hijos solo muestran información en base a ese estado.

---

## 4. Flexibilidad total en el contenido

Los hijos pueden contener cualquier cosa:

```jsx
<AccordionPanel>
  <MiTabla />
  <Boton />
</AccordionPanel>
```

# 🎓 Qué aprendemos con esta demo

* Cómo crear componentes complejos de forma declarativa.
* Cómo compartir estado sin props manuales.
* Cómo diseñar APIs de componentes elegantes y reutilizables.
* Cómo imitar patrones de librerías profesionales.
* Cómo separar lógica y presentación manteniendo flexibilidad.

