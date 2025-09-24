import { ChangeEvent, MouseEvent } from 'react'
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'

import { faFile, faPerson, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { GameConfig, GameMode } from '@/features/games/card/types/card'
import { capitalize } from '@/utils/string-utils'

type GameFormChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void
type GameFormClickHandler = (event: MouseEvent<HTMLButtonElement>) => void

type GameFormProps = {
  loading: boolean
  gameConfig: GameConfig
  onCardCountChange: GameFormChangeHandler
  onPlayerCountChange: GameFormChangeHandler
  onModeChange: GameFormChangeHandler
  onSimulate: GameFormClickHandler
}

const GameForm = (
  { loading, gameConfig, onCardCountChange, onPlayerCountChange, onModeChange, onSimulate }: GameFormProps,
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
        <Col>
          <Form.Label className="me-2">
            <FontAwesomeIcon icon={faGamepad} />
            <span className="ms-1">Mode</span>
          </Form.Label>
          <div className="float-end">
            <Form.Check
              inline
              type="radio"
              name="gameMode"
              checked={GameMode.random === gameConfig.mode}
              onChange={onModeChange}
              value={GameMode.random}
              label={capitalize(GameMode.random)}
            />
            <Form.Check
              inline
              type="radio"
              name="gameMode"
              checked={GameMode.unique === gameConfig.mode}
              onChange={onModeChange}
              value={GameMode.unique}
              label={capitalize(GameMode.unique)}
            />
          </div>
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
