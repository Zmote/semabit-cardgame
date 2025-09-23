import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import MultiPlayerCardGame from '@/features/games/multiplayer/containers/MultiPlayerCardGame'
import { usePaddedContainer } from '@/hooks/usePaddedContainer'

const MultiPlayerPage = () => {
  const { setPadding } = usePaddedContainer()

  useEffect(() => {
    setPadding(false)
    return () => {
      setPadding(true)
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
