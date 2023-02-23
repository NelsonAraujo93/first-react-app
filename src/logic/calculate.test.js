import calculate from './calculate';

test('Test calculator and operator sum n1: 6 plus n2: 4', () => {
  const cal = {
    next: '6',
    total: '4',
    operation: '+',
  };
  expect(calculate(cal, '=').total).toBe('10');
});

test('Test calculator and operator substraction n1: 6 - n2: 4', () => {
  const cal = {
    next: '4',
    total: '6',
    operation: '-',
  };
  expect(calculate(cal, '=').total).toBe('2');
});

test('Test calculator and operator divition n1: 6 ÷ n2: 3', () => {
  const cal = {
    next: '3',
    total: '6',
    operation: '÷',
  };
  expect(calculate(cal, '=').total).toBe('2');
});

test('Test calculator and operator multiplication n1: 6 x n2: 4', () => {
  const cal = {
    next: '6',
    total: '4',
    operation: 'x',
  };
  expect(calculate(cal, '=').total).toBe('24');
});

test('Test calculator and operator module n1: 23 % n2: 5', () => {
  const cal = {
    next: '5',
    total: '23',
    operation: '%',
  };
  expect(calculate(cal, '=').total).toBe('3');
});
