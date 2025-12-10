import { useReducer } from "react";
import { increment, decrement, reset } from "./reducer/counterActions";
import { counterReducer, initialState } from "./reducer/counterReducer";

const Counter = () => {

    const [state, dispatch] = useReducer(counterReducer, initialState);

    const handleClickMas = () => {
        dispatch({ type: 'INCREMENT' })
    };

    return (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <h2>Contador con useReducer</h2>
            <p style={{ fontSize: "2rem" }}>{state.count}</p>

            <button onClick={handleClickMas}>+1</button>
            <button onClick={() => dispatch(decrement())} style={{ margin: "0 1rem" }}>
                -1
            </button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );

}


export default function Demo1() {

    return (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div>
    );
}
