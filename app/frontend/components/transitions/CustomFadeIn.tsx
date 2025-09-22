import { CSSProperties, ReactElement, ReactNode, useEffect, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'

import { capitalize } from 'utils/string-utils'

import styles from './CustomFadeIn.module.scss'

type CustomFadeProps = {
  duration?: number
  children: ReactNode
}

// I wrote this before I realized Bootstrap React already had Fade :-/
// also, this gives me more control with certain components
const CustomFadeIn = ({ duration = 1000, children }: CustomFadeProps): ReactElement => {
  const nodeRef = useRef(null)
  const [inProps, setInProps] = useState<boolean>(false)

  useEffect(() => {
    setInProps(true)
  }, [])

  return (
    <Transition nodeRef={nodeRef} in={inProps} timeout={duration}>
      {state => (
        <div
          ref={nodeRef}
          style={{ '--transition-duration': `${duration}ms` } as CSSProperties}
          className={`${styles.customFade} ${styles['customFade' + capitalize(state)]}`}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

export default CustomFadeIn
