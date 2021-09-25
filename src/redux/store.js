import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import usersDataReducer from './reducers/usersDataReducer';
import userDataReducer from './reducers/userDataReducer';
import userRepositoriesReducer from './reducers/userRepositoriesReducer';
import errorReducer from './reducers/errorReducer';

import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        usersData: usersDataReducer,
        userData: userDataReducer,
        userRepositories: userRepositoriesReducer,
        error: errorReducer
    },
    middleware: process.env.NODE_ENV === 'development' ?
        [...getDefaultMiddleware({ serializableCheck: false }), logger] :
        [...getDefaultMiddleware({ serializableCheck: false })],
        devTools: process.env.NODE_ENV === 'development'
});

export default {store};