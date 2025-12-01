import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./features/counter/Counter";
import Todos from "./features/todos/Todos";
import Posts from "./features/posts/Posts";
import PostsSimpleSelector from "./features/posts/PostsSimpleSelector";
import PostsMemoizedSelectors from "./features/posts/PostsMemoizedSelectors";


export default function Demo4() {
    return (
        <Provider store={store}>
            <div style={{ padding: 20 }}>
                <h1>Demo 4 – Múltiples slices con Redux Toolkit</h1>
                {/* <Counter />
                <Todos /> */}
                {/* <Posts /> */}
                {/* <PostsSimpleSelector /> */}
                <PostsMemoizedSelectors />
            </div>
        </Provider>
    );
}
