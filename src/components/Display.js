import PropTypes from 'prop-types';

function Display({ calculation }) {
  return (
    <div className="Display hpx-100">
      <h1>{calculation}</h1>
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
