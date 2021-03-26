import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);
  let result;

  switch (operation) {
    case '+':
      result = firstNumber.plus(secondNumber);
      break;
    case '-':
      result = firstNumber.minus(secondNumber);
      break;
    case 'X':
      result = firstNumber.times(secondNumber);
      break;
    case '÷':
      result = firstNumber.div(secondNumber);
      break;
    case '%':
      result = (firstNumber.div(100)).times(secondNumber);
      break;
    default:
      result = null;
  }
  return result.toString();
};

export default Operate;
