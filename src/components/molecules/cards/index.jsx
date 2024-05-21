import React from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';

const CardComponent = (petData) => {
    return (
        <Card style={{ height: '16rem', marginLeft: '60px', marginBottom: '30px' }}>
            <Card.Img variant="top" width={'180px'} height={'170px'} style={{ border: '1px solid' }} alt='imagem do pet' src={'images/black.png'} />
            <Card.Body>
                <b><Card.Title style={{ marginTop: '5px' }}>{petData.name}</Card.Title></b>
                <Card.Text>
                    {petData.age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
