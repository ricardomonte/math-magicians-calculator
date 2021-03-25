import Operate from './operate';

const Calculate = ({ total, next, operator }, buttonName) => {
  switch (buttonName) {
    case '+/-':
      if (total) {
        const number = parseInt(total, 10) * -1;
        return {
          total: number.toString(),
          next,
          operator,
        };
      }
      return {
        total,
        next: (parseInt(next, 10) * -1).toString(),
        operator,
      };

    case 'AC':
      return {
        total: null,
        next: null,
        operator: null,
      };

    case '=':
      if (next === '0' && buttonName === '÷') {
        return {
          total: NaN,
          next: null,
          operator: null,
        };
      }
      return {
        total: next ? Operate(total, next, operator) : total,
        next: null,
        operator: null,
      };

    case '%':
      return {
        total: next ? Operate(total, next, operator) : NaN,
        next: null,
        operator: null,
      };

    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      if (operator) {
        return {
          total,
          next: next ? `${next} ${buttonName}` : buttonName,
          operator,
        };
      }

      return {
        total: total ? `${total} ${buttonName}` : buttonName,
        next,
        operator,

      };

    case '.':
      if (operator) {
        if (next) {
          return {
            total,
            next: `${next}${buttonName}`,
            operator,
          };
        }

        return {
          total,
          next: `0${buttonName}`,
          operator,
        };
      }
      if (total) {
        return {
          total: `${total}${buttonName}`,
          next,
          operator,
        };
      }
      return {
        total: `0${buttonName}`,
        next,
        operator,
      };

    default:
      if (operator) {
        return {
          total: next ? Operate(total, next, operator) : NaN,
          next: null,
          operator: buttonName,
        };
      }
      break;
  }
  return { total: next, next: null, operator: buttonName };
};

export default Calculate;
