import { useState } from 'react';
import './styles.css';

function ChildA({ count, increment }) {
  return (
    <div className="child">
      <h3>Child A</h3>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

function ChildB({ count }) {
  return (
    <div className="child">
      <h3>Child B</h3>
      <p>Contador: {count}</p>
    </div>
  );
}

// Demo de "lifting state" hacia el padre
export default function Demo4() {
  // Estado colocado en el "padre común" a ChildA y ChildB
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return (
    <div className="state-location-demo">
      <h2>📍 Lugar idóneo del estado</h2>
      <p>
        Observa cómo el estado vive en el padre común para que **ChildA y ChildB** puedan acceder a él.
      </p>
      <div className="children-container">
        <ChildA count={count} increment={increment} />
        <ChildB count={count} />
      </div>
    </div>
  );
}
