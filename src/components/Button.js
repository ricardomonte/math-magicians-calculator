import PropTypes from 'prop-types';

function Button({ name, onClick }) {
  const signsClass = ['÷', 'X', '-', '+', '='];
  let classButton = 'btn h-100 bg-button-';
  classButton += signsClass.includes(name) ? 'orange' : 'normal';
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
