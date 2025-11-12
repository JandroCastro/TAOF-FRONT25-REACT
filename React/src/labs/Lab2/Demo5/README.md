# Demo5 – Uso completo de useEffect

## 🎯 Objetivo

Explorar los principales patrones de `useEffect` en React:

1. **Efecto al montar** → ejecutar código cuando el componente aparece.
2. **Efecto con dependencia** → ejecutar código cuando cambia un estado específico.
3. **Efecto con cleanup** → limpiar temporizadores o subscripciones al desmontar.

---

## 🧠 Conceptos clave

### 1️⃣ Efecto al montar

- Se ejecuta solo una vez al montar el componente.
- Se logra pasando un array de dependencias vacío `[]`.
- Ideal para inicializaciones y logs.

### 2️⃣ Efecto con dependencia

- Se ejecuta al montar y cada vez que **cambia la dependencia**.
- Array de dependencias `[count]` → el efecto se dispara cuando `count` cambia.
- Útil para sincronizar efectos con estados específicos.

### 3️⃣ Efecto con cleanup

- Se devuelve una función dentro de `useEffect`.
- Se ejecuta al desmontar o antes de re-ejecutar el efecto si cambian dependencias.
- Crucial para temporizadores, listeners, suscripciones, fetch cancelables, etc.

---

## ⚙️ Funcionamiento de la demo

| Contenedor             | Qué muestra            | Comportamiento                                         |
| ---------------------- | ---------------------- | ------------------------------------------------------ |
| Efecto al montar       | Mensaje inicial        | Se actualiza solo al montar el componente              |
| Dependencias           | Contador y mensaje     | Cada cambio del contador dispara el efecto             |
| Cleanup / Temporizador | Segundos transcurridos | El temporizador se limpia automáticamente al desmontar |

---

## 💡 Buenas prácticas

- Siempre incluir **array de dependencias** correcto.
- Usar **función de cleanup** cuando sea necesario.
- Evitar efectos que dependan de valores que puedan cambiar fuera del render.
- Separar efectos lógicos diferentes en `useEffect` distintos.

---

## 🧩 Próximo paso

Aprenderemos **useReducer** para manejar estados complejos y transiciones controladas en un solo lugar.
