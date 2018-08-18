import { connect } from 'react-redux';

import BarChart from './bar-chart.component';

const mapStateToProps = ({ shifts }) => ({
    shifts,
});

export default connect(
    mapStateToProps,
    null
)(BarChart);