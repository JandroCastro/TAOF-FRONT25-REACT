import ItemForm from "./ItemForm";

export default function EditModal({ open, item, onClose, onSave }) {
    if (!open) return null;

    return (
        <div style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{ background: "white", padding: 20, width: 300 }}>
                <h3>Editar ítem</h3>

                <ItemForm
                    item={item}
                    onSubmit={(data) => onSave({ ...item, ...data })}
                />

                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}
