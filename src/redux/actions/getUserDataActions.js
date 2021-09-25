import {createAction} from '@reduxjs/toolkit';

const getUserDataRequest = createAction('getUser/getUserDataRequest');
const getUserDataSuccess = createAction('getUser/getUserDataSuccess');
const getUserDataError = createAction('getUser/getUserDataError');

export default {getUserDataRequest, getUserDataSuccess, getUserDataError};