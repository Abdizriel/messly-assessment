import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './kpi.scss';

class Kpi extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
    };
  
    render = () => {
        return (
            <div className="col-6 col-sm-6 col-md-3">
                <div className="kpi">
                    <div className="kpi__value">{ this.props.value }</div>
                    <div className="kpi__text">{ this.props.text }</div>
                </div>
            </div>
        );
    }
  }
  
  export default Kpi;