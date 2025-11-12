// Estado inicial
export const initialState = { count: 0 };

// Función reductora
export function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error('Acción desconocida');
    }
}
