import { Col, Container, Row, Spinner } from 'react-bootstrap'

type LoadingPageProps = { withBackground?: boolean }

const LoadingPage = ({ withBackground = false }: LoadingPageProps = {}) => {
  return (
    <Container
      className={`${withBackground ? 'bg-pattern-1' : 'bg-transparent'} position-absolute top-0 bottom-0 start-0 end-0`}
      fluid={true}
    >
      <Row className="h-100 justify-content-center align-items-center">
        <Col className="d-flex flex-column align-content-center align-items-center" sm={6}>
          <div className={'d-flex flex-column align-content-center '
            + `align-items-center p-4 ${withBackground ? 'bg-secondary-subtle' : 'bg-light'} rounded-5 shadow-lg`}
          >
            <Spinner
              style={{ width: '8rem', height: '8rem' }}
              variant="primary"
              animation="grow"
            >
            </Spinner>
            <h1 className="font-semabit font-semabit-bold mt-4">Loading Page</h1>
            <p className="lead">We will be with you shortly...</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LoadingPage
