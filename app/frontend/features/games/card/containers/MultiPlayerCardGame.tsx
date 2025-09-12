import {useEffect} from "react";
import PlayerChannel from "channels/player";
import {multiPlayerUuid} from "channels/provider/uuid";
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";

const trimmtedId = multiPlayerUuid.substring(0, 5)

const MultiPlayerCardGame = () => {
    useEffect(() => {
        PlayerChannel.subscriptions.create({channel: 'PlayerChannel', game: 'Cards'}, {
            received() {
            },
        })
        return () => {
            PlayerChannel.disconnect();
        }
    }, [])
    return (
        <Container style={{top: 0, bottom: 40}} className={"position-absolute start-0 end-0 d-flex flex-column"}
                   fluid={true}>
            <Row className={"bg-primary"}>
                <Col>
                    <h2 className={'text-white ms-1 mb-1'}>Multiplayer Games</h2>
                </Col>
            </Row>
            <Row className={"flex-grow-1 border-top"}>
                <Col sm={4} md={3} className={"d-flex flex-column border-secondary-subtle border-end border-1 overflow-auto"}>
                    <Row className={"bg-secondary-subtle align-items-center"}>
                        <Col>
                            <h3 className={"p-0 m-0"}>Games</h3>
                        </Col>
                    </Row>
                    <Row className={"bg-light bg-opacity-50 flex-grow-1 position-relative border-top border-secondary-subtle border-1"}>
                        <Col className={"overflow-auto position-absolute top-0 start-0 end-0 bottom-0"}>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"p-0"}>
                            <Button variant={"primary"} className={"rounded-0 w-100"}>Create Game</Button>
                        </Col>
                    </Row>
                </Col>
                <Col sm={8} md={9} className={'d-flex flex-column overflow-auto'}>
                    <Row className={"bg-secondary-subtle align-items-center"}>
                        <Col>
                            <h3 className={"p-0 m-0"}>Chat</h3>
                        </Col>
                    </Row>
                    <Row className={"flex-grow-1 position-relative bg-light bg-opacity-50 border-top border-secondary-subtle border-1"}>
                        <Col className={"overflow-auto position-absolute top-0 start-0 end-0 bottom-0"}>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"p-0"}>
                            <Form>
                                <InputGroup>
                                    <InputGroup.Text className={"rounded-0"}>
                                        <strong>You</strong>
                                        <span className={"ms-1 text-success"}
                                              title={multiPlayerUuid}>#{trimmtedId}</span>
                                    </InputGroup.Text>
                                    <Form.Control aria-label="Chat input" placeholder={"Type to chat..."}/>
                                    <Button variant={'outline-success rounded-0'}>Send</Button>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default MultiPlayerCardGame