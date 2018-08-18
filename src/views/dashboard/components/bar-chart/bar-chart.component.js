import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const hexToRgbA = (hex, alpha) => {
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' + alpha + ')';
    }
    throw new Error('Bad Hex');
}

const colorMap = {
    UNFILLED: '#FF7F45',
    CONFIRMED: '#39B118',
    CANCELLED: '#DC4040',
};

export default class BarChart extends Component {
    static propTypes = {
      shifts: PropTypes.object.isRequired,
    };

    getData = () => {
        const datasets = Object.keys(this.props.shifts.charts)
            .map(key => ({
                label: key,
                backgroundColor: hexToRgbA(colorMap[key], 0.2),
                borderColor: hexToRgbA(colorMap[key], 1),
                borderWidth: 1,
                hoverBackgroundColor: hexToRgbA(colorMap[key], 0.4),
                hoverBorderColor: hexToRgbA(colorMap[key], 1),
                data: [
                    this.props.shifts.charts[key].SHORT_SHIFT, 
                    this.props.shifts.charts[key].MEDIUM_SHIFT, 
                    this.props.shifts.charts[key].LONG_SHIFT,
                ]
            }))

        return {
            datasets,
            labels: ['1-4', '5-8', '9-12'],
        };
    };

    render = () => (
        <div className="col-12 col-sm-12 col-md-6">
            <div className="chart">
                <Bar data={this.getData()} />
            </div>
        </div>
    );
}