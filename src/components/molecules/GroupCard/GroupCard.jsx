import { useEffect, useState } from "react"
import { Badge, Button, Card, Col, Row, Toast } from "react-bootstrap"
import { GroupModal } from "../../Modals/GroupModal"

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
    const [groupModal, setGroupModal] = useState(false)

    const openGroupModal = () => setGroupModal(true)

    useEffect(() => {
        group.socialMedia.forEach(media => {
            if (media.plataform == 'INSTAGRAM') {
                media.url = `http://instagram.com/${media.account}`
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
            <GroupModal show={groupModal} setShow={setGroupModal} group={group}></GroupModal>

            <Card className='p-4 mt-5'>
                <Card.Img variant='top' src={group.picture || './images/ong-profile.jpg'} width='260' height='260'/>
                
                <Card.Title className='d-flex align-items-center my-2'>
                    <span>
                        {/* <Badge bg='dark'>{group.name}</Badge> */}
                        &nbsp; {group.name}
                    </span>
                </Card.Title>

                <Card.Body>
                    <Button onClick={openGroupModal} className='my-3 adopt-btn' style={{width: '100%'}}>Doe</Button>
                </Card.Body>

                <Card.Footer className='text-end'>
                    { instagram &&
                        <small className='text-muted' style={{cursor: 'pointer'}}>
                            <a className='anchor' href={instagram.url} target='_blank'>
                                @{instagram.account}
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