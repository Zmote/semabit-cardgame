import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import GameResult from "components/GameResult";
import {GameResult as Result} from 'types/game-result'
import {ChangeEvent, MouseEvent, useCallback, useMemo, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faPerson} from "@fortawesome/free-solid-svg-icons";
import {GameConfig} from "../../types/game-config";

const HomeIndex = () => {
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

    const playGameHandler = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true);
        fetch('/api/v1/games/card_game', {
            method: 'POST',
            headers: {
                'X-CSRF-Token': csrfToken,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(gameConfig)
        }).then(res => res.json())
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
            <Col sm={6}>
                <Row>
                    <Col>
                        <div className={"d-flex flex-column"}>
                            <h1>Hello to Semabit</h1>
                            <p className={"pb-0 mb-0"}>A Card Game by Zafer Dogan</p>
                        </div>
                    </Col>
                </Row>
                <hr/>
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
                                    <Button onClick={playGameHandler} variant={"primary"}>
                                        Play {loading ? <Spinner size={"sm"}></Spinner> : null}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <hr/>
                <Row className={'mt-2'}>
                    <Col>
                        <GameResult result={gameResult}></GameResult>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default HomeIndex;