import {createReducer} from '@reduxjs/toolkit';

import getUsersDataActions from '../actions/getUsersDataActions';

const usersDataReducer = createReducer([], {
    [getUsersDataActions.getUsersDataSuccess]: (_, {payload}) => [...payload]
});

export default usersDataReducer;