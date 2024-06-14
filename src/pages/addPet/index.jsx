
import React, { useEffect, useState } from 'react';
import './index.css';
import Header from '../../components/molecules/header';
import SideBarHome from '../../components/molecules/sideBarHome';
import PetForm from '../../components/molecules/petForm';
import { Col, Form, Row, Button, Container, CardGroup, Modal, Toast, Carousel } from 'react-bootstrap';
import CardComponent from '../../components/molecules/cards';
import petController from '../../controllers/pet.controller';
import { useForm } from 'react-hook-form';
import Load from '../../components/molecules/load/Load';
import { gerarNomeImagem } from '../../components/validators/arquivo';
import { storage } from '../../controllers/resgisterImg';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import NoContent from '../../components/organism/NoContent/NoContent';



function AddPet() {
    const ToastSuccess = (({ show, message }) => {
        return (
            <Toast bg='success' className='position-fixed top-0 end-0 m-4 text-white' style={{ zIndex: 9999 }} show={showToastSuccess} onClose={() => setShowToast(false)}>
                <Toast.Header>
                    <strong className="mr-auto">😸 Sucesso </strong>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        )
    })


    const ToastError = ({ show }) => {
        return (
            <Toast bg='danger' className='position-fixed top-0 end-0 m-4 text-white' style={{ zIndex: 9999 }} show={showToast} onClose={() => setShowToast(false)}>
                <Toast.Header>
                    <strong className="mr-auto">😿 Atenção</strong>
                </Toast.Header>
                <Toast.Body>Preencha todos os campos antes de avançar.</Toast.Body>
            </Toast>
        )
    }


    const [showToastSuccess, setShowToastSuccess] = useState(false)
    const [showToast, setShowToast] = useState(false)

    const [loading, setLoading] = useState(true)
    const methods = useForm()
    const filterMethods = useForm()

    const [addressCities, setAddressCities] = useState([])


    const [show, setShow] = useState(false)
    const [step, setStep] = useState(1)
    const [pets, setPets] = useState([])
    const [dataPet, setDataPet] = useState()

    const handleSubmitTwo = () =>{
        if (!dataPet) return;
        petController.create({ ...dataPet }).then(response => {
            if (response && response.success) {
                pets.push(response.info.pet)
                setShowToastSuccess(true)

                setTimeout(() => {
                    setShowToastSuccess(false)
                }, 3000)
            }
            setDataPet([]);
            handleClose();
        })
    }

    const handleSubmit = (payload) => {
        if (
            !payload.gender ||
            !payload.species ||
            !payload.size ||
            !payload.name ||
            !payload.description
        ) {

            setShowToast(true)
            setTimeout(() => { setShowToast(false) }, 3000)
            return
        }
        ;
        if(payload.picture) {
            let nomeImg = gerarNomeImagem();
            const sendfirebase = async () =>  {
                const storageRef = ref(storage, `pets/${nomeImg}`);
                await uploadBytes(storageRef, payload.picture);
                const url = await getDownloadURL(storageRef);

                payload.picture = url
                setDataPet(payload)
            }
            sendfirebase()
        }
                

    }

    const handleNextStep = () => {
        const payload = methods.getValues()

        if (step == 1) {
            if (!payload.adoptionPointId) {

                setShowToast(true)

                setTimeout(() => { setShowToast(false) }, 3000)
                return
            }
        }

        setStep(step + 1)
    }


    const handleBackStep = () => setStep(step - 1)

    const handleClose = () => {
        setShow(false)
        setStep(1)
    }

    const handleShow = () => setShow(true)

    const handleSubmitFilter = (params) => {
        setLoading(true)

        if (!params) {
            filterMethods.reset()
        }

        petController.get(params).then(response => {
            setPets(response)
            setLoading(false)
        })

        .catch(error =>  {
            console.error(error)
            setLoading(false)
        })

    }

    useEffect(() => {
        petController.get().then((response) => {
            const pets = response
            const cities = [...new Set(pets.map(pet => pet.adoptionPoint.addressCity))]

            setPets(pets)
            setAddressCities(cities)
            setLoading(false)
        })
    }, [])

    useEffect(()=>{
        handleSubmitTwo()
    }, [dataPet])

    return (
        <>


            {!loading && <> 
            <Header />
           
            {/* Sidebar */}
            <SideBarHome page='/addPet'/>

                <div className='px-3'>
                    <Container className='mt-4 ml-5 container-pets p-3 mb-5'>
                        <h2>
                            <img src='./images/pets-icon.png' width='50'></img> &nbsp;
                            <span>Pets Cadastrados</span>
                        </h2>

                        { pets && pets.length > 0 &&
                            <>
                            
                                <Col xs={12} className='mt-2'>
                                    <Form.Select aria-label="Default select example" className='p-2' {...filterMethods.register('addressCity')}>
                                        <option value=''>📍 Cidade</option>

                                        {addressCities.map(city => (
                                            <option key={city} value={city}>📍 {city}</option>
                                        ))}

                                    </Form.Select>
                                </Col>
                                <Row>
                                    <Col xs={4} className='mt-2'>
                                        <Form.Select aria-label="Default select example" className='select p-2' {...filterMethods.register('age')}>
                                            <option value=''>🎂 Idade</option>
                                            <option value="BABY">🎂 Bebê</option>
                                            <option value="ADULT">🎂 Adulto</option>
                                            <option value="OLD">🎂 Idoso</option>
                                        </Form.Select>
                                    </Col>

                                    <Col xs={4} className='mt-2'>
                                        <Form.Select aria-label="Default select example" className='p-2' {...filterMethods.register('size')}>
                                            <option value=''>📏 Tamanho</option>
                                            <option value="SMALL">📏 Pequeno</option>
                                            <option value="MEDIUM">📏 Médio</option>
                                            <option value="LARGE">📏 Grande</option>
                                        </Form.Select>
                                    </Col>


                                    <Col xs={4} className='mt-2'>
                                        <Form.Select aria-label="Default select example" className='select p-2' {...filterMethods.register('species')}>
                                            <option value=''>🐾 Espécie</option>
                                            <option value="DOG">🐾 Cachorro</option>
                                            <option value="CAT">🐾  Gato</option>
                                        </Form.Select>
                                    </Col>
                                </Row>

                                <Row className='mx-3 mt-2'>
                                    <Button className='d-flex align-items-center justify-content-center text-center px-5 w-100 adopt-btn' onClick={filterMethods.handleSubmit(handleSubmitFilter)}>
                                        <span class="material-symbols-outlined">
                                            filter_alt
                                        </span>
                                        <span>
                                            Filtrar
                                        </span>
                                    </Button>
                                    <Button variant='secondary' className='d-flex align-items-center justify-content-center text-center px-5 w-100 mt-2' onClick={() =>filterMethods.handleSubmit(handleSubmitFilter(''))}>
                                        <span class="material-symbols-outlined">
                                            ink_eraser
                                        </span>
                                        <span>
                                            Limpar
                                        </span>
                                    </Button>
                                </Row>

                                <CardGroup className='mt-5' >
                                    <Row style={{minWidth: '100%'}}>
                                        {pets && pets.map((pet) => (
                                            <Col md={4} sm={6}>
                                                <CardComponent key={pet.id} pet={pet} />
                                            </Col>
                                        ))}
                                    </Row>
                                </CardGroup>
                            </>
                        }


                        <hr class='my-4 bg-primary' />


                            { pets && !pets.length && 
                                <>
                                    <NoContent message='Logo teremos pets para adoção.'></NoContent>
                                </>
                            }


                    </Container>

                </div>
            </>
            }

            {
                loading && <Load></Load>
            }

            {/* Modal de cadastro de Pets */}
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>🐾 Cadastro de Pet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {step == 1 &&
                        <div className='petForm'>
                            <PetForm step={1} register={methods.register} />
                        </div>
                    }

                    {
                        step == 2 &&
                        <div className='petForm'>
                            <PetForm step={2} register={methods.register} />
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

            <ToastError message={'Preencha todos os campos'}></ToastError>
            <ToastSuccess message={'Pet cadastrado com sucesso.'}></ToastSuccess>
        </>

    )
}

export default AddPet;