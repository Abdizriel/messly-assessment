import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';

export default class PieChart extends Component {
    static propTypes = {
      shifts: PropTypes.object.isRequired,
    };

    getData = () => ({
        labels: [
            'UNFILLED',
            'CONFIRMED',
            'CANCELLED',
        ],
        datasets: [{
            data: [
                this.props.shifts.kpis.UNFILLED, 
                this.props.shifts.kpis.CONFIRMED, 
                this.props.shifts.kpis.CANCELLED,
            ],
            backgroundColor: [
            '#FF7F45',
            '#39B118',
            '#DC4040',
            ],
            hoverBackgroundColor: [
            '#FF7F45',
            '#39B118',
            '#DC4040',
            ]
        }],
    });

    render = () => (
        <div className="col-12 col-sm-12 col-md-6">
            <div className="chart">
                <Pie data={this.getData()} />
            </div>
        </div>
    );
}