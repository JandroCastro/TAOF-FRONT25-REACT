import React, { useRef } from "react";

const UncontrolledForm = () => {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre enviado: ${nameRef.current.value}`);
  };

  console.log("Render UncontrolledForm");

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario No Controlado</h2>
      <label>
        Nombre:
        <input type="text" ref={nameRef} style={{ marginLeft: "10px" }} />
      </label>
      <button type="submit" style={{ marginLeft: "10px" }}>
        Enviar
      </button>
    </form>
  );
};

export default UncontrolledForm;
