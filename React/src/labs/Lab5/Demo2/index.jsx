import React from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import { store } from "./store/store";

export default function Demo2() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}
