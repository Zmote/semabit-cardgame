import {expect, describe, it} from 'vitest'
import { render } from 'vitest-browser-react'
import HomeIndex from 'pages/home/HomeIndex'

describe('HomeIndex', () => {
    it('renders name', async () => {
        const { getByText } = render(<HomeIndex/>)
        await expect.element(getByText('Hello to Semabit')).toBeInTheDocument()
    })
})
