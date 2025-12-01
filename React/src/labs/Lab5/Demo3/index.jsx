import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./components/Counter";

export default function Demo3() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}
