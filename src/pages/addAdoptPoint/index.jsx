
import React, { useEffect, useState } from 'react';
import './index.css';
import { useForm } from 'react-hook-form';
import { Button, Container, Modal, Toast } from 'react-bootstrap';
import Header from '../../components/molecules/header';
import SideBarHome from '../../components/molecules/sideBarHome';
import PointTable from '../../components/molecules/pointTable/PointTable';
import pointsController from '../../controllers/points.controller';
import Load from '../../components/molecules/load/Load';
import PointsMap from '../pointsMap';


const AddAdoptPoint = () => {
    const ToastSuccess = (({ show, message }) => {
        return (
            <Toast bg='success' className='position-fixed top-0 end-0 m-4 text-white' style={{ zIndex: 9999 }} show={showToastSuccess} onClose={() => setShowToast(false)}>
                <Toast.Header>
                    <strong className="mr-auto">😸 Sucesso </strong>
                </Toast.Header>
                <Toast.Body>{ message }</Toast.Body>
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


    const [loading, setLoading] = useState(true)
    const methods = useForm()

    const [showToastSuccess, setShowToastSuccess] = useState(false)
    const [showToast, setShowToast] = useState(false);
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)

    const handleClose = () => {
        setShow(false)
    }

    const handleSubmit = (payload) => {
        payload.addressCountry = 'BR'

        const { 
            postalCode, 
            addressState, 
            addressCity,
            addressNeighborhood,
            addressStreet, 
            addressNumber
         } = payload

        if (
            !postalCode ||
            !addressState ||
            !addressCity ||
            !addressNeighborhood ||
            !addressStreet ||
            !addressNumber
        ) {
            setShowToast(true)
            return;
        }


        pointsController.create(payload).then(response => {
            if (response && response.success) {
                const point = response.info.adoptionPoint
                const date = new Date(point.createdAt)

                point.createdAt = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
                points.push(point)

                setShowToastSuccess(false)
                handleClose()
            }
        })
    }

    useEffect(() => {
        let timer;
        if (showToast) {
            timer = setTimeout(() => {
                setShowToast(false)
                setShowToastSuccess(false)
            }, 2000)
        }

        return () => clearTimeout(timer);
    }, [showToast]);


    const [points, setPoint] = useState([])

    useEffect(() => {

        pointsController.get().then(response => {
            if (response && response.success) {
                const points = response.info.adoptionPoints

                points.forEach(point => {
                    const date = new Date(point.createdAt)
                    point.createdAt = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

                })
                setPoint(points)

                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            }
        })
    }, [])

    
    return (

        <>
            { !loading && <> 
                <Header />
                
            {/*  |<div className='pointForm'>
                    <PointForm />
                </div> */}
                {/* Sidebar */}
                <SideBarHome page={'/addAdoptPoint'}/>

                {/* Container dos pets */}
                
                    <Container className='mt-4 ml-5 container-pets p-3 mb-5'>
                        <h2>📍 Pontos de Adoção </h2>
                        <hr class='my-4 bg-primary' />

                        {/* Tabela de pontos de adoção */}
                        <PointsMap points={points}></PointsMap>
                        
                        <Button className='d-flex align-items-center justify-content-center text-center px-5 w-100 my-4 adopt-btn' onClick={handleShow}>
                            <span className="material-symbols-outlined" >
                                location_on
                            </span> &nbsp;&nbsp;
                            <span>Saiba mais</span>
                        </Button>


                    </Container>
                </>
            }

            { loading &&
                <Load condition={loading}></Load>
                
            }

            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>📍 Tabela de Pontos de Adoção</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PointTable points={points}/>
                </Modal.Body>
                <Modal.Footer>
                        <Button variant='danger' onClick={handleClose}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        </>

        

    )
}

export default AddAdoptPoint;