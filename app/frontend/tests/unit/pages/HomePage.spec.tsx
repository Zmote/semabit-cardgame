import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import HomePage from '@/pages/HomePage'
import NotificationProvider from '@/providers/NotificationProvider'

describe('HomePage', () => {
  it('renders Home', () => {
    const { getByText } = render(<HomePage />, {
      wrapper: NotificationProvider,
    })

    expect(getByText('Hello to Semabit')).toBeInTheDocument()
  })
})
