import {
    INIT_SHIFTS_DATA,
    SET_SHIFTS_DATA,
} from './shifts.types';

export const initShiftsData = () => ({
    type: INIT_SHIFTS_DATA
})

export const setShiftsData = shifts => ({
    type: SET_SHIFTS_DATA,
    payload: {
        shifts
    },
});