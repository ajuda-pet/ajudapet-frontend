import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Alert, Badge, Card, ListGroup } from 'react-bootstrap';

const PointsMap = ({ points}) => {
    return (
        <div className="Home">
            <MapContainer center={[-32.0372, -52.0986]} zoom={14} style={{ height: '60vh', width: '100%' }} worldCopyJump={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {points && points.map((point, index) => (
                    <Marker key={index} position={[point.lat, point.lon]} icon={L.icon({
                        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    })}>
                        <Popup>
                            <ListGroup>
                                <ListGroup.Item>
                                    <h5>{point.name}</h5>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Alert variant='secondary'><strong>🐾 Razão Social: </strong>{point.description}</Alert>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <strong>Σ Pets: </strong>
                                    <span>{point.pets ? point.pets.length : 0}</span>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Badge bg='danger'> Endereço</Badge>&nbsp;&nbsp;
                                    {point.addressStreet}, {point.addressNumber}. &nbsp;{point.addressNeighborhood}. {point.addressCity}, {point.addressState}
                                </ListGroup.Item>
                            </ListGroup>

                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default PointsMap;
