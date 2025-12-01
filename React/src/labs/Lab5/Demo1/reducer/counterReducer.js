import { ACTIONS } from "./counterActions";
console.log("🚀 ~ ACTIONS:", ACTIONS)

export const initialState = {
    count: 0,
};

export function counterReducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { ...state, count: state.count + 1 };

        case ACTIONS.DECREMENT:
            return { ...state, count: state.count - 1 };

        case ACTIONS.RESET:
            return { ...state, count: 0 };

        default:
            return state;
    }
}
