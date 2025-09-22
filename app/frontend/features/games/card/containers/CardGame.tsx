import { Col, Container, Row } from 'react-bootstrap'

import RowCol from '@/components/boostrap/RowCol'
import { useCardGame } from '@/features/games/card/components/useCardGame'

import GameForm from '../components/GameForm'
import GameResult from '../components/GameResult'

const CardGame = () => {
  const {
    loading,
    gameConfig,
    gameResult,
    simulateGameHandler,
    handlePlayerCountChange,
    handleCardCountChange,
  } = useCardGame()
  return (
    <div className="position-absolute bottom-0 top-0 start-0 end-0">
      <Container fluid={true} className="h-100">
        <Row className="justify-content-center h-100">
          <Col sm={8} lg={6} className="d-flex flex-column h-100">
            <RowCol>
              <div className="d-flex flex-column mt-2">
                <h1>Card Game</h1>
                <p className="pb-0 mb-0">A Card Game simulation by Zafer Dogan</p>
              </div>
            </RowCol>
            <RowCol>
              <hr />
            </RowCol>
            <RowCol>
              <GameForm
                loading={loading}
                gameConfig={gameConfig}
                onCardCountChange={handleCardCountChange}
                onPlayerCountChange={handlePlayerCountChange}
                onSimulate={simulateGameHandler}
              >
              </GameForm>
            </RowCol>
            <RowCol>
              <hr />
            </RowCol>
            { gameResult
              && (
                <RowCol
                  rowProps={{ className: 'flex-grow-1' }}
                  colProps={{ className: 'flex-grow-1' }}
                >
                  <div className="position-relative h-100">
                    <div className="position-absolute top-0 start-0 end-0" style={{ bottom: 16 }}>
                      <GameResult result={gameResult}></GameResult>
                    </div>
                  </div>
                </RowCol>
              )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CardGame
