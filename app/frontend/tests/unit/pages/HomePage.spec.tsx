import { expect, describe, it } from 'vitest'
import { render } from '@testing-library/react'
import HomePage from "pages/HomePage";

describe('HomePage', () => {
    it('renders Home', () => {
        const { getByText } = render(<HomePage />);

        expect(getByText('Hello to Semabit')).toBeInTheDocument();
    })
})