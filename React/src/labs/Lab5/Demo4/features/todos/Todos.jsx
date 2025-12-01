import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./todosSlice";

export default function Todos() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const [text, setText] = useState("");

    return (
        <div>
            <h2>Todos</h2>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="New todo"
            />
            <button onClick={() => text && dispatch(addTodo(text))}>Add</button>

            <ul>
                {todos.map((t) => (
                    <li key={t.id}>
                        {t.text}
                        <button onClick={() => dispatch(removeTodo(t.id))}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
