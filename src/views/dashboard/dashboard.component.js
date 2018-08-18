import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import CoreLayout from '../../shared/containers/layout/core';
import Kpi from './components/kpi';
import PieChart from './components/pie-chart';
import BarChart from './components/bar-chart';

export default class Dashboard extends Component {
  static propTypes = {
    shifts: PropTypes.object.isRequired,
    shiftsActions: PropTypes.object.isRequired,
  };

  componentDidMount = () => {
    this.props.shiftsActions.initShiftsData();
  }

  render = () => {
    return (
      <CoreLayout>
        <Fragment>
          <div className="row">
            <Kpi 
              text="Unfilled shifts"
              value={this.props.shifts.kpis.UNFILLED} />
            <Kpi 
              text="Confirmed shifts"
              value={this.props.shifts.kpis.CONFIRMED} />
            <Kpi 
              text="Cancelled shifts"
              value={this.props.shifts.kpis.CANCELLED} />
            <Kpi 
              text="Confirmed or unfilled shifts"
              value={this.props.shifts.kpis.UNFILLEDORCONFIRMED} />
          </div>
          <div className="row">
            <PieChart />
            <BarChart />
          </div>
        </Fragment>
      </CoreLayout>
    );
  }
}