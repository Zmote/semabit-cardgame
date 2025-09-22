import { use, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { PaddedContainerContext } from '@/AppContexts'
import MultiPlayerCardGame from '@/features/games/card/containers/MultiPlayerCardGame'

const MultiPlayerPage = () => {
  const paddedContainerContext = use(PaddedContainerContext)

  useEffect(() => {
    paddedContainerContext?.setPadding(false)
    return () => {
      paddedContainerContext?.setPadding(true)
    }
  }, [])
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <MultiPlayerCardGame />
        </Col>
      </Row>
    </Container>
  )
}

export default MultiPlayerPage
