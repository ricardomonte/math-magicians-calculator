import PropTypes from 'prop-types';

function Button({ name, onClick }) {
  return (
    <button type="button" onClick={() => onClick(name)}>{ name }</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,

};

export default Button;
