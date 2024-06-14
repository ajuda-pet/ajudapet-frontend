import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Button, Col, ListGroup, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import groupController from '../../controllers/group.controller'

const PointsMap = () => {
    const [groups, setGroups] = useState([])

    const handleWhatsapp = (whatsapp) => {
        const phoneNumber = whatsapp.replace(/\D/g, '')
        
        const whatsappUrl = "https://wa.me/55" + phoneNumber
        window.open(whatsappUrl, '_blank')
    }

    useEffect(() => {
        groupController.get().then(response => {
            if (response && response.success) {
                const groups = response.info.groups

                groups.forEach(group => {
                    group.socialMedia.forEach(socialMedia => {
                        if (socialMedia.plataform == 'WHATSAPP') {
                            group.whatsapp = socialMedia.account
                        }
                    })
                })
                setGroups(groups)
            }
        })

    }, [])

    return (
        <center>
            <MapContainer center={[-32.0372, -52.0986]} zoom={3} style={{ height: '50vh', width: '95%' }} worldCopyJump={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {groups.map((group) => (
                    group.adoptionPoints.map((point, index) => (
                        <Marker key={`${group.id}-${index}`} position={[point.lat, point.lon]} icon={L.icon({
                            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowSize: [41, 41]
                        })}>
                            <Popup>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col xs={2}>
                                                <img src='./images/group-icon.png' width='30'></img>
                                            </Col>

                                            <Col>
                                                <h6 className='mt-2'>&nbsp;{group.name}</h6>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <strong>🏠 Nome do ponto: </strong>
                                        <span> {point.name}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>ℹ️ Razão Social: </strong><br />
                                        <p className='mt-2'>{point.description}</p>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <strong>📍 Endereço: </strong> <br/>
                                        {point.addressStreet}, {point.addressNumber}. &nbsp;{point.addressNeighborhood}. {point.addressCity}, {point.addressState}
                                    </ListGroup.Item>

                                    {group.whatsapp && <Button className='whatsapp-button adoption-btn mt-2' style={{ width: '100%' }} onClick={() => handleWhatsapp(group.whatsapp)}>
                                        <img src='./images/whatsapp-icon.png' width='25'></img>
                                        <span>&nbsp;&nbsp;Contato</span>
                                    </Button> }

                                </ListGroup>
                            </Popup>
                        </Marker>
                    ))
                ))}

            </MapContainer>
        </center> 
    );
}

export default PointsMap;
