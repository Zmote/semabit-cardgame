import { Col, Row } from 'react-bootstrap'

import pc from '@/images/pc.png'
const Footer = () => {
  return (
    <footer className="footer w-100 border-top border-2 border-danger position-fixed bottom-0 start-0 end-0 bg-footer text-white px-3">
      <Row className="align-items-center align-content-center h-100">
        <Col className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img className="footer__logo shadow" alt="PC image" src={pc} />
            <span className="ms-2 border-start border-1 border-pink ps-2 flex-shrink-0">- Created by: Zafer Dogan</span>
          </div>
          <div>
            <span title="Copyright 2025 - All rights reserved">©</span>
            <span className="d-none d-sm-inline-block ms-1">Copyright 2025 - All rights reserved</span>
          </div>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
