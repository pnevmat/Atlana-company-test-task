import {createAction} from '@reduxjs/toolkit';

const getUserRepositoriesRequest = createAction('getRepositories/getUserRepositoriesRequest');
const getUserRepositoriesSuccess = createAction('getRepositories/getUserRepositoriesSuccess');
const getUserRepositoriesError = createAction('getRepositories/getUserRepositoriesError');

export default {getUserRepositoriesRequest, getUserRepositoriesSuccess, getUserRepositoriesError};