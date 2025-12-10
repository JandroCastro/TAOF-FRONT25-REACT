import { useState } from 'react';
import './styles.css';

export default function Demo1() {
  const [isDark, setIsDark] = useState(false);

  // Cambia el tema de forma declarativa
  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <div className={`card ${isDark ? 'dark' : 'light'}`}>
      <h2>{isDark ? '🌙 Modo oscuro' : '☀️ Modo claro'}</h2>
      <p>
        Este ejemplo muestra cómo usar <code>useState</code> para gestionar el
        estado local de un componente.
      </p>
      <button onClick={toggleTheme}>
        Cambiar a {isDark ? 'modo claro' : 'modo oscuro'}
      </button>
    </div>
  );
}
