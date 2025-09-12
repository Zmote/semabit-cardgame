import MultiPlayerCardGame from "features/games/card/containers/MultiPlayerCardGame";
import {use, useEffect} from "react";
import {PaddedContainerContext} from "context/PaddedContainerContext";
import {Col, Row} from "react-bootstrap";

const MultiPlayerPage = () => {
    const paddedContainerContext = use(PaddedContainerContext);

    useEffect(() => {
        paddedContainerContext?.setPadding(false);
        return () => {
            paddedContainerContext?.setPadding(true);
        }
    }, []);
    return  (
        <Row>
            <Col>
                <MultiPlayerCardGame/>
            </Col>
        </Row>
    )
}

export default MultiPlayerPage;