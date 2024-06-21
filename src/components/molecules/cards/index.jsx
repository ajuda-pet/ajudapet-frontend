import React, { useState, useEffect } from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import pointsController from '../../../controllers/points.controller'
import { Alert, Badge, Button, Container, Image, ListGroup, Modal } from 'react-bootstrap';

const CardComponent = (petContent) => {

    const { pet } = petContent
    console.log(petContent);
    const [adoptPoints, setAdoptPoints] = useState();
    useEffect(() => {
        if (!adoptPoints) {
            pointsController.getById(pet.adoptionPointId).then((response) => {
                setAdoptPoints(response);
            }).catch((error) => {
                console.log(error);
            });
        }

    }, []);


    const genderHash = { 'MALE': 'Macho', 'FEMALE': 'Fêmea' }
    const ageHash = { 'BABY': 'Bebê', 'ADULT': 'Adulto', 'OLD': 'Idoso' }
    const sizeHash = { 'SMALL': 'Pequeno', 'MEDIUM': 'Médio', 'LARGE': 'Grande' }

    const petIcon = pet.species == 'DOG' ? '🐶' : '🐱'
    const genderIcon = pet.gender == 'MALE' ? '♂️' : '♀️'

    const date = new Date(pet.createdAt)
    const formatDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

    function formatPhoneNumber(phoneNumber) {
        // Remove todos os caracteres não numéricos
        const cleaned = phoneNumber.replace(/\D/g, '');
        return cleaned;
    }
    const redirectToWhatsApp = async () => {

        var petName = pet.name; // Substitua pelo nome do pet dinamicamente, se disponível
        var message = encodeURIComponent("Olá! Gostaria de mais informações para adotar um adorável pet chamado " + petName + ".");
        if (adoptPoints !== '') {
            // agora falta achar o grupo pelo id do ponto de adoção onde o pet está, para contato
            var phoneNumber = pet.group.phone + '';
            console.log(pet.group.phone)
            const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
            console.log(formattedPhoneNumber);

            // 55 é o código do BR
            const whatsappUrl = "https://wa.me/55" + formattedPhoneNumber + "?text=" + message;
            window.open(whatsappUrl, '_blank');
        }
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className='mx-3 mb-5 card d-flex flex-column'>
                <Card.Img variant="top" src={pet.picture} width='260' height='260/'/>
                <Card.Body>
                    <Card.Title>{petIcon} {pet.name}</Card.Title>

                    <Button className='adopt-btn mt-3' style={{width: '100%'}} onClick={handleShow}>
                        Saiba mais
                    </Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <strong>Localização: </strong>
                        &nbsp;&nbsp;
                        &nbsp;{pet.adoptionPoint.addressNeighborhood}. {pet.adoptionPoint.addressCity}, {pet.adoptionPoint.addressState}
                    </small>
                </Card.Footer>
            </Card>

            <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{petIcon} {pet.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container className='text-center'>
                        <Image src={pet.picture} thumbnail width='400' className="mx-auto mb-3" />
                        <Alert>🐾 {pet.description}</Alert>
                    </Container>



                    <ListGroup className='mt-4'>
                        <ListGroup.Item> <Badge bg="secondary">🎂 Idade&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Badge>&nbsp;&nbsp;{ageHash[pet.age]} </ListGroup.Item>
                        <ListGroup.Item> <Badge bg="secondary">📏 Tamanho</Badge>&nbsp;&nbsp;{sizeHash[pet.size]} </ListGroup.Item>
                        <ListGroup.Item> <Badge bg="secondary">{genderIcon} Gênero&nbsp;&nbsp;&nbsp;</Badge>&nbsp;&nbsp;{genderHash[pet.gender]} </ListGroup.Item>
                    </ListGroup>


                    <h5 className='mt-5'> Ponto de adoção: </h5>
                    <ListGroup className='mt-4'>
                        <ListGroup.Item> <Button className='alert-danger-button'>📍 Localização</Button>  
                        &nbsp;&nbsp;
                        {pet.adoptionPoint.addressStreet}, {pet.adoptionPoint.addressNumber}. 
                        &nbsp;{pet.adoptionPoint.addressNeighborhood}. {pet.adoptionPoint.addressCity}, {pet.adoptionPoint.addressState}
                        </ListGroup.Item>
                    </ListGroup>
                    </Modal.Body>


                <Modal.Footer>
                    <Button variant="danger" className='px-3 py-2' onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button className='whatsapp-button adoption-btn' onClick={redirectToWhatsApp}>
                        <img src='./images/whatsapp-icon.png' width='25'></img>
                        <span> Adotar </span>
                    </Button>

                </Modal.Footer>
            </Modal>

        </>
    )
}

export default CardComponent;