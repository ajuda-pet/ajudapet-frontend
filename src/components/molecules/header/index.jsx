import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Button,Form } from 'react-bootstrap'
import './index.css'

function Header() {
    return (
        <Navbar style={{ borderRadius: '2px', backgroundColor: ' #212f3f'}} expand="lg" data-bs-theme='dark'>
            <Container fluid>
                <Navbar.Brand href="/"> <img src='./images/logo-sidebar.png' width='100'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        {/* <Nav.Link href  ="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}
                    </Nav>

                    <Nav className="d-flex" style={{ maxHeight: '100px', fontSize:'25px'}} navbarScroll>
                        <Nav.Link style={{fontSize: '25px'}} className='circle' href='/'>
                            <span class="material-symbols-outlined">
                                help
                            </span>
                        </Nav.Link>
                        <NavDropdown title="⚙️" id="navbarScrollingDropdown">
                            {/* <NavDropdown.Item className='circle' href="/">
                                Tema
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">
                                Action 2
                            </NavDropdown.Item> */}
                        </NavDropdown>
                        <Nav.Link className='circle' href="/">
                            <span style={{fontSize: '40px'}} className="material-symbols-outlined">
                                groups
                            </span>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;