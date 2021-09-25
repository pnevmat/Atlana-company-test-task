import {createAction} from '@reduxjs/toolkit';

const resetRequest = createAction('resetActions/resetDataRequest');
const resetSuccess = createAction('resetActions/resetSuccess');
const resetError = createAction('resetActions/resetError');

export default {resetRequest, resetSuccess, resetError};