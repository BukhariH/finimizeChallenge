import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AmountInput from './components/amountInput';
import InterestRateInput from './components/interestRateInput';
import CurrencyInput from './components/currencyInput';

it('renders the base component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<h1>Savings Calculator</h1>)).toEqual(true);
});

it('renders amount input component', () => {
  const wrapper = shallow(<AmountInput />);
  expect(wrapper.contains("Initial Amount")).toEqual(true);
});

it('renders interest rate component', () => {
  const wrapper = shallow(<InterestRateInput />);
  expect(wrapper.contains("Interest Rate")).toEqual(true);
});

it('renders currency component', () => {
  const wrapper = shallow(<CurrencyInput />);
  expect(wrapper.contains("Currency to convert to")).toEqual(true);
});

it('renders currency component', () => {
  const wrapper = shallow(<CurrencyInput />);
  expect(wrapper.contains("Currency to convert to")).toEqual(true);
});