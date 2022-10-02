import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
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

test("display firstName value after user types value", async () => {
    render(<Form />)
    const inputFirstName = screen.getByLabelText('Wpisz swoje imię:', {selector: 'input'});

    fireEvent.change(inputFirstName, {target: { value: 'Piotr' }})
    const textDisplay = await screen.findByDisplayValue('Piotr');

    expect(textDisplay).toBeInTheDocument();
})

test("display lastName value after user types value", async () => {
    render(<Form />)
    const inputLastName = screen.getByLabelText('Wpisz swoje nazwisko:', {selector: 'input'});

    fireEvent.change(inputLastName, {target: { value: 'Sierant' }})
    const textDisplay = await screen.findByDisplayValue('Sierant');

    expect(textDisplay).toBeInTheDocument();
})
test("display select value after user choose value", async () => {
    render(<Form />)
    const selectElement = screen.getByDisplayValue('wybierz');

    fireEvent.change(selectElement, {target: { value: 'Person' }})
    const textDisplay = await screen.findByDisplayValue('Osoba prywatna');

    expect(textDisplay).toBeInTheDocument();
})

test('display select other value after user choose value', async () => {
    render(<Form />)
    const selectElement = screen.getByDisplayValue('wybierz');

    fireEvent.change(selectElement, {target: { value: 'Company' }})
    const textDisplay = await screen.findByDisplayValue('Firma');

    expect(textDisplay).toBeInTheDocument();
})