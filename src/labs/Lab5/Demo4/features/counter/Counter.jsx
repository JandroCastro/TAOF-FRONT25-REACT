import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, add } from "./counterSlice";

export default function Counter() {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.counter.value);
    const [amount, setAmount] = useState(1);

    return (
        <div style={{ marginBottom: 20 }}>
            <h2>Counter</h2>
            <p>Value: {value}</p>

            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>

            <div style={{ marginTop: 10 }}>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    style={{ width: 60 }}
                />
                <button onClick={() => dispatch(add(amount))}>Add</button>
            </div>
        </div>
    );
}
