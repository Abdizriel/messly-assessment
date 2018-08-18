import { ofType } from 'redux-observable';
import { map, windowTime, delay } from 'rxjs/operators';
import { Picker }from 'random-picker';

import {
    INIT_SHIFTS_DATA,
    SHIFTS_INITIALIZED,
    SET_SHIFTS_DATA
} from './shifts.types';

const INITIAL_SHIFT_ARRAY_SIZE = 1000;
const MINIMAL_SHIFT_DURATION = 1;
const MAXIMAL_SHIFT_DURATION = 12;
const DEFAULT_SHIFT_STATE = 'UNFILLED';
const SHIFT_UPDATE_TIMEINTERVAL = 1000;

export const initDataEpic = action$ => action$.pipe(
    ofType(INIT_SHIFTS_DATA),
    map(() => ({
        type: SHIFTS_INITIALIZED,
        payload: {
            shifts: Array.from(Array(INITIAL_SHIFT_ARRAY_SIZE)).map(_makeDummyShift),
        },
    }))
);

export const shiftsInitializedEpic = (action$, state$) => action$.pipe(
    ofType(SHIFTS_INITIALIZED),
    delay(10000),
    windowTime(SHIFT_UPDATE_TIMEINTERVAL),
    map(() => {
        return {
        type: SET_SHIFTS_DATA,
        payload: {
            shifts: state$.value.shifts.shifts.map(_getNewStatus)
        }
    }})
);

function _randomIntFromInterval (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function _makeDummyShift () {
    return {
        duration: _randomIntFromInterval(MINIMAL_SHIFT_DURATION, MAXIMAL_SHIFT_DURATION),
        status: DEFAULT_SHIFT_STATE
    }
}

function _getNewStatus (shift) {
    const picker = new Picker();
    picker.option('UNFILLED', 97);
    picker.option('CONFIRMED', shift.duration > 6 ? 2 : 1);
    picker.option('CANCELLED', shift.duration > 6 ? 1 : 2);

    shift.status = picker.pick();
    return shift;
}