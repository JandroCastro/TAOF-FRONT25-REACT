import { useState } from 'react';
import './styles.css';

export default function Demo2() {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [profile, setProfile] = useState({ name: 'Jandro', age: 30 });

  // ❌ Ejemplo INCORRECTO: mutar directamente el array
  const badAddNumber = () => {
    numbers.push(4); // Esto modifica el array original
    // React no detectará el cambio porque la referencia del array no cambia
    console.log('Mala práctica:', numbers);
    // NO llamamos a setNumbers correctamente → no hay re-render
  };

  // ✅ Ejemplo CORRECTO: crear una nueva referencia
  const goodAddNumber = () => {
    setNumbers(prev => [...prev, prev.length + 1]);
  };

  // ❌ Ejemplo INCORRECTO: mutar directamente un objeto
  const badIncreaseAge = () => {
    profile.age += 1; // Mutación directa
    console.log('Edad mutada:', profile.age);
    // React no renderiza porque no detecta un nuevo objeto
  };

  // ✅ Ejemplo CORRECTO: crear una copia del objeto
  const goodIncreaseAge = () => {
    setProfile(prev => ({ ...prev, age: prev.age + 1 }));
  };

  return (
    <div className="state-demo">
      <h2>🧩 Buenas prácticas con useState</h2>
      <section className="section">
        <h3>Array de números</h3>
        <p>
          Estado actual: <strong>{JSON.stringify(numbers)}</strong>
        </p>
        <div className="buttons">
          <button onClick={badAddNumber} className="bad">
            Añadir número (❌ mala práctica)
          </button>
          <button onClick={goodAddNumber} className="good">
            Añadir número (✅ buena práctica)
          </button>
        </div>
      </section>

      <section className="section">
        <h3>Perfil del usuario</h3>
        <p>
          Estado actual: <strong>{profile.name}</strong> – Edad: <strong>{profile.age}</strong>
        </p>
        <div className="buttons">
          <button onClick={badIncreaseAge} className="bad">
            Aumentar edad (❌ mala práctica)
          </button>
          <button onClick={goodIncreaseAge} className="good">
            Aumentar edad (✅ buena práctica)
          </button>
        </div>
      </section>
    </div>
  );
}
