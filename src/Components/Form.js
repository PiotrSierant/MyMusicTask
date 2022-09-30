import React, { useState } from "react";
import { validate } from "./validate";
import { Input } from "./Input";
import { Select } from "./Select";
import { InputPhoto } from "./InputPhoto";
import styles from './Form.module.scss'

export function Form() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        typeSelect: '',
        pesel: '',
        nip: '',
    });
    const [selectedImage, setSelectedImage] = useState(null);
    const [errorFormMessages, setErrorFormMessages] = useState(null);

    const handleUploadFile = (event) => {
        setSelectedImage(event.target.files[0]);
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        if(name === 'firstName' || name === 'lastName' || name === 'typeSelect') {
            setValues((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
        if(name === 'pesel') {
            const limit = 9;
            values.nip = '';
            setErrorFormMessages(null)
            setValues((prevState) => ({
                ...prevState,
                [name]: event.target.value.slice(0, limit),
            }));
        }
        if(name === 'nip') {
            const limit = 10;
            values.pesel = '';
            setErrorFormMessages(null)
            setValues((prevState) => ({
                ...prevState,
                [name]: event.target.value.slice(0, limit),
            }));
        }
    }
    const validateForm = (event) => {
        event.preventDefault();
        const errorDataMessages = validate(values);
        setErrorFormMessages(errorDataMessages);

        return errorDataMessages;
    }
    return (
        <form className={styles.form}>
            <Input
                text={'Wpisz swoje imię:'}
                type={'text'}
                info={'firstName'}
                value={values.firstName}
                handleChange={handleChange}
            />
            <Input
                text={'Wpisz swoje nazwisko:'}
                type={'text'}
                info={'lastName'}
                value={values.lastName}
                handleChange={handleChange}
            />
            <Select
                typeSelect={'typeSelect'}
                handleChange={handleChange}
            />
            { values.typeSelect === 'Company' &&
                <Input
                    text={'Podaj swój NIP:'}
                    type={'number'}
                    info={'nip'}
                    value={values.nip}
                    handleChange={handleChange}
                    validateForm={validateForm}
                    errorFormMessages={errorFormMessages}
                />
            }
            { values.typeSelect === 'Person' &&
                <Input
                    text={'Podaj swój PESEL:'}
                    type={'number'}
                    info={'pesel'}
                    value={values.pesel}
                    handleChange={handleChange}
                    validateForm={validateForm}
                    errorFormMessages={errorFormMessages}
                />
            }
            <InputPhoto
                text={'Wybierz zdjęcie'}
                type={"file"}
                info={"myImage"}
                accept={'image/jpeg'}
                handleUploadFile={handleUploadFile}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />
        </form>
    )
}