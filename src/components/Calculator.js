import PropTypes from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';
import OrangeBtn from './OrangeBtn';
import GrayBtn from './GrayBtn';

function Calculator() {
  const [calculator, setCalculator] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const clickCalc = (value) => {
    const newCalculator = calculate(calculator, value);
    setCalculator(newCalculator);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 1300,
        margin: '0 auto',
        boxSizing: 'border-box',
        paddingLeft: 30,
        paddingRight: 30,
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <p style={{ fontSize: 28, color: 'black', fontWeight: 700 }}>Lets do some math!</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 600,
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
            numberParent={calculator.next || calculator.total || '0'}
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
    </div>
  );
}

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
