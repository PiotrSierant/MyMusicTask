import React from 'react';
import styles from './Select.module.scss'
export function Select({typeSelect, handleChange}) {
    return (
        <>
            <label
                htmlFor={typeSelect}
                className={styles.select__label}
                data-aos="zoom-in"
            >
                Wybierz typ:
            </label>

            <select
                    name={typeSelect}
                    onChange={handleChange}
                    defaultValue={'Wybierz'}
                >
                    <option
                        disabled={true}
                        value={'Wybierz'}
                    >
                        wybierz
                    </option>
                    <option
                        value="Person"
                    >
                        Osoba prywatna
                    </option>
                    <option
                        value="Company"
                    >
                        Firma
                    </option>
                </select>
        </>
    )
}