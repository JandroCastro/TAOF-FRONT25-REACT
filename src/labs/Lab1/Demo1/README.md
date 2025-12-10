# Demo 1 – Imperativo vs React

Esta demo tiene como objetivo mostrar **cómo React transpila JSX a `React.createElement`** y comparar con la forma **imperativa tradicional** de manipular el DOM. También muestra cómo podemos agrupar elementos usando variables o arrays antes de devolverlos.

---

## 1️⃣ Paso 1 – Imperativo puro

```js
// Creamos un div y añadimos manualmente h1 y p al DOM
const root = document.getElementById("root");
const container = document.createElement("div");

const h1 = document.createElement("h1");
h1.textContent = "Hola mundo (Imperativo)";
h1.style.color = "darkred";

const p = document.createElement("p");
p.textContent = "Generado con JS nativo, paso a paso.";

container.appendChild(h1);
container.appendChild(p);
root.appendChild(container);
```

**Explicación:**

- Aquí React **no está involucrado**.
- Se manipula el DOM directamente con `createElement` y `appendChild`.
- Este enfoque es **imperativo**, controlas manualmente cada nodo.

---

## 2️⃣ Paso 2 – React.createElement directo

```js
React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    { style: { color: "darkblue" } },
    "Hola mundo (React.createElement)"
  ),
  React.createElement("p", null, "Generado con React puro, sin JSX.")
);
```

**Explicación:**

- Cada elemento se crea con `React.createElement(tipo, props, hijos)`.
- React se encarga de **renderizarlo en el DOM** automáticamente.
- Más declarativo que el paso 1, no necesitas llamar a `appendChild`.

---

## 3️⃣ Paso 2b – React.createElement con variables y array

```js
const titulo = React.createElement(
  "h1",
  { style: { color: "darkblue" } },
  "Hola mundo (React.createElement)"
);
const parrafo = React.createElement(
  "p",
  null,
  "Generado con React puro, sin JSX."
);

const elementos = [titulo, parrafo];

return React.createElement("div", null, elementos);
```

**Explicación:**

- Cada nodo se guarda en una variable antes de agruparlos.
- Los elementos se pasan como array al padre (`div`).
- Útil cuando quieres **construir dinámicamente múltiples elementos** antes de renderizar.

---

## 4️⃣ Paso 3 – JSX

```jsx
<div>
  <h1 style={{ color: "darkgreen" }}>Hola mundo (JSX)</h1>
  <p>Generado con JSX, transpila a React.createElement.</p>
</div>
```

**Explicación:**

- JSX es **azúcar sintáctico** que se transpila a `React.createElement`.
- Mucho más legible que escribir `createElement` manualmente.
- Puedes mezclar variables, arrays y fragmentos de manera sencilla.

---

## 5️⃣ Paso 4 – Fragment

```jsx
<>
  <h1>Hola</h1>
  <p>
    Esto demuestra el uso de Fragment para devolver múltiples elementos sin
    contenedor extra.
  </p>
</>
```

**Explicación:**

- Los **Fragments (`<>...</>`)** permiten devolver **múltiples elementos** sin envolverlos en un div adicional.
- Es equivalente a:

```js
React.createElement(React.Fragment, null, h1, p);
```

---

### ✅ Conclusión

- React convierte el JSX en llamadas a `React.createElement`.
- La forma imperativa funciona, pero es menos legible y más propensa a errores.
- Usar variables y arrays permite **estructurar y organizar** elementos antes de renderizar.
- Fragments son útiles para devolver varios elementos **sin contenedor extra**.
- Esta demo prepara el terreno para **componentes, props y estilos** en los siguientes Labs.
