import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders the base component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<h1>Savings Calculator</h1>)).toEqual(true);
});
