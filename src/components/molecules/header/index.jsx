import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Button, Col, Offcanvas, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import './index.css'
import { Link } from 'react-router-dom'



const logout = () => {
    window.localStorage.removeItem('token')
    window.location.reload()
}

function Header() {
    const [showOffCanva, setOffCanva] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleOpenOffCanva = () => setOffCanva(true)
    const handleCloseOffCanva = () => setOffCanva(false)


    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token)
    }, []);

    return (
        <>
            <Navbar className='p-2' style={{ borderRadius: '2px', backgroundColor: ' #212f3f'}} expand="lg" data-bs-theme='dark'>
                <Container fluid>
                    <Navbar.Brand href="/"> <img src='./images/header-logo.png' width='210' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="" onClick={handleOpenOffCanva} />
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
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Header;