import {createReducer} from '@reduxjs/toolkit';

import getUserDataActions from '../actions/getUserDataActions';
import resetActions from '../actions/resetActions';

const usersDataReducer = createReducer([], {
    [getUserDataActions.getUserDataSuccess]: (_, {payload}) => payload,
    [resetActions.resetSuccess]: (_, {payload}) => payload
});

export default usersDataReducer;