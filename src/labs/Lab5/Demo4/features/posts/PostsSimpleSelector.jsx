import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchPosts, addPost, updatePost, deletePost,
    selectPosts, selectLoading, selectErrors
} from "./postsSlice";

export default function PostsSimpleSelector() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const loading = useSelector(selectLoading);
    const errors = useSelector(selectErrors);

    const [title, setTitle] = useState("");
    const [editId, setEditId] = useState(null);

    useEffect(() => { dispatch(fetchPosts()); }, [dispatch]);

    const handleSave = () => {
        if (editId) dispatch(updatePost({ id: editId, data: { title } }));
        else dispatch(addPost({ title, author: "Jandro" }));
        setTitle(""); setEditId(null);
    };

    return (
        <div>
            <h2>Posts (Simple Selectors)</h2>
            {loading && <p>Loading...</p>}
            {Object.entries(errors).map(([key, err]) => err && <p key={key} style={{ color: "red" }}>{key} error: {err}</p>)}

            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Post title" />
            <button onClick={handleSave}>{editId ? "Update" : "Add"}</button>

            <ul>
                {posts.map(p => (
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
