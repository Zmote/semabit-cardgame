import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link as RouterLink} from 'react-router-dom';
import {useLocation} from "react-router";
import Footer from "components/Footer";
import {PaddedContainerContext} from "../context/PaddedContainerContext";
import {Suspense, useMemo, useState} from "react";
import AnimatedOutlet from "../components/AnimatedOutlet";
import LoadingPage from "../components/LoadingPage";

const AppLayout = () => {
    const [padding, setPadding] = useState(true);
    const paddingContextProps = useMemo(() => ({padding, setPadding}), [padding])
    const location = useLocation();
    return (
        <>
            <Navbar sticky={"top"} variant={'dark'} className={'bg-dark'} expand="lg">
                <Container>
                    <Navbar.Brand as={RouterLink} to={'/'}>Semabit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey={"/home"} activeKey={location.pathname} className="me-auto">
                            <Nav.Link as={RouterLink} to="home" eventKey={"/home"}>Home</Nav.Link>
                            <NavDropdown active={location.pathname.startsWith("/games")} title="Games"
                                         id="basic-nav-dropdown">
                                <NavDropdown.Item as={RouterLink} to="games/card"
                                                  eventKey={"/games/card"}>Card</NavDropdown.Item>
                                <NavDropdown.Item as={RouterLink} to="games/multi"
                                                  eventKey={"/games/multi"}>Multiplayer</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={RouterLink} to="quotes" eventKey={"/quotes"}>Quotes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <PaddedContainerContext value={paddingContextProps}>
                <div style={{top: 56}} className={`position-absolute bottom-0 start-0 end-0 ${padding ? 'mt-2' : ''}`}>
                    <Suspense fallback={<LoadingPage />}>
                        <AnimatedOutlet/>
                    </Suspense>
                </div>
            </PaddedContainerContext>
            <Footer/>
        </>
    );
};

export default AppLayout;