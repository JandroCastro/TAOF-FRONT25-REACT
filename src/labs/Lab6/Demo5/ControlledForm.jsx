import React, { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre enviado: ${name}`);
  };

  console.log("Render ControlledForm");

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Formulario Controlado</h2>
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </label>
      <button type="submit" style={{ marginLeft: "10px" }}>
        Enviar
      </button>
      <p>Valor actual: {name}</p>
    </form>
  );
};

export default ControlledForm;
