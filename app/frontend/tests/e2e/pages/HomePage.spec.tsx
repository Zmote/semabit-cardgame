import {expect, describe, it} from 'vitest'
import { render } from 'vitest-browser-react'
import HomePage from "pages/HomePage";

describe('HomePage', () => {
    it('renders name', async () => {
        const { getByText } = render(<HomePage/>)
        await expect.element(getByText('Hello to Semabit')).toBeInTheDocument()
    })
})
