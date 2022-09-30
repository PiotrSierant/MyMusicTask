import React, {useState} from "react";
import { validate } from "./validate";
import { Input } from "./Input";
import { Select } from "./Select";
import styles from './Form.module.scss'
// e) Zdjęcie ( Podgląd ma wyświetlić po wybraniu pliku z dysku)
// 2. Formularz ma walidować dane Numeru identyfikacyjnego:
// - Czy wprowadzono poprawny PESEL/ NIP
// 3. Zdjęcie:
// - Format JPG/JPEG
// - Acpect ratio 1:1 (zdjęcie w kwadracie)
//  const [errorFormMessages, setErrorFormMessages] = useState(null);
export function Form() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        typeSelect: '',
        pesel: '',
        nip: '',
    });
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
            setValues((prevState) => ({
                ...prevState,
                [name]: event.target.value.slice(0, limit),
            }));
        }
        if(name === 'nip') {
            const limit = 10;
            setValues((prevState) => ({
                ...prevState,
                [name]: event.target.value.slice(0, limit),
            }));
        }

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
                />
            }
            { values.typeSelect === 'Person' &&
                <Input
                    text={'Podaj swój PESEL:'}
                    type={'number'}
                    info={'pesel'}
                    value={values.pesel}
                    handleChange={handleChange}
                />
            }



        </form>
    )
}