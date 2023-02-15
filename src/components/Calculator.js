import PropTypes from 'prop-types';

function Calculator() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        height: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: 50,
          flex: 1,
        }}
      >
        <Display numberParent={0} />
      </div>
      <div className="calc-numbers">
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayBtn string="AC" />
          <GrayBtn string="+/-" />
          <GrayBtn string="%" />
          <OrangeBtn string="/" />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayBtn string="7" />
          <GrayBtn string="8" />
          <GrayBtn string="9" />
          <OrangeBtn string="x" />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayBtn string="4" />
          <GrayBtn string="5" />
          <GrayBtn string="6" />
          <OrangeBtn string="-" />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayBtn string="1" />
          <GrayBtn string="2" />
          <GrayBtn string="3" />
          <OrangeBtn string="+" />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayBtn string="0" big />
          <GrayBtn string="." />
          <OrangeBtn string="=" />
        </div>
      </div>
    </div>
  );
}

function OrangeBtn(props) {
  const { string } = props;
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        color: 'black',
        background: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderTop: 0,
      }}
    >
      {string}
    </div>
  );
}

OrangeBtn.defaultProps = {
  string: 0,
};

OrangeBtn.propTypes = {
  string: PropTypes.string,
};

function GrayBtn(props) {
  const { string } = props;
  const { big } = props;
  return (
    <div
      style={{
        display: 'flex',
        flex: big ? 2 : 1,
        height: 50,
        color: 'black',
        background: '#dfdfdf',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: big ? 1 : 0,
        boxSizing: 'border-box',
      }}
    >
      {string}
    </div>
  );
}

GrayBtn.defaultProps = {
  string: 0,
  big: false,
};

GrayBtn.propTypes = {
  string: PropTypes.string,
  big: PropTypes.bool,
};

function Display(props) {
  const { numberParent } = props;
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        height: 50,
        color: 'white',
        background: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      {numberParent}
    </div>
  );
}

Display.defaultProps = {
  numberParent: 0,
};

Display.propTypes = {
  numberParent: PropTypes.number,
};

export default Calculator;
