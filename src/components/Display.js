import PropTypes from 'prop-types';

function Display({ calculation }) {
  return (
    <div className="border rounded bg-secondary">
      <h2 className="text-white text-right mb-0 mr-2">{calculation}</h2>
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
