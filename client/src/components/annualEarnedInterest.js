import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

class AnnualEarnedInterest extends Component {

  render() {
    return (
      <div>
        <div className="form-group">
          <label className="col-md-4 control-label">Interest Earned Over Year</label>
          <div className="col-md-4">
            <div className="input-group">
              <input type="text" className="form-control" placeholder={this.props.earned} disabled />
              <span className="input-group-addon" />
              <input type="text" className="form-control" placeholder={this.props.earnedConversion} disabled />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

AnnualEarnedInterest.propTypes = {
  earned: PropTypes.string,
  earnedConversion: PropTypes.string
};

export default AnnualEarnedInterest;