import React from 'react';
import HoverProvider from './HoverProvider';

const Demo2 = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Demo 2 – Render Props</h1>

      <HoverProvider>
        {({ isHovered, onMouseEnter, onMouseLeave }) => (
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
              width: 200,
              height: 100,
              lineHeight: '100px',
              textAlign: 'center',
              border: '2px solid black',
              backgroundColor: isHovered ? 'lightblue' : 'white',
              marginBottom: 10,
              cursor: 'pointer'
            }}
          >
            {isHovered ? '¡Estoy sobre ti!' : 'Pasa el ratón'}
          </div>
        )}
      </HoverProvider>

      <HoverProvider>
        {({ isHovered, onMouseEnter, onMouseLeave }) => (
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
              width: 200,
              height: 100,
              lineHeight: '100px',
              textAlign: 'center',
              border: '2px solid black',
              backgroundColor: isHovered ? 'lightgreen' : 'white',
              cursor: 'pointer'
            }}
          >
            {isHovered ? '¡Hover en el segundo!' : 'Otro cuadro'}
          </div>
        )}
      </HoverProvider>
    </div>
  );
};

export default Demo2;
