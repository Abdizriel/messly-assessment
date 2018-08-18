import { connect } from 'react-redux';

import PieChart from './pie-chart.component';

const mapStateToProps = ({ shifts }) => ({
    shifts,
});

export default connect(
    mapStateToProps,
    null
)(PieChart);