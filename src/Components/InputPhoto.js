import React from 'react';
import styles from './InputPhoto.module.scss';

export function InputPhoto({info, type, text, value, accept, handleUploadFile, selectedImage, setSelectedImage}) {

    return (
        <>
            {selectedImage ?
                <section data-aos="zoom-in">
                    <button onClick={() => setSelectedImage(null)}>Usuń zdjęcie</button>
                    <img className={styles.input__Photo__image} alt="My added file" src={URL.createObjectURL(selectedImage)}/>
                </section>
                :
                <label
                    htmlFor={info}
                    className={styles.input__Photo}
                    data-aos="zoom-in"
                >
                    {text}
                    <input
                        type={type}
                        name={info}
                        id={info}
                        placeholder={info}
                        accept={accept}
                        required
                        value={value}
                        onChange={handleUploadFile}
                    />
                </label>
            }
        </>
    )
}