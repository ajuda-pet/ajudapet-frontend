import { useEffect, useState } from "react"
import { Badge, Button, Card, Col, Row, Toast } from "react-bootstrap"

const GroupCard = ({ group }) => {

    const ToastSuccess = (() => {
        return (
            <Toast bg='success' className='position-fixed top-0 end-0 m-4 text-white' style={{ zIndex: 9999 }} show={showCopyToast} onClose={() => setShowCopyToast(false)}>
                <Toast.Header>
                    <strong className="mr-auto">😸 Pix </strong>
                </Toast.Header>
                <Toast.Body>Copiado!</Toast.Body>
            </Toast>
        )
    })

    const [showCopyToast, setShowCopyToast] = useState(false)
    const [instagram, setInstagram] = useState()

    useEffect(() => {
        group.socialMedia.forEach(media => {
            if (media.plataform == 'INSTAGRAM') {
                setInstagram(media)
            }
        })
    }, [])

    const handleSetCopyToast = () => {
        setShowCopyToast(true)
        setTimeout(() => {
            setShowCopyToast(false)
        }, 3000)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(group.pix.key)
        handleSetCopyToast()
    }


    return (
        <>
            <Card className='p-4 mt-5'>
                <Card.Img variant='top' src={group.picture || './images/ong-profile.jpg'} width='260' height='260'/>
                
                <Card.Title className='d-flex align-items-center'>
                    <img src='./images/group-icon.png' width='35'></img> &nbsp;
                    <span>
                        <Badge bg='dark'>{group.name}</Badge>
                    </span>
                </Card.Title>

                <Card.Body>

                    <Row>
                        <Col>
                            <img src='./images/pix-icon.png's width='30'></img> &nbsp;
                            <strong className='mt-1'>Faça uma doação pix</strong>
                        </Col>
                    </Row>

                    { group.pix && 
                        <Row className='p-4 justify-content-center' onClick={handleCopy}>
                            <Badge bg='secondary' className='mb-1'>{group.pix.type}</Badge>
                            <Button className='mb-3 d-flex justify-content-between align-items-center adopt-btn' style={{color: 'white'}}>
                                <strong style={{fontSize: '13px'}}>{group.pix.key}</strong> &nbsp;
                                <img src='./images/copy-icon.png' width='25' alt='Copy Icon' />
                            </Button>
                        </Row>
                    
                    }
                </Card.Body>

                <Card.Footer className='text-end'>
                    { instagram &&
                        <small className='text-muted'>
                            <a className='anchor' href={instagram.url} target='_blank'>
                                <Badge bg='dark'>
                                    <img src='./images/instagram-footer-icon.png' width='25'></img>
                                    &nbsp;
                                    @{instagram.account}
                                </Badge>
                            </a>
                        </small>
                    }
                </Card.Footer>
            </Card>

            <ToastSuccess> </ToastSuccess>
        </>
    )
}

export default GroupCard