import React, { useState, useCallback } from "react";
import ChildButton from "./ChildButton";

const Demo4 = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  // useCallback evita que la función se recree cada render
  const handleIncrement = useCallback(() => {
    console.log("Increment clicked!");
    setCount((c) => c + 1);
  }, []);

  const handleToggle = useCallback(() => {
    console.log("Toggle clicked!");
    setOther((o) => !o);
  }, []);

  console.log("Render Demo4");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Demo 4 – React.memo / Memoización</h1>
      <p>Count: {count}</p>
      <p>Other: {other.toString()}</p>

      {/* Los hijos no se re-renderizan si sus props no cambian */}
      <ChildButton label="Increment" onClick={handleIncrement} />
      <ChildButton label="Toggle Other" onClick={handleToggle} />
    </div>
  );
};

export default Demo4;
