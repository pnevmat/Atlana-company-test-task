import {createAction} from '@reduxjs/toolkit';

const getUsersDataRequest = createAction('getUsers/getUsersDataRequest');
const getUsersDataSuccess = createAction('getUsers/getUsersDataSuccess');
const getUsersDataError = createAction('getUsers/getUsersDataError');

export default {getUsersDataRequest, getUsersDataSuccess, getUsersDataError};