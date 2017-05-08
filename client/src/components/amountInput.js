import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

class AmountInput extends Component {

  render() {
    return (
      <div>
        <div className="form-group">
          <label className="col-md-4 control-label">Initial Amount</label>
          <div className="col-md-4">
            <div className="input-group">
              <span className="input-group-addon">£</span>
              <input name="amountInput" className="form-control" placeholder="0" min="0" type="number" onChange={this.props.changeHandler} required />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

AmountInput.propTypes = {
  changeHandler: PropTypes.func
};

export default AmountInput;