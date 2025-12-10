import React from "react";
import ControlledForm from "./ControlledForm";
import UncontrolledForm from "./UncontrolledForm";

const Demo5 = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Demo 5 – Formularios: Controlado vs No Controlado</h1>
      <ControlledForm />
      <UncontrolledForm />
    </div>
  );
};

export default Demo5;
