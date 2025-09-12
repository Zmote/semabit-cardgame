import {ChangeEvent, MouseEvent, useCallback, useMemo, useState} from "react";
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faPerson} from "@fortawesome/free-solid-svg-icons";

import GameResult from "../components/GameResult";
import {GameResult as Result, GameConfig} from '../types/card'
import {CardService} from "../services/card";

const CardGame = () => {
    const csrfToken = useMemo<string>(() => {
        return document.querySelector<HTMLMetaElement>("meta[name='csrf-token']")?.content ?? ''
    }, [])
    const [loading, setLoading] = useState<boolean>(false);
    const [gameConfig, setGameConfig] = useState<GameConfig>(() => {
        return {card_count: 5, player_count: 4}
    });
    const [gameResult, setGameResult] = useState<Result>();

    const handleCardCountChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setGameConfig({
            ...gameConfig,
            card_count: Number(e.target.value)
        })
    }, [gameConfig])

    const handlePlayerCountChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setGameConfig({
            ...gameConfig,
            player_count: Number(e.target.value)
        })
    }, [gameConfig])

    const simulateGameHandler = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true);
        CardService.simulateGame(gameConfig, csrfToken)
            .then((result: Result) => {
                setGameResult(result);
            }).catch((err: Error) => {
            console.log(err);
        }).then(() => {
            setLoading(false);
        })
    }, [gameConfig])

    return (
        <Row className={"justify-content-center"}>
            <Col sm={8} md={6}>
                <Row>
                    <Col>
                        <div className={"d-flex flex-column"}>
                            <h1>Card Game</h1>
                            <p className={"pb-0 mb-0"}>A Card Game simulation by Zafer Dogan</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className={"d-grid gap-2"}>
                            <Row>
                                <Col>
                                    <Form.Label>
                                        <FontAwesomeIcon icon={faFile}/>Cards
                                        <span className={"ms-1"}>({gameConfig.card_count})</span>
                                    </Form.Label>
                                    <Form.Range min={2}
                                                max={10}
                                                defaultValue={gameConfig.card_count}
                                                step={1}
                                                onChange={handleCardCountChange}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>
                                        <FontAwesomeIcon icon={faPerson}/>Players
                                        <span className={"ms-1"}>({gameConfig.player_count})</span>
                                    </Form.Label>
                                    <Form.Range min={2}
                                                max={10}
                                                defaultValue={gameConfig.player_count}
                                                step={1}
                                                onChange={handlePlayerCountChange}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={"d-grid"}>
                                    <Button onClick={simulateGameHandler}
                                            variant={"primary"}>
                                        Play {loading ? <Spinner size={"sm"}></Spinner> : null}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <GameResult result={gameResult}></GameResult>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default CardGame;