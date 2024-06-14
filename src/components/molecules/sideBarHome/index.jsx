import React, { useState } from 'react';
import './index.css'


import { Col, Row } from 'react-bootstrap'

const SideBarHome = ({ page }) => {
    const [showSidebar, setShowSidebar] = useState(true)

    return (
        <>
            <Row className='align-items-center d-none d-sm-flex'>
                <Col className='sidebar px-4'>
                    <a className={`circle ${window.location.pathname === '/grupos' || window.location.pathname == '/' ? 'home' : ''}`} href='/grupos'><img src='./images/group-icon-sidebar.png' width='30' alt='Ícone de home' title='Grupos' /></a>
                    <a className={`circle ${window.location.pathname === '/pets' ? 'home' : ''}`} href='/pets'><img src='./images/pet-icon-sidebar.png' width='30' alt='Ícone de animal de estimação' title='Pets' /></a>
                    <a className={`circle ${window.location.pathname === '/pontos' ? 'home' : ''}`} href='/pontos'><img src='./images/location-icon-sidebar.png' width='30' alt='Ícone de ponto de adoção' title='Pontos de Adoção' /></a>
                </Col>
            </Row>
            
        </>
    )
}

export default SideBarHome