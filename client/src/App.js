import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import AmountInput from './components/amountInput';
import InterestRateInput from './components/interestRateInput';
import CurrencyInput from './components/currencyInput';

class App extends Component {
  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
          <h1>Savings Calculator</h1>
          <fieldset>
            <AmountInput />
            <InterestRateInput />
            <CurrencyInput />
          </fieldset>
        </form>
        <button id="calc-btn" name="calc-btn" className="btn btn-success">Figure this all out! 🤓</button>
      </div>
    );
  }
}

export default App;
