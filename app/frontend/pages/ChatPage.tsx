import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import GlobalChat from '@/features/chat/containers/GlobalChat'
import { usePaddedContainer } from '@/hooks/usePaddedContainer'

const ChatPage = () => {
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
          <GlobalChat />
        </Col>
      </Row>
    </Container>
  )
}

export default ChatPage
