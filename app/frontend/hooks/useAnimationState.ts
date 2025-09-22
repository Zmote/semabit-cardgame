import { useCallback, useEffect, useMemo, useReducer } from 'react'

const AnimationStates = {
  START: 'START' as const,
  FINISH: 'FINISH' as const,
}

type State = boolean
type Action = { type: typeof AnimationStates.START } | { type: typeof AnimationStates.FINISH }

function animationReducer(state: boolean, action: Action): State {
  switch (action.type) {
    case AnimationStates.START:
      // Only start the animation if we're not already animating.
      return state ? state : true
    case AnimationStates.FINISH:
      return false
    default:
      throw new Error('Unhandled action type')
  }
}

export function useAnimationState({ duration = 1000, soundFile = '', volume = 0.75 } = {}) {
  const [isAnimating, dispatch] = useReducer<boolean, [action: Action]>(animationReducer, false)
  const audio = useMemo(() => (soundFile ? new Audio(soundFile) : null), [soundFile])
  const animationHandler = useCallback(() => {
    dispatch({ type: AnimationStates.START })
  }, [])

  useEffect(() => {
    let timeoutHandler: NodeJS.Timeout
    if (isAnimating) {
      timeoutHandler = setTimeout(() => {
        dispatch({ type: AnimationStates.FINISH })
      }, duration)
    }
    return () => clearTimeout(timeoutHandler)
  }, [isAnimating, duration])

  useEffect(() => {
    // When the animation starts, play the sound.
    if (isAnimating && audio) {
      audio.volume = volume
      audio.play().catch((error) => {
        // Autoplay can sometimes be blocked by the browser.
        console.error('Audio playback failed:', error)
      })
    }
  }, [isAnimating, audio])

  return { isAnimating, animationHandler }
}
