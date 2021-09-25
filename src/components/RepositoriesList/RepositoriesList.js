import React from 'react';
import PropTypes from 'prop-types';

import styles from './repositoriesList.module.css';

const RepositoriesList = ({filter, repositories, foundRepositories}) => (
  <ul className={styles.repositoriesList}>
    {filter === '' ?
      repositories.map(repositorie => (
        <li className={styles.repositoriesItem} key={repositorie.node_id}>
          <div className={styles.contact_item_container}>
            <a className={styles.repositoriesListItemLink} href={repositorie.html_url} target="_blank">
              <p className={styles.contact_name}>{repositorie.name}</p>
              <div className={styles.repositoriesListItemContainer}>
                <div className={styles.repositoriesListTextContainer}>
                  <p className={styles.repositoriesListItemName}>Forks </p>
                  {repositorie.forks && <p className={styles.repositoriesListItemName}>{repositorie.forks}</p>}
                </div>
                <div className={styles.repositoriesListTextContainer}>
                  <p className={styles.repositoriesListItemName}>Stars </p>
                  {repositorie.stargazers_count && <p className={styles.repositoriesListItemName}>{repositorie.stargazers_count}</p>}
                </div>
              </div>
            </a>
          </div>
        </li>
      )) :
      foundRepositories.map(repositorie => (
        <li className={styles.repositoriesItem} key={repositorie.node_id}>
          <div className={styles.contact_item_container}>
            <a className={styles.repositoriesListItemLink} href={repositorie.html_url} target="_blank">
              <p className={styles.contact_name}>{repositorie.name}</p>
              <div className={styles.repositoriesListItemContainer}>
                <div className={styles.repositoriesListTextContainer}>
                  <p className={styles.repositoriesListItemName}>Forks </p>
                  {repositorie.forks && <p className={styles.repositoriesListItemName}>{repositorie.forks}</p>}
                </div>
                <div className={styles.repositoriesListTextContainer}>
                  <p className={styles.repositoriesListItemName}>Stars </p>
                  {repositorie.stargazers_count && <p className={styles.repositoriesListItemName}>{repositorie.stargazers_count}</p>}
                </div>
              </div>
            </a>
          </div>
        </li>
      ))
    }
  </ul>
);

RepositoriesList.defaultProps = {
  avatar: '',
  foundRepositories: []
};

RepositoriesList.propTypes = {
    foundRepositories: PropTypes.arrayOf(
      PropTypes.object
    ),
    repositories: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired,
    filter: PropTypes.string.isRequired,
};

export default RepositoriesList;