import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';

import Dashboard from './dashboard.component';
import * as shiftsActions from '../../store/shifts/shifts.actions';

const mapStateToProps = ({ shifts }) => ({
    shifts,
});

const mapDispatchToProps = (dispatch) => ({
    shiftsActions: bindActionCreators(shiftsActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);