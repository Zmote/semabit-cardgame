import { Suspense } from 'react'

import AnimatedOutlet from '@/components/AnimatedOutlet'
import LoadingPage from '@/components/LoadingPage'
import { usePaddedContainer } from '@/hooks/usePaddedContainer'

const headerFooterOffset = { top: 'var(--sb-header-height, 56px)', bottom: 'var(--sb-footer-height, 40px)' }

const Content = () => {
  const { padding } = usePaddedContainer()
  return (
    <div style={headerFooterOffset} className={`overflow-y-auto position-absolute start-0 end-0 ${padding ? 'pt-2 pb-2' : ''}`}>
      <Suspense fallback={<LoadingPage />}>
        <AnimatedOutlet />
      </Suspense>
    </div>
  )
}
export default Content
