import React, { useState } from 'react';
import './index.css'


import { Col, Row } from 'react-bootstrap'

const SideBarHome = () => {
    const [showSidebar, setShowSidebar] = useState(true)

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    return (
        <>
            <Row className='align-items-center'>
                <Col className={`sidebar ${showSidebar ? '' : 'hidden'}`}>
                    <a className='circle home' href='/'><img src='./images/home.png' width='40' alt='Ícone de home' title='Home' /></a>
                    <a className='circle' href='/addPet'><img src='./images/pet-icon-sidebar.png' width='40' alt='Ícone de animal de estimação' title='Adicionar Pet' /></a>
                    <a className='circle' href='/addAdoptPoint'><img src='./images/location-icon-sidebar.png' width='40' alt='Ícone de ponto de adoção' title='Adicionar Ponto de Adoção' /></a>
                </Col>

                <Col className={`sub-sidebar d-flex justify-content-center ${showSidebar ? '' : 'left-0'}`} onClick={toggleSidebar}>
                    <span className={`${showSidebar ? 'zoom1' : 'zoom2'} material-symbols-outlined ${showSidebar ? 'rotate' : ''}`} style={{ fontSize: '40px', marginLeft: '35px', backgroundColor: '#e0dddd', borderRadius: 100 }}>
                        <img src='./images/arrow.png' width='35' />
                    </span>
                </Col>
            </Row>
        </>
    )
}

export default SideBarHome