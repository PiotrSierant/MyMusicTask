export function validate(values) {
    const validatePESEL = (pesel) => {
        let peselCorrectLength = 11;
        let toNumber = Number(pesel);
        return !(pesel.length !== peselCorrectLength || isNaN(toNumber));
    };
    const validateNIP = (nip) => {
        let nipCorrectLength = 10;
        let toNumber = Number(nip);
        return !(nip.length !== nipCorrectLength || isNaN(toNumber));
    };
    const errorDataMessages = {};
    const { nip, pesel } = values;

    if (
        (!validatePESEL(pesel) && pesel !== '') ||
        (!validateNIP(nip) && nip !== '')
    ) {
        errorDataMessages.error = "Podane dane są niepoprawne";
    }

    return Object.keys(errorDataMessages).length > 0 ? errorDataMessages : null;
}