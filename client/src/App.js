import React, { Component } from 'react';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import AmountInput from './components/amountInput';
import InterestRateInput from './components/interestRateInput';
import CurrencyInput from './components/currencyInput';
import AnnualEarnedInterest from './components/annualEarnedInterest';
import MonthlyEarnedInterest from './components/monthlyEarnedInterest';
import CalculateButton from './components/calculateButton';


class App extends Component {

  componentDidMount() {
    this.fetchCurrencies();
    this.setState({amount: 0});
    this.setState({interest: 0});
  }

  render() {

    // Set currency list dropdown values then load if currencies have been set
    let currencyDropdownComp = null;
    if (this.state && this.state.currencies) {
      let currencyList = Object.keys(this.state.currencies)
      currencyDropdownComp = <CurrencyInput currencyList={currencyList} changeHandler={this.changeHandler} />;
    }

    // Show results if they have been calculated
    let annualEarnedInterestComp = null;
    let monthlyEarnedInterestComp = null;
    if (this.state && this.state.annualEarned && this.state.annualEarnedConverted && this.state.monthlyEarned && this.state.monthlyEarnedConverted) {
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
        <CalculateButton calcFunc={this.calculate}/>
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

    // Event handler for inputs which sets the values in state
    changeHandler = (event) => {
        switch (event.target.name) {
            case 'amountInput':
                this.setState({
                    amount: event.target.value
                });
                break;
            case 'interestRateInput':
                this.setState({
                    interest: event.target.value
                });
                break;
            case 'currencyInput':
                this.setState({
                    currency: event.target.value
                });
                break;
            default:
                break;
        }
    };

    // Calculates the results and then sets them in the state
    calculate = () => {
        if (this.state && this.state.currencies && this.state.amount && this.state.interest && this.state.currency) {
            let annualEarned = (this.state.amount * (this.state.interest / 100)).toFixed(2);
            let annualEarnedConverted = (annualEarned * this.state.currencies[this.state.currency]).toFixed(2);
            let monthlyEarned = (annualEarned / 12).toFixed(2);
            let monthlyEarnedConverted = (annualEarnedConverted / 12).toFixed(2);

            annualEarned += " GBP";
            annualEarnedConverted += " " + this.state.currency;
            monthlyEarned += " GBP";
            monthlyEarnedConverted += " " + this.state.currency;

            this.setState({
                annualEarned: annualEarned,
                annualEarnedConverted: annualEarnedConverted,
                monthlyEarned: monthlyEarned,
                monthlyEarnedConverted: monthlyEarnedConverted
            });
        }
    };

}


export default App;
