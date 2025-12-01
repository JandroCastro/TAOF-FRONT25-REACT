import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, addPost, updatePost, deletePost } from "./postsSlice";
import { selectPostsByAuthor, selectPostCountByKeyword, selectPostsSummaryByAuthor } from "./postsSelector";

export default function PostsMemoizedSelectors() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [editId, setEditId] = useState(null);
    const [authorFilter, setAuthorFilter] = useState("");
    const [keyword, setKeyword] = useState("");

    useEffect(() => { dispatch(fetchPosts()); }, [dispatch]);

    const filteredByAuthor = useSelector(selectPostsByAuthor(authorFilter));
    const countByKeyword = useSelector(selectPostCountByKeyword(keyword));
    const summaryByAuthor = useSelector(selectPostsSummaryByAuthor);

    const handleSave = () => {
        if (editId) dispatch(updatePost({ id: editId, data: { title } }));
        else dispatch(addPost({ title, author: "Jandro" }));
        setTitle(""); setEditId(null);
    };

    return (
        <div>
            <h2>Posts (Memoized Selectors)</h2>

            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Post title" />
            <button onClick={handleSave}>{editId ? "Update" : "Add"}</button>

            <h3>Filtrar por autor</h3>
            <input value={authorFilter} onChange={e => setAuthorFilter(e.target.value)} placeholder="Autor" />
            <ul>
                {filteredByAuthor.map(p => <li key={p.id}>{p.title} ({p.author})</li>)}
            </ul>

            <h3>Contar posts por palabra clave</h3>
            <input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Palabra clave" />
            <p>Posts con "{keyword}": {countByKeyword}</p>

            <h3>Resumen de posts por autor</h3>
            <ul>
                {Object.entries(summaryByAuthor).map(([author, count]) => (
                    <li key={author}>{author}: {count}</li>
                ))}
            </ul>
        </div>
    );
}
