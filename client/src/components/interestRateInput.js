import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

class InterestRateInput extends Component {

  render() {
    return (
      <div>
        <div className="form-group">
          <label className="col-md-4 control-label">Interest Rate</label>
          <div className="col-md-4">
            <div className="input-group">
              <input name="interestRateInput" className="form-control" placeholder="0" min="0" type="number" onChange={this.props.changeHandler} required />
              <span className="input-group-addon">%</span>
            </div>    
          </div>
        </div>
      </div>
    );
  }

}

InterestRateInput.propTypes = {
  changeHandler: PropTypes.func.isRequired
};

export default InterestRateInput;