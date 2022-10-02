import { validate } from './validate';

const validatePESEL = (pesel) => {
    let peselCorrectLength = 11;
    let toNumber = Number(pesel);
    if(toNumber) {
        return !(pesel.length !== peselCorrectLength || isNaN(toNumber));
    }
    return false;
};
const validateNIP = (nip) => {
    let nipCorrectLength = 10;
    let toNumber = Number(nip);
    if(toNumber) {
        return !(nip.length !== nipCorrectLength || isNaN(toNumber));
    }
    return false;
};

describe("testing 'validate' function", () => {
    it('should return correct value', () => {
        expect(validate({
            pesel: '96090700000',
            nip: '5556066601',
        })).toBe(null);
        expect(validate({
            pesel: '96090700000',
            nip: '',
        })).toBe(null);
        expect(validate({
            pesel: '',
            nip: '5556066601',
        })).toBe(null);
    })
    describe('should return object with error', () => {
        const expected = { error: "Podane dane są niepoprawne" }
        describe('matches if the actual object contain expected key: value pairs.', () => {
            it('short pesel', () => {
                expect(validate({
                    pesel: '912391293',
                    nip: '',
                })).toEqual(expect.objectContaining(expected));
            });
            it('pesel containing letters', () => {
                expect(validate({
                    pesel: '96090dasdaa',
                    nip: '',
                })).toEqual(expect.objectContaining(expected));
            });
            it('pesel from letters', () => {
                expect(validate({
                    pesel: 'asdasdkasd',
                    nip: '',
                })).toEqual(expect.objectContaining(expected));
            });
            it('too long pesel', () => {
                expect(validate({
                    pesel: '96090700000112',
                    nip: '',
                })).toEqual(expect.objectContaining(expected));
            });
            it('null value', () => {
                expect(validate({
                    pesel: null,
                    nip: '',
                })).toEqual(expect.objectContaining(expected));
            });
            it('undefined value', () => {
                expect(validate({
                    pesel: undefined,
                    nip: '',
                })).toEqual(expect.objectContaining(expected));
            });
            it('false value', () => {
                expect(validate({
                    pesel: false,
                    nip: '',
                })).toEqual(expect.objectContaining(expected));
            });
            it('true value', () => {
                expect(validate({
                    pesel: true,
                    nip: '',
                })).toEqual(expect.objectContaining(expected));
            });
            it('NaN value', () => {
                expect(validate({
                    pesel: NaN,
                    nip: '',
                })).toEqual(expect.objectContaining(expected));
            });
            it('0 value', () => {
                expect(validate({
                    pesel: 0,
                    nip: '',
                })).toEqual(expect.objectContaining(expected));
            });
        });
        describe('valid nip', () => {
            it('short nip', () => {
                expect(validate({
                    pesel: '',
                    nip: '912391293',
                })).toEqual(expect.objectContaining(expected));
            });
            it('nip containing letters', () => {
                expect(validate({
                    pesel: '',
                    nip: '96090dasdaa',
                })).toEqual(expect.objectContaining(expected));
            });
            it('nip from letters', () => {
                expect(validate({
                    pesel: '',
                    nip: 'asdasdkasd',
                })).toEqual(expect.objectContaining(expected));
            });
            it('too long nip', () => {
                expect(validate({
                    pesel: '',
                    nip: '96090700000112',
                })).toEqual(expect.objectContaining(expected));
            });
            it('null value', () => {
                expect(validate({
                    pesel: '',
                    nip: null,
                })).toEqual(expect.objectContaining(expected));
            });
            it('undefined value', () => {
                expect(validate({
                    pesel: '',
                    nip: undefined,
                })).toEqual(expect.objectContaining(expected));
            });
            it('false value', () => {
                expect(validate({
                    pesel: '',
                    nip: false,
                })).toEqual(expect.objectContaining(expected));
            });
            it('true value', () => {
                expect(validate({
                    pesel: '',
                    nip: true,
                })).toEqual(expect.objectContaining(expected));
            });
            it('NaN value', () => {
                expect(validate({
                    pesel: '',
                    nip: NaN,
                })).toEqual(expect.objectContaining(expected));
            });
            it('0 value', () => {
                expect(validate({
                    pesel: '',
                    nip: 0,
                })).toEqual(expect.objectContaining(expected));
            });
        })
    });
});
describe("testing 'validatePESEL' function", () => {
    it('should return false validate PESEL', () => {
        expect(validatePESEL('9609070000')).toBeFalsy();
        expect(validatePESEL('960907000000')).toBeFalsy();
        expect(validatePESEL('960907aaaaa')).toBeFalsy();
        expect(validatePESEL('960907aaaaa2')).toBeFalsy();
        expect(validatePESEL('96090aaaa2')).toBeFalsy();
        expect(validatePESEL(undefined)).toBeFalsy();
        expect(validatePESEL(null)).toBeFalsy();
        expect(validatePESEL(NaN)).toBeFalsy();
        expect(validatePESEL(0)).toBeFalsy();
        expect(validatePESEL(true)).toBeFalsy();
        expect(validatePESEL(false)).toBeFalsy();
        expect(validatePESEL([])).toBeFalsy();
        expect(validatePESEL(['sdad'])).toBeFalsy();
    })
    it('should return true value', () => {
      expect(validatePESEL( '96090700000')).toBeTruthy()
    })
});
describe("testing 'validateNIP' function", () => {
    it('should return false validate NIP', () => {
        expect(validateNIP('960907000')).toBeFalsy();
        expect(validateNIP('960907000000')).toBeFalsy();
        expect(validateNIP('960907aaaaa')).toBeFalsy();
        expect(validateNIP('960907aaaaa2')).toBeFalsy();
        expect(validateNIP('96090aaaa2')).toBeFalsy();
        expect(validateNIP(undefined)).toBeFalsy();
        expect(validateNIP(null)).toBeFalsy();
        expect(validateNIP(NaN)).toBeFalsy();
        expect(validateNIP(0)).toBeFalsy();
        expect(validateNIP(true)).toBeFalsy();
        expect(validateNIP(false)).toBeFalsy();
        expect(validateNIP([])).toBeFalsy();
        expect(validateNIP(['sdad'])).toBeFalsy();
    })
    it('should return true value', () => {
      expect(validateNIP( '9609070000')).toBeTruthy()
    })
});
