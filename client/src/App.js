import React, { Component } from 'react';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import AmountInput from './components/amountInput';
import InterestRateInput from './components/interestRateInput';
import CurrencyInput from './components/currencyInput';
import AnnualEarnedInterest from './components/annualEarnedInterest';
import MonthlyEarnedInterest from './components/monthlyEarnedInterest';

class App extends Component {

  componentDidMount() {
    this.fetchCurrencies();
    this.setState({amount: 0});
    this.setState({interest: 0});
  }

  changeHandler = (event) => {
    switch(event.target.name){
      case 'amountInput':
        this.setState({amount: event.target.value});
        break;
      case 'interestRateInput':
        this.setState({interest: event.target.value});
        break;
      case 'currencyInput':
        this.setState({currency: event.target.value});
        break;
      default:
        break;
    }
  };

  render() {

    // Set currency list dropdown
    let currencyDropdownComp = null;
    if (this.state != null && this.state.currencies != null) {
      let currencyList = Object.keys(this.state.currencies)
      currencyDropdownComp = <CurrencyInput currencyList={currencyList} changeHandler={this.changeHandler} />;
    }

    let annualEarnedInterestComp = null;
    let monthlyEarnedInterestComp = null;
    if (this.state != null && this.state.annualEarned != null && this.state.annualEarnedConverted != null) {
      annualEarnedInterestComp = <AnnualEarnedInterest earned={this.state.annualEarned} earnedConversion={this.state.annualEarnedConverted}/>
      monthlyEarnedInterestComp = <MonthlyEarnedInterest earned={this.state.monthlyEarned} earnedConversion={this.state.monthlyEarnedConverted}/>
    }

    return (
      <div className="container">
        <form className="form-horizontal">
          <h1>Savings Calculator</h1>
          <fieldset>
            <AmountInput changeHandler={this.changeHandler} />
            <InterestRateInput changeHandler={this.changeHandler} />
            {currencyDropdownComp}
            {annualEarnedInterestComp}
            {monthlyEarnedInterestComp}
          </fieldset>
        </form>
        <button id="calc-btn" name="calc-btn" className="btn btn-success" onClick={this.calculate}>Figure this all out! 🤓</button>
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

  calculate = () => {
    if (this.state && this.state.currencies && this.state.amount && this.state.interest && this.state.currency) {
      const annualEarned = (this.state.amount * (this.state.interest/100)).toFixed(2);
      const annualEarnedConverted = (annualEarned * this.state.currencies[this.state.currency]).toFixed(2);
      const monthlyEarned = (annualEarned/12).toFixed(2);
      const monthlyEarnedConverted = (annualEarnedConverted/12).toFixed(2);

      this.setState({annualEarned: annualEarned, annualEarnedConverted: annualEarnedConverted, monthlyEarned: monthlyEarned, monthlyEarnedConverted: monthlyEarnedConverted});
    }
  };

}


export default App;
