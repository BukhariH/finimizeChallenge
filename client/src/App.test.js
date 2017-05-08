import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AmountInput from './components/amountInput';
import InterestRateInput from './components/interestRateInput';
import CurrencyInput from './components/currencyInput';
import AnnualEarnedInterest from './components/annualEarnedInterest';
import MonthlyEarnedInterest from './components/monthlyEarnedInterest';


describe('<App />', () => {
  it('renders the base container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<h1>Savings Calculator</h1>)).toEqual(true);
  });

  it('renders amount input component', () => {
    const wrapper = shallow(<AmountInput changeHandler={()=>{}} />);
    expect(wrapper.contains("Initial Amount")).toEqual(true);
  });

  it('renders interest rate component', () => {
    const wrapper = shallow(<InterestRateInput changeHandler={()=>{}} />);
    expect(wrapper.contains("Interest Rate")).toEqual(true);
  });

  it('renders currency component', () => {
    const wrapper = shallow(<CurrencyInput currencyList={["USD", "EUR"]} changeHandler={()=>{}} />);
    expect(wrapper.find('option').length).toEqual(2);
  });

  it('renders annual earned intrest component', () => {
    const wrapper = shallow(<AnnualEarnedInterest earned={100} earnedConversion={110} />);
    expect(wrapper.find('input').length).toEqual(2);
  });

  it('renders montly earned intrest component', () => {
    const wrapper = shallow(<MonthlyEarnedInterest earned={55} earnedConversion={60} />);
    expect(wrapper.find('input').length).toEqual(2);
  });
});
