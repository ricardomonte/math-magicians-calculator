import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

function App() {
  const test = Calculate({ total: '5', next: 1, operator: '+' }, '=');
  console.log(test);
  return (
    <>
      <Display />
      <ButtonPanel />

    </>
  );
}

export default App;
