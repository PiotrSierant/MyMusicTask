import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Form } from './Form';

describe('Render form component', () => {
    test("renders component", async () => {
        render(<Form />);
        expect(screen.getByText("Wpisz swoje imię:")).toBeInTheDocument();
        expect(screen.getByText("Wpisz swoje nazwisko:")).toBeInTheDocument();
        expect(screen.getByText("Wybierz typ:")).toBeInTheDocument();
        expect(screen.getByText("Wybierz zdjęcie")).toBeInTheDocument();
        expect(screen.getByText("Wyślij!")).toBeInTheDocument();
    })
    test("renders inputs", async () => {
        render(<Form />)
        const inputFirstName = screen.getByLabelText('Wpisz swoje imię:', {selector: 'input'});
        const inputLastName = screen.getByLabelText('Wpisz swoje nazwisko:', {selector: 'input'});
        const selectElement = screen.getByDisplayValue('wybierz');
        const inputFile = screen.getByLabelText('Wybierz zdjęcie');
        const button = screen.getByText('Wyślij!');
        expect(inputFirstName).toBeInTheDocument();
        expect(inputLastName).toBeInTheDocument();
        expect(selectElement).toBeInTheDocument();
        expect(inputFile).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })
})
