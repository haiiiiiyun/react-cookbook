import { useReducer } from 'react';
import { reducer } from './reducer';

import './puzzle.css';

export const Puzzle = () => {
  const [state, dispatch] = useReducer(reducer, {
    items: ['4', '1', '2', '7', '6', '3', null, '5', '8']
  });

  return (
    <div className="Puzzle">
      <div className="Puzzle-squares">
        {state.items.map((s, i) => (
          <div
            role="button"
            tabIndex={0}
            className={`Puzzle-square ${s ? '' : 'Puzzle-square-empty'}`}
            key={`square-${i}`}
            onClick={() => dispatch({ type: 'move', payload: i })}
            onKeyUp={() => {}}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="Puzzle-controls">
        <button className="Puzzle-shuffle" onClick={() => dispatch({ type: 'shuffle' })}>
          Shuffle
        </button>
        <button className="Puzzle-reset" onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </div>
      {state.complete && <div className="Puzzle-complete">Complete!</div>}
    </div>
  );
};
