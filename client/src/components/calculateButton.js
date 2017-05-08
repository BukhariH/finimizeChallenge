import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';


class CalculateButton extends Component {

  render() {
    return (
      <button id="calc-btn" name="calc-btn" className="btn btn-success" onClick={this.props.calcFunc}>Figure this all out! 🤓</button>
    );
  }

}

export default CalculateButton;