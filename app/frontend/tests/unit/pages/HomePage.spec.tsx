import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import HomePage from '@/pages/HomePage'

describe('HomePage', () => {
  it('renders Home', () => {
    const { getByText } = render(<HomePage />)

    expect(getByText('Hello to Semabit')).toBeInTheDocument()
  })
})
