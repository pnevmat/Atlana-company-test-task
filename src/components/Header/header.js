import React from 'react';
import PropTypes from 'prop-types';

import styles from './header.module.css'

const Header = ({onClick}) => {
    return (
        <section className={styles.header}>
            <button className={styles.goBackButton} type='button' onClick={onClick}>
                <h1 className={styles.headerTitle}>GitHub Searcher</h1>
            </button>
        </section>
    );
};

Header.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Header;