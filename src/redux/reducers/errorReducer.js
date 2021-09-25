import {createReducer} from '@reduxjs/toolkit';

import getUsersDataActions from '../actions/getUsersDataActions';
import getUserDataActions from '../actions/getUserDataActions';
import getUserRepositoriesActions from '../actions/getUserRepositoriesActions';
import resetActions from '../actions/resetActions';

const usersDataReducer = createReducer('', {
    [getUsersDataActions.getUsersDataError]: (_, {payload}) => payload,
    [getUserDataActions.getUserDataError]: (_, {payload}) => payload,
    [getUserRepositoriesActions.getUserRepositoriesError]: (_, {payload}) => payload,
    [resetActions.resetError]: (_, {payload}) => payload
});

export default usersDataReducer;