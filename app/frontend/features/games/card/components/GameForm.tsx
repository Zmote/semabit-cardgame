import { ChangeEvent, MouseEvent } from 'react'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'

import { faFile, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { GameConfig } from '@/features/games/card/types/card'

type GameFormChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void
type GameFormClickHandler = (event: MouseEvent<HTMLButtonElement>) => void

type GameFormProps = {
  loading: boolean
  gameConfig: GameConfig
  onCardCountChange: GameFormChangeHandler
  onPlayerCountChange: GameFormChangeHandler
  onSimulate: GameFormClickHandler
}

const GameForm = (
  { loading, gameConfig, onCardCountChange, onPlayerCountChange, onSimulate }: GameFormProps,
) => {
  return (
    <Form className="d-grid gap-2">
      <Row>
        <Col>
          <Form.Label>
            <FontAwesomeIcon icon={faFile} />
            Cards
            <span className="ms-1">
              (
              {gameConfig.card_count}
              )
            </span>
          </Form.Label>
          <Form.Range
            min={2}
            max={10}
            defaultValue={gameConfig.card_count}
            step={1}
            onChange={onCardCountChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>
            <FontAwesomeIcon icon={faPerson} />
            Players
            <span className="ms-1">
              (
              {gameConfig.player_count}
              )
            </span>
          </Form.Label>
          <Form.Range
            min={2}
            max={10}
            defaultValue={gameConfig.player_count}
            step={1}
            onChange={onPlayerCountChange}
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-grid">
          <Button
            onClick={onSimulate}
            variant="primary"
          >
            Play
            {' '}
            {loading ? <Spinner size="sm"></Spinner> : null}
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default GameForm
