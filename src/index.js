import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator'

ReactDOM.render(
  <React.StrictMode>
    <Calculator name={'ricardo'} />
  </React.StrictMode>,
  document.getElementById('root')
);