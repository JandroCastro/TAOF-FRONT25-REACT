# Demo 5 – Parámetros en la URL (Referidos + Feature Flag)

## 🎯 Objetivo

Mostrar cómo usar parámetros en la URL como **fuente de datos** reales en una aplicación React.

En esta demo aprenderás a:

- Leer parámetros con `useSearchParams`.
- Activar un layout o funcionalidad según la URL (`layout=promo`).
- Capturar un código de referido (`ref=XYZ`) y **persistirlo** en un contexto.
- Pasar esa información a otra pantalla (por ejemplo, a un checkout).
- Usar navegación programática (`useNavigate`).

---

## 🧠 Caso realista

Un usuario llega a `/product?ref=ibai32&layout=promo`.  
Queremos:

1. Mostrar un layout promocional si `layout=promo`.
2. Guardar el código de referido `ibai32`.
3. Al pulsar “Comprar”, redirigir a `/checkout`.
4. En `/checkout`, mostrar el código referido aplicado.

---

## 📄 Archivos

### `ReferralContext.jsx`

Guarda temporalmente el código del referido.

### `Product.jsx`

Lee parámetros de la URL y activa:

- Banner promocional si `layout=promo`.
- Guardado del referido en el contexto.

### `Checkout.jsx`

Accede al contexto para leer el código del referido.

### `App.jsx`

Define las rutas del ejemplo.

---

## 🚀 Ejecución del ejemplo

Entra en:

/product?ref=ibai32&layout=promo

Pulsa **Comprar**.  
Serás dirigido al checkout, donde verás:

Cód. de referido aplicado: ibai32

---

## ✔️ Qué se enseña en esta demo

- Cómo los parámetros pueden **activar funcionalidad** (feature flag).
- Cómo se **persisten datos** de la URL con context.
- Relación entre UI ↔ URL como fuente de estado.
- Navegación programática simple con `useNavigate`.

---
