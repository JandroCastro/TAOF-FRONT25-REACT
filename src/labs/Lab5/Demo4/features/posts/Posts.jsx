import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, addPost, updatePost, deletePost } from "./postsSlice";

export default function Posts() {
    const dispatch = useDispatch();
    const { items, loading, errors } = useSelector(state => state.posts);
    const [title, setTitle] = useState("");
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleSave = () => {
        if (editId) dispatch(updatePost({ id: editId, data: { title } }));
        else dispatch(addPost({ title, author: "Jandro" }));
        setTitle("");
        setEditId(null);
    };

    // const handleSaveOptimistic = () => {
    //     // 1️⃣ Actualizamos la UI inmediatamente
    //     const tempId = Date.now();
    //     dispatch({
    //         type: "posts/addPost/fulfilled",
    //         payload: { id: tempId, title, author: "Jandro (optimistic)" },
    //     });
    //     setTitle("");

    //     // 2️⃣ Llamamos al thunk real para persistir en "backend"
    //     dispatch(addPost({ title, author: "Jandro" }))
    //         .unwrap()
    //         .then(() => {
    //             // 3️⃣ Opcional: volver a fetch para sincronizar con datos reales
    //             dispatch(fetchPosts());
    //         })
    //         .catch((err) => {
    //             console.error("Error al guardar:", err);

    //             // 4️⃣ Rollback: eliminamos el post temporal
    //             dispatch({
    //                 type: "posts/delete/fulfilled",
    //                 payload: tempId,
    //             });
    //         });

    // };

    return (
        <div>
            <h2>Posts (Direct State)</h2>
            {loading && <p>Loading...</p>}
            {Object.entries(errors).map(([key, err]) => err && <p key={key} style={{ color: "red" }}>{key} error: {err}</p>)}

            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Post title" />
            <button onClick={handleSave}>{editId ? "Update" : "Add"}</button>

            <ul>
                {items.map(p => (
                    <li key={p.id}>
                        {p.title} ({p.author})
                        <button onClick={() => { setEditId(p.id); setTitle(p.title); }}>Edit</button>
                        <button onClick={() => dispatch(deletePost(p.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
