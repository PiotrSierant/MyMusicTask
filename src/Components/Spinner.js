import React from 'react';
import styles from './Spinner.module.scss';
export function Spinner() {

    return (
        <div className={styles.loading}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}