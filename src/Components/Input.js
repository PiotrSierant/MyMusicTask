import React from 'react';
import styles from './Input.module.scss'
export function Input({info, type, text, value, handleChange}) {

    return (
        <label htmlFor={info} className={styles.form__label}>
            {text}
            <input
                type={type}
                name={info}
                id={info}
                placeholder={info}
                required
                value={value}
                onChange={handleChange}
                className={styles.form__label__input}
                onBlur={() => console.log(value)}
            />
        </label>
    )
}
