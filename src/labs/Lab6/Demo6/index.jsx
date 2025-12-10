import React from "react";
import { useForm } from "react-hook-form";

const Demo6 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      name: "",
      email: ""
    },
    mode: "onChange" // valida y actualiza mientras escribes
  });

  const onSubmit = (data) => {
    alert(`Formulario enviado:\n${JSON.stringify(data, null, 2)}`);
    reset();
  };

  const watchedValues = watch(); // observa todos los campos en tiempo real

  return (
    <div style={{ padding: "20px" }}>
      <h1>Demo 6 – React Hook Form</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "400px"
        }}
      >
        {/* Nombre */}
        <label>
          Nombre:
          <input
            {...register("name", { required: "El nombre es obligatorio" })}
            style={{ marginLeft: "10px" }}
          />
        </label>
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}

        {/* Email */}
        <label>
          Email:
          <input
            type="email"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de email inválido"
              }
            })}
            style={{ marginLeft: "10px" }}
          />
        </label>
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}

        <div style={{ marginTop: "10px" }}>
          <button type="submit" style={{ marginRight: "10px" }}>
            Enviar
          </button>
          <button type="button" onClick={() => reset()}>
            Limpiar
          </button>
        </div>
      </form>

      <div style={{ marginTop: "20px" }}>
        <strong>Valor actual del formulario:</strong>
        <pre>{JSON.stringify(watchedValues, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Demo6;
