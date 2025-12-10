import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";

export default function Counter() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <h2>Contador con Redux Toolkit</h2>
            <p style={{ fontSize: "2rem" }}>{count}</p>

            <button onClick={() => dispatch(increment())}>+1</button>

            <button
                onClick={() => dispatch(decrement())}
                style={{ margin: "0 1rem" }}
            >
                -1
            </button>

            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}
