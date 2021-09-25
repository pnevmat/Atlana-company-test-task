import {createReducer} from '@reduxjs/toolkit';

import getUserRepositoriesActions from '../actions/getUserRepositoriesActions';
import resetActions from '../actions/resetActions';

const userRepositoriesReducer = createReducer([], {
    [getUserRepositoriesActions.getUserRepositoriesSuccess]: (_, {payload}) => payload,
    [resetActions.resetSuccess]: (_, {payload}) => payload
});

export default userRepositoriesReducer;