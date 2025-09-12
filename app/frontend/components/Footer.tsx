import pc from "images/pc.png";
import {Col, Row} from "react-bootstrap";
const Footer = () => {
    return (
        <footer className={"footer w-100 border-top border-2 border-danger position-fixed bottom-0 start-0 end-0 bg-secondary text-white p-3"}>
            <Row className={"align-items-center align-content-center h-100"}>
                <Col className={"d-flex justify-content-between align-items-center"}>
                    <div className={"d-flex align-items-center"}>
                        <img className={"footer__logo shadow"} alt={"PC image"} src={pc}/>
                        <span className={"ms-2 border-start border-1 border-dark ps-2"}>- Created by: Zafer Dogan</span>
                    </div>
                    <span className={""}>© Copyright 2025 - All rights reserved</span>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;