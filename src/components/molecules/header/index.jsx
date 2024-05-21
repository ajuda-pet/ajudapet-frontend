import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './index.css'

const logout = () => {
    window.localStorage.removeItem('token')
    window.location = '/login'
}

function Header() {
    return (
        <Navbar style={{ borderRadius: '2px', backgroundColor: ' #212f3f'}} expand="lg" data-bs-theme='dark'>
            <Container fluid>
                <Navbar.Brand href="/"> <img src='./images/header-logo.png' width='210'/></Navbar.Brand>
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

                    <Nav className="d-flex" style={{ maxHeight: '100px', fontSize:'25px',  marginLeft:'40px'}} navbarScroll>
                        <Nav.Link style={{fontSize: '25px', marginTop: '5px'}} className='circle' href='/about'>
                            <span class="material-symbols-outlined">
                                help
                            </span>
                        </Nav.Link>
                        <NavDropdown className='' title={<span><img src='./images/group-icon.svg' alt="Ícone de Grupo" style={{ width: '35px' }} /></span>} id="navbarScrollingDropdown">
                            <NavDropdown.Item href='/login'>
                                Logar
                            </NavDropdown.Item>
                            <NavDropdown.Item className='circle' onClick={logout}>
                                Sair
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;