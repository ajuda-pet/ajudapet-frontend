import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useState } from 'react'
import { Button, Col, Offcanvas, Row } from 'react-bootstrap'
import './index.css'


 function Header()  {
    const [showOffCanva, setOffCanva] = useState(false)

    const handleOpenOffCanva = () => setOffCanva(true)
    const handleCloseOffCanva = () => setOffCanva(false)
    
    const handleLogin = () => {
        const { href: environment } = window.location
        let url = 'https://staging-ajudapet-admin-frontend.onrender.com/login'

        if (environment.includes('prod') || true ) {
            //url = 'https://ajudapet-admin-frontend.onrender.com'
        }

        window.location.assign(url)
    }


    return (
        <> 
            <Navbar className='p-2' style={{ borderRadius: '2px', backgroundColor: ' #212f3f'}} expand="lg" data-bs-theme='dark'>
                <Container fluid>
                    <Navbar.Brand href="/grupos"> <img src='./images/header-logo.png' width='210' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="" onClick={handleOpenOffCanva} />

                    <Nav.Link onClick={handleLogin} className='d-none d-lg-block'>
                        <Button className="d-flex align-items-center adopt-btn-login">
                            <span>Login &nbsp;&nbsp;</span>
                            <span className="material-symbols-outlined">login</span>
                        </Button>
                    </Nav.Link>
                </Container>
            </Navbar>

            <Offcanvas show={showOffCanva} onHide={handleCloseOffCanva} style={{ backgroundColor: '#212f3f'}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src='./images/header-logo.png' width='300'></img>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                        
                        <a href='/grupos' className='anchor'>
                            <Row className={`p-2 ${window.location.pathname == '/grupos' ? 'off-canva-item-target' : 'off-canva-item'}`}>
                                <Col xs={12}> 
                                    <img src='./images/home.png' width='30'></img> &nbsp;
                                    <span>Home</span>
                                </Col>
                            </Row>
                        </a>

                        <a href='/pets' className='anchor'>
                        <Row className={`p-2 ${window.location.pathname == '/pets' ? 'off-canva-item-target' : 'off-canva-item'}`}>
                                <Col xs={12}> 
                                    <img src='./images/pets.png' width='30'></img> &nbsp;
                                    <span>Pets</span>
                                </Col>
                            </Row>
                        </a>

                        <a href='/pontos' className='anchor'>
                        <Row className={`p-2 ${window.location.pathname == '/pontos' ? 'off-canva-item-target' : 'off-canva-item'}`}>
                                <Col xs={12}> 
                                    <img src='./images/location.png' width='30'></img> &nbsp;
                                    <span>Pontos</span>
                                </Col>
                            </Row>
                        </a>

                        <Row className='mt-2' onClick={handleLogin}>
                        <Button className='d-flex align-items-center adopt-btn-login'> 
                            <span className="material-symbols-outlined">login</span>
                            <span>Login &nbsp;&nbsp;</span>
                            </Button>    
                        </Row>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Header;