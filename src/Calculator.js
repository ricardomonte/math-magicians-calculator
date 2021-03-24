import PropTypes from 'prop-types'

function Calculator(props) {
  return(
    <div>
      <h1>hello world {props.name}</h1>
    </div>
  );
}

Calculator.propTypes = {
  name: PropTypes.string.isRequired
}

export default Calculator;