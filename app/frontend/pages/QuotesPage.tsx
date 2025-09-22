import { Col, Container, Row } from 'react-bootstrap'

import YodaQuotes from '@/features/quotes/containers/YodaQuotes'

const QuotesPage = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <YodaQuotes />
        </Col>
      </Row>
    </Container>
  )
}
export default QuotesPage
