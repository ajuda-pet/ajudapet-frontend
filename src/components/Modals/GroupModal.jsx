import { Alert, Badge, Button, Container, Image, ListGroup, ListGroupItem, Modal, Row } from "react-bootstrap"
import styles from './Modal.module.css'
import { useEffect, useState } from "react"
import PointsMap from "../../pages/pointsMap"

const GroupModal = ({ group, show, setShow }) => {
    const [instagram, setInstagram] = useState()
    const [whatsapp, setWhatsapp] = useState()

    const handleContact = () => {
        const phoneNumber = whatsapp.replace(/\D/g, '')
        window.open(`https://wa.me/55${phoneNumber}`, '_blank')
    }

    const handleInstagram = () => {
        window.open(`https://instagram.com/${instagram.account}`, '_blank')
    }


    const handleClose = () => setShow(false)

    useEffect(() => {
        if (group) {
            group.socialMedia.forEach(socialMedia => {
                if (socialMedia.plataform == 'INSTAGRAM') {
                    setInstagram(socialMedia)
                }

                if (socialMedia.plataform == 'WHATSAPP') {
                    setWhatsapp(socialMedia.account)
                }
            })
        }
    }, [])

    return (
        <>
        {group && 
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header> 
                    <img src='./images/group-icon.png' width={50}></img>
                    &nbsp; &nbsp;
                    <h4>{group.name}</h4>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                      {/*   <center>
                            <Image src={group.picture} height='300' style={{borderRadius: '30px'}}></Image>
                        </center> */}


                        <h4>📍 Pontos de Adoção do Grupo</h4>
                        <center> 
                            <PointsMap group={group}></PointsMap>
                        </center>

                        
                        <ListGroup className='my-4'>
                            <ListGroupItem className='my-1'>
                                <Alert variant='primary'><strong>Descrição: </strong>{group.description}</Alert>
                            </ListGroupItem>
                            <ListGroupItem>
                                    <img src='./images/pix-icon.png' width='30'></img> &nbsp;
                                    <span>
                                        <Badge bg='info' className='p-2'> {group.pix.type} </Badge> &nbsp;
                                        {group.pix.key}
                                    </span>
                            </ListGroupItem>

                            <ListGroupItem>
                                <img src='./images/instagram.png' width='30'></img> &nbsp;
                                    {instagram && <span style={{cursor: 'pointer'}} onClick={handleInstagram}><Badge className='p-2' bg='secondary'>@&nbsp;{instagram.account}</Badge></span>}
                            </ListGroupItem>
                        </ListGroup>
                    </Container>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant='danger' onClick={handleClose}>
                        Fechar
                    </Button>
                        <Button className='whatsapp-button adoption-btn' onClick={handleContact}>
                        <img src='./images/whatsapp-icon.png' width='25'></img> &nbsp;
                        <span> Contato </span>
                    </Button>
                </Modal.Footer>

            </Modal>
        }
        </>
    )
}

export { GroupModal }
