import {Transition} from "react-transition-group";
import {Alert, Col, Row} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import {useAnimationState} from "hooks/useAnimationState";

import {ServerQuote} from "../types/quotes";
import styles from '../styles/YodaQuote.module.scss';
import yodaSmall from "../assets/yoda-small.png"
import yodaMedium from "../assets/yoda-medium.png"
import yodaLarge from "../assets/yoda-large.png"
import yodaSound from '../audio/yoda-laugh.mp3'

const transitionDuration = 1000;
const animationDuration = 1000;
const animationStateConfig = {
    duration: animationDuration,
    soundFile: yodaSound,
    volume: 0.25
};

const defaultStyle = {
    transition: `opacity ${transitionDuration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: {opacity: 1},
    entered: {opacity: 1},
    exiting: {opacity: 0},
    exited: {opacity: 0},
    unmounted: {opacity: 0},
};

type YodaQuoteProps = { isNew: boolean, serverQuote: ServerQuote }

export const YodaQuote = (props: YodaQuoteProps) => {
    const nodeRef = useRef(null);
    const [inProps, setInProps] = useState<boolean>(false)
    const {isAnimating, animationHandler} = useAnimationState(animationStateConfig);
    const imageRef = useRef<HTMLImageElement>(null);

    const imageClassName = isAnimating
        ? `${styles.yodaQuote__image} ${styles.yodaQuote__imageAnimate}`
        : `${styles.yodaQuote__image}`;

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.style.setProperty('--animation-duration', `${animationDuration}ms`);
        }
    }, [animationDuration]);

    useEffect(() => {
        setInProps(true)
    }, [])

    return (
        <Transition nodeRef={nodeRef} in={inProps} timeout={transitionDuration} key={props.serverQuote.id}>
            {state => (
                <div ref={nodeRef} style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <Alert className={styles.yodaQuote} variant={props.isNew ? "primary" : "light"}>
                        <Row className={"d-flex g-3"}>
                            <Col xs={12} sm={9} md={10} xl={11}>
                                <div className={"d-flex flex-column justify-content-end h-100"}>
                                    <div className={
                                        `border border-1 rounded-1 p-2 shadow-sm flex-grow-1
                                ${props.isNew ? "border-primary-subtle bg-light" : "bg-white"}`
                                    }>
                                        <sup><FontAwesomeIcon icon={faQuoteLeft}/></sup>
                                        {props.serverQuote.quote}
                                        <sup><FontAwesomeIcon icon={faQuoteRight}/></sup>
                                    </div>
                                    <strong className={"align-self-end mt-1"}>- Yoda</strong>
                                </div>
                            </Col>
                            <Col xs={12} sm={3} md={2} xl={1} className={""}>
                                <div
                                    className={"d-flex h-100 w-100 justify-content-end justify-content-md-center align-items-end align-content-end"}>
                                    <img ref={imageRef}
                                         src={yodaMedium}
                                         srcSet={`${yodaSmall} 200w, ${yodaMedium} 400w, ${yodaLarge} 800w`}
                                         onClick={animationHandler}
                                         className={imageClassName}
                                         alt={"Image of Yoda"}/>
                                </div>
                            </Col>
                        </Row>
                    </Alert>
                </div>
            )}
        </Transition>
    )
}