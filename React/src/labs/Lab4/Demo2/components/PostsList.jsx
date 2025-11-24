import { useFetch } from "../hooks/useFetch";



export default function PostsList() {
    const { data: posts, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (loading) return <p>Cargando posts...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <ul style={{ marginTop: "1rem" }}>
            {posts?.slice(0, 10).map((p) => (
                <li key={p.id} style={{ marginBottom: "1rem" }}>
                    <strong>{p.title}</strong>
                    <p>{p.body}</p>
                </li>
            ))}
        </ul>
    );
}
