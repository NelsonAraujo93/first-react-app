import PropTypes from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculator, setCalculator] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const [displayNumber, setDisplayNumber] = useState('0');

  const byPassNext = (calculator) => {
    if (calculator.next) {
      return setDisplayNumber(calculator.next);
    }
    if (calculator.total) {
      return setDisplayNumber(calculator.total);
    }
    return setDisplayNumber('0');
  };
  const clickCalc = (value) => {
    const newCalculator = calculate(calculator, value);
    setCalculator(newCalculator);
    byPassNext(newCalculator);
  };

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
        <Display
          numberParent={displayNumber}
        />
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
          <GrayBtn string="AC" clickCalc={clickCalc} />
          <GrayBtn string="+/-" clickCalc={clickCalc} />
          <GrayBtn string="%" clickCalc={clickCalc} />
          <OrangeBtn string="÷" first clickCalc={clickCalc} />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayBtn string="7" clickCalc={clickCalc} />
          <GrayBtn string="8" clickCalc={clickCalc} />
          <GrayBtn string="9" clickCalc={clickCalc} />
          <OrangeBtn string="x" clickCalc={clickCalc} />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayBtn string="4" clickCalc={clickCalc} />
          <GrayBtn string="5" clickCalc={clickCalc} />
          <GrayBtn string="6" clickCalc={clickCalc} />
          <OrangeBtn string="-" clickCalc={clickCalc} />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayBtn string="1" clickCalc={clickCalc} />
          <GrayBtn string="2" clickCalc={clickCalc} />
          <GrayBtn string="3" clickCalc={clickCalc} />
          <OrangeBtn string="+" clickCalc={clickCalc} />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayBtn string="0" clickCalc={clickCalc} big />
          <GrayBtn string="." clickCalc={clickCalc} />
          <OrangeBtn string="=" clickCalc={clickCalc} />
        </div>
      </div>
    </div>
  );
}

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

function GrayBtn(props) {
  const { string } = props;
  const { big } = props;
  const { clickCalc } = props;
  return (
    <button
      type="button"
      onClick={() => { clickCalc(string); }}
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
        paddingLeft: big ? 8 : 0,
        boxSizing: 'border-box',
      }}
    >
      {string}
    </button>
  );
}

GrayBtn.defaultProps = {
  string: 0,
  big: false,
  clickCalc: () => {},
};

GrayBtn.propTypes = {
  string: PropTypes.string,
  big: PropTypes.bool,
  clickCalc: PropTypes.func,
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
        justifyContent: 'flex-end',
        boxSizing: 'border-box',
        paddingRight: 8,
        paddingLeft: 8,
      }}
    >
      {numberParent}
    </div>
  );
}

Display.defaultProps = {
  numberParent: '0',
};

Display.propTypes = {
  numberParent: PropTypes.string,
};

export default Calculator;
