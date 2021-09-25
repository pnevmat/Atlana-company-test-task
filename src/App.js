import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getUsersDataOperation from './redux/operations/getUsersDataOperation';
import getUserDataOperation from './redux/operations/getUserDataOperation';
import getUserRepositoriesOperation from './redux/operations/getUserRepositoriesOperation';
import resetUserAndRepositoriesDataOperation from './redux/operations/resetUserAndRepositoriesDataOperation';

import selectors from './redux/selectors/selectors';

import Header from './components/Header/header';
import UserInformation from './components/UserInformation/UserInformation';
import Filter from './components/Filter/Filter'
import UsersList from './components/UsersList/UsersList';
import RepositoriesList from './components/RepositoriesList/RepositoriesList';

import './App.css';

const AtlanaRepositorySearchApp = () => {

  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(getUsersDataOperation());
    
  }, []);

  const handleChange = (value) => {
    setFilter(value);
  };

  const handleFindUsers = (users) => {
    if (filter !== '' && users.length > 0) {
      const foundUsers = users.filter(user => 
        user.login.toLowerCase().includes(filter));
      return foundUsers
    };
  };

  const handleFindRepositories = (repositories) => {
    if (filter !== '' && repositories.length > 0) {
      const foundRepositories = repositories.filter(repositorie => 
        repositorie.name.toLowerCase().includes(filter));
      return foundRepositories
    };
  };

  const handleClick = (userLogin) => {
    dispatch(getUserDataOperation(userLogin));
    dispatch(getUserRepositoriesOperation(userLogin));
  };

  const handleGoBack = () => {
    dispatch(resetUserAndRepositoriesDataOperation());
  };

  const users = useSelector(selectors.getAllUsers);
  const foundUsers = handleFindUsers(users);

  const userData = useSelector(selectors.getUserDataSelector);

  const repositories = useSelector(selectors.getAllRepositoriesSelector);
  const foundRepositories = handleFindRepositories(repositories);

  return (
      <section className="section">
        <Header onClick={handleGoBack} />
        {userData['node_id'] && <UserInformation userData={userData} />}
        <Filter repositories={repositories} onChange={handleChange} />
        {repositories.length === 0 ? 
          <UsersList filter={filter} users={users} foundUsers={foundUsers} onClick={handleClick} /> :
          <RepositoriesList filter={filter} repositories={repositories} foundRepositories={foundRepositories} />
        }
      </section>
  );
};

export default AtlanaRepositorySearchApp;