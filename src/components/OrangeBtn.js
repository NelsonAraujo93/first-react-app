import PropTypes from 'prop-types';

function OrangeBtn(props) {
  const { string } = props;
  const { clickCalc } = props;
  const { first } = props;
  return (
    <button
      type="button"
      onClick={() => { clickCalc(string); }}
      style={{
        display: 'flex',
        flex: 1,
        color: 'black',
        background: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        boxSizing: 'border-box',
        borderTopColor: first ? 'gray' : '#efefef',
        borderTopWidth: first ? 1 : 0,
      }}
    >
      {string}
    </button>
  );
}

OrangeBtn.defaultProps = {
  string: '',
  first: false,
  clickCalc: () => {},
};

OrangeBtn.propTypes = {
  string: PropTypes.string,
  first: PropTypes.bool,
  clickCalc: PropTypes.func,
};

export default OrangeBtn;
