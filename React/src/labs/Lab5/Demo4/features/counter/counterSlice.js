import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        add: (state, action) => {
            state.value += action.payload;
        }
    },
});

export const { increment, decrement, add } = counterSlice.actions;
export default counterSlice.reducer;
