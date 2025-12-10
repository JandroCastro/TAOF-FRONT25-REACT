# Demo 4 — React.memo / Memoización

## 🎯 Objetivo

Aprender a **optimizar renders en React** usando:

- `React.memo` para evitar que componentes hijos se vuelvan a renderizar innecesariamente.
- `useCallback` para mantener la referencia de funciones estables.
- `useMemo` para memorizar valores calculados pesados.

**Importante:** No todos los componentes necesitan estas optimizaciones. Solo se aplican cuando hay **renders frecuentes de componentes pesados** o **listas grandes**, no como regla general.

---

# 🛠️ Tecnologías usadas

- **React + JSX**
- **useState, useCallback, useMemo**
- **React.memo** para memoización de componentes funcionales.

---

# 🚀 Puesta en marcha

## 1. Instala dependencias

```bash
npm install
````

## 2. Inicia la app

```bash
npm run dev
```

En el navegador verás dos botones memoizados:

* `Increment` → aumenta un contador.
* `Toggle Other` → alterna otro estado.

Observa la consola:

* `console.log("Render Demo4")` → se ejecuta cada render del padre.
* `console.log` dentro del hijo memoizado **solo al montar**, no al pulsar botones si las props no cambian.
* `console.log` dentro de `onClick` → se ejecuta cada vez que pulsas el botón.

---

# 📁 Estructura del proyecto

```
Lab6/
└── Demo4/
    ├── index.jsx        # Componente raíz Demo4
    └── ChildButton.jsx  # Componente memoizado
```

---

# 🧠 Conceptos explicados en esta demo

## 1. React.memo

```jsx
const ChildButton = React.memo(({ label, onClick }) => {
  console.log(`Render: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});
```

* Memoiza el componente: solo se vuelve a renderizar si **cambian las props**.
* Evita renders innecesarios en hijos que reciben props estables.

---

## 2. useCallback

```jsx
const handleIncrement = useCallback(() => setCount(c => c + 1), []);
```

* Mantiene la referencia de la función estable entre renders.
* Permite que `React.memo` funcione correctamente con callbacks pasados como prop.

---

## 3. useMemo (opcional, no usado en este ejemplo)

* Memoriza **valores calculados pesados** entre renders.
* Evita recalcular operaciones costosas si las dependencias no cambian.

---

# 🎓 Cuándo usar estas herramientas

* **React.memo**

  * Componentes hijos que reciben props y **renderizan UI pesada**.
  * Evita re-renders innecesarios cuando el padre cambia estado irrelevante.

* **useCallback**

  * Funciones que se pasan como prop a hijos memoizados.
  * Evita que `React.memo` se invalide por una nueva referencia de función.

* **useMemo**

  * Cálculos costosos que no deben repetirse en cada render.
  * Evita recalcular valores que dependen de props/estado específicos.

**No usar siempre:**

* Aplicar `React.memo` en todos los componentes pequeños es **microoptimización innecesaria**.
* Solo optimizar cuando **haya evidencia de renderizados costosos** o **listas grandes**.
* Para componentes simples y pequeños, la legibilidad y simplicidad son más importantes que la microoptimización.

---

# ✅ Qué se demuestra en esta demo

1. Cómo **React.memo** evita renders innecesarios.
2. Cómo usar **useCallback** para mantener referencias estables de funciones.
3. Qué se renderiza y qué no, explicado con `console.log`.
4. Conceptos de optimización real en proyectos React modernos.

