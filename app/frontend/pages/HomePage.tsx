import fengSpired from 'images/fengspired_zmotey.jpg'
import {Badge, Card, Col, ListGroup, Row} from 'react-bootstrap';

const HomePage = () => {
    return <Row className={"justify-content-center"}>
        <Col xs={12} sm={10} md={8} lg={6}>
            <Card>
                <Card.Img variant="top" src={fengSpired} />
                <Card.Body>
                    <Card.Title><h1>Hello to Semabit</h1></Card.Title>
                    <Card.Text>
                        This a demo page
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><Badge>Created by</Badge> Zafer Dogan</ListGroup.Item>
                    <ListGroup.Item><Badge>Date</Badge> September 2025</ListGroup.Item>
                    <ListGroup.Item><Badge bg={"danger"}>Demo</Badge></ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
}

export default HomePage;