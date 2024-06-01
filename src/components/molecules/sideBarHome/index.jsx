import React, { useState } from 'react';
import './index.css'


import { Col, Row } from 'react-bootstrap'

const SideBarHome = ({ page }) => {
    const [showSidebar, setShowSidebar] = useState(true)

    return (
        <>
            <Row className='align-items-center d-none d-sm-flex'>
                <Col className='sidebar px-4'>
                    <a className={`circle ${window.location.pathname === '/grupos' ? 'home' : ''}`} href='/grupos'><img src='./images/home.png' width='30' alt='Ícone de home' title='Home' /></a>
                    <a className={`circle ${window.location.pathname === '/pets' ? 'home' : ''}`} href='/pets'><img src='./images/pet-icon-sidebar.png' width='30' alt='Ícone de animal de estimação' title='Adicionar Pet' /></a>
                    <a className={`circle ${window.location.pathname === '/pontos' ? 'home' : ''}`} href='/pontos'><img src='./images/location-icon-sidebar.png' width='30' alt='Ícone de ponto de adoção' title='Adicionar Ponto de Adoção' /></a>
                </Col>
            </Row>
            
        </>
    )
}

export default SideBarHome