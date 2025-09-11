import {Transition} from "react-transition-group";
import {Alert} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import {ServerQuote} from "types/quotes";

const duration = 1000;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: {opacity: 1},
    entered: {opacity: 1},
    exiting: {opacity: 0},
    exited: {opacity: 0},
    unmounted: {opacity: 0},
};

type QuoteItemProps = { isNew: boolean, serverQuote: ServerQuote }

const QuoteItem = (props: QuoteItemProps) => {
    const nodeRef = useRef(null);
    const [inProps, setInProps] = useState<boolean>(false)

    useEffect(() => {
        setInProps(true)
    }, [])

    return (
        <Transition nodeRef={nodeRef} in={inProps} timeout={duration} key={props.serverQuote.id}>
            {state => (
                <div ref={nodeRef} style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <Alert variant={props.isNew ? "primary" : "light"}>
                        <span>{props.serverQuote.quote}</span><strong className={"float-end"}>- Yoda</strong>
                    </Alert>
                </div>
            )}
        </Transition>
    )
}

export default QuoteItem;