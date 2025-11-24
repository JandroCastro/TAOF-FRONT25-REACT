# Demo 3 — CRUD Completo (GET / POST / PUT / DELETE)

## 🎯 Objetivo

Crear una mini-aplicación funcional que realice un CRUD completo contra una API REST real. Esta demo introduce los conceptos fundamentales que cualquier aplicación profesional necesita:

- Leer datos desde un servidor (GET)
- Crear nuevos recursos (POST)
- Editar recursos existentes (PUT)
- Eliminar recursos (DELETE)
- Manejar errores básicos con `try/catch`
- Utilizar modales y formularios reutilizables

Todo con **React + JavaScript** y **JSON Server** como backend.

---

# 🛠️ Tecnologías usadas

- **React**: componentes, estado, efectos.
- **JavaScript**: async/await, fetch API.
- **JSON Server**: API REST real sin backend complejo.

---

# 🚀 Puesta en marcha

## 1. Instala dependencias

```bash
npm install
```

## 2. Arranca el backend (JSON Server)

```bash
npx json-server --watch db.json --port 4000
```

La API quedará disponible en:

```
GET    http://localhost:4000/items
POST   http://localhost:4000/items
PUT    http://localhost:4000/items/:id
DELETE http://localhost:4000/items/:id
```

## 3. Inicia la app

```bash
npm run dev
```

---

# 📁 Estructura del proyecto

```
demo3-crud/
│
├── db.json
├── src/
│   ├── api/
│   │   └── itemsApi.js
│   ├── components/
│   │   ├── ItemTable.jsx
│   │   ├── ItemForm.jsx
│   │   └── EditModal.jsx
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

---

# 🧠 Conceptos explicados en esta demo

## 1. GET — Obtener datos del backend

Al cargar la app, hacemos una petición GET:

```js
useEffect(() => {
  loadData();
}, []);

async function loadData() {
  try {
    const data = await itemsApi.getAll();
    setItems(data);
  } catch {
    alert("Error cargando datos");
  }
}
```

Se enseña:

- cómo hacer peticiones asíncronas,
- cómo manejar errores,
- y cómo renderizar los datos en una tabla.

---

## 2. POST — Crear un nuevo ítem

```js
async function handleCreate(form) {
  try {
    const created = await itemsApi.create(form);
    setItems((prev) => [...prev, created]);
  } catch {
    alert("No se pudo crear");
  }
}
```

El formulario limpia los datos al terminar.
Se aprende:

- envío de datos al backend,
- actualización local del estado,
- y montaje de formularios controlados.

---

## 3. PUT — Editar un elemento con modal

Se reutiliza **el mismo formulario** tanto para crear como para editar.

```jsx
<EditModal
  open={isEditOpen}
  item={selected}
  onClose={() => setIsEditOpen(false)}
  onSave={handleUpdate}
/>
```

```js
async function handleUpdate(updatedItem) {
  try {
    const updated = await itemsApi.update(updatedItem.id, updatedItem);
    setItems((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item))
    );
    setIsEditOpen(false);
  } catch {
    alert("Error actualizando");
  }
}
```

Aprendizaje:

- cómo pasar datos a un modal,
- cómo cerrar modales,
- patrón de formularios reutilizables,
- actualizar un elemento dentro de una lista.

---

## 4. DELETE — Eliminar con confirmación

```js
async function handleDelete(id) {
  if (!confirm("¿Seguro que quieres borrarlo?")) return;

  try {
    await itemsApi.remove(id);
    setItems((prev) => prev.filter((item) => item.id !== id));
  } catch {
    alert("No se pudo borrar");
  }
}
```

Se enseña:

- cómo implementar una confirmación mínima,
- filtrado de listas,
- manejo de errores en DELETE.

---

# 🔍 Estado pesimista vs estado optimista

## Estado pesimista (el que usa esta demo)

1. Enviamos la petición al backend.
2. Cuando responde OK → actualizamos el UI.

Es más seguro y fácil de entender.

## Estado optimista (explicación opcional)

1. Actualizamos el UI antes de la respuesta.
2. Guardamos un backup.
3. Si falla → hacemos rollback.

Sirve para interfaces muy rápidas y fluidas.

No lo implementamos para mantener la demo simple, pero es útil explicarlo.

# 🎓 Qué aprendemos en esta demo

- Cómo trabajar con APIs REST desde React.
- Cómo manejar estado y efectos con datos remotos.
- Formularios controlados y reusables.
- Modales en React de forma simple.
- CRUD completo con error handling básico.
- Patrones reales usados en aplicaciones profesionales.
