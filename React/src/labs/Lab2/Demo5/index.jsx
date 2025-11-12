import { useState, useEffect } from 'react';
import './styles.css';

export default function Demo5() {
  // Efecto básico al montar
  const [message, setMessage] = useState('Esperando efecto...');
  
  // Dependencias
  const [count, setCount] = useState(0);
  const [messageDep, setMessageDep] = useState('');

  // Nuevo estado independiente
  const [toggle, setToggle] = useState(false);
  const [toggleMessage, setToggleMessage] = useState('Off');

  // Cleanup / temporizador
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setMessage('El efecto se ejecutó al montar el componente');
  }, []);


  useEffect(() => {
    setMessageDep(`El contador cambió: ${count}`);
  }, [count]);

    useEffect(() => {
        setToggleMessage(toggle ? 'On' : 'Off');
  }, [toggle]);


//     useEffect(() => {
//         console.log('me ejecuto')
//         setToggleMessage(toggle ? 'On' : 'Off');
//         setMessage('estoy liándola parda')
//   }, [toggle, count]);


  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);


  return (
    <div className="effect-demo">
      <h2>⚡ Uso completo de useEffect</h2>

      {/* Efecto al montar */}
      <div className="container">
        <h3>📌 Efecto al montar</h3>
        <p>{message}</p>
      </div>

      {/* Dependencias */}
      <div className="container">
        <h3>🔄 Efecto con dependencia</h3>
        <p>{messageDep}</p>
        <button onClick={() => setCount(prev => prev + 1)}>Incrementar contador</button>
      </div>

       {/* Otra dependencia */}
      <div className="container">
        <h3>🔄 Efecto con dependencia (toggle)</h3>
        <p>Estado toggle: {toggleMessage}</p>
        <button onClick={() => setToggle(prev => !prev)}>Cambiar toggle</button>
      </div>

      {/* Cleanup / Temporizador */}
      <div className="container">
        <h3>⏱️ Temporizador con cleanup</h3>
        <p>Segundos transcurridos: {seconds}</p>
      </div>
    </div>
  );
}
