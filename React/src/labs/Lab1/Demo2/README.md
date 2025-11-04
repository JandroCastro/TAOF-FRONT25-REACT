# Demo 2 – Componentes y Props

Esta demo tiene como objetivo mostrar **cómo los componentes permiten reutilizar código** y cómo se pasan **props** para parametrizar su contenido. También introduce **estilos básicos** para mejorar la visualización.

---

## 1️⃣ Código repetido (anti-patrón)

Al principio, mostramos varios tuits escribiendo todo el HTML/JSX directamente:

```jsx
<div className="tuit">
  <img src={avatar} alt="Alice" className="avatar" />
  <div className="contenido">
    <strong>Alice</strong> @alice123
    <p>Hola mundo en React!</p>
    <span>❤️ 5</span>
  </div>
</div>

<div className="tuit">
  <img src={avatar} alt="Bob" className="avatar" />
  <div className="contenido">
    <strong>Bob</strong> @bob321
    <p>Aprendiendo props</p>
    <span>❤️ 2</span>
  </div>
</div>
```

**Observaciones:**

- La estructura se repite muchas veces, cambiando solo algunos valores (`nombre`, `usuario`, `mensaje`, `likes`).
- Esto **genera mucho código duplicado**, difícil de mantener y escalar.
- Visualmente funciona, pero no es eficiente.

---

## 2️⃣ Componente reutilizable con props

Creamos un componente `Tuit` que recibe **propiedades** para mostrar cualquier tuit:

```jsx
export const Tuit = ({ avatar, nombre, usuario, mensaje, likes }) => {
  return (
    <div className="tuit">
      <img src={avatar} alt={nombre} className="avatar" />
      <div className="contenido">
        <strong>{nombre}</strong> @{usuario}
        <p>{mensaje}</p>
        <span>❤️ {likes}</span>
      </div>
    </div>
  );
};
```

**Ventajas:**

- Evita la duplicación de código.
- Permite **parametrizar el contenido** usando props.
- Hace el código más **mantenible y escalable**.

---

## 3️⃣ Lista de tuits con map

Creamos un componente `TuitList` que renderiza varios tuits pasando los datos como props:

```jsx
const tuits = [
  {
    avatar: "https://i.pravatar.cc/40?img=1",
    nombre: "Alice",
    usuario: "alice123",
    mensaje: "Hola mundo en React!",
    likes: 5,
  },
  {
    avatar: "https://i.pravatar.cc/40?img=2",
    nombre: "Bob",
    usuario: "bob321",
    mensaje: "Aprendiendo props",
    likes: 2,
  },
  {
    avatar: "https://i.pravatar.cc/40?img=3",
    nombre: "Charlie",
    usuario: "charlieX",
    mensaje: "Estilos y componentes!",
    likes: 7,
  },
  {
    avatar: "https://i.pravatar.cc/40?img=4",
    nombre: "Diana",
    usuario: "dianaY",
    mensaje: "React es genial!",
    likes: 3,
  },
];

return (
  <div>
    {tuits.map((tuit, index) => (
      <Tuit key={index} {...tuit} />
    ))}
  </div>
);
```

**Observaciones:**

- `map` permite renderizar dinámicamente múltiples componentes.
- Las props se expanden con `...tuit`, haciendo el código limpio.
- `key` es necesario para que React pueda **identificar cada elemento de forma única**.

---

## 4️⃣ Estilos

Se usan estilos básicos para mejorar la visualización:

- `.tuit` → contenedor flex con padding, borde, fondo y sombra.
- `.avatar` → imagen redondeada.
- `.contenido` → columna con nombre, usuario, mensaje y contador de likes.
- Se aplica **hover** para dar sensación de interactividad.

---

## 5️⃣ Aprendizajes clave

1. **Evitar código repetido:** los componentes permiten **reutilización y limpieza**.
2. **Props:** el mecanismo principal para pasar datos de un componente padre a hijo.
3. **Visualización clara:** aplicar estilos sencillos hace que los componentes sean más atractivos.
4. **Preparación para estado y eventos:** esta demo no usa estado aún, pero sienta las bases para **Demo3** donde los likes serán interactivos.

---

> Esta demo demuestra cómo pasar de **HTML/JSX repetitivo** a **componentes parametrizables** y cómo usar **props** para mantener la flexibilidad y escalabilidad del código React.
