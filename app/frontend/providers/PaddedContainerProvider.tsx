import { ReactNode, useMemo, useState } from 'react'

import { PaddedContainerContext } from '@/AppContexts'

type PaddedContainerProviderProps = {
  children: ReactNode
}

const PaddedContainerProvider = ({ children }: PaddedContainerProviderProps) => {
  const [padding, setPadding] = useState(true)
  const contextValue = useMemo(() => ({ padding, setPadding }), [padding])
  return (
    <PaddedContainerContext value={contextValue}>
      {children}
    </PaddedContainerContext>
  )
}

export default PaddedContainerProvider
