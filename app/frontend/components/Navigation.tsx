import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useLocation } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()
  return (
    <Navbar sticky="top" variant="dark" className="bg-dark" expand="lg">
      <Container>
        <Navbar.Brand as={RouterLink} to="/">Semabit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav defaultActiveKey="/home" activeKey={location.pathname} className="me-auto">
            <Nav.Link as={RouterLink} to="home" eventKey="/home">Home</Nav.Link>
            <NavDropdown
              active={location.pathname.startsWith('/games')}
              title="Games"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                as={RouterLink}
                to="games/card"
                eventKey="/games/card"
              >
                Card
              </NavDropdown.Item>
              <NavDropdown.Item
                as={RouterLink}
                to="games/multi"
                eventKey="/games/multi"
              >
                Multiplayer
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={RouterLink} to="quotes" eventKey="/quotes">Quotes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navigation
