import { FormEvent, KeyboardEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { Badge, Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

import { Mixin, Subscription } from '@rails/actioncable'

import { clientUuid } from '@/channels/provider/uuid'
import { useNotifications } from '@/hooks/useNotifications'
import { Key } from '@/utils/keyboard'
import { toTimeString } from '@/utils/time-utils'

import { channelName, GlobalChatChannel } from '../channels/global-chat'
import { ChatMessage, GlobalChatResponse, MESSAGE_ACTION, WAIT_ACTION } from '../types/chat'

const trimmedId = clientUuid.substring(0, 5)

const GlobalChat = () => {
  const notification = useNotifications()
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const subscriptionRef = useRef<Subscription | null>(null)
  const chatInputRef = useRef<HTMLInputElement>(null)
  const anchorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    subscriptionRef.current = GlobalChatChannel.subscriptions.create({ channel: channelName }, {
      received(data: GlobalChatResponse) {
        switch (data.action) {
          case MESSAGE_ACTION:
            setChatMessages((messages) => {
              return [...messages, data.body]
            })
            break
          case WAIT_ACTION:
            notification?.addNotification('Yo', data.body.message, 'warning')
            break
        }
      },
    } satisfies Mixin)
    return () => {
      subscriptionRef.current?.unsubscribe()
      GlobalChatChannel.disconnect()
    }
  }, [])

  useEffect(() => {
    anchorRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  const sendMessage = () => {
    if (chatInputRef.current) {
      subscriptionRef.current?.send({
        id: trimmedId,
        message: chatInputRef.current.value,
        timestamp: Date.now(),
      })
      chatInputRef.current.value = ''
    }
  }

  const onKeyUp = (event: KeyboardEvent) => {
    event.preventDefault()
    if (event.key === Key.ENTER) {
      sendMessage()
    }
  }

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (chatInputRef.current) {
      sendMessage()
    }
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <Container
      className="position-absolute bottom-0 top-0 start-0 end-0 d-flex flex-column"
      fluid={true}
    >
      <Row className="flex-grow-1 border-top">
        <Col className="d-flex flex-column overflow-auto">
          <Row className="bg-secondary-subtle align-items-center">
            <Col>
              <h3 className="p-0 m-0">Chat</h3>
            </Col>
          </Row>
          <Row
            className="flex-grow-1 position-relative bg-light bg-opacity-50 border-top border-secondary-subtle border-1"
          >
            <Col className="overflow-auto position-absolute top-0 start-0 end-0 bottom-0 py-2">
              {chatMessages.map((message) => {
                return (
                  <div key={message.timestamp}>
                    [
                    {toTimeString(message.timestamp)}
                    ]
                    <Badge className={`mx-2 ${message.id === trimmedId ? 'bg-success' : 'bg-primary'}`}>
                      {message.id}
                    </Badge>
                    <span>
                      {message.message}
                    </span>
                  </div>
                )
              },
              )}
              <div ref={anchorRef}></div>
            </Col>
          </Row>
          <Row>
            <Col className="p-0">
              <Form onSubmit={onSubmit}>
                <InputGroup>
                  <InputGroup.Text className="rounded-0">
                    <strong>You</strong>
                    <span
                      className="ms-1 text-success"
                      title={clientUuid}
                    >
                      #
                      {trimmedId}
                    </span>
                  </InputGroup.Text>
                  <Form.Control ref={chatInputRef} onKeyUp={onKeyUp} aria-label="Chat input" placeholder="Type to chat..." />
                  <Button onClick={onClick} type="button" variant="outline-success rounded-0">Send</Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default GlobalChat
