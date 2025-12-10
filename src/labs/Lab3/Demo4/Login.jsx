// routes/Login.jsx
import { useActionData, Form, redirect } from 'react-router-dom';

// Action: procesa el login
export async function action({ request }) {
    const formData = await request.formData();
    const username = formData.get('username');
    const role = formData.get('role'); // "admin" o "user"

    // Validación simple
    if (!username || !role) {
        return { error: 'Debes ingresar un usuario y seleccionar un rol' };
    }

    // Simula login: normalmente aquí harías fetch a backend
    // Guardamos en localStorage para demo
    localStorage.setItem('user', JSON.stringify({ username, role }));

    // Redirige según rol
    if (role === 'admin') return redirect('/admin');
    return redirect('/user');
}

export default function Login() {
    const actionData = useActionData();

    return (
        <div style={{ padding: 20 }}>
            <h1>Login</h1>

            {actionData?.error && (
                <div style={{ color: 'red', marginBottom: 10 }}>{actionData.error}</div>
            )}

            <Form method="post">
                <div style={{ marginBottom: 10 }}>
                    <label>Usuario:</label><br />
                    <input name="username" placeholder="Nombre de usuario" />
                </div>

                <div style={{ marginBottom: 10 }}>
                    <label>Rol:</label><br />
                    <select name="role">
                        <option value="">Selecciona un rol</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>

                <button type="submit">Entrar</button>
            </Form>
        </div>
    );
}
