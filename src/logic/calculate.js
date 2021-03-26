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
        total: '',
        next: '',
        operator: '',
      };

    case '=':
      if (next === '0' && buttonName === '÷') {
        return {
          total: NaN,
          next: '',
          operator: '',
        };
      }
      return {
        total: next ? Operate(total, next, operator) : total,
        next: '',
        operator: '',
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
          next: `${buttonName}`,
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
        total: `${buttonName}`,
        next,
        operator,
      };

    default:
      if (operator) {
        return {
          total: next ? Operate(total, next, operator) : NaN,
          next: '',
          operator: buttonName,
        };
      }
      break;
  }
  return { total: next, next: '', operator: buttonName };
};

export default Calculate;
