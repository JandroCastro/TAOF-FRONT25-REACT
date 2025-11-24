import { useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchPosts() {
      try {
        setLoading(true);

        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error("Error al cargar los posts");
        }

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }


    fetchPosts();

    return () => controller.abort();
  }, []);

  if (loading) return <Spinner />
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <ul style={{ marginTop: "1rem" }}>
      {posts.slice(0, 10).map((p) => (
        <li key={p.id} style={{ marginBottom: "1rem" }}>
          <strong>{p.title}</strong>
          <p>{p.body}</p>
        </li>
      ))}
    </ul>
  );
}
