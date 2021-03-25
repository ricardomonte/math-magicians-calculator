import PropTypes from 'prop-types';

function Display({ calculation }) {
  return (
    <div>
      <p>{calculation}</p>
    </div>
  );
}

Display.defaultProps = {
  calculation: '0',
};

Display.propTypes = {
  calculation: PropTypes.string,
};

export default Display;
