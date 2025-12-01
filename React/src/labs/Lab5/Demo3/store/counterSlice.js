import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.count += 1; // gracias a Immer
        },
        decrement(state) {
            state.count -= 1;
        },
        reset(state) {
            state.count = 0;
        },
    },
});

export const { increment, decrement, reset } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
