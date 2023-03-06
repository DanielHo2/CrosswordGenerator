import {render, screen } from '@testing-library/react';
import Share from '../Pages/Share';
import { BrowserRouter } from 'react-router-dom';

describe('Share', () => {
    test("Render correctly", () =>{
        render(
            <BrowserRouter>
                <Share/>
            </BrowserRouter>
        )

        const linkField = screen.getByPlaceholderText(/CROSS43WORD3PUX/i);
        const shareButton = screen.getByRole("button");

        expect(linkField).toBeInTheDocument();
        expect(linkField).toHaveAttribute("type", "email");

        expect(shareButton).toBeInTheDocument();
        expect(shareButton).toHaveAttribute("type", "submit");
    })
});