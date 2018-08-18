import {
    SHIFTS_INITIALIZED,
    SET_SHIFTS_DATA,
} from './shifts.types';

const INITIAL_STATE = {
    shifts: [],
    kpis: {
        UNFILLED: 0,
        CONFIRMED: 0,
        CANCELLED: 0,
        UNFILLEDORCONFIRMED: 0,
    },
    charts: {
        UNFILLED: {
            SHORT_SHIFT: 0,
            MEDIUM_SHIFT: 0,
            LONG_SHIFT: 0,
        },
        CONFIRMED: {
            SHORT_SHIFT: 0,
            MEDIUM_SHIFT: 0,
            LONG_SHIFT: 0,
        },
        CANCELLED: {
            SHORT_SHIFT: 0,
            MEDIUM_SHIFT: 0,
            LONG_SHIFT: 0,
        },
    },
};

export default (state = INITIAL_STATE, action = {}) => {
    switch(action.type) {
        case SHIFTS_INITIALIZED:
        case SET_SHIFTS_DATA:
            return {
                ...state,
                shifts: action.payload.shifts,
                kpis: {
                    UNFILLED: _getUnfilledKPI(action.payload.shifts),
                    CONFIRMED: _getConfirmedKPI(action.payload.shifts),
                    CANCELLED: _getCancelledKPI(action.payload.shifts),
                    UNFILLEDORCONFIRMED: _getUnfilledOrConfirmedKPI(action.payload.shifts),
                },
                charts: _getChartData(action.payload.shifts),
            };

        default:
            return state;
    }
};

function _getUnfilledKPI (shifts) {
    return shifts.filter(({ status }) => status === 'UNFILLED').length
}

function _getConfirmedKPI (shifts) {
    return shifts.filter(({ status }) => status === 'CONFIRMED').length
}

function _getCancelledKPI (shifts) {
    return shifts.filter(({ status }) => status === 'CANCELLED').length
}

function _getUnfilledOrConfirmedKPI (shifts) {
    return shifts.filter(({ status }) => status === 'UNFILLED' || status === 'CONFIRMED').length
}

function _getShiftDescription (duration) {
    if (duration >= 9) return 'LONG_SHIFT';
    if (duration >= 5) return 'MEDIUM_SHIFT';
    return 'SHORT_SHIFT';
}

function _getChartData (shifts) {
    return shifts.reduce((data, { status, duration }) => {
        const term = _getShiftDescription(duration);

        return {
            ...data,
            [status]: {
                ...data[status],
                [term]: data[status][term] + 1,
            },
        };
    }, INITIAL_STATE.charts);
}