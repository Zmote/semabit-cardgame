import {Col, Container, Row, Spinner} from "react-bootstrap";

const LoadingPage = () => {
    return (
        <Container className={"position-absolute top-0 bottom-0 start-0 end-0 bg-transparent"} fluid={true}>
            <Row className={"h-100 justify-content-center align-items-center"}>
                <Col className={"d-flex flex-column align-content-center align-items-center"} sm={6}>
                    <div className={"d-flex flex-column align-content-center " +
                        "align-items-center p-4 bg-secondary-subtle rounded-5 shadow-lg"}>
                        <Spinner style={{width: "8rem", height: "8rem"}}  variant={"primary"} animation={"grow"}></Spinner>
                        <h1 className={"font-semabit font-semabit-bold mt-4"}>Loading Page</h1>
                        <p className={"lead"}>We will be with you shortly...</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default LoadingPage