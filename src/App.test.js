import { render, screen } from '@testing-library/react';
import Calculator from './components/Calculator';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Quote from './components/Quote';
import calculate from './logic/calculate';
import RouterNav from './Router';

test('Test if RouterNav is well build', () => {
  render(<RouterNav />);
  expect(screen.getByText('Math Magicians')).toBeInTheDocument();
});

test('Test if Calculator is well build', () => {
  render(<Calculator />);
  expect(screen.getByText('Lets do some math!')).toBeInTheDocument();
});

test('Test if Home is well build', () => {
  render(<Home />);
  expect(screen.getByText('Welcome to our main page!')).toBeInTheDocument();
});

test('Test if Quote is well build', () => {
  render(<Quote />);
  expect(screen.getByText('Pure mathematics is, in its way, the poetry of logical ideas.')).toBeInTheDocument();
});

test('Test if ErrorPage is well build', () => {
  render(<ErrorPage />);
  expect(screen.getByText('Ups...Something went wrong!')).toBeInTheDocument();
});

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
