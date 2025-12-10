import "./styles.css";
import { Tuit } from "./Tuit.jsx";
import { TuitList } from "./TuitList.jsx";

export const Demo2 = () => {
  const avatar = "https://i.pravatar.cc/40?img=1";

  const renderCosas = () => {
    return (
            <div className="tuit">
        <img src={avatar} alt="Alice" className="avatar" />
        <div className="contenido">
          <strong>Alice</strong> @alice123
          <p>Hola mundo en React!</p>
          <span>❤️ 5</span>
        </div>
      </div>
    )
  }


  return (
    <section>
      <h2>Demo 2 – Componentes y Props</h2>
      <p>
        Repetición de código
      </p>

      <Tuit avatar={''} nombre={'Rosaura'} usuario={'lololo'} />

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

      <div className="tuit">
        <img src={avatar} alt="Charlie" className="avatar" />
        <div className="contenido">
          <strong>Charlie</strong> @charlieX
          <p>Estilos y componentes!</p>
          <span>❤️ 7</span>
        </div>
      </div>

      <div className="tuit">
        <img src={avatar} alt="Diana" className="avatar" />
        <div className="contenido">
          <strong>Diana</strong> @dianaY
          <p>React es genial!</p>
          <span>❤️ 3</span>
        </div>
      </div>

      <hr style={{ margin: "2rem 0" }} />

      <p>
        Magic Reutilization of mental capacities
      </p>

      <TuitList />
    </section>
  );
};
