# Demo1 – Cambiador de tema (useState básico)

## 🎯 Objetivo

Aprender a usar el hook `useState` para manejar estado local en un componente funcional.

---

## 🧠 Conceptos clave

- `useState` permite **crear una variable de estado reactiva**.
- Su valor inicial se pasa como argumento (`useState(false)`).
- Devuelve un **par [estado, setEstado]**.
- Las actualizaciones no son inmediatas: React planifica un nuevo render.
- Siempre que necesites el valor previo, usa la forma de función:  
  `setIsDark(prev => !prev)`.

---

## ⚙️ Funcionamiento

Cada vez que el usuario pulsa el botón:

1. Se ejecuta `setIsDark(prev => !prev)`.
2. React re-renderiza el componente.
3. La clase del `div` cambia entre `"card light"` y `"card dark"`.
4. El estilo y el texto se actualizan automáticamente.

---

## 💡 Buenas prácticas

✅ No modificar el estado directamente.  
✅ Mantén el estado lo más simple posible.  
✅ Usa nombres descriptivos (`isDark`, `isOpen`, `count`, etc.).  
✅ Agrupa estados relacionados en objetos si se actualizan juntos.

---
