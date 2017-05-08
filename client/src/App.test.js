import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AmountInput from './components/amountInput';
import InterestRateInput from './components/interestRateInput';
import CurrencyInput from './components/currencyInput';
import AnnualEarnedInterest from './components/annualEarnedInterest';
import MonthlyEarnedInterest from './components/monthlyEarnedInterest';
import CalculateButton from './components/calculateButton';

const emptyFunc = ()=>{};

describe('<App />', () => {
  it('renders the base container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<h1>Savings Calculator</h1>)).toEqual(true);
  });

  it('renders amount input component', () => {
    const wrapper = shallow(<AmountInput changeHandler={emptyFunc} />);
    expect(wrapper.contains("Initial Amount")).toEqual(true);
  });

  it('renders interest rate component', () => {
    const wrapper = shallow(<InterestRateInput changeHandler={emptyFunc} />);
    expect(wrapper.contains("Interest Rate")).toEqual(true);
  });

  it('renders currency component', () => {
    const wrapper = shallow(<CurrencyInput currencyList={["USD", "EUR"]} changeHandler={emptyFunc} />);
    expect(wrapper.find('option').length).toEqual(2);
  });

  it('renders annual earned intrest component', () => {
    const wrapper = shallow(<AnnualEarnedInterest earned={"100 GBP"} earnedConversion={"110 USD"} />);
    expect(wrapper.find('input').length).toEqual(2);
  });

  it('renders montly earned intrest component', () => {
    const wrapper = shallow(<MonthlyEarnedInterest earned={"55 GBP"} earnedConversion={"60 USD"} />);
    expect(wrapper.find('input').length).toEqual(2);
  });

  it('renders calculate button', () => {
    const wrapper = shallow(<CalculateButton calcFunc={emptyFunc}/>);
    expect(wrapper.contains("Figure this all out! 🤓")).toEqual(true);
  });
});
