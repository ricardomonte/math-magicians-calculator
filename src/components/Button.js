import PropTypes from 'prop-types';

function Button({ name, onClick }) {
  const signsClass = ['AC', '+/-', '%', '÷', 'X', '-', '+', '='];
  let classButton = 'btn h-25 btn-outline-';
  classButton += signsClass.includes(name) ? 'danger' : 'info';
  classButton += name === '0' ? ' w-50' : ' w-25';
  return (
    <button
      type="button"
      onClick={() => onClick(name)}
      className={classButton}
    >
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,

};

export default Button;
