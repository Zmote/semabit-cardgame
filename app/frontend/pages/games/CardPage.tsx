import CardGame from "features/games/card/containers/CardGame";
import {Col, Row} from "react-bootstrap";

const CardPage = () => {
    return (
        <Row>
            <Col>
                <CardGame/>
            </Col>
        </Row>
    )
}

export default CardPage;