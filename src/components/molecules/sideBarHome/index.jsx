import React, { useState } from 'react';
import './index.css'


import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const SideBarHome = ({ page }) => {
    const navigate = useNavigate()

    const handleGroupsPage = () => navigate('/grupos')
    const handlePetsPage = () => navigate('/pets')
    const handlePointsPage = () => navigate('/pontos')

    return (
        <>
            <Row className='align-items-center d-none d-sm-flex'>
                <Col className='sidebar px-4'>
                    <a className={`circle ${window.location.pathname === '/grupos' || window.location.pathname == '/' ? 'home' : ''}`} onClick={handleGroupsPage}><img src='./images/group-icon-sidebar.png' width='30' alt='Ícone de home' title='Grupos' /></a>
                    <a className={`circle ${window.location.pathname === '/pets' ? 'home' : ''}`} onClick={handlePetsPage}><img src='./images/pet-icon-sidebar.png' width='30' alt='Ícone de animal de estimação' title='Pets' /></a>
                    <a className={`circle ${window.location.pathname === '/pontos' ? 'home' : ''}`} onClick={handlePointsPage}><img src='./images/location-icon-sidebar.png' width='30' alt='Ícone de ponto de adoção' title='Pontos de Adoção' /></a>
                </Col>
            </Row>
            
        </>
    )
}

export default SideBarHome