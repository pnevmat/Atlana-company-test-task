import {createSelector} from 'reselect';
  
const getAllUsers = state => state.usersData;

const getAllRepositories = state => state.userRepositories;

const getUserData = state => state.userData;

const getAllUsersSelector = createSelector([getAllUsers], users => users);

const getAllRepositoriesSelector = createSelector([getAllRepositories], repositories => repositories);

const getUserDataSelector = createSelector([getUserData], userData => userData);

export default {
  getAllUsers,
  getAllRepositories,
  getUserData,
  getAllUsersSelector,
  getAllRepositoriesSelector,
  getUserDataSelector
};