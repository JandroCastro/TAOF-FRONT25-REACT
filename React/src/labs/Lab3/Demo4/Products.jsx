// routes/Products.jsx
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

// Loader: se ejecuta antes de montar el componente
export async function loader() {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('No se pudieron cargar los productos');
    const products = await res.json();
    return products;
}

export default function Products() {
    const products = useLoaderData();


    return (
        <div style={{ padding: 20 }}>
            <h1>Listado de Productos</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {products.map(product => (
                    <li key={product.id} style={{ marginBottom: 15, borderBottom: '1px solid #ccc', paddingBottom: 10 }}>
                        <h3>{product.title}</h3>
                        <p>Precio: ${product.price}</p>
                        <img src={product.image} alt={product.title} width={100} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
