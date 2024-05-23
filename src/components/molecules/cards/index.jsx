import React, { useEffect, useState } from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import { Button, Container, ListGroup, Modal } from 'react-bootstrap';

const CardComponent = (content) => {
    const { pet } = content
    
    const genderHash = { 'MALE': 'Macho', 'FEMALE': 'Fêmea' }
    const ageHash = {'BABY': 'Bebê', 'ADULT': 'Adulto', 'OLD': 'Idoso'}
    const sizeHash = { 'SMALL': 'Pequeno', 'MEDIUM': 'Médio', 'LARGE': 'Grande'}

    const petIcon = pet.species == 'DOG' ? '🐶' : '🐱'
    const genderIcon = pet.gender == 'MALE' ? '♂️' : '♀️'

    const date = new Date(pet.createdAt)
    const formatDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <Card className='mx-3 mt-5 card'>
                <Card.Img variant="top" src='./images/pet-model.jpg' />
                <Card.Body>
                    <Card.Title>{petIcon} {pet.name}</Card.Title>
                    <ListGroup variant="flush" className='mt-4'>
                        <ListGroup.Item>📍 Rio Grande, RS</ListGroup.Item>
                        <ListGroup.Item>🎂 {ageHash[pet.age]} </ListGroup.Item>
                        <ListGroup.Item>📏 {sizeHash[pet.size]} </ListGroup.Item>
                        <ListGroup.Item>{genderIcon} { genderHash[pet.gender]} </ListGroup.Item>
                    </ListGroup>
                    <Button variant='secondary' className='adopt-btn mt-5' onClick={handleShow}>
                        <strong>Quero adotar</strong>
                    </Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"><strong>Publicado em: </strong>{formatDate}</small>
                </Card.Footer>
            </Card>

            <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{petIcon} {pet.name} <Button variant='secondary'>ℹ️ Bicharada</Button></Modal.Title>
                </Modal.Header>
                    
                <Modal.Body>
                    <h3 className='mb-3'>🐾 Sobre</h3>
                    <Container>
                        <p className='ml-3'>{pet.description}</p>
                    </Container>

                    <ListGroup className='mt-4'>
                        <ListGroup.Item>📍 Rio Grande, RS</ListGroup.Item>
                        <ListGroup.Item>🎂 {ageHash[pet.age]} </ListGroup.Item>
                        <ListGroup.Item>📏 {sizeHash[pet.size]} </ListGroup.Item>
                        <ListGroup.Item>{genderIcon} {genderHash[pet.gender]} </ListGroup.Item>
                        <ListGroup.Item>🔗 @aaa</ListGroup.Item>
                    </ListGroup>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="success" className='adoption-btn' onClick={handleClose}>
                        Contato
                    </Button>
                </Modal.Footer>
            </Modal>
        
        </>
    )
}

export default CardComponent;