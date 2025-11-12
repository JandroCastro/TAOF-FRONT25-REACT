import { useState } from 'react';
import './styles.css';

export default function Demo3() {
  // Dos contadores: uno con uso incorrecto, otro correcto
  const [wrongCount, setWrongCount] = useState(0);


  const [correctCount, setCorrectCount] = useState(0);

  // ❌ Ejemplo INCORRECTO: usa el valor actual, no el más reciente
  const handleWrongIncrement = () => {
    // React puede agrupar las actualizaciones -> no usa el nuevo valor inmediatamente
    setWrongCount(wrongCount + 1);
    setWrongCount(wrongCount + 1);
    setWrongCount(wrongCount + 1);
    // Esperarías +3, pero obtendrás +1
  };
  
  // ✅ Ejemplo CORRECTO: usa función de actualización con valor previo
  const handleCorrectIncrement = () => {
    // Cada llamada recibe el valor actualizado más reciente
    
    setCorrectCount(prev => prev + 1);
    setCorrectCount(prev => prev + 1);
    setCorrectCount(prev => prev + 1);
    // Resultado correcto: +3
  };

  return (
    <div className="async-demo">
      <h2>⚙️ Actualizaciones de estado asíncronas</h2>

      <div className="counter-section">
        <h3>❌ Ejemplo incorrecto</h3>
        <p>
          Valor actual: <strong>{wrongCount}</strong>
        </p>
        <button onClick={handleWrongIncrement}>Incrementar 3 veces</button>
        <p className="note">
          Usa <code>setCount(count + 1)</code> tres veces.<br />
          React agrupa las actualizaciones → solo aumenta una vez.
        </p>
      </div>

      <div className="counter-section">
        <h3>✅ Ejemplo correcto</h3>
        <p>
          Valor actual: <strong>{correctCount}</strong>
        </p>
        <button onClick={handleCorrectIncrement}>Incrementar 3 veces</button>
        <p className="note">
          Usa <code>setCount(prev =&gt; prev + 1)</code> tres veces.<br />
          Cada llamada usa el valor más reciente → aumenta 3 veces.
        </p>
      </div>
    </div>
  );
}
