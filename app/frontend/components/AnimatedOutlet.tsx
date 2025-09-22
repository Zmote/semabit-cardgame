import { ReactElement } from 'react'
import { useLocation, useOutlet } from 'react-router'

import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

const AnimatedOutlet = (): ReactElement => {
  const location = useLocation()
  const element = useOutlet()

  return (
    <AnimatePresence initial={true} mode="wait">
      {element && (
        <motion.div
          key={location.pathname}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {element}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AnimatedOutlet
