import { useReducer } from 'react';
import './styles.css';
import * as actions  from './counterActions';
import { counterReducer, initialState } from './counterReducer';

export default function Demo7() {
  // const [state, dispatch] = useReducer(reducer, initialState);
const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="reducer-demo">
      <h2>🔄 Contador con useReducer</h2>
      <p>Count: {state.count}</p>


       <div className="buttons">
        <button onClick={() => dispatch(actions.increment())}>Incrementar</button>
        <button onClick={() => dispatch(actions.decrement())}>Decrementar</button>
        <button onClick={() => dispatch(actions.reset())}>Reset</button>
      </div>
    </div>
  );
}
