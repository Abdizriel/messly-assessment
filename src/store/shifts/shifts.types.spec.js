import * as ActionTypes from './shifts.types';

describe('shifts.types', () => {
    it('should have INIT_SHIFTS_DATA type', () => {
        const expected = 'INIT_SHIFTS_DATA';

        expect(typeof ActionTypes.INIT_SHIFTS_DATA).toEqual('string');
        expect(ActionTypes.INIT_SHIFTS_DATA).toEqual(expected);
    });

    it('should have SHIFTS_INITIALIZED type', () => {
        const expected = 'SHIFTS_INITIALIZED';

        expect(typeof ActionTypes.SHIFTS_INITIALIZED).toEqual('string');
        expect(ActionTypes.SHIFTS_INITIALIZED).toEqual(expected);
    });

    it('should have SET_SHIFTS_DATA type', () => {
        const expected = 'SET_SHIFTS_DATA';

        expect(typeof ActionTypes.SET_SHIFTS_DATA).toEqual('string');
        expect(ActionTypes.SET_SHIFTS_DATA).toEqual(expected);
    });
})