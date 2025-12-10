// App.jsx
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Link
} from "react-router-dom";
import Login, { action as loginAction } from "./Login";
import Products, { loader as productsLoader } from "./Products";

function Nav() {
  return (
    <nav>
      <Link to="/products">Products</Link>
    </nav>
  );
}

function Admin() {
  return (
    <div>
      <Nav />
      Panel de Administración
    </div>
  );
}

function User() {
  return (
    <div>
      <Nav />
      Área de Usuario
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/login", element: <Login />, action: loginAction },
  { path: "/admin", element: <Admin /> },
  { path: "/user", element: <User /> },
  { path: "/products", element: <Products />, loader: productsLoader },
  // { path: "/", loader: () => redirect("/login") },
]);

export default function Demo4() {
  return <RouterProvider router={router} />;
}
