import { use } from 'react'

import { PaddedContainerContext } from '@/AppContexts'

export const usePaddedContainer = () => {
  const context = use(PaddedContainerContext)
  if (!context) {
    throw new Error('usePaddedContainer must be used within a PaddedContainerProvider')
  }
  return context
}
