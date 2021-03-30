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
      <div className="w-25 bg-white">
        <Display calculation={display} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
