import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operator: null,
    };
  }

  handleClick = (simbolOperation) => {
    const result = Calculate(this.state, simbolOperation);
    console.log(result);
    this.setState(result);
  }

  render() {
    const { total, next, operator } = this.state;
    let display = '0';
    if (next) {
      display = total + operator + next;
    } else if ((operator && operator !== '=') && total) {
      display = total + operator;
    } else {
      display = total || '0';
    }

    return (
      <div>
        <Display calculation={display} />
        <ButtonPanel onClick={this.handleClick} />

      </div>
    );
  }
}

export default App;
