import { expect, describe, it } from 'vitest'
import { render } from '@testing-library/react'
import HomeIndex from 'pages/home/HomeIndex'


describe('HomeIndex', () => {
    it('renders Home', () => {
        const { getByText } = render(<HomeIndex />);

        expect(getByText('Hello to Semabit')).toBeInTheDocument();
    })
})