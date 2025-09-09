import {Button, Col, Row, Spinner} from "react-bootstrap";
import GameResult from "components/GameResult";
import {GameResult as Result} from 'types/game-result'
import {MouseEvent, useCallback, useMemo, useState} from "react";

const HomeIndex = () => {
    const csrfToken = useMemo<string>(() => {
        return document.querySelector<HTMLMetaElement>("meta[name='csrf-token']")?.content ?? ''
    }, [])
    const [loading, setLoading] = useState<boolean>(false);
    const [gameResult, setGameResult] = useState<Result>();

    const playGameHandler = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true);
        fetch('/api/v1/games/card_game', {
            method: 'POST',
            headers: {
                'X-CSRF-Token': csrfToken
            },
            body: JSON.stringify({})
        }).then(res => res.json())
            .then((result: Result) => {
            setGameResult(result);
        }).catch((err: Error) => {
            console.log(err);
        }).then(() => {
            setLoading(false);
        })
    }, [])

    return (
        <>
            <Row>
                <Col sm={12}>
                    <div className={"d-flex flex-column justify-content-center align-items-center align-content-center"}>
                        <h1>Hello to Semabit</h1>
                        <p>A Card Game by Zafer Dogan</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={3}></Col>
                <Col sm={6}>
                    <Row>
                        <Col sm={12}>
                            <div className={"d-flex justify-content-center align-items-center align-content-center"}>
                                <Button onClick={playGameHandler} variant={"primary"}>
                                    Play { loading ? <Spinner size={"sm"}></Spinner> : null}
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row className={'mt-2'}>
                        <Col sm={12}>
                            <div className={"d-flex justify-content-center align-items-center align-content-center"}>
                                <GameResult result={gameResult}></GameResult>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm={3}></Col>
            </Row>
        </>
    )
}

export default HomeIndex;