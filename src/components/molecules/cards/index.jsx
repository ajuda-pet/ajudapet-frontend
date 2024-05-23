import React from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import { Button, ListGroup } from 'react-bootstrap';



const CardComponent = (content) => {
    const { pet } = content

    const genderHash = { 'MALE': 'Macho', 'FEMALE': 'Fêmea' }
    const ageHash = {'BABY': 'Bebê', 'ADULT': 'Adulto', 'OLD': 'Idoso'}
    const sizeHash = { 'SMALL': 'Pequeno', 'MEDIUM': 'Médio', 'LARGE': 'Grande'}

    const petIcon = pet.specius == 'DOG' ? '🐶' : '🐱'
    const genderIcon = pet.gender == 'MALE' ? '♂️' : '♀️'
    
    return (
        <Card className='mx-3 mt-3 card'>
            <Card.Img variant="top" src='./images/pet-model.jpg' />
            <Card.Body>
                <Card.Title>{petIcon} {pet.name}</Card.Title>
                <ListGroup variant="flush" className='mt-4'>
                    <ListGroup.Item>📍 Rio Grande, RS</ListGroup.Item>
                    <ListGroup.Item>🎂 {ageHash[pet.age]} </ListGroup.Item>
                    <ListGroup.Item>{genderIcon} { genderHash[pet.gender]} </ListGroup.Item>
                </ListGroup>
                <Button variant='secondary' className='adopt-btn mt-5'><strong>Quero adotar</strong></Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted"><strong>Data do Post: </strong>12/05/2023</small>
            </Card.Footer>
        </Card>
    )
}

export default CardComponent;