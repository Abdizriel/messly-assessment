import * as ActionTypes from './shifts.types';
import reducer from './shifts.reducer';

describe('shifts.reducer', () => {

    const getInitialState = () => {
      return {
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
    };

    it('should set initial state by default', () => {
        const action = { type: 'unknown' };
        const state = reducer(undefined, action);
        const expected = getInitialState();

        expect(state).toEqual(expected);
    });

    it('should handle INIT_SHIFTS_DATA', () => {
        const action = { type: ActionTypes.INIT_SHIFTS_DATA };
        const state = reducer(getInitialState(), action);
        const expected = Object.assign(getInitialState(), {});

        expect(state).toEqual(expected);
    });

    it('should handle SET_SHIFTS_DATA', () => {
        const initialAction = { type: ActionTypes.INIT_SHIFTS_DATA };
        const initialState = reducer(getInitialState(), initialAction);

        const shifts = [{
            duration: 5,
            status: 'UNFILLED',
        }]
        const action = { 
            type: ActionTypes.SET_SHIFTS_DATA, 
            payload: { shifts },
        };
        const state = reducer(initialState, action);
        const expected = Object.assign(state, { shifts });

        expect(state).toEqual(expected);
    });

});