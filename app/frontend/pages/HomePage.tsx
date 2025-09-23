import { Badge, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

import { useNotifications } from '@/hooks/useNotifications'
import fengSpired from '@/images/fengspired_zmotey.jpg'

const HomePage = () => {
  const notifications = useNotifications()
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
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
              <ListGroup.Item>
                <Badge>Created by</Badge>
                {' '}
                Zafer Dogan
              </ListGroup.Item>
              <ListGroup.Item>
                <Badge>Date</Badge>
                {' '}
                September 2025
              </ListGroup.Item>
              <ListGroup.Item>
                <Badge bg="danger">Demo</Badge>
                <Button onClick={() => { notifications?.addNotification('Hi', 'Hello', 'light') }} className="float-end" size="sm">Say Hi!</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
