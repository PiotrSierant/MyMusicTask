import React from 'react';
import styles from './Input.module.scss'

export function Input({info, type, text, value, handleChange, validateForm, errorFormMessages}) {

    return (
        <>
            <label htmlFor={info} className={styles.form__label} data-aos="zoom-in">
                {text} {errorFormMessages && <span>{errorFormMessages.error}</span>}
            </label>
            <input
                        type={type}
                        name={info}
                        id={info}
                        placeholder={text}
                        required
                        value={value}
                        onChange={handleChange}
                        className={errorFormMessages ? styles.form__label__input__error : styles.form__label__input}
                        onBlur={validateForm}
            />
        </>
    )
}