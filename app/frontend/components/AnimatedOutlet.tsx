import {useLocation, useOutlet} from "react-router";
import {AnimatePresence, motion} from "framer-motion";
import {ReactElement} from "react";
import {Container} from "react-bootstrap";

const variants = {
    hidden: {opacity: 0, x: 0, y: 20},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: 20}
}

const AnimatedOutlet = (): ReactElement => {
    const location = useLocation();
    const element = useOutlet();

    return (
        <AnimatePresence initial={true}>
            {element && (
                <motion.div key={location.pathname}
                            initial="hidden"
                            animate="enter"
                            exit="exit"
                            variants={variants}
                            transition={{duration: 0.3, ease: "easeInOut"}}
                            className={"h-100"}
                >
                    <Container fluid={true}>
                        {element}
                    </Container>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AnimatedOutlet;