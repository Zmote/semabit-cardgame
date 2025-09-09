import {Container, Nav, Navbar} from 'react-bootstrap';
import { Outlet, Link as RouterLink } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <>
            <Navbar sticky={"top"} variant={'dark'} className={'bg-dark'} expand="lg">
                <Container>
                    <Navbar.Brand as={RouterLink} to="/">Semabit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey="/home" activeKey={window.location.pathname} className="me-auto">
                            <Nav.Link as={RouterLink} to="/home" eventKey="/home">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className={"p-3"} fluid={true}>
                <Outlet />
            </Container>
        </>
    );
};

export default HomeLayout;