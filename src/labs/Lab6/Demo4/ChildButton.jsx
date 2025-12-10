import React from "react";

// Hijo memoizado
const ChildButton = React.memo(({ label, onClick }) => {
  console.log(`Render: ${label}`);
  return (
    <button
      onClick={onClick}
      style={{
        margin: "5px",
        padding: "10px 20px",
        border: "2px solid #333",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
});

export default ChildButton;
