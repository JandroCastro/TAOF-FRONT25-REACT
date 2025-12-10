import "./styles.css";
import { Card } from "./Card.jsx";

export const Demo3 = () => {
  const noticias = [
    {
      titulo: "React desde cero",
      subtitulo: "Estilos y componentes",
      contenido: "Aprendemos a usar className, jerarquía de clases y nomenclatura limpia.",
      autor: "Jandro Castro",
      fecha: "01/11/2025",
      leida:false
    },
    {
      titulo: "Demo avanzada",
      subtitulo: "Organización de componentes",
      contenido: "Creamos un componente más elaborado con header, body y footer.",
      autor: "Jandro Castro",
      fecha: "02/11/2025"
    }
  ];

  return (
    <section>
      <h2>Demo 3 – Card de noticia y sistema de clases</h2>
      <p>
        En esta demo vemos cómo aplicar estilos usando <code>className</code> y
        cómo organizar nombres de clases de forma clara y predecible.
      </p>

      {noticias.map((noticia, index) => (
        <Card key={index} {...noticia} />
      ))}
    </section>
  );
};
