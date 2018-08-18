
import * as ActionTypes from './shifts.types';
import * as ActionCreators from './shifts.actions';

describe('shifts.actions', () => {
    it('should create an action to get initial shifts', () => {
        const expected = {
            type: ActionTypes.INIT_SHIFTS_DATA,
        };

        expect(typeof (ActionCreators.initShiftsData())).toEqual('object');
        expect(ActionCreators.initShiftsData()).toEqual(expected);
    });

    it('should create an action to set shifts', () => {
        const shifts = [{
            duration: 5,
            status: 'UNFILLED',
        }];
        const expected = {
            type: ActionTypes.SET_SHIFTS_DATA,
            payload: { shifts },
        };

        expect(typeof (ActionCreators.setShiftsData(shifts))).toEqual('object');
        expect(ActionCreators.setShiftsData(shifts)).toEqual(expected);
    });
});