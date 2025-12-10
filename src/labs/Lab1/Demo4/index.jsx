import "./styles.css";
import { TuitInteractive } from "./TuitInteractive.jsx";

export const Demo4 = () => {
  const tuits = [
    { avatar: "https://i.pravatar.cc/40?img=1", nombre: "Alice", usuario: "alice123", mensaje: "React con estado!" },
    { avatar: "https://i.pravatar.cc/40?img=2", nombre: "Bob", usuario: "bob321", mensaje: "Aprendiendo eventos" }
  ];

  return (
    <section>
      <h2>Demo 4 – Estado y Eventos</h2>
      <p>
        En esta demo aprendemos a manejar <code>useState</code> y eventos básicos
        para interactuar con los componentes.
      </p>

      {tuits.map((tuit, index) => (
        <TuitInteractive key={index} {...tuit} />
      ))}
    </section>
  );
};
