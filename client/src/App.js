import React, { Component } from 'react';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import AmountInput from './components/amountInput';
import InterestRateInput from './components/interestRateInput';
import CurrencyInput from './components/currencyInput';

class App extends Component {

  componentDidMount() {
    this.fetchCurrencies();
  }

  render() {

    let currencyDropdown = null;
    if (this.state != null && this.state.currencies != null) {
      let currencyList = Object.keys(this.state.currencies)
      currencyDropdown = <CurrencyInput currencyList={currencyList} />;
    }

    return (
      <div className="container">
        <form className="form-horizontal">
          <h1>Savings Calculator</h1>
          <fieldset>
            <AmountInput />
            <InterestRateInput />
            {currencyDropdown}
          </fieldset>
        </form>
        <button id="calc-btn" name="calc-btn" className="btn btn-success">Figure this all out! 🤓</button>
      </div>
    );
  }

    // Get currencies and conversion rates using Fetch
    fetchCurrencies = () => {
        // Get currency data from our API
        fetch("https://api-rspbfxgbum.now.sh/")
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((currencyData) => {
                this.setState({
                    currencies: currencyData["rates"]
                });
                // Set default currency
                this.setState({
                    currency: "AUD"
                });
            })
            .catch(() => {
                throw Error("Error parsing json then setting state")
                });
    };

}


export default App;
