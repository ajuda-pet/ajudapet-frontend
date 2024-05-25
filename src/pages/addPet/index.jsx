
import React, { useEffect, useState } from 'react';
import './index.css';
import Header from '../../components/molecules/header';
import SideBarHome from '../../components/molecules/sideBarHome';
import PetForm from '../../components/molecules/petForm';
import { Col, Form, Row, Button, Container, CardGroup, Modal } from 'react-bootstrap';
import CardComponent from '../../components/molecules/cards';
import petController from '../../controllers/pet.controller';
import { useForm } from 'react-hook-form';
import ToastComponent from '../../components/toast/ToastComponent';




function AddPet() {
    const methods = useForm()

    const [show, setShow] = useState(false)
    const [step, setStep] = useState(1)
    const [pets, setPets] = useState([])


    const handleSubmit = (payload) => {
        petController.create({ ...payload, picture: 'https://i.ibb.co/K0X9TtH/jojo.jpg'}).then(response => {
            if(response && response.success) {
                pets.push(response.info.pet)
            }

            handleClose()
        })
    }

    const handleNextStep = () => setStep(step + 1)
    const handleBackStep = () => setStep(step -1)

    const handleClose = () => {
        setShow(false)
        setStep(1)
    }

    const handleShow = () => setShow(true)
    

    useEffect(() => {
        petController.get().then((response) => {
            setPets(response);
        });
    }, []);


    return (
        <>
            <Header />
            <img src="./images/green.png" id='green' alt='mancha verde' />
            <img src="./images/yellow.png" id='yellow' alt='mancha amarela' />
            <img src="./images/pink.png" id='pink' alt='mancha rosa' />
            <img src="./images/black.png" id='black' alt='mancha preta' />
            {/* Sidebar */}
            <SideBarHome />

            {/* <div className='petForm'>
                <PetForm />
            </div> */}

            <div className='px-3'>
                <Container className='mt-5 ml-5 container-pets p-3 mb-5'>
                    {/* <ToastComponent variant={'warning'}></ToastComponent> */}

                    {/*⚠️ Popular o endereço dos PETs */}
                    <Col xs={12} className='mt-2'>
                        <Form.Select aria-label="Default select example" className='p-2'>
                            <option>📍 Cidade</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    <Row>
                        <Col xs={4} className='mt-2'>
                            <Form.Select aria-label="Default select example" className='select p-2'>
                                <option>🎂 Idade</option>
                                <option value="1">Bebê</option>
                                <option value="2">Adulto</option>
                                <option value="3">Idoso</option>
                            </Form.Select>
                        </Col>

                        <Col xs={4} className='mt-2'>
                            <Form.Select aria-label="Default select example" className='p-2'>
                                <option>📏 Tamanho</option>
                                <option value="1">Pequeno</option>
                                <option value="2">Médio</option>
                                <option value="3">Idoso</option>
                            </Form.Select>
                        </Col>


                        <Col xs={4} className='mt-2'>
                            <Form.Select aria-label="Default select example" className='select p-2'>
                                <option>🐾 Espécie</option>
                                <option value="1">Cachorro</option>
                                <option value="2">Gato</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className='mx-3 mt-2'>
                        <Button variant='secondary' className='d-flex align-items-center justify-content-center text-center px-5 w-100'>
                            <span class="material-symbols-outlined">
                                filter_alt
                            </span>
                            <span>
                                Filtrar
                            </span>
                        </Button>
                    </Row>


                    <hr class='my-4 bg-primary' />

                    <Row className='mx-3 mt-2'>
                        <Col lg={9} xs={12}>
                            <h3>🐾 Meus pets cadastrados: </h3>
                        </Col>
                        <Col lg={3} xs={12}>
                            <Button className='adopt-btn d-flex align-items-center justify-content-center px-5 w-100' onClick={handleShow}>
                                <span class="material-symbols-outlined">
                                    <span class="material-symbols-outlined">
                                        pet_supplies
                                    </span>
                                </span>
                                <span className='mx-2'>
                                    Cadastrar pet
                                </span>
                            </Button>
                        
                        </Col>
                    </Row>

                    <CardGroup className='mt-5' >
                        <Row>
                            {pets && pets.map((pet) => (
                                <>
                                    <Col md={4} sm={6}>
                                        <CardComponent key={pet.id} pet={pet} />
                                    </Col>
                                </>
                            ))}
                        </Row>
                    </CardGroup>
                </Container>

            </div>
            
            {/* Modal de cadastro de Pets */}
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>🐾 Cadastro de Pet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {step == 1 &&
                        <div className='petForm'>
                            <PetForm step={1} register={methods.register}/>
                        </div> 
                    }

                    {
                        step == 2 &&
                        <div className='petForm'>
                                <PetForm step={2} register={methods.register}/>
                        </div> 
                    }
                   
                </Modal.Body>
                <Modal.Footer>

                    {step < 2 && <>
                    <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                        <Button variant="primary" onClick={handleNextStep}>Próximo</Button>
                    
                    </>
                    }

                    {step == 2 && <>
                        <Button variant="secondary" onClick={handleBackStep}>Voltar</Button>
                        <Button onClick={methods.handleSubmit(handleSubmit)}>Cadastrar</Button>
                    </>
                    }
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default AddPet;