import {fireEvent, render, screen } from '@testing-library/react';
import Home from '../Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import {UserEvent} from '@testing-library/user-event';

describe('Home', () => {
    test("Render correctly", () =>{
        render(
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        )

        const keywordField = screen.getByPlaceholderText(/Enter a keyword/i);
        const createButton = screen.getByRole("button");

        expect(keywordField).toBeInTheDocument();
        expect(keywordField).toHaveAttribute("type", "email");

        expect(createButton).toBeInTheDocument();
        expect(createButton).toHaveAttribute("type", "submit");
    })
});