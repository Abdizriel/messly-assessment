import { combineEpics } from 'redux-observable';

import * as shifts from './shifts/shifts.epics';

export default combineEpics(
    ...Object.values(shifts),
);