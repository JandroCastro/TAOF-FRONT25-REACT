# Demo 3 – Card de noticia y sistema de clases

Esta demo muestra cómo aplicar **estilos en React** usando `className` y cómo organizar nombres de clases de manera clara y mantenible.

---

## 1️⃣ Objetivo

- Enseñar cómo **dar estilos** a los componentes en React.
- Mostrar **nomenclatura de clases** clara (`card-*`).
- Crear un **componente más complejo** con subcomponentes internos (header, body, footer).

---

## 2️⃣ Card.jsx – Componente reutilizable

```jsx
export const Card = ({ titulo, subtitulo, contenido, autor, fecha }) => { ... }
```

**Observaciones:**

- `className` reemplaza a `class` en React.
- Prefijo `card-` para todos los subelementos.
- Máximo 2-3 niveles de jerarquía para evitar problemas de especificidad.

---

## 3️⃣ Demo3.jsx – Lista de noticias

Renderiza varias cards usando `.map()`:

```jsx
{
  noticias.map((noticia, index) => <Card key={index} {...noticia} />);
}
```

**Ventajas:**

- Evita duplicación de código.
- Hace el código escalable y fácil de mantener.
- Visualmente atractivo y organizado.

---

## 4️⃣ Estilos (styles.css)

- `.card` → contenedor general con borde, padding y sombra.
- `.card-header`, `.card-title`, `.card-subtitle` → estructura jerárquica clara.
- `.card-body` → contenido principal.
- `.card-footer` → información secundaria, alinea elementos al final.

---

## 5️⃣ Aprendizajes clave

1. Uso de `className` para estilos en React.
2. Nomenclatura consistente y predecible de clases (`card-*`).
3. Jerarquía de clases máxima 2-3 niveles para **control de especificidad**.
4. Preparación para Demo4, donde añadiremos **estado y eventos**.
