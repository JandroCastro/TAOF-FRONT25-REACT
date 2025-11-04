import React from 'react'

export const Step2CreateElement = () => {
  const titulo = React.createElement(
    "h1",
    { style: { color: "darkblue" } },
    "Hola mundo (React.createElement)"
  );

  const parrafo = React.createElement(
    "p",
    null,
    "Generado con React puro, sin JSX."
  );

  // Agrupamos todos los elementos en un array
  const elementos = [titulo, parrafo];

  // Devolvemos un único div padre que contiene todos
  return React.createElement("div", null, elementos);
};
