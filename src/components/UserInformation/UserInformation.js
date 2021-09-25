import React from 'react';
import PropTypes from 'prop-types';

import styles from './userInformation.module.css';

const UserInformation = ({userData}) => (
  <div className={styles.userCardContainer}>
    <div className={styles.userCard}>
      <img className={styles.userAvatar} src={userData.avatar_url} />
      <div className={styles.userCardInfoContainer}>
        <div className={styles.InfoItemContainer}>
          <p className={styles.InfoItemtext}>User Name </p>
          {userData.name && <p className={styles.InfoItemtext}>{userData.name}</p>}
        </div>
        <div className={styles.InfoItemContainer}>
          <p className={styles.InfoItemtext}>Email </p>
          {userData.email && <p className={styles.InfoItemtext}>{userData.email}</p>}
        </div>
        <div className={styles.InfoItemContainer}>
          <p className={styles.InfoItemtext}>Location </p>
          {userData.location && <p className={styles.InfoItemtext}>{userData.location}</p>}
        </div>
        <div className={styles.InfoItemContainer}>
          <p className={styles.InfoItemtext}>Join Date </p>
          {userData.created_at && <p className={styles.InfoItemtext}>{userData.created_at}</p>}
        </div>
        <div className={styles.InfoItemContainer}>
          <p className={styles.InfoItemtext}>Followers </p>
          {userData.followers && <p className={styles.InfoItemtext}>{userData.followers}</p>}
        </div>
        <div className={styles.InfoItemContainer}>
          <p className={styles.InfoItemtext}>Following </p>
          {userData.following && <p className={styles.InfoItemtext}>{userData.following}</p>}
        </div>
      </div>
    </div>
    {userData.bio && <p>{userData.bio}</p>}
  </div>
);

UserInformation.defaultProps = {
  avatar: ''
};

UserInformation.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UserInformation;