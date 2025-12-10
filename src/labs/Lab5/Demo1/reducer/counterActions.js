export const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET",
};

export const increment = () => ({ type: ACTIONS.INCREMENT });
export const decrement = () => ({ type: ACTIONS.DECREMENT });
export const reset = () => ({ type: ACTIONS.RESET });
