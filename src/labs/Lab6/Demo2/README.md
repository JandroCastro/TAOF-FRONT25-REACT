
# Demo 2 — Render Props / Function as Child

## 🎯 Objetivo

Aprender a **compartir lógica entre componentes** sin duplicarla usando el patrón **Render Props** (también llamado Function as Child).  

Caso simple: un **hover state provider**, que permite a cualquier componente usar el estado de hover sin implementar la lógica varias veces.

Conceptos clave:

- **Render Props**: un componente recibe una función como prop (`children`) y le pasa datos/lógica.  
- **Separación de responsabilidades**: el provider maneja el estado, los hijos solo renderizan la UI.  
- **Reutilización de lógica**: varios componentes pueden compartir la misma lógica de hover sin duplicar código.

---

# 🛠️ Tecnologías usadas

- **React + TypeScript**: componentes, props, estado.
- **useState**: manejo de estado local.
- **Render Props / Function as Child**: patrón de compartición de lógica.

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
Demo 2 – Render Props
```

y dos cuadros que cambian de color al pasar el ratón, usando la misma lógica de hover.

---

# 📁 Estructura del proyecto

```
Lab6/
└── Demo2/
    ├── index.tsx          # Componente raíz Demo2
    └── HoverProvider.tsx  # Componente con Render Props
```

---

# 🧠 Conceptos explicados en esta demo

## 1. HoverProvider (Render Props)

```tsx
const HoverProvider: React.FC<Props> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return <>{children({ isHovered, onMouseEnter, onMouseLeave })}</>;
};
```

* Maneja **estado de hover**.
* Pasa datos y callbacks al **children** como función.
* Permite que cualquier componente reutilice esta lógica.

---

## 2. Uso en múltiples componentes

```tsx
<HoverProvider>
  {({ isHovered, onMouseEnter, onMouseLeave }) => (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        width: 200,
        height: 100,
        textAlign: 'center',
        border: '2px solid black',
        backgroundColor: isHovered ? 'lightblue' : 'white',
      }}
    >
      {isHovered ? '¡Estoy sobre ti!' : 'Pasa el ratón'}
    </div>
  )}
</HoverProvider>
```

* Dos o más componentes pueden usar **HoverProvider** sin duplicar la lógica.
* El provider solo se encarga del **estado**, los hijos solo renderizan.

---

# 🎓 Relevancia actual

* El patrón **Render Props** sigue siendo válido y útil, especialmente para **bibliotecas existentes** o casos donde el children necesita lógica dinámica.
* Sin embargo, hoy se prefiere usar **Custom Hooks** para lógica reutilizable, ya que:

  * Evita nesting excesivo (menos “callback hell” visual).
  * Es más simple de componer y testear.
  * Facilita el uso en múltiples componentes sin modificar la estructura de render.

**Ejemplo moderno equivalente usando Hook:**

```ts
const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return { isHovered, onMouseEnter, onMouseLeave };
};
```

```tsx
const Box = () => {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover();
  return <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{isHovered ? 'Hover' : 'Normal'}</div>;
};
```

* Patrón más limpio, sin nesting de funciones, y muy usado en proyectos modernos.

---

# ✅ Ventajas del patrón Render Props

* Comparte lógica entre componentes sin duplicarla.
* Separación clara entre **estado/lógica** y **UI**.
* Testabilidad del provider de forma independiente.
* Útil para interactuar con librerías que exigen children como función.

