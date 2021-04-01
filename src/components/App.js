import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

function App() {
  const [state, setState] = useState({ total: null, next: null, operator: null });

  const handleClick = (simbolOperation) => {
    setState(Calculate(state, simbolOperation));
  };

  const result = () => {
    const { total, next, operator } = state;
    let display = '0';
    if (next) {
      display = total + operator + next;
    } else if ((operator && operator !== '=') && total) {
      display = total + operator;
    } else {
      display = total || '0';
    }
    return display;
  };

  return (
    <>
      <div className="Math">
        <h2>Let&acute;s do some math </h2>
      </div>
      <div className="w-100 h-100 App">
        <Display calculation={result()} />
        <ButtonPanel onClick={handleClick} />
      </div>
    </>
  );
}

export default App;
