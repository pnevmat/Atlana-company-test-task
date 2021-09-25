import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({repositories, onChange}) => (
    <div className={styles.filterInputContainer}>
        <input 
            className={styles.filterInput} 
            type="text" 
            placeholder={repositories.length === 0 ? "Search for users" : "Search for User's Repositories"} 
            onChange={(e) => {
                e.preventDefault();
                const value = e.target.value;
                onChange(value);
            }
        }>
        </input>
    </div>
);

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Filter;