
# Demo 1 — Container/Presenter Pattern

## 🎯 Objetivo

Aprender a separar **lógica** y **UI** usando el patrón **Container/Presenter** (también llamado Smart/Dumb Components). Este patrón facilita:

- **Testabilidad:** puedes probar la lógica sin necesidad de renderizar la UI.
- **Reusabilidad:** los componentes visuales se pueden usar en distintos contextos.
- **Lectura y mantenimiento:** la lógica y la presentación están claramente separadas.

Idea clave:

- **Container (Smart Component)**: maneja estado, efectos, lógica de negocio, llamadas a APIs, filtrados, etc.
- **Presenter (Dumb Component)**: recibe datos y callbacks como props y solo se encarga de renderizar la UI.

Se usa mucho en proyectos **React grandes**, donde separar responsabilidades ayuda a mantener el código limpio y testeable.

---

# 🛠️ Tecnologías usadas

- **React + TypeScript**: componentes, props, estado.
- **useState / useEffect**: manejo de estado local y efectos simples.
- Patrón **Container / Presenter** para separar lógica de presentación.

---

# 🚀 Puesta en marcha

## 1. Instala dependencias

```bash
npm install
````

## 2. Inicia la app

```bash
npm run dev
```

En el navegador verás:

```
Demo 1 – Container/Presenter
```

y la lista de usuarios con botón de filtrado.

---

# 📁 Estructura del proyecto

```
Lab6/
└── Demo1/
    ├── index.tsx         # Componente raíz Demo1
    ├── UserContainer.tsx # Container (Smart)
    └── UserPresenter.tsx # Presenter (Dumb)
```

---

# 🧠 Conceptos explicados en esta demo

## 1. Container (Smart Component)

```tsx
const UserContainer = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [showOnlyJ, setShowOnlyJ] = useState(false);

  const toggleFilter = () => setShowOnlyJ(!showOnlyJ);

  const filteredUsers = showOnlyJ ? users.filter(u => u.name.startsWith('J')) : users;

  return <UserPresenter users={filteredUsers} onToggleFilter={toggleFilter} showOnlyJ={showOnlyJ} />;
};
```

* Maneja **estado** y **lógica de filtrado**.
* Prepara los **datos** para el presenter.
* Es fácilmente **testeable** sin renderizar la UI.

---

## 2. Presenter (Dumb Component)

```tsx
const UserPresenter: React.FC<Props> = ({ users, showOnlyJ, onToggleFilter }) => {
  return (
    <div>
      <button onClick={onToggleFilter}>
        {showOnlyJ ? 'Mostrar todos' : 'Mostrar solo nombres que empiezan con J'}
      </button>

      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
};
```

* Solo se **encarga de renderizar la UI**.
* No tiene lógica propia de negocio.
* Puede reutilizarse en distintos containers si el **contrato de props** se mantiene.

---

# 🎓 Cuándo usar este patrón

* Proyectos medianos/grandes donde los componentes empiezan a tener **demasiada lógica** mezclada con UI.
* Para **formularios complejos**, listas filtrables, dashboards.
* Cuando quieres **testear la lógica sin depender del DOM**.
* Facilita la **colaboración**: un desarrollador puede trabajar en el presenter y otro en la lógica.

---

# ✅ Ventajas

* Código más limpio y mantenible.
* Reutilización de componentes visuales.
* Testabilidad de la lógica sin renderizar componentes.
* Separación clara de responsabilidades: UI vs datos/lógica.

