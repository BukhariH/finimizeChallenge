import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

class CurrencyInput extends Component {

  render() {
    return (
      <div>
        <div className="form-group">
          <label className="col-md-4 control-label">Currency to convert to</label>
          <div className="col-md-4">
            <select name="currencyInput" className="form-control" onChange={this.props.changeHandler} required>
              {this.props.currencyList.map(value =>
                <option
                  key={value}
                >
                  {value}
                </option> 
              )}  
            </select>
          </div>
        </div>
      </div>
    );
  }

}

CurrencyInput.propTypes = {
  changeHandler: PropTypes.function
};

export default CurrencyInput;