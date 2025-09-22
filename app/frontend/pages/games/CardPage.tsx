import { Col, Container, Row } from 'react-bootstrap'

import CardGame from '@/features/games/card/containers/CardGame'

const CardPage = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <CardGame />
        </Col>
      </Row>
    </Container>
  )
}

export default CardPage
