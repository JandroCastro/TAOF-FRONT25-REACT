import { useEffect, useState } from "react";
import ItemTable from "./src/components/ItemTable";
import EditModal from "./src/components/EditModal";
import ItemForm from "./src/components/ItemForm";
import * as itemsApi from "./src/api/itemsApi";

export default function Demo3() {
    const [items, setItems] = useState([]);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    // --- GET ---
    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const data = await itemsApi.getAll();
            setItems(data);
        } catch (err) {
            alert("Error cargando datos");
        }
    }

    // --- CREATE ---
    async function handleCreate(form) {
        try {
            const created = await itemsApi.create(form);
            setItems(prev => [...prev, created]);


            //Render pesimista
            // const data = await itemsApi.getAll();
            // setItems(data);
        } catch {
            alert("No se pudo crear");
        }
    }

    // --- EDIT ---
    function openEdit(item) {
        setSelected(item);
        setIsEditOpen(true);
    }

    async function handleUpdate(updatedItem) {
        try {
            const updated = await itemsApi.update(updatedItem.id, updatedItem);

            setIsEditOpen(false);
        } catch {
            alert("Error actualizando");
        }
        finally {
            setItems(prev =>
                prev.map(item => (item.id === updated.id ? updated : item))
            );
        }
    }

    // --- DELETE ---
    async function handleDelete(id) {
        if (!confirm("¿Seguro que quieres borrarlo?")) return;

        try {
            await itemsApi.remove(id);
            setItems(prev => prev.filter(item => item.id !== id));
        } catch {
            alert("No se pudo borrar");
        }
    }

    return (
        <div style={{ padding: 20, fontFamily: "sans-serif" }}>
            <h1>CRUD Demo</h1>

            <h2>Crear nuevo ítem</h2>
            <ItemForm onSubmit={handleCreate} />

            <h2>Listado</h2>
            <ItemTable
                items={items}
                onEdit={openEdit}
                onDelete={handleDelete}
            />

            <EditModal
                open={isEditOpen}
                item={selected}
                onClose={() => setIsEditOpen(false)}
                onSave={handleUpdate}
            />
        </div>
    );
}
