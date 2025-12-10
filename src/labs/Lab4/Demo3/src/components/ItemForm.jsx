import { useState } from "react";

export default function ItemForm({ item, onSubmit }) {
    const [form, setForm] = useState({
        name: item?.name || "",
        price: item?.price || ""
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(form);
        setForm({ name: "", price: "" });
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
            <input
                name="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleChange}
            />

            <input
                name="price"
                placeholder="Precio"
                type="number"
                step="0.01"
                value={form.price}
                onChange={handleChange}
            />

            <button type="submit">Guardar</button>
        </form>
    );
}
