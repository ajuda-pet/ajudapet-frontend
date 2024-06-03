import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pointsController from '../../controllers/points.controller';

function PointsMap() {
    const [points, setPoints] = useState([]);

    useEffect(() => {
        pointsController.get().then((response) => {
            console.log(response.info.adoptionPoints)
            setPoints(response.info.adoptionPoints);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div className="Home">
            <MapContainer center={[-32.0372, -52.0986]} zoom={13} style={{ height: '100vh', width: '100%' }} worldCopyJump={true}>
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
                            <span>{`Lat: ${point.lat}, Lon: ${point.lon}`}</span>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default PointsMap;
