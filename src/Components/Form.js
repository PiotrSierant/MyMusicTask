import React, { useState } from "react";
import { validate } from "./validate";
import { Input } from "./Input";
import { Select } from "./Select";
import { InputPhoto } from "./InputPhoto";
import { Spinner } from "./Spinner";
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
    const [post, setPost] = useState(false);
    const [send, setSend] = useState(false);
    const [failToFetch, setFailToFetch] = useState('')
    const handleUploadFile = (event) => {
        setSelectedImage(event.target.files[0]);
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        if(name === 'firstName' || name === 'lastName' || name === 'typeSelect') {
            setValues((prevState) => ({
                ...prevState,
                [name]: value.trim(),
            }));
        }
        if(name === 'pesel') {
            const limit = 11;
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
    const handleSubmit = (event) => {
        event.preventDefault();
        const errorFormMessages = validate(values);
        setErrorFormMessages(errorFormMessages);
        if (errorFormMessages) return;
        postFormSubmit(values);
    }
    const postFormSubmit = (values) => {
        setSend(true)
        fetch("https://localhost:60001/Contractor/Save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => {
                setPost(data);
                setSend(false)
                setSelectedImage(null)
                setValues({
                    firstName: "",
                    lastName: "",
                    typeSelect: '',
                    pesel: '',
                    nip: '',
                })
                setTimeout(() => {
                    setPost(null);
                }, 5000);
            }).catch(() => {
                setSend(false)
                setFailToFetch("Nie znaleziono metody zapisu");
                setTimeout(() => {
                    setFailToFetch('');
                }, 5000);
        })
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {post && (
                <span className={styles.successMessage}>
                    Wiadomość została przesłana
                </span>
            )}
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
            {send
                ? <Spinner/>
                : <input
                    type="submit"
                    value="Wyślij!"
                    className={styles.submitButton}
                />
            }
            {failToFetch && <span className={styles.errorMessage}>{failToFetch}</span> }
        </form>
    )
}