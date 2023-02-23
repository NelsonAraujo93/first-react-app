import { render, screen } from '@testing-library/react';
import Calculator from './components/Calculator';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Quote from './components/Quote';
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
