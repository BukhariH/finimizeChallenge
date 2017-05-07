import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class AmountInput extends Component {

  render() {
    return (
      <div>
        <div className="form-group">
          <label className="col-md-4 control-label">Initial Amount</label>
          <div className="col-md-4">
            <div className="input-group">
              <span className="input-group-addon">£</span>
              <input id="prependedtext" name="prependedtext" className="form-control" placeholder="0" type="number" required/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default AmountInput;