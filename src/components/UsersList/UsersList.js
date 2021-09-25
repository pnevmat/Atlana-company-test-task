import React from 'react';
import PropTypes from 'prop-types';

import styles from './usersList.module.css';

const UsersList = ({filter, users, foundUsers, onClick}) => (
  <ul className={styles.usersList}>
    {filter === '' ?
      users.map(user => (
        <li className={styles.usersListItem} key={user.node_id}>
            <button className={styles.usersListItemButton} type="button" onClick={e => onClick(user.login)}>
              <img className={styles.usersListItemAvatar} src={user.avatar_url} />
              <p className={styles.usersListItemName}>{user.login}</p>
              <p className={styles.usersListItemName}>Repo:##</p>
            </button>
        </li>
      )) :
      foundUsers.map(user => (
        <li className={styles.usersListItem} key={user.node_id}>
            <button className={styles.usersListItemButton} type="button" onClick={e => onClick(user.login)}>
              <img className={styles.usersListItemAvatar} src={user.avatar_url} />
              <p className={styles.usersListItemName}>{user.login}</p>
              <p className={styles.usersListItemName}>Repo:##</p>
            </button>
        </li>
      ))
    }
  </ul>
);

UsersList.defaultProps = {
  avatar: '',
  foundUsers: []
};

UsersList.propTypes = {
  foundUsers: PropTypes.arrayOf(
    PropTypes.object
  ),
  users: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UsersList;