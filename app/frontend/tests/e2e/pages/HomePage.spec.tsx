import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'

import HomePage from '@/pages/HomePage'
import NotificationProvider from '@/providers/NotificationProvider'

describe('HomePage', () => {
  it('renders name', async () => {
    const { getByText } = render(<HomePage />, {
      wrapper: NotificationProvider,
    })
    await expect.element(getByText('Hello to Semabit')).toBeInTheDocument()
  })
})
