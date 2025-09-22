import { useEffect, useRef } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'

import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CustomFadeIn from '@/components/transitions/CustomFadeIn'
import { useAnimationState } from '@/hooks/useAnimationState'

import styles from './YodaQuote.module.scss'
import yodaSound from '../audio/yoda-laugh.mp3'
import yodaLarge from '../images/yoda-large.png'
import yodaMedium from '../images/yoda-medium.png'
import yodaSmall from '../images/yoda-small.png'
import { ServerQuote } from '../types/quotes'

const animationDuration = 1000
const animationStateConfig = {
  duration: animationDuration,
  soundFile: yodaSound,
  volume: 0.25,
}

type YodaQuoteProps = { isNew: boolean, serverQuote: ServerQuote }

const YodaQuote = (props: YodaQuoteProps) => {
  const { isAnimating, animationHandler } = useAnimationState(animationStateConfig)
  const imageRef = useRef<HTMLImageElement>(null)

  const imageClassName = isAnimating
    ? `${styles.yodaQuote__image} ${styles.yodaQuote__imageAnimate}`
    : `${styles.yodaQuote__image}`

  useEffect(() => {
    imageRef.current?.style.setProperty('--animation-duration', `${animationDuration}ms`)
  }, [animationDuration])

  return (
    <CustomFadeIn duration={1000}>
      <Alert className={`${styles.yodaQuote} shadow-sm`} variant={props.isNew ? 'primary' : 'light'}>
        <Row className="d-flex g-3">
          <Col xs={12} sm={9} md={10} xl={11}>
            <div className="d-flex flex-column justify-content-end h-100">
              <div className={
                `border border-1 rounded-1 p-2 shadow-sm flex-grow-1
                                ${props.isNew ? 'border-primary-subtle bg-light' : 'bg-white'}`
              }
              >
                <sup><FontAwesomeIcon icon={faQuoteLeft} /></sup>
                {props.serverQuote.quote}
                <sup><FontAwesomeIcon icon={faQuoteRight} /></sup>
              </div>
              <strong className="align-self-end mt-1">- Yoda</strong>
            </div>
          </Col>
          <Col xs={12} sm={3} md={2} xl={1} className="">
            <div
              className="d-flex h-100 w-100 justify-content-end justify-content-md-center align-items-end align-content-end"
            >
              <img
                ref={imageRef}
                src={yodaMedium}
                srcSet={`${yodaSmall} 200w, ${yodaMedium} 400w, ${yodaLarge} 800w`}
                onClick={animationHandler}
                className={imageClassName}
                alt="Image of Yoda"
              />
            </div>
          </Col>
        </Row>
      </Alert>
    </CustomFadeIn>
  )
}

export default YodaQuote
