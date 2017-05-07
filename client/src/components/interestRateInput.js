import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class InterestRateInput extends Component {

  render() {
    return (
      <div>
        <div className="form-group">
          <label className="col-md-4 control-label">Interest Rate</label>
          <div className="col-md-4">
            <div className="input-group">
              <input id="interestRate" name="interestRate" className="form-control" placeholder="0" min="0" type="number" required />
              <span className="input-group-addon">%</span>
            </div>    
          </div>
        </div>
      </div>
    );
  }

}

export default InterestRateInput;